<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import { timestamp } from "@/firebase/config";
import { ref } from "vue";

export default {
  setup() {
    const { user } = getUser();
    const message = ref("");
    // add the message input to the collection
    const { addDoc, error } = useCollection("message");

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createAt: timestamp(),
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handleSubmit, error };
  },
};
</script>
<!-- add scope to not reflect on other pages or components only this chatForm.vue or current component -->
<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
