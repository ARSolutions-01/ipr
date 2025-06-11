"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const WhoWeAre = () => {
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
    <motion.section
      ref={ref}
      className="py-12 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div variants={itemVariants}>
            <Image
              src="/who-we-are.png"
              alt="Who We Are"
              width={500}
              height={500}
              className="rounded-2xl w-full max-w-xs md:max-w-md shadow-lg object-cover"
              priority
            />
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-black mb-2"
            variants={itemVariants}
          >
            Who We Are
          </motion.h2>
          <motion.h3
            className="text-lg sm:text-xl font-semibold text-gray-700 mb-2"
            variants={itemVariants}
          >
            Protecting Your Innovation. Securing Your Future.
          </motion.h3>
          <motion.p
            className="text-base sm:text-lg text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            In today's competitive landscape, your intellectual property is your
            most valuable asset. Our firm specializes in providing comprehensive
            legal solutions to safeguard your innovations, creations, and brand
            identity. From trademarks and copyrights to patents and designs, we
            offer expert guidance and robust enforcement strategies to ensure
            your intellectual property rights are protected in Dubai and beyond.
            Partner with us to secure your competitive edge and build a strong
            foundation for your business's future.
          </motion.p>
        </div>
      </div>
      <motion.div
        className="max-w-5xl mx-auto mt-12 bg-white p-6 md:p-10"
        variants={itemVariants}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-black mb-4"
          variants={itemVariants}
        >
          Why Are Experts Like Us Needed
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-gray-600 mb-4"
          variants={itemVariants}
        >
          Manufacturers, creators, developers, and inventors often lack the
          intricate legal and procedural knowledge required to effectively
          protect their Intellectual Property Rights (IPR). Engaging IP experts
          is crucial for several reasons:
        </motion.p>
        <motion.ul
          className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800"
          variants={itemVariants}
        >
          {[
            {
              title: "Identification:",
              description:
                "Experts can identify all protectable aspects of your work that you might overlook.",
            },
            {
              title: "Strategic Filing:",
              description:
                "They ensure you pursue the correct IPR (trademark, copyright, patent, design) in the right jurisdictions, maximizing protection.",
            },
            {
              title: "Navigating Complexity:",
              description:
                "IP laws are complex and vary internationally. Experts handle the intricate application processes.",
            },
            {
              title: "Enforcement:",
              description:
                "When infringement occurs, experts provide the legal expertise to effectively enforce your rights and prevent further losses.",
            },
            {
              title: "Risk Mitigation:",
              description:
                "Proactive expert advice can prevent costly legal battles and ensure you operate within the bounds of IP law.",
            },
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <span className="font-semibold text-black">{item.title}</span>{" "}
              {item.description}
            </motion.li>
          ))}
        </motion.ul>
        <motion.p
          className="text-base sm:text-lg text-gray-600 mt-4"
          variants={itemVariants}
        >
          By partnering with IP professionals in Dubai, innovators can safeguard
          their valuable assets and maintain a competitive edge.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default WhoWeAre;
