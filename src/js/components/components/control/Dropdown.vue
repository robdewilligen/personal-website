<template>

    <div class="rw-dropdown" :class="classes">
        <slot></slot>
        <i class="bx bx-chevron-down" />

        <template>
            <div>
                <rw-input />
            </div>
        </template>
    </div>

</template>

<script>

import { Options, Vue } from 'vue-class-component';

export default Options({

    name: 'rw-dropdown',
    props: {
        classes: String,
        options: Array,
    }
})(
    class Dropdown extends Vue {


    }
)
</script>

<style src="@/scss/components/control/Dropdown.scss" lang="scss" />