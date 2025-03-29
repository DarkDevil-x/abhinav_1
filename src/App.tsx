import React, { useState, useEffect } from 'react';
import { Instagram, Play, Users, TrendingUp, ChevronDown, Mail, Phone, MessageSquare, Menu, X, Star, Building, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

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

  const fadeInUp = (id: string) => 
    isVisible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text hover:scale-105 transition-transform">
              RGI
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
            RGI 
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
               At RGI Creation, we believe in the transformative power of digital connectivity. As a passionate team of young innovators, our vision is to bridge the gap between remote areas and the digital world, empowering businesses, startups, and communities to thrive in the ever-evolving online landscape. We are committed to fueling India’s Digital Revolution by providing cutting-edge social media marketing solutions that amplify voices, boost brands, and unlock limitless opportunities
              </p>
              <p className="text-gray-600 mb-6">
                Our mission goes beyond just marketing—we are here to create impact, drive progress, and shape a future where every corner of India is digitally empowered. Let’s change the world with digital!

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
         reelUrl: 'https://www.instagram.com/reel/DF4SMonzgBh/',
         thumbnail: '/IP534.jpg', // Replace with actual thumbnail URLs
         title: 'JDS Padrauna',
         category: 'School',
         // views: '2.5M views'
       },
        {
          reelUrl: 'https://www.instagram.com/reel/DGX5Sm2MLgP/',
          thumbnail: '/IP103.jpg',
          title: 'AISSHPRA GEMS AND JEWELS BASTI',
          category: 'Shop',
          // views: '1.8M views'
        },
        {
          reelUrl: 'https://www.instagram.com/reel/DHIADvBRNAv/',
          thumbnail: '/IP771.jpg',
          title: 'TVS Padrauna',
          category: 'Shop',
          // views: '1.8M views'
        },
        {
          reelUrl: 'https://www.instagram.com/reel/DBDjVvWSkJO/',
          thumbnail: '/IP162.jpg',
          title: 'Chai Mitra',
          category: 'Cafe',
          // views: '1.8M views'
        },
        {
          reelUrl: 'https://www.instagram.com/reel/DF9oD5URFPG/',
          thumbnail: '/IP459.jpg',
          title: 'SETH M. R. JAIPURIA SCHOOL, PADRAUNA',
          category: 'School',
          // views: '1.8M views'
        },
        {
          reelUrl: 'https://www.instagram.com/p/DHbT3ghz80Z/',
          thumbnail: '/IP552.jpg',
          title: 'KSS Study Point',
          category: 'Coaching',
          // views: '1.8M views'
        },
        // Add your other 4 reels here...
      ].map((work, index) => (
        <Card key={index} className="overflow-hidden h-full flex flex-col">
          <AspectRatio ratio={13/16} className="w-full bg-gray-100 relative group">
            {/* Thumbnail image with clickable overlay */}
            <a 
              href={work.reelUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <img 
                src={work.thumbnail} 
                alt={work.title}
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="sr-only">View Reel</span>
              </div>
              {/* Instagram badge */}
              <div className="absolute bottom-2 left-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-2 py-1 rounded flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram Reel
              </div>
            </a>
          </AspectRatio>
          <CardHeader>
            <CardTitle className="text-xl">{work.title}</CardTitle>
            <CardDescription className="text-purple-600">{work.category}</CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto">
            <p className="text-sm text-gray-600">{work.views}</p>
          </CardFooter>
        </Card>
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
            {[
              "JDS Padrauna",
              "Chai Mitra",
              "AISSHPRA Basti",
              "TVS Padrauna",
              "JAIPURIA padrauna",
              "KSS Study Point",
              "Radiant Classes"
            ].map((clientName, index) => (
              <div key={`${groupIndex}-${index}`} className="flex-shrink-0 w-48 mx-8">
                <div className="bg-white p-8 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg border border-purple-100 h-full">
                  <span className="text-lg font-medium text-gray-700 opacity-50 hover:opacity-100 transition-opacity duration-300 text-center">
                    {clientName}
                  </span>
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
                name: "JDS Padrauna",
                role: "Marketing Director",
                company: "School",
                text: "ReelCraft transformed our Instagram presence. Our engagement has increased by 300% since working with them."
              },
              {
                name: "Chai Mitra",
                role: "Owner",
                company: "Cafe",
                text: "The team's creativity and attention to detail is unmatched. They've helped us build a strong social media presence from scratch."
              },
              {
                name: "TVS Padrauna",
                role: "Brand Manager",
                company: "Showroom",
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
          <p>© 2025 RGI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
