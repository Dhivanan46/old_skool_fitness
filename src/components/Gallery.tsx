import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      size: "square",
      gridArea: "1 / 1 / 3 / 3"
    },
    {
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
      size: "tall",
      gridArea: "1 / 3 / 3 / 4"
    },
    {
      image: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      size: "square",
      gridArea: "1 / 4 / 2 / 5"
    },
    {
      image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      size: "square",
      gridArea: "2 / 4 / 3 / 5"
    },
    {
      image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      size: "wide",
      gridArea: "3 / 1 / 4 / 3"
    },
    {
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      size: "square",
      gridArea: "3 / 3 / 4 / 4"
    },
    {
      image: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      size: "square",
      gridArea: "3 / 4 / 4 / 5"
    },
    {
      image: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      size: "square",
      gridArea: "4 / 1 / 5 / 2"
    },
    {
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      size: "square",
      gridArea: "4 / 2 / 5 / 3"
    },
    {
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      size: "wide",
      gridArea: "4 / 3 / 5 / 5"
    },
    {
      image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      size: "wide",
      gridArea: "5 / 1 / 6 / 3"
    },
    {
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop",
      size: "tall",
      gridArea: "5 / 3 / 7 / 4"
    },
    {
      image: "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      size: "square",
      gridArea: "5 / 4 / 6 / 5"
    },
    {
      image: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      size: "square",
      gridArea: "6 / 1 / 7 / 2"
    },
    {
      image: "https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      size: "square",
      gridArea: "6 / 2 / 7 / 3"
    },
    {
      image: "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      size: "square",
      gridArea: "6 / 4 / 7 / 5"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
            GYM <span className="text-yellow-400">GALLERY</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities
          </p>
        </div>

        {/* Desktop Instagram-style Grid */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <div 
            className="grid gap-2"
            style={{
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(6, 200px)',
              height: '1220px'
            }}
          >
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                style={{ gridArea: item.gridArea }}
              >
                <img
                  src={item.image}
                  alt={`Gym facility ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-yellow-400/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 text-white px-4 py-2 rounded-lg">
                    <span className="text-sm font-semibold">View Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {galleryItems.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={item.image}
                alt={`Gym facility ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-yellow-400/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;