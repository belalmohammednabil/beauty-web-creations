
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
      <Navbar />
      <Hero />
      <Introduction />
      <Services />
      <Programs />
      <Contact />
      <Footer />
      
      {/* Decorative elements */}
      <div className="fixed top-40 left-[5%] w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="fixed top-[60%] right-[10%] w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
      <div className="fixed top-[20%] right-[20%] w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-1000"></div>
    </div>
  );
};

export default Index;
