<template>
  <div>
    <div class="container">
      <NavbarView />
      <NewChatForm />
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import NewChatForm from "@/components/NewChatForm.vue";
import getUser from "@/composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    NavbarView,
    NewChatForm,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      //if the user is null or dont have a value means logout so proceed to welcome page
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>
<style></style>
