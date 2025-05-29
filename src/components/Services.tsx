
import { Brain, FileText, Users, Lightbulb, Trophy, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Learner Profiling",
      description: "Comprehensive analysis of cognitive abilities, academic performance, learning style, and interests using scientific tools.",
      features: ["Strengths identification", "Dominant intelligences", "Learning style preferences", "Career interests", "Behavioral traits"],
      image: "photo-1581090464777-f3220bbe1b8b"
    },
    {
      icon: FileText,
      title: "Personalized Learning & Career Report",
      description: "Detailed, user-friendly reports outlining strengths, improvement areas, and recommended paths.",
      features: ["Strengths analysis", "Career recommendations", "Parent guidance", "Academic pathways", "Professional advice"],
      image: "photo-1517022812141-23620dba5c23"
    },
    {
      icon: Users,
      title: "Career Guidance & Coaching",
      description: "Individual or small-group sessions with specialists to help students understand themselves.",
      features: ["Individual sessions", "Group coaching", "Career planning", "Academic guidance", "Future preparation"],
      image: "photo-1531297484001-80022131f5a1"
    },
    {
      icon: Lightbulb,
      title: "Capstone Learning Journey",
      description: "Practical training program where students apply skills in real-world projects.",
      features: ["Real problem solving", "Structured methodology", "Critical thinking", "Presentation skills", "Team collaboration"],
      image: "photo-1522335789203-aabd1fc54bc9"
    },
    {
      icon: Trophy,
      title: "Student Showcase EXPO",
      description: "Professional expo where students present projects to parents, teachers, and industry experts.",
      features: ["Project presentation", "Confidence building", "Industry exposure", "Networking opportunities", "Recognition"],
      image: "photo-1526374965328-7f61d4dc18c5"
    },
    {
      icon: Palette,
      title: "Creative Enrichment",
      description: "Activities to enhance self-expression, emotional intelligence, and teamwork through arts.",
      features: ["Art programs", "Music activities", "Drama workshops", "Self-expression", "Emotional growth"],
      image: "photo-1498936178812-4b2e558d2937"
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
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
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                </div>
                <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full mr-3"></div>
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
