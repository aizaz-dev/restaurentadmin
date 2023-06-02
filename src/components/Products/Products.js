import { db } from "@/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
function handleDelete(documentId) {
  const documentRef = doc(db, "products", documentId);

  deleteDoc(documentRef)
    .then(() => {
      console.log("Document deleted successfully");
      // Perform any necessary actions after deletion
    })
    .catch((error) => {
      console.error("Error deleting document: ", error);
    });
}

const Products = ({ productsArray }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {productsArray.map((product) => (
        <li key={product.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={product.image}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {product.title}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-800">
                {product.subcategory}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">
              {product.category}
            </p>
          </div>
          <div className="flex flex-col gap-1 box-border">
            <button className="text-sm rounded-lg px-4 py-2 bg-green-400 text-green-100 hover:bg-green-800 duration-300">
              Edit
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="text-sm rounded-lg px-4 py-2 bg-red-400 text-red-100 hover:bg-red-700 duration-300"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Products;
