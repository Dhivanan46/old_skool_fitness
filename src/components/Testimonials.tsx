import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Siva Sudhanoffical",
      rating: 5,
      text: "Old Skool Gym is the perfect place for anyone serious about fitness. The equipment is top-notch, the trainers are knowledgeable and motivating, and the atmosphere pushes you to give your best every day. It truly brings back that hardcore, no-nonsense gym vibe. Highly recommend it for those who want real results!",
      image: "https://ucarecdn.com/28a81a7d-b3d5-40b0-9133-bb61027f69eb/kalif.jpg"
    },
    {
      name: "Adarsh Suresh",
      rating: 5,
      text: "The gym offers a clean, motivating space with great equipment and supportive trainers. It’s perfect for building fitness, staying consistent, and improving overall health. A great place to push your limits and feel your best.",
      image: "https://ucarecdn.com/28a81a7d-b3d5-40b0-9133-bb61027f69eb/kalif.jpg"
    },
    {
      name: "Pradeep",
      rating: 5,
      text: "Excellent trainers and facilities .The gym school provides a supportive environment to learn and grow. Highly recommend for fitness enthusiasts of all levels",
      image: "https://ucarecdn.com/28a81a7d-b3d5-40b0-9133-bb61027f69eb/kalif.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            MEMBER <span className="text-yellow-400">REVIEWS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear what our OLD SKOOL family has to say about their experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
              "{testimonials[currentSlide].text}"
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-white font-bold text-lg">{testimonials[currentSlide].name}</h4>
                <p className="text-yellow-400">OLD SKOOL Member</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;