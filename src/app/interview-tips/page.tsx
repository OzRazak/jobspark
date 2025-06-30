'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Clock, CheckCircle, Star, ArrowRight, Play, Pause, RotateCcw, Trophy, Target, MessageSquare, Heart, Lightbulb, Users, Zap, Award } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const InterviewTipsPage = () => {
  const [activePhase, setActivePhase] = useState('before');
  const [completedTips, setCompletedTips] = useState<string[]>([]);
  const [currentScore, setCurrentScore] = useState(0);

  const toggleTipCompletion = (tipId: string) => {
    if (completedTips.includes(tipId)) {
      setCompletedTips(completedTips.filter(id => id !== tipId));
      setCurrentScore(Math.max(0, currentScore - 10));
    } else {
      setCompletedTips([...completedTips, tipId]);
      setCurrentScore(currentScore + 10);
    }
  };

  const phases = {
    before: {
      title: "Before the Interview",
      icon: Target,
      color: "blue",
      description: "Preparation is key to interview success. These tips will help you get ready.",
      tips: [
        {
          id: "research-company",
          title: "Research the Company Thoroughly",
          description: "Understand the company's mission, values, recent news, and culture. Check their website, social media, and recent press releases.",
          actionItems: [
            "Visit the company website and read their About page",
            "Check their LinkedIn company page for recent updates",
            "Look up recent news articles about the company",
            "Understand their products/services and target market",
            "Research the company culture and values"
          ],
          timeRequired: "30-45 minutes",
          difficulty: "Easy",
          impact: "High"
        },
        {
          id: "prepare-questions",
          title: "Prepare Thoughtful Questions",
          description: "Having good questions shows genuine interest and helps you evaluate if the role is right for you.",
          actionItems: [
            "Prepare 5-7 questions about the role and company",
            "Ask about growth opportunities and career development",
            "Inquire about team dynamics and company culture",
            "Ask about challenges the team/company is facing",
            "Avoid questions about salary/benefits in first interview"
          ],
          timeRequired: "20-30 minutes",
          difficulty: "Medium",
          impact: "High"
        },
        {
          id: "practice-common-questions",
          title: "Practice Common Interview Questions",
          description: "Rehearse your answers to common questions, especially behavioral ones using the STAR method.",
          actionItems: [
            "Practice 'Tell me about yourself' in 2-3 minutes",
            "Prepare STAR examples for behavioral questions",
            "Practice explaining your strengths and weaknesses",
            "Rehearse why you want this specific role",
            "Practice with JobSpark's AI Interview Coach"
          ],
          timeRequired: "45-60 minutes",
          difficulty: "Medium",
          impact: "Very High"
        },
        {
          id: "plan-logistics",
          title: "Plan Your Interview Logistics",
          description: "Ensure you know exactly where you're going and have everything you need.",
          actionItems: [
            "Confirm interview time, date, and location",
            "Plan your route and travel time (add 15 minutes buffer)",
            "Test video call setup if it's a virtual interview",
            "Prepare multiple copies of your CV",
            "Choose and prepare your interview outfit"
          ],
          timeRequired: "15-20 minutes",
          difficulty: "Easy",
          impact: "Medium"
        }
      ]
    },
    during: {
      title: "During the Interview",
      icon: MessageSquare,
      color: "green",
      description: "Make a great impression with these strategies for the interview itself.",
      tips: [
        {
          id: "first-impressions",
          title: "Make a Strong First Impression",
          description: "The first few minutes set the tone for the entire interview.",
          actionItems: [
            "Arrive 10-15 minutes early",
            "Greet everyone you meet professionally",
            "Offer a firm handshake and maintain eye contact",
            "Smile genuinely and show enthusiasm",
            "Turn off your phone completely"
          ],
          timeRequired: "Ongoing",
          difficulty: "Easy",
          impact: "High"
        },
        {
          id: "body-language",
          title: "Use Positive Body Language",
          description: "Non-verbal communication is just as important as what you say.",
          actionItems: [
            "Maintain good posture throughout the interview",
            "Make appropriate eye contact (70-80% of the time)",
            "Use open gestures and avoid crossing arms",
            "Nod to show you're listening and engaged",
            "Mirror the interviewer's energy level appropriately"
          ],
          timeRequired: "Ongoing",
          difficulty: "Medium",
          impact: "High"
        },
        {
          id: "answer-effectively",
          title: "Answer Questions Effectively",
          description: "Structure your answers clearly and provide specific examples.",
          actionItems: [
            "Use the STAR method for behavioral questions",
            "Be specific and provide concrete examples",
            "Stay focused and avoid rambling",
            "If you don't know something, be honest",
            "Connect your answers back to the role requirements"
          ],
          timeRequired: "Ongoing",
          difficulty: "Hard",
          impact: "Very High"
        },
        {
          id: "show-ubuntu",
          title: "Demonstrate Ubuntu and Cultural Fit",
          description: "Show how you embody Ubuntu principles and fit with South African workplace culture.",
          actionItems: [
            "Share examples of teamwork and collaboration",
            "Demonstrate respect for diversity and inclusion",
            "Show how you've helped others succeed",
            "Discuss community involvement or social responsibility",
            "Emphasize collective success over individual achievement"
          ],
          timeRequired: "Ongoing",
          difficulty: "Medium",
          impact: "High"
        }
      ]
    },
    after: {
      title: "After the Interview",
      icon: Heart,
      color: "orange",
      description: "Follow up professionally and learn from the experience.",
      tips: [
        {
          id: "send-thank-you",
          title: "Send a Thank You Email",
          description: "A thoughtful thank you email reinforces your interest and professionalism.",
          actionItems: [
            "Send within 24 hours of the interview",
            "Thank each person you interviewed with",
            "Mention specific topics you discussed",
            "Reiterate your interest in the role",
            "Include any additional information you forgot to mention"
          ],
          timeRequired: "10-15 minutes",
          difficulty: "Easy",
          impact: "Medium"
        },
        {
          id: "reflect-improve",
          title: "Reflect and Improve",
          description: "Use each interview as a learning opportunity to improve for next time.",
          actionItems: [
            "Write down what went well and what could improve",
            "Note any questions you struggled with",
            "Identify areas for additional preparation",
            "Practice weak areas with JobSpark's AI Coach",
            "Update your preparation materials based on learnings"
          ],
          timeRequired: "15-20 minutes",
          difficulty: "Easy",
          impact: "High"
        },
        {
          id: "follow-up-appropriately",
          title: "Follow Up Appropriately",
          description: "Stay engaged without being pushy while waiting for a response.",
          actionItems: [
            "Wait for the timeline they provided before following up",
            "Send a brief, polite follow-up if you haven't heard back",
            "Continue your job search while waiting",
            "Be patient - hiring processes can take time",
            "Maintain professionalism regardless of the outcome"
          ],
          timeRequired: "5-10 minutes",
          difficulty: "Easy",
          impact: "Medium"
        }
      ]
    }
  };

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: "Expert", color: "text-green-600", bg: "bg-green-100" };
    if (score >= 60) return { level: "Advanced", color: "text-blue-600", bg: "bg-blue-100" };
    if (score >= 40) return { level: "Intermediate", color: "text-orange-600", bg: "bg-orange-100" };
    return { level: "Beginner", color: "text-slate-600", bg: "bg-slate-100" };
  };

  const scoreLevel = getScoreLevel(currentScore);
  const maxScore = Object.values(phases).reduce((total, phase) => total + phase.tips.length * 10, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <Lightbulb className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Master Your Interview Skills
          </h1>
          <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Interactive tips and strategies to help you succeed in every phase of the interview process, 
            tailored for the South African job market.
          </p>
          
          {/* Gamified Progress */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Interview Readiness</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${scoreLevel.bg} ${scoreLevel.color}`}>
                {scoreLevel.level}
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 mb-2">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${(currentScore / maxScore) * 100}%` }}
              ></div>
            </div>
            <div className="text-sm text-green-100">
              {currentScore} / {maxScore} points • {completedTips.length} tips completed
            </div>
          </div>
        </div>
      </section>

      {/* Phase Navigation */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {Object.entries(phases).map(([key, phase]) => {
              const Icon = phase.icon;
              const isActive = activePhase === key;
              const phaseCompletedTips = completedTips.filter(tipId => 
                phase.tips.some(tip => tip.id === tipId)
              ).length;
              
              return (
                <button
                  key={key}
                  onClick={() => setActivePhase(key)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                    isActive 
                      ? `bg-${phase.color}-600 text-white shadow-lg` 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{phase.title}</span>
                  <div className={`px-2 py-1 rounded-full text-xs ${
                    isActive ? 'bg-white/20' : 'bg-slate-200'
                  }`}>
                    {phaseCompletedTips}/{phase.tips.length}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {phases[activePhase as keyof typeof phases].title}
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  {phases[activePhase as keyof typeof phases].description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {phases[activePhase as keyof typeof phases].tips.map((tip, index) => {
                  const isCompleted = completedTips.includes(tip.id);
                  
                  return (
                    <motion.div
                      key={tip.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all ${
                        isCompleted 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{tip.title}</h3>
                          <p className="text-slate-600 mb-4">{tip.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                              <Clock className="w-3 h-3 inline mr-1" />
                              {tip.timeRequired}
                            </span>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              tip.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                              tip.difficulty === 'Medium' ? 'bg-orange-100 text-orange-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {tip.difficulty}
                            </span>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              tip.impact === 'Very High' ? 'bg-purple-100 text-purple-800' :
                              tip.impact === 'High' ? 'bg-blue-100 text-blue-800' :
                              'bg-slate-100 text-slate-800'
                            }`}>
                              {tip.impact} Impact
                            </span>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => toggleTipCompletion(tip.id)}
                          className={`ml-4 p-3 rounded-full transition-all ${
                            isCompleted 
                              ? 'bg-green-500 text-white' 
                              : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                          }`}
                        >
                          <CheckCircle className="w-6 h-6" />
                        </button>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-900 mb-3">Action Items:</h4>
                        {tip.actionItems.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              isCompleted ? 'bg-green-500' : 'bg-slate-300'
                            }`} />
                            <span className={`text-sm ${
                              isCompleted ? 'text-green-700' : 'text-slate-600'
                            }`}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Practice CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <Trophy className="w-12 h-12" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Ready to Practice Your Interview Skills?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Put these tips into action with JobSpark's AI Interview Coach. 
            Practice with questions tailored to South African employers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.jobspark.co.za/auth" 
              className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Practicing Now
            </a>
            <a 
              href="/features" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All Features
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InterviewTipsPage;