"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Shield,
  AlertTriangle,
  DollarSign,
  Lock,
  Eye,
  ArrowRight,
  Code,
  Users,
  Building,
  TrendingDown,
} from "lucide-react";

const SoftwarePiracy = () => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const expandableVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const piracyTypes = [
    {
      title: "Unauthorized Copying",
      description:
        "Making duplicates of the software without the right to do so",
      details:
        "This could be burning a CD, copying files to a USB drive, or uploading to a shared network beyond the scope of the license.",
    },
    {
      title: "Unauthorized Distribution",
      description:
        "Sharing copies of the software with others who are not covered by the original license",
      details:
        "This includes giving copies to friends, uploading to file-sharing sites, or selling illegal copies.",
    },
    {
      title: "Unauthorized Modification",
      description: "Altering the software code without permission",
      details:
        "This can lead to instability, security vulnerabilities, or the creation of derivative works that infringe on the original copyright.",
    },
    {
      title: "Unauthorized Use",
      description:
        "Using the software in a way that violates the terms of the software license agreement",
      details:
        "This could include installing a single-user license on multiple computers, using educational versions for commercial purposes, or exceeding the number of concurrent users allowed by a network license.",
    },
  ];

  const effectsData = [
    {
      category: "Software Developers & Companies",
      icon: <Building className="w-8 h-8" />,
      impacts: [
        "Loss of Revenue: Significant reduction in sales and potential revenue",
        "Reduced Investment in R&D: Lower revenues impact ability to invest in future innovation",
        "Increased Development Costs: More spending on anti-piracy measures",
        "Damage to Brand Reputation: Widespread piracy devalues software brand",
        "Loss of Market Share: Pirated software undermines legitimate vendors",
        "Business Failure: Devastating impact on smaller developers and startups",
      ],
    },
    {
      category: "Businesses (Using Pirated Software)",
      icon: <Users className="w-8 h-8" />,
      impacts: [
        "Security Risks: Malware, viruses, and malicious software bundled with pirated versions",
        "Lack of Support and Updates: No security updates, bug fixes, or technical support",
        "Legal Liabilities: Severe penalties, fines, and potential lawsuits",
        "Operational Instability: Unstable software prone to errors and crashes",
        "Reputational Damage: Demonstrates lack of ethical and legal compliance",
      ],
    },
    {
      category: "Consumers",
      icon: <Shield className="w-8 h-8" />,
      impacts: [
        "Security Risks: Personal data and financial information compromise",
        "Lack of Support and Updates: No performance improvements or security fixes",
        "No Warranty or Guarantees: No recourse if software damages systems",
        "Ethical Concerns: Contributing to undermining creators' rights",
        "Potential Legal Consequences: Risk of legal action for using pirated software",
      ],
    },
    {
      category: "Economy",
      icon: <TrendingDown className="w-8 h-8" />,
      impacts: [
        "Reduced Economic Growth: Hinders growth of the software industry",
        "Job Losses: Lower revenues lead to job losses within the industry",
        "Loss of Tax Revenue: Unreported sales lead to lost government revenue",
        "Undermining Innovation: Discourages development of new software",
        "Unfair Competition: Businesses using pirated software gain unfair advantages",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-black text-white py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1
              className=" text-xl md:text-3xl text-left mt-6 md:text-center  font-bold mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Software Piracy
            </motion.h1>
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className=" text-base md:text-xl text-left md:text-center text-gray-300 leading-relaxed font-light">
                Comprehensive anti-piracy solutions and legal expertise to
                protect your software investments and recover lost revenue
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20"
      >
        {/* Expertise Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200 relative overflow-hidden -mt-10 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-black rounded-xl text-white">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-semibold text-black">
                    Our Expertise
                  </h2>
                </motion.div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Our website features a dedicated section addressing software
                  piracy, a core area of our firm's expertise. We have a proven
                  track record of assisting software companies in recovering
                  lost revenue, expanding sales, and achieving broader market
                  penetration across diverse industries and geographic regions.
                </p>

                <motion.button
                  className="bg-black text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Our Services
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-black rounded-2xl blur-2xl opacity-10 transform rotate-3" />
                <div className="bg-gray-100 rounded-2xl p-8 relative z-10 shadow-xl">
                  <Image
                    src="/Spiracy.png"
                    alt="Software piracy illustration"
                    width={400}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* What is Software Piracy Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              What is Software Piracy?
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Software piracy is the unauthorized copying, distribution,
              modification, or use of software. It violates the copyright laws
              that protect software programs, treating them like literary works.
              Essentially, it's using software in a way that the license
              agreement or copyright law doesn't permit.
            </p>

            <motion.div
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="text-gray-700 leading-relaxed">
                Think of it like making unauthorized copies of a book or movie –
                you're taking something that someone else created and using it
                without their permission and without compensating them.
              </p>
            </motion.div>

            <h3 className="text-2xl font-bold text-black mb-6">
              Types of Software Piracy:
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {piracyTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h4 className="font-semibold text-black mb-2">
                    • {type.title}:
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    {type.description}
                  </p>
                  <p className="text-gray-600 text-xs">{type.details}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-black p-6 rounded-xl text-white"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 className="font-semibold mb-3">Key Takeaway:</h4>
              <p className="text-gray-300">
                Software piracy is about using software in a way that infringes
                upon the copyright holder's exclusive rights. It undermines the
                efforts and investments of software developers and companies.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Effects Section */}
        <motion.div
          variants={itemVariants}
          className="space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Effects of Software Piracy
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Software piracy has significant and far-reaching negative effects
              on various stakeholders, including software developers,
              businesses, consumers, and the economy as a whole.
            </p>
          </div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {effectsData.map((effect, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="text-black"
                    >
                      {effect.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-black ml-4">
                      {effect.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {effect.impacts.map((impact, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm font-medium">
                          {impact}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual Illustration */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-black rounded-2xl blur-2xl opacity-10 transform -rotate-3" />
                <div className="bg-gray-100 rounded-2xl p-8 relative z-10 shadow-xl">
                  <Image
                    src="/Spiracy_types.png"
                    alt="Types of software piracy"
                    width={400}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black">
                The Impact Visualization
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Software piracy creates a cascade of negative effects that
                ripple through the entire technology ecosystem, affecting
                innovation, security, and economic growth.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <DollarSign className="w-6 h-6" />,
                    label: "Revenue Loss",
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    label: "Security Risks",
                  },
                  {
                    icon: <AlertTriangle className="w-6 h-6" />,
                    label: "Legal Issues",
                  },
                  { icon: <Lock className="w-6 h-6" />, label: "No Support" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-black">{item.icon}</div>
                    <span className="text-sm font-medium text-gray-700">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Conclusion Section */}
        <motion.div
          className="bg-black rounded-2xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Conclusion</h3>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              In conclusion, software piracy has widespread and detrimental
              effects that impact creators, businesses, consumers, and the
              overall economy. It undermines innovation, creates security risks,
              and can lead to significant legal and financial consequences.
            </p>

            <motion.div
              className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="text-white font-medium">
                Promoting the use of legitimate software benefits everyone in
                the long run by supporting a healthy and thriving technology
                ecosystem.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="bg-black py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Protect Your Software Rights
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contact our experts to learn how we can help safeguard your
            intellectual property and recover lost revenue
          </motion.p>
          <motion.button
            className="bg-white text-black px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Get Expert Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SoftwarePiracy;
