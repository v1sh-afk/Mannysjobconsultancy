import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-0">
      {/* Hero Section */}
      <div className="bg-blue-600 py-12 mb-8 shadow">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-blue-100 text-lg font-bold">Your privacy is important to us. Please read our policy below.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          className="mb-8 hover:text-blue-600 hover:bg-blue-50"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-10">
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                Information We Collect
              </h2>
              <p className="text-gray-700">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-8 mt-2 text-gray-600 space-y-1">
                <li>Name and contact information</li>
                <li>Resume and cover letter content</li>
                <li>Educational background</li>
                <li>Work experience</li>
                <li>Communication preferences</li>
              </ul>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                How We Use Your Information
              </h2>
              <p className="text-gray-700">We use the information we collect to:</p>
              <ul className="list-disc pl-8 mt-2 text-gray-600 space-y-1">
                <li>Provide our services</li>
                <li>Communicate with you about our services</li>
                <li>Improve our services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                Information Sharing
              </h2>
              <p className="text-gray-700">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-8 mt-2 text-gray-600 space-y-1">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisors</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
                Data Security
              </h2>
              <p className="text-gray-700">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">5</span>
                Your Rights
              </h2>
              <p className="text-gray-700">You have the right to:</p>
              <ul className="list-disc pl-8 mt-2 text-gray-600 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">6</span>
                Contact Us
              </h2>
              <p className="text-gray-700">If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="mt-2 text-gray-600">
                <p>Email: mannysjobconsultancy@gmail.com</p>
                <p>Mobile: +61 416397125</p>
                <p>Address: Brisbane Queensland</p>
              </div>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">7</span>
                Updates to This Policy
              </h2>
              <p className="text-gray-700">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              <p className="mt-2 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 