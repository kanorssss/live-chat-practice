import { projectAuth, projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collection) => {
  // We put it inside because it's unique for each call — like, there are multiple pieces of data using this collection, and we use it multiple times...
  const error = ref(null);

  //   add data or document to the collection through the firebase
  const addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "Could not sent the message";
    }
  };
  return { error, addDoc };
};

export default useCollection;
