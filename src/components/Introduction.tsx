
import { AlertTriangle, Target, TrendingDown, BookOpen } from "lucide-react";

const Introduction = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Self-awareness Gap",
      description: "Students lack understanding of their abilities and interests, leading to uninformed academic choices.",
      image: "photo-1581092795360-fd1ca04f0952"
    },
    {
      icon: Target,
      title: "Limited Career Guidance",
      description: "Absence of effective career guidance systems using reliable assessment tools.",
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      icon: TrendingDown,
      title: "Education-Market Disconnect",
      description: "Weak connections between education and job market with limited professional relevance.",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      icon: BookOpen,
      title: "Practical Experience Shortage",
      description: "Lack of real-world experiences linking classroom learning to practical challenges.",
      image: "photo-1498050108023-c5249f4df085"
    }
  ];

  const statistics = [
    { stat: "1 in 3", description: "Arab students feel education is disconnected from career future" },
    { stat: "75%", description: "Arab youth lack reliable career guidance during education" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-r from-blue-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
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
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={`https://images.unsplash.com/${challenge.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={challenge.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                <div className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 bg-white/90 rounded-full">
                  <challenge.icon className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{challenge.title}</h3>
              <p className="text-gray-600 text-sm">{challenge.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Supporting Data</h3>
              <div className="space-y-4">
                {statistics.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-yellow-400">{item.stat}</div>
                    <div className="text-blue-100">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=80"
                  alt="Programming and data analysis"
                  className="rounded-2xl w-full h-48 object-cover opacity-20 absolute inset-0"
                />
                <div className="relative z-10 p-6">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">Our Solution</div>
                  <p className="text-blue-100">
                    The Capstone Journey program offers an innovative solution through data analysis, 
                    personalized learning journeys, and practical competency development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
