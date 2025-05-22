
import { Check, Users, CircleDollarSign, Lightbulb } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      name: "创新驱动",
      icon: <Lightbulb className="h-10 w-10 text-apple-blue" />,
      description: "我们拥抱变化，持续探索前沿AI技术，致力于为客户提供最具突破性的解决方案，引领行业发展。"
    },
    {
      name: "客户至上",
      icon: <Users className="h-10 w-10 text-apple-blue" />,
      description: "每一个决策都以客户需求为中心，我们通过深入理解客户痛点，提供超越期待的产品体验和服务。"
    },
    {
      name: "诚信为本",
      icon: <Check className="h-10 w-10 text-apple-blue" />,
      description: "我们坚守透明、诚实和负责任的原则，在产品开发和客户关系中建立持久的信任。"
    },
    {
      name: "追求卓越",
      icon: <CircleDollarSign className="h-10 w-10 text-apple-blue" />,
      description: "我们不断挑战自我，精益求精，确保每一个细节都达到最高标准，为客户创造最大价值。"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 text-center mb-16">
          我们的核心价值观
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:bg-gray-50 rounded-3xl"
            >
              <div className="bg-blue-50 rounded-full p-6 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-medium text-apple-gray-800 mb-3">
                {value.name}
              </h3>
              <p className="text-apple-gray-600 leading-relaxed max-w-md">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
