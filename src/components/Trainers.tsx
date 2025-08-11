import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: "Nisanth",
      specialty: "Strength Training & Powerlifting",
      image: "https://ucarecdn.com/d17759c6-e57f-433f-9d68-866dd01d90d5/nisanth.png",
      bio: "5+ years experience, former competitive powerlifter"
    },
    {
      name: "Rooban",
      specialty: "CrossFit & Functional Training",
      image: "https://ucarecdn.com/92344c79-8579-43fc-9697-f2b64407c972/rooban.png",
      bio: "CrossFit Level 3 trainer and nutrition specialist"
    },
    {
      name: "Nisanth",
      specialty: "Strength Training & Powerlifting",
      image: "https://ucarecdn.com/d17759c6-e57f-433f-9d68-866dd01d90d5/nisanth.png",
      bio: "5+ years experience, former competitive powerlifter"
    },
    {
      name: "Rooban",
      specialty: "CrossFit & Functional Training",
      image: "https://ucarecdn.com/92344c79-8579-43fc-9697-f2b64407c972/rooban.png",
      bio: "CrossFit Level 3 trainer and nutrition specialist"
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            EXPERT <span className="text-yellow-400">TRAINERS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet our certified professionals dedicated to your fitness success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-yellow-400 font-semibold mb-3">{trainer.specialty}</p>
                <p className="text-gray-300 text-sm">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;