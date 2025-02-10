import React, { useState, useEffect } from 'react';
import { Instagram, Play, Users, TrendingUp, ChevronDown, Mail, Phone, MessageSquare, Menu, X, Star, Building, Briefcase } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const fadeInUp = (id) => 
    isVisible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text hover:scale-105 transition-transform">
              ReelCraft
            </a>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="animate-spin text-purple-600" /> : <Menu className="hover:rotate-180 transition-transform duration-300 text-purple-600" />}
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {['about', 'services', 'work', 'clients', 'testimonials'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="text-gray-600 hover:text-purple-600 transition-colors hover:-translate-y-1 transform duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 hover:shadow-lg hover:shadow-purple-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className={`md:hidden transform transition-all duration-300 ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}`}>
            <div className="flex flex-col space-y-4 py-4">
              {['about', 'services', 'work', 'clients', 'testimonials'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className="text-gray-600 hover:text-purple-600 transition-colors transform hover:translate-x-2 duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/50 to-purple-100/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80"
            alt="Digital Marketing Background"
            className="w-full h-full object-cover opacity-20 scale-110 animate-float"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text transform transition-all duration-700 hover:scale-105">
            ReelCraft
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            Transforming Brands Through Compelling Social Stories
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
            <a 
              href="#work" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:scale-105 transition-transform duration-200 hover:shadow-lg hover:shadow-purple-200 group"
            >
              View Our Work
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors duration-200"
            >
              Our Services
            </a>
          </div>
          <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-600" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 delay-200 ${fadeInUp('about')}`}>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                ReelCraft is a cutting-edge digital marketing agency specializing in creating viral-worthy reels and managing Instagram accounts that stand out in today's crowded social media landscape.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2023, we've quickly become the go-to agency for brands looking to make their mark on Instagram. Our team of creative professionals combines artistic vision with data-driven strategies to deliver results that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg hover:scale-105 transition-transform duration-300 border border-purple-100">
                  <Building className="w-8 h-8 text-purple-600 mb-2" />
                  <h3 className="font-bold mb-2 text-gray-800">Our Mission</h3>
                  <p className="text-sm text-gray-600">To elevate brands through creative storytelling</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg hover:scale-105 transition-transform duration-300 border border-purple-100">
                  <Briefcase className="w-8 h-8 text-purple-600 mb-2" />
                  <h3 className="font-bold mb-2 text-gray-800">Our Vision</h3>
                  <p className="text-sm text-gray-600">Setting new standards in digital marketing</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Team at work"
                className="relative rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                <p className="text-4xl font-bold mb-2 text-gray-800">5+ Years</p>
                <p className="text-sm text-gray-600">Combined Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Play,
                title: "Reel Production",
                description: "Crafting scroll-stopping reels that capture attention and drive engagement."
              },
              {
                icon: Instagram,
                title: "Instagram Management",
                description: "Full-service Instagram growth and management to build your brand presence."
              },
              {
                icon: TrendingUp,
                title: "Strategy & Analytics",
                description: "Data-driven strategies to maximize your social media ROI."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl border border-purple-100"
              >
                <service.icon className="w-12 h-12 text-purple-600 mb-4 transform group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: '1611162616305-7579d5f4e640',
                title: 'Fashion Campaign',
                category: 'Instagram Reels',
                views: '2.5M views'
              },
              {
                image: '1611162618071-b39a2ec055fb',
                title: 'Tech Launch',
                category: 'Product Showcase',
                views: '1.8M views'
              },
              {
                image: '1611162616475-46b635cb6868',
                title: 'Food Series',
                category: 'Content Strategy',
                views: '3.2M views'
              },
              {
                image: '1611162615347-4cfe6d7a0115',
                title: 'Travel Diary',
                category: 'Story Highlights',
                views: '900K views'
              },
              {
                image: '1611162617213-7d23a686efcd',
                title: 'Fitness Journey',
                category: 'Instagram Reels',
                views: '1.5M views'
              },
              {
                image: '1611162616187-5ce26856a98b',
                title: 'Beauty Tips',
                category: 'Tutorial Series',
                views: '2.1M views'
              }
            ].map((work, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-purple-100"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${work.image}?auto=format&fit=crop&q=80`}
                  alt={work.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {work.title}
                    </h3>
                    <p className="text-sm text-purple-600 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {work.category}
                    </p>
                    <p className="text-sm text-gray-600 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {work.views}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="clients" className="py-20 bg-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Trusted By</h2>
        </div>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-slide client-scroll">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex">
                  {[1, 2, 3, 4, 5, 6, 8].map((item) => (
                    <div key={`${groupIndex}-${item}`} className="flex-shrink-0 w-48 mx-8">
                      <div className="bg-white p-8 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg border border-purple-100">
                        <img 
                          src={`https://images.unsplash.com/photo-${[
                            '1611162618071-b39a2ec055fb',
                            '1611162616475-46b635cb6868',
                            '1611162615347-4cfe6d7a0115',
                            '1611162617213-7d23a686efcd',
                            '1611162616187-5ce26856a98b',
                            '1611162616305-7579d5f4e640',
                            '1552664730-d307ca884978',
                            '1533750516457-a7f992034fec'
                          ][item - 1]}?auto=format&fit=crop&q=80&w=200&h=100`}
                          alt={`Client ${item}`}
                          className="max-h-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                company: "Fashion Brand",
                text: "ReelCraft transformed our Instagram presence. Our engagement has increased by 300% since working with them."
              },
              {
                name: "Michael Chen",
                role: "CEO",
                company: "Tech Startup",
                text: "The team's creativity and attention to detail is unmatched. They've helped us build a strong social media presence from scratch."
              },
              {
                name: "Emma Davis",
                role: "Brand Manager",
                company: "Lifestyle Company",
                text: "Their reel production quality is outstanding. Each piece of content tells our brand story perfectly."
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="group bg-purple-50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-purple-100"
              >
                <div className="flex items-center text-purple-600 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="group-hover:animate-spin" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-purple-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "500+", label: "Reels Created" },
              { value: "50M+", label: "Views Generated" },
              { value: "100+", label: "Happy Clients" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text group-hover:animate-pulse">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Mail, text: "Email Us", href: "mailto:hello@reelcraft.com" },
                { icon: Phone, text: "Call Us", href: "tel:+1234567890" },
                { icon: MessageSquare, text: "Live Chat", href: "#" }
              ].map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href} 
                  className="group flex flex-col items-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-all duration-300 hover:scale-105 border border-purple-100"
                >
                  <contact.icon className="w-8 h-8 mb-4 text-purple-600 group-hover:animate-bounce" />
                  <span className="text-gray-600 group-hover:text-purple-600 transition-colors">{contact.text}</span>
                </a>
              ))}
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="bg-purple-50 border border-purple-200 rounded-lg p-4 focus:outline-none focus:border-purple-600 transition-all duration-300 focus:ring-2 focus:ring-purple-200 text-gray-800"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-purple-50 border border-purple-200 rounded-lg p-4 focus:outline-none focus:border-purple-600 transition-all duration-300 focus:ring-2 focus:ring-purple-200 text-gray-800"
                />
              </div>
              <textarea 
                placeholder="Message" 
                rows={6}
                className="w-full bg-purple-50 border border-purple-200 rounded-lg p-4 focus:outline-none focus:border-purple-600 transition-all duration-300 focus:ring-2 focus:ring-purple-200 text-gray-800"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-lg font-bold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-purple-50 border-t border-purple-100">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 ReelCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;