import React, { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
  });
  return <div>CreatePage</div>;
};

export default CreatePage;
