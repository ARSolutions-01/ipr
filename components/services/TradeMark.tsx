"use client";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Users,
  TrendingDown,
  Eye,
  Scale,
  Building,
  Globe,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const TradeMark = () => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const trademarkTypes = [
    {
      title: "Direct Infringement",
      icon: <Shield className="w-6 h-6" />,
      description: "Most common type involving likelihood of confusion",
      examples: [
        "Identical Mark, Identical Goods",
        "Similar Mark, Similar Goods",
      ],
    },
    {
      title: "Dilution",
      icon: <TrendingDown className="w-6 h-6" />,
      description: "Applies to famous trademarks, weakens distinctiveness",
      examples: ["Blurring", "Tarnishment"],
    },
    {
      title: "Cybersquatting",
      icon: <Globe className="w-6 h-6" />,
      description: "Bad-faith domain registration for profit",
      examples: ["Domain trafficking", "Inflated resale"],
    },
  ];

  const effects = [
    {
      category: "Trademark Owner",
      icon: <Building className="w-8 h-8" />,
      impacts: [
        "Damage to Brand Reputation and Goodwill",
        "Loss of Sales and Revenue",
        "Dilution of Brand Distinctiveness",
        "Increased Marketing and Legal Costs",
      ],
    },
    {
      category: "Consumers",
      icon: <Users className="w-8 h-8" />,
      impacts: [
        "Confusion and Deception",
        "Substandard Quality",
        "Loss of Trust",
        "Potential for Harm",
      ],
    },
    {
      category: "Economy",
      icon: <TrendingDown className="w-8 h-8" />,
      impacts: [
        "Undermining Legitimate Businesses",
        "Loss of Tax Revenue",
        "Discouraging Innovation",
        "Funding Illegal Activities",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
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

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-black text-white"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="relative max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-32  lg:py-48">
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1
              className=" text-xl md:text-3xl text-left md:text-center  font-bold mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              TRADEMARK INFRINGEMENT
            </motion.h1>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className=" text-base md:text-xl text-left md:text-center text-gray-300 leading-relaxed font-light">
                Trademark infringement occurs when an unauthorised party uses a
                trademark that is identical or confusingly similar to a
                registered trademark in connection with the sale, offering for
                sale, distribution, importation, or advertising of goods or
                services, and such use is likely to cause confusion, deception,
                or mistake among consumers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Visual Placeholder */}
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-3 border border-gray-200"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-800 font-medium  text-base  md:text-lg">
                Trademark Infringement Illustration
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <Image
                  src="/trademark.png"
                  alt="Trademark"
                  width={600}
                  height={400}
                  className="mx-auto mt-4 rounded-lg"
                />
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section 2 - Trademark Infringement Types */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-xl lg:text-4xl font-bold text-black mb-4">
              Trademark Infringement Effects
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </motion.div>

          {/* Interactive Cards for Trademark Types */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
          >
            {trademarkTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="p-3 bg-gray-100 rounded-lg mr-4"
                      whileHover={{ rotate: 5 }}
                    >
                      {type.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-black">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Content */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200"
            variants={itemVariants}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Trademark infringement occurs when an unauthorised party uses a
                trademark that is identical or confusingly similar to a
                registered trademark in connection with the sale, offering for
                sale, distribution, importation, or advertising of goods or
                services, and such use is likely to cause confusion, deception,
                or mistake among consumers. Essentially, it's about someone
                trading off the goodwill and reputation associated with your
                brand. Imagine a company selling "Nike-like" shoes with a
                slightly altered swoosh – that's likely trademark infringement.
              </p>

              <motion.div
                className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <p className="text-gray-700 leading-relaxed">
                  Trademark infringement isn't always a straightforward copy.
                  There are different ways someone can violate your trademark
                  rights. Here are the main types of trademark infringement:
                </p>
              </motion.div>

              {/* Expandable Sections */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "1. Direct Infringement (Likelihood of Confusion)",
                    content: `This is the most common type. It occurs when someone uses a trademark that is identical or confusingly similar to your registered trademark on goods or services that are identical or similar to those covered by your registration, and this use is likely to cause confusion among consumers.

• Identical Mark, Identical Goods/Services: Using the exact same trademark on the exact same type of products or services (e.g., selling "Coca-Cola" branded soda).
• Identical Mark, Similar Goods/Services: Using the exact same trademark on related but not identical products or services (e.g., using the "Apple" logo on clothing).
• Similar Mark, Identical Goods/Services: Using a mark that is visually, aurally (sound), or conceptually similar to your trademark on the exact same type of products or services (e.g., selling "Koka-Kola" soda).
• Similar Mark, Similar Goods/Services: Using a mark that is visually, aurally, or conceptually similar to your trademark on related but not identical products or services (e.g., using a slightly different "Nike" swoosh on athletic apparel).

The key element here is the likelihood of confusion. Courts consider various factors to determine this, such as the similarity of the marks, the similarity of the goods/services, the channels of trade, the sophistication of consumers, and evidence of actual confusion.`,
                  },
                  {
                    title: "2. Dilution",
                    content: `Dilution applies to famous trademarks and protects them even when there's no likelihood of confusion. It aims to prevent the weakening of a famous mark's distinctiveness. There are two types of dilution:

• Blurring: This occurs when the use of a similar mark on unrelated goods or services weakens the distinctive quality of the famous mark (e.g., using the name "Kodak" for bicycles). Consumers might start associating the famous mark with a wider range of less prestigious goods, diminishing its unique and strong association with its original products.

• Tarnishment: This occurs when the use of a similar mark on unrelated goods or services harms the reputation of the famous mark (e.g., using the "Disney" name on adult entertainment). This can damage the positive associations consumers have with the famous brand.`,
                  },
                  {
                    title: "3. Cybersquatting",
                    content: `This involves registering, trafficking in, or using a domain name that is identical or confusingly similar to a registered trademark with the bad-faith intent to profit from the goodwill of that trademark. This often involves registering the domain name and then offering to sell it to the trademark owner at an inflated price.`,
                  },
                  {
                    title: "4. Meta-tagging and Keyword Stuffing",
                    content: `Using a registered trademark as a meta-tag or keyword in a website's code to attract search engine traffic, even if the products or services offered on the website are unrelated or infringing, can be considered trademark infringement. This can mislead consumers into believing there is an association with the trademark owner.`,
                  },
                  {
                    title: "5. False Designation of Origin",
                    content: `This occurs when someone uses a mark that misrepresents the origin of their goods or services, leading consumers to believe they are associated with the trademark owner when they are not.`,
                  },
                  {
                    title: "6. Contributory Infringement",
                    content: `This occurs when someone knowingly induces or materially contributes to the infringing conduct of another party. For example, a supplier who knowingly provides counterfeit goods bearing a protected trademark to a seller for resale could be held liable for contributory infringement.`,
                  },
                ].map((section, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      onClick={() => toggleSection(section.title)}
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                      whileHover={{ backgroundColor: "#f9fafb" }}
                    >
                      <span className="font-semibold text-black">
                        {section.title}
                      </span>
                      <motion.div
                        animate={{
                          rotate: expandedSections[section.title] ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {expandedSections[section.title] && (
                        <motion.div
                          variants={expandableVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {section.content}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-gray-50 border-l-4 border-black p-6 rounded-r-lg"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-800 leading-relaxed">
                    It's important to note that the specific laws and
                    interpretations regarding trademark infringement can vary
                    between jurisdictions. If you believe your trademark rights
                    are being infringed, it's crucial to seek legal advice from
                    an experienced intellectual property attorney.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual Placeholders */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg p-3 border border-gray-200"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-800 mt-5 font-medium">
                    Trademark Types
                  </p>
                  <Image
                    src="/trademark_types.png"
                    alt="Trademark Types"
                    width={400}
                    height={400}
                    className="mx-auto mt-4 rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-3 border border-gray-200"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-800 font-medium">
                    Infringement Types
                  </p>
                  <Image
                    src="/trademark_infra_types.png"
                    alt="Trademark Infringement Types"
                    width={400}
                    height={400}
                    className="mx-auto mt-4 rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Section 3 - Effects */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Effects of Trademark Infringement
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trademark infringement can have severe and far-reaching
              consequences for the rightful trademark owner:
            </p>
          </motion.div>

          {/* Effects Grid */}
          <motion.div
            className="grid lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
          >
            {effects.map((effect, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="text-black"
                    >
                      {effect.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-black ml-4">
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
                        <p className="text-gray-700 font-medium">{impact}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Effects Content */}
          <TrademarkInfringementBento />

          {/* Final Visual Placeholder */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-3 border border-gray-200"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-800 mt-5 font-medium text-lg">
                    Trademark Infringement Effects
                  </p>
                  <Image
                    src="/trademark_bad_effect.png"
                    alt="Trademark Bad Effect"
                    width={600}
                    height={400}
                    className="mx-auto mt-4 rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="bg-black py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            className="text-3xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Protect Your Brand Today
          </motion.h3>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Don't let trademark infringement damage your business. Take action
            to safeguard your intellectual property.
          </motion.p>
          <motion.button
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors duration-200 shadow-lg inline-flex items-center gap-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Consult an Expert
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default TradeMark;

const TrademarkInfringementBento = () => {
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
    <div className="min-h-screen bg-white p-4 md:p-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-black text-black mb-4 tracking-tight">
            Trademark Infringement
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Understanding the Impact Across All Stakeholders
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {/* Trademark Owner Section - Large Card */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2 bg-black text-white rounded-3xl p-8 relative overflow-hidden"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 mr-3 text-white" />
                <h2 className="text-2xl font-black">For the Trademark Owner</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Damage to Brand Reputation and Goodwill:",
                    content:
                      "This is often the most significant impact. Consumers might associate the inferior or different infringing goods/services with the genuine brand, leading to a dilution of its quality perception and hard-earned goodwill. This can take years to rebuild.",
                  },
                  {
                    title: "Loss of Sales and Revenue:",
                    content:
                      "Confused consumers may purchase the infringing products instead of the genuine ones, directly impacting the trademark owner's sales and market share.",
                  },
                  {
                    title: "Dilution of Brand Distinctiveness:",
                    content:
                      "If infringing marks are widespread, the unique identity and distinctiveness of the original trademark can be weakened, making it harder for consumers to identify the genuine goods/services.",
                  },
                  {
                    title: "Increased Marketing and Legal Costs:",
                    content:
                      "Trademark owners often need to invest more in marketing and advertising to re-educate consumers and differentiate their genuine products from the infringing ones. They also incur legal expenses in pursuing infringement actions.",
                  },
                  {
                    title: "Loss of Control Over Brand Quality:",
                    content:
                      "The trademark owner has no control over the quality of the infringing goods or services, which can further damage their brand image if those products are substandard.",
                  },
                  {
                    title: "Damage to Licensing Opportunities:",
                    content:
                      "Infringement can make potential licensees hesitant to associate with a brand whose exclusivity is being compromised.",
                  },
                  {
                    title: "Difficulty in Expansion:",
                    content:
                      "Widespread infringement can hinder a brand's ability to expand into new markets or product categories due to consumer confusion.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-white pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border border-white rounded-full"></div>
            </div>
          </motion.div>

          {/* Consumer Impact */}
          <motion.div
            className="bg-white border-2 border-black rounded-3xl p-6"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 mr-2 text-black" />
              <h3 className="text-xl font-black text-black">For Consumers</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Confusion and Deception:",
                  content:
                    "Consumers may be misled into believing that the infringing goods or services are genuine or are affiliated with the trademark owner.",
                },
                {
                  title: "Substandard Quality:",
                  content:
                    "Infringing products are often of lower quality than the genuine ones, leading to consumer dissatisfaction and potential harm.",
                },
                {
                  title: "Loss of Trust:",
                  content:
                    "When consumers are deceived by infringing products, their trust in the genuine brand can be eroded.",
                },
                {
                  title: "Potential for Harm:",
                  content:
                    "In some cases, infringing goods (e.g., counterfeit pharmaceuticals or electronics) can be dangerous to consumer health and safety.",
                },
              ].map((item, index) => (
                <div key={index} className="border-l-2 border-black pl-3">
                  <h5 className="font-bold text-black text-sm mb-1">
                    {item.title}
                  </h5>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Economic Impact */}
          <motion.div
            className="bg-gray-100 border border-gray-300 rounded-3xl p-6"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="flex items-center mb-4">
              <TrendingDown className="w-6 h-6 mr-2 text-black" />
              <h3 className="text-xl font-black text-black">For the Economy</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Undermining Legitimate Businesses:",
                  content:
                    "Trademark infringement harms legitimate businesses that invest in building their brands and providing quality goods/services.",
                },
                {
                  title: "Loss of Tax Revenue:",
                  content:
                    "The sale of counterfeit and infringing goods often occurs outside legal channels, leading to a loss of tax revenue for the government.",
                },
                {
                  title: "Discouraging Innovation:",
                  content:
                    "If creators and businesses cannot protect their brands, it can disincentivize investment in innovation and the development of new products and services.",
                },
                {
                  title: "Funding Illegal Activities:",
                  content:
                    "In some cases, the proceeds from the sale of counterfeit goods can fund other illegal activities.",
                },
              ].map((item, index) => (
                <div key={index} className="border-l-2 border-gray-400 pl-3">
                  <h5 className="font-bold text-black text-sm mb-1">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Critical Impact Highlight */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-black to-gray-800 text-white rounded-3xl p-8 flex items-center justify-center text-center relative overflow-hidden"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <AlertTriangle className="w-16 h-16 text-white mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-black mb-3">Critical Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                Trademark infringement affects all stakeholders in the market
                ecosystem, creating a cascade of negative consequences that can
                take years to resolve.
              </p>
            </div>

            {/* Animated Background Elements */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-10"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, white 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, white 0%, transparent 50%)",
                  "radial-gradient(circle at 40% 50%, white 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Conclusion */}
          <motion.div
            className="lg:col-span-4 bg-black text-white rounded-3xl p-8 relative overflow-hidden"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6 text-center">
                Conclusion
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                In conclusion, trademark infringement is a serious issue with
                significant negative effects on trademark owners, consumers, and
                the overall economy. Robust legal frameworks and effective
                enforcement mechanisms are crucial to combat this unlawful
                activity and protect the value of brands.
              </p>
            </div>

            {/* Subtle Animation */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                background: [
                  "linear-gradient(45deg, transparent 30%, white 50%, transparent 70%)",
                  "linear-gradient(45deg, transparent 40%, white 60%, transparent 80%)",
                  "linear-gradient(45deg, transparent 30%, white 50%, transparent 70%)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
