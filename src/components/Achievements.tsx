import React from 'react';
import { Trophy, Award, Users, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="text-yellow-400" size={48} />,
      title: "Best Gym 2024",
      description: "Awarded Best Local Gym by Fitness Weekly Magazine"
    },
    {
      icon: <Award className="text-yellow-400" size={48} />,
      title: "Certified Trainers",
      description: "All our trainers are NASM and ACE certified professionals"
    },
    {
      icon: <Users className="text-yellow-400" size={48} />,
      title: "500+ Members",
      description: "Growing community of fitness enthusiasts"
    },
    {
      icon: <Star className="text-yellow-400" size={48} />,
      title: "5 Star Rating",
      description: "Consistently rated 5 stars by our members"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
            OUR <span className="text-yellow-400">ACHIEVEMENTS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition and milestones that make us proud to be OLD SKOOL
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;