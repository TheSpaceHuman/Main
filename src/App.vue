<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IApiMenuItem } from './api/types'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default defineComponent({
  name: 'App',
  components: { AppFooter, AppHeader },
  methods: {
    getNavigations(): void {
      this.axios.get<IApiMenuItem[]>('/navigations').then(console.log)
    }
  },
  mounted() {
    this.getNavigations();
  }
})
</script>

<style lang="scss">
@import '/src/assets/scss/style';
</style>
