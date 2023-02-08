<template>
  <q-layout view="HHh Hpr lFf">
    <q-header :class="$q.dark.mode ? 'bg-dark' : 'bg-teal'">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Prosuco SEO </q-toolbar-title>

        <div class="toggleScreenMode">
          <q-btn flat square icon="o_dark_mode" @click="$q.dark.toggle()" />
<q-btn flat square  icon="o_logout" @click="logOut" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Backlink checker",
    caption: "controleer backlinks",
    icon: "link",
    link: { name: "backlinks" },
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem('JWT');
      this.$router.push({name:'login'})
    }
  }
});
</script>

<style lang="scss"></style>
