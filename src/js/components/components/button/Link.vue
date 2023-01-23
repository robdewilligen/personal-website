<template>

    <router-link v-if="routeObject" class="rw-link" :to="routeObject" :class="{ disabled }" ref="a"
                 @click="onClick" :data-action="action">

        <div v-if="iconVisible">
            <i :class="icon">
                <slot name="icon"></slot>
            </i>
        </div>
    </router-link>

    <a v-else class="rw-link" :href="href || '#'" ref="a"
       :class="{ disabled, silent }"
       @click="onClick" :data-action="action">
        <div>
            <i :class="logo"/>
            <slot></slot>
        </div>
    </a>

</template>

<script>

import { Options, Vue } from 'vue-class-component';

export default Options({
    name: 'Link',
    props: {
        logo: String,
        href: String,
        route: String,
        to: Object,
        action: String,
        disabled: [Boolean, Number],
        silent: Boolean,
    },
    emits: ['click']
})(
    class Link extends Vue {

        getElement(){

            return this.$refs.a;
        }

        get routeObject(){

            if(this.to){
                return this.to;
            }
            else if(this.route){
                return { name: this.route };
            }

            return null;
        }

        onClick(e){

            if(this.disabled){
                e.preventDefault();
                return;
            }

            const $a = this.$refs.a.$el || this.$refs.a;

            $a.blur();

            if(!this.href){
                e.preventDefault();
            }

            this.$emit('click', e);
        }
    }
)
</script>

<style src="@/scss/components/button/Link.scss" lang="scss"/>