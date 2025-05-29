
import { Brain, FileText, Users, Lightbulb, Trophy, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Learner Profiling",
      description: "Comprehensive analysis of cognitive abilities, academic performance, learning style, and interests using scientific tools.",
      features: ["Strengths identification", "Dominant intelligences", "Learning style preferences", "Career interests", "Behavioral traits"]
    },
    {
      icon: FileText,
      title: "Personalized Learning & Career Report",
      description: "Detailed, user-friendly reports outlining strengths, improvement areas, and recommended paths.",
      features: ["Strengths analysis", "Career recommendations", "Parent guidance", "Academic pathways", "Professional advice"]
    },
    {
      icon: Users,
      title: "Career Guidance & Coaching",
      description: "Individual or small-group sessions with specialists to help students understand themselves.",
      features: ["Individual sessions", "Group coaching", "Career planning", "Academic guidance", "Future preparation"]
    },
    {
      icon: Lightbulb,
      title: "Capstone Learning Journey",
      description: "Practical training program where students apply skills in real-world projects.",
      features: ["Real problem solving", "Structured methodology", "Critical thinking", "Presentation skills", "Team collaboration"]
    },
    {
      icon: Trophy,
      title: "Student Showcase EXPO",
      description: "Professional expo where students present projects to parents, teachers, and industry experts.",
      features: ["Project presentation", "Confidence building", "Industry exposure", "Networking opportunities", "Recognition"]
    },
    {
      icon: Palette,
      title: "Creative Enrichment",
      description: "Activities to enhance self-expression, emotional intelligence, and teamwork through arts.",
      features: ["Art programs", "Music activities", "Drama workshops", "Self-expression", "Emotional growth"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational services designed specifically for Egyptian students to unlock their potential 
            and guide them toward successful academic and career futures.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-50">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
