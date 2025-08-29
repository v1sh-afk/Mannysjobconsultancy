import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";

interface TestimonialProps {
  testimonials?: {
    id: string;
    name: string;
    university: string;
    jobPlacement: string;
    quote: string;
    image?: string;
  }[];
}

const TestimonialCarousel = ({
  testimonials = defaultTestimonials,
}: TestimonialProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Success Stories
        </h2>
        <p className="text-lg text-gray-600">
          Hear from international students who secured their dream jobs
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        onSlideChange={(index) => setCurrentIndex(index)}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/2 lg:basis-1/3 pl-4"
            >
              <Card className="h-full">
                <CardContent className="flex flex-col p-6 h-full">
                  <div className="mb-4">
                    <QuoteIcon className="h-8 w-8 text-primary opacity-50" />
                  </div>
                  <p className="text-gray-700 flex-grow mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                      <AvatarImage
                        src={
                          testimonial.image ||
                          `https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`
                        }
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.university}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {testimonial.jobPlacement}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-2">
          <CarouselPrevious className="relative static transform-none mx-2" />
          <div className="flex items-center gap-1">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-4" : "bg-gray-300"}`}
              />
            ))}
          </div>
          <CarouselNext className="relative static transform-none mx-2" />
        </div>
      </Carousel>
    </div>
  );
};

const defaultTestimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    university: "University of Melbourne",
    jobPlacement: "Software Engineer at Atlassian",
    quote:
      "The resume service completely transformed my job search. Within two weeks of updating my CV, I received three interview calls and landed my dream role at Atlassian!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: "2",
    name: "Wei Chen",
    university: "RMIT University",
    jobPlacement: "Marketing Coordinator at Canva",
    quote:
      "As an international student, I struggled to highlight my skills effectively. The cover letter service helped me communicate my value to Australian employers, resulting in my current position.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: "3",
    name: "Miguel Rodriguez",
    university: "University of Sydney",
    jobPlacement: "Data Analyst at Commonwealth Bank",
    quote:
      "The discounted certification program was exactly what I needed to stand out. The team guided me through the entire process and helped me secure a position in the financial sector.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
  },
  {
    id: "4",
    name: "Aisha Patel",
    university: "Monash University",
    jobPlacement: "UX Designer at Canva",
    quote:
      "The personalized approach to my resume and portfolio made all the difference. They understood the Australian job market and helped me showcase my international experience effectively.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export default TestimonialCarousel;
