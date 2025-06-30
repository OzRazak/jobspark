import { Metadata } from 'next';
import { TrendingDown, Users, TrendingUp, Heart } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export const metadata: Metadata = {
  title: 'Our Target Impact - JobSpark',
  description: 'See the statistics and targets that drive our mission to tackle South Africa\'s unemployment crisis.',
  keywords: 'JobSpark statistics, South Africa unemployment, youth employment, career development impact',
};

export default function StatsPage() {
  const stats = [
    { 
      value: 32.9, 
      suffix: "%", 
      label: "Youth Unemployment in SA", 
      icon: TrendingDown, 
      color: "from-sa-gold-400 to-sa-gold-600",
      description: "The crisis we're targeting"
    },
    { 
      value: 3000000, 
      label: "Targeting Lives to Change", 
      icon: Users, 
      color: "from-green-400 to-green-600",
      description: "Targeting 3M South Africans"
    },
    { 
      value: 89, 
      suffix: "%", 
      label: "Targeting Interview Success Rate", 
      icon: TrendingUp, 
      color: "from-blue-400 to-blue-600",
      description: "Targeting with JobSpark"
    },
    { 
      value: 100, 
      suffix: "%", 
      label: "Free & Open Source", 
      icon: Heart, 
      color: "from-orange-400 to-orange-600",
      description: "Always accessible"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Target Impact on South Africa
          </h1>
          <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            We're not just building a platform – we're targeting one of South Africa's 
            biggest challenges with technology that works for everyone.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative group"
              >
                {/* Background glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm"></div>
                
                <div className="relative text-center bg-white/70 backdrop-blur-md border border-slate-200/80 p-6 lg:p-8 rounded-xl sm:rounded-2xl h-full flex flex-col items-center justify-center shadow-lg">
                  <div className={`p-3 lg:p-4 bg-gradient-to-r ${stat.color} rounded-full mb-4`}>
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>

                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tighter text-slate-900 mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} precision={stat.value < 10 ? 1 : 0} />
                  </div>
                  
                  <div className="text-slate-700 font-semibold text-sm lg:text-base text-center leading-tight mb-2">
                    {stat.label}
                  </div>
                  
                  <div className="text-slate-500 text-xs lg:text-sm text-center leading-tight">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Be Part of the Solution
              </h3>
              <p className="text-slate-600 mb-6">
                Every person who practices with JobSpark is one step closer to employment. 
                Help us reach our target of 3 million South Africans who need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://app.jobspark.co.za/auth"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colours"
                >
                  Start Practising Free
                </a>
                <a 
                  href="/donate"
                  className="px-6 py-3 border border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colours"
                >
                  Support Others
                </a>
                <a 
                  href="/about"
                  className="px-6 py-3 border border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colours"
                >
                  Meet the Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}