<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="Display Name"
      v-model="displayName"
    />

    <input type="text" rsssequired placeholder="Email" v-model="email" />

    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>

    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";

export default {
  setup(props, context) {
    //lets use the useSignup composable
    const { error, signup } = useSignup();
    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const result = await signup(
        email.value,
        password.value,
        displayName.value
      );
      if (!error.value) {
        context.emit("signup");
      }
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
