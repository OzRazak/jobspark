import { Metadata } from 'next';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Tag, Target, Zap, Users, Globe, Star, TrendingUp, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Where JobSpark Found Its Spark: Analyzing the Global Career Tools Landscape - JobSpark Blog',
  description: 'Discover how we identified the perfect opportunity gap in the career development market and why South Africa needed a locally-built, integrated solution.',
  keywords: 'competitive analysis, market research, career tools, South Africa, platform strategy, innovation, job search tools',
};

export default function JobSparkInspirationPost() {
  const post = {
    title: 'Where JobSpark Found Its Spark: Analyzing the Global Career Tools Landscape',
    excerpt: 'Discover how we identified the perfect opportunity gap in the career development market and why South Africa needed a locally-built, integrated solution.',
    author: 'Theodore Egling',
    authorBio: 'Co-Founder & Technical Director at Auxo Digital',
    date: '2025-01-13',
    readTime: '10 min read',
    category: 'Market Analysis',
    tags: ['Competitive Analysis', 'Market Research', 'Career Tools', 'South Africa', 'Platform Strategy', 'Innovation'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      id: 'ai-revolution-south-african-job-market',
      title: 'How AI is Revolutionizing the South African Job Market in 2025',
      excerpt: 'Discover how artificial intelligence is transforming recruitment and creating new opportunities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'AI & Technology',
      readTime: '8 min read'
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
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
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
            When we set out to build JobSpark, we didn't start with a blank canvas. We began with a comprehensive analysis of the global career tools landscape, studying what worked, what didn't, and most importantly—what was missing. What we discovered was a perfect storm of opportunity that led us to create something truly unique for the South African market.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Global AI-Powered Resume Giants</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Our research began with the sophisticated, well-funded platforms that dominate the international market. These are your most significant feature-for-feature competitors, and understanding their strengths and limitations was crucial to our strategy.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Teal</h3>
              </div>
              <p className="text-slate-600 mb-4">
                A very popular "career command center" that helps users track job applications and has a strong AI-powered resume builder that matches keywords from job descriptions. Features a Chrome extension for easy integration.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Strength:</strong> Comprehensive job tracking<br />
                <strong>Gap:</strong> No interview practice, US-focused
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Kickresume / Zety / Rezi</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Major players focused on building professional resumes and cover letters quickly using templates and AI-powered text generation. Excellent at what they do but are broad, global products.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Strength:</strong> Professional templates<br />
                <strong>Gap:</strong> No local context, expensive for SA market
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">ChatGPT / Google Bard</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Many savvy job seekers now use these general-purpose AI models directly, pasting career history and job descriptions to generate CVs or cover letters. This is a "DIY" approach requiring significant user skill.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Strength:</strong> Powerful AI capabilities<br />
                <strong>Gap:</strong> Requires expertise, no guidance
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">LinkedIn</h3>
              </div>
              <p className="text-slate-600 mb-4">
                The default professional network with job listings and profiles that act as CVs. However, it lacks sophisticated AI-powered tools to help write profiles or tailor applications.
              </p>
              <div className="text-sm text-slate-500">
                <strong>Strength:</strong> Network effects, job listings<br />
                <strong>Gap:</strong> Limited AI assistance, premium pricing
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Local South African Job Boards</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            These are the incumbent platforms in South Africa. They own the audience but are generally slow to innovate, creating a significant opportunity for disruption.
          </p>

          <div className="bg-slate-50 p-6 rounded-xl my-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">PNet / Careers24 / CareerJunction</h3>
            <p className="text-slate-700 mb-4">
              These are the three largest job boards in South Africa. Their primary function is to connect recruiters with candidates. While they have basic CV-upload and profile-building features, these are typically simple forms and templates, not advanced generative AI tools.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">What They Do Well:</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Large employer networks</li>
                  <li>• Established brand recognition</li>
                  <li>• Local market knowledge</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Where They Fall Short:</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• No AI-powered tools</li>
                  <li>• Focus on recruiters, not job seekers</li>
                  <li>• No interview preparation</li>
                  <li>• Static, outdated user experience</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Niche AI Interview Coaches</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            This is an emerging category of tools that focuses specifically on interview preparation—an area where we saw tremendous potential for innovation.
          </p>

          <div className="space-y-6 my-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg mt-1">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Interview Warmup (Google)</h4>
                <p className="text-slate-700 mb-2">
                  A free tool from Google that lets you practice answering common interview questions. An AI analyzes your answers and provides insights on keywords used and talking points. It is text-based or voice-to-text.
                </p>
                <div className="text-sm text-slate-500">
                  <strong>Limitation:</strong> Text-based, no voice feedback, generic questions
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-green-100 rounded-lg mt-1">
                <Star className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Yoodli</h4>
                <p className="text-slate-700 mb-2">
                  A very powerful AI speech coach designed for improving communication skills in general (presentations, meetings) but widely used for interview prep. It analyzes video of you speaking and gives feedback on pacing, filler words, body language, etc.
                </p>
                <div className="text-sm text-slate-500">
                  <strong>Limitation:</strong> Video-based (intimidating), expensive, not interview-specific
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Opportunity Gap: How JobSpark Wins</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            The market is full of point solutions, but no one owns the complete, integrated journey for the South African job seeker. This is our critical advantage and the insight that sparked JobSpark's creation.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl my-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Our Biggest Competitive Advantages</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-100 rounded-lg mt-1">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">The All-in-One Integrated Workflow</h4>
                  <p className="text-slate-700">
                    A user on Kickresume has to download their CV, go to ChatGPT to draft a cover letter, and then go to Interview Warmup to practice. This is a clunky, fragmented process using three different services. JobSpark takes the user seamlessly from (1) building the CV to (2) generating a tailored cover letter to (3) practicing for the interview, all within a single, consistent interface.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg mt-1">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Hyper-Localization and Accessibility</h4>
                  <p className="text-slate-700">
                    The global giants are priced in US dollars, which is a major barrier for the South African youth market. JobSpark can be priced in Rands at an accessible price point. These global tools do not understand the nuances of the local job market, the specific skills that are in demand, or the tone that resonates with South African recruiters.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-100 rounded-lg mt-1">
                  <Zap className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Voice-First AI Coaching</h4>
                  <p className="text-slate-700">
                    Most interview tools are text or video-based. Video can be intimidating and requires a good camera setup and environment. A voice-first coach powered by ElevenLabs is far more accessible. A user can practice anywhere, anytime, just by speaking into their phone. The empathetic, human-like voice feedback is less clinical and more encouraging than on-screen text.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-100 rounded-lg mt-1">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Gamification for Motivation</h4>
                  <p className="text-slate-700">
                    The professional tools (Teal, Zety) are purely utilitarian. They are not "fun" to use. For a young audience facing a demoralizing job search, our proposed gamification features are a killer advantage. The "Readiness Score," achievement badges, and daily streaks keep users engaged and motivated, encouraging them to complete the entire process and build a habit of self-improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Market Validation: The Numbers Don't Lie</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Our competitive analysis wasn't just theoretical—we validated our assumptions with real market data that confirmed the opportunity gap we identified.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">32.9%</div>
              <div className="text-sm text-slate-600 mb-3">Youth unemployment in SA</div>
              <div className="text-xs text-slate-500">vs. 6.1% global average</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">68%</div>
              <div className="text-sm text-slate-600 mb-3">SA smartphone penetration</div>
              <div className="text-xs text-slate-500">vs. 35% computer ownership</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">0</div>
              <div className="text-sm text-slate-600 mb-3">Local AI career platforms</div>
              <div className="text-xs text-slate-500">Before JobSpark</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Learning from the Best, Building for Our Market</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Our competitive analysis taught us valuable lessons about what works globally and what needs to be adapted for the South African context:
          </p>

          <div className="space-y-4 my-8">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-2">From Teal: Application Tracking</h4>
              <p className="text-green-800 text-sm">
                We learned the importance of helping users organize their job search, but adapted it for mobile-first usage patterns common in South Africa.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">From Global Resume Builders: Template Quality</h4>
              <p className="text-blue-800 text-sm">
                We adopted their focus on ATS-friendly formatting but localized templates for South African business culture and expectations.
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-2">From Interview Tools: AI Feedback</h4>
              <p className="text-orange-800 text-sm">
                We took inspiration from their AI analysis capabilities but made it voice-first and culturally aware of South African communication styles.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Strategic Insight</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Our analysis revealed a fundamental truth: the global career tools market had solved individual pieces of the puzzle brilliantly, but no one had created an integrated, locally-relevant solution for emerging markets like South Africa.
          </p>

          <div className="bg-slate-900 text-white p-8 rounded-xl my-10">
            <h3 className="text-xl font-bold mb-4">The JobSpark Thesis</h3>
            <p className="text-slate-300 mb-4">
              "We are not just building another CV builder. We are building an end-to-end career-readiness platform, specifically designed and gamified for the ambitious South African youth."
            </p>
            <p className="text-slate-400 text-sm">
              Our competition is a collection of powerful but disconnected global tools and slow-moving local job boards. By integrating the entire application process into a single, engaging, and affordable platform, we are creating a product that is not only unique but also desperately needed.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Conclusion: Finding Our Spark</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            The inspiration for JobSpark didn't come from a single "eureka" moment—it emerged from methodical analysis of what existed, what was missing, and what was possible. We found our spark in the gap between global sophistication and local relevance, between powerful tools and accessible pricing, between individual features and integrated experiences.
          </p>

          <p className="text-slate-700 leading-relaxed mb-8">
            Today, as we see JobSpark helping thousands of South Africans land their dream jobs, we're reminded that the best innovations often come not from inventing something entirely new, but from combining existing ideas in ways that serve underserved markets. Our competitive analysis didn't just inform our product strategy—it validated our mission to democratize career success for every ambitious South African.
          </p>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl my-12">
            <h3 className="text-2xl font-bold mb-4">The Journey Continues</h3>
            <p className="text-green-100 mb-6">
              Our competitive analysis was just the beginning. As we continue to innovate and expand JobSpark, we remain committed to staying ahead of global trends while serving the unique needs of the South African market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://app.jobspark.co.za/auth" 
                className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
              >
                Experience the Difference
              </a>
              <a 
                href="/about" 
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Meet Our Team
              </a>
            </div>
          </div>

        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-slate-200">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{post.author}</h3>
              <p className="text-slate-600 mb-3">{post.authorBio}</p>
              <p className="text-slate-700 text-sm">
                Theodore brings deep technical expertise and strategic thinking to Auxo Digital. With an MEng in Artificial Intelligence 
                and extensive experience in multidisciplinary software development, he leads the technical vision that makes JobSpark's 
                innovative features possible.
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