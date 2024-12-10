<template>
    <div class="overflow-x-hidden">
        <header>
            <Header />
        </header>
        <main style="z-index: 1; margin-top: 200px">
            <router-view />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>

<script setup>
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';
import { Checklogin } from './store/login';

const checkLog = Checklogin();
checkLog.userCheck();
</script>
