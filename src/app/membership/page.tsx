"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Eye, Star, Shield, Users, BookOpen, Globe, Heart, ArrowRight,
  Check, Sparkles, Award, Lock, Zap, ChevronDown,
  Briefcase, Send
} from "lucide-react";

// Illuminati Logo SVG
const IlluminatiLogo = ({ size = 112 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
    <defs>
      <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f0d77a" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#a88c2a" />
      </linearGradient>
      <linearGradient id="pyramidGradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#f0d77a" />
        <stop offset="40%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8b6914" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#eyeGlow)" />
    <circle cx="50" cy="50" r="46" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" opacity="0.6" />
    <path d="M50 8 L85 75 L15 75 Z" fill="url(#pyramidGradient)" stroke="#f0d77a" strokeWidth="1" opacity="0.9" />
    <ellipse cx="50" cy="28" rx="11" ry="7" fill="none" stroke="#f0d77a" strokeWidth="1.5" />
    <ellipse cx="50" cy="28" rx="8" ry="5" fill="#0D2137" stroke="#d4af37" strokeWidth="0.5" />
    <circle cx="50" cy="28" r="4" fill="#112240" stroke="#d4af37" strokeWidth="0.3" />
    <circle cx="50" cy="28" r="2" fill="#0A1929" />
    <circle cx="51.5" cy="26.5" r="1" fill="#f0d77a" opacity="0.8" />
  </svg>
);

const EyeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="8" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const benefits = [
  { icon: BookOpen, title: "Ancient Wisdom", description: "Access to centuries of accumulated knowledge and sacred texts.", color: "gold" },
  { icon: Users, title: "Global Network", description: "Connect with influential leaders across 120+ countries.", color: "crimson" },
  { icon: Zap, title: "Personal Growth", description: "Structured programs to unlock your full potential.", color: "silver" },
  { icon: Heart, title: "Philanthropy", description: "Participate in meaningful charitable initiatives.", color: "gold" },
  { icon: Star, title: "Exclusive Events", description: "Private gatherings at our sacred temples worldwide.", color: "crimson" },
  { icon: Shield, title: "Lifetime Support", description: "Eternal brotherhood support and mentorship.", color: "silver" },
];

const applicationSteps = [
  { step: "01", title: "Submit Application", description: "Complete the membership inquiry form with your personal and professional details." },
  { step: "02", title: "Initial Review", description: "Our membership committee reviews your application and background." },
  { step: "03", title: "Interview", description: "Selected candidates are invited for a personal interview with senior members." },
  { step: "04", title: "Deliberation", description: "The committee deliberates and reaches a decision on your candidacy." },
  { step: "05", title: "Acceptance", description: "Successful applicants begin their journey as an Initiate." },
];

const requirements = [
  { icon: Shield, title: "Integrity", description: "Demonstrated moral character" },
  { icon: Star, title: "Leadership", description: "Proven leadership abilities" },
  { icon: Award, title: "Success", description: "Achievement in your field" },
  { icon: Eye, title: "Vision", description: "Commitment to enlightenment" },
  { icon: Heart, title: "Commitment", description: "Dedication to service" },
];

const membershipTiers = [
  {
    level: "Apprentice Degree",
    subtitle: "First Degree of Enlightenment",
    description: "The beginning of your journey into the mysteries of our ancient order.",
    benefits: ["Access to foundational teachings", "Community gatherings participation", "Monthly mentorship sessions", "Digital library access", "Local chapter membership"],
  },
  {
    level: "Fellowcraft Degree",
    subtitle: "Second Degree of Enlightenment",
    description: "Deeper immersion into the sacred knowledge and responsibilities of our brotherhood.",
    benefits: ["Advanced knowledge archives", "Regional event invitations", "Personal mentor assignment", "Leadership opportunities", "Philanthropy participation"],
  },
  {
    level: "Master Degree",
    subtitle: "Third Degree of Enlightenment",
    description: "The highest degree of understanding, leadership, and service within our order.",
    benefits: ["Complete access to all teachings", "Global council participation", "Sacred ceremony leadership", "International network access", "Legacy building opportunities"],
  },
];

const privileges = [
  { icon: Star, title: "Priority Access", description: "First access to exclusive events and gatherings" },
  { icon: Users, title: "Wisdom Circles", description: "Participate in elite mastermind groups" },
  { icon: Award, title: "Recognition", description: "Acknowledgment of achievements within the order" },
  { icon: Shield, title: "Brotherhood Support", description: "24/7 support from fellow members worldwide" },
  { icon: Globe, title: "Travel Concierge", description: "Assistance when visiting chapters abroad" },
  { icon: Briefcase, title: "Business Advocacy", description: "Support for your professional endeavors" },
  { icon: BookOpen, title: "Educational Grants", description: "Funding for approved learning programs" },
  { icon: Lock, title: "Sacred Ceremonies", description: "Participation in ancient rituals and rites" },
];

const responsibilities = [
  { title: "Uphold Values", description: "Maintain the highest ethical standards" },
  { title: "Protect Secrets", description: "Safeguard our sacred knowledge" },
  { title: "Support Members", description: "Assist brothers and sisters in need" },
  { title: "Contribute", description: "Give back through service and philanthropy" },
  { title: "Attend Gatherings", description: "Participate in regular meetings" },
  { title: "Mentor", description: "Guide new members on their path" },
];

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", dob: "", city: "", country: "",
    occupation: "", position: "", industry: "", yearsExperience: "", howFound: "",
    motivation: "", background: "",
    referenceName: "", referenceEmail: "",
    agreeTerms: false, agreeSecrecy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your application. We will review it and contact you within 2-4 weeks.");
  };

  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{ backgroundImage: "url('/0730944070-illu-1/images/fce0bad91ac3566065865a810009aefd.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#112240]/80 to-[#0A1929]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A1929_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4af37' stroke-width='0.5'%3E%3Ccircle cx='30' cy='30' r='30'/%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3Cpolygon points='30,0 60,30 30,60 0,30'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: "60px 60px" }} />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="mb-8 flex justify-center">
              <Image 
                src="/0730944070-illu-1/images/_118890292_iluminati-emblema.jpg.png" 
                alt="Illuminati Logo" 
                width={112} 
                height={112}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-[#d4af37] text-sm tracking-[0.2em] mb-6 uppercase font-medium">
              Begin Your Journey to Enlightenment
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#FFFFFF] font-cinzel">
              Join the Brotherhood
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
              <EyeIcon size={16} />
              <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>
            <p className="text-[#b0b0b0] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              For over two centuries, our brotherhood has guided seekers toward enlightenment. 
              Membership is a commitment to the pursuit of wisdom and the betterment of humanity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="#application">
                <button className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-4 rounded transition-all duration-300 cursor-pointer">
                  <EyeIcon size={16} />
                  Begin Your Application
                </button>
              </a>
              <a href="#benefits">
                <button className="inline-flex items-center gap-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-8 py-4 rounded transition-all duration-300 cursor-pointer">
                  Explore Benefits
                </button>
              </a>
            </div>
            <button className="flex flex-col items-center gap-2 mx-auto text-[#d4af37]/60 hover:text-[#d4af37] transition-colors cursor-pointer group" onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}>
              <span className="text-[11px] tracking-[0.2em] uppercase font-medium">Scroll</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-16 md:py-20 bg-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Member Benefits</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] mb-4 font-cinzel">What Membership Offers</h2>
            <p className="text-[#a0a0a0] text-lg max-w-3xl mx-auto">As a member of our distinguished brotherhood, you gain access to resources and opportunities that can transform your life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const colorClass = benefit.color === "gold" ? "bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1929]" :
                benefit.color === "crimson" ? "bg-[#8b0000]/10 text-[#dc143c] group-hover:bg-[#8b0000] group-hover:text-white" :
                "bg-[#c0c0c0]/10 text-[#c0c0c0] group-hover:bg-[#c0c0c0] group-hover:text-[#0A1929]";
              return (
                <div key={index} className="group p-6 md:p-8 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg transition-all duration-300 hover:border-[#d4af37]/30 hover:bg-[#0D1B2A] card-shine">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 ${colorClass}`}>
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#FFFFFF] mb-3 group-hover:text-[#d4af37] transition-colors">{benefit.title}</h3>
                  <p className="text-[#9a9a9a] text-base leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Parallax Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{ backgroundImage: "url('/0730944070-illu-1/images/graduation-ceremony-students-receiving-diplomas-and-celebrating-academic-achievement-free-photo.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/80 to-[#0A1929]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">The Path to Membership</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6 font-cinzel">Application Process</h2>
          <p className="text-[#b0b0b0] text-lg max-w-3xl mx-auto">Our thorough selection process ensures those who join are truly committed to enlightenment.</p>
        </div>
      </section>

      {/* Application Process */}
      <section className="relative py-16 md:py-20 bg-[#112240]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-transparent hidden lg:block" />
            <div className="space-y-12">
              {applicationSteps.map((step, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="p-6 bg-[#001a4d]/50 border border-[#d4af37]/20 rounded-lg card-shine">
                      <span className="inline-block px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-sm font-bold rounded-full mb-3">{step.step}</span>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 font-cinzel">{step.title}</h3>
                      <p className="text-[#a0a0a0]">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
                  </div>
                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Requirements */}
      <section className="relative py-16 md:py-20 bg-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">What We Seek</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Membership Requirements</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="p-6 text-center bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all card-shine">
                <div className="w-12 h-12 mx-auto rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-4 text-[#d4af37]">
                  <req.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-[#FFFFFF] mb-1">{req.title}</h3>
                <p className="text-xs text-[#9a9a9a]">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Membership Tiers */}
      <section className="relative py-16 md:py-20 bg-[#112240]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Degrees of Enlightenment</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Membership Tiers</h2>
            <p className="text-[#a0a0a0] text-lg max-w-3xl mx-auto">Progress through the degrees as you deepen your understanding and service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipTiers.map((tier, index) => (
              <div key={index} className={`relative p-8 bg-gradient-to-br from-[#0D2137] to-[#112240] border rounded-lg card-shine ${index === 2 ? 'border-[#d4af37]/40 ring-1 ring-[#d4af37]/20' : 'border-[#d4af37]/20'}`}>
                {index === 2 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#d4af37] text-[#0A1929] text-xs font-bold rounded">HIGHEST DEGREE</div>}
                <h3 className="text-xl font-bold text-[#FFFFFF] mb-1 font-cinzel">{tier.level}</h3>
                <p className="text-[#d4af37] text-sm mb-4">{tier.subtitle}</p>
                <p className="text-[#a0a0a0] text-sm mb-6">{tier.description}</p>
                <div className="space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                      <span className="text-sm text-[#c0c0c0]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Exclusive Privileges */}
      <section className="relative py-16 md:py-20 bg-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">For Our Members</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Exclusive Privileges</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {privileges.map((priv, index) => (
              <div key={index} className="p-5 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all card-shine">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-3 text-[#d4af37]">
                  <priv.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#FFFFFF] mb-1">{priv.title}</h3>
                <p className="text-xs text-[#9a9a9a]">{priv.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Member Responsibilities */}
      <section className="relative py-16 md:py-20 bg-[#112240]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Our Sacred Duties</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Member Responsibilities</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {responsibilities.map((resp, index) => (
              <div key={index} className="p-5 text-center bg-[#0D2137] border border-[#d4af37]/10 rounded-lg hover:border-[#d4af37]/30 transition-all card-shine">
                <h3 className="text-base font-semibold text-[#FFFFFF] mb-1">{resp.title}</h3>
                <p className="text-xs text-[#9a9a9a]">{resp.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
      </section>

      {/* Application Form */}
      <section id="application" className="relative py-16 md:py-20 bg-[#0D2137]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">Take the First Step</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Membership Application</h2>
            <p className="text-[#a0a0a0] text-lg max-w-3xl mx-auto">Complete this form to begin your journey. All information is kept strictly confidential.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 bg-gradient-to-br from-[#0D2137] to-[#112240] border border-[#d4af37]/20 rounded-lg">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#d4af37] mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">First Name *</label>
                  <input type="text" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Last Name *</label>
                  <input type="text" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Email *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Date of Birth</label>
                  <input type="date" value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">City</label>
                  <input type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-[#d4af37] mb-2">Country *</label>
                  <input type="text" required value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#d4af37] mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Professional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Occupation *</label>
                  <input type="text" required value={formData.occupation} onChange={(e) => setFormData({...formData, occupation: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Position/Title</label>
                  <input type="text" value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Industry</label>
                  <input type="text" value={formData.industry} onChange={(e) => setFormData({...formData, industry: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Years of Experience</label>
                  <input type="text" value={formData.yearsExperience} onChange={(e) => setFormData({...formData, yearsExperience: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-[#d4af37] mb-2">How did you find us?</label>
                  <input type="text" value={formData.howFound} onChange={(e) => setFormData({...formData, howFound: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
              </div>
            </div>

            {/* Background & Motivation */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#d4af37] mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Background & Motivation
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Why do you seek enlightenment? *</label>
                  <textarea required rows={4} value={formData.motivation} onChange={(e) => setFormData({...formData, motivation: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] resize-none" placeholder="Share your motivation for seeking membership..." />
                </div>
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Relevant Experience or Background</label>
                  <textarea rows={3} value={formData.background} onChange={(e) => setFormData({...formData, background: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] resize-none" placeholder="Share any relevant experience..." />
                </div>
              </div>
            </div>

            {/* Professional Reference */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#d4af37] mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Professional Reference
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Reference Name</label>
                  <input type="text" value={formData.referenceName} onChange={(e) => setFormData({...formData, referenceName: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
                <div>
                  <label className="block text-sm text-[#d4af37] mb-2">Reference Email</label>
                  <input type="email" value={formData.referenceEmail} onChange={(e) => setFormData({...formData, referenceEmail: e.target.value})} className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37]" />
                </div>
              </div>
            </div>

            {/* Sacred Pledge */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#d4af37] mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Sacred Pledge
              </h3>
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.agreeTerms} onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})} className="mt-1 w-4 h-4 rounded border-[#d4af37]/30 bg-[#0A1929] text-[#d4af37] focus:ring-[#d4af37]" />
                  <span className="text-sm text-[#c0c0c0]">I have read and agree to the Terms of Service and Privacy Policy. I understand that membership is a privilege, not a right. *</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.agreeSecrecy} onChange={(e) => setFormData({...formData, agreeSecrecy: e.target.checked})} className="mt-1 w-4 h-4 rounded border-[#d4af37]/30 bg-[#0A1929] text-[#d4af37] focus:ring-[#d4af37]" />
                  <span className="text-sm text-[#c0c0c0]">I pledge to maintain the secrecy of our sacred knowledge and protect the confidentiality of our brotherhood. *</span>
                </label>
              </div>
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-4 rounded transition-all duration-300 cursor-pointer">
              <Send className="w-5 h-5" />
              Submit Application
            </button>
          </form>

          <p className="text-center text-sm text-[#666] mt-6 italic">
            All applications are reviewed by our membership committee. Please allow 2-4 weeks for a response. Not all applicants are accepted.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{ backgroundImage: "url('/0730944070-illu-1/images/ethereal-light-being-stockcake.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D2137]/95 to-[#112240]/95" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src="/0730944070-illu-1/images/_118890292_iluminati-emblema.jpg.png" 
              alt="Illuminati Logo" 
              width={64} 
              height={64}
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">Ready to Begin Your Journey?</h2>
          <p className="text-[#a0a0a0] text-lg mb-8">Join thousands of seekers who have found purpose, connection, and wisdom within our brotherhood.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#application">
              <button className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-4 rounded transition-all duration-300 cursor-pointer">
                <EyeIcon size={16} />
                Apply for Membership
              </button>
            </a>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-8 py-4 rounded transition-all duration-300 cursor-pointer">
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
