
import { Brain, FileText, Users, Lightbulb, Trophy, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "ملف المتعلم",
      description: "تحليل شامل للقدرات المعرفية والأداء الأكاديمي وأسلوب التعلم والاهتمامات باستخدام أدوات علمية.",
      features: ["تحديد نقاط القوة", "الذكاءات المهيمنة", "تفضيلات أسلوب التعلم", "الاهتمامات المهنية", "السمات السلوكية"],
      image: "photo-1581090464777-f3220bbe1b8b"
    },
    {
      icon: FileText,
      title: "تقرير التعلم والمهن الشخصي",
      description: "تقارير مفصلة وسهلة الفهم تُبرز نقاط القوة ومجالات التحسين والمسارات الموصى بها.",
      features: ["تحليل نقاط القوة", "توصيات مهنية", "إرشاد للوالدين", "المسارات الأكاديمية", "نصائح مهنية"],
      image: "photo-1517022812141-23620dba5c23"
    },
    {
      icon: Users,
      title: "التوجيه والتدريب المهني",
      description: "جلسات فردية أو جماعية صغيرة مع متخصصين لمساعدة الطلاب على فهم أنفسهم.",
      features: ["جلسات فردية", "تدريب جماعي", "تخطيط مهني", "إرشاد أكاديمي", "إعداد للمستقبل"],
      image: "photo-1531297484001-80022131f5a1"
    },
    {
      icon: Lightbulb,
      title: "رحلة التعلم الختامية",
      description: "برنامج تدريبي عملي حيث يطبق الطلاب المهارات في مشاريع واقعية.",
      features: ["حل مشاكل حقيقية", "منهجية منظمة", "التفكير النقدي", "مهارات العرض", "التعاون الجماعي"],
      image: "photo-1522335789203-aabd1fc54bc9"
    },
    {
      icon: Trophy,
      title: "معرض عرض الطلاب",
      description: "معرض مهني حيث يقدم الطلاب مشاريعهم للوالدين والمعلمين وخبراء الصناعة.",
      features: ["عرض المشاريع", "بناء الثقة", "التعرض للصناعة", "فرص التواصل", "التقدير"],
      image: "photo-1526374965328-7f61d4dc18c5"
    },
    {
      icon: Palette,
      title: "الإثراء الإبداعي",
      description: "أنشطة لتعزيز التعبير عن الذات والذكاء العاطفي والعمل الجماعي من خلال الفنون.",
      features: ["برامج فنية", "أنشطة موسيقية", "ورش مسرحية", "التعبير عن الذات", "النمو العاطفي"],
      image: "photo-1498936178812-4b2e558d2937"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">خدماتنا التفصيلية</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            خدمات تعليمية شاملة مصممة خصيصاً للطلاب المصريين لإطلاق إمكاناتهم 
            وتوجيههم نحو مستقبل أكاديمي ومهني ناجح.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-50 group animate-fade-in" 
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent"></div>
                <div className="absolute bottom-0 right-0 p-6 text-right">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                </div>
                <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6 text-right">
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full ml-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
