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
    let results = [];
    snap.docs.forEach((doc) => {
      // spread ...
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
    });
  });
};

export default getcollection;
