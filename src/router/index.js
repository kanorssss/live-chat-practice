import { createRouter, createWebHistory } from "vue-router";

import WelcomeView from "@/views/WelcomeView.vue";
import ChatroomView from "@/views/ChatroomView.vue";
import { projectAuth } from "@/firebase/config";

//authentication to a user to enter the chat room auth guard
const requiredAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log("current user in auth guard:", user);
  // add if statement that if the current user is null it will go to welcome page else go to the route chatroom
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: WelcomeView,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: ChatroomView,
    beforeEnter: requiredAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
