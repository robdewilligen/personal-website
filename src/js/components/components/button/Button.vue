<template>

    <div class="rw-button">
        <slot></slot>
    </div>

</template>

<script>

import { Options, Vue } from 'vue-class-component';

export default Options({
    name: 'Button',
    props: {

    }
})(
    class Button extends Vue {

    }
)
</script>

<style src="@/scss/components/button/Button.scss" lang="scss"/>