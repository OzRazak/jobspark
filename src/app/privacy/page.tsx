'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Shield, Lock, Database, User, Clock, AlertTriangle, CheckCircle, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyAccordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="px-6 pb-4"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="flex items-center space-x-3 mb-8">
              <Shield className="w-8 h-8 text-green-600" />
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">Privacy Policy</h1>
            </div>
            
            <div className="mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Last Updated</span>
              </div>
              <p className="text-blue-800">
                <strong>Effective Date:</strong> January 1, 2025<br />
                <strong>Last Updated:</strong> January 1, 2025
              </p>
            </div>

            <div className="space-y-4">
              <PrivacyAccordion title="1. Introduction">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    JobSpark, a product of Auxo Digital Pty Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered career platform and services.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    This policy complies with the Protection of Personal Information Act (POPIA) of South Africa and other applicable privacy laws.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-slate-700"><strong>Contact Information:</strong></p>
                    <p className="text-slate-700">Auxo Digital Pty Ltd</p>
                    <p className="text-slate-700">6 Hoggs Bay Close, Kyalami, 1684, South Africa</p>
                    <p className="text-slate-700">Email: info@auxo.digital</p>
                    <p className="text-slate-700">Phone: +27 21 8480 9</p>
                    <p className="text-slate-700">Information Officer: Theodore Egling</p>
                  </div>
                </div>
              </PrivacyAccordion>

              <PrivacyAccordion title="2. Information We Collect">
                <div className="prose prose-slate max-w-none">
                  <h4 className="text-lg font-medium text-slate-800 mb-3 flex items-center">
                    <User className="w-5 h-5 mr-2 text-green-600" />
                    Personal Information
                  </h4>
                  <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
                    <li>Name, email address, and contact information</li>
                    <li>Professional information (work experience, education, skills)</li>
                    <li>CV and resume content</li>
                    <li>Interview practice recordings and responses</li>
                    <li>Profile preferences and settings</li>
                    <li>Voice recordings for AI interview practice</li>
                    <li>Video recordings for interview preparation</li>
                  </ul>

                  <h4 className="text-lg font-medium text-slate-800 mb-3 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-blue-600" />
                    Technical Information
                  </h4>
                  <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                    <li>Usage patterns and platform interactions</li>
                    <li>Performance and analytics data</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Session recordings for user experience improvement</li>
                  </ul>
                </div>
              </PrivacyAccordion>

              <PrivacyAccordion title="3. How We Use Your Information">
                <div className="prose prose-slate max-w-none">
                  <ul className="list-disc pl-6 text-slate-700 space-y-2">
                    <li>Provide AI-powered interview coaching and CV generation services</li>
                    <li>Personalize your experience and improve our platform</li>
                    <li>Analyze usage patterns to enhance our services</li>
                    <li>Communicate with you about your account and our services</li>
                    <li>Ensure platform security and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                    <li>Process voice and video data for AI training and improvement</li>
                    <li>Provide career matching and job recommendation services</li>
                    <li>Generate insights and analytics for service improvement</li>
                  </ul>
                </div>
              </PrivacyAccordion>

              <PrivacyAccordion title="4. Legal Basis for Processing (POPIA Compliance)">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Under POPIA, we process your personal information based on the following lawful grounds:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2">
                    <li><strong>Consent:</strong> Where you have given explicit consent for specific processing activities</li>
                    <li><strong>Contract Performance:</strong> To provide our services as agreed in our terms</li>
                    <li><strong>Legitimate Interests:</strong> For service improvement and security purposes</li>
                    <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                  </ul>
                </div>
              </PrivacyAccordion>

              <PrivacyAccordion title="5. Information Sharing and Disclosure">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety, or that of our users</li>
                    <li>With trusted service providers who assist in operating our platform (under strict confidentiality agreements)</li>
                    <li>In connection with a business transfer or merger</li>
                    <li>With AI service providers (OpenAI, ElevenLabs) for processing voice and text data</li>
                    <li>With hosting and infrastructure providers (Supabase, Netlify) for data storage and processing</li>
                  </ul>
                </div>
              </PrivacyAccordion>

              <PrivacyAccordion title="6. Data Security">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                    <li>Secure cloud infrastructure with industry-standard certifications</li>
                    <li>Regular backup and disaster recovery procedures</li>
                    <li>Multi-factor authentication for administrative access</li>
                  </ul>
                </div>
              </PrivacyAccordion>

              <PrivacyAccordion title="7. Your Rights Under POPIA">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    As a South African resident, you have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2">
                    <li><strong>Right to Access:</strong> Request access to your personal information we hold</li>
                    <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Right to Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Right to Object:</strong> Object to the processing of your personal information</li>
                    <li><strong>Right to Data Portability:</strong> Request your data in a portable format</li>
                    <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing where applicable</li>
                    <li><strong>Right to Restrict Processing:</strong> Request limitation of processing in certain circumstances</li>
                    <li><strong>Right to Lodge a Complaint:</strong> File a complaint with the Information Regulator</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    To exercise these rights, please contact our Information Officer at info@auxo.digital.
                  </p>
                </div>
              </PrivacyAccordion>

              <PrivacyAccordion title="8. Data Retention">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods include:
                  </p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2">
                    <li><strong>Account Data:</strong> Retained while your account is active and for 2 years after closure</li>
                    <li><strong>Interview Recordings:</strong> Retained for 1 year unless you request earlier deletion</li>
                    <li><strong>Analytics Data:</strong> Aggregated and anonymized data may be retained indefinitely</li>
                    <li><strong>Legal Compliance Data:</strong> Retained as required by applicable laws</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed">
                    When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </div>
              </PrivacyAccordion>

              <PrivacyAccordion title="9. Contact Us">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-slate-700"><strong>Auxo Digital Pty Ltd</strong></p>
                    <p className="text-slate-700"><strong>Information Officer:</strong> Theodore Egling</p>
                    <p className="text-slate-700"><strong>Email:</strong> info@auxo.digital</p>
                    <p className="text-slate-700"><strong>Phone:</strong> +27 21 8480 9</p>
                    <p className="text-slate-700"><strong>Address:</strong> 6 Hoggs Bay Close, Kyalami, 1684, South Africa</p>
                    <p className="text-slate-700 mt-4">
                      <strong>Information Regulator:</strong> If you are not satisfied with our response, you may lodge a complaint with the Information Regulator of South Africa at{' '}
                      <a 
                        href="https://inforegulator.org.za" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 inline-flex items-center"
                      >
                        inforegulator.org.za
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </p>
                  </div>
                </div>
              </PrivacyAccordion>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-900">Your Privacy Matters</span>
              </div>
              <p className="text-green-800 text-sm">
                We are committed to protecting your privacy and being transparent about how we handle your data. 
                If you have any concerns or questions, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}