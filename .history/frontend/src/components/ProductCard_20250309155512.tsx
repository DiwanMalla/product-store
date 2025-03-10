import React, { useState } from "react";
import { EditIcon, TrashIcon } from "lucide-react";
import { useProductStore } from "@/store/product";
import { Dialog, DialogTitle } from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface ProductCardProps {
  product: { name: string; price: string; image: string };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { deleteProduct } = useProductStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  });
  const handleEdit = (productId) => {
    console.log(`Editing product with ID: ${productId}`);
    setIsEditing(true);
    // Add edit logic here
  };
  const handleSave = () => {
    console.log(`Updated product details: ${editedProduct}`);
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
          <DialogDescription>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogDescription>
        </Dialog>
      )}
    </div>
  );
};

export default ProductCard;
