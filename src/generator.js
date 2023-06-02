import { products } from "./data";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

const addArrayToFirestore = async () => {
  const collectionRef = collection(db, "products");
  try {
    for (const data of products) {
      const docRef = await addDoc(collectionRef, data);
      console.log("Document written with ID: ", docRef.id);
    }
  } catch (error) {
    console.error("Error adding documents: ", error);
  }
};

export default addArrayToFirestore;
