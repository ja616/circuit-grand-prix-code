
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Thank you for your message! The pit crew will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="mk-section bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="mb-2">📬</div>
          <h2 className="mk-title text-3xl md:text-4xl lg:text-5xl font-bold">Talk to the Pit Crew</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-mk-purple animate-pulse-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl">🤖</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white font-racing mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-4 py-2 text-white"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-racing mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-4 py-2 text-white"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-racing mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-4 py-2 text-white resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="mk-btn w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
