<template>

    <div class="rw-stack">
        <div @mouseenter="isOpen = true" @click="isOpen = !isOpen" class="stack-heading">
            <slot></slot>
            <i :class="isOpen ? 'bx bx-chevron-left' : 'bx bx-chevron-down'" />
        </div>

        <div v-if="isOpen" class="stack-block" @mouseleave="isOpen = false">
            <div class="stack-item" @click="action" v-for="option in options">
                <span>{{ option.label }}</span>
            </div>
        </div>

    </div>

</template>

<script>

import { Options, Vue } from 'vue-class-component';

export default Options({
    name: 'Stack',
    props: {
        action: [String, Function],
        options: [String, Array],
    }
})(
    class StackType extends Vue {

        isOpen = false;
    }
)
</script>

<style src="@/scss/components/control/Stack.scss" lang="scss" />