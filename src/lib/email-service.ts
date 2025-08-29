import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

interface EmailData {
  name: string;
  email: string;
  message: string;
  role?: string;
  phone?: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean }> => {
  try {
    // Here you would typically integrate with your email service provider
    // For example, using SendGrid, AWS SES, or similar
    console.log('Sending email:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false };
  }
}; 