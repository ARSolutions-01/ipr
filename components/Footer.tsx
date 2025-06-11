"use client";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const controls = useAnimation();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.footer
      ref={footerRef}
      className="relative bg-black text-white overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      transition={{ duration: 1 }}
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('/svg/grid-pattern.svg')] bg-[length:120px_120px] opacity-[0.03] z-0"></div>

      <div className="container relative z-10 px-4 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <motion.div
            className="space-y-5"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/" className="inline-block">
              <motion.h1
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-100"
                whileHover={{ scale: 1.05 }}
              >
                IPR GUARDIANS
              </motion.h1>
            </Link>
            <motion.p
              className="text-gray-300 text-sm leading-relaxed max-w-xs"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              We specialize in legal solutions that protect your innovations,
              brand identity, and intellectual property rights.
            </motion.p>
            <motion.div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.div key={i} whileHover={{ y: -5 }}>
                  <Link
                    href="#"
                    className="p-2 bg-white/5 hover:bg-gray-500/20 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                    aria-label={`Social link ${Icon.name}`}
                  >
                    <Icon className="w-4 h-4 text-gray-300 hover:text-white" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-5"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white border-b border-gray-500/30 pb-2 w-max">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  variants={{
                    hidden: { x: -10, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center group text-gray-300 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-5 md:col-span-2"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white border-b border-gray-500/30 pb-2 w-max">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <motion.li
                className="flex gap-3"
                whileHover={{ x: 3 }}
                variants={{
                  hidden: { x: -10, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
              >
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>
                  WE - 07, Lower Ground, Best Business Square, Plot-26, Sec-20,
                  Dwarka, New Delhi, 110075
                </span>
              </motion.li>
              <motion.li
                className="flex gap-3 items-center"
                whileHover={{ x: 3 }}
                variants={{
                  hidden: { x: -10, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
              >
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span>+91 8450 961 089 / +91 9867 418 075</span>
              </motion.li>
              <motion.li
                className="flex gap-3 items-center"
                whileHover={{ x: 3 }}
                variants={{
                  hidden: { x: -10, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
              >
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span>mail@iprguardians.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.p
            className="text-gray-400 mb-4 md:mb-0"
            whileHover={{ scale: 1.02 }}
          >
            &copy; {new Date().getFullYear()} IPR GUARDIANS. All rights
            reserved.
          </motion.p>
          <div className="flex flex-wrap gap-5 justify-center">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <motion.span whileHover={{ scale: 1.1 }}>
                Privacy Policy
              </motion.span>
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <motion.span whileHover={{ scale: 1.1 }}>
                Terms of Service
              </motion.span>
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <motion.span whileHover={{ scale: 1.1 }}>Sitemap</motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

// const practiceAreas = [
//   { name: "Criminal Defense", href: "/services" },
//   { name: "Corporate Law", href: "/services" },
//   { name: "Civil Litigation", href: "/services" },
//   { name: "Family Law", href: "/services" },
//   { name: "Personal Injury", href: "/services" },
//   { name: "Intellectual Property", href: "/services" },
// ];

{
  /* <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 font-heading">
              Services
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2 text-sm md:text-base"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */
}
