
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-pink-50/20 to-purple-100/30"></div>
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-8 h-8 text-rose-300" />
      </div>
      <div className="absolute top-40 right-20 animate-float animation-delay-1000">
        <Heart className="w-6 h-6 text-pink-400" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float animation-delay-2000">
        <Star className="w-7 h-7 text-rose-400" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Bella
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-2">
            Beauty Beyond Boundaries
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto mb-8"></div>
        </div>
        
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-500">
          Discover our luxurious collection of premium cosmetics designed to enhance your natural beauty. 
          From radiant foundations to captivating lipsticks, every product is crafted with love and precision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1000">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Shop Collection
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
