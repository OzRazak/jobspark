import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, Tag, Bookmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ShareButton } from '@/components/ui/ShareButton';

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 'ai-revolution-south-african-job-market',
    title: 'How AI is Revolutionising the South African Job Market in 2025',
    excerpt: 'Discover how artificial intelligence is transforming recruitment, creating new opportunities, and what job seekers need to know to stay competitive in the evolving landscape.',
    content: `
      <p>The South African job market is experiencing a seismic shift as artificial intelligence (AI) transforms how companies recruit, evaluate, and hire talent. With youth unemployment at a staggering 32.9% according to <a href="https://www.statssa.gov.za" target="_blank" rel="noopener noreferrer">Statistics South Africa</a>, understanding these changes isn't just beneficial—it's essential for career survival.</p>

      <h2>The Current State of AI in South African Recruitment</h2>
      <p>Major South African companies like <a href="https://www.discovery.co.za" target="_blank" rel="noopener noreferrer">Discovery</a>, <a href="https://www.standardbank.co.za" target="_blank" rel="noopener noreferrer">Standard Bank</a>, and <a href="https://www.takealot.com" target="_blank" rel="noopener noreferrer">Takealot</a> are already implementing AI-powered recruitment tools. These systems can screen thousands of CVs in minutes, conduct initial video interviews, and even predict candidate success rates.</p>

      <h3>Key AI Technologies Reshaping Recruitment:</h3>
      <ul>
        <li><strong>Applicant Tracking Systems (ATS):</strong> 78% of large South African companies now use ATS with AI capabilities</li>
        <li><strong>Video Interview Analysis:</strong> AI analyses facial expressions, speech patterns, and word choice</li>
        <li><strong>Predictive Analytics:</strong> Algorithms predict job performance based on historical data</li>
        <li><strong>Chatbot Screening:</strong> Initial candidate interactions handled by AI assistants</li>
      </ul>

      <h2>The Opportunity for South African Job Seekers</h2>
      <p>While AI might seem intimidating, it actually levels the playing field. According to research by the <a href="https://www.wits.ac.za" target="_blank" rel="noopener noreferrer">University of the Witwatersrand</a>, AI-driven recruitment can reduce unconscious bias and focus purely on skills and qualifications.</p>

      <h3>How to Leverage AI in Your Job Search:</h3>
      <ol>
        <li><strong>Optimise Your CV for ATS:</strong> Use relevant keywords from job descriptions</li>
        <li><strong>Practice with AI Interview Tools:</strong> Platforms like JobSpark help you prepare for AI-analysed interviews</li>
        <li><strong>Develop AI-Complementary Skills:</strong> Focus on creativity, emotional intelligence, and complex problem-solving</li>
        <li><strong>Stay Updated:</strong> Follow AI trends in your industry</li>
      </ol>

      <h2>The Skills Gap Challenge</h2>
      <p>The <a href="https://www.skillsbank.co.za" target="_blank" rel="noopener noreferrer">Skills Development Bank</a> reports that 65% of South African employers struggle to find candidates with the right digital skills. This presents both a challenge and an opportunity.</p>

      <h3>Most In-Demand AI-Related Skills in South Africa:</h3>
      <ul>
        <li>Data Analysis and Interpretation</li>
        <li>Digital Marketing and Social Media Management</li>
        <li>Customer Experience Design</li>
        <li>Process Automation Understanding</li>
        <li>AI Tool Proficiency (ChatGPT, Copilot, etc.)</li>
      </ul>

      <h2>Preparing for the AI-Driven Future</h2>
      <p>Success in the AI era requires a combination of technical awareness and uniquely human skills. The <a href="https://www.weforum.org" target="_blank" rel="noopener noreferrer">World Economic Forum</a> predicts that by 2027, 50% of all employees will need reskilling.</p>

      <h3>Action Steps for South African Job Seekers:</h3>
      <ol>
        <li><strong>Embrace Continuous Learning:</strong> Use platforms like <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">Coursera</a> and <a href="https://www.edx.org" target="_blank" rel="noopener noreferrer">edX</a> for AI-related courses</li>
        <li><strong>Build a Digital Portfolio:</strong> Showcase your work online through LinkedIn and personal websites</li>
        <li><strong>Network Strategically:</strong> Join AI and tech communities in South Africa</li>
        <li><strong>Practice AI-Powered Interview Techniques:</strong> Use tools like JobSpark to prepare for modern recruitment processes</li>
      </ol>

      <h2>The Bottom Line</h2>
      <p>AI isn't replacing human workers—it's changing how we work and how we're hired. South African job seekers who understand and adapt to these changes will have a significant advantage in the competitive job market. The key is to start preparing now, not when the change has already happened.</p>

      <p>Remember, every challenge presents an opportunity. With 32.9% youth unemployment, those who master AI-enhanced job searching will stand out from the crowd and significantly improve their chances of landing their dream job.</p>
    `,
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
    id: 'mastering-ubuntu-philosophy-interviews',
    title: 'Mastering the Ubuntu Philosophy in South African Job Interviews',
    excerpt: 'Learn how to authentically incorporate Ubuntu principles into your interview responses and why this uniquely South African concept gives you a competitive edge.',
    content: `
      <p>In the South African job market, understanding and articulating the Ubuntu philosophy can set you apart from other candidates. Ubuntu—"I am because we are"—isn't just a cultural concept; it's a powerful framework that resonates deeply with South African employers and reflects the collaborative spirit essential in modern workplaces.</p>

      <h2>What is Ubuntu in the Professional Context?</h2>
      <p>Ubuntu, derived from the Nguni phrase "umuntu ngumuntu ngabantu," emphasises interconnectedness, empathy, and collective responsibility. In professional settings, this translates to teamwork, inclusive leadership, and community-focused problem-solving.</p>

      <p>According to research by the <a href="https://www.uct.ac.za" target="_blank" rel="noopener noreferrer">University of Cape Town's Graduate School of Business</a>, 89% of South African executives consider Ubuntu principles essential for effective leadership.</p>

      <h2>Why Ubuntu Matters to South African Employers</h2>
      <p>South African companies, from <a href="https://www.sasol.com" target="_blank" rel="noopener noreferrer">Sasol</a> to <a href="https://www.shoprite.co.za" target="_blank" rel="noopener noreferrer">Shoprite</a>, increasingly value candidates who can navigate diverse teams and build inclusive workplace cultures. The <a href="https://www.beecommission.co.za" target="_blank" rel="noopener noreferrer">B-BBEE Commission</a> emphasises that transformation isn't just about numbers—it's about creating genuinely inclusive environments.</p>

      <h3>Key Ubuntu Principles Employers Value:</h3>
      <ul>
        <li><strong>Collective Problem-Solving:</strong> Approaching challenges as a team rather than individually</li>
        <li><strong>Empathetic Leadership:</strong> Understanding and responding to team members' needs</li>
        <li><strong>Inclusive Decision-Making:</strong> Ensuring all voices are heard and valued</li>
        <li><strong>Community Responsibility:</strong> Considering the broader impact of business decisions</li>
        <li><strong>Conflict Resolution:</strong> Using dialogue and understanding to resolve disputes</li>
      </ul>

      <h2>How to Demonstrate Ubuntu in Interview Responses</h2>
      <p>When answering behavioural interview questions, frame your experiences using Ubuntu principles. Here's how to structure your responses:</p>

      <h3>The UBUNTU Framework for Interview Responses:</h3>
      <ul>
        <li><strong>U</strong>nderstand the situation and stakeholders involved</li>
        <li><strong>B</strong>uild consensus and gather diverse perspectives</li>
        <li><strong>U</strong>nite the team around common goals</li>
        <li><strong>N</strong>avigate challenges through collaboration</li>
        <li><strong>T</strong>ransform outcomes through collective effort</li>
        <li><strong>U</strong>plift others and share success</li>
      </ul>

      <h2>Common Interview Questions and Ubuntu-Inspired Answers</h2>

      <h3>Question: "Tell me about a time you led a difficult project."</h3>
      <p><strong>Ubuntu-Inspired Response Structure:</strong></p>
      <blockquote>
        "I believe in the principle that 'I am because we are,' so when I was tasked with leading our quarterly sales project, I started by understanding each team member's strengths and challenges. Rather than dictating tasks, I facilitated discussions where everyone could contribute ideas. When we hit obstacles, we addressed them collectively, ensuring no one felt isolated. The project succeeded because we succeeded together, and I made sure to recognise everyone's contributions in our final presentation."
      </blockquote>

      <h3>Question: "How do you handle conflict in the workplace?"</h3>
      <p><strong>Ubuntu-Inspired Response:</strong></p>
      <blockquote>
        "Ubuntu teaches us that conflict often arises from misunderstanding rather than malice. When two team members disagreed about our marketing strategy, I brought them together for an open dialogue. I encouraged each person to share their perspective while the other listened actively. We discovered their goals were actually aligned—they just had different approaches. By finding common ground and combining their ideas, we created a stronger strategy than either could have developed alone."
      </blockquote>

      <h2>Industry-Specific Ubuntu Applications</h2>

      <h3>Financial Services (Banks, Insurance)</h3>
      <p>Emphasise how Ubuntu principles help build trust with clients and create inclusive financial solutions. Companies like <a href="https://www.oldmutual.co.za" target="_blank" rel="noopener noreferrer">Old Mutual</a> and <a href="https://www.fnb.co.za" target="_blank" rel="noopener noreferrer">FNB</a> value advisors who understand community needs.</p>

      <h3>Technology Sector</h3>
      <p>Highlight how Ubuntu fosters innovation through diverse perspectives and collaborative problem-solving. Tech companies like <a href="https://www.naspers.com" target="_blank" rel="noopener noreferrer">Naspers</a> seek developers who can work effectively in multicultural teams.</p>

      <h3>Healthcare</h3>
      <p>Demonstrate how Ubuntu principles enhance patient care and team collaboration. Healthcare providers value professionals who understand the holistic nature of healing and community health.</p>

      <h2>Avoiding Ubuntu Tokenism</h2>
      <p>It's crucial to authentically embody Ubuntu rather than simply mentioning it. Employers can quickly identify when candidates are using cultural concepts superficially.</p>

      <h3>Authentic Ubuntu vs. Tokenism:</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f8f9fa;">
          <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">Authentic Ubuntu</th>
          <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">Tokenism</th>
        </tr>
        <tr>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Specific examples of collaborative behaviour</td>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Vague references to "working together"</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="border: 1px solid #dee2e6; padding: 12px;">Demonstrating empathy and understanding</td>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Simply stating "I believe in Ubuntu"</td>
        </tr>
        <tr>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Showing how you've uplifted others</td>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Focussing only on personal achievements</td>
        </tr>
      </table>

      <h2>Preparing Ubuntu-Centred Interview Responses</h2>
      <p>Practice articulating your experiences through an Ubuntu lens. Use the STAR method (Situation, Task, Action, Result) but ensure your actions demonstrate Ubuntu principles.</p>

      <h3>Practice Exercise:</h3>
      <ol>
        <li>Identify 3-5 professional experiences where you worked with others</li>
        <li>Reframe each experience to highlight Ubuntu principles</li>
        <li>Practice telling these stories naturally and authentically</li>
        <li>Prepare for follow-up questions about your collaborative approach</li>
      </ol>

      <h2>The Competitive Advantage</h2>
      <p>In a job market where technical skills can be taught, Ubuntu represents something deeper—a worldview that aligns with South Africa's transformation goals and modern workplace values. Candidates who can authentically demonstrate Ubuntu principles show they understand not just how to do the job, but how to do it in a way that builds stronger, more inclusive organisations.</p>

      <p>Remember, Ubuntu isn't just about getting the job—it's about succeeding in the job and contributing to a workplace culture that reflects the best of South African values. When you embody Ubuntu in your interview, you're not just answering questions; you're demonstrating the kind of leader and colleague you'll be.</p>
    `,
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
    content: `
      <p>South Africa's youth unemployment crisis is one of the most pressing challenges of our time. At 32.9%, according to <a href="https://www.statssa.gov.za" target="_blank" rel="noopener noreferrer">Statistics South Africa</a>, it's among the highest globally. However, within this crisis lies an unprecedented opportunity: the digital economy is creating new pathways to employment that didn't exist even five years ago.</p>

      <h2>The Digital Divide: Challenge and Opportunity</h2>
      <p>The <a href="https://www.icasa.org.za" target="_blank" rel="noopener noreferrer">Independent Communications Authority of South Africa (ICASA)</a> reports that while 68% of South Africans have access to the internet, only 22% have the digital skills needed for modern employment. This gap represents both the problem and the solution.</p>

      <h3>The Current State of Digital Employment in South Africa:</h3>
      <ul>
        <li>The digital economy contributes R232 billion to South Africa's GDP</li>
        <li>Digital jobs pay 40% more than traditional roles on average</li>
        <li>Remote work opportunities have increased by 300% since 2020</li>
        <li>85% of new job postings require some level of digital literacy</li>
      </ul>

      <h2>Most In-Demand Digital Skills in South Africa</h2>
      <p>Based on analysis of job postings from <a href="https://www.careers24.com" target="_blank" rel="noopener noreferrer">Careers24</a>, <a href="https://www.pnet.co.za" target="_blank" rel="noopener noreferrer">PNet</a>, and <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>, these digital skills are most sought after by South African employers:</p>

      <h3>1. Data Analysis and Visualisation</h3>
      <p><strong>Why it matters:</strong> Every business needs to understand their data to make informed decisions.</p>
      <p><strong>Tools to learn:</strong> Excel (advanced), Google Analytics, Power BI, Tableau</p>
      <p><strong>Salary range:</strong> R25,000 - R45,000 per month</p>
      <p><strong>Free learning resources:</strong></p>
      <ul>
        <li><a href="https://www.coursera.org/learn/excel-basics-data-analysis-ibm" target="_blank" rel="noopener noreferrer">IBM Data Analysis with Excel (Coursera)</a></li>
        <li><a href="https://analytics.google.com/analytics/academy/" target="_blank" rel="noopener noreferrer">Google Analytics Academy</a></li>
        <li><a href="https://powerbi.microsoft.com/en-us/learning/" target="_blank" rel="noopener noreferrer">Microsoft Power BI Learning Path</a></li>
      </ul>

      <h3>2. Digital Marketing</h3>
      <p><strong>Why it matters:</strong> Every business needs an online presence, especially post-COVID.</p>
      <p><strong>Skills to develop:</strong> Social media management, SEO, content creation, email marketing</p>
      <p><strong>Salary range:</strong> R20,000 - R40,000 per month</p>
      <p><strong>Free learning resources:</strong></p>
      <ul>
        <li><a href="https://skillshop.withgoogle.com/" target="_blank" rel="noopener noreferrer">Google Digital Marketing Courses</a></li>
        <li><a href="https://www.facebook.com/business/learn" target="_blank" rel="noopener noreferrer">Facebook Blueprint</a></li>
        <li><a href="https://academy.hubspot.com/" target="_blank" rel="noopener noreferrer">HubSpot Academy</a></li>
      </ul>

      <h3>3. Customer Experience (CX) Design</h3>
      <p><strong>Why it matters:</strong> Companies are competing on customer experience more than ever.</p>
      <p><strong>Skills to develop:</strong> User research, journey mapping, service design, basic UX/UI</p>
      <p><strong>Salary range:</strong> R30,000 - R55,000 per month</p>
      <p><strong>Free learning resources:</strong></p>
      <ul>
        <li><a href="https://www.coursera.org/learn/user-experience-research-design" target="_blank" rel="noopener noreferrer">Google UX Design Certificate (Coursera)</a></li>
        <li><a href="https://www.interaction-design.org/" target="_blank" rel="noopener noreferrer">Interaction Design Foundation</a></li>
      </ul>

      <h3>4. E-commerce and Online Business Management</h3>
      <p><strong>Why it matters:</strong> Online retail grew 66% in South Africa during 2020-2022.</p>
      <p><strong>Skills to develop:</strong> Online store management, inventory systems, payment processing, logistics</p>
      <p><strong>Salary range:</strong> R22,000 - R42,000 per month</p>

      <h3>5. Basic Programming and Automation</h3>
      <p><strong>Why it matters:</strong> Automation is transforming every industry.</p>
      <p><strong>Skills to develop:</strong> Python basics, Excel VBA, process automation, no-code tools</p>
      <p><strong>Salary range:</strong> R35,000 - R65,000 per month</p>
      <p><strong>Free learning resources:</strong></p>
      <ul>
        <li><a href="https://www.python.org/about/gettingstarted/" target="_blank" rel="noopener noreferrer">Python.org Beginner's Guide</a></li>
        <li><a href="https://www.codecademy.com/learn/learn-python-3" target="_blank" rel="noopener noreferrer">Codecademy Python Course</a></li>
        <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></li>
      </ul>

      <h2>Success Stories: South Africans Who Transformed Their Careers</h2>

      <h3>Case Study 1: Nomsa from Soweto</h3>
      <p>Nomsa was unemployed for 18 months after completing her BCom degree. She spent 6 months learning digital marketing through free online courses and practising on her own social media accounts. She's now a Digital Marketing Specialist at a Cape Town agency, earning R32,000 per month and working remotely.</p>

      <h3>Case Study 2: Sipho from Durban</h3>
      <p>Sipho worked in retail for 5 years but wanted better opportunities. He learned data analysis using free Excel and Power BI courses during evenings and weekends. After 8 months, he landed a Business Analyst role at a logistics company, doubling his previous salary.</p>

      <h2>The Learning Path: From Zero to Employed</h2>

      <h3>Phase 1: Foundation (Months 1-2)</h3>
      <ul>
        <li>Improve basic computer literacy</li>
        <li>Learn advanced Excel skills</li>
        <li>Understand digital communication tools (Slack, Teams, Zoom)</li>
        <li>Create professional online profiles (LinkedIn, email signature)</li>
      </ul>

      <h3>Phase 2: Specialisation (Months 3-6)</h3>
      <ul>
        <li>Choose one primary skill area based on your interests and market demand</li>
        <li>Complete relevant online courses and certifications</li>
        <li>Start building a portfolio of work</li>
        <li>Join relevant online communities and forums</li>
      </ul>

      <h3>Phase 3: Application (Months 6-8)</h3>
      <ul>
        <li>Apply skills to real projects (volunteer work, personal projects)</li>
        <li>Network with professionals in your chosen field</li>
        <li>Start applying for entry-level positions</li>
        <li>Consider freelance opportunities to build experience</li>
      </ul>

      <h2>Overcoming Common Barriers</h2>

      <h3>Barrier 1: Limited Internet Access</h3>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Use public WiFi at libraries, malls, and community centres</li>
        <li>Download course materials when you have access for offline study</li>
        <li>Partner with friends to share data costs</li>
        <li>Look for community programmes offering free internet access</li>
      </ul>

      <h3>Barrier 2: No Computer Access</h3>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Use smartphones for many learning activities</li>
        <li>Access computers at libraries and internet cafes</li>
        <li>Join study groups to share resources</li>
        <li>Look for organisations providing device access (like JobSpark's future programmes)</li>
      </ul>

      <h3>Barrier 3: Time Constraints</h3>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Study during commute using mobile apps</li>
        <li>Dedicate 30 minutes daily rather than trying to find large blocks of time</li>
        <li>Use weekends for practical projects</li>
        <li>Join online study groups for accountability</li>
      </ul>

      <h2>The Multiplier Effect</h2>
      <p>Digital skills don't just help you get a job—they help you create opportunities for others. Many successful digital professionals become freelancers, start agencies, or create online businesses that employ others.</p>

      <h3>Ways Digital Skills Create Broader Impact:</h3>
      <ul>
        <li><strong>Freelancing:</strong> Offer services to multiple clients</li>
        <li><strong>Teaching:</strong> Share your skills with others in your community</li>
        <li><strong>Entrepreneurship:</strong> Start digital-first businesses</li>
        <li><strong>Community Development:</strong> Help local businesses go digital</li>
      </ul>

      <h2>Government and Private Sector Support</h2>
      <p>Several initiatives support digital skills development in South Africa:</p>

      <ul>
        <li><strong><a href="https://www.skillsbank.co.za" target="_blank" rel="noopener noreferrer">Skills Development Bank</a>:</strong> Government-funded training programmes</li>
        <li><strong><a href="https://www.capaciti.org.za" target="_blank" rel="noopener noreferrer">Capaciti</a>:</strong> Tech skills development for youth</li>
        <li><strong><a href="https://www.digitalacademy.co.za" target="_blank" rel="noopener noreferrer">Digital Academy</a>:</strong> Online learning platform</li>
        <li><strong><a href="https://www.wethinkcode.co.za" target="_blank" rel="noopener noreferrer">WeThinkCode</a>:</strong> Free coding education</li>
      </ul>

      <h2>Taking Action Today</h2>
      <p>The journey from unemployment to digital employment isn't easy, but it's absolutely possible. The key is to start today, even if you can only dedicate 30 minutes to learning.</p>

      <h3>Your 30-Day Challenge:</h3>
      <ol>
        <li><strong>Week 1:</strong> Choose one digital skill to focus on</li>
        <li><strong>Week 2:</strong> Complete your first online course or tutorial</li>
        <li><strong>Week 3:</strong> Create your first project or portfolio piece</li>
        <li><strong>Week 4:</strong> Share your work online and connect with others in the field</li>
      </ol>

      <p>Remember, every expert was once a beginner. The digital economy doesn't care about your background—it cares about your skills and your willingness to learn. In a country where traditional employment opportunities are limited, digital skills offer a pathway to not just employment, but economic empowerment.</p>

      <p>The question isn't whether you can afford to learn digital skills—it's whether you can afford not to. Your future self will thank you for starting today.</p>
    `,
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

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === params.slug);
  
  if (!post) {
    return {
      title: 'Article Not Found - JobSpark Blog',
    };
  }

  return {
    title: `${post.title} - JobSpark Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find(p => p.id === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

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
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
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
            <ShareButton 
              url={typeof window !== 'undefined' ? window.location.href : ''}
              title={post.title}
              description={post.excerpt}
            />
            <button className="flex items-center space-x-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colours">
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
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-8 [&>h2]:mb-4
                       [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-800 [&>h3]:mt-6 [&>h3]:mb-3
                       [&>p]:text-slate-700 [&>p]:leading-relaxed [&>p]:mb-4
                       [&>ul]:mb-6 [&>ol]:mb-6
                       [&>li]:text-slate-700 [&>li]:mb-2
                       [&>blockquote]:border-l-4 [&>blockquote]:border-green-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:bg-green-50 [&>blockquote]:p-4 [&>blockquote]:rounded-r-lg [&>blockquote]:my-6
                       [&>a]:text-green-600 [&>a]:hover:text-green-700 [&>a]:underline
                       [&>strong]:font-semibold [&>strong]:text-slate-900"
          />
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
                className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full hover:bg-slate-200 transition-colours"
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
                      className="hover:text-green-600 transition-colours"
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

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}