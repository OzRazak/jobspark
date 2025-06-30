import { Metadata } from 'next';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Tag, Smartphone, Target, Users, Zap, Trophy, Star, GamepadIcon, BarChart, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'JobSpark ZA: The Mobile-First AI Career Platform Transforming South African Youth Employment - JobSpark Blog',
  description: 'How our AI-powered, mobile-first platform is specifically designed to tackle South Africa\'s 60% youth unemployment crisis with gamified career readiness tools.',
  keywords: 'JobSpark ZA, mobile-first, youth unemployment, AI platform, career readiness, South Africa, gamification, job search',
};

export default function JobSparkZAMobileFirstPost() {
  const post = {
    title: 'JobSpark ZA: The Mobile-First AI Career Platform Transforming South African Youth Employment',
    excerpt: 'How our AI-powered, mobile-first platform is specifically designed to tackle South Africa\'s 60% youth unemployment crisis with gamified career readiness tools.',
    author: 'Oz Razak',
    authorBio: 'Founder of Auxo Digital and Creator of JobSpark',
    date: '2025-01-14',
    readTime: '12 min read',
    category: 'Platform Overview',
    tags: ['JobSpark ZA', 'Mobile-First', 'Youth Unemployment', 'AI Platform', 'Career Readiness', 'South Africa'],
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
  };

  const relatedPosts = [
    {
      id: 'ai-revolution-south-african-job-market',
      title: 'How AI is Revolutionizing the South African Job Market in 2025',
      excerpt: 'Discover how artificial intelligence is transforming recruitment and creating new opportunities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'AI & Technology',
      readTime: '8 min read'
    },
    {
      id: 'breaking-unemployment-cycle-digital-skills',
      title: 'Breaking the Unemployment Cycle: How Digital Skills Can Transform Your Career',
      excerpt: 'Digital skills offer a pathway to economic freedom for South African youth.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Skills Development',
      readTime: '12 min read'
    },
    {
      id: 'future-platform-expansion',
      title: 'Our Future Ideas for Expanding the Platform',
      excerpt: 'Introducing TalentSpark Portal - our vision for revolutionizing B2B hiring.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Platform Development',
      readTime: '15 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-ZA', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <Bookmark className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-lg prose-slate max-w-none">
          
          {/* Executive Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl my-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Executive Summary</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              JobSpark ZA is a mobile-first, AI-powered career readiness platform designed to solve South Africa's crippling youth unemployment crisis by directly addressing the application barrier that ambitious but underserved young professionals face. While the market is crowded with disconnected global AI giants like Teal and Kickresume, slow-moving local job boards like PNet and Careers24, and niche, single-purpose tools like Google's Interview Warmup, no existing platform offers an effective, integrated solution tailored for the South African context.
            </p>
            
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Our Competitive Advantage</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our platform's primary advantage is its all-in-one integrated workflow, which seamlessly guides users from building an ATS-optimized CV, to generating AI-tailored cover letters, and finally to practicing for interviews with an innovative voice-first AI coach powered by ElevenLabs. This replaces the clunky, multi-service process required by competitors with a single, intuitive journey.
            </p>
            
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Our Defensible Moat</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Hyper-Localization</h4>
                <p className="text-slate-600 text-sm">Unlike USD-priced global tools, JobSpark ZA is affordable, priced in Rands, and fine-tuned to the nuances of the local job market.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Voice-First Innovation</h4>
                <p className="text-slate-600 text-sm">Our accessible voice-only interview coach is less intimidating than video-based tools, allowing users to practice anywhere, anytime.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Motivational Gamification</h4>
                <p className="text-slate-600 text-sm">To combat the demoralizing nature of job hunting, we incorporate engaging features like a "Readiness Score," achievement badges, and daily streaks.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Unmatched Team Insight</h4>
                <p className="text-slate-600 text-sm">Our team's 360-degree view of the problem, blending empathetic understanding of candidates with firsthand business experience of hiring.</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-medium">
                This potent combination of problem urgency, innovative solution, and perfect alignment with the hackathon's technical and business challenges makes JobSpark ZA the undisputed top-priority project. It is not merely another CV builder, but a desperately needed, end-to-end career companion designed to build confidence and unlock the potential of South Africa's youth.
              </p>
            </div>
          </div>

          <p className="text-xl text-slate-700 leading-relaxed mb-8">
            JobSpark ZA is more than just another career platform—it's a lifeline for South Africa's ambitious but underserved youth. In a country where over 60% of young people aged 15-24 face unemployment, we've built an AI-powered, mobile-first solution that meets users where they are and guides them to where they want to be.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              The Crisis We're Addressing
            </h3>
            <p className="text-red-800">
              South Africa's youth unemployment rate of over 60% for the 15-24 age group represents one of the world's most severe employment crises. Behind these statistics are millions of talented individuals who simply lack the professional guidance to navigate the modern job market.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Problem: A Two-Fold Crisis</h2>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">Systemic Challenge</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            South Africa suffers from one of the world's highest youth unemployment rates. There is a massive pool of talent desperate for opportunities, but traditional pathways to employment have failed to bridge the gap between potential and opportunity.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">Application Barrier</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            The modern hiring process is brutal. Automated Tracking Systems (ATS) discard the majority of CVs before a human sees them. Job seekers must create perfectly formatted, keyword-rich applications tailored to each job. This is a skill that is not taught in school, creating a significant barrier for those without professional networks or guidance.
          </p>

          <p className="text-slate-700 leading-relaxed mb-8">
            This leads to a demoralizing cycle of rejection, eroding the confidence of a generation with immense potential.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Solution: JobSpark ZA</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            JobSpark ZA is not just a tool; it's a journey. Our platform provides a single, integrated workflow to get users "application ready" through four core components:
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">AI-Powered CV Builder</h3>
              </div>
              <p className="text-slate-600">
                Users input their work history and skills. Our AI formats this into professional, ATS-friendly templates, suggesting powerful phrasing and relevant keywords that actually get noticed by recruiters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Targeted Cover Letter Generator</h3>
              </div>
              <p className="text-slate-600">
                Users paste a job description, and our AI generates a compelling, tailored cover letter in seconds, highlighting the user's most relevant skills for that specific role.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Smartphone className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">AI Interview Coach</h3>
              </div>
              <p className="text-slate-600">
                Our standout feature. Using ElevenLabs, a voice-first AI coach simulates real interviews. Users respond with their voice, and the AI provides constructive feedback on content and delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <GamepadIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Gamified Progress Tracking</h3>
              </div>
              <p className="text-slate-600">
                A "Readiness Score," achievement badges, and daily streaks keep users motivated and engaged throughout the stressful job-hunting process.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Unique Value Proposition</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Our competitive advantage lies in four key areas that set us apart from global competitors:
          </p>

          <div className="space-y-6 my-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-green-100 rounded-lg mt-1">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">All-in-One Integration</h4>
                <p className="text-slate-700">
                  While competitors offer single tools, we provide the entire journey in one seamless experience. No more jumping between Kickresume for CVs, ChatGPT for cover letters, and Interview Warmup for practice.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg mt-1">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Hyper-Localization</h4>
                <p className="text-slate-700">
                  We are built for South Africa. Our pricing is in Rands, our advice is tailored to the local market, and we understand the specific challenges our users face, including cultural nuances like Ubuntu philosophy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-orange-100 rounded-lg mt-1">
                <Smartphone className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Voice-First Innovation</h4>
                <p className="text-slate-700">
                  Our voice-based interview coach is more accessible, less intimidating, and more engaging than any text or video-based competitor. Users can practice anywhere, anytime, just by speaking into their phone.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-purple-100 rounded-lg mt-1">
                <Trophy className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Motivational Design</h4>
                <p className="text-slate-700">
                  We don't just provide tools; we build confidence. Our gamification turns a chore into an empowering and rewarding process, with readiness scores, achievement badges, and daily streaks.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Target Audience: "The Ambitious Striver"</h2>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl my-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Primary User Profile</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Demographics</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Age 18-28</li>
                  <li>• Living in or near South Africa's urban centers</li>
                  <li>• Currently a student, recent graduate, or in first few years of employment</li>
                  <li>• Smartphone-first digital natives</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Psychographics</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Ambitious and hungry for success</li>
                  <li>• Feels overlooked by traditional systems</li>
                  <li>• Active on TikTok, Instagram, and WhatsApp</li>
                  <li>• Frustrated by lack of progress</li>
                  <li>• Values authenticity and is skeptical of corporate solutions</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Market Size & Opportunity</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            The Total Addressable Market (TAM) is enormous. There are over 10 million South Africans aged 20-34. Our initial serviceable market is the urban, digitally-connected segment of this group, numbering in the millions.
          </p>

          <div className="bg-slate-50 p-6 rounded-xl my-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Market Breakdown</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">10M+</div>
                <div className="text-sm text-slate-600">South Africans aged 20-34</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">3M+</div>
                <div className="text-sm text-slate-600">Urban, digitally-connected youth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">60%</div>
                <div className="text-sm text-slate-600">Youth unemployment rate</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Mobile-First Advantage</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Our mobile-first approach isn't just a design choice—it's a strategic necessity. In South Africa, smartphone penetration far exceeds computer ownership, especially among our target demographic. By building for mobile from day one, we ensure accessibility for users regardless of their economic circumstances.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Accessibility Benefits</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• No need for expensive computers or laptops</li>
                <li>• Practice interviews anywhere, anytime</li>
                <li>• Offline capabilities for areas with poor connectivity</li>
                <li>• Intuitive touch-based interface</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">User Experience Benefits</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Voice-first interaction feels natural</li>
                <li>• Gamification works better on mobile</li>
                <li>• Push notifications for motivation</li>
                <li>• Social sharing capabilities</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Impact & Social Mission</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            JobSpark ZA is positioned to become the indispensable career companion for millions of young South Africans, creating immense social impact while building a viable, scalable business. Every successful user doesn't just change their own life—they contribute to breaking the cycle of unemployment that affects entire communities.
          </p>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl my-12">
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <p className="text-green-100 mb-6">
              We're not just building a platform—we're building hope. Every feature we develop, every algorithm we train, and every user interaction we design is guided by one simple question: "Will this help a young South African land their dream job?"
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://app.jobspark.co.za/auth" 
                className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
              >
                Start Your Journey
              </a>
              <a 
                href="/donate" 
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Support Others
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Road Ahead</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            As we continue to develop JobSpark ZA, our focus remains on three core principles:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Accessibility First</h4>
                <p className="text-slate-600">Always free for those who need it most, with premium features supporting our mission.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Continuous Innovation</h4>
                <p className="text-slate-600">Leveraging the latest AI advances to provide increasingly sophisticated career guidance.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Community-Driven Development</h4>
                <p className="text-slate-600">Building features based on real user needs and feedback from the South African job market.</p>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            The future of work in South Africa is bright, and JobSpark ZA is here to ensure that every ambitious young person has the tools, confidence, and support they need to claim their place in it.
          </p>

        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-slate-200">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{post.author}</h3>
              <p className="text-slate-600 mb-3">{post.authorBio}</p>
              <p className="text-slate-700 text-sm">
                Oz is the founder of Auxo Digital and the creator of JobSpark. With a passion for using technology 
                to solve real-world problems, he's dedicated to tackling South Africa's unemployment crisis through 
                innovative AI-powered solutions that empower individuals and transform communities.
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8">
          <div className="flex items-center space-x-2 mb-4">
            <Tag className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-600">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full hover:bg-slate-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.id} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-slate-500 mb-2">{relatedPost.category}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    <Link 
                      href={`/blog/${relatedPost.id}`}
                      className="hover:text-green-600 transition-colors"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{relatedPost.readTime}</span>
                    <Link 
                      href={`/blog/${relatedPost.id}`}
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}