
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { CheckCircle, ChevronRight } from "lucide-react";

/**
 * Home/Landing page for FinConnect.
 * UI has been upgraded for a more modern, professional look:
 * - Larger type, improved color, better card visual treatment, more white space.
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f8ff] via-[#f2f4fa] to-[#e9eaf7] text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-28 relative">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
              Powerful Financial APIs for Modern Businesses
            </h1>
            <p className="text-2xl text-gray-700 max-w-2xl mt-2">
              Connect, integrate, and build with best-in-class financial APIs and dev tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-base rounded-full shadow-lg px-10 py-4 font-semibold transition-all"
              >
                <Link to="/register">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 hover:bg-gray-100 text-base rounded-full px-10 py-4 transition-all"
              >
                <Link to="/login" className="flex items-center">
                  Sign In <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-5xl rounded-2xl shadow-xl overflow-hidden border border-blue-100 bg-white/80 backdrop-blur-2xl">
            <div className="aspect-video bg-gradient-to-tr from-blue-700/90 via-indigo-700/80 to-blue-400/90 flex items-center justify-center text-white border-0">
              <p className="text-2xl font-semibold opacity-90">Dashboard Preview</p>
            </div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-24 -left-24 w-56 h-56 rounded-full bg-gradient-to-tr from-blue-200 via-indigo-200 to-transparent opacity-60 blur-3xl z-0" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-bl from-indigo-200 via-purple-200 to-transparent opacity-50 blur-3xl z-0" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              All the essentials for building modern financial experiences
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Payments API",
                description: "Process payments securely with our comprehensive payments API.",
                icon: "💳",
              },
              {
                title: "Data Analytics",
                description: "Gain insights from financial data with powerful analytics tools.",
                icon: "📊",
              },
              {
                title: "Security & Compliance",
                description: "Enterprise-grade security and built-in compliance features.",
                icon: "🔒",
              },
              {
                title: "Scalable Infrastructure",
                description: "Built to scale with your needs and growth.",
                icon: "🚀",
              },
              {
                title: "Easy Integration",
                description: "Integrate quickly with your existing applications.",
                icon: "🔌",
              },
              {
                title: "Developer Tools",
                description: "Great documentation and developer-friendly tooling.",
                icon: "🛠️",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 hover:bg-white shadow-lg rounded-2xl p-10 border border-gray-100 transition-all relative overflow-hidden">
                <div className="absolute -top-6 -right-6 text-7xl opacity-10 select-none pointer-events-none">
                  {feature.icon}
                </div>
                <div className="text-4xl mb-5">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-gray-100">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-900">Pricing Plans</h2>
            <p className="mt-3 text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible plans tailored for every team and business size.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$29",
                description: "Perfect for startups and small projects.",
                features: [
                  "Up to 50,000 API calls/month",
                  "5 API keys",
                  "Email support",
                  "Basic analytics dashboard",
                  "Standard rate limits",
                ],
              },
              {
                name: "Premium",
                price: "$99",
                description: "For growing businesses that need more.",
                features: [
                  "Up to 500,000 API calls/month",
                  "20 API keys",
                  "Priority support",
                  "Advanced analytics",
                  "Higher rate limits",
                  "Webhook integrations",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "$299",
                description: "Custom, robust solutions for scale.",
                features: [
                  "Unlimited API calls",
                  "Unlimited API keys",
                  "Dedicated support",
                  "Full analytics suite",
                  "Unlimited rate limits",
                  "Custom integrations",
                  "SLA guarantees",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/90 rounded-2xl shadow-xl overflow-hidden border-2 transition-all transform hover:shadow-2xl ${
                  plan.highlighted
                    ? "border-blue-400 scale-105 z-10 ring-2 ring-blue-300"
                    : "border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 text-center text-sm font-semibold shadow">
                    Most Popular
                  </div>
                )}
                <div className="p-12">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                  <div className="flex items-center mb-4 gap-2">
                    <span className="text-4xl font-bold text-blue-900">{plan.price}</span>
                    <span className="text-gray-600 text-base">/month</span>
                  </div>
                  <p className="text-gray-700 mb-7">{plan.description}</p>
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full py-4 rounded-full font-semibold ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900"
                    } shadow-md`}
                  >
                    <Link to="/register">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-14">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold mb-3">FinConnect</h3>
              <p className="text-gray-300">
                Building the future of financial technology with beautiful, powerful APIs.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Payments API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FinConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
