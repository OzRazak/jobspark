import { Metadata } from 'next';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Tag, Building, Users, Zap, Target, BarChart, MessageSquare, CheckCircle, TrendingUp, Lightbulb, Layers, Network, Workflow } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Our Future Ideas for Expanding the Platform - JobSpark Blog',
  description: 'Discover TalentSpark Portal and the complete JobSpark Ecosystem - our vision for revolutionizing B2B hiring in South Africa with AI-powered recruitment tools.',
  keywords: 'TalentSpark, B2B hiring, recruitment, South Africa, AI recruitment, job portal, hiring platform, JobSpark ecosystem',
};

export default function FuturePlatformExpansionPost() {
  const post = {
    title: 'Our Future Ideas for Expanding the Platform',
    excerpt: 'Introducing TalentSpark Portal and the complete JobSpark Ecosystem - our vision for revolutionizing how South African businesses hire junior talent with AI-powered recruitment tools.',
    author: 'Oz Razak',
    authorBio: 'Founder of Auxo Digital and Creator of JobSpark',
    date: '2025-01-16',
    readTime: '15 min read',
    category: 'Platform Development',
    tags: ['TalentSpark', 'B2B', 'Recruitment', 'AI', 'Platform Expansion', 'South Africa', 'JobSpark Ecosystem'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  };

  const relatedPosts = [
    {
      id: 'jobspark-za-mobile-first-career-platform',
      title: 'JobSpark ZA: The Mobile-First AI Career Platform Transforming South African Youth Employment',
      excerpt: 'How our AI-powered, mobile-first platform tackles South Africa\'s unemployment crisis.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Platform Overview',
      readTime: '12 min read'
    },
    {
      id: 'jobspark-inspiration-competitive-landscape',
      title: 'Where JobSpark Found Its Spark: Analyzing the Global Career Tools Landscape',
      excerpt: 'Discover how we identified the perfect opportunity gap in the career development market.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Market Analysis',
      readTime: '10 min read'
    },
    {
      id: 'ai-revolution-south-african-job-market',
      title: 'How AI is Revolutionizing the South African Job Market in 2025',
      excerpt: 'Discover how artificial intelligence is transforming recruitment and creating new opportunities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'AI & Technology',
      readTime: '8 min read'
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
          
          <p className="text-xl text-slate-700 leading-relaxed mb-8">
            As JobSpark continues to empower individual job seekers across South Africa, we're excited to share our vision for the next phase of our platform: <strong>The JobSpark Ecosystem</strong>. This comprehensive, two-sided talent marketplace will fundamentally fix the broken hiring process for junior talent in South Africa, creating a unified platform that benefits both job seekers and employers.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The JobSpark Ecosystem: A Complete Vision</h2>
          
          <p className="text-slate-700 leading-relaxed mb-6">
            The JobSpark Ecosystem is designed to create a single, unified platform that simultaneously empowers job seekers to present their best selves and provides businesses with an efficient, intelligent tool to discover quality candidates. The ecosystem directly connects preparation with opportunity, creating a "readiness loop" where candidates are given the tools to succeed, and businesses gain direct access to the resulting pool of high-quality, pre-vetted talent.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl my-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6">The Core Ecosystem Loop</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Candidate Prepares</h4>
                    <p className="text-slate-600 text-sm">Job seeker signs up on JobSpark and is guided through building a structured professional profile, generating a perfect CV, and practicing interviews with an AI coach.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Company Seeks</h4>
                    <p className="text-slate-600 text-sm">Business posts a job on the TalentSpark portal, defining exact criteria and custom screening questions they need answered.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Candidate Applies</h4>
                    <p className="text-slate-600 text-sm">Candidate applies directly within the JobSpark app, submitting their professional profile and a "Video Pitch" answering the company's specific screening questions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Company Screens</h4>
                    <p className="text-slate-600 text-sm">Company instantly receives high-quality, structured applications on their TalentSpark dashboard, allowing them to assess hard skills, soft skills, and personality in minutes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Component 1: JobSpark (The Candidate Application)</h2>
          
          <p className="text-slate-700 leading-relaxed mb-6">
            JobSpark (jobspark.co.za) is the candidate-facing heart of the ecosystem. Its primary purpose is to build user confidence and prepare them for the job market through four core features:
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Structured Profile</h3>
              </div>
              <p className="text-slate-600">
                Guides users to input their data into clean, specific fields that can be easily parsed and analyzed by both AI systems and human recruiters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">AI Document Generation</h3>
              </div>
              <p className="text-slate-600">
                Creates professional, ATS-friendly CVs and tailored cover letters that are optimized for the South African job market.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">AI Interview Coach</h3>
              </div>
              <p className="text-slate-600">
                A safe space for users to practice interview questions using a voice-first interface and record their best answers as a "Video Pitch."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Job Board & Application Portal</h3>
              </div>
              <p className="text-slate-600">
                Allows users to find opportunities and apply with their complete, high-quality profile directly through the platform.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Component 2: TalentSpark Portal (The Recruiter Portal)</h2>
          
          <p className="text-slate-700 leading-relaxed mb-6">
            The TalentSpark portal (talentspark.co.za) is the B2B component that completes the ecosystem loop. While JobSpark creates the talent supply, TalentSpark provides the demand and the screening tools that businesses need.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">High-Level Integration</h3>
            <p className="text-blue-800">
              All applications submitted through JobSpark are routed directly to the corresponding company's dashboard on the TalentSpark portal. The structured data, generated CV, and Video Pitch from the candidate become the assets that the recruiter screens. This seamless integration ensures businesses receive standardized, high-quality, and easy-to-evaluate applications.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">Core Value Proposition for Businesses</h3>

          <p className="text-slate-700 leading-relaxed mb-6">
            The TalentSpark platform offers four key advantages over traditional job boards and recruiting methods:
          </p>

          <div className="space-y-6 my-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-green-100 rounded-lg mt-1">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Dramatically Reduce Time-to-Hire</h4>
                <p className="text-slate-700">
                  By providing structured data and video pitches upfront, recruiters can screen candidates for both technical fit and personality in a fraction of the time, leading to shorter, more effective interview cycles.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg mt-1">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Screen for Soft Skills at Scale</h4>
                <p className="text-slate-700">
                  Move beyond keyword-matched CVs. Asynchronous video screening allows hiring managers to assess communication skills, professionalism, and personality before committing to live interviews.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-orange-100 rounded-lg mt-1">
                <Target className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Unprecedented Application Control</h4>
                <p className="text-slate-700">
                  Businesses are no longer passive recipients of applications. Design your own application funnel with mandatory fields and custom screening questions to ensure only relevant, high-quality submissions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-purple-100 rounded-lg mt-1">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Access to Motivated Talent</h4>
                <p className="text-slate-700">
                  All candidates are sourced through JobSpark, meaning they are inherently proactive, prepared, and have already invested time in presenting their best selves.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Key Features of the TalentSpark Portal</h2>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">Company Profile & Job Posting</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            A self-service portal for businesses to create comprehensive company profiles and post detailed job listings. Unlike traditional job boards, our system guides companies through creating compelling job descriptions that attract the right candidates while setting clear expectations.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">Customizable Application Funnel</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            Recruiters can define mandatory application criteria and set 5-10 custom, job-specific screening questions that candidates must answer via video. This ensures that every application received is thoughtful and relevant to the specific role.
          </p>

          <div className="bg-slate-50 p-6 rounded-xl my-8">
            <h4 className="font-semibold text-slate-900 mb-3">Example Screening Questions:</h4>
            <ul className="space-y-2 text-slate-700">
              <li>• "Describe a time when you had to learn a new skill quickly. How did you approach it?"</li>
              <li>• "What excites you most about working in [specific industry/role]?"</li>
              <li>• "How do you handle feedback and criticism in a professional setting?"</li>
              <li>• "Describe your ideal work environment and team dynamic."</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">The Intelligent Recruiter Dashboard</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            A central command center that displays a clean, manageable list of applicants for each job posting, complete with a top-level "AI Match Score" to help prioritize candidates. The dashboard provides at-a-glance insights while allowing deep dives into individual profiles.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">Dynamic Applicant Profile</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            A comprehensive view of each candidate that includes:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Structured Data</h4>
              <p className="text-green-800 text-sm">Clean, filterable fields for experience, education, and skills</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Video Pitch Player</h4>
              <p className="text-blue-800 text-sm">Embedded player to watch candidate's video responses</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Full Transcription</h4>
              <p className="text-orange-800 text-sm">Text version of video answers for quick scanning and keyword searching</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 mb-4">Automated Scheduling (The "Magic Button")</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            A "Shortlist & Send Invite" feature that simulates sending an interview invitation integrated with the recruiter's calendar, solving a major administrative pain point. This streamlines the transition from screening to interviewing.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Target Business Persona</h2>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl my-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">"The Overwhelmed Hiring Manager"</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Company Size:</strong> Forward-thinking SME with 10-200 employees
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Role:</strong> Directly involved in hiring decisions and processes
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Pain Points:</strong> Frustrated with time wasted sifting through hundreds of CVs from traditional job boards. Struggles to assess soft skills and cultural fit before interviews.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Motivation:</strong> Eager to adopt innovative tools that provide better signal and reduce administrative work while improving hiring outcomes.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">TalentSpark MVP: Hackathon Demo Scope</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            To validate our concept and demonstrate the platform's potential, we developed a comprehensive MVP during our hackathon participation. This demo showcases the core functionality that will revolutionize recruitment in South Africa.
          </p>

          <div className="bg-slate-50 p-6 rounded-xl my-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">MVP Scope (21 Developer-Hours)</h3>
            <p className="text-slate-700 mb-4">
              Scoped for 7 hours of work per developer (Theo, Katleho, Dewald), our MVP focuses on creating a high-fidelity demonstration of the recruiter experience.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Single Job Posting View</h4>
                  <p className="text-slate-600 text-sm">Dashboard showing one hardcoded job posting (e.g., "Full-Stack Developer")</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Applicant List with AI Scores</h4>
                  <p className="text-slate-600 text-sm">3-4 pre-loaded applicants with hardcoded AI Match Scores and status tags</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Detailed Applicant Profiles</h4>
                  <p className="text-slate-600 text-sm">Structured data display, embedded video player, and full transcriptions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">"Magic Button" Simulation</h4>
                  <p className="text-slate-600 text-sm">Shortlist & Send Invite button with success message popup</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Implementation Roadmap</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Our development approach follows a phased rollout strategy:
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-slate-900 mb-2">Phase 1: MVP Development (Q2 2025)</h4>
              <p className="text-slate-700">
                Core platform with basic job posting, application management, and video screening capabilities. Target: 10 pilot companies.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-slate-900 mb-2">Phase 2: Enhanced Features (Q3 2025)</h4>
              <p className="text-slate-700">
                AI matching algorithms, advanced analytics, and automated scheduling integration. Target: 50 active companies.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="font-semibold text-slate-900 mb-2">Phase 3: Scale & Optimize (Q4 2025)</h4>
              <p className="text-slate-700">
                Mobile app, advanced reporting, and enterprise features. Target: 200+ companies, 10,000+ candidate profiles.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Bigger Picture: Solving South Africa's Employment Crisis</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            The JobSpark Ecosystem isn't just another recruitment platform—it's a critical component in addressing South Africa's unemployment crisis from both sides of the equation. While JobSpark prepares individuals for success, TalentSpark ensures businesses can efficiently identify and hire that prepared talent.
          </p>

          <p className="text-slate-700 leading-relaxed mb-8">
            This creates a virtuous cycle: better-prepared candidates lead to better hiring outcomes, which encourages more businesses to use the platform, which creates more opportunities for JobSpark users, which attracts more candidates to prepare through our system.
          </p>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl my-12">
            <h3 className="text-2xl font-bold mb-4">Join Our Vision</h3>
            <p className="text-green-100 mb-6">
              We're building the future of recruitment in South Africa. Whether you're a business looking for better hiring solutions or a developer interested in contributing to this mission, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:info@auxo.digital" 
                className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
              >
                Partner with Us
              </a>
              <a 
                href="/about" 
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Learn More About Auxo
              </a>
            </div>
          </div>

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
                innovative AI-powered solutions.
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