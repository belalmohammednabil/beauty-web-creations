
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-6 min-h-screen flex items-center" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in text-right">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 space-x-reverse bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium animate-fade-in animation-delay-500">
                <Star className="w-4 h-4" />
                <span>منصة التميز التعليمي</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight animate-fade-in animation-delay-1000">
                <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
                  TracKWise.360
                </span>
              </h1>
              
              <p className="text-xl text-blue-700 font-medium animate-fade-in animation-delay-1000">
                "تحليل البيانات التعليمية لإطلاق إمكانات الطلاب وتوجيههم نحو مستقبل مهني مشرق."
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in animation-delay-2000">
                حوّل التعليم إلى تجربة قيادية مع منصتنا المبتكرة التي تحلل بيانات الطلاب وتصمم رحلات تعلم شخصية وتوفر إرشاداً مهنياً شاملاً للطلاب المصريين.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-2000">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                استكشف البرامج
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300"
              >
                اعرف المزيد
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in animation-delay-2000">
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-2 mx-auto">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-blue-800">+1000</div>
                <div className="text-sm text-gray-600">طالب تم توجيههم</div>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-2 mx-auto">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-800">%95</div>
                <div className="text-sm text-gray-600">معدل النجاح</div>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-2 mx-auto">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-blue-800">+50</div>
                <div className="text-sm text-gray-600">مدرسة شريكة</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-yellow-200/30 rounded-3xl transform rotate-3 animate-float"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-500">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?auto=format&fit=crop&w=600&q=80"
                alt="Students learning"
                className="rounded-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-yellow-500 text-white p-4 rounded-2xl shadow-lg animate-float">
                <div className="text-lg font-bold">جاهز للمستقبل</div>
                <div className="text-sm opacity-90">منصة تعليمية</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
