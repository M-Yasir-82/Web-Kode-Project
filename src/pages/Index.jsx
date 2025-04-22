
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import { CheckCircle, ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 max-w-3xl">
              Powerful Financial APIs for Modern Applications
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Connect, integrate, and build financial applications with our comprehensive API solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all text-base sm:px-8"
              >
                <Link to="/register">Get Started</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-gray-300 hover:bg-gray-50 text-base sm:px-8"
              >
                <Link to="/login" className="flex items-center">
                  Sign In <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative mx-auto mt-12 max-w-5xl rounded-xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gray-900 flex items-center justify-center text-white">
              <p className="text-xl">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build modern financial applications
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Payments API',
                description: 'Process payments securely with our comprehensive payments API',
                icon: '💳',
              },
              {
                title: 'Data Analytics',
                description: 'Gain insights from financial data with powerful analytics tools',
                icon: '📊',
              },
              {
                title: 'Security & Compliance',
                description: 'Enterprise-grade security with built-in compliance features',
                icon: '🔒',
              },
              {
                title: 'Scalable Infrastructure',
                description: 'Built to scale with your business needs and growth',
                icon: '🚀',
              },
              {
                title: 'Easy Integration',
                description: 'Simple to integrate with your existing applications and systems',
                icon: '🔌',
              },
              {
                title: 'Developer Tools',
                description: 'Comprehensive documentation and developer-friendly tools',
                icon: '🛠️',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Pricing Plans</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                name: 'Basic',
                price: '$29',
                description: 'Perfect for startups and small projects',
                features: [
                  'Up to 50,000 API calls per month',
                  '5 API keys',
                  'Email support',
                  'Basic analytics dashboard',
                  'Standard rate limits',
                ],
              },
              {
                name: 'Premium',
                price: '$99',
                description: 'For growing businesses with advanced needs',
                features: [
                  'Up to 500,000 API calls per month',
                  '20 API keys',
                  'Priority email support',
                  'Advanced analytics dashboard',
                  'Higher rate limits',
                  'Webhook integrations',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: '$299',
                description: 'For large scale operations and custom requirements',
                features: [
                  'Unlimited API calls',
                  'Unlimited API keys',
                  'Dedicated support manager',
                  'Full analytics suite',
                  'Unlimited rate limits',
                  'Custom integrations',
                  'SLA guarantees',
                ],
              },
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-md overflow-hidden border transition-all transform hover:shadow-xl ${
                  plan.highlighted ? 'border-blue-400 scale-105 z-10' : 'border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 text-center text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full py-6 ${
                      plan.highlighted 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                        : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900'
                    }`}
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold mb-4">FinConnect</h3>
              <p className="text-gray-400">
                Building the future of financial technology with powerful, accessible APIs.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Payments API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
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
