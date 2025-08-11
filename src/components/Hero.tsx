import React from 'react';

const Hero = () => {
  const handleJoinNow = () => {
    const message = encodeURIComponent("Hi! I'm interested in joining OLD SKOOL gym. Can you tell me more about your membership plans?");
    window.open(`https://wa.me/+919751900299?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://ucarecdn.com/5f163025-4959-472b-a58a-50d41871886f/hero.png')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-60">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span className="text-yellow-400">OLD SKOOL</span>
          <br />
          FITNESS 
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium">
          Train Hard. Stay Strong. Be OLD SKOOL.
        </p>
        <button
          onClick={handleJoinNow}
          className="bg-yellow-400 text-black px-8 py-4 text-lg font-bold rounded-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          JOIN NOW
        </button>
      </div>

     
      
    </section>
  );
};

export default Hero;