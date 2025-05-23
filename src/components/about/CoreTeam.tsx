
import React from "react";

const CoreTeam = () => {
  const team = [
    {
      name: "陈明",
      role: "创始人 & CEO",
      bio: "前亚马逊高级产品经理，拥有10年跨境电商经验，曾成功帮助多家中国品牌进入欧美市场。",
      image: "/lovable-uploads/328328eb-cdb0-4de6-b738-70ea44db5315.png"
    },
    {
      name: "王思远",
      role: "CTO",
      bio: "前Google AI研究员，自然语言处理专家，拥有多项AI相关专利，负责Homywork核心算法开发。",
      image: "/lovable-uploads/09c7c9b6-558f-472c-adc8-8bbe8e3c1568.png"
    },
    {
      name: "李嘉琪",
      role: "产品设计总监",
      bio: "前Apple设计团队成员，专注于打造简洁、直观且功能强大的产品体验，追求极致的用户体验。",
      image: "/lovable-uploads/7331360f-1c63-4a01-8a26-ca608cba4d57.png"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 text-center mb-12">
          核心团队
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-apple-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-apple-blue font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-apple-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
