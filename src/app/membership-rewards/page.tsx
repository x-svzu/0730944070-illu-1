"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Crown, Globe, Users, Heart, BookOpen, Shield, Star, Sparkles, ChevronLeft } from "lucide-react";

export default function MembershipRewardsPage() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Access to Sacred Knowledge",
      description: "Unlock centuries of wisdom through our extensive library of texts, teachings, and oral traditions passed down through generations of enlightened minds.",
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Connect with over 50,000 members across 120+ countries. Our network includes leaders in business, science, arts, and government.",
    },
    {
      icon: Crown,
      title: "Leadership Opportunities",
      description: "Rise through the degrees of our order and take on leadership roles that allow you to shape the future of our brotherhood.",
    },
    {
      icon: Globe,
      title: "International Events",
      description: "Attend exclusive gatherings, ceremonies, and events at our lodges around the world. Experience the unity of our global brotherhood firsthand.",
    },
    {
      icon: Heart,
      title: "Philanthropic Impact",
      description: "Participate in charitable initiatives that create real change. Our collective contributions exceed $1 billion annually.",
    },
    {
      icon: Shield,
      title: "Mutual Support",
      description: "Benefit from the support of brothers in times of need. Our network provides assistance in personal, professional, and spiritual matters.",
    },
    {
      icon: Star,
      title: "Personal Growth",
      description: "Access mentorship programs, workshops, and resources designed to help you reach your highest potential.",
    },
    {
      icon: Sparkles,
      title: "Spiritual Development",
      description: "Engage in practices and ceremonies that promote spiritual enlightenment and self-discovery.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section with Parallax */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: "url('/0730944070-illu-1/images/wisdom-through-time-stockcake.webp')" }}
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
            <Link href="/" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f0d77a] transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Membership</p>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              Membership Rewards
            </h1>
            
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            
            {/* Introduction */}
            <section className="mb-16">
              <p className="text-[#c0c0c0] text-lg leading-relaxed text-center max-w-3xl mx-auto">
                Membership in the Illuminati Lodge of New York opens doors to experiences, knowledge, and connections that transcend ordinary life. Our members enjoy a range of benefits designed to support their personal, professional, and spiritual growth.
              </p>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Benefits Grid */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929] transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2 group-hover:text-[#d4af37] transition-colors">{benefit.title}</h3>
                          <p className="text-[#9a9a9a] text-base leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* CTA Card */}
            <section className="mb-16">
              <div className="p-8 bg-gradient-to-r from-[#112240] to-[#0D2137] border border-[#d4af37]/30 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-4 font-cinzel">Begin Your Journey</h3>
                <p className="text-[#c0c0c0] mb-6 max-w-2xl mx-auto">
                  The rewards of membership extend far beyond material benefits. Join a brotherhood that has guided seekers for over two centuries.
                </p>
                <Button asChild className="bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-4">
                  <Link href="/membership">
                    Apply for Membership
                  </Link>
                </Button>
              </div>
            </section>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
