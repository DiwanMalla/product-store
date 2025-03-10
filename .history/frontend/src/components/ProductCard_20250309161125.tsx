import React, { useState } from "react";
import { EditIcon, TrashIcon } from "lucide-react";
import { useProductStore } from "@/store/product";
import { Dialog, DialogTitle, DialogContent } from "./ui/dialog";

interface ProductCardProps {
  product: { name: string; price: string; image: string };
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
    console.log(`Editing product with ID: ${productId}`);
    setIsEditing(true);
    // Add edit logic here
  };
  const handleSave = async ({ productId, updatedProduct }) => {
    console.log(`Updated product details: ${editedProduct}`);
    const { success, message } = await updateProduct(productId, updatedProduct);
    console.log(success, message);
    setIsEditing(false);
  };
  const handleDelete = async (productId) => {
    console.log(`Deleting product with ID: ${productId}`);
    const { success, message } = await deleteProduct(productId);
    console.log(success, message);
    // Add delete logic here
  };

  return (
    <div className="text-black w-full sm:w-1/2 md:w-1/3 lg:w-1/1  p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all space-y-4">
        {/* Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-md transition-transform transform hover:scale-105"
          />
        </div>
        <div>
          {/* Product Name and Price */}
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p className="text-lg text-gray-600">{product.price}</p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handleEdit(product._id)}
            className="text-blue-500 hover:text-blue-600 focus:outline-none"
          >
            <EditIcon size={20} />
          </button>
          <button
            onClick={() => {
              handleDelete(product._id);
            }}
            className="text-red-500 hover:text-red-600 focus:outline-none"
          >
            <TrashIcon size={20} />
          </button>
        </div>
      </div>
      {/*Edit Modal*/}
      {isEditing && (
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent>
            <DialogTitle>Edit Product</DialogTitle>
            <form className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold">
                  Product Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter product name"
                  name="name"
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
                  placeholder="Enter product price"
                  name="price"
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
                  placeholder="Enter image URL"
                  name="image"
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
                  onClick={() => handleSave(product._id, editedProduct)}
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
