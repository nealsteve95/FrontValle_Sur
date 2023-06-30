<template>
  <div class="body">
    <div class="main">
      <div class="switch">
        <div class="switch__container">
          <div class="switch__header">
            <div>
              <img
                class="image"
                src="@/assets/vallesur_logo.png"
                alt="logo"
              />
            </div>
            <div>
              <h2 class="switch__title title">Hotel Valle Sur</h2>
            </div>
          </div>
          <div class="switch__body">
            <h2 class="switch__title title">Bienvenido de nuevo!</h2>
            <p class="switch__description description">
              Gracias por trabajar con nosotros
            </p>
            <div id="messageApi">{{ $store.state.errors }}</div>
          </div>
        </div>
        <div class="switch__container form_parent">
          <img class="user" src="@/assets/usuario.png" />
          <form class="form_login" @submit.prevent="login">
            <h2 class="form_title title">Iniciar Sesión</h2>
            <input
              class="form__input input"
              type="email"
              placeholder="Correo"
              v-model="formData.email"
              name="email"
              required
            />
            <input
              class="form__input input"
              type="password"
              placeholder="Contraseña"
              v-model="formData.password"
              name="password"
              required
            />
            <button class="form__button button_login submit">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginComponent",
    data: () => ({
      formData: {  
        email: '',
        password: '',
      },
      log: {}
    }),
    methods: {  
      async login() {
        await this.$store.dispatch('login', this.formData);
        this.$router.push(`/${this.$store.state.user.rol=="admin"?'recepcionista':this.$store.state.user.rol}`);
      }
    }
  };
</script>

<style scoped>
  @import url('@/css/login.css');
</style>