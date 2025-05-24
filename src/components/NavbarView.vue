<template>
  <nav>
    <!-- if the user is login add if statement -->
    <div v-if="user">
      <p>Hey There {{ user.displayName }}</p>
      <p class="email">Currently Logged in as {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import getUser from "@/composables/getUser";
import useLogout from "@/composables/useLogout";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const router = useRouter();
    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
        router.push({ name: "Welcome" });
      }
    };
    return { handleLogout, user };
  },
};
</script>
<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}

nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
