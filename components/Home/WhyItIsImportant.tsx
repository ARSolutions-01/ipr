"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Shield,
  TrendingUp,
  DollarSign,
  Award,
  Users,
  Scale,
  Heart,
  Building,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Encourages Innovation",
    desc: "IP protection provides inventors and creators with the incentive to develop new ideas and technologies by ensuring they can benefit from their work.",
    icon: Sparkles,
    color: "from-gray-500 to-gray-700",
    bgColor: "bg-gray-50",
  },
  {
    title: "Economic Growth",
    desc: "IP protection helps stimulate economic growth by allowing creators to monetize their inventions.",
    icon: TrendingUp,
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-100",
  },
  {
    title: "Revenue Generation",
    desc: "IP can be licensed or sold, creating additional revenue streams for businesses and individuals.",
    icon: DollarSign,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-200",
  },
  {
    title: "Competitive Advantage",
    desc: "Protecting IP gives businesses a competitive edge by preventing others from copying or using their unique products.",
    icon: Award,
    color: "from-gray-800 to-black",
    bgColor: "bg-gray-300",
  },
  {
    title: "Consumer Protection",
    desc: "IP laws help ensure that consumers are purchasing genuine products, which can be crucial for safety and quality assurance.",
    icon: Shield,
    color: "from-gray-900 to-black",
    bgColor: "bg-gray-400",
  },
  {
    title: "Legal Recourse",
    desc: "With IP protection, creators and businesses have legal avenues to address infringement and unauthorized use of their work.",
    icon: Scale,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-50",
  },
  {
    title: "Ethical Business Practices",
    desc: "Ensuring IP protection promotes fair competition and ethical business practices by recognizing and rewarding original work.",
    icon: Heart,
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-100",
  },
  {
    title: "Consumer Trust",
    desc: "Protecting IP helps maintain the quality and authenticity of products and services, which builds consumer trust and loyalty.",
    icon: Users,
    color: "from-gray-500 to-gray-700",
    bgColor: "bg-gray-200",
  },
  {
    title: "Helps Governments",
    desc: "Governments can collect taxes on sales of genuine products which can be used to fund public services and infrastructure.",
    icon: Building,
    color: "from-gray-400 to-gray-600",
    bgColor: "bg-gray-300",
  },
];

type Reason = {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  bgColor: string;
};

type FeatureCardProps = {
  reason: Reason;
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  reason,
  index,
  isExpanded,
  onToggle,
}) => {
  const Icon = reason.icon;

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${reason.bgColor} border border-gray-200 backdrop-blur-sm`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <div className="relative p-6 lg:p-8">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className={`flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ scale: 1.1 }}
          >
            <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
          </motion.div>
          <div className="text-2xl lg:text-3xl font-bold text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
          {reason.title}
        </h3>

        <motion.div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-20 opacity-70"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0.7 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
            {reason.desc}
          </p>
        </motion.div>

        <motion.button
          onClick={() => onToggle(index)}
          className={`mt-4 flex items-center gap-2 text-sm font-medium transition-all duration-300 bg-gradient-to-r ${reason.color} bg-clip-text text-transparent hover:scale-105`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? "Show Less" : "Read More"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 text-gray-500 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

const WhyItIsImportant = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [viewMode, setViewMode] = useState("grid");

  interface ToggleCard {
    (index: number): void;
  }

  const toggleCard: ToggleCard = (index) => {
    const newExpanded = new Set<number>(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const expandAll = () => {
    setExpandedCards(new Set(reasons.map((_, index) => index)));
  };

  const collapseAll = () => {
    setExpandedCards(new Set());
  };

  return (
    <section
      className="relative min-h-screen w-full
     mx-auto bg-white overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4  rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src="/why-it-is-important.png"
                alt="Why IP Protection is Important"
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl border-4 border-gray-200 object-cover transition-transform duration-500 group-hover:scale-105"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full border border-gray-200 mb-8">
              <Shield className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">
                Intellectual Property Protection
              </span>
            </div>

            <h1 className="text-3xl font-bold text-black mb-8 leading-tight">
              Why Is IP Protection{" "}
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                Important?
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
              Intellectual property protection is the cornerstone of innovation,
              creativity, and economic growth in our modern world.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-gray-100 backdrop-blur-sm rounded-xl p-2 border border-gray-200">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-black text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-black text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                List View
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={expandAll}
                className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-6 py-3 bg-gray-600 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
              : "flex flex-col gap-6 max-w-4xl mx-auto"
          }`}
        >
          {reasons.map((reason, index) => (
            <FeatureCard
              key={reason.title}
              reason={reason}
              index={index}
              isExpanded={expandedCards.has(index)}
              onToggle={toggleCard}
            />
          ))}
        </div>

        <div className="text-center mt-16 lg:mt-24">
          <div className="bg-gray-100 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-xl lg:text-4xl font-bold text-black mb-6">
              Ready to Protect Your Intellectual Property?
            </h2>
            <p className="text-xs lg:text-xl text-gray-600 mb-8 w-full mx-auto">
              Get expert guidance on safeguarding your innovations, ideas, and
              creative works with our comprehensive IP protection services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-black text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[200px]">
                Contact Us Today
              </button>
              <button className="px-8 py-4 border-2 border-gray-400 text-gray-700 rounded-xl font-semibold text-lg hover:scale-105 hover:border-black hover:text-black transition-all duration-300 min-w-[200px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItIsImportant;
