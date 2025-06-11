// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Shield,
//   AlertTriangle,
//   Users,
//   Download,
//   Share2,
//   Copy,
//   Music,
//   Film,
//   Book,
//   Code,
//   Eye,
//   ChevronDown,
//   FileText,
//   Globe,
//   Zap,
//   Lock,
//   ArrowRight,
// } from "lucide-react";
// import Image from "next/image";

// const CopyrightInfra = () => {
//   const [expandedSections, setExpandedSections] = useState<{
//     [key: string]: boolean;
//   }>({});

//   const toggleSection = (section: string) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   const copyrightTypes = [
//     {
//       title: "Direct Infringement",
//       icon: <Copy className="w-6 h-6" />,
//       description:
//         "Directly exercising copyright owner's exclusive rights without permission",
//       examples: [
//         "Unauthorized Reproduction",
//         "Unauthorized Distribution",
//         "Derivative Works",
//       ],
//     },
//     {
//       title: "Contributory Infringement",
//       icon: <Share2 className="w-6 h-6" />,
//       description:
//         "Knowingly inducing or materially contributing to infringement",
//       examples: [
//         "Providing means for infringement",
//         "Inducing others to infringe",
//       ],
//     },
//     {
//       title: "Vicarious Infringement",
//       icon: <Users className="w-6 h-6" />,
//       description:
//         "Having control and financial benefit from infringing activity",
//       examples: ["Supervising infringing conduct", "Direct financial gain"],
//     },
//     {
//       title: "Digital Piracy",
//       icon: <Download className="w-6 h-6" />,
//       description: "Copyright infringement in digital environments",
//       examples: ["Unauthorized downloading", "File sharing", "Streaming"],
//     },
//   ];

//   const digitalCategories = [
//     {
//       title: "Music & Audio",
//       icon: <Music className="w-8 h-8" />,
//       examples: ["Song downloads", "Podcast piracy", "Audio streaming"],
//     },
//     {
//       title: "Movies & Video",
//       icon: <Film className="w-8 h-8" />,
//       examples: ["Movie downloads", "TV show streaming", "Video sharing"],
//     },
//     {
//       title: "Software & Apps",
//       icon: <Code className="w-8 h-8" />,
//       examples: ["Software cracking", "App piracy", "Game copying"],
//     },
//     {
//       title: "Books & Literature",
//       icon: <Book className="w-8 h-8" />,
//       examples: ["E-book piracy", "PDF sharing", "Academic papers"],
//     },
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       },
//     },
//   };

//   const heroVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 1,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const expandableVariants = {
//     hidden: { height: 0, opacity: 0 },
//     visible: {
//       height: "auto",
//       opacity: 1,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-white text-black">
//       {/* Hero Section */}
//       <motion.div
//         className="relative overflow-hidden bg-black text-white"
//         initial="hidden"
//         animate="visible"
//         variants={heroVariants}
//       >
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//           <motion.div
//             className="text-center"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <motion.div
//               className="inline-flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-full mb-8 backdrop-blur-sm border border-white border-opacity-20"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               <Lock className="w-10 h-10 text-white" />
//             </motion.div>

//             <motion.h1
//               className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             >
//               <motion.span
//                 className="block text-gray-300 mb-2"
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//               >
//                 COPYRIGHT
//               </motion.span>
//               INFRINGEMENT
//             </motion.h1>

//             <motion.div
//               className="max-w-4xl mx-auto"
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//             >
//               <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
//                 Copyright infringement is the act of using copyrighted material
//                 without the permission of the copyright holder, thereby
//                 violating the exclusive rights granted to them under copyright
//                 law. These rights typically include the right to reproduce,
//                 create derivative works, distribute, perform, and display the
//                 copyrighted work.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
//       </motion.div>

//       {/* Visual Placeholder */}
//       <motion.div
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8 }}
//       >
//         <motion.div
//           className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200"
//           whileHover={{ y: -5 }}
//           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         >
//           <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
//             <div className="text-center">
//               <Shield className="w-16 h-16 text-black mx-auto mb-4" />
//               <p className="text-gray-800 font-medium text-lg">
//                 Copyright Protection Illustration
//               </p>
//               <Image
//                 src="/copyright.png"
//                 alt="copyright"
//                 width={600}
//                 height={400}
//                 className="mx-auto mt-4 rounded-lg"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Main Content Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Section 2 - Types of Copyright Infringement */}
//         <motion.div
//           className="mb-20"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.div className="text-center mb-12" variants={itemVariants}>
//             <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
//               Types of Copyright Infringement
//             </h2>
//             <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Copyright infringement can manifest in various ways. Here are the
//               main types:
//             </p>
//           </motion.div>

