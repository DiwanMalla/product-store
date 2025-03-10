import React from "react";
import { EditIcon, TrashIcon } from "lucide-react";

interface ProductCardProps {
  product: { name: string; price: string; image: string };
  onEdit: () => void; // Function to handle edit
  onDelete: () => void; // Function to handle delete
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg space-y-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-md text-gray-600">{product.price}</p>

      {/* Action buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-600 focus:outline-none"
        >
          <EditIcon size={20} />
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-600 focus:outline-none"
        >
          <TrashIcon size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
