import React, { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <section>
      <h1 className="text-2xl text0center">Create New Product</h1>
    </section>
  );
};

export default CreatePage;
