import { Metadata } from 'next';
import { Heart, Users, Laptop, Wifi, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Support Others - JobSpark',
  description: 'Help us provide laptops and internet access to South African youth who need it most',
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <Heart className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Help Us Bridge the Digital Divide
          </h1>
          <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Every young South African deserves access to the tools they need to succeed. 
            Help us provide laptops and internet access to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#donate-form" 
              className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Make a Contribution
            </a>
            <a 
              href="#apply-form" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Apply for Support
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              The Challenge We're Solving
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              South Africa faces a 32.9% youth unemployment rate. Many talented young people 
              lack the basic tools needed for today's digital job market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">32.9% Youth Unemployment</h3>
                    <p className="text-slate-600">
                      Millions of young South Africans are looking for work but lack the tools to compete effectively.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Laptop className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Limited Access to Technology</h3>
                    <p className="text-slate-600">
                      Many don't have access to laptops or computers needed for job applications and skill development.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Wifi className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Internet Connectivity Barriers</h3>
                    <p className="text-slate-600">
                      Reliable internet access remains expensive and unavailable in many communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-slate-700 mb-6">
                We envision a South Africa where every young person has access to the digital tools 
                they need to build successful careers. Through partnerships with technology providers 
                and generous community support, we're working to make this vision a reality.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Provide laptops to deserving youth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Subsidized internet access programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Ongoing career development support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We're building partnerships with leading technology providers to create sustainable, 
              long-term solutions for digital access in South Africa.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                <Laptop className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Device Partnerships</h3>
              <p className="text-slate-600 mb-4">
                We're establishing partnerships with device manufacturers and retailers to provide 
                laptops at significantly reduced costs for program participants.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Target Partners:</strong> Raine, local retailers, refurbishment programs
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Wifi className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Connectivity Solutions</h3>
              <p className="text-slate-600 mb-4">
                Working with major network providers to offer subsidized data packages and 
                affordable internet access for program participants.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Target Partners:</strong> MTN, Telkom, Vodacom, Cell C
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Community Support</h3>
              <p className="text-slate-600 mb-4">
                Building a network of mentors and supporters to provide ongoing guidance 
                and career development assistance to program participants.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Future Plans:</strong> NGO establishment, formal vetting process
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Get Involved
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Whether you want to contribute to our mission or apply for support, 
              we'd love to hear from you. Together, we can make a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div id="donate-form" className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Make a Contribution</h3>
              </div>
              
              <p className="text-slate-700 mb-6">
                Help us provide digital access to young South Africans. Every contribution, 
                no matter the size, brings us closer to our goal.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How would you like to contribute?
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="">Select contribution type</option>
                    <option value="financial">Financial contribution</option>
                    <option value="devices">Device donation</option>
                    <option value="services">Professional services</option>
                    <option value="mentorship">Mentorship/Guidance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about how you'd like to help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Submit Contribution Inquiry
                </button>
              </form>
            </div>

            {/* Application Form */}
            <div id="apply-form" className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Apply for Support</h3>
              </div>
              
              <p className="text-slate-700 mb-6">
                If you're a young South African who could benefit from access to technology 
                and career development support, we'd love to hear from you.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Age *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your age range</option>
                    <option value="18-21">18-21 years</option>
                    <option value="22-25">22-25 years</option>
                    <option value="26-29">26-29 years</option>
                    <option value="30-35">30-35 years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Location (City/Province) *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Cape Town, Western Cape"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What support do you need most?
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select primary need</option>
                    <option value="laptop">Laptop/Computer access</option>
                    <option value="internet">Internet connectivity</option>
                    <option value="both">Both laptop and internet</option>
                    <option value="training">Career development training</option>
                    <option value="mentorship">Mentorship/Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tell us about your situation *
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe your current situation, career goals, and how this support would help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Questions? Get in Touch
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We're here to help and answer any questions you might have about our program.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-green-100 rounded-lg mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
              <a href="mailto:support@jobspark.co.za" className="text-green-600 hover:text-green-700">
                support@jobspark.co.za
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="p-3 bg-blue-100 rounded-lg mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
              <a href="tel:+27123456789" className="text-blue-600 hover:text-blue-700">
                +27 12 345 6789
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="p-3 bg-orange-100 rounded-lg mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Visit Us</h3>
              <span className="text-slate-600">Cape Town, South Africa</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}