//           {/* Interactive Cards for Copyright Types */}
//           <motion.div
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
//             variants={containerVariants}
//           >
//             {copyrightTypes.map((type, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden group"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-center mb-4">
//                     <motion.div
//                       className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors duration-300"
//                       whileHover={{ rotate: 5 }}
//                     >
//                       {type.icon}
//                     </motion.div>
//                   </div>
//                   <h3 className="text-xl font-semibold text-black mb-3 text-center">
//                     {type.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4 text-center">
//                     {type.description}
//                   </p>
//                   <div className="space-y-2">
//                     {type.examples.map((example, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-center text-sm text-gray-500"
//                       >
//                         <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
//                         {example}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Detailed Content */}
//           <motion.div
//             className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200"
//             variants={itemVariants}
//           >
//             <div className="prose prose-lg max-w-none">
//               {/* Expandable Sections for Each Type */}
//               <div className="space-y-4 mb-8">
//                 {[
//                   {
//                     title: "1. Direct Infringement",
//                     content: `This occurs when someone directly exercises one or more of the copyright owner's exclusive rights without permission. Examples include:

// • Unauthorized Reproduction: Making copies of a copyrighted work (e.g., photocopying a book, downloading music files, duplicating software).

// • Unauthorized Distribution: Sharing copies of a copyrighted work with the public (e.g., uploading files to file-sharing sites, selling unauthorized copies).

// • Unauthorized Creation of Derivative Works: Creating a new work based on a copyrighted work without permission (e.g., making a sequel to a book, creating a remix of a song).

// • Unauthorized Public Performance: Performing a copyrighted work publicly without a license (e.g., playing copyrighted music in a business, staging a copyrighted play).

// • Unauthorized Public Display: Showing a copyrighted work publicly without permission (e.g., displaying copyrighted artwork on a website).`,
//                   },
//                   {
//                     title: "2. Contributory Infringement",
//                     content: `This occurs when someone knowingly induces, causes, or materially contributes to the infringing conduct of another party. The contributor must have knowledge of the infringing activity. Examples include:

// • Providing the means for widespread infringement (e.g., operating a platform primarily designed for copyright infringement).

// • Inducing others to infringe (e.g., explicitly encouraging users to upload and share copyrighted material illegally).`,
//                   },
//                   {
//                     title: "3. Vicarious Infringement",
//                     content: `This occurs when someone has the right and ability to control the infringing activity and also has a direct financial benefit from it, even if they didn't directly participate in the infringement or have specific knowledge of it. This often applies to online service providers or employers. Key elements are:

// • Right and ability to control: The ability to supervise or limit the infringing conduct.

// • Direct financial benefit: A tangible financial gain directly attributable to the infringing activity.`,
//                   },
//                   {
//                     title: "4. Secondary Liability for Online Infringement",
//                     content: `This category encompasses legal doctrines like those related to online service providers (OSPs) and their responsibility for infringing content uploaded by users. Laws like the Digital Millennium Copyright Act (DMCA) in the United States provide "safe harbor" provisions that protect OSPs from liability for user-generated content under certain conditions, such as implementing notice-and-takedown procedures. Similar legislation exists in other jurisdictions.`,
//                   },
//                   {
//                     title: "5. Bootlegging and Counterfeiting",
//                     content: `While often discussed separately, these can be forms of copyright infringement:

// • Bootlegging: The unauthorized recording and distribution of live performances (e.g., concerts). This infringes the copyright in the performance itself and potentially the underlying works (songs, scripts).

