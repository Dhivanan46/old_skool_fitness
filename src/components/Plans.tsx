import React from 'react';
import { Check } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: "Monthly",
      price: "2000",
      period: "/month",
      features: [
        "Full gym access",
        "All equipment access",
        "Locker facilities",
        "Free parking"
      ],
      popular: false
    },
    {
      name: "Half Yearly",
      price: "7000",
      period: "/6 months",
      features: [
        "Full gym access",
        "All equipment access",
        "Locker facilities",
        "Free parking"
      ],
      popular: true
    },
    {
      name: "Quarterly",
      price: "5000",
      period: "/3 months",
      features: [
        "Full gym access",
        "All equipment access",
        "Locker facilities",
        "Free parking"
      ],
      popular: false
    },
    {
      name: "Yearly",
      price: "10000",
      period: "/year",
      features: [
        "Full gym access",
        "All equipment access",
        "Locker facilities",
        "Free parking"
      ],
      popular: false
    }
  ];

  const handleJoinPlan = (planName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${planName} membership plan at OLD SKOOL gym. Can you provide more details?`);
    window.open(`https://wa.me/+919751900299?text=${message}`, '_blank');
  };

  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
            MEMBERSHIP <span className="text-yellow-400">PLANS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness journey and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-4 ring-yellow-400' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4 text-center text-black">
                  {plan.name}
                </h3>
                <div className="text-center mb-8">
                  <span className="text-4xl font-black text-yellow-400">{plan.price}</span>
                  <span className="text-gray-600 text-lg">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-yellow-400 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleJoinPlan(plan.name)}
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  JOIN NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;