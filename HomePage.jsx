// src/HomePage.jsx
import React from "react";
import { Mail, Rocket, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "Fast Performance",
    description: "Enjoy blazing speed with our advanced infrastructure.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Secure by Design",
    description: "Top-level security built into every feature and layer.",
  },
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "24/7 Support",
    description: "Our team is always here to help, anytime, anywhere.",
  },
];

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white min-h-screen flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to FutureTech</h1>
        <p className="text-lg md:text-2xl mb-6">Building the web of tomorrow, today.</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-xl shadow hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition transform"
              >
                <div className="w-12 h-12 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 rounded-xl p-3"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 border border-gray-300 rounded-xl p-3"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                className="w-full mt-1 border border-gray-300 rounded-xl p-3"
                rows="4"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FutureTech. All rights reserved.
      </footer>
    </div>
  );
}

