import { Metadata } from 'next';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Career Insights Blog - JobSpark',
  description: 'Expert career advice, interview tips, and insights into the South African job market. Learn how to succeed in your career with AI-powered guidance.',
  keywords: 'career advice, interview tips, South Africa jobs, unemployment, AI career coaching, job search strategies',
};

const blogPosts = [
  {
    id: 'future-platform-expansion',
    title: 'Our Future Ideas for Expanding the Platform',
    excerpt: 'Introducing TalentSpark Portal and the complete JobSpark Ecosystem - our vision for revolutionizing how South African businesses hire junior talent with AI-powered recruitment tools.',
    author: 'Oz Razak',
    authorBio: 'Founder of Auxo Digital and Creator of JobSpark',
    date: '2025-01-16',
    readTime: '15 min read',
    category: 'Platform Development',
    tags: ['TalentSpark', 'B2B', 'Recruitment', 'AI', 'Platform Expansion', 'South Africa'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'ai-revolution-south-african-job-market',
    title: 'How AI is Revolutionizing the South African Job Market in 2025',
    excerpt: 'Discover how artificial intelligence is transforming recruitment, creating new opportunities, and what job seekers need to know to stay competitive in the evolving landscape.',
    author: 'Theodore Egling',
    authorBio: 'Co-Founder & Technical Director at Auxo Digital',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'AI & Technology',
    tags: ['AI', 'Job Market', 'South Africa', 'Career Development', 'Technology'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'jobspark-za-mobile-first-career-platform',
    title: 'JobSpark ZA: The Mobile-First AI Career Platform Transforming South African Youth Employment',
    excerpt: 'How our AI-powered, mobile-first platform is specifically designed to tackle South Africa\'s 60% youth unemployment crisis with gamified career readiness tools.',
    author: 'Oz Razak',
    authorBio: 'Founder of Auxo Digital and Creator of JobSpark',
    date: '2025-01-14',
    readTime: '12 min read',
    category: 'Platform Overview',
    tags: ['JobSpark ZA', 'Mobile-First', 'Youth Unemployment', 'AI Platform', 'Career Readiness', 'South Africa'],
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'jobspark-inspiration-competitive-landscape',
    title: 'Where JobSpark Found Its Spark: Analyzing the Global Career Tools Landscape',
    excerpt: 'Discover how we identified the perfect opportunity gap in the career development market and why South Africa needed a locally-built, integrated solution.',
    author: 'Theodore Egling',
    authorBio: 'Co-Founder & Technical Director at Auxo Digital',
    date: '2025-01-13',
    readTime: '10 min read',
    category: 'Market Analysis',
    tags: ['Competitive Analysis', 'Market Research', 'Career Tools', 'South Africa', 'Platform Strategy', 'Innovation'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'mastering-ubuntu-philosophy-interviews',
    title: 'Mastering the Ubuntu Philosophy in South African Job Interviews',
    excerpt: 'Learn how to authentically incorporate Ubuntu principles into your interview responses and why this uniquely South African concept gives you a competitive edge.',
    author: 'Oz Razak',
    authorBio: 'Founder of Auxo Digital and Creator of JobSpark',
    date: '2025-01-12',
    readTime: '10 min read',
    category: 'Interview Skills',
    tags: ['Ubuntu', 'South Africa', 'Interview Tips', 'Cultural Intelligence', 'Leadership'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'breaking-unemployment-cycle-digital-skills',
    title: 'Breaking the Unemployment Cycle: How Digital Skills Can Transform Your Career in South Africa',
    excerpt: 'With 32.9% youth unemployment, digital skills offer a pathway to economic freedom. Discover which skills are most in-demand and how to acquire them affordably.',
    author: 'Theodore Egling',
    authorBio: 'Co-Founder & Technical Director at Auxo Digital',
    date: '2025-01-10',
    readTime: '12 min read',
    category: 'Skills Development',
    tags: ['Digital Skills', 'Unemployment', 'Career Change', 'South Africa', 'Online Learning'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Career Insights & Expert Advice
          </h1>
          <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Navigate the South African job market with confidence. Get expert insights, 
            practical tips, and strategies that actually work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <span 
                key={category}
                className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our most impactful insights to help you succeed in your career journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article 
                key={post.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={index === 0 ? 400 : 300}
                    className={`w-full object-cover ${index === 0 ? 'h-64 lg:h-80' : 'h-48'}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-ZA', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className={`font-bold text-slate-900 mb-3 ${
                    index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                  }`}>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="hover:text-green-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className={`text-slate-600 mb-4 ${
                    index === 0 ? 'text-lg' : 'text-base'
                  }`}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{post.author}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="flex items-center space-x-1 text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated with Career Insights
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Get weekly career tips, job market insights, and exclusive content delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-slate-500 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}