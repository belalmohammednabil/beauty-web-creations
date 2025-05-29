
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, Award, School } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "My Path Program",
      subtitle: "Preparatory Stage",
      duration: "2–3 months (12 sessions)",
      icon: CheckCircle,
      description: "Comprehensive program for preparatory students to discover their identity and make informed future decisions.",
      features: [
        "Comprehensive academic and cognitive analysis",
        "Professional report for parents",
        "Individual guidance sessions",
        "Life skills workshops",
        "Mini Capstone project",
        "Creative arts activities",
        "Final EXPO presentation"
      ],
      highlights: ["Self-discovery", "Career exploration", "Skill development"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "ProMap Program",
      subtitle: "Secondary Stage",
      duration: "3–6 months (minimum 20 sessions)",
      icon: Award,
      description: "Advanced program for secondary students focusing on career planning and professional preparation.",
      features: [
        "Comprehensive analysis and assessment",
        "Detailed professional reports",
        "Local and international opportunities guidance",
        "Advanced life skills training",
        "CV writing and interview preparation",
        "Team-based Capstone projects",
        "Industry expert presentations"
      ],
      highlights: ["Career planning", "Professional skills", "Global opportunities"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Future-Maker School Package",
      subtitle: "Institutional Program",
      duration: "Full academic year",
      icon: School,
      description: "Comprehensive school-wide solution for educational institutions to transform their career guidance approach.",
      features: [
        "Internationally accredited testing",
        "School-wide statistical analysis",
        "Group and individual guidance",
        "2-month Capstone program",
        "Student Expo Day",
        "Staff training and certification",
        "Ongoing support system"
      ],
      highlights: ["School transformation", "Staff development", "Student success"],
      color: "from-blue-600 to-yellow-500"
    }
  ];

  return (
    <section id="programs" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored educational programs for different academic stages, designed to maximize student potential 
            and ensure successful career preparation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <program.icon className="w-10 h-10" />
                  <div className="flex items-center text-sm bg-white/20 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 mr-2" />
                    {program.duration}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-lg opacity-90">{program.subtitle}</p>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{program.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Program Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, highlightIndex) => (
                      <span key={highlightIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {program.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {program.features.length > 4 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{program.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <Button className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white`}>
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Education?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join hundreds of students and institutions who have already started their journey to educational excellence.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
