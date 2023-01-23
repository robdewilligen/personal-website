<template>

    <div class="input-view">
        <div v-if="hasPrefix" class="prefix">
            <slot name="prefix"><span>{{ prefix }}</span></slot>
        </div>

        <div class="icon" v-if="icon || $slots.icon">
            <i :class="icon">
                <slot name="icon"></slot>
            </i>
        </div>

        <input
            class="rw-input"
            :type="type"
            :disabled="disabled"
            :placeholder="placeholder"
        >

        <div v-if="hasSuffix" class="suffix">
            <slot name="suffix"><span>{{ suffix }}</span></slot>
        </div>
    </div>
</template>

<script>

import { Options, Vue } from 'vue-class-component';

export default Options({

    name: 'rw-input',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        disabled: Boolean,
        icon: String,
        prefix: String,
        suffix: String,
        placeholder: String,
    }
})(
    class Input extends Vue {

        get hasPrefix(){
            return this.prefix || this.$slots.prefix;
        }

        get hasSuffix(){
            return this.suffix || this.$slots.suffix;
        }
    }
)
</script>

<style src="@/scss/components/control/Input.scss" lang="scss"/>