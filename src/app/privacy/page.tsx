import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - JobSpark',
  description: 'Privacy Policy for JobSpark - Your AI Career Co-Pilot',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                <strong>Effective Date:</strong> January 1, 2025<br />
                <strong>Last Updated:</strong> January 1, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
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
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-medium text-slate-800 mb-3">2.1 Personal Information</h3>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
                  <li>Name, email address, and contact information</li>
                  <li>Professional information (work experience, education, skills)</li>
                  <li>CV and resume content</li>
                  <li>Interview practice recordings and responses</li>
                  <li>Profile preferences and settings</li>
                  <li>Voice recordings for AI interview practice</li>
                  <li>Video recordings for interview preparation</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-800 mb-3">2.2 Technical Information</h3>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
                  <li>Device information and browser type</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and platform interactions</li>
                  <li>Performance and analytics data</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Session recordings for user experience improvement</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-800 mb-3">2.3 Cookies and Tracking Technologies</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your experience. You can manage your cookie preferences through our cookie banner or browser settings.
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
                  <li><strong>Necessary Cookies:</strong> Essential for site functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand site usage</li>
                  <li><strong>Marketing Cookies:</strong> Used for personalized advertising</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
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
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Legal Basis for Processing (POPIA Compliance)</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Under POPIA, we process your personal information based on the following lawful grounds:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li><strong>Consent:</strong> Where you have given explicit consent for specific processing activities</li>
                  <li><strong>Contract Performance:</strong> To provide our services as agreed in our terms</li>
                  <li><strong>Legitimate Interests:</strong> For service improvement and security purposes</li>
                  <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Information Sharing and Disclosure</h2>
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
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Data Security</h2>
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
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Your Rights Under POPIA</h2>
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
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Data Retention</h2>
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
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. International Data Transfers</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Your information may be transferred to and processed in countries other than South Africa, including the United States and European Union. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information, including:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>Standard contractual clauses approved by relevant authorities</li>
                  <li>Adequacy decisions where applicable</li>
                  <li>Certification schemes and codes of conduct</li>
                  <li>Binding corporate rules for intra-group transfers</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Children's Privacy</h2>
                <p className="text-slate-700 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it promptly and notify the relevant authorities as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Third-Party Services</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our platform integrates with various third-party services. Please review their privacy policies:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li><strong>OpenAI:</strong> For AI-powered features and content generation</li>
                  <li><strong>ElevenLabs:</strong> For voice synthesis and audio processing</li>
                  <li><strong>Supabase:</strong> For database and authentication services</li>
                  <li><strong>Netlify:</strong> For hosting and content delivery</li>
                  <li><strong>Google Analytics:</strong> For website analytics (if enabled)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Data Breach Notification</h2>
                <p className="text-slate-700 leading-relaxed">
                  In the event of a data breach that poses a risk to your rights and freedoms, we will notify the Information Regulator within 72 hours of becoming aware of the breach. If the breach poses a high risk, we will also notify affected individuals without undue delay, providing information about the nature of the breach and steps being taken to address it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Changes to This Privacy Policy</h2>
                <p className="text-slate-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date. For significant changes, we may also send you an email notification. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">14. Contact Us</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-700"><strong>Auxo Digital Pty Ltd</strong></p>
                  <p className="text-slate-700"><strong>Information Officer:</strong> Theodore Egling</p>
                  <p className="text-slate-700"><strong>Email:</strong> info@auxo.digital</p>
                  <p className="text-slate-700"><strong>Phone:</strong> +27 21 8480 9</p>
                  <p className="text-slate-700"><strong>Address:</strong> 6 Hoggs Bay Close, Kyalami, 1684, South Africa</p>
                  <p className="text-slate-700 mt-4"><strong>Information Regulator:</strong> If you are not satisfied with our response, you may lodge a complaint with the Information Regulator of South Africa at <a href="https://inforegulator.org.za" className=\"text-green-600 hover:text-green-700">inforegulator.org.za</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}