
import { 
  Brain, 
  FileText, 
  Users, 
  Lightbulb, 
  Trophy, 
  Palette, 
  BookOpen, 
  Target, 
  Sparkles 
} from "lucide-react";

const QuickServices = () => {
  const services = [
    {
      icon: Brain,
      title: "ملف المتعلم",
      description: "تحليل شامل للقدرات والمهارات",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "تقرير شخصي",
      description: "تقارير مفصلة وتوصيات مهنية",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Users,
      title: "التوجيه المهني",
      description: "جلسات إرشادية متخصصة",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Lightbulb,
      title: "رحلة التعلم",
      description: "مشاريع عملية وتطبيقية",
      color: "from-yellow-600 to-orange-500"
    },
    {
      icon: Trophy,
      title: "معرض الطلاب",
      description: "عرض المشاريع والإنجازات",
      color: "from-blue-700 to-blue-800"
    },
    {
      icon: Palette,
      title: "الإثراء الإبداعي",
      description: "أنشطة فنية وموسيقية",
      color: "from-yellow-500 to-red-500"
    },
    {
      icon: BookOpen,
      title: "برنامج مساري",
      description: "للمرحلة الإعدادية",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Target,
      title: "الخريطة المهنية",
      description: "للمرحلة الثانوية",
      color: "from-yellow-600 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "صانع المستقبل",
      description: "حزمة شاملة للمدارس",
      color: "from-blue-600 to-green-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-yellow-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              خدماتنا الرئيسية
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعة شاملة من الخدمات التعليمية المبتكرة لإطلاق إمكانات الطلاب
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-50 animate-fade-in cursor-pointer overflow-hidden"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Background Animation */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <button className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-700 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            اكتشف جميع خدماتنا
            <ArrowRight className="w-5 h-5 mr-2 inline" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
