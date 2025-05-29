
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال الرسالة! 🎉",
      description: "شكراً لاهتمامكم. سيتواصل معكم فريقنا خلال 24 ساعة.",
    });
    setFormData({ name: "", email: "", phone: "", program: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "راسلنا",
      details: "info@trackwise360.com",
      subtitle: "سنرد خلال 24 ساعة"
    },
    {
      icon: Phone,
      title: "اتصل بنا",
      details: "+20 123 456 7890",
      subtitle: "من الإثنين للجمعة، 9 ص - 6 م"
    },
    {
      icon: MapPin,
      title: "زرنا",
      details: "القاهرة، مصر",
      subtitle: "مركز التميز التعليمي"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            تواصل <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">معنا</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            هل أنت مستعد لإطلاق إمكانات طالبك؟ تواصل معنا اليوم لتتعرف على برامجنا 
            وكيف يمكننا مساعدتك في توجيه رحلتهم التعليمية.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full">
                      <info.icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                      <p className="text-yellow-300 font-medium">{info.details}</p>
                      <p className="text-blue-200 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">لماذا تختار TracKWise.360؟</h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  أدوات تقييم معتمدة دولياً
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  استشاريون تعليميون خبراء
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  نجاح مثبت مع أكثر من 1000 طالب
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  نظام دعم شامل
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="أدخل رقم هاتفك"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">البرنامج المهتم به</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                    required
                  >
                    <option value="">اختر برنامجاً</option>
                    <option value="my-path">برنامج مساري (الإعدادي)</option>
                    <option value="promap">برنامج الخريطة المهنية (الثانوي)</option>
                    <option value="future-maker">حزمة المدرسة صانعة المستقبل</option>
                    <option value="consultation">استشارة عامة</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الرسالة</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="أخبرنا عن احتياجاتك..."
                  rows={4}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-full transition-all duration-300"
              >
                إرسال الرسالة
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
