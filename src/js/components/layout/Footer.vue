<template>
    <div class="footer-view">
        <div class="link-group">
            <rw-link v-for="link in footerLinks" :href="link.url">{{ link.name }}</rw-link>
        </div>

        <div class="link-group">
            <rw-link v-for="link in footerLinks2" :href="link.url">{{ link.name }}</rw-link>
        </div>

        <div class="link-group">
            <rw-link v-for="link in socials" :href="link.url">{{ link.name }}</rw-link>
        </div>

        <div class="about-me">
            <h4>Over mij</h4>
            <p>
                Hoi, ik ben Rob. Ik ben een 3e jaars student en volg de opleiding Creative media and game technologies aan de Hogeschool Rotterdam.
            </p>
        </div>
    </div>
</template>

<script>

import { Vue, Options } from 'vue-class-component';

export default Options({

    name: 'Footer'
})(
    class Footer extends Vue {

        footerLinks = [
            {
                name: 'link 1',
                url: 'link1'
            },

        ];

        footerLinks2 = [
            {
                name: 'link 1',
                url: 'link1'
            },

        ];

        socials = [
            {
                name: "Github",
                url: "https://github.com/robdewilligen"
            },
            {
                name: "Snapchat",
                url: "https://www.snapchat.com/add/rwilligen3"
            },
            {
                name: "Whatsapp",
                url: "https://wa.me/0629859380"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/tnc_rob/"
            },
            {
                name: "Spotify",
                url: "https://open.spotify.com/user/stuiterbink?si=OyT3vqcKQuS-tYwwAk3Kzw"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/rob-de-willigen/"
            },

        ];

    }
)
</script>

<style src="@/scss/layout/Footer.scss" lang="scss"/>