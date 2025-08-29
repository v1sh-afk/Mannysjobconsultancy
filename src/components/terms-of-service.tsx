import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-0">
      {/* Hero Section */}
      <div className="bg-blue-600 py-12 mb-8 shadow">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-blue-100 text-lg">Please read our terms and conditions below.</p>
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
                Acceptance of Terms
              </h2>
              <p className="text-gray-700">By accessing and using JobConnect AU's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                Services Description
              </h2>
              <p className="text-gray-700">JobConnect AU provides the following services:</p>
              <ul className="list-disc pl-8 mt-2 text-gray-600 space-y-1">
                <li>Resume writing and review</li>
                <li>Cover letter writing</li>
                <li>Certification assistance</li>
                <li>Interview preparation</li>
                <li>Job placement assistance</li>
              </ul>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                User Responsibilities
              </h2>
              <p className="text-gray-700">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-8 mt-2 text-gray-600 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use the services in compliance with all applicable laws</li>
                <li>Not misuse or attempt to manipulate our services</li>
              </ul>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
                Payment Terms
              </h2>
              <p className="text-gray-700">Payment terms and conditions:</p>
              <ul className="list-disc pl-8 mt-2 text-gray-600 space-y-1">
                <li>All fees are in Australian Dollars (AUD)</li>
                <li>Payment is required before service delivery</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Prices are subject to change with notice</li>
              </ul>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">5</span>
                Intellectual Property
              </h2>
              <p className="text-gray-700">All content, materials, and services provided by JobConnect AU are protected by intellectual property rights. Users may not copy, modify, or distribute our content without permission.</p>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">6</span>
                Limitation of Liability
              </h2>
              <p className="text-gray-700">JobConnect AU is not liable for:</p>
              <ul className="list-disc pl-8 mt-2 text-gray-600 space-y-1">
                <li>Job placement guarantees</li>
                <li>Employer decisions</li>
                <li>Third-party actions</li>
                <li>Service interruptions</li>
              </ul>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">7</span>
                Contact Information
              </h2>
              <p className="text-gray-700">For questions about these Terms of Service, please contact us at:</p>
              <div className="mt-2 text-gray-600">
                <p>Email: mannysjobconsultancy@gmail.com</p>
                <p>Mobile: +61 416397125</p>
                <p>Address: Brisbane Queensland</p>
              </div>
            </section>
            <section>
              <h2 className="flex items-center text-2xl font-bold text-blue-600 mb-2">
                <span className="mr-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">8</span>
                Changes to Terms
              </h2>
              <p className="text-gray-700">We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>
              <p className="mt-2 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 