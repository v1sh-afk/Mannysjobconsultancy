import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ServiceCard from "./ServiceCard";
import TestimonialCarousel from "./TestimonialCarousel";
import ContactForm from "./ContactForm";
import { ArrowRight, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "./navbar";
import StatsSection from "./stats-section";
import TestimonialsCarousel from "./testimonials-carousel";
import FAQSection from "./faq-section";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import emailjs from '@emailjs/browser';

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Ensure the page always lands at the very top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Initialize EmailJS
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      
      // Service 1: Send form data to yourself (business)
      const result1 = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service to send form data to you
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT, // Template for contact form data
        {
          name: name,
          email: email,
          phone: phone,
          role: role,
          message: message,
          to_name: "Manny's Job Consultancy",
        }
      );
      
      // Service 2: Send auto-reply to the user
      const result2 = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Same service for auto-reply
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTO_REPLY, // Template for auto-reply to user
        {
          name: name,
          role: role,
          message: message,
          email: email,
        }
      );
      
      console.log("Emails sent successfully:", { result1, result2 });
      
      // Show success notification
      toast({
        title: "✅ Message Sent Successfully!",
        description: "Thank you for contacting us! We've received your message and will get back to you within 24 hours. Check your email for confirmation.",
      });
      
      // Clear all form fields
      setEmail("");
      setMessage("");
      setName("");
      setRole("");
      setPhone("");
      
      // Show additional success message on the page
      setTimeout(() => {
        toast({
          title: "📧 Auto-Reply Sent",
          description: "We've also sent you a confirmation email with your submission details.",
        });
      }, 2000);
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "❌ Message Failed to Send",
        description: "Sorry, there was an issue sending your message. Please check your internet connection and try again, or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    {
      id: 1,
      title: "Resume Writing",
      description:
        "Professional resume tailored for Australian job market with ATS optimization and industry-specific keywords.",
      price: "$79",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      features: [
        "ATS-optimized format",
        "Industry-specific keywords",
        "2 revisions included",
        "48-hour turnaround",
      ],
    },
    {
      id: 2,
      title: "Cover Letter",
      description:
        "Customized cover letters that highlight your skills and experience for specific job applications.",
      price: "$59",
      image:
        "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=80",
      features: [
        "Tailored to job description",
        "Compelling narrative",
        "2 revisions included",
        "48-hour turnaround",
      ],
    },
    {
      id: 3,
      title: "Certification & Clearance",
      description:
        "Discounted first-aid certification and other essential clearances for job seekers in Australia.",
      price: "From $99",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      features: [
        "First Aid Certification",
        "Working with Children Check",
        "Police Clearance assistance",
        "Fast processing",
      ],
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      university: "University of Sydney",
      jobPlacement: "Data Analyst at CommBank",
      quote:
        "The resume service completely transformed my job search. Within two weeks of using my new resume, I received three interview calls!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
      id: 2,
      name: "Miguel Rodriguez",
      university: "RMIT University",
      jobPlacement: "Marketing Coordinator at Canva",
      quote:
        "As an international student, I struggled to understand Australian job market requirements. This service made all the difference in landing my dream role.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel",
    },
    {
      id: 3,
      name: "Li Wei",
      university: "University of Melbourne",
      jobPlacement: "Software Engineer at Atlassian",
      quote:
        "The personalized approach to my resume and cover letter helped me stand out in a competitive tech industry. Worth every dollar!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wei",
    },
    {
      id: 4,
      name: "Aisha Patel",
      university: "Monash University",
      jobPlacement: "HR Assistant at Deloitte",
      quote:
        "Getting the discounted certifications through this service saved me time and money. The resume guidance was exceptional too!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
    },
  ];

  // Hero background slideshow images
  const heroImages = [
    "https://images.unsplash.com/photo-1564438749950-6d8968ca2eb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1473684911428-6ad353f44582?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1552727127-3cea758768b2?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1604872455157-600946ee8ef8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  
  const [bgIndex, setBgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8"
        >
          {/* Background Slideshow */}
          <div className="absolute inset-0 w-full h-full z-0">
            <AnimatePresence>
              <motion.img
                key={bgIndex}
                src={heroImages[bgIndex]}
                alt=""
                className="object-cover w-full h-full absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                style={{ zIndex: 0 }}
              />
            </AnimatePresence>
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B4D]/80 via-[#2979FF]/40 to-[#1A237E]/90 z-10" />
          </div>
          {/* Hero Content */}
          <motion.div
            className="text-center w-full max-w-7xl mx-auto relative z-20"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
              Your Gateway to<br />
              <span className="block">Part-Time Opportunities in Australia</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light text-gray-100 mb-6 md:mb-8 max-w-xl mx-auto px-4 leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
   <span className="font-bold">Specialized job consultancy services</span> for international students seeking <span className="font-bold">part-time work opportunities</span> in <span className="font-bold">Australia</span>
</p>

            <Button
              size="lg"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] text-white font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center gap-3 group mx-auto min-w-[160px]"
              onClick={() => document.getElementById('why-trust-us')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="font-medium">Learn more</span>
              <span className="inline-block transform transition-all duration-300 ease-out group-hover:translate-y-1 opacity-60 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0l-6-6m6 6l6-6" />
                </svg>
              </span>
            </Button>



          </motion.div>
        </section>

        {/* Why Trust Us Section (StatsSection) */}
        <div id="why-trust-us">
          <StatsSection />
        </div>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Resume Writing</CardTitle>
                  <CardDescription>Professional resume crafting tailored for Australian employers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• ATS-optimized format</li>
                    <li>• Industry-specific keywords</li>
                    <li>• 2 revisions included</li>
                    <li>• 48-hour turnaround</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Cover Letter Writing</CardTitle>
                  <CardDescription>Compelling cover letters that highlight your strengths</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Tailored to job description</li>
                    <li>• Compelling narrative</li>
                    <li>• 2 revisions included</li>
                    <li>• 48-hour turnaround</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>Discounted first-aid, CPR, blue card, and more</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• First Aid & CPR</li>
                    <li>• Working with Children Check</li>
                    <li>• Police Clearance</li>
                    <li>• Fast processing</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Interview Preparation</CardTitle>
                  <CardDescription>Expert guidance for interview success</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Mock interviews</li>
                    <li>• Common questions</li>
                    <li>• Body language tips</li>
                    <li>• Follow-up guidance</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Target Roles Section */}
        <TooltipProvider>
        <section id="roles" className="py-12 md:py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">Target Roles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-blue-600">
                  <CardHeader>
                    <CardTitle>
                      NDIS Support Worker
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="ml-2 px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded cursor-pointer">Priority</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          High demand role
                        </TooltipContent>
                      </Tooltip>
                    </CardTitle>
                    <CardDescription>
                      Above award rates, flexible hours. Vehicle required.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Disability and aged care support</li>
                      <li>• Flexible hours</li>
                      <li>• Vehicle required</li>
                      <li>• Rewarding work</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Cafe Assistant</CardTitle>
                    <CardDescription>Perfect for students looking for flexible hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Flexible shifts</li>
                      <li>• Customer service experience</li>
                      <li>• Team environment</li>
                      <li>• Growth opportunities</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Pharmacy Assistant</CardTitle>
                    <CardDescription>Great opportunity for healthcare students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Healthcare experience</li>
                      <li>• Customer interaction</li>
                      <li>• Product knowledge</li>
                      <li>• Professional development</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>QLD Police Department</CardTitle>
                    <CardDescription>Pathway entry opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Administrative roles</li>
                      <li>• Community engagement</li>
                      <li>• Career progression</li>
                      <li>• Professional training</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Guest Service Representative</CardTitle>
                    <CardDescription>Frontline hospitality and customer service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Hotel, events, or tourism</li>
                      <li>• Customer interaction</li>
                      <li>• Communication skills</li>
                      <li>• Flexible hours</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Fast Food Crew Member</CardTitle>
                    <CardDescription>Entry-level food service roles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Quick service restaurants</li>
                      <li>• Teamwork</li>
                      <li>• Fast-paced environment</li>
                      <li>• On-the-job training</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Retail Crew Member</CardTitle>
                    <CardDescription>Retail and sales assistant roles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Customer service</li>
                      <li>• Stock management</li>
                      <li>• Point-of-sale operation</li>
                      <li>• Flexible shifts</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Bar Tender</CardTitle>
                    <CardDescription>Bar and beverage service roles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Mixology basics</li>
                      <li>• Customer engagement</li>
                      <li>• Night and weekend shifts</li>
                      <li>• Responsible service of alcohol</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        </TooltipProvider>

        <FAQSection />

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2"
                />
              </div>
              <div>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-gray-700"
                >
                  <option value="" disabled>Select Role</option>
                  <option value="Cafe Assistant">Cafe Assistant</option>
                  <option value="Pharmacy Assistant">Pharmacy Assistant</option>
                  <option value="QLD Police Department">QLD Police Department</option>
                  <option value="Guest Service Representative">Guest Service Representative</option>
                  <option value="Fast Food Crew Member">Fast Food Crew Member</option>
                  <option value="Retail Crew Member">Retail Crew Member</option>
                  <option value="Bar Tender">Bar Tender</option>
                  <option value="NDIS Support Worker">NDIS Support Worker</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone Number (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="min-h-[150px] w-full px-4 py-2"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-8 pb-4 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-8">
              <div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4">Manny's Job Consultancy</h3>
                <p className="text-xs md:text-base text-gray-400">
                  Helping international students launch successful careers in Queensland.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 md:mb-4 text-sm md:text-base">Services</h4>
                <ul className="space-y-1 text-xs md:text-base">
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Resume Writing</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Cover Letter Writing</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Certifications</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Interview Prep</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 md:mb-4 text-sm md:text-base">Quick Links</h4>
                <ul className="space-y-1 text-xs md:text-base">
                  <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                  <li><a href="#roles" className="text-gray-400 hover:text-white transition-colors">Target Roles</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 md:mb-4 text-sm md:text-base">Contact</h4>
                <ul className="space-y-1 text-xs md:text-base text-gray-400">
                  <li>Email: mannysjobconsultancy@gmail.com</li>
                  <li>Mobile: +61 416397125</li>
                  <li>Address: Brisbane Queensland</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col items-center text-gray-400 text-xs md:text-base gap-2 md:gap-0">
              <p className="text-center">&copy; {new Date().getFullYear()} Manny's Job Consultancy. All rights reserved.</p>
              <div className="flex items-center gap-2 md:gap-4 justify-center w-full">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <span className="hidden md:inline">•</span>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
};

export default Home;
