import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const signup = async (email, password, displayName) => {
  error.value = null;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    //throw a error on const res if the sign up not complete
    if (!res) {
      throw new Error("Could not complete signup");
      console.log(res.user);
    }
    await res.user.updateProfile({ displayName });
    error.value = null;
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

const useSignup = () => {
  return { signup, error };
};

export default useSignup;
