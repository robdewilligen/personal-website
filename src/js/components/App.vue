<template>

    <router-view/>

</template>

<script>

import { Options, Vue } from 'vue-class-component';

export default Options({

    name: 'App'
})(
    class App extends Vue {

    }
);
</script>
