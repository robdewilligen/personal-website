<template>

    <router-link v-if="routeObject" :to="routeObject" class="rw-link" :class="{ disabled }" ref="a"
                 @click="onClick" :data-action="action">

        <div class="link-icon" v-if="iconVisible">
            <i :class="icon">
                <slot name="icon"></slot>
            </i>
        </div>

        <slot></slot>

    </router-link>

    <a v-else :href="href || '#'" ref="a"
       class="rw-link" :class="{ disabled }"
       @click="onClick" :data-action="action">

        <div class="link-icon" v-if="iconVisible">
            <i :class="icon">
                <slot name="icon"></slot>
            </i>
        </div>

        <slot></slot>
    </a>

</template>

<script>

import { Vue, Options } from 'vue-class-component';

export default Options({
    name: 'Link',
    props: {
        icon: String,
        route: String,
        to: Object,
        href: String,
        action: String,
        disabled: [Boolean, Number],
        hideIcon: [Boolean, Number]
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

        get iconVisible(){

            return (this.icon || this.$slots.icon) && !this.hideIcon;
        }
    }
);

</script>
<style src="@/scss/components/button/Link.scss" lang="scss"></style>