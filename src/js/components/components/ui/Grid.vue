<template>

    <div class="rw-grid">
        <slot></slot>
    </div>

</template>

<script>

import { Options, Vue } from 'vue-class-component';

export default Options({
    name: 'Grid'
})(
    class Grid extends Vue {

    }
)
</script>

<style src="@/scss/components/ui/Grid.scss" lang="scss"/>