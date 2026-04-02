"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, BookOpen, Users, Lightbulb, Eye, Globe, Shield, Award, Heart, Crown, Sparkles, Scroll } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Illuminati Logo SVG Component
const IlluminatiLogo = ({ size = 112 }: { size?: number }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
    style={{ width: size, height: size }}
  >
    <defs>
      <radialGradient id="heroEyeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="heroGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f0d77a" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#a88c2a" />
      </linearGradient>
      <linearGradient id="heroPyramidGradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#f0d77a" />
        <stop offset="40%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8b6914" />
      </linearGradient>
      <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#heroEyeGlow)" />
    <circle cx="50" cy="50" r="46" stroke="url(#heroGoldGradient)" strokeWidth="1.5" fill="none" opacity="0.6" />
    <circle cx="50" cy="50" r="42" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.4" />
    <path d="M50 8 L85 75 L15 75 Z" fill="url(#heroPyramidGradient)" stroke="#f0d77a" strokeWidth="1" filter="url(#heroGlow)" opacity="0.9" />
    <line x1="50" y1="8" x2="50" y2="75" stroke="#a88c2a" strokeWidth="0.5" opacity="0.5" />
    <line x1="35" y1="42" x2="65" y2="42" stroke="#a88c2a" strokeWidth="0.5" opacity="0.5" />
    <line x1="38" y1="28" x2="62" y2="28" stroke="#f0d77a" strokeWidth="0.75" opacity="0.8" />
    <g filter="url(#heroGlow)">
      <ellipse cx="50" cy="28" rx="11" ry="7" fill="none" stroke="#f0d77a" strokeWidth="1.5" />
      <ellipse cx="50" cy="28" rx="8" ry="5" fill="#0D2137" stroke="#d4af37" strokeWidth="0.5" />
      <circle cx="50" cy="28" r="4" fill="#112240" stroke="#d4af37" strokeWidth="0.3" />
      <circle cx="50" cy="28" r="2" fill="#0A1929" />
      <circle cx="51.5" cy="26.5" r="1" fill="#f0d77a" opacity="0.8" />
      <g stroke="#d4af37" strokeWidth="0.5" opacity="0.4">
        <line x1="50" y1="20" x2="50" y2="14" />
        <line x1="42" y1="23" x2="37" y2="18" />
        <line x1="58" y1="23" x2="63" y2="18" />
      </g>
    </g>
    <g stroke="#d4af37" strokeWidth="0.5" opacity="0.5">
      <line x1="35" y1="78" x2="45" y2="78" />
      <line x1="55" y1="78" x2="65" y2="78" />
      <circle cx="50" cy="78" r="1.5" fill="#d4af37" />
    </g>
    <g stroke="#d4af37" strokeWidth="0.3" opacity="0.3">
      <path d="M15 15 L15 25 M15 15 L25 15" />
      <path d="M85 15 L85 25 M85 15 L75 15" />
      <path d="M15 85 L15 75 M15 85 L25 85" />
      <path d="M85 85 L85 75 M85 85 L75 85" />
    </g>
  </svg>
);

// Eye Icon for buttons
const EyeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="8" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const tenets = [
  {
    icon: BookOpen,
    title: "Pursuit of Knowledge",
    description: "We are dedicated to the relentless quest for understanding and wisdom, believing that knowledge empowers individuals and enriches all of humanity.",
    color: "gold",
  },
  {
    icon: Users,
    title: "Community Cultivation",
    description: "We foster strong, supportive communities, recognizing that collaboration and mutual support are essential for progress and well-being.",
    color: "crimson",
  },
  {
    icon: Lightbulb,
    title: "Rational Thought",
    description: "We uphold the importance of reason and critical thinking, advocating for decisions and beliefs grounded in logic and evidence.",
    color: "silver",
  },
  {
    icon: Eye,
    title: "Individual Liberty",
    description: "We safeguard the freedom of every individual to discover, express, and celebrate their authentic selves without fear or limitation.",
    color: "gold",
  },
  {
    icon: Globe,
    title: "Global Brotherhood",
    description: "We unite influential individuals from diverse backgrounds to work towards the betterment of all humanity across continents and cultures.",
    color: "crimson",
  },
  {
    icon: Shield,
    title: "Sacred Protection",
    description: "We protect our members and the ancient wisdom entrusted to us, ensuring its preservation for future generations of seekers.",
    color: "silver",
  },
];

