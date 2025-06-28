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
                  JobSpark ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered career platform and services.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This policy complies with the Protection of Personal Information Act (POPIA) of South Africa and other applicable privacy laws.
                </p>
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
                </ul>

                <h3 className="text-xl font-medium text-slate-800 mb-3">2.2 Technical Information</h3>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
                  <li>Device information and browser type</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and platform interactions</li>
                  <li>Performance and analytics data</li>
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
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety, or that of our users</li>
                  <li>With trusted service providers who assist in operating our platform (under strict confidentiality agreements)</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Data Security</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Rights Under POPIA</h2>
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
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Data Retention</h2>
                <p className="text-slate-700 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. International Data Transfers</h2>
                <p className="text-slate-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than South Africa. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Children's Privacy</h2>
                <p className="text-slate-700 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-slate-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Contact Us</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-700"><strong>Email:</strong> privacy@jobspark.co.za</p>
                  <p className="text-slate-700"><strong>Address:</strong> JobSpark Privacy Officer, Cape Town, South Africa</p>
                  <p className="text-slate-700"><strong>Information Regulator:</strong> If you are not satisfied with our response, you may lodge a complaint with the Information Regulator of South Africa at <a href="https://inforegulator.org.za" className="text-green-600 hover:text-green-700">inforegulator.org.za</a></p>
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