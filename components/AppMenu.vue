<script setup lang="ts">
import { useFetch } from '#app';
import { IMenuItem } from '~/server/api/navigations';
import { _AsyncData } from '#app/composables/asyncData';
const { data: items }: _AsyncData<IMenuItem[]> = await useFetch<string, IMenuItem[]>('/api/navigations');
</script>

<template>
  <Menu mode="horizontal" @select="changeMenuItem($event)" :selectedKeys="selectedKeys">
    <MenuItem
        v-for="item in items"
        class="item"
        :key="item.url"
        :title="item.title"
    >
      <AppMenuIcons :icon="item.icon" />
      {{ item.title }}
    </MenuItem>
  </Menu>
</template>

<script lang="ts">
import { Menu, MenuItem } from 'ant-design-vue';
import AppMenuIcons from '~/components/AppMenuIcons.vue'
export default {
  name: 'Menu',
  components: {Menu, MenuItem, AppMenuIcons},
  data() {
    return {
      selectedKeys: ['/'],
    }
  },
  methods: {
    changeMenuItem({ key }): void {
      this.selectedKeys = [key];
      this.$router.push(key);
    }
  }
}
</script>

<style lang="scss" scoped />
