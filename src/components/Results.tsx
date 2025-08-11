import React from 'react';

const Results = () => {
  const transformations = [
    {
      name: "Kalif",
      duration: "6 months",
            beforeImage: "https://ucarecdn.com/8eaacf32-21f0-42ad-ae16-a824306b9e90/beforekalif.png",
      afterImage: "https://ucarecdn.com/9601504b-7d91-42a1-a327-fa479a7ca934/afterkalif.png",
      story: "Lost 30 pounds and gained incredible strength. The trainers at OLD SKOOL completely transformed my relationship with fitness."
    },
    {
      name: "Kalif",
      duration: "8 months",
      beforeImage: "https://ucarecdn.com/8eaacf32-21f0-42ad-ae16-a824306b9e90/beforekalif.png",
      afterImage: "https://ucarecdn.com/9601504b-7d91-42a1-a327-fa479a7ca934/afterkalif.png",
      story: "Built 15 pounds of muscle while maintaining my busy work schedule. The flexible training options made all the difference."
    },
    {
      name: "Kalif",
      duration: "4 months",
      beforeImage: "https://ucarecdn.com/8eaacf32-21f0-42ad-ae16-a824306b9e90/beforekalif.png",
      afterImage: "https://ucarecdn.com/9601504b-7d91-42a1-a327-fa479a7ca934/afterkalif.png",
      story: "Achieved my dream physique and competed in my first bodybuilding competition. OLD SKOOL's support was incredible."
    }
  ];

  return (
    <section id="results" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            REAL <span className="text-yellow-400">RESULTS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See the amazing transformations achieved by our OLD SKOOL family
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {transformations.map((transformation, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="text-center">
                  <img
                    src={transformation.beforeImage}
                    alt={`${transformation.name} before`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-gray-400 text-sm mt-2 font-semibold">BEFORE</p>
                </div>
                <div className="text-center">
                  <img
                    src={transformation.afterImage}
                    alt={`${transformation.name} after`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-yellow-400 text-sm mt-2 font-semibold">AFTER</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{transformation.name}</h3>
                <p className="text-yellow-400 font-semibold mb-4">{transformation.duration} transformation</p>
                <p className="text-gray-300 text-sm leading-relaxed">{transformation.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;