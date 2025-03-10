import React, { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <section>
      <h1>Create New Product</h1>
    </section>
  );
};

export default CreatePage;
