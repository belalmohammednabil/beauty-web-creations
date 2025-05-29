
import { AlertTriangle, BookOpen, Users, Target } from "lucide-react";

const Introduction = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "نقص الوعي الذاتي",
      description: "عدم معرفة الطلاب بقدراتهم واهتماماتهم يؤدي إلى اختيارات أكاديمية ومهنية غير مدروسة"
    },
    {
      icon: BookOpen,
      title: "ضعف الإرشاد المهني",
      description: "غياب أنظمة التوجيه المهني الفعالة باستخدام أدوات موثوقة لتقييم الشخصية والمهارات"
    },
    {
      icon: Users,
      title: "انقطاع التعليم عن سوق العمل",
      description: "ضعف الربط بين التعليم وسوق العمل مع افتقار الأنشطة المدرسية للطابع المهني"
    }
  ];

  const solutions = [
    "تحليل بيانات الطلاب لاكتشاف نقاط القوة والصفات الفريدة",
    "تصميم رحلات تعلم مرنة وعملية مع برامج تدريجية",
    "استخدام منهجية Capstone للمشاريع التطبيقية",
    "التركيز على الكفاءات المهنية المتماشية مع احتياجات السوق",
    "دمج المهارات المعترف بها عالمياً كالتفكير النقدي والتعاون",
    "التوافق مع أهداف التنمية المستدامة للوعي المجتمعي"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-white" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              عن البرنامج
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            رغم الجهود المبذولة لتحسين المناهج وبيئات التعلم، تواجه المدارس في مصر والمنطقة العربية 
            تحديات في إعداد الطلاب لمستقبلهم الأكاديمي والمهني
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mt-6"></div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-500 border border-blue-100">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">1/3</div>
              <p className="text-gray-700 text-lg">
                من الطلاب العرب يشعرون بانقطاع تعليمهم عن مستقبلهم المهني
              </p>
              <div className="text-sm text-gray-500 mt-2">- البنك الدولي</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-700 border border-yellow-100">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-600 mb-2">%75</div>
              <p className="text-gray-700 text-lg">
                من الشباب العربي يفتقرون للإرشاد المهني الموثوق أثناء التعليم الأساسي
              </p>
              <div className="text-sm text-gray-500 mt-2">- اليونسكو</div>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-fade-in">
            التحديات الرئيسية
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border border-gray-100 text-right"
                style={{animationDelay: `${(index + 1) * 200}ms`}}
              >
                <div className="flex items-center justify-end mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center ml-4">
                    <challenge.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{challenge.title}</h4>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-br from-blue-600 to-yellow-500 rounded-3xl p-8 md:p-12 text-white animate-fade-in animation-delay-1000">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">حلولنا المبتكرة</h3>
            <p className="text-xl opacity-90">
              برنامج رحلة Capstone يقدم حلولاً مبتكرة لمعالجة هذه الفجوة من خلال:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-center bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${(index + 1) * 100}ms`}}
              >
                <div className="w-2 h-2 bg-white rounded-full ml-4 flex-shrink-0"></div>
                <p className="text-right">{solution}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-3">
              <Target className="w-6 h-6 ml-2" />
              <span className="text-lg font-medium">هذا البرنامج يحوّل التعليم إلى تجربة قيادية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
