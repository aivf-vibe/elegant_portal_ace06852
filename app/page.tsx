"use client";

import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaChartLine, FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";
import { FiArrowRight, FiCheck, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "Advanced AI Models",
      description: "Cutting-edge machine learning algorithms that adapt and evolve with your needs"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Comprehensive insights and data visualization for informed decision-making"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to protect your data"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Infrastructure that grows with your business needs seamlessly"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$49",
      features: ["5 AI Models", "10,000 API Calls", "Basic Analytics", "Email Support"],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      features: ["20 AI Models", "100,000 API Calls", "Advanced Analytics", "Priority Support", "Custom Integrations"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited AI Models", "Unlimited API Calls", "Enterprise Analytics", "24/7 Support", "Custom Development", "SLA Guarantee"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto section-padding py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <FaRobot className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold gradient-text">Nidum AI</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="gradient-text">Nidum AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionizing the future with intelligent solutions that transform how businesses operate and innovate
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <FiArrowRight />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 blur-3xl opacity-30 rounded-full"></div>
              <div className="relative glass-effect rounded-2xl p-8 max-w-4xl mx-auto float-animation">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
                  alt="AI Technology"
                  className="rounded-lg w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to harness the power of artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover-scale"
              >
                <div className="text-yellow-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                    : "glass-effect"
                } hover-scale`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-yellow-400 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-black" : "text-white"}`}>{plan.name}</h3>
                <div className={`text-4xl font-bold mb-6 ${plan.popular ? "text-black" : "text-white"}`}>
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-lg font-normal">/month</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center ${plan.popular ? "text-black" : "text-gray-200"}`}>
                      <FiCheck className={`w-5 h-5 mr-2 ${plan.popular ? "text-black" : "text-green-400"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? "bg-black text-yellow-400 hover:bg-gray-900"
                    : "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:shadow-lg"
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="gradient-text">Nidum AI</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2024, Nidum AI is at the forefront of artificial intelligence innovation. 
                Our mission is to democratize AI technology and make it accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                With a team of world-class researchers and engineers, we're building the next generation 
                of AI solutions that are not just powerful, but also ethical, transparent, and user-friendly.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-3xl font-bold gradient-text mb-2">500+</h3>
                  <p className="text-gray-300">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold gradient-text mb-2">99.9%</h3>
                  <p className="text-gray-300">Uptime</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold gradient-text mb-2">24/7</h3>
                  <p className="text-gray-300">Support</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 blur-3xl opacity-30 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop"
                alt="AI Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with AI Innovations
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter and be the first to know about new features and updates
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 text-center hover-scale"
            >
              <FiMail className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">hello@nidumai.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-effect rounded-2xl p-6 text-center hover-scale"
            >
              <FiPhone className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-2xl p-6 text-center hover-scale"
            >
              <FiMapPin className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300">San Francisco, CA</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 section-padding border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <FaRobot className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold gradient-text">Nidum AI</span>
            </div>
            
            <p className="text-gray-400 text-center md:text-right">
              © 2024 Nidum AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}