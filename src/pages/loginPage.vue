<template>
  <q-page class="q-pa-md flex flex-center column">
    <div class="row">
      <div class="col">
        <q-card flat class="card">
          <q-card-section>
            <q-input
              type="text"
              outlined
              color="teal"
              label="Email"
              v-model="user.username"
            />
            <q-input
              type="password"
              outlined
              color="teal"
              class="q-my-md"
              label="Wachtwoord"
              v-model="user.password"
            />
          </q-card-section>
          <q-card-actions>
            <q-btn
              color="deep-purple-12"
              unelevated
              label="Inloggen"
              class="full-width"
              size="lg"
              @click="login"
              :loading="loading"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.card {
  width: 20vw;
  padding: 2.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      user: { username: "", password: "" },
      loading: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      // send api request to login and then place jwt in localstorage and forward to backlinks
      setTimeout(() => {
        localStorage.setItem("JWT", JSON.stringify("loremipsum123"));
        this.$router.push({ name: "backlinks" });
      }, 3000);
      //
    },
  },
};
</script>
