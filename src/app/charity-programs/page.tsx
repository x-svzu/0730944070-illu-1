"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, GraduationCap, Stethoscope, Home, Utensils, Shirt, ChevronLeft } from "lucide-react";

export default function CharityProgramsPage() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Illuminated Minds Scholarship",
      description: "Full scholarships for promising students from disadvantaged backgrounds to attend universities worldwide. We invest in future leaders who will carry the light of knowledge forward.",
      funded: "5,000+ students",
    },
    {
      icon: Stethoscope,
      title: "Healing Hands Medical Relief",
      description: "Free medical clinics and emergency healthcare services in underserved regions. Our mobile units bring doctors, medicine, and hope to those who need it most.",
      funded: "2 million+ patients served",
    },
    {
      icon: Home,
      title: "Sanctuary Housing Initiative",
      description: "Building affordable housing and shelters for homeless families and refugees. Everyone deserves a safe place to call home.",
      funded: "10,000+ housing units",
    },
    {
      icon: Utensils,
      title: "Nourishment for All",
      description: "Food banks and sustainable agriculture programs to combat hunger. We work to ensure no one goes hungry in the communities we serve.",
      funded: "50 million+ meals provided",
    },
    {
      icon: Shirt,
      title: "Dignity Programs",
      description: "Providing clothing, job training, and support services to help individuals transition out of poverty. We believe in empowering people to help themselves.",
      funded: "100,000+ individuals assisted",
    },
    {
      icon: Heart,
      title: "Orphan Care Network",
      description: "Supporting orphanages and foster care systems worldwide. Every child deserves love, care, and the opportunity to thrive.",
      funded: "25,000+ children supported",
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
            style={{ backgroundImage: "url('/0730944070-illu-1/images/generations-sharing-wisdom-stockcake.jpg')" }}
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
            
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Philanthropy</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              Charity Programs
            </h1>
            
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="relative py-32 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: "url('/0730944070-illu-1/images/StockCake-Fountain_Of_Knowledge-3957374-standard.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/80 to-[#0A1929]" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#d4af37] text-lg mb-4 font-cinzel">Illuminating Lives Worldwide</p>
            <p className="text-[#b0b0b0] text-xl max-w-3xl mx-auto">
              Our charity programs represent the practical application of our principles. Through direct action and strategic partnerships, we work to alleviate suffering and create opportunities.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">

            {/* Programs Grid */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.map((program, index) => {
                  const Icon = program.icon;
                  return (
                    <div key={index} className="p-6 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all duration-300 group card-shine">
                      <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-4 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929] transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#FFFFFF] mb-3 group-hover:text-[#d4af37] transition-colors">{program.title}</h3>
                      <p className="text-[#c0c0c0] text-base leading-relaxed mb-4">{program.description}</p>
                      <p className="text-[#d4af37] text-sm font-medium">Impact: {program.funded}</p>
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

            {/* Parallax Image */}
            <section className="relative rounded-xl overflow-hidden mb-16">
              <Image 
                src="/0730944070-illu-1/images/outdoor-excited-or-friends-with-smile-at-graduation-for-education-goals-degree-certificate-or-success-students-happy-people-or-graduate-at-campus-with-scholarship-award-and-college-achievemen.jpg" 
                alt="Education Success"
                width={1200}
                height={500}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-2 uppercase font-medium">Transforming Lives</p>
                <h3 className="text-2xl font-bold text-[#FFFFFF] font-cinzel">Education Changes Everything</h3>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#d4af37]/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#d4af37]/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#d4af37]/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#d4af37]/50" />
            </section>

            {/* CTA Card */}
            <section className="mb-16">
              <div className="p-8 bg-gradient-to-r from-[#112240] to-[#0D2137] border border-[#d4af37]/30 rounded-lg">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-4 font-cinzel text-center">Make a Difference</h3>
                <p className="text-[#c0c0c0] mb-6 text-center max-w-2xl mx-auto">
                  Our charitable work is funded by the generous contributions of our members and supporters. Every donation, no matter the size, helps us extend our reach and deepen our impact.
                </p>
                <div className="text-center">
                  <Button asChild className="bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-4">
                    <Link href="/membership">
                      Join Our Mission
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
