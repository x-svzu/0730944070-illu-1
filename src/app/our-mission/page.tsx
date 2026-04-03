"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Sun, 
  Shield, 
  Heart, 
  ArrowRight, 
  Eye,
  Globe,
  Users,
  Target,
  Sparkles,
  Lightbulb
} from "lucide-react";

export default function OurMissionPage() {
  const pillars = [
    {
      icon: Sun,
      title: "Illumination",
      roman: "I",
      description: "We are committed to spreading the light of knowledge throughout the world. Through education, mentorship, and the sharing of ancient wisdom, we help individuals break free from ignorance and reach their full potential. Every person has the capacity for greatness - we simply help them discover it within themselves.",
      initiatives: ["Educational Programs", "Mentorship Networks", "Knowledge Archives", "Wisdom Transmission"]
    },
    {
      icon: Shield,
      title: "Preservation",
      roman: "II",
      description: "For millennia, sacred knowledge has been passed down from generation to generation, protected from those who would misuse it. We continue this sacred trust, preserving ancient texts, rituals, and wisdom while adapting them for the modern era. This knowledge belongs not to us, but to humanity as a whole.",
      initiatives: ["Ancient Archives", "Ritual Preservation", "Sacred Sites", "Oral Traditions"]
    },
    {
      icon: Heart,
      title: "Service",
      roman: "III",
      description: "True enlightenment demands service to others. Our members are expected to give back to their communities and to humanity at large. Through philanthropy, mentorship, and positive influence, we work to create a better world for all. Our charitable contributions exceed $1 billion annually.",
      initiatives: ["Global Philanthropy", "Community Building", "Humanitarian Aid", "Peace Initiatives"]
    },
  ];

  const visionPoints = [
    {
      icon: Lightbulb,
      title: "Universal Access to Knowledge",
      description: "Breaking down barriers to education and wisdom for all seekers, regardless of background or circumstance."
    },
    {
      icon: Target,
      title: "Guided Decision-Making",
      description: "Ensuring that wisdom and reason guide choices at every level of society, from individuals to nations."
    },
    {
      icon: Users,
      title: "United Humanity",
      description: "Fostering collaboration and understanding across cultures, religions, and borders toward common goals."
    },
    {
      icon: Globe,
      title: "Sustainable Progress",
      description: "Creating lasting positive change that benefits both current and future generations of humanity."
    },
  ];

  const impactStats = [
    { value: "$1B+", label: "Annual Philanthropy", icon: Heart },
    { value: "10M+", label: "Lives Impacted", icon: Users },
    { value: "120+", label: "Countries Reached", icon: Globe },
    { value: "500+", label: "Active Programs", icon: Target },
  ];

  const coreValues = [
    { title: "Wisdom", description: "The pursuit of truth through knowledge and understanding" },
    { title: "Integrity", description: "Unwavering commitment to our principles and oaths" },
    { title: "Unity", description: "Strength through the bond of our brotherhood" },
    { title: "Service", description: "Dedication to the betterment of all humanity" },
    { title: "Secrecy", description: "Protection of sacred knowledge and members" },
    { title: "Excellence", description: "Constant striving for perfection in all endeavors" },
  ];

  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section with Parallax */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: "url('/0730944070-illu-1/images/StockCake-Wisdom_In_Consultation-3911469-standard.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#112240] via-[#0D2137]/90 to-[#0A1929]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A1929_70%)]" />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4af37' stroke-width='0.3'%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Cpolygon points='40,0 80,40 40,80 0,40'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">About Us</p>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              Our Sacred Mission
            </h1>
            
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>

            <div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-8 border border-[#d4af37]/30">
              <Eye className="w-10 h-10 text-[#d4af37]" />
            </div>
            <blockquote className="text-xl md:text-2xl text-[#d4af37] font-cinzel italic mb-8 leading-relaxed">
              &ldquo;To illuminate the path for those who seek wisdom, to guide humanity toward its 
              highest potential, and to preserve the sacred knowledge that has been entrusted to us.&rdquo;
            </blockquote>
            <p className="text-[#c0c0c0] text-lg max-w-2xl mx-auto">
              The Illuminati Lodge of New York exists to serve as a bridge between ancient wisdom and 
              modern understanding, guiding seekers toward enlightenment for over two centuries.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">

            {/* Three Pillars of Our Mission */}
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel text-center">
                Three Pillars of Our Mission
              </h2>
              <p className="text-[#c0c0c0] text-lg text-center max-w-3xl mx-auto mb-12">
                Our sacred mission encompasses three fundamental duties that guide every action we take 
                and every decision we make as a brotherhood.
              </p>
              
              <div className="space-y-8">
                {pillars.map((pillar, index) => (
                  <div 
                    key={index} 
                    className="relative overflow-hidden rounded-lg border border-[#d4af37]/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
                    
                    <div className="relative p-8 md:p-10">
                      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                        {/* Icon and Roman Numeral */}
                        <div className="flex flex-col items-center md:items-start gap-4 md:w-48 flex-shrink-0">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/30">
                              <pillar.icon className="w-10 h-10 text-[#d4af37]" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center">
                              <span className="text-[#0A1929] text-xs font-bold font-cinzel">{pillar.roman}</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-semibold text-[#d4af37] font-cinzel text-center md:text-left">
                            {pillar.title}
                          </h3>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <p className="text-[#c0c0c0] text-lg leading-relaxed mb-6">
                            {pillar.description}
                          </p>
                          
                          {/* Initiatives */}
                          <div className="flex flex-wrap gap-3">
                            {pillar.initiatives.map((initiative, idx) => (
                              <span 
                                key={idx}
                                className="px-4 py-2 bg-[#0A1929] border border-[#d4af37]/20 rounded-full text-sm text-[#d4af37]"
                              >
                                {initiative}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Our Vision for the Future */}
            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
                    Our Vision for the Future
                  </h2>
                  <p className="text-[#c0c0c0] text-lg leading-relaxed mb-6">
                    We envision a world where every individual has access to knowledge, where wisdom guides 
                    decision-making at every level of society, and where humanity works together toward 
                    common goals. This vision drives everything we do - from our local community programs 
                    to our global initiatives.
                  </p>
                  <p className="text-[#c0c0c0] text-lg leading-relaxed mb-8">
                    The path to this future is not short, nor is it easy. But with patience, dedication, 
                    and the collective efforts of enlightened individuals across the globe, we believe it 
                    is achievable.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {visionPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                          <point.icon className="w-5 h-5 text-[#d4af37]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#FFFFFF] mb-1">{point.title}</h4>
                          <p className="text-xs text-[#c0c0c0]">{point.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative h-80 lg:h-[500px] rounded-lg overflow-hidden border border-[#d4af37]/20">
                  <Image
                    src="/0730944070-illu-1/images/grand-hall.jpg"
                    alt="Vision of the Future"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[#FFFFFF] font-cinzel text-center text-lg">
                      A Legacy of Enlightenment
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Impact Statistics */}
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel text-center">
                Our Global Impact
              </h2>
              <p className="text-[#c0c0c0] text-lg text-center max-w-3xl mx-auto mb-12">
                Through centuries of dedicated service, our brotherhood has touched countless lives and 
                shaped the course of human history.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {impactStats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-gradient-to-br from-[#0D2137] to-[#112240] border border-[#d4af37]/20 rounded-lg text-center hover:border-[#d4af37]/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">{stat.value}</div>
                    <div className="text-sm text-[#c0c0c0]">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="relative h-64 rounded-lg overflow-hidden border border-[#d4af37]/20">
                <Image
                  src="/0730944070-illu-1/images/global-network.jpg"
                  alt="Global Impact Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent" />
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Core Values */}
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel text-center">
                Core Values That Guide Us
              </h2>
              <p className="text-[#c0c0c0] text-lg text-center max-w-3xl mx-auto mb-12">
                These principles form the foundation of our brotherhood, passed down through generations 
                and upheld by every member.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {coreValues.map((value, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-colors text-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#d4af37] mb-2 font-cinzel">{value.title}</h3>
                    <p className="text-sm text-[#c0c0c0]">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Mission Statement Card */}
            <section className="mb-20">
              <div className="relative p-8 md:p-12 rounded-lg overflow-hidden border border-[#d4af37]/30">
                <div className="absolute inset-0 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
                
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6 border border-[#d4af37]/30">
                    <Eye className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#FFFFFF] mb-6 font-cinzel">
                    Our Sacred Mission
                  </h3>
                  <p className="text-[#c0c0c0] text-lg leading-relaxed mb-6">
                    To serve as guardians of ancient wisdom, guides for those seeking enlightenment, and 
                    architects of positive change in the world. We dedicate ourselves to the pursuit of 
                    knowledge, the preservation of sacred traditions, and the service of humanity.
                  </p>
                  <p className="text-[#d4af37] italic font-cinzel">
                    &ldquo;In light, we find purpose. In unity, we find strength. In service, we find meaning.&rdquo;
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="relative py-16 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
              
              <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">
                  Join Our Sacred Mission
                </h2>
                <p className="text-[#c0c0c0] text-lg mb-8">
                  If you share our vision and feel called to contribute to the enlightenment of humanity, 
                  we invite you to learn more about becoming part of our distinguished brotherhood.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-6 text-lg">
                    <Link href="/membership">
                      Apply for Membership
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 px-8 py-6 text-lg">
                    <Link href="/who-we-are">
                      Learn More About Us
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
