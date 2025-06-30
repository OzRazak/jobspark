import React, { useState } from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FileText, AlertTriangle, Clock, Shield, ChevronDown, ChevronUp, CheckCircle, ExternalLink, Info, User, Lock, Database, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Terms of Service - JobSpark',
  description: 'Terms of Service for JobSpark - Your AI Career Co-Pilot',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="py-16 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-t-2xl p-8 sm:p-12 text-white">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="p-4 bg-white/20 rounded-full">
                <FileText className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">Terms of Service</h1>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Last Updated: January 1, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Early Access Version</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="bg-white rounded-b-2xl shadow-lg p-8 lg:p-12">
            {/* Early Access Warning */}
            <div className="mb-12 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-orange-900 mb-2">Important Early Access Notice</h2>
                  <p className="text-orange-800 mb-4">
                    JobSpark is currently in early access. By using our Services during this period, you acknowledge and agree that:
                  </p>
                  <ul className="space-y-2 text-orange-800">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span>The platform may contain bugs, errors, and incomplete features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span>AI responses may be inaccurate, inappropriate, or unreliable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span>Your data may be lost, corrupted, or used to improve our services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span>Service availability is not guaranteed and may be interrupted</span>
                    </li>
                  </ul>
                  <p className="text-orange-800 font-bold mt-4">
                    You use the Services entirely at your own risk and discretion.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="/features/early-access" 
                      className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium"
                    >
                      Learn more about our Early Access Program
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Table of Contents */}
            <div className="mb-12 p-6 bg-slate-50 rounded-xl">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Navigation</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <a href="#acceptance" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <CheckCircle className="w-4 h-4" />
                  <span>Acceptance of Terms</span>
                </a>
                <a href="#description" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Info className="w-4 h-4" />
                  <span>Description of Services</span>
                </a>
                <a href="#accounts" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <User className="w-4 h-4" />
                  <span>User Accounts</span>
                </a>
                <a href="#acceptable-use" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Shield className="w-4 h-4" />
                  <span>Acceptable Use Policy</span>
                </a>
                <a href="#intellectual-property" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Lock className="w-4 h-4" />
                  <span>Intellectual Property</span>
                </a>
                <a href="#open-source" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Zap className="w-4 h-4" />
                  <span>Open Source & Free Access</span>
                </a>
                <a href="#privacy" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Database className="w-4 h-4" />
                  <span>Privacy & Data Protection</span>
                </a>
                <a href="#disclaimers" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Disclaimers & Limitations</span>
                </a>
                <a href="#contact" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>Contact Information</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-12">
              <TermsSection 
                id="acceptance"
                icon={CheckCircle}
                iconBg="bg-green-100"
                iconColor="text-green-600"
                title="1. Acceptance of Terms"
                content={
                  <>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Welcome to JobSpark! These Terms of Service ("Terms") govern your use of the JobSpark platform and services ("Services") operated by Auxo Digital Pty Ltd ("we," "our," or "us"). By accessing or using our Services, you agree to be bound by these Terms.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      If you disagree with any part of these Terms, then you may not access the Services. These Terms apply to all visitors, users, and others who access or use the Services.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-slate-700"><strong>Company Information:</strong></p>
                      <p className="text-slate-700">Auxo Digital Pty Ltd</p>
                      <p className="text-slate-700">6 Hoggs Bay Close, Kyalami, 1684, South Africa</p>
                      <p className="text-slate-700">Email: info@auxo.digital</p>
                      <p className="text-slate-700">Phone: +27 21 8480 9</p>
                    </div>
                  </>
                }
              />
              
              <TermsSection 
                id="description"
                icon={Info}
                iconBg="bg-blue-100"
                iconColor="text-blue-600"
                title="2. Description of Services"
                content={
                  <>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      JobSpark provides AI-powered career development tools specifically designed for the South African job market, including:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-slate-700">AI-powered interview practice and coaching</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-slate-700">CV generation and optimisation tools</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-slate-700">Career readiness assessments</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-slate-700">Job matching and application assistance</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-slate-700">Professional development resources</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-slate-700">Voice-based interview simulation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-slate-700">Real-time feedback and scoring</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-slate-700">Career guidance and mentorship tools</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-800">
                        <strong>Early Access Notice:</strong> During our early access period, some services may be limited, incomplete, or unavailable. Features and functionality may change without notice.
                      </p>
                    </div>
                  </>
                }
              />
              
              <TermsSection 
                id="accounts"
                icon={User}
                iconBg="bg-purple-100"
                iconColor="text-purple-600"
                title="3. User Accounts and Registration"
                content={
                  <>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-medium text-slate-800 mb-3">3.1 Account Creation</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          To access certain features of our Services, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium text-slate-800 mb-3">3.2 Account Security</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use of your account.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium text-slate-800 mb-3">3.3 Age Requirements</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement.
                        </p>
                      </div>
                    </div>
                  </>
                }
              />
              
              <TermsSection 
                id="acceptable-use"
                icon={Shield}
                iconBg="bg-red-100"
                iconColor="text-red-600"
                title="4. Acceptable Use Policy"
                content={
                  <>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                        <span className="text-slate-700">Use the Services for any illegal or unauthorised purpose</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                        <span className="text-slate-700">Violate any applicable laws or regulations</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                        <span className="text-slate-700">Infringe upon the rights of others</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                        <span className="text-slate-700">Upload or transmit harmful, offensive, or inappropriate content</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                        <span className="text-slate-700">Attempt to gain unauthorised access to our systems</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                        <span className="text-slate-700">Interfere with or disrupt the Services</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                        <span className="text-slate-700">Use automated systems to access the Services without permission</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                        <span className="text-slate-700">Impersonate any person or entity</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                        <span className="text-slate-700">Collect or harvest personal information of other users</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                        <span className="text-slate-700">Use the Services to spam or send unsolicited communications</span>
                      </div>
                    </div>
                  </>
                }
              />
              
              <TermsSection 
                id="intellectual-property"
                icon={Lock}
                iconBg="bg-green-100"
                iconColor="text-green-600"
                title="5. Intellectual Property Rights"
                content={
                  <>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-medium text-slate-800 mb-3">5.1 Our Content</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          The Services and their original content, features, and functionality are and will remain the exclusive property of Auxo Digital Pty Ltd and its licensors. The Services are protected by copyright, trademark, and other laws.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium text-slate-800 mb-3">5.2 Your Content</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          You retain ownership of any content you submit, post, or display on or through the Services ("Your Content"). By submitting Your Content, you grant us a worldwide, non-exclusive, royalty-free licence to use, reproduce, modify, and distribute Your Content solely for the purpose of providing and improving our Services.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium text-slate-800 mb-3">5.3 AI-Generated Content</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          Content generated by our AI tools based on your input is provided to you for your use. However, we retain the right to use anonymised and aggregated data to improve our AI models and services.
                        </p>
                      </div>
                    </div>
                  </>
                }
              />
              
              <TermsSection 
                id="open-source"
                icon={Zap}
                iconBg="bg-orange-100"
                iconColor="text-orange-600"
                title="6. Open Source and Free Access"
                content={
                  <>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      JobSpark is committed to providing free access to career development tools for those who need them most. Our core services are provided at no cost, and our platform is built on open-source principles.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      While our Services are free to use, we may offer premium features or accept voluntary contributions to support our mission of tackling unemployment in South Africa.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg mb-4">
                      <h3 className="text-xl font-medium text-orange-800 mb-3">6.1 Community Contributions</h3>
                      <p className="text-orange-700 leading-relaxed">
                        We welcome community contributions to improve our platform. By contributing, you agree that your contributions may be incorporated into our Services under our open-source licence.
                      </p>
                    </div>
                    <a 
                      href="/blog/south-africa-needs-open-source-software" 
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                    >
                      Learn more about our open source mission
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </>
                }
              />
              
              <TermsSection 
                id="privacy"
                icon={Database}
                iconBg="bg-blue-100"
                iconColor="text-blue-600"
                title="7. Privacy and Data Protection"
                content={
                  <>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Services. By using our Services, you agree to the collection and use of information in accordance with our Privacy Policy.
                    </p>
                    <div className="flex justify-center mt-6">
                      <a 
                        href="/privacy" 
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        View Privacy Policy
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </>
                }
              />
              
              <TermsSection 
                id="disclaimers"
                icon={AlertTriangle}
                iconBg="bg-red-100"
                iconColor="text-red-600"
                title="8. Disclaimers and Limitations"
                content={
                  <>
                    <div className="space-y-6">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="text-xl font-medium text-red-800 mb-3">8.1 Service Availability</h3>
                        <p className="text-red-700 leading-relaxed mb-4">
                          We strive to provide reliable Services, but we cannot guarantee that the Services will be available at all times or free from errors. The Services are provided "as is" and "as available" without warranties of any kind.
                        </p>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="text-xl font-medium text-orange-800 mb-3">8.2 Career Outcomes</h3>
                        <p className="text-orange-700 leading-relaxed mb-4">
                          While our Services are designed to help improve your career prospects, we cannot guarantee specific outcomes such as job offers, interviews, or career advancement. Your success depends on many factors beyond our control.
                        </p>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="text-xl font-medium text-yellow-800 mb-3">8.3 AI Accuracy</h3>
                        <p className="text-yellow-700 leading-relaxed mb-4">
                          Our AI-powered features are designed to assist and guide you, but they may not always be accurate or appropriate for your specific situation. You should use your own judgement and seek professional advice when making important career decisions.
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="text-xl font-medium text-red-800 mb-3">8.4 Early Access Limitations</h3>
                        <p className="text-red-700 leading-relaxed mb-4">
                          During our early access period, the Services may contain significant bugs, errors, and incomplete features. AI responses may be inaccurate or inappropriate. We make no warranties about the reliability or suitability of the Services during this period.
                        </p>
                      </div>
                    </div>
                  </>
                }
              />
              
              <TermsSection 
                id="contact"
                icon={ExternalLink}
                iconBg="bg-green-100"
                iconColor="text-green-600"
                title="9. Contact Information"
                content={
                  <>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      If you have any questions about these Terms, please contact us:
                    </p>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-slate-700"><strong>Auxo Digital Pty Ltd</strong></p>
                          <p className="text-slate-700"><strong>Email:</strong> info@auxo.digital</p>
                          <p className="text-slate-700"><strong>Phone:</strong> +27 21 8480 9</p>
                          <p className="text-slate-700"><strong>Address:</strong> 6 Hoggs Bay Close, Kyalami, 1684, South Africa</p>
                        </div>
                        <div>
                          <p className="text-slate-700"><strong>Website:</strong> <a href="https://jobspark.co.za" className=\"text-green-600 hover:text-green-700">jobspark.co.za</a></p>
                          <p className="text-slate-700 mt-4"><strong>Early Access Information:</strong> <a href="/features/early-access" className=\"text-orange-600 hover:text-orange-700">View Early Access Details</a></p>
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Terms Section Component
function TermsSection({ 
  id, 
  icon: Icon, 
  iconBg, 
  iconColor, 
  title, 
  content 
}: { 
  id: string; 
  icon: React.ComponentType<any>; 
  iconBg: string; 
  iconColor: string; 
  title: string; 
  content: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 ${iconBg} rounded-lg`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto p-1 rounded-full hover:bg-slate-100"
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-slate-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-500" />
          )}
        </button>
      </div>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
        >
          {content}
        </motion.div>
      )}
    </section>
  );
}