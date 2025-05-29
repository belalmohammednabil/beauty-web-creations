
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "عن البرنامج", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "البرامج", href: "#programs" },
    { label: "تواصل معنا", href: "#contact" }
  ];

  const programs = [
    { label: "برنامج مساري", href: "#programs" },
    { label: "برنامج الخريطة المهنية", href: "#programs" },
    { label: "حزمة صانع المستقبل", href: "#programs" },
    { label: "تدريب المدربين", href: "#programs" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Instagram, href: "#", label: "إنستغرام" },
    { icon: Linkedin, href: "#", label: "لينكد إن" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ت</span>
              </div>
              <span className="text-xl font-bold">TracKWise.360</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              "تحليل البيانات التعليمية لإطلاق إمكانات الطلاب وتوجيههم نحو مستقبل مهني مشرق."
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@trackwise360.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+20 123 456 7890</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">البرامج</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <a 
                    href={program.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">تواصل معنا</h3>
            <p className="text-gray-300 mb-4">
              تابعنا للحصول على رؤى تعليمية وتحديثات برامجنا.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-yellow-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TracKWise.360. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                شروط الخدمة
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                سياسة ملفات تعريف الارتباط
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
