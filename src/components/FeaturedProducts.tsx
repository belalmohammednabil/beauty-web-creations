
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Rose Gold Highlighter",
      price: "$48",
      image: "photo-1596462502278-27bfdc403348",
      category: "Highlighters",
      isNew: true,
    },
    {
      id: 2,
      name: "Velvet Matte Lipstick",
      price: "$35",
      image: "photo-1586495777744-4413f21062fa",
      category: "Lipsticks",
    },
    {
      id: 3,
      name: "Flawless Foundation",
      price: "$52",
      image: "photo-1522335789203-aabd1fc54bc9",
      category: "Foundation",
    },
    {
      id: 4,
      name: "Smoky Eye Palette",
      price: "$68",
      image: "photo-1571781926291-c477ebfd024b",
      category: "Eyeshadow",
      isNew: true,
    },
    {
      id: 5,
      name: "Rosy Blush Compact",
      price: "$42",
      image: "photo-1560472354-b33ff0c44a43",
      category: "Blush",
    },
    {
      id: 6,
      name: "Luxury Mascara",
      price: "$39",
      image: "photo-1583001809040-6c50b5874cdd",
      category: "Mascara",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Featured <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium beauty essentials, designed to make you feel confident and radiant.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
