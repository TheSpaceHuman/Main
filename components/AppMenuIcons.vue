<template>
  <HomeOutlined v-if="icon === 'home'" />
  <ProjectOutlined v-if="icon === 'project'" />
  <PhoneOutlined v-if="icon === 'phone'" />
  <AppstoreOutlined v-if="icon === 'appstore'" />
</template>

<script>
import { HomeOutlined, ProjectOutlined, PhoneOutlined, AppstoreOutlined } from "@ant-design/icons-vue";

export default {
  name: "AppMenuIcons",
  props: { icon: String },
  components: { HomeOutlined, ProjectOutlined, PhoneOutlined, AppstoreOutlined },
}
</script>

<style lang="scss" scoped />