const stats = [
  { icon: Award, value: "248+", label: "Years of Heritage" },
  { icon: Users, value: "50K+", label: "Global Members" },
  { icon: Globe, value: "120+", label: "Countries Represented" },
  { icon: Heart, value: "$1B+", label: "Charitable Contributions" },
];

const timeline = [
  { year: "1776", title: "The Bavarian Genesis", description: "Founded by Adam Weishaupt in Bavaria, the Illuminati began with five scholars dedicated to enlightenment and free thinking, planting the seeds of a global movement." },
  { year: "1777", title: "Masonic Integration", description: "The Illuminati began collaborating with Masonic lodges, establishing chapters throughout Bavaria through sacred rites and expanding our influence across Europe." },
  { year: "1900s", title: "American Expansion", description: "The Illuminati established its presence in America, with New York becoming a central hub for enlightenment activities and the pursuit of knowledge." },
  { year: "Present", title: "Modern Renaissance", description: "Today, the Illuminati Lodge of New York continues its sacred mission, adapting ancient wisdom for the modern world while preserving our timeless heritage." },
];

const philanthropyItems = [
  { icon: BookOpen, title: "Education Initiatives", description: "Supporting educational programs worldwide, from scholarships to building schools in underserved communities." },
  { icon: Heart, title: "Healthcare Programs", description: "Funding medical research, hospitals, and healthcare access for those in need across the globe." },
  { icon: Globe, title: "Peace Building", description: "Supporting conflict resolution and peace initiatives in regions affected by strife and discord." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg"
          style={{ backgroundImage: "url('/0730944070-illu-1/images/R.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/70 to-[#0A1929]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A1929_70%)]" />
        
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4af37' stroke-width='0.5'%3E%3Ccircle cx='30' cy='30' r='30'/%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3Cpolygon points='30,0 60,30 30,60 0,30'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        
        {/* Animated Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex-1 flex items-center justify-center">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16 pb-8">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <Image 
                  src="/0730944070-illu-1/images/_118890292_iluminati-emblema.jpg.png" 
                  alt="Illuminati Logo" 
                  width={112} 
                  height={112}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>

            <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-6 uppercase font-medium">
              Enlightenment Through Knowledge
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#FFFFFF]">
              Welcome to the Illuminati Lodge of New York
            </h1>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
              <EyeIcon size={16} />
              <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>

            <p className="text-[#b0b0b0] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              For over two centuries, we have stood as guardians of ancient wisdom, guiding seekers toward the light of knowledge, prosperity, and universal understanding. Join a distinguished brotherhood of global leaders dedicated to the betterment of humanity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20 relative z-20">
              <Link href="/membership">
                <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-6 text-base rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 cursor-pointer pointer-events-auto">
                  <EyeIcon size={18} />
                  Begin Your Journey
                </button>
              </Link>
              <Link href="/who-we-are">
                <button className="inline-flex items-center justify-center gap-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-8 py-6 text-base rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                  Discover Our Heritage
                </button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <button
              className="flex flex-col items-center gap-2 mx-auto text-[#d4af37]/60 hover:text-[#d4af37] transition-colors duration-300 cursor-pointer group"
              aria-label="Scroll to next section"
              onClick={() => document.getElementById("tenets")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="text-[11px] tracking-[0.2em] uppercase font-medium">Scroll</span>
              <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="relative z-10 h-24 md:h-32 flex-shrink-0" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/80 to-transparent pointer-events-none" />
      </section>

      {/* Parallax Section - About */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{ backgroundImage: "url('/0730944070-illu-1/images/StockCake-standard-10000471124-1774869820459.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/80 to-[#0A1929]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Our Purpose</p>
          <h2 className="font-bold mb-6 text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl">
            Guardians of the Eternal Light
          </h2>
          <p className="text-[#b0b0b0] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We are the keepers of sacred knowledge, passed down through generations of enlightened minds. 
            Our mission transcends time itself — to illuminate the path for those who seek truth, wisdom, and prosperity.
          </p>
        </div>
      </section>

      {/* Tenets Section */}
      <section id="tenets" className="relative py-16 md:py-20 overflow-hidden bg-[#0D2137]">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4af37' stroke-width='0.3'%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Cpolygon points='40,0 80,40 40,80 0,40'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">The Sacred Foundation</p>
            <h2 className="font-bold mb-5 text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl">Our Core Tenets</h2>
            <p className="text-[#a0a0a0] text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
              These timeless principles form the bedrock upon which our brotherhood stands, guiding every action and illuminating every path toward enlightenment.
            </p>
            <div className="flex items-center gap-3 mt-8 justify-center">
              <div className="w-10 h-px bg-[#d4af37]/40" />
              <div className="w-1 h-1 bg-[#d4af37] rotate-45" />
              <div className="w-10 h-px bg-[#d4af37]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenets.map((tenet, index) => {
              const Icon = tenet.icon;
              const colorClass = tenet.color === "gold" ? "bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929]" :
                tenet.color === "crimson" ? "bg-[#8b0000]/10 text-[#dc143c] group-hover:bg-[#8b0000] group-hover:text-white" :
                "bg-[#c0c0c0]/10 text-[#c0c0c0] group-hover:bg-[#c0c0c0] group-hover:text-[#0A1929]";

              return (
                <div key={index} className="group p-6 md:p-8 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg transition-all duration-300 hover:border-[#d4af37]/30 hover:bg-[#0D1B2A] card-shine">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 ${colorClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#FFFFFF] mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                    {tenet.title}
                  </h3>
                  <p className="text-[#9a9a9a] text-base leading-relaxed">{tenet.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 relative z-20">
            <Link href="/tenets-and-purpose">
              <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-6 rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                <Scroll className="w-4 h-4" />
                Explore Our Sacred Tenets
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* About Section with Image */}
      <section id="about" className="relative py-16 md:py-20 overflow-hidden bg-[#0A1929]">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4af37' stroke-width='0.3'%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Cpolygon points='40,0 80,40 40,80 0,40'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 border border-[#d4af37]/10 rounded-lg hidden lg:block" />
              <div className="relative rounded-lg overflow-hidden image-frame">
                <Image 
                  src="/0730944070-illu-1/images/baroque-architecture-grandeur-stockcake.webp" 
                  alt="Sacred Architecture" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/70 via-transparent to-transparent" />
                {/* Decorative corners */}
                <div className="frame-corner frame-corner-tl" />
                <div className="frame-corner frame-corner-tr" />
                <div className="frame-corner frame-corner-bl" />
                <div className="frame-corner frame-corner-br" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Our Brotherhood</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[#FFFFFF]">
                Guardians of Ancient Wisdom
              </h2>
              <div className="space-y-4 text-[#c0c0c0] text-lg leading-relaxed">
                <p>
                  Our coalition brings together influencers from diverse political, religious, and geographical backgrounds, all united under the banner of enlightenment. The Illuminati Lodge of New York is committed to safeguarding individual freedom by fostering the discovery, expression, and celebration of one&apos;s true self.
                </p>
                <p>
                  We guide our members in appreciating and attaining their highest potential progressively, realistically, and sustainably. Regardless of gender or background, all are invited to join us in this journey of personal and societal transformation.
                </p>
                <p>
                  From our origins in 1776 Bavaria to our modern presence spanning 120+ nations, we have remained steadfast in our mission to illuminate the path for those who seek wisdom.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 relative z-20">
                <Link href="/who-we-are">
                  <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-6 py-5 rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                    <Crown className="w-4 h-4" />
                    Discover Our Legacy
                  </button>
                </Link>
                <Link href="/our-mission">
                  <button className="inline-flex items-center justify-center gap-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-6 py-5 rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                    <Sparkles className="w-4 h-4" />
                    Our Sacred Mission
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Impact Section */}
      <section id="impact" className="relative py-16 md:py-20 overflow-hidden bg-[#112240]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Global Impact</p>
            <h2 className="font-bold mb-5 text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl">Our Brotherhood in Numbers</h2>
            <p className="text-[#a0a0a0] text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
              Witness the scale of our influence and the breadth of our impact across the globe.
            </p>
            <div className="flex items-center gap-3 mt-8 justify-center">
              <div className="w-10 h-px bg-[#d4af37]/40" />
              <div className="w-1 h-1 bg-[#d4af37] rotate-45" />
              <div className="w-10 h-px bg-[#d4af37]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="p-6 md:p-8 text-center bg-[#0D2137] border border-[#d4af37]/10 rounded-lg group hover:border-[#d4af37]/30 transition-all duration-300 card-shine"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 mx-auto rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-4 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">{stat.value}</div>
                  <p className="text-[#9a9a9a] text-sm font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Parallax Heritage Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{ backgroundImage: "url('/0730944070-illu-1/images/863A2238.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/75 to-[#0A1929]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">A Legacy Spanning Centuries</p>
            <h2 className="font-bold mb-5 text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl">Our Sacred Heritage</h2>
            <p className="text-[#b0b0b0] text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
              From our origins in 1776 Bavaria to our modern presence in New York, trace the evolution of our distinguished brotherhood.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-transparent hidden lg:block" />

            <div className="space-y-16 lg:space-y-24">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="relative group">
                      <div className={`absolute -inset-1 bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${index % 2 !== 0 ? "from-[#d4af37]/20 to-transparent" : ""}`} />
                      <div className="relative bg-gradient-to-br from-[#0D2137] to-[#112240]/50 border border-[#d4af37]/20 rounded-xl p-8 group-hover:border-[#d4af37]/40 transition-colors duration-300">
                        <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-bold rounded-full mb-4 tracking-wider">{item.year}</span>
                        <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 font-cinzel">{item.title}</h3>
                        <p className="text-[#a0a0a0] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
                    <div className="absolute w-8 h-8 rounded-full border border-[#d4af37]/30 animate-pulse-ring" style={{ animationDelay: `${index * 0.5}s` }} />
                  </div>

                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 relative z-20">
            <Link href="/our-history">
              <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-6 rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                <Scroll className="w-4 h-4" />
                Explore Our Full History
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philanthropy Section with Image */}
      <section id="philanthropy" className="relative py-16 md:py-20 overflow-hidden bg-[#0A1929]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Image */}
          <div className="relative rounded-xl overflow-hidden mb-16 image-frame">
            <Image 
              src="/0730944070-illu-1/images/Scholarships.jpg" 
              alt="Educational Initiatives"
              width={1200}
              height={500}
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-2 uppercase font-medium">Illuminating Lives</p>
              <h2 className="font-bold text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl">Our Philanthropic Mission</h2>
            </div>
            {/* Decorative corners */}
            <div className="frame-corner frame-corner-tl" />
            <div className="frame-corner frame-corner-tr" />
            <div className="frame-corner frame-corner-bl" />
            <div className="frame-corner frame-corner-br" />
          </div>

          <div className="mb-12 md:mb-16 text-center">
            <p className="text-[#a0a0a0] text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
              Through strategic philanthropy and charitable initiatives, we work to create positive change across communities worldwide.
            </p>
            <div className="flex items-center gap-3 mt-8 justify-center">
              <div className="w-10 h-px bg-[#d4af37]/40" />
              <div className="w-1 h-1 bg-[#d4af37] rotate-45" />
              <div className="w-10 h-px bg-[#d4af37]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philanthropyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group p-8 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg transition-all duration-300 hover:border-[#d4af37]/30 hover:bg-[#0D1B2A] text-center card-shine">
                  <div className="w-14 h-14 mx-auto rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-5 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929] transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#FFFFFF] mb-3 group-hover:text-[#d4af37] transition-colors duration-300">{item.title}</h3>
                  <p className="text-[#9a9a9a] text-base leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 relative z-20">
            <Link href="/global-initiatives">
              <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-6 py-5 rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                <Globe className="w-4 h-4" />
                Our Philanthropic Work
              </button>
            </Link>
            <Link href="/charity-programs">
              <button className="inline-flex items-center justify-center gap-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-6 py-5 rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                <Heart className="w-4 h-4" />
                Charity Programs
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Parallax CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{ backgroundImage: "url('/0730944070-illu-1/images/1.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/80 to-[#0A1929]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A1929_70%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src="/0730944070-illu-1/images/_118890292_iluminati-emblema.jpg.png" 
              alt="Illuminati Logo" 
              width={64} 
              height={64}
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#FFFFFF]">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-[#a0a0a0] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join a distinguished brotherhood of global leaders dedicated to enlightenment, prosperity, and the betterment of humanity. Your path to wisdom begins here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
            <Link href="/membership">
              <button className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-6 text-base rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 cursor-pointer pointer-events-auto">
                <EyeIcon size={18} />
                Apply for Membership
              </button>
            </Link>
            <Link href="/who-we-are">
              <button className="inline-flex items-center justify-center gap-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-8 py-6 text-base rounded transition-all duration-300 cursor-pointer pointer-events-auto">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
