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
      this.$api.post('user/login', {
        email:this.user.username,
        password:this.user.password
      }).then((response =>{
        setTimeout(() => {
        localStorage.setItem("JWT", response.data.access_token);
        this.$api.defaults.headers.common['Authorization'] ='Bearer ' + localStorage.getItem('JWT')
        this.$router.push({ name: "backlinks" });
      }, 3000);

      })).catch((error)=>{
        console.log(error.response.data.detail)
        this.$q.notify({
          message:error.response.data.detail,
          type:'negative'
        })
        this.loading = false;
      })



    },
  },
};
</script>
