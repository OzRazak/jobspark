import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - JobSpark',
  description: 'Terms of Service for JobSpark - Your AI Career Co-Pilot',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                <strong>Effective Date:</strong> January 1, 2025<br />
                <strong>Last Updated:</strong> January 1, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Welcome to JobSpark! These Terms of Service ("Terms") govern your use of the JobSpark platform and services ("Services") operated by JobSpark ("we," "our," or "us"). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  If you disagree with any part of these Terms, then you may not access the Services. These Terms apply to all visitors, users, and others who access or use the Services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Description of Services</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  JobSpark provides AI-powered career development tools specifically designed for the South African job market, including:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>AI-powered interview practice and coaching</li>
                  <li>CV generation and optimization tools</li>
                  <li>Career readiness assessments</li>
                  <li>Job matching and application assistance</li>
                  <li>Professional development resources</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. User Accounts and Registration</h2>
                <h3 className="text-xl font-medium text-slate-800 mb-3">3.1 Account Creation</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  To access certain features of our Services, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                </p>
                
                <h3 className="text-xl font-medium text-slate-800 mb-3">3.2 Account Security</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Acceptable Use Policy</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>Use the Services for any illegal or unauthorized purpose</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Upload or transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Services</li>
                  <li>Use automated systems to access the Services without permission</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Intellectual Property Rights</h2>
                <h3 className="text-xl font-medium text-slate-800 mb-3">5.1 Our Content</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The Services and their original content, features, and functionality are and will remain the exclusive property of JobSpark and its licensors. The Services are protected by copyright, trademark, and other laws.
                </p>
                
                <h3 className="text-xl font-medium text-slate-800 mb-3">5.2 Your Content</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You retain ownership of any content you submit, post, or display on or through the Services ("Your Content"). By submitting Your Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute Your Content solely for the purpose of providing and improving our Services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Open Source and Free Access</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  JobSpark is committed to providing free access to career development tools for those who need them most. Our core services are provided at no cost, and our platform is built on open-source principles.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  While our Services are free to use, we may offer premium features or accept voluntary contributions to support our mission of tackling unemployment in South Africa.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Privacy and Data Protection</h2>
                <p className="text-slate-700 leading-relaxed">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Services. By using our Services, you agree to the collection and use of information in accordance with our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Disclaimers and Limitations</h2>
                <h3 className="text-xl font-medium text-slate-800 mb-3">8.1 Service Availability</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We strive to provide reliable Services, but we cannot guarantee that the Services will be available at all times or free from errors. The Services are provided "as is" and "as available" without warranties of any kind.
                </p>
                
                <h3 className="text-xl font-medium text-slate-800 mb-3">8.2 Career Outcomes</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  While our Services are designed to help improve your career prospects, we cannot guarantee specific outcomes such as job offers, interviews, or career advancement. Your success depends on many factors beyond our control.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-slate-700 leading-relaxed">
                  To the maximum extent permitted by South African law, JobSpark shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Indemnification</h2>
                <p className="text-slate-700 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless JobSpark and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the Services or violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Termination</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  You may terminate your account at any time by contacting us. Upon termination, your right to use the Services will cease immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Governing Law</h2>
                <p className="text-slate-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of South Africa.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Changes to Terms</h2>
                <p className="text-slate-700 leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. Your continued use of the Services after such changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">14. Contact Information</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-700"><strong>Email:</strong> legal@jobspark.co.za</p>
                  <p className="text-slate-700"><strong>Address:</strong> JobSpark Legal Department, Cape Town, South Africa</p>
                  <p className="text-slate-700"><strong>Website:</strong> <a href="https://jobspark.co.za" className="text-green-600 hover:text-green-700">jobspark.co.za</a></p>
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