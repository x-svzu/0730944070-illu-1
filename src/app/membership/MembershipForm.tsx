"use client";

import { useState } from "react";
import { Eye, Check, ArrowRight } from "lucide-react";

const benefits = [
  "Access to ancient wisdom and teachings",
  "Network of influential global leaders",
  "Personal and professional development",
  "Philanthropic opportunities",
  "Exclusive events and gatherings",
  "Lifetime brotherhood support",
];

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest. Your application has been received.");
  };

  return (
    <div className="prose prose-invert max-w-none">
      <div className="space-y-6 text-[#c0c0c0] text-lg leading-relaxed mb-12">
        <p>
          Membership in the Illuminati Lodge of New York is not merely an affiliation—it is a commitment to the pursuit of enlightenment and the betterment of humanity. We seek individuals of integrity, vision, and dedication who are ready to walk the path of wisdom.
        </p>
      </div>

      {/* Benefits */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#FFFFFF] mb-6 font-cinzel">What Membership Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-[#0D2137] border border-[#d4af37]/10 rounded-lg">
              <Check className="w-5 h-5 text-[#d4af37]" />
              <span className="text-[#c0c0c0]">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="p-8 bg-[#0D2137] border border-[#d4af37]/20 rounded-lg">
        <h2 className="text-2xl font-bold text-[#FFFFFF] mb-6 font-cinzel flex items-center gap-3">
          <Eye className="w-6 h-6 text-[#d4af37]" />
          Apply for Membership
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-[#d4af37] mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm text-[#d4af37] mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#d4af37] mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label className="block text-sm text-[#d4af37] mb-2">Why do you seek enlightenment? *</label>
            <textarea
              required
              rows={4}
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
              placeholder="Share your motivation for seeking membership..."
            />
          </div>

          <div>
            <label className="block text-sm text-[#d4af37] mb-2">Relevant Experience or Background</label>
            <textarea
              rows={3}
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
              placeholder="Share any relevant experience or background..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-4 rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 cursor-pointer"
          >
            Submit Application
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      <p className="text-sm text-[#666] mt-6 italic">
        All applications are reviewed by our membership committee. Due to the volume of inquiries, please allow 2-4 weeks for a response. Not all applicants are accepted.
      </p>
    </div>
  );
}
