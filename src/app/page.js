"use client";
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import { db } from "@/firebase";
export default function Example() {
  const [productsArray, setProductsArray] = useState([]);

  const getNotes = () => {
    const collectionRef = collection(db, "products"); // Replace 'db' with your Firestore instance
    getDocs(collectionRef).then((data) => {
      setProductsArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div className="bg-white">
      <Header />
      <Hero productsArray={productsArray} />
    </div>
  );
}
