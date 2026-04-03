"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Globe, Users, Building, Award, ChevronLeft } from "lucide-react";

export default function GlobalPresencePage() {
  const regions = [
    {
      name: "North America",
      lodges: "50+",
      members: "15,000+",
      description: "Our strongest presence, with lodges in major cities across the United States, Canada, and Mexico.",
    },
    {
      name: "Europe",
      lodges: "40+",
      members: "12,000+",
      description: "From our ancestral home in Bavaria to major capitals, our European lodges continue ancient traditions.",
    },
    {
      name: "Asia",
      lodges: "25+",
      members: "8,000+",
      description: "Growing rapidly, with lodges in Japan, China, India, and Southeast Asia.",
    },
    {
      name: "South America",
      lodges: "15+",
      members: "5,000+",
      description: "Active presence in Brazil, Argentina, and throughout the continent.",
    },
    {
      name: "Africa",
      lodges: "10+",
      members: "3,000+",
      description: "Emerging presence with focus on educational and charitable initiatives.",
    },
    {
      name: "Oceania",
      lodges: "8+",
      members: "2,000+",
      description: "Active lodges in Australia and New Zealand serving the Pacific region.",
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
            style={{ backgroundImage: "url('/0730944070-illu-1/images/gh20205b690rp.jpg')" }}
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
            
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Initiatives</p>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              Global Presence
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
                The Illuminati Lodge of New York is part of a global network spanning more than 120 countries. Our presence extends across every continent, united by shared principles and a commitment to enlightenment.
              </p>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Statistics */}
            <section className="mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg text-center hover:border-[#d4af37]/30 transition-colors">
                  <Globe className="w-8 h-8 text-[#d4af37] mx-auto mb-3" />
                  <p className="text-2xl font-bold text-[#FFFFFF]">120+</p>
                  <p className="text-sm text-[#9a9a9a]">Countries</p>
                </div>
                <div className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg text-center hover:border-[#d4af37]/30 transition-colors">
                  <Building className="w-8 h-8 text-[#d4af37] mx-auto mb-3" />
                  <p className="text-2xl font-bold text-[#FFFFFF]">150+</p>
                  <p className="text-sm text-[#9a9a9a]">Lodges</p>
                </div>
                <div className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg text-center hover:border-[#d4af37]/30 transition-colors">
                  <Users className="w-8 h-8 text-[#d4af37] mx-auto mb-3" />
                  <p className="text-2xl font-bold text-[#FFFFFF]">50K+</p>
                  <p className="text-sm text-[#9a9a9a]">Members</p>
                </div>
                <div className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg text-center hover:border-[#d4af37]/30 transition-colors">
                  <Award className="w-8 h-8 text-[#d4af37] mx-auto mb-3" />
                  <p className="text-2xl font-bold text-[#FFFFFF]">248+</p>
                  <p className="text-sm text-[#9a9a9a]">Years</p>
                </div>
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-16">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Regional Presence */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#FFFFFF] mb-6 font-cinzel text-center">Regional Presence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regions.map((region, index) => (
                  <div key={index} className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-[#d4af37] mb-3">{region.name}</h3>
                    <p className="text-[#9a9a9a] text-base leading-relaxed mb-4">{region.description}</p>
                    <div className="flex gap-6">
                      <div>
                        <p className="text-lg font-bold text-[#FFFFFF]">{region.lodges}</p>
                        <p className="text-xs text-[#666]">Lodges</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-[#FFFFFF]">{region.members}</p>
                        <p className="text-xs text-[#666]">Members</p>
                      </div>
                    </div>
                  </div>
                ))}
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
              <div className="p-6 bg-gradient-to-r from-[#112240] to-[#0D2137] border border-[#d4af37]/30 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-4 font-cinzel">Join Our Global Brotherhood</h3>
                <p className="text-[#c0c0c0] mb-6 max-w-2xl mx-auto">
                  Wherever you are in the world, you can become part of our global network of seekers and leaders.
                </p>
                <Button asChild className="bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-6 py-3">
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
