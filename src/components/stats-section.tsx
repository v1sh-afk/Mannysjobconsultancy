import { Users, Award, Briefcase, Star, Eye, UsersRound } from "lucide-react";

// const stats = [
//   {
//     id: 1,
//     name: "Students Helped",
//     value: "500+",
//     icon: Users,
//     description: "International students successfully placed in part-time roles",
//   },
//   {
//     id: 2,
//     name: "Success Rate",
//     value: "95%",
//     icon: Award,
//     description: "Of students find jobs within 4 weeks",
//   },
//   {
//     id: 3,
//     name: "Partner Companies",
//     value: "100+",
//     icon: Briefcase,
//     description: "Active employers in our network",
//   },
//   {
//     id: 4,
//     name: "Client Satisfaction",
//     value: "4.9/5",
//     icon: Star,
//     description: "Average rating from our students",
//   },
// ];

const StatsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Trust Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a new consultancy dedicated to helping international students find part-time work in Australia. Our mission is to provide honest, personalized support—no inflated numbers, just real help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Personalized Guidance
            </div>
            <p className="text-sm md:text-base text-gray-600">
              Every student receives one-on-one support tailored to their goals.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Transparent Process
            </div>
            <p className="text-sm md:text-base text-gray-600">
              We're open about our journey and committed to your success.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <UsersRound className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-xl font-semibold text-gray-900 mb-2">
              Community Focus
            </div>
            <p className="text-sm md:text-base text-gray-600">
              Join our growing network and help shape our story from the start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 