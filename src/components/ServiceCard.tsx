import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  sampleImage?: string;
  ctaText: string;
  onCtaClick?: () => void;
  popular?: boolean;
}

const ServiceCard = ({
  title = "Resume Writing",
  description = "Professional resume tailored for Australian job market with ATS optimization",
  price = "$79",
  features = [
    "ATS-friendly format",
    "Industry-specific keywords",
    "2 rounds of revisions",
    "PDF & Word formats",
  ],
  sampleImage = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&q=80",
  ctaText = "View Sample",
  onCtaClick = () => {},
  popular = false,
}: ServiceCardProps) => {
  return (
    <Card className="w-full max-w-[350px] h-[450px] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          {popular && <Badge className="bg-blue-500">Popular</Badge>}
        </div>
        <CardDescription className="text-sm text-gray-500">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="mb-4">
          <p className="text-3xl font-bold">{price}</p>
          <p className="text-sm text-gray-500">One-time payment</p>
        </div>

        <div className="mb-4">
          <p className="font-medium mb-2">What's included:</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-32 w-full overflow-hidden rounded-md bg-gray-100">
          <img
            src={sampleImage}
            alt={`${title} sample`}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <FileText className="h-8 w-8 text-white" />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={onCtaClick}
          className="w-full"
          variant={popular ? "default" : "outline"}
        >
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
