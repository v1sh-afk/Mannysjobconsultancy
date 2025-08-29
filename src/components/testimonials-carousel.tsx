import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "International Student",
    university: "University of Queensland",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    quote: "Manny's Job Consultancy helped me secure a part-time role at a leading retail store in Brisbane. Their resume service and interview preparation were exceptional!",
    rating: 5,
  },
  {
    id: 2,
    name: "Raj Patel",
    role: "Pharmacy Student",
    university: "Griffith University",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raj",
    quote: "Thanks to Manny's guidance, I found a perfect pharmacy assistant role near my campus. The certification assistance was quick and hassle-free!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Hospitality Student",
    university: "Queensland University of Technology",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    quote: "The cover letter writing service made all the difference. I got hired at a premium restaurant in South Bank!",
    rating: 5,
  },
  {
    id: 4,
    name: "James Thompson",
    role: "IT Student",
    university: "RMIT University",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    quote: "Even though I'm in Melbourne, Manny's remote services were excellent. I secured an IT support role within two weeks!",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="success-stories" className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our international students who have successfully found part-time work in Queensland
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-100">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <div className="flex justify-center md:justify-start mb-2">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4 text-sm md:text-base">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                      <p className="text-gray-600 text-sm">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].university}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full hover:bg-blue-50 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:bg-blue-50 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel; 