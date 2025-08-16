import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const itemsColRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsColRef);
  snapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return items;
}

export async function addItem(userId, item) {
  const itemsColRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsColRef, item);
  return docRef.id;
}