import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

//if the page load the content of this composable will executed and the user will be set to the current user
const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  console.log("User state change. Current user is:", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
