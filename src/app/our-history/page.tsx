"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Eye, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Users, 
  BookOpen,
  Sparkles,
  Building,
  Globe,
  Star,
  ChevronLeft
} from "lucide-react";

export default function OurHistoryPage() {
  const timeline = [
    {
      year: "1776",
      date: "May 1, 1776",
      location: "Ingolstadt, Bavaria",
      title: "The Bavarian Genesis",
      description: "Professor Adam Weishaupt, a scholar of canon law at the University of Ingolstadt, founded the Order of the Illuminati. Beginning with just five devoted members, the order was dedicated to Enlightenment principles: reason, secularism, and the pursuit of knowledge free from religious and state interference.",
      details: "The original name was Bund der Perfektibilisten (Association of Perfectibilists), reflecting the goal of continuous self-improvement and the perfection of humanity through knowledge.",
      image: "/images/Adam-Weishaupt.webp",
      icon: Sparkles
    },
    {
      year: "1777",
      date: "1777",
      location: "Munich, Bavaria",
      title: "Masonic Integration",
      description: "Weishaupt strategically integrated with Masonic lodges in Munich, seeing Freemasonry as a vehicle for spreading Illuminati ideals. This move allowed the order to expand rapidly across Europe, recruiting influential members from nobility, academia, and the arts.",
      details: "Within a year, the order had established lodges throughout Bavaria and was beginning to spread into neighboring regions, including France and Austria.",
      image: "/images/vignette-with-ecclesiastes-twelve-theodoor-koning-photo.jpg",
      icon: Users
    },
    {
      year: "1784-1785",
      date: "1784-1785",
      location: "Bavaria",
      title: "Persecution and Dispersal",
      description: "The Bavarian government, under intense pressure from the Catholic Church, issued edicts banning secret societies. Many Illuminati members were arrested, exiled, or forced underground. While officially disbanded, the order continued in secret, its members carrying the flame of enlightenment to new lands.",
      details: "The order's survival during this period is a testament to its organizational strength and the unwavering dedication of its members to the cause of enlightenment.",
      image: "/images/6131018bf1da8.image.jpg",
      icon: BookOpen
    },
    {
      year: "1800s",
      date: "Early 1800s",
      location: "United States",
      title: "The American Chapter",
      description: "Illuminati ideals found fertile ground in America, where Enlightenment principles had already shaped the nation's founding. Many prominent Americans were rumored to be members or sympathizers, though the order maintained its tradition of absolute secrecy.",
      details: "The order's influence can be seen in the symbolic imagery of the Great Seal of the United States, including the all-seeing eye and the pyramid, which embody the values of divine providence and human progress.",
      image: "/images/1.webp",
      icon: Star
    },
    {
      year: "Early 1900s",
      date: "Early 1900s",
      location: "New York City",
      title: "New York Establishment",
      description: "The Illuminati Lodge of New York was formally established, becoming a major center for the order in the Americas. New York's position as a global hub of finance, culture, and ideas made it an ideal location for advancing the order's mission in the modern world.",
      details: "The lodge has operated continuously since its establishment, weathering wars, economic upheavals, and societal transformations while remaining true to its founding principles.",
      image: "/images/majestic-classical-architecture-stockcake.jpg",
      icon: Building
    },
    {
      year: "Present",
      date: "2024",
      location: "Global",
      title: "Modern Renaissance",
      description: "Today, the Illuminati Lodge of New York continues its sacred mission in the digital age. We have adapted ancient wisdom for modern challenges while preserving the core principles that have guided us for over two centuries. Our global network of over 50,000 members spans 120+ nations.",
      details: "The order remains committed to its founding ideals: enlightenment through knowledge, preservation of sacred traditions, and service to humanity. Our influence continues to shape the course of human progress.",
      image: "/images/gh20205b690rp.jpg",
      icon: Globe
    },
  ];

  const stats = [
    { value: "248", label: "Years of History", icon: Calendar },
    { value: "50K+", label: "Global Members", icon: Users },
    { value: "120+", label: "Countries", icon: Globe },
    { value: "7", label: "Continents", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-[#0A1929]">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section with Parallax */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{ backgroundImage: "url('/0730944070-illu-1/images/baroque-architecture-grandeur-stockcake.webp')" }}
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
            
            <p className="text-[#d4af37] text-xs tracking-[0.2em] mb-4 uppercase font-medium">A Legacy Spanning Centuries</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              Our History
            </h1>
            
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>

            <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6 border border-[#d4af37]/30">
              <Eye className="w-8 h-8 text-[#d4af37]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6 font-cinzel">
              From Bavaria to the World
            </h2>
            <p className="text-xl text-[#c0c0c0] max-w-2xl mx-auto">
              Trace the evolution of our distinguished brotherhood through two and a half centuries 
              of perseverance, adaptation, and unwavering commitment to enlightenment.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">

            {/* Stats Overview */}
            <section className="mb-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-gradient-to-br from-[#0D2137] to-[#112240] border border-[#d4af37]/20 rounded-lg text-center hover:border-[#d4af37]/40 transition-colors card-shine"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">{stat.value}</div>
                    <div className="text-sm text-[#c0c0c0]">{stat.label}</div>
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

            {/* Introduction */}
            <section className="mb-20">
              <div className="relative p-8 rounded-lg overflow-hidden border border-[#d4af37]/20 image-frame">
                <Image 
                  src="/0730944070-illu-1/images/rose-flower-and-vintage-love-letter-i-love-you-valentine-card-photo.jpg" 
                  alt="Ancient Manuscript"
                  fill
                  className="object-cover -z-10 opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
                
                <div className="relative z-10">
                  <p className="text-[#c0c0c0] text-lg leading-relaxed">
                    From our origins in 1776 Bavaria to our modern presence in New York, the Illuminati 
                    has weathered persecution, adapted to change, and emerged stronger through every trial. 
                    Our history is one of resilience, wisdom, and the unbroken transmission of sacred 
                    knowledge from generation to generation.
                  </p>
                </div>
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Timeline */}
            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel text-center">
                The Chronology of Light
              </h2>
              <p className="text-[#c0c0c0] text-lg text-center max-w-3xl mx-auto mb-12">
                Each era in our history represents a chapter in the ongoing story of enlightenment, 
                with its own challenges, triumphs, and enduring contributions to human progress.
              </p>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-[#d4af37]/20 hidden md:block" style={{ transform: 'translateX(-50%)' }} />
                
                <div className="space-y-12 md:space-y-16">
                  {timeline.map((item, index) => (
                    <div 
                      key={index} 
                      className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* Content */}
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <div className={`p-6 bg-[#0D2137] border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-colors card-shine ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'} max-w-xl`}>
                          {/* Date and Location */}
                          <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                            <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-sm font-bold rounded-full">
                              {item.date}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-[#c0c0c0]">
                              <MapPin className="w-3 h-3" />
                              {item.location}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-[#FFFFFF] mb-3 font-cinzel">{item.title}</h3>
                          <p className="text-[#c0c0c0] text-base leading-relaxed mb-4">{item.description}</p>
                          <p className="text-[#9a9a9a] text-sm italic border-l-2 border-[#d4af37]/20 pl-4">{item.details}</p>
                        </div>
                      </div>
                      
                      {/* Center Icon */}
                      <div className="absolute left-6 md:left-1/2 top-6 md:top-8 transform md:-translate-x-1/2 z-10 hidden md:block">
                        <div className="w-16 h-16 rounded-full bg-[#112240] border-4 border-[#d4af37]/30 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-[#d4af37]" />
                        </div>
                      </div>
                      
                      {/* Mobile Icon */}
                      <div className="absolute left-4 top-6 md:hidden">
                        <div className="w-8 h-8 rounded-full bg-[#112240] border-2 border-[#d4af37]/30 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-[#d4af37]" />
                        </div>
                      </div>
                      
                      {/* Image */}
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                        <div className={`relative h-48 md:h-64 rounded-lg overflow-hidden border border-[#d4af37]/10 image-frame ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} max-w-xl`}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent" />
                          <div className="frame-corner frame-corner-tl" />
                          <div className="frame-corner frame-corner-tr" />
                          <div className="frame-corner frame-corner-bl" />
                          <div className="frame-corner frame-corner-br" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3 justify-center mb-20">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/30" />
              <div className="w-2 h-2 bg-[#d4af37] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/30" />
            </div>

            {/* Founder Section */}
            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden border border-[#d4af37]/20 image-frame">
                  <Image
                    src="/0730944070-illu-1/images/Adam-Weishaupt.webp"
                    alt="Adam Weishaupt"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929] via-transparent to-transparent" />
                  <div className="frame-corner frame-corner-tl" />
                  <div className="frame-corner frame-corner-tr" />
                  <div className="frame-corner frame-corner-bl" />
                  <div className="frame-corner frame-corner-br" />
                </div>
                
                <div>
                  <span className="text-[#d4af37] text-sm font-bold tracking-wider uppercase mb-4 block">Founder</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">
                    Adam Weishaupt
                  </h2>
                  <p className="text-[#c0c0c0] text-lg leading-relaxed mb-4">
                    1748 - 1830
                  </p>
                  <p className="text-[#c0c0c0] text-base leading-relaxed mb-4">
                    Born in Ingolstadt, Bavaria, Adam Weishaupt was a professor of canon law who grew 
                    disillusioned with the religious and political restrictions of his time. Inspired by 
                    the Enlightenment philosophers, he envisioned a society dedicated to reason, moral 
                    perfection, and freedom from superstition.
                  </p>
                  <p className="text-[#c0c0c0] text-base leading-relaxed mb-4">
                    On May 1, 1776, he gathered five devoted students and founded what would become the 
                    most influential secret society in history. His vision of a world guided by wisdom 
                    rather than dogma continues to inspire our work today.
                  </p>
                  <div className="p-4 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg mt-6 hover:border-[#d4af37]/30 transition-colors">
                    <p className="text-[#d4af37] italic text-sm">
                      &ldquo;The illumination, the instruction of men, is the highest duty of every 
                      enlightened being.&rdquo;
                    </p>
                    <p className="text-[#c0c0c0] text-xs mt-2">— Adam Weishaupt</p>
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

            {/* Legacy Section */}
            <section className="mb-20">
              <div className="relative p-8 md:p-12 rounded-lg overflow-hidden border border-[#d4af37]/20">
                <Image 
                  src="/0730944070-illu-1/images/wisdom-through-time-stockcake.webp" 
                  alt="Wisdom Through Time"
                  fill
                  className="object-cover -z-10 opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#112240] via-[#0D2137] to-[#112240]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
                
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6 border border-[#d4af37]/30">
                    <BookOpen className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#FFFFFF] mb-6 font-cinzel">
                    A Living Legacy
                  </h3>
                  <p className="text-[#c0c0c0] text-lg leading-relaxed mb-6">
                    For 248 years, the Illuminati has stood as a guardian of sacred knowledge and a 
                    beacon for those seeking enlightenment. From the darkness of persecution to the 
                    light of modern understanding, our brotherhood has adapted while remaining true to 
                    the principles that gave it birth.
                  </p>
                  <p className="text-[#d4af37] italic font-cinzel">
                    The past informs our present; the present shapes our future.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="relative py-16 rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0 parallax-bg"
                style={{ backgroundImage: "url('/0730944070-illu-1/images/0f71c97e55617fd8862ab017563d953e.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#112240]/95 via-[#0D2137]/95 to-[#112240]/95" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
              
              <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-cinzel">
                  Become Part of History
                </h2>
                <p className="text-[#c0c0c0] text-lg mb-8">
                  Join the continuing story of enlightenment. Your journey could become the next chapter 
                  in our sacred chronicle of wisdom and service.
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
