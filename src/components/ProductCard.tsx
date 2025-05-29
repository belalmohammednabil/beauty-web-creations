
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ name, price, image, category, isNew = false }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm">
      {isNew && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          New
        </div>
      )}
      
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-110"
      >
        <Heart 
          className={`w-5 h-5 transition-colors duration-300 ${
            isLiked ? 'fill-rose-500 text-rose-500' : 'text-gray-400 hover:text-rose-500'
          }`}
        />
      </button>

      <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 h-64">
        <img
          src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=400&q=80`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <p className="text-sm text-rose-500 font-medium mb-1">{category}</p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-2xl font-bold text-gray-900">{price}</p>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white rounded-full transition-all duration-300 hover:shadow-lg group-hover:scale-105"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
