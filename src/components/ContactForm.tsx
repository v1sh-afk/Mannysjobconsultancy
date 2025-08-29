import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { MessageSquare } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(8, { message: "Please enter a valid phone number." }),
  studentStatus: z.string({
    required_error: "Please select your student status.",
  }),
  serviceInterest: z.string({
    required_error: "Please select a service you are interested in.",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      studentStatus: "",
      serviceInterest: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      // Initialize EmailJS
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
      
      // Send email using EmailJS
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          student_status: data.studentStatus,
          service_interest: data.serviceInterest,
          message: data.message,
          to_name: "Manny's Job Consultancy", // Your business name
        }
      );
      
      console.log("Email sent successfully:", result);
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      // You can add error handling here (show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const whatsappNumber = "+61400000000";
    const message = encodeURIComponent(
      "Hi, I would like to book a consultation for job services.",
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
        <CardDescription className="text-primary-foreground/90">
          Get in touch for personalized job consultancy services
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {isSubmitted ? (
          <Alert className="bg-green-50 border-green-200 text-green-800">
            <AlertDescription>
              Thank you for your message! We will get back to you shortly.
            </AlertDescription>
          </Alert>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Smith" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+61 400 000 000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="studentStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="current">
                            Current Student
                          </SelectItem>
                          <SelectItem value="graduate">
                            Recent Graduate
                          </SelectItem>
                          <SelectItem value="prospective">
                            Prospective Student
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="serviceInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Interest</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="resume">Resume Writing</SelectItem>
                          <SelectItem value="cover">Cover Letter</SelectItem>
                          <SelectItem value="certification">
                            Certification & Clearance
                          </SelectItem>
                          <SelectItem value="consultation">
                            General Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your needs and how we can help you..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-[#1A237E] hover:bg-[#0D1B4D] text-white transition-colors duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-center justify-between bg-muted/20 rounded-b-lg">
        <p className="text-sm text-muted-foreground mb-2 sm:mb-0">
          Or contact us directly:
        </p>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white border-none"
          onClick={handleWhatsAppClick}
        >
          <MessageSquare size={18} />
          WhatsApp Us
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
