import React, { useState } from "react";
import { EditIcon, TrashIcon } from "lucide-react";
import { useProductStore } from "@/store/product";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"; // Assuming you use shadcn/ui

interface ProductCardProps {
  product: { _id: string; name: string; price: string; image: string };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { deleteProduct } = useProductStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    price: product.price,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async () => {
    console.log(`Deleting product with ID: ${product._id}`);
    const result = await deleteProduct(product._id);
    if (result) {
      console.log(result.success, result.message);
    }
  };

  const handleSave = () => {
    console.log("Updated product details:", editedProduct);
    setIsEditing(false);
    // Call API to update product here
  };

  return (
    <div className="text-black w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
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
          <p className="text-lg text-gray-600">${product.price}</p>
        </div>

        {/* Action buttons */}
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

      {/* Edit Modal */}
      {isEditing && (
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent>
            <DialogTitle>Edit Product</DialogTitle>
            <input
              type="text"
              value={editedProduct.name}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, name: e.target.value })
              }
              className="border p-2 w-full rounded-md"
            />
            <input
              type="number"
              value={editedProduct.price}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, price: e.target.value })
              }
              className="border p-2 w-full rounded-md mt-2"
            />
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Save Changes
            </button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ProductCard;
