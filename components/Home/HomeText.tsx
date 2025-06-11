"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function HomeTextAboutIpr() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center text-black leading-tight"
        variants={itemVariants}
      >
        WELCOME TO{" "}
        <span className="bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">
          IPR GUARDIANS
        </span>
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-2xl text-center font-medium text-gray-700"
        variants={itemVariants}
      >
        We call ourselves{" "}
        <span className="text-black font-semibold">IP Guardians</span>. You may
        ask us WHY?
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto"
        variants={itemVariants}
      >
        A guardian is someone appointed to take care of another person, known as
        the <span className="font-semibold text-black">ward</span>, and/or their
        property. A guardian helps their ward in:
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        {[
          "Daily care",
          "Decision making",
          "Financial management",
          "Legal representation",
        ].map((text, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            variants={itemVariants}
          >
            <span className="font-bold text-black">
              {String.fromCharCode(97 + i)}
            </span>
            <span className="text-gray-800">{text}</span>
          </motion.div>
        ))}
      </motion.div>

      {[
        "A Guardian is not only needed when someone doesn’t have parents. Sometimes, even parents may face situations where they can’t fulfill all responsibilities. Guardianship ensures that children have someone reliable to support, protect, and make important decisions for them.",
        "You being a manufacturer, developer, owner are a parent. Your product / brand name / intellectual property is your child. You, owing to various compulsions of your business might not always in a position to take care of your intellectual property rights, your brand, your company name etc.",
        "WE, AS GUARDIANS TAKE REGULAR CARE OF YOUR IPR, HELP YOU IN MAKING IMPORTANT DECISIONS IN THAT REGARD AND REPRESENT YOU AND YOUR IPR IN LEGAL MATTERS, PROTECTING YOUR RIGHTS AND INTERESTS.",
        "We understand that guardianship is a significant responsibility, requiring a balance between empowerment and protection to ensure the well being of your IPR, your brand & automatically your name.",
      ].map((paragraph, index) => (
        <motion.p
          key={index}
          className="text-lg leading-relaxed text-gray-700 text-left max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  );
}
