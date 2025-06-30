import { Metadata } from 'next';
import { MessageSquare, FileText, Users, Mic, CheckCircle, Star, TrendingUp, Heart, Zap, Target, Brain, Smartphone, Globe, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Platform Features - JobSpark',
  description: 'Discover all the powerful AI-driven features that make JobSpark the ultimate career companion for South African job seekers.',
  keywords: 'JobSpark features, AI interview coach, CV builder, career tools, South Africa, job search platform',
};

const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center space-x-4 mb-6">
        <div className={`p-4 rounded-xl ${feature.bgColor}`}>
          <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
          <p className="text-sm text-slate-500">{feature.category}</p>
        </div>
      </div>
      
      <p className="text-slate-600 leading-relaxed mb-6">{feature.description}</p>
      
      <div className="space-y-3 mb-6">
        {feature.benefits.map((benefit: string, idx: number) => (
          <div key={idx} className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-slate-700">{benefit}</span>
          </div>
        ))}
      </div>
      
      {feature.stats && (
        <div className="bg-slate-50 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4">
            {feature.stats.map((stat: any, idx: number) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const FAQItem = ({ faq, index }: { faq: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FeaturesPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "AI Interview Coach",
      category: "Interview Preparation",
      description: "Practice with an AI coach that understands South African culture, accents, and workplace dynamics. Get real-time feedback on your responses.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      benefits: [
        "Voice-first interface for natural conversation",
        "South African accent recognition",
        "Cultural context awareness (Ubuntu, etc.)",
        "Real-time feedback and scoring",
        "Practice common SA interview questions"
      ],
      stats: [
        { value: "89%", label: "Success Rate" },
        { value: "500+", label: "Questions" }
      ]
    },
    {
      icon: FileText,
      title: "Smart CV Builder",
      category: "Document Creation",
      description: "Generate professional, ATS-optimized CVs tailored for the South African job market with AI-powered content suggestions.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      benefits: [
        "ATS-friendly formatting",
        "Industry-specific templates",
        "AI-powered content suggestions",
        "Local market optimization",
        "Multiple format exports"
      ],
      stats: [
        { value: "95%", label: "ATS Pass Rate" },
        { value: "12", label: "Templates" }
      ]
    },
    {
      icon: Brain,
      title: "Career Readiness Score",
      category: "Progress Tracking",
      description: "Get a comprehensive assessment of your job readiness with personalized recommendations for improvement.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      benefits: [
        "Comprehensive skill assessment",
        "Personalized improvement plans",
        "Progress tracking over time",
        "Industry benchmarking",
        "Achievement badges"
      ],
      stats: [
        { value: "360°", label: "Assessment" },
        { value: "24/7", label: "Tracking" }
      ]
    },
    {
      icon: Target,
      title: "Job Matching",
      category: "Opportunity Discovery",
      description: "Find relevant job opportunities that match your skills, experience, and career goals using AI-powered matching.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      benefits: [
        "AI-powered job matching",
        "Skill gap analysis",
        "Salary insights",
        "Company culture fit",
        "Application tracking"
      ],
      stats: [
        { value: "92%", label: "Match Accuracy" },
        { value: "1000+", label: "Active Jobs" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      category: "Accessibility",
      description: "Access all features from your smartphone with a design optimized for South African mobile usage patterns.",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600",
      benefits: [
        "Offline capability",
        "Low data usage",
        "Touch-optimized interface",
        "Voice commands",
        "Quick actions"
      ],
      stats: [
        { value: "68%", label: "Mobile Users" },
        { value: "50MB", label: "Data Usage" }
      ]
    },
    {
      icon: Users,
      title: "Community Support",
      category: "Peer Learning",
      description: "Connect with other job seekers, share experiences, and learn from success stories in the JobSpark community.",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      benefits: [
        "Peer mentorship programs",
        "Success story sharing",
        "Industry networking",
        "Study groups",
        "Expert Q&A sessions"
      ],
      stats: [
        { value: "12.5K+", label: "Members" },
        { value: "95%", label: "Satisfaction" }
      ]
    }
  ];

  const faqs = [
    {
      question: "Is JobSpark really free to use?",
      answer: "Yes! JobSpark is 100% free for job seekers. We believe everyone deserves access to quality career tools regardless of their financial situation. Our platform is supported by donations and partnerships."
    },
    {
      question: "How does the AI interview coach work?",
      answer: "Our AI coach uses advanced voice recognition technology to conduct realistic interview simulations. It asks relevant questions based on your industry and experience level, then provides detailed feedback on your responses, including suggestions for improvement."
    },
    {
      question: "Can I use JobSpark on my mobile phone?",
      answer: "Absolutely! JobSpark is designed mobile-first for South African users. You can access all features from your smartphone, practice interviews on the go, and even work offline when needed."
    },
    {
      question: "What makes JobSpark different from other career platforms?",
      answer: "JobSpark is specifically built for the South African job market. We understand local culture, workplace dynamics, and the unique challenges faced by South African job seekers. Our AI is trained on local data and cultural nuances like Ubuntu philosophy."
    },
    {
      question: "How accurate is the career readiness score?",
      answer: "Our career readiness score is based on comprehensive analysis of your profile, interview performance, and market benchmarks. It's designed to give you actionable insights rather than just a number, with 89% of users reporting improved interview performance."
    },
    {
      question: "Can I download my CV in different formats?",
      answer: "Yes! You can export your CV in multiple formats including PDF, Word, and plain text. All formats are optimized for South African ATS systems and employer preferences."
    },
    {
      question: "How does job matching work?",
      answer: "Our AI analyzes your skills, experience, preferences, and career goals to match you with relevant opportunities. We consider factors like company culture, growth potential, and skill development opportunities, not just job titles."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take data security seriously. All your information is encrypted and stored securely. We comply with South African data protection laws and never share your personal information without your consent."
    },
    {
      question: "Can I practice interviews for specific companies?",
      answer: "Yes! Our AI coach can simulate interviews for specific companies and industries. We have question banks for major South African employers and can customize practice sessions based on the role you're applying for."
    },
    {
      question: "How do I get started with JobSpark?",
      answer: "Simply visit app.jobspark.co.za and create your free account. The onboarding process takes about 10 minutes and will guide you through setting up your profile and taking your first career readiness assessment."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <Zap className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for Career Success
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover all the AI-powered tools and features that make JobSpark 
            the ultimate career companion for South African professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.jobspark.co.za/auth" 
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Try All Features Free
            </a>
            <a 
              href="#features" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From AI-powered interview coaching to smart CV building, JobSpark provides 
              a comprehensive suite of tools designed specifically for the South African job market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Proven Results for South African Job Seekers
            </h2>
            <p className="text-lg text-slate-600">
              Our features deliver real results for thousands of users across South Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-slate-600">Interview Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12.5K+</div>
              <div className="text-slate-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-slate-600">ATS Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-slate-600">Free Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Get answers to common questions about JobSpark's features and how to make the most of our platform.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of South Africans who've accelerated their careers with JobSpark's powerful features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.jobspark.co.za/auth" 
              className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Start Using All Features Free
            </a>
            <a 
              href="/donate" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Support Others
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}