const ProductCard = ({ product }) => {
  return (
    <div className="space-y-4">
      <div key={index\} className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-md">{product.price}</p>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover mt-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductCard;
