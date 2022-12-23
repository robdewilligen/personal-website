<template>
    <div ref="header" class="header-view">
        <h1>Rob de Willigen</h1>
        <div class="header-links">
            <rw-link class="rw-link-button">Nieuws</rw-link>
            <rw-stack :action="scrollToValue" :options="stackOptions">Stack</rw-stack>
            <rw-button>Stuur een bericht</rw-button>
        </div>

    </div>
</template>

<script>

import { Options, Vue } from 'vue-class-component';

//Enums & Filters
import { StackFilter } from '@rw/common/filters/index.js'
import { StackType } from '@rw/common/enums/index.js'

export default Options({

    name: 'Header',
    watch: {}
})(
    class Header extends Vue {

        didScroll = false;

        get stackOptions(){

            return Object.values(StackType).map(value => ({

                label: StackFilter(value),
                value
            }));
        }

        // Animated Header
        created(){
            window.addEventListener('scroll', () => {
                if(!this.didScroll){
                    this.didScroll = true;
                    setTimeout(this.scrollPage, 100);
                }
            }, false);
        }

        scrollPage(){
            if(this.scrollY() >= 100){
                // Show
                this.$refs.header.classList.remove('hide');
                this.$refs.header.classList.add('show');
            }
            else {
                // Hide
                this.$refs.header.classList.remove('show')
                this.$refs.header.classList.add('hide')
            }

            this.didScroll = false;
        }

        scrollY(){
            return window.pageYOffset || document.documentElement.scrollTop;
        }

        scrollToValue(){

            //TODO: Scroll to the element containing ID equal to value (scroll to id= vue.js/scroll to id= laravel)
        }

    }
)
</script>

<style src="@/scss/layout/Header.scss" lang="scss"/>