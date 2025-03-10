import React, { useState } from "react";
import { EditIcon, TrashIcon } from "lucide-react";
import { useProductStore } from "@/store/product";
import { Dialog, DialogTitle, DialogContent } from "./ui/dialog";

interface ProductCardProps {
  product: { _id: string; name: string; price: string; image: string };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (event) => {
    event.preventDefault(); // Prevent form submission
    console.log(`Updated product details:`, editedProduct);

    const { success, message } = await updateProduct(
      product._id,
      editedProduct
    );
    console.log(success, message);

    if (success) {
      setIsEditing(false);
    } else {
      alert("Error updating product: " + message);
    }
  };

  const handleDelete = async () => {
    console.log(`Deleting product with ID: ${product._id}`);
    const { success, message } = await deleteProduct(product._id);
    console.log(success, message);
  };

  return (
    <div className="text-black w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all space-y-4">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-md transition-transform hover:scale-105"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p className="text-lg text-gray-600">${product.price}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleEdit}
            className="text-blue-500 hover:text-blue-600 focus:outline-none"
          >
            <EditIcon size={20} />
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-600 focus:outline-none"
          >
            <TrashIcon size={20} />
          </button>
        </div>
      </div>

      {isEditing && (
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent>
            <DialogTitle>Edit Product</DialogTitle>
            <form
              onSubmit={handleSave}
              className="bg-white p-6 rounded-lg shadow-md space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-lg font-semibold">
                  Product Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={editedProduct.name}
                  onChange={(e) =>
                    setEditedProduct({ ...editedProduct, name: e.target.value })
                  }
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-lg font-semibold">
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  value={editedProduct.price}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      price: e.target.value,
                    })
                  }
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="image" className="block text-lg font-semibold">
                  Image URL
                </label>
                <input
                  id="image"
                  type="url"
                  value={editedProduct.image}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      image: e.target.value,
                    })
                  }
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors mt-6"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ProductCard;
