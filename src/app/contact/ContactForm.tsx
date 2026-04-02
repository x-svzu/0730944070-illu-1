"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message. We will respond within 2-3 business days.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h2 className="text-2xl font-bold text-[#FFFFFF] mb-6 font-cinzel">Get in Touch</h2>
        <p className="text-[#c0c0c0] text-lg leading-relaxed mb-8">
          We welcome inquiries from seekers of knowledge, potential members, and those interested in our philanthropic work. Our team responds to all legitimate inquiries within 2-3 business days.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#FFFFFF] mb-1">Address</h3>
              <p className="text-[#9a9a9a]">666 Fifth Avenue<br />New York, NY 10103</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#FFFFFF] mb-1">Phone</h3>
              <p className="text-[#9a9a9a]">+1 (212) 555-0177</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#FFFFFF] mb-1">Email</h3>
              <p className="text-[#9a9a9a]">contact@illuminati-ny.org</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#FFFFFF] mb-1">Hours</h3>
              <p className="text-[#9a9a9a]">Monday - Friday: 9:00 AM - 6:00 PM EST<br />Weekend: By appointment only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <div className="p-8 bg-[#0D2137] border border-[#d4af37]/20 rounded-lg">
          <h2 className="text-2xl font-bold text-[#FFFFFF] mb-6 font-cinzel">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-[#d4af37] mb-2">Your Name *</label>
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

            <div>
              <label className="block text-sm text-[#d4af37] mb-2">Subject *</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors"
                placeholder="What is your inquiry about?"
              />
            </div>

            <div>
              <label className="block text-sm text-[#d4af37] mb-2">Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0A1929] border border-[#d4af37]/30 rounded px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c9a431] text-[#0A1929] font-semibold px-8 py-4 rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
