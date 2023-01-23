<template>

    <div class="rw-link-button" :class="silent ? 'silent' : ''">
        <slot></slot>
    </div>

</template>

<script>

import { Options, Vue } from 'vue-class-component';
// TODO: Link with vue router, scrollto etc.
export default Options({
    name: 'LinkButton',
    props: {
        silent: Boolean,
    }
})(
    class LinkButton extends Vue {

    }
)
</script>

<style src="@/scss/components/button/LinkButton.scss" lang="scss"/>