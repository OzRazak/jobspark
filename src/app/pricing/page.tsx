import { Metadata } from 'next';
import { Check, AlertTriangle, Heart, Zap, Shield, CreditCard, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Pricing - JobSpark',
  description: 'Affordable plans to help you accelerate your career with JobSpark\'s AI-powered tools.',
  keywords: 'JobSpark pricing, career tools pricing, interview practice, CV builder, South Africa',
};

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "R0",
      period: "forever",
      description: "Basic access to essential tools",
      features: [
        "7 Credits per month",
        "5 interview practice sessions",
        "2 CV generations",
        "Unlimited job searches",
        "Unlimited job saves",
        "Basic AI feedback"
      ],
      cta: "Get Started",
      ctaLink: "https://app.jobspark.co.za/auth",
      highlight: false,
      color: "slate"
    },
    {
      name: "Basic",
      price: "R49",
      period: "per month",
      description: "More practice for serious job seekers",
      features: [
        "15 Credits per month",
        "10 interview practice sessions",
        "5 CV generations",
        "Unlimited job searches",
        "Unlimited job saves",
        "Advanced AI feedback",
        "Priority support"
      ],
      cta: "Upgrade to Basic",
      ctaLink: "https://app.jobspark.co.za/auth",
      highlight: true,
      color: "blue"
    },
    {
      name: "Pro",
      price: "R199",
      period: "per month",
      description: "Unlimited access for power users",
      features: [
        "Unlimited Credits",
        "Unlimited interview practice",
        "Unlimited CV generations",
        "Unlimited job searches",
        "Unlimited job saves",
        "Premium AI feedback",
        "Priority support",
        "Advanced analytics",
        "Custom interview scenarios"
      ],
      cta: "Upgrade to Pro",
      ctaLink: "https://app.jobspark.co.za/auth",
      highlight: false,
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Choose the plan that fits your needs. Our pricing helps us cover API costs and 
            ensure the platform remains available for everyone.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden ${
                  plan.highlight ? 'shadow-xl ring-2 ring-blue-500' : 'shadow-lg'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 inset-x-0 bg-blue-500 text-white text-xs font-semibold py-1 text-center">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`bg-white p-8 ${plan.highlight ? 'pt-10' : ''}`}>
                  <h3 className={`text-2xl font-bold text-${plan.color}-600 mb-2`}>{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-slate-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={plan.ctaLink}
                    className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                      plan.highlight
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : `bg-${plan.color}-100 text-${plan.color}-700 hover:bg-${plan.color}-200`
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Explanation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-slate-50 rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Why We Have Pricing</h3>
                <p className="text-slate-700 mb-4">
                  JobSpark is committed to providing accessible career tools for all South Africans. Our pricing structure exists for two key reasons:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>API Costs:</strong> AI services like OpenAI and ElevenLabs charge us for each interaction. These costs add up quickly as our user base grows.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Preventing Abuse:</strong> Usage limits help prevent automated scraping and ensure the platform remains available for genuine job seekers.
                    </span>
                  </li>
                </ul>
                <p className="text-slate-700 mb-4">
                  <strong>Need more credits?</strong> If you're facing financial hardship but need additional credits, please reach out to us at <a href="mailto:info@auxo.digital" className="text-blue-600 hover:text-blue-700">info@auxo.digital</a>. We're committed to ensuring everyone has access to the tools they need.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Others Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Heart className="w-10 h-10" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Support Others</h3>
                <p className="text-green-100 mb-6">
                  Are you a company or individual who wants to help support JobSpark and provide credits to those who need them most? Your contribution helps us cover API costs, hosting expenses, and development resources while making career tools accessible to all South Africans.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a 
                    href="/donate" 
                    className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colours"
                  >
                    Support the Mission
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a 
                    href="mailto:info@auxo.digital" 
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colours"
                  >
                    Contact for Corporate Sponsorship
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about our pricing and subscription plans.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">What are credits?</h3>
              <p className="text-slate-700">
                Credits are our way of measuring usage across different features. Each interview practice session or CV generation consumes a certain number of credits. This helps us manage API costs while giving you flexibility in how you use the platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Do credits roll over?</h3>
              <p className="text-slate-700">
                Credits do not roll over from month to month. Each billing cycle, your credit balance resets to your plan's allocation. This helps us manage our API costs and ensures fair usage across all users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-slate-700">
                Yes, you can cancel your subscription at any time. Simply go to your profile settings after signing in and select "Manage Subscription." Your plan will remain active until the end of your current billing period.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-slate-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">What if I can't afford a paid plan?</h3>
              <p className="text-slate-700">
                We're committed to making JobSpark accessible to everyone. The Free plan provides essential access to our core features. If you need additional credits but face financial hardship, please contact us at info@auxo.digital to discuss options for assistance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-slate-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How can companies support JobSpark?</h3>
              <p className="text-slate-700">
                Companies can support JobSpark by sponsoring credits for users, making donations, or partnering with us for bulk subscriptions. This helps us maintain the platform and provide access to those who need it most. Contact us at info@auxo.digital to discuss corporate sponsorship opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Start with our Free plan and upgrade when you need more features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.jobspark.co.za/auth"
                className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colours flex items-center justify-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Choose Your Plan
              </a>
              <a 
                href="/donate"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colours"
              >
                Support Others
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}