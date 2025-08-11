import React from 'react';
import { Dumbbell, Users, Award, Clock, Heart, Shield } from 'lucide-react';

const WhyOldSkool = () => {
  const reasons = [
    {
      icon: <Dumbbell className="text-yellow-400" size={48} />,
      title: "Premium Equipment",
      description: "State-of-the-art machines and free weights from top brands, maintained to perfection for your optimal workout experience."
    },
    {
      icon: <Users className="text-yellow-400" size={48} />,
      title: "Expert Community",
      description: "Join a supportive community of fitness enthusiasts and certified trainers who are committed to helping you achieve your goals."
    },
    {
      icon: <Award className="text-yellow-400" size={48} />,
      title: "Proven Results",
      description: "Our members consistently achieve their fitness goals with our proven training methods and personalized approach."
    },
    {
      icon: <Clock className="text-yellow-400" size={48} />,
      title: "Custom Timing",
      description: "Train on your schedule with round-the-clock access to our facilities. Your fitness journey never has to pause."
    },
    {
      icon: <Heart className="text-yellow-400" size={48} />,
      title: "Holistic Wellness",
      description: "We focus on complete wellness - physical strength, mental health, and lifestyle transformation for lasting results."
    },
    {
      icon: <Shield className="text-yellow-400" size={48} />,
      title: "Safe Environment",
      description: "Clean, sanitized, and secure facilities with proper safety protocols to ensure your peace of mind while training."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            WHY <span className="text-yellow-400">OLD SKOOL</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another gym. We're a lifestyle, a community, and your partner in transformation. 
            Here's what makes OLD SKOOL the ultimate choice for serious fitness enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl text-center hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              <div className="mb-6 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-yellow-400 text-black p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Ready to Experience the OLD SKOOL Difference?
            </h3>
            <p className="text-lg mb-6">
              Join thousands of members who have transformed their lives with us. 
              Your journey to becoming the strongest version of yourself starts here.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I'm interested in joining OLD SKOOL gym after learning about your unique approach. Can you tell me more?");
                window.open(`https://wa.me/+919751900299?text=${message}`, '_blank');
              }}
              className="bg-black text-yellow-400 px-8 py-4 text-lg font-bold rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              START YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOldSkool;