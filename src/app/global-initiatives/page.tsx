"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Globe, Heart, BookOpen, Users, TreePine, Droplets, ArrowRight } from "lucide-react";

export default function GlobalInitiativesPage() {
  const initiatives = [
    {
      icon: BookOpen,
      title: "Education Access",
      description: "Building schools and funding scholarships in underserved communities across Africa, Asia, and South America. We believe education is the foundation of enlightenment.",
      impact: "500+ schools built",
      impactNumber: "50,000+",
      impactLabel: "Scholarships Awarded"
    },
    {
      icon: Heart,
      title: "Healthcare Programs",
      description: "Supporting hospitals, medical research, and healthcare access in regions with limited infrastructure. Our programs focus on both immediate care and long-term health systems.",
      impact: "200+ medical facilities supported",
      impactNumber: "1M+",
      impactLabel: "Patients Served"
    },
    {
      icon: Globe,
      title: "Peace Initiatives",
      description: "Funding conflict resolution programs and peace-building efforts in regions affected by war and civil strife. We bring together opposing sides in pursuit of lasting peace.",
      impact: "Active in 15 conflict zones",
      impactNumber: "25+",
      impactLabel: "Peace Agreements"
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Supporting grassroots organizations that strengthen communities from within. We believe sustainable change comes from empowered local leadership.",
      impact: "1,000+ community organizations supported",
      impactNumber: "5,000+",
      impactLabel: "Local Leaders Trained"
    },
    {
      icon: TreePine,
      title: "Environmental Stewardship",
      description: "Protecting natural resources and supporting sustainable development. Our environmental initiatives balance human progress with ecological preservation.",
      impact: "2 million+ acres protected",
      impactNumber: "50+",
      impactLabel: "Conservation Projects"
    },
    {
      icon: Droplets,
      title: "Clean Water Access",
      description: "Building wells and water purification systems in communities without access to clean water. This fundamental need is essential for all other development.",
      impact: "5,000+ wells constructed",
      impactNumber: "3M+",
      impactLabel: "People with Clean Water"
    },
  ];

  const stats = [
    { value: "$1B+", label: "Annual Contributions" },
    { value: "120+", label: "Countries Reached" },
    { value: "10M+", label: "Lives Impacted" },
    { value: "500+", label: "Partner Organizations" },
  ];

  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section with Parallax */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: "url('/0730944070-illu-1/images/gh20205b690rp.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#112240] via-[#0D2137]/90 to-[#0A1929]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A1929_70%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Philanthropy</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              Global Initiatives
            </h1>
            
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>
          </div>
        </section>

        {/* Parallax Introduction */}
        <section className="relative py-32 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: "url('/0730944070-illu-1/images/mystic-guardian-rises-stockcake.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/80 to-[#0A1929]" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#d4af37] text-lg mb-4 font-cinzel">Worldwide Impact</p>
            <p className="text-[#b0b0b0] text-xl max-w-3xl mx-auto">
              The Illuminati Lodge of New York is committed to creating positive change across the globe. 
              Through strategic philanthropy and hands-on involvement, we work to address humanity&apos;s most 
              pressing challenges while empowering communities to build their own futures.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">

            {/* Initiatives */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel text-center">
                Our Global Initiatives
              </h2>
              <p className="text-[#c0c0c0] text-lg text-center max-w-3xl mx-auto mb-12">
                Through strategic philanthropy and hands-on involvement, we address the most pressing 
                challenges facing humanity today.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {initiatives.map((initiative, index) => {
                  const Icon = initiative.icon;
                  return (
                    <div 
                      key={index} 
                      className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all duration-300 group card-shine"
                    >
                      <div className="w-14 h-14 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0 text-[#d4af37] mb-4 group-hover:bg-[#d4af37]/20 transition-colors">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#FFFFFF] mb-3 font-cinzel">{initiative.title}</h3>
                      <p className="text-[#c0c0c0] text-sm leading-relaxed mb-4">{initiative.description}</p>
                      
                      <div className="pt-4 border-t border-[#d4af37]/10">
                        <div className="text-2xl font-bold text-[#d4af37] mb-1">{initiative.impactNumber}</div>
                        <div className="text-xs text-[#9a9a9a]">{initiative.impactLabel}</div>
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

            {/* Statistics */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel text-center">
                Our Global Reach
              </h2>
              <p className="text-[#c0c0c0] text-lg text-center max-w-3xl mx-auto mb-12">
                Our impact spans continents, touching lives and transforming communities around the world.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-gradient-to-br from-[#112240] to-[#0D2137] border border-[#d4af37]/20 rounded-lg text-center hover:border-[#d4af37]/40 transition-colors card-shine"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">{stat.value}</p>
                    <p className="text-sm text-[#c0c0c0]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Parallax Image Section */}
            <section className="relative py-32 rounded-xl overflow-hidden mb-16">
              <div 
                className="absolute inset-0 parallax-bg"
                style={{ backgroundImage: "url('/0730944070-illu-1/images/Chancellor_of_Cambridge_University_the_Duke_confers_an_honorary_Doctorate_of_Science_on_Sir_Andrew_Wiles_in_2010.jpeg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/80 to-[#0A1929]" />
              
              <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <p className="text-[#d4af37] text-lg mb-4 font-cinzel">Building Futures</p>
                <p className="text-[#b0b0b0] text-xl">
                  Through education, healthcare, and community development, we empower individuals 
                  to reach their highest potential.
                </p>
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Call to Action */}
            <section className="relative py-16 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
              
              <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">
                  Join Our Mission
                </h2>
                <p className="text-[#c0c0c0] text-lg mb-8">
                  Become part of a global network dedicated to creating positive change. Together, we can 
                  illuminate the path toward a better future for all humanity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-6 text-lg">
                    <Link href="/membership">
                      Apply for Membership
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 px-8 py-6 text-lg">
                    <Link href="/contact">
                      Contact Us
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
