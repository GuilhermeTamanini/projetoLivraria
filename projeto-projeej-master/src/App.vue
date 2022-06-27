<script setup>
import HeaderComp from "@/components/templates/HeaderComp.vue";
// import FooterComp from "@/components/templates/FooterComp.vue";
</script>

<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
  <!-- <FooterComp /> -->
</template>

<style>
@import "@/assets/base.css";

#app {
  margin: 0 auto;
  font-weight: normal;
  height: 100vh;
}

header,
footer {
  background-color: black;
  color: white;
  height: 15%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

main {
  height: 70%;
}
</style>
<!-- nvm install --lts -->
