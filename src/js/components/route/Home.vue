<template>
    <div class="app-view">
        <Capital />


    </div>
</template>

<script>
import { Vue, Options } from 'vue-class-component';

export default Options({

    name: 'Home',
})(
    class Home extends Vue {


    }
);

</script>

<style src="@/scss/route/Home.scss" lang="scss" />