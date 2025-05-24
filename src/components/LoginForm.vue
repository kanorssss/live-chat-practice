<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>

    <button>Login</button>
  </form>
</template>

<script>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";

export default {
  setup(props, context) {
    //refs
    const email = ref("");
    const password = ref("");

    const { login, error } = useLogin();

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);

      if (!error.value) {
        //emit an event add context and props on setup
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
