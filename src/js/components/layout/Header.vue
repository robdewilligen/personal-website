<template>
    <div class="header-view">
        Header
        <div class="header-links">

            <rw-dropdown>Stack</rw-dropdown>

<!--            <el-dropdown @command="goToStackItem">-->
<!--                <span class="el-dropdown-link">-->
<!--                  Stack<el-icon class="el-icon&#45;&#45;right"><arrow-down /></el-icon>-->
<!--                </span>-->
<!--                <template #dropdown>-->
<!--                    <el-dropdown-menu>-->
<!--                        <el-dropdown-item command="Vue">Vue.js</el-dropdown-item>-->
<!--                        <el-dropdown-item command="Laravel">Laravel</el-dropdown-item>-->
<!--                        <el-dropdown-item command="c">Action 3</el-dropdown-item>-->
<!--                        <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>-->
<!--                        <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>-->
<!--                    </el-dropdown-menu>-->
<!--                </template>-->
<!--            </el-dropdown>-->
        </div>

    </div>
</template>

<script>

import { Options, Vue } from 'vue-class-component';

export default Options({

    name: 'Header',
})(
    class Header extends Vue {

    }
)
</script>

<style src="@/scss/layout/header.scss" lang="scss" />