<template>
    <div class="header-view">
        <h1>Rob de Willigen</h1>
        <div class="header-links">
            <rw-link-button>Nieuws</rw-link-button>
            <rw-stack :action="scrollToValue" :options="stackOptions">Stack</rw-stack>
            <rw-button>Stuur een bericht</rw-button>
        </div>

    </div>
</template>

<script>

import { Options, Vue } from 'vue-class-component';
import Stack from '@/js/components/components/control/Stack.vue'

//Enums & Filters
import { StackFilter } from '@rw/common/filters/index.js'
import { StackType } from '@rw/common/enums/index.js'

export default Options({

    name: 'Header',
    components: [
        Stack,
    ]
})(
    class Header extends Vue {

        get stackOptions() {

            return Object.values(StackType).map(value => ({

                label: StackFilter(value),
                value
            }));
        }

        scrollToValue(){
            //TODO: Scroll to the element containing ID equal to value (scroll to id= vue.js/scroll to id= laravel)
        }

    }
)
</script>

<style src="@/scss/layout/Header.scss" lang="scss" />