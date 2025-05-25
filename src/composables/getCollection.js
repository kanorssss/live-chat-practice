import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

//getCOllection
const getcollection = (collection) => {
  const document = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createAt");

  collectionRef.onSnapshot((snap) => {
    let result = [];
    snap.docs.forEach((doc) => {});
  });
};

export default getcollection;
