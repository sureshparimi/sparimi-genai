
import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, Star } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const achievements = [
    { number: "13,164", label: "LinkedIn Followers" },
    { number: "500+", label: "Professional Connections" },
    { number: "Top 5%", label: "Topmate Ranking" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-300">
              Ready to transform your QA processes? Let's discuss how we can work together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm passionate about creating future-ready, intelligent QA ecosystems. 
                  Let's connect if you're transforming QA or looking to scale automation 
                  and release maturity with innovation and intent.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:reachparimi@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                    reachparimi@gmail.com
                  </a>
                  <a 
                    href="https://linkedin.com/in/suresh-parimi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    LinkedIn Profile
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    Uithoorn, North Holland, Netherlands
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
                    <div className="text-gray-300 text-sm">{achievement.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Open to Work */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Open to Work</span>
                </div>
                <p className="text-gray-300 text-sm">
                  SDET, Quality Assurance Test Lead, Test Manager and Release Manager roles
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or how we can collaborate..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
