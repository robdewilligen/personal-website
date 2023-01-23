<template>
    <div class="capital-view">

        <div class="profile-picture">
            <img class="shadow" src="/img/rw.png" alt="profile-picture" >
            <h2>Rob de Willigen</h2>
            <div class="social-links">
                <rw-link v-for="(item) in socials" :logo="item.icon" :href="item.link" target="_blank" />
            </div>
        </div>

    </div>
</template>

<script>

import { Options, Vue } from 'vue-class-component';

export default Options({
    name: 'Capital'
})(
    class Capital extends Vue {

        socials = [
            {
                name: "Github",
                icon: "bx bxl-github",
                link: "https://github.com/robdewilligen"
            },
            {
                name: "Snapchat",
                icon: "bx bxl-snapchat",
                link: "https://www.snapchat.com/add/rwilligen3"
            },
            {
                name: "Whatsapp",
                icon: "bx bxl-whatsapp",
                link: "https://wa.me/629859380"
            },
            {
                name: "Instagram",
                icon: "bx bxl-instagram",
                link: "https://www.instagram.com/tnc_rob/"
            },
            {
                name: "Spotify",
                icon: "bx bxl-spotify",
                link: "https://open.spotify.com/user/stuiterbink?si=OyT3vqcKQuS-tYwwAk3Kzw"
            },
            {
                name: "LinkedIn",
                icon: "bx bxl-linkedin",
                link: "https://www.linkedin.com/in/rob-de-willigen/"
            },
        ]
    }
)
</script>

<style src="@/scss/layout/Capital.scss" lang="scss"/>
