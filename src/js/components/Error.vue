<template>

    <div class="error-page">
        <h1>Deze pagina bestaat niet</h1>
        <p>Neem contact op met Rob de Willigen wanneer deze melding zich blijft voordoen.</p>
    </div>

</template>

<script>

import { Options, Vue } from "vue-class-component";


export default Options({
    name: "Error"
})(
    class Error extends Vue {

    }
);

</script>