import React, { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <section>
      <h1 className="text-2xl text-center">Create New Product</h1>
      <form>
        <div>
          <label htmlFor="name">Product Name</label>
          <input
            id="name"
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </section>
  );
};

export default CreatePage;
