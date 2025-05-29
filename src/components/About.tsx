
import { Sparkles, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Story</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Beauty That Inspires Confidence</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Bella, we believe that beauty is not about perfection—it's about feeling confident in your own skin. 
              Our carefully curated collection of premium cosmetics is designed to enhance your natural beauty and 
              help you express your unique style.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our luxurious foundations that give you a flawless complexion to our vibrant lipsticks that 
              make a statement, every product is crafted with the finest ingredients and attention to detail.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200/50 to-pink-200/50 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
              alt="Cosmetics collection"
              className="relative rounded-3xl shadow-xl object-cover w-full h-96"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Premium Quality</h4>
            <p className="text-gray-600">
              We source only the finest ingredients and work with trusted suppliers to ensure every product meets our high standards.
            </p>
          </div>

          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Cruelty-Free</h4>
            <p className="text-gray-600">
              We are committed to ethical beauty practices. All our products are cruelty-free and never tested on animals.
            </p>
          </div>

          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Award-Winning</h4>
            <p className="text-gray-600">
              Our innovative formulas and stunning shades have earned recognition from beauty experts and customers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
