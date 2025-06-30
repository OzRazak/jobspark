import { Metadata } from 'next';
import { Heart, Users, Zap, Target, Mail, ExternalLink, Lightbulb, Globe, Code, Rocket, Brain, Wrench } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Auxo Digital - JobSpark',
  description: 'Meet the team behind JobSpark. Learn about Auxo Digital\'s mission to help people feel more like themselves through innovative digital solutions.',
  keywords: 'Auxo Digital, Oz Razak, Theodore Egling, JobSpark team, digital solutions, AI development, South Africa',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <Heart className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Auxo Digital
          </h1>
          <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            The passionate team behind JobSpark, dedicated to helping people feel more like themselves 
            and focus on what truly matters as humans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://auxo.digital/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colours"
            >
              Visit Auxo Digital
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="mailto:info@auxo.digital" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colours"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Story & Mission
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Born from a deep understanding of human potential and the challenges people face in expressing their true capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Our Core Mission</h3>
                    <p className="text-slate-600">
                      At Auxo Digital, our mission is to help people feel more like themselves and have more time 
                      focussing on what's important as humans. We believe technology should enhance human potential, 
                      not replace it.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">The JobSpark Inspiration</h3>
                    <p className="text-slate-600">
                      Having reviewed thousands of CVs and interviewed hundreds of people, we've seen incredible 
                      talent held back by lack of confidence. We knew these individuals had what it takes to be 
                      exceptional – they just needed the right tools to showcase it.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Rocket className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Rapid Innovation</h3>
                    <p className="text-slate-600">
                      The World's Largest Hackathon with Bolt inspired us to rapidly build something we knew 
                      South Africans would love – a tool that elevates lives and helps people we'd want on our own mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What We Do</h3>
              <p className="text-slate-700 mb-6">
                We bring AI understanding and solutions through custom digital platforms that we build 
                in 3 to 6 months rapidly for enterprises. Our goal is to showcase what we can do to as 
                many as possible, bringing joy and relief through tangible impact.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Custom AI-powered platforms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Rapid 3-6 month development cycles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Enterprise digital transformation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Human-centred design approach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The passionate individuals driving innovation and positive impact through technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Oz Razak - Founder */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-green-200">
                  <Image
                    src="/OZ10 Large Medium copy copy.jpeg"
                    alt="Oz Razak"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Oz Razak</h3>
                <p className="text-lg text-green-600 font-semibold mb-4">Founder of Auxo Digital</p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Oz founded Auxo Digital with a vision to bridge the gap between human potential and technological capability. 
                  With years of experience in digital transformation and a deep understanding of the challenges faced by 
                  both individuals and enterprises, Oz leads our mission to create solutions that truly matter.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "We've seen too many talented individuals struggle not because they lack ability, but because they 
                  lack the confidence and tools to showcase their true potential. JobSpark is our way of levelling 
                  the playing field and giving everyone the chance to shine."
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a 
                    href="https://www.linkedin.com/in/oz-razak/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colours text-sm"
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:info@auxo.digital" 
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colours text-sm"
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    Connect
                  </a>
                </div>
              </div>
            </div>

            {/* Theodore Egling - Technical Director */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-200">
                  <Image
                    src="/Theo Image.jpeg"
                    alt="Theodore Egling"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Theodore Egling</h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">Co-Founder & Technical Director</p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Theodore is the co-founder and Technical Director at Auxo Digital. As a digital creator and 
                  inventor, Theodore excels in designing solutions to tackle business challenges.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  He holds an MEng in Artificial Intelligence and a BSc in Mechanical Engineering. He has led the 
                  successful implementation of standout projects across multidisciplinary software development.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <Brain className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 text-sm">MEng Artificial Intelligence</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Wrench className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 text-sm">BSc Mechanical Engineering</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 text-sm">Multidisciplinary Software Development</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a 
                    href="https://www.linkedin.com/in/theodore-egling-95a64b203/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colours text-sm"
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:info@auxo.digital" 
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colours text-sm"
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Everything we do is guided by our core beliefs about technology, humanity, and positive impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Human-Centred</h3>
              <p className="text-slate-600">
                Technology should enhance human potential, not replace it. We build solutions that help people 
                feel more like themselves and focus on what truly matters.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rapid Impact</h3>
              <p className="text-slate-600">
                We believe in moving fast to create tangible impact. Our rapid development approach means 
                solutions that matter, delivered when they're needed most.
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Accessible Innovation</h3>
              <p className="text-slate-600">
                Great technology should be accessible to everyone. We're committed to creating solutions 
                that work for people regardless of their background or resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We'd love to have more people engage with us. Whether you want to support the JobSpark project, 
            explore how we can help your business, or simply connect with like-minded individuals who believe 
            in positive impact through technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Support JobSpark</h3>
              <p className="text-slate-600 text-sm mb-4">
                Help us reach more South Africans who need career support
              </p>
              <a 
                href="/donate" 
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Support the Project →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Enterprise Solutions</h3>
              <p className="text-slate-600 text-sm mb-4">
                Discover how we can transform your business with custom AI platforms
              </p>
              <a 
                href="https://auxo.digital/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Visit Auxo Digital →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="p-3 bg-orange-100 rounded-lg w-fit mx-auto mb-4">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Get in Touch</h3>
              <p className="text-slate-600 text-sm mb-4">
                Connect with us to explore collaboration opportunities
              </p>
              <a 
                href="mailto:info@auxo.digital" 
                className="text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                Email Us →
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Ready to Make an Impact?</h3>
            <p className="mb-4">
              Reach out to us at <strong>info@auxo.digital</strong> to help us positively impact more people and businesses.
            </p>
            <a 
              href="mailto:info@auxo.digital" 
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colours"
            >
              Start the Conversation
              <Mail className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}