
import { AlertTriangle, Target, TrendingDown, BookOpen } from "lucide-react";

const Introduction = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Self-awareness Gap",
      description: "Students lack understanding of their abilities and interests, leading to uninformed academic choices."
    },
    {
      icon: Target,
      title: "Limited Career Guidance",
      description: "Absence of effective career guidance systems using reliable assessment tools."
    },
    {
      icon: TrendingDown,
      title: "Education-Market Disconnect",
      description: "Weak connections between education and job market with limited professional relevance."
    },
    {
      icon: BookOpen,
      title: "Practical Experience Shortage",
      description: "Lack of real-world experiences linking classroom learning to practical challenges."
    }
  ];

  const statistics = [
    { stat: "1 in 3", description: "Arab students feel education is disconnected from career future" },
    { stat: "75%", description: "Arab youth lack reliable career guidance during education" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-r from-blue-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Addressing Educational <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Challenges</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Despite efforts to improve curricula and learning environments, schools in Egypt and the Arab region 
            face significant challenges in preparing students for their academic and professional futures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-full mb-4">
                <challenge.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{challenge.title}</h3>
              <p className="text-gray-600 text-sm">{challenge.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Supporting Data</h3>
              <div className="space-y-4">
                {statistics.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-3xl font-bold text-yellow-400">{item.stat}</div>
                    <div className="text-blue-100">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">Our Solution</div>
              <p className="text-blue-100">
                The Capstone Journey program offers an innovative solution through data analysis, 
                personalized learning journeys, and practical competency development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
