import React from "react";
import db from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const getDocument = async (db) => {
  const querySnapshot = await getDocs(collection(db, "series"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};
getDocument(db);

export default function Browse() {
  return <h1>I'm gonna be the browse page of Netflix</h1>;
}
