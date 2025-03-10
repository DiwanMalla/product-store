import React, { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <section>
      <h1 className="text-2xl text-center">Create New Product</h1>
      <input placeholder="Product Name" name="name" />
    </section>
  );
};

export default CreatePage;