// • Counterfeiting: Producing and distributing fake goods that copy a copyrighted work (often combined with trademark infringement to deceive consumers into thinking they are buying genuine products).`,
//                   },
//                   {
//                     title: "6. Digital Piracy",
//                     content: `This term broadly refers to copyright infringement that occurs in the digital environment, encompassing unauthorized downloading, uploading, streaming, and sharing of copyrighted digital content like music, movies, software, and ebooks.`,
//                   },
//                 ].map((section, index) => (
//                   <motion.div
//                     key={index}
//                     className="border border-gray-200 rounded-lg overflow-hidden"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1, duration: 0.5 }}
//                     viewport={{ once: true }}
//                   >
//                     <motion.button
//                       onClick={() => toggleSection(section.title)}
//                       className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
//                       whileHover={{ backgroundColor: "#f9fafb" }}
//                     >
//                       <span className="font-semibold text-black">
//                         {section.title}
//                       </span>
//                       <motion.div
//                         animate={{
//                           rotate: expandedSections[section.title] ? 180 : 0,
//                         }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <ChevronDown className="w-5 h-5 text-gray-500" />
//                       </motion.div>
//                     </motion.button>
//                     <AnimatePresence>
//                       {expandedSections[section.title] && (
//                         <motion.div
//                           variants={expandableVariants}
//                           initial="hidden"
//                           animate="visible"
//                           exit="hidden"
//                           className="overflow-hidden"
//                         >
//                           <div className="px-6 py-4 bg-white border-t border-gray-100">
//                             <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                               {section.content}
//                             </p>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 className="bg-gray-50 border-l-4 border-black p-6 rounded-r-lg"
//                 whileHover={{ x: 5 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               >
//                 <div className="flex items-start">
//                   <AlertTriangle className="w-6 h-6 text-black mr-3 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-gray-800 leading-relaxed mb-3">
//                       It's important to note that the specific definitions and
//                       legal treatments of these types of infringement can vary
//                       slightly depending on the jurisdiction and the specific
//                       copyright laws in place.
//                     </p>
//                     <p className="text-gray-800 leading-relaxed font-medium">
//                       Understanding these distinctions is crucial for both
//                       copyright holders seeking to protect their rights and
//                       individuals and businesses aiming to avoid infringement.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Digital Piracy Breakdown */}
//           <motion.div
//             className="mt-12"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.h3
//               className="text-2xl lg:text-3xl font-bold text-black mb-8 text-center"
//               variants={itemVariants}
//             >
//               Digital Piracy Categories
//             </motion.h3>
//             <motion.div
//               className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
//               variants={containerVariants}
//             >
//               {digitalCategories.map((category, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   whileHover={{ y: -5, scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                   className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 p-6"
//                 >
//                   <div className="text-center">
//                     <motion.div
//                       className="flex justify-center mb-4"
//                       whileHover={{ rotate: 5 }}
//                     >
//                       {category.icon}
//                     </motion.div>
//                     <h4 className="text-lg font-semibold text-black mb-3">
//                       {category.title}
//                     </h4>
//                     <div className="space-y-2">
//                       {category.examples.map((example, idx) => (
//                         <div key={idx} className="text-sm text-gray-600">
//                           {example}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Copyright Protection Stats */}
//           <motion.div
//             className="bg-black rounded-2xl p-8 lg:p-12 text-white mb-12"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="text-center mb-8">
//               <h3 className="text-2xl lg:text-3xl font-bold mb-4">
//                 The Scale of Copyright Infringement
//               </h3>
//               <p className="text-gray-300 text-lg">
//                 Understanding the impact across different creative industries
//               </p>
//             </div>
//             <motion.div
//               className="grid md:grid-cols-4 gap-8"
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               {[
//                 {
//                   icon: <Music className="w-8 h-8 mx-auto text-white" />,
//                   title: "Music",
//                   subtitle: "Audio Content",
//                 },
//                 {
//                   icon: <Film className="w-8 h-8 mx-auto text-white" />,
//                   title: "Video",
//                   subtitle: "Visual Content",
//                 },
//                 {
//                   icon: <Code className="w-8 h-8 mx-auto text-white" />,
//                   title: "Software",
//                   subtitle: "Digital Tools",
//                 },
//                 {
//                   icon: <FileText className="w-8 h-8 mx-auto text-white" />,
//                   title: "Literature",
//                   subtitle: "Written Works",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="text-center"
//                   variants={itemVariants}
//                 >
//                   <motion.div
//                     className="bg-white bg-opacity-10 rounded-lg p-4 mb-3"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                   >
//                     {item.icon}
//                   </motion.div>
//                   <div className="text-2xl font-bold text-white mb-1">
//                     {item.title}
//                   </div>
//                   <div className="text-gray-300 text-sm">{item.subtitle}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Visual Placeholder for Copyright Types */}
//           <motion.div
//             className="mt-12"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <motion.div
//               className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
//               whileHover={{ y: -5 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             >
//               <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
//                 <div className="text-center">
//                   <Eye className="w-16 h-16 text-black mx-auto mb-4" />
//                   <p className="text-gray-800 font-medium text-lg">
//                     Copyright Infringement Types
//                   </p>
//                   <Image
//                     src="/copyright_types.png"
//                     alt="copyright types"
//                     width={600}
//                     height={400}
//                     className="mx-auto mt-4 rounded-lg"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Legal Framework Section */}
//           <motion.div
//             className="mt-12 bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.div className="text-center mb-8" variants={itemVariants}>
//               <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
//                 Legal Framework & Protection
//               </h3>
//               <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
//             </motion.div>

//             <motion.div
//               className="grid md:grid-cols-3 gap-8"
//               variants={containerVariants}
//             >
//               {[
//                 {
//                   icon: <Globe className="w-12 h-12 text-black mx-auto mb-4" />,
//                   title: "DMCA Protection",
//                   description:
//                     "Digital Millennium Copyright Act provides safe harbor provisions for online service providers",
//                 },
//                 {
//                   icon: (
//                     <Shield className="w-12 h-12 text-black mx-auto mb-4" />
//                   ),
//                   title: "Rights Protection",
//                   description:
//                     "Copyright holders have exclusive rights to reproduce, distribute, and display their works",
//                 },
//                 {
//                   icon: <Zap className="w-12 h-12 text-black mx-auto mb-4" />,
//                   title: "Enforcement",
//                   description:
//                     "Notice-and-takedown procedures help protect copyrighted content online",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   whileHover={{ y: -5, scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                   className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200"
//                 >
//                   <motion.div whileHover={{ rotate: 5 }}>
//                     {item.icon}
//                   </motion.div>
//                   <h4 className="text-lg font-semibold text-black mb-3">
//                     {item.title}
//                   </h4>
//                   <p className="text-gray-600 text-sm">{item.description}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Call to Action Section */}
//       <motion.div
//         className="bg-black py-20"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h3
//             className="text-3xl font-bold text-white mb-4"
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Protect Your Creative Works
//           </motion.h3>
//           <motion.p
//             className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed max-w-2xl mx-auto"
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
//             viewport={{ once: true }}
//             style={{
//               letterSpacing: "0.01em",
//               textShadow: "0 2px 16px rgba(0,0,0,0.12)",
//             }}
//           >
//             <span className="inline-flex items-center gap-2">
//               <Shield className="w-6 h-6 text-emerald-400 drop-shadow" />
//               <span>
//                 Don&apos;t let copyright infringement undermine your creative
//                 efforts.
//               </span>
//             </span>
//             <br />
//             <span className="inline-flex items-center gap-2 mt-2">
//               <Lock className="w-5 h-5 text-sky-400 drop-shadow" />
//               <span>
//                 Learn how to{" "}
//                 <span className="font-semibold text-white">
//                   safeguard your intellectual property
//                 </span>{" "}
//                 and protect your work.
//               </span>
//             </span>
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <motion.button
//               className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors duration-200 shadow-lg inline-flex items-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Legal Advice
//               <ArrowRight className="w-5 h-5" />
//             </motion.button>
//             <motion.button
//               className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-200"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Learn More
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default CopyrightInfra;
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Users,
  Download,
  Share2,
  Copy,
  Music,
  Film,
  Book,
  Code,
  Eye,
  ChevronDown,
  FileText,
  Globe,
  Zap,
  Lock,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const CopyrightInfra = () => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const copyrightTypes = [
    {
      title: "Direct Infringement",
      icon: <Copy className="w-6 h-6" />,
      description:
        "Directly exercising copyright owner's exclusive rights without permission",
      examples: [
        "Unauthorized Reproduction",
        "Unauthorized Distribution",
        "Derivative Works",
      ],
    },
    {
      title: "Contributory Infringement",
      icon: <Share2 className="w-6 h-6" />,
      description:
        "Knowingly inducing or materially contributing to infringement",
      examples: [
        "Providing means for infringement",
        "Inducing others to infringe",
      ],
    },
    {
      title: "Vicarious Infringement",
      icon: <Users className="w-6 h-6" />,
      description:
        "Having control and financial benefit from infringing activity",
      examples: ["Supervising infringing conduct", "Direct financial gain"],
    },
    {
      title: "Digital Piracy",
      icon: <Download className="w-6 h-6" />,
      description: "Copyright infringement in digital environments",
      examples: ["Unauthorized downloading", "File sharing", "Streaming"],
    },
  ];

  const digitalCategories = [
    {
      title: "Music & Audio",
      icon: <Music className="w-8 h-8" />,
      examples: ["Song downloads", "Podcast piracy", "Audio streaming"],
    },
    {
      title: "Movies & Video",
      icon: <Film className="w-8 h-8" />,
      examples: ["Movie downloads", "TV show streaming", "Video sharing"],
    },
    {
      title: "Software & Apps",
      icon: <Code className="w-8 h-8" />,
      examples: ["Software cracking", "App piracy", "Game copying"],
    },
    {
      title: "Books & Literature",
      icon: <Book className="w-8 h-8" />,
      examples: ["E-book piracy", "PDF sharing", "Academic papers"],
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
              COPYRIGHT INFRINGEMENT
            </motion.h1>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className=" text-base md:text-xl text-left md:text-center text-gray-300 leading-relaxed font-light">
                Copyright infringement is the act of using copyrighted material
                without the permission of the copyright holder, thereby
                violating the exclusive rights granted to them under copyright
                law.
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
                Copyright Protection Illustration
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <Image
                  src="/copyright.png"
                  alt="copyright"
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
        {/* Section 2 - Types of Copyright Infringement */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Types of Copyright Infringement
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Copyright infringement can manifest in various ways. Here are the
              main types:
            </p>
          </motion.div>

          {/* Interactive Cards for Copyright Types */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
          >
            {copyrightTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <motion.div
                      className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      {type.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3 text-center">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    {type.description}
                  </p>
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
              {/* Expandable Sections for Each Type */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "1. Direct Infringement",
                    content: `This occurs when someone directly exercises one or more of the copyright owner's exclusive rights without permission. Examples include:

- Unauthorized Reproduction: Making copies of a copyrighted work (e.g., photocopying a book, downloading music files, duplicating software).
- Unauthorized Distribution: Sharing copies of a copyrighted work with the public (e.g., uploading files to file-sharing sites, selling unauthorized copies).
- Unauthorized Creation of Derivative Works: Creating a new work based on a copyrighted work without permission (e.g., making a sequel to a book, creating a remix of a song).
- Unauthorized Public Performance: Performing a copyrighted work publicly without a license (e.g., playing copyrighted music in a business, staging a copyrighted play).
- Unauthorized Public Display: Showing a copyrighted work publicly without permission (e.g., displaying copyrighted artwork on a website).`,
                  },
                  {
                    title: "2. Contributory Infringement",
                    content: `This occurs when someone knowingly induces, causes, or materially contributes to the infringing conduct of another party. The contributor must have knowledge of the infringing activity. Examples include:

- Providing the means for widespread infringement (e.g., operating a platform primarily designed for copyright infringement).
- Inducing others to infringe (e.g., explicitly encouraging users to upload and share copyrighted material illegally).`,
                  },
                  {
                    title: "3. Vicarious Infringement",
                    content: `This occurs when someone has the right and ability to control the infringing activity and also has a direct financial benefit from it, even if they didn't directly participate in the infringement or have specific knowledge of it. This often applies to online service providers or employers. Key elements are:

- Right and ability to control: The ability to supervise or limit the infringing conduct.
- Direct financial benefit: A tangible financial gain directly attributable to the infringing activity.`,
                  },
                  {
                    title: "4. Secondary Liability for Online Infringement",
                    content: `This category encompasses legal doctrines like those related to online service providers (OSPs) and their responsibility for infringing content uploaded by users. Laws like the Digital Millennium Copyright Act (DMCA) in the United States provide "safe harbor" provisions that protect OSPs from liability for user-generated content under certain conditions, such as implementing notice-and-takedown procedures. Similar legislation exists in other jurisdictions.`,
                  },
                  {
                    title: "5. Bootlegging and Counterfeiting",
                    content: `While often discussed separately, these can be forms of copyright infringement:

- Bootlegging: The unauthorized recording and distribution of live performances (e.g., concerts). This infringes the copyright in the performance itself and potentially the underlying works (songs, scripts).
- Counterfeiting: Producing and distributing fake goods that copy a copyrighted work (often combined with trademark infringement to deceive consumers into thinking they are buying genuine products).`,
                  },
                  {
                    title: "6. Digital Piracy",
                    content: `This term broadly refers to copyright infringement that occurs in the digital environment, encompassing unauthorized downloading, uploading, streaming, and sharing of copyrighted digital content like music, movies, software, and ebooks.`,
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
                          <div className="px-6 py-4 bg-white border-t border-gray-100">
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
                  <div>
                    <p className="text-gray-800 leading-relaxed mb-3">
                      It's important to note that the specific definitions and
                      legal treatments of these types of infringement can vary
                      slightly depending on the jurisdiction and the specific
                      copyright laws in place.
                    </p>
                    <p className="text-gray-800 leading-relaxed font-medium">
                      Understanding these distinctions is crucial for both
                      copyright holders seeking to protect their rights and
                      individuals and businesses aiming to avoid infringement.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Digital Piracy Breakdown */}
          <motion.div
            className="mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl lg:text-3xl font-bold text-black mb-8 text-center"
              variants={itemVariants}
            >
              Digital Piracy Categories
            </motion.h3>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
              variants={containerVariants}
            >
              {digitalCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 p-6"
                >
                  <div className="text-center">
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: 5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-black mb-3">
                      {category.title}
                    </h4>
                    <div className="space-y-2">
                      {category.examples.map((example, idx) => (
                        <div key={idx} className="text-sm text-gray-600">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Copyright Protection Stats */}
          <motion.div
            className="bg-black rounded-2xl p-8 lg:p-12 text-white mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                The Scale of Copyright Infringement
              </h3>
              <p className="text-gray-300 text-lg">
                Understanding the impact across different creative industries
              </p>
            </div>
            <motion.div
              className="grid md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Music className="w-8 h-8 mx-auto text-white" />,
                  title: "Music",
                  subtitle: "Audio Content",
                },
                {
                  icon: <Film className="w-8 h-8 mx-auto text-white" />,
                  title: "Video",
                  subtitle: "Visual Content",
                },
                {
                  icon: <Code className="w-8 h-8 mx-auto text-white" />,
                  title: "Software",
                  subtitle: "Digital Tools",
                },
                {
                  icon: <FileText className="w-8 h-8 mx-auto text-white" />,
                  title: "Literature",
                  subtitle: "Written Works",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <motion.div
                    className="bg-white bg-opacity-10 rounded-lg p-4 mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {item.title}
                  </div>
                  <div className="text-gray-300 text-sm">{item.subtitle}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Placeholder for Copyright Types */}
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
                    Copyright Infringement Types
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    <Image
                      src="/copyright_types.png"
                      alt="copyright types"
                      width={600}
                      height={400}
                      className="mx-auto mt-4 rounded-lg"
                    />
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Legal Framework Section */}
          <motion.div
            className="mt-12 bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-8" variants={itemVariants}>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                Legal Framework & Protection
              </h3>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {[
                {
                  icon: <Globe className="w-12 h-12 text-black mx-auto mb-4" />,
                  title: "DMCA Protection",
                  description:
                    "Digital Millennium Copyright Act provides safe harbor provisions for online service providers",
                },
                {
                  icon: (
                    <Shield className="w-12 h-12 text-black mx-auto mb-4" />
                  ),
                  title: "Rights Protection",
                  description:
                    "Copyright holders have exclusive rights to reproduce, distribute, and display their works",
                },
                {
                  icon: <Zap className="w-12 h-12 text-black mx-auto mb-4" />,
                  title: "Enforcement",
                  description:
                    "Notice-and-takedown procedures help protect copyrighted content online",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <motion.div whileHover={{ rotate: 5 }}>
                    {item.icon}
                  </motion.div>
                  <h4 className="text-lg font-semibold text-black mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <ProtectSection />

      {/* Footer Section */}
    </div>
  );
};

export default CopyrightInfra;

const ProtectSection = () => {
  return (
    <motion.section
      className="bg-gradient-to-b from-gray-900 to-black py-16 sm:py-20 md:py-24 lg:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-snug"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Protect Your Creative Works
        </motion.h3>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10 sm:mb-12 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            letterSpacing: "0.02em",
            textShadow: "0 1px 12px rgba(0,0,0,0.1)",
          }}
        >
          <span className="inline-flex items-start sm:items-center gap-2 text-left sm:text-center">
            <span>Stop copyright theft before it starts.</span>
          </span>
          <br className="hidden sm:block" />
          <span className="inline-flex items-start sm:items-center gap-2 mt-3  sm:text-center">
            <span>
              <span className="font-semibold text-white">
                Safeguard your intellectual property
              </span>{" "}
              with expert guidance tailored to creators.
            </span>
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.button
            className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-200 ease-in-out inline-flex items-center justify-center gap-2"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 18px rgba(255, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Legal Advice
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-black shadow-md transition duration-200 ease-in-out"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 18px rgba(255, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};
