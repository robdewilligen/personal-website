<template>

    <div class="dropdown-view" :class="classes">
        <slot></slot>
        <i class="bx bx-chevron-down" />
    </div>

</template>

<script>

import { Options, Vue } from 'vue-class-component';

export default Options({

    name: 'Dropdown',
    props: {
        class: String,
    }
})(
    class Dropdown extends Vue {


    }
)
</script>

<style src="@/scss/ui/dropdown.scss" lang="scss" />