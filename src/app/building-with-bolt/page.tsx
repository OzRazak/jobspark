import { Metadata } from 'next';
import { Rocket, Lightbulb, Trophy, Users, Code, Zap, Heart, Star, ExternalLink } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Building with Bolt & Auxo - JobSpark',
  description: 'Discover how JobSpark was born from the World\'s Largest Hackathon and our journey with Bolt.new to tackle South Africa\'s unemployment crisis.',
  keywords: 'Bolt.new, hackathon, Auxo Digital, AI development, South Africa, unemployment, innovation',
};

export default function BuildingWithBoltPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <Rocket className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Building with Bolt & Auxo
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            How the World's Largest Hackathon inspired us to build something truly meaningful 
            for South Africa's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://bolt.new/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colours"
            >
              Explore Bolt.new
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="https://auxo.digital/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colours"
            >
              Visit Auxo Digital
            </a>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              The World's Largest Hackathon
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              When Bolt.new announced over $1,000,000 in prizes for the world's largest hackathon, 
              we knew this was our moment to make a real difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">A Once-in-a-Generation Shift</h3>
                    <p className="text-slate-600">
                      We're standing at the precipice of a revolutionary moment. The rules have changed. 
                      The playing field has been levelled. For the first time in history, anyone with an 
                      idea can build it without traditional software developer skills.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Bolt.new: Breaking Barriers</h3>
                    <p className="text-slate-600">
                      Bolt.new has shattered the barriers between imagination and creation. Describe what 
                      you want to build, and watch as AI transforms your vision into reality—no coding required.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">More Than a Hackathon</h3>
                    <p className="text-slate-600">
                      This wasn't just a hackathon. This was our launchpad, our classroom, our funding round, 
                      and our moment to create something that truly matters for South Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">The Opportunity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <span className="text-slate-700 font-medium">$1,000,000+ in prizes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-500" />
                  <span className="text-slate-700 font-medium">Global community of innovators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700 font-medium">No-code AI development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Rocket className="w-6 h-6 text-orange-500" />
                  <span className="text-slate-700 font-medium">Rapid prototyping and deployment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Journey in Action</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/w93FOJ3pI3U"
                  title="Building JobSpark with Bolt.new"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Prizes Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Challenge Prizes We Pursued
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              To be eligible for Challenge Prizes, projects had to meet specific technical requirements. 
              We embraced multiple challenges to build the most comprehensive solution possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <ExternalLink className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900">Custom Domain Challenge</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Use Entri to get an IONOS Domain Name and publish your Bolt.new app on the domain.
              </p>
              <div className="text-sm text-green-600 font-medium">✓ Completed: jobspark.co.za</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900">Voice AI Challenge</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Use ElevenLabs to make your Bolt.new app conversational with advanced voice AI.
              </p>
              <div className="text-sm text-green-600 font-medium">✓ Completed: AI Interview Coach</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Rocket className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-slate-900">Deploy Challenge</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Use Netlify to deploy your full-stack Bolt.new application with seamless hosting.
              </p>
              <div className="text-sm text-green-600 font-medium">✓ Completed: Live on Netlify</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900">Startup Challenge</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Use Supabase to prep your Bolt.new project to scale to millions of users.
              </p>
              <div className="text-sm text-green-600 font-medium">✓ Completed: Scalable Architecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why JobSpark Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Why We Chose JobSpark
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We considered many ideas, but JobSpark emerged as the most meaningful solution 
              we could build for South Africa's future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Star className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">The Crisis We Face</h3>
                    <p className="text-slate-600">
                      South Africa's 32.9% youth unemployment rate isn't just a statistic—it's a crisis 
                      affecting millions of talented individuals who simply lack the tools and confidence 
                      to showcase their potential.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">The Perfect Moment</h3>
                    <p className="text-slate-600">
                      With AI technology finally mature enough to understand South African accents, 
                      cultural nuances, and workplace dynamics, we could build something that truly 
                      serves our community.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Meaningful Impact</h3>
                    <p className="text-slate-600">
                      Every person who practices with JobSpark and lands a job doesn't just change their 
                      own life—they impact their family, their community, and contribute to South Africa's 
                      economic growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-700 mb-6">
                At Auxo Digital, our mission has always been to help people feel more like themselves 
                and focus on what's important as humans. JobSpark embodies this perfectly—it's not 
                about replacing human connection, but about giving people the confidence and tools 
                they need to shine in interviews.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Free and accessible to all</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Built for South African context</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-slate-700">Powered by cutting-edge AI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-700">Community-driven development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Built with Best-in-Class Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leveraging the power of Bolt.new and our partner ecosystem to create 
              a world-class platform in record time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Bolt.new</h3>
              <p className="text-slate-600 text-sm">AI-powered development platform</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Supabase</h3>
              <p className="text-slate-600 text-sm">Backend and database infrastructure</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">ElevenLabs</h3>
              <p className="text-slate-600 text-sm">Advanced voice AI technology</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Netlify</h3>
              <p className="text-slate-600 text-sm">Deployment and hosting platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We're just getting started. Help us build the future of career development 
            in South Africa and beyond.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Use JobSpark</h3>
              <p className="text-slate-600 text-sm mb-4">
                Start practising interviews and building your career today
              </p>
              <a 
                href="https://app.jobspark.co.za/auth" 
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Get Started Free →
              </a>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Support Others</h3>
              <p className="text-slate-600 text-sm mb-4">
                Help us provide access to those who need it most
              </p>
              <a 
                href="/donate" 
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Support the Mission →
              </a>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="p-3 bg-orange-100 rounded-lg w-fit mx-auto mb-4">
                <Code className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Build with Us</h3>
              <p className="text-slate-600 text-sm mb-4">
                Explore how Auxo Digital can help your business
              </p>
              <a 
                href="https://auxo.digital/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                Visit Auxo Digital →
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Ready to Build Something Amazing?</h3>
            <p className="mb-4">
              Experience the power of Bolt.new and see how we built JobSpark in record time.
            </p>
            <a 
              href="https://bolt.new/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colours"
            >
              Try Bolt.new Today
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}