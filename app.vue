<template>
  <nav
    @click="
      $colorMode.preference =
        $colorMode.preference === 'dark' ? 'light' : 'dark'
    "
  >
    <Icon name="ph:sun" v-if="$colorMode.preference === 'light'" />
    <Icon name="ph:moon" v-else />
  </nav>
  <NuxtPage class="page" />
</template>

<style lang="ts">
css({
  html: {
    backgroundColor: 'white',
    color: 'black',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '&.dark': {
      backgroundColor: 'black',
      color: 'white'
    },
  },
  nav: {
    position: 'fixed',
    display: 'flex',
    right: '10px',
    top: '10px',
    borderRadius: '10px',
    justifyContent: 'flex-end',
    backdropFilter: 'blur(20px)',
    zIndex: 1000,
    cursor: 'pointer',
    padding: '20px',
    svg: {
      cursor: 'pointer',
    }
  },
  '.page': {
    padding: '20px 40px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }
})
</style>
