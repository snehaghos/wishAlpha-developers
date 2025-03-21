// DeveloperLandingPage.js
import React, { useState } from "react";
import { motion } from "framer-motion";

import Feature from "../../../components/Features/Feature";
import Navbar from "../../../components/Navbar/Navbar";
import Carousal from "../../../components/Carousal/Carousal";
import Testimonials from "../../../components/Testimonials/Testimonials";
// import Pricing from "../../../components/Pricing/Pricing";
import Footer from "../../../components/Footer/Footer";
import RegistrationModal from "../../../components/RegistrationModal/RegistrationModal";

// Dummy data
const features = [
  { id: 1, title: "Global Reach", description: "Reach millions of players worldwide.", icon: "🌍", color: "bg-purple-600" },
  { id: 2, title: "Easy to Use", description: "Simple tools to publish and manage your games.", icon: "🛠️", color: "bg-blue-600" },
  { id: 3, title: "Monetization", description: "Earn revenue through ads and in-game purchases.", icon: "💰", color: "bg-green-600" },
];

const testimonials = [
  { id: 1, name: "John Doe", role: "Indie Developer", comment: "WishAlpha helped me reach millions of players. Highly recommended!", image: "/images/profile1.jpg" },
  { id: 2, name: "Jane Smith", role: "Game Designer", comment: "The platform is easy to use, and the support team is amazing.", image: "/images/profile2.jpg" },
];

const pricingPlans = [
  { id: 1, title: "Starter", price: "Free", features: ["Publish 1 game", "Basic analytics", "Community support"], color: "bg-purple-600" },
  { id: 2, title: "Pro", price: "$10/month", features: ["Publish up to 5 games", "Advanced analytics", "Priority support"], color: "bg-blue-600" },
  { id: 3, title: "Enterprise", price: "Custom", features: ["Unlimited games", "Dedicated account manager", "Custom branding"], color: "bg-green-600" },
];

const DevLanding = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar onRegisterClick={() => setIsRegisterOpen(true)} />
      <Carousal onRegisterClick={() => setIsRegisterOpen(true)} />

      {/* Why Choose Us Section */}
      <div className="py-16 px-6 bg-gray-800">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Feature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-6 bg-gray-800">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Developers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Testimonials key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      {/* <div className="py-16 px-6 bg-gray-900">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Pricing key={plan.id} plan={plan} />
          ))}
        </div>
      </div> */}

      <Footer />
      {isRegisterOpen && <RegistrationModal onClose={() => setIsRegisterOpen(false)} />}
    </div>
  );
};

export default DevLanding;