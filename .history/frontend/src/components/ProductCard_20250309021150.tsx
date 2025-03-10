import React from "react";
import { EditIcon, TrashIcon } from "lucide-react";

interface ProductCardProps {
  product: { name: string; price: string; image: string };
  onEdit: () => void; // Function to handle edit
  onDelete: () => void; // Function to handle delete
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleEdit = (productId) => {
    console.log(`Editing product with ID: ${productId}`);
    // Add edit logic here
  };

  const handleDelete = (productId) => {
    console.log(`Deleting product with ID: ${productId}`);
    // Add delete logic here
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
          <p className="text-lg text-gray-600">{product.price}</p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handleEdit}
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
    </div>
  );
};

export default ProductCard;
