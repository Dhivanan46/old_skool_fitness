import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi! My name is ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`
    );
    window.open(`https://wa.me/+919751900299?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
            GET IN <span className="text-yellow-400">TOUCH</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your OLD SKOOL journey? Contact us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <MapPin className="text-black" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-black">Address</h3>
                <p className="text-gray-600"> 15 Velampalayam, Tiruppur</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <Phone className="text-black" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-black">Phone</h3>
                <p className="text-gray-600">+91 9751900299</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <Mail className="text-black" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-black">Email</h3>
                <p className="text-gray-600">info@oldskoolfit.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-lg text-black mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-black p-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                  <Facebook className="text-yellow-400" size={24} />
                </a>
                <a href="https://www.instagram.com/oldskoolfitnessstudio/" className="bg-black p-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                  <Instagram className="text-yellow-400" size={24} />
                </a>
                <a href="#" className="bg-black p-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                  <Twitter className="text-yellow-400" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-black mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;