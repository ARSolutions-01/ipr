"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Copyright,
  Code,
  Copy,
  Briefcase,
  Star,
  Database,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

const IPServicesBento = () => {
  const services = [
    {
      label: "Trademark Infringement",
      icon: <Shield className="w-8 h-8 mb-2" />,
      description:
        "Protect your brand from unauthorized use and confusion in the marketplace.",
      link: "/services/tradeMark",
    },
    {
      label: "Copyright Infringement",
      icon: <Copyright className="w-8 h-8 mb-2" />,
      description:
        "Safeguard your creative works from unauthorized copying and distribution.",
      link: "/services/copyright-infringement",
    },
    {
      label: "Software Piracy",
      icon: <Code className="w-8 h-8 mb-2" />,
      description:
        "Combat illegal use and distribution of your software products.",
      link: "/services/software-piracy",
    },
    {
      label: "Duplicacy & Counterfeiture",
      icon: <Copy className="w-8 h-8 mb-2" />,
      description:
        "Prevent fake and duplicate products from harming your business.",
      link: "/services/duplicacy-counterfeiture",
    },
    {
      label: "Brand Management",
      icon: <Briefcase className="w-8 h-8 mb-2" />,
      description: "Enhance and defend your brand's reputation and value.",
      link: "/services/brand-management",
    },
    {
      label: "Reputation Management",
      icon: <Star className="w-8 h-8 mb-2" />,
      description: "Monitor and improve your business's public perception.",
      link: "/services/reputation-management",
    },
    {
      label: "Data Theft & Forgery",
      icon: <Database className="w-8 h-8 mb-2" />,
      description: "Protect sensitive data and prevent document forgery.",
      link: "/services/data-theft-forgery",
    },
  ];

  const features = [
    {
      title: "Expert Legal Team",
      description:
        "Experienced attorneys specializing in intellectual property law",
    },
    {
      title: "Comprehensive Protection",
      description: "Full-spectrum IP services from registration to enforcement",
    },
    {
      title: "Global Reach",
      description: "International IP protection and enforcement capabilities",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        className="bg-black text-white py-20 px-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Intellectual Property Services
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Protect, manage, and enhance your brand and creative assets with our
            comprehensive suite of IP services.
          </motion.p>
        </div>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-4 pb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 auto-rows-auto">
          {/* Featured Service */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2 bg-black text-white rounded-3xl p-8 relative overflow-hidden"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="text-white mb-4">{services[0].icon}</div>
              <h2 className="text-2xl font-black mb-4">{services[0].label}</h2>
              <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                {services[0].description}
              </p>
              <MotionLink
                href={services[0].link}
                className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2 self-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </MotionLink>
            </div>
          </motion.div>

          {/* Medium Cards */}
          {services.slice(1, 3).map((service, index) => (
            <motion.div
              key={index}
              className="lg:col-span-2 bg-white border-2 border-black rounded-3xl p-6 hover:bg-gray-50 transition-colors"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="text-black mb-3">{service.icon}</div>
              <h3 className="text-xl font-black mb-3 text-black">
                {service.label}
              </h3>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <MotionLink
                href={service.link}
                className="border border-black text-black hover:bg-black hover:text-white transition-all px-4 py-2 rounded-xl font-bold text-sm inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </MotionLink>
            </motion.div>
          ))}

          {/* Small Cards */}
          {services.slice(3).map((service, index) => (
            <motion.div
              key={index}
              className={`${
                index === 0 || index === 3 ? "lg:col-span-3" : "lg:col-span-2"
              } bg-gray-100 border border-gray-300 rounded-3xl p-6 hover:bg-gray-200 transition-colors`}
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="text-black mb-3">{service.icon}</div>
              <h3 className="text-lg font-black mb-3 text-black">
                {service.label}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <MotionLink
                href={service.link}
                className="border border-black text-black hover:bg-black hover:text-white transition-all px-4 py-2 rounded-xl font-bold text-sm inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </MotionLink>
            </motion.div>
          ))}

          {/* Why Choose Us */}
          <motion.div
            className="lg:col-span-3 bg-gradient-to-br from-black to-gray-800 text-white rounded-3xl p-8"
            variants={itemVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-black mb-6">
              Why Choose Our IP Services?
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="border-l-2 border-white pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="lg:col-span-3 bg-white border-2 border-black rounded-3xl p-8 text-center relative overflow-hidden"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4 text-black">
                Ready to protect your intellectual property?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of experts is ready to help you safeguard your creative
                assets and business innovations. Schedule a consultation today.
              </p>
              <MotionLink
                href="/contact"
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-black rounded-xl inline-flex items-center gap-2 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </MotionLink>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            className="lg:col-span-6 bg-gray-50 rounded-3xl p-8 text-center border border-gray-200"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.p
              className="text-xl font-bold text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Protecting innovation, one idea at a time.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default IPServicesBento;
