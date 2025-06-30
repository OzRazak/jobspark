"use client";

import React, { useState } from 'react';
import { 
  MessageSquare, 
  FileText, 
  Users, 
  Trophy, 
  Star, 
  Mic, 
  Brain, 
  Target, 
  Zap, 
  Heart,
  ChevronDown,
  ChevronUp,
  Play,
  Download,
  Share2,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Globe,
  TrendingUp
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

const features = [
  {
    id: 'ai-interview-coach',
    icon: MessageSquare,
    title: 'AI Interview Coach',
    subtitle: 'Voice-First Practice with South African Context',
    description: 'Practice interviews with an AI coach that understands South African workplace culture, accents, and expectations.',
    benefits: [
      'Understands South African English and accents',
      'Culturally aware questions (Ubuntu, diversity, etc.)',
      'Real-time feedback on communication skills',
      'Practice anywhere with voice-only interface',
      'Builds confidence through repetition'
    ],
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'cv-builder',
    icon: FileText,
    title: 'AI-Powered CV Builder',
    subtitle: 'ATS-Optimised for South African Market',
    description: 'Generate professional CVs that pass Applicant Tracking Systems and resonate with South African employers.',
    benefits: [
      'ATS-friendly formatting and keywords',
      'Tailored for South African job market',
      'Multiple professional templates',
      'Industry-specific optimisation',
      'Instant PDF generation'
    ],
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'readiness-score',
    icon: Trophy,
    title: 'Career Readiness Score',
    subtitle: 'Gamified Progress Tracking',
    description: 'Track your interview readiness with our comprehensive scoring system that motivates continuous improvement.',
    benefits: [
      'Real-time readiness assessment',
      'Achievement badges and milestones',
      'Daily practice streaks',
      'Personalised improvement suggestions',
      'Progress visualisation'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'job-matching',
    icon: Target,
    title: 'Smart Job Matching',
    subtitle: 'AI-Curated Opportunities',
    description: 'Get matched with relevant job opportunities based on your skills, experience, and career goals.',
    benefits: [
      'Personalised job recommendations',
      'Skills gap analysis',
      'Application tracking',
      'Direct employer connections',
      'Market insights and trends'
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'mobile-first',
    icon: Smartphone,
    title: 'Mobile-First Design',
    subtitle: 'Practice Anywhere, Anytime',
    description: 'Designed for South African mobile usage patterns with offline capabilities and data-conscious features.',
    benefits: [
      'Works on any smartphone',
      'Offline practice capabilities',
      'Data-efficient design',
      'Voice-first interface',
      'No expensive equipment needed'
    ],
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-teal-500 to-green-500'
  },
  {
    id: 'community',
    icon: Users,
    title: 'Community Support',
    subtitle: 'Free & Open Source',
    description: 'Join a community of South African professionals supporting each other\'s career growth.',
    benefits: [
      '100% free to use',
      'Open source development',
      'Community-driven features',
      'Peer support network',
      'Accessible to everyone'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-pink-500 to-orange-500'
  }
];

const faqs = [
  {
    question: 'Is JobSpark really free to use?',
    answer: 'Yes! JobSpark is 100% free and open source. We believe everyone deserves access to quality career development tools, regardless of their financial situation. Our mission is to tackle South Africa\'s unemployment crisis by making these tools accessible to all.'
  },
  {
    question: 'How does the AI interview coach work?',
    answer: 'Our AI interview coach uses advanced voice recognition technology to conduct practice interviews. It asks relevant questions based on South African workplace culture, listens to your responses, and provides real-time feedback on your communication skills, confidence, and content quality.'
  },
  {
    question: 'Can I use JobSpark on my mobile phone?',
    answer: 'Absolutely! JobSpark is designed mobile-first for South African users. You can practice interviews, build your CV, and access all features directly from your smartphone. The voice-first interface means you don\'t need expensive equipment or a computer.'
  },
  {
    question: 'Does JobSpark understand South African English and accents?',
    answer: 'Yes! Our AI is specifically trained to understand South African English, various local accents, and cultural contexts. It recognises concepts like Ubuntu, understands local workplace dynamics, and provides culturally relevant feedback.'
  },
  {
    question: 'How does the CV builder help with ATS systems?',
    answer: 'Our AI CV builder creates documents that are optimised for Applicant Tracking Systems (ATS) commonly used by South African employers. It uses proper formatting, relevant keywords, and industry-specific language to ensure your CV gets past automated screening.'
  },
  {
    question: 'What is the Career Readiness Score?',
    answer: 'The Career Readiness Score is a gamified system that tracks your interview preparation progress. It considers factors like practice frequency, improvement in responses, CV completeness, and overall readiness. You earn badges and maintain streaks to stay motivated.'
  },
  {
    question: 'Can JobSpark help me find actual jobs?',
    answer: 'Yes! Our smart job matching feature connects you with relevant opportunities based on your profile, skills, and career goals. We partner with South African employers to provide direct access to job openings that match your readiness level.'
  },
  {
    question: 'How is my data protected?',
    answer: 'We take your privacy seriously and comply with South African data protection laws (POPIA). Your personal information is encrypted, securely stored, and never sold to third parties. You have full control over your data and can delete your account at any time.'
  },
  {
    question: 'Do I need internet access to use JobSpark?',
    answer: 'While some features require internet connectivity, many core functions work offline. You can practice interviews, review your CV, and access previously downloaded content without an internet connection, making it accessible even with limited data.'
  },
  {
    question: 'How can I support JobSpark\'s mission?',
    answer: 'You can support us by using the platform, sharing it with others who need career help, contributing to our open source development, or making a donation to help us provide access to those who need it most. Every bit of support helps us reach more South Africans.'
  }
];

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for Career Success
          </h1>
          <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Discover the AI-powered tools designed specifically for South African job seekers. 
            Everything you need to land your dream job, completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.jobspark.co.za/auth" 
              className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colours"
            >
              Try All Features Free
            </a>
            <a 
              href="#features" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colours"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools you need to prepare for, 
              find, and land your ideal job in South Africa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Feature Navigation */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === feature.id
                      ? 'bg-gradient-to-r ' + feature.color + ' text-white shadow-lg'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      activeFeature === feature.id ? 'bg-white/20' : 'bg-white'
                    }`}>
                      <feature.icon className={`w-6 h-6 ${
                        activeFeature === feature.id ? 'text-white' : 'text-green-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                      <p className={`text-sm ${
                        activeFeature === feature.id ? 'text-white/90' : 'text-slate-600'
                      }`}>
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Display */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentFeature.color} opacity-80`} />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{currentFeature.title}</h3>
                  <p className="text-white/90">{currentFeature.subtitle}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {currentFeature.description}
                </p>
                
                <h4 className="font-semibold text-slate-900 mb-4">Key Benefits:</h4>
                <ul className="space-y-2">
                  {currentFeature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <a 
                    href="https://app.jobspark.co.za/auth"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colours"
                  >
                    Try This Feature
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Target Impact
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're targeting to make a real difference in South Africa's employment landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">32.9%</div>
              <div className="text-slate-600">Youth unemployment we're targeting</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">3M</div>
              <div className="text-slate-600">Lives we're targeting to change</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
              <div className="text-slate-600">Target interview success rate</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-slate-600">Free & open source</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about JobSpark and how it can help your career.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition-colours"
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of South Africans who are already using JobSpark to land their dream jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.jobspark.co.za/auth"
              className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colours"
            >
              Start Practicing Free
            </a>
            <a 
              href="/donate"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colours"
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