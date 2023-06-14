<template>
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
        </div>
        <div class="footer" id="messages">{{ this.errors }}</div>
      </div>
      <div class="switch__container form-parent">
        <img class="user" src="@/assets/usuario.png" />
        <form class="form" @submit.prevent="login">
          <h2 class="form_title title">Iniciar Sesión</h2>
          <input
            class="form__input"
            type="email"
            placeholder="Correo"
            v-model="formData.email"
            name="email"
            required
          />
          <input
            class="form__input"
            type="password"
            placeholder="Contraseña"
            v-model="formData.password"
            name="password"
            required
          />
          <button class="form__button button submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  
  name: "LoginView",
  data() {
    return {
      formData: {  
        email: '',
        password: '',
        device_name: 'browser'
      },
      errors: {}
    }
  },
  methods: {
    login() {
      axios.post('http://127.0.0.1:8000/api/login', this.formData)
      .then(data=>{console.log(data.data);});
    }
  }
};
</script>
<style>
    @import url("@/css/login.css");
</style>
