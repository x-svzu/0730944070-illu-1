import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Privacy Policy | Illuminati Lodge of New York",
  description: "Privacy Policy for the Illuminati Lodge of New York website.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy" subtitle="Legal">
      <div className="prose prose-invert max-w-none">
        <p className="text-[#9a9a9a] text-sm mb-8">Last Updated: January 2026</p>

        <div className="space-y-8 text-[#c0c0c0] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Introduction</h2>
            <p>
              The Illuminati Lodge of New York (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or interact with our organization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Application materials for membership</li>
              <li>Communications you send to us</li>
              <li>Technical data about your visit (IP address, browser type, pages visited)</li>
              <li>Newsletter subscription information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">How We Use Your Information</h2>
            <p className="mb-4">We use collected information for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Processing membership applications</li>
              <li>Responding to inquiries</li>
              <li>Sending newsletters and communications</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to trusted partners who assist us in operating our website and conducting our business.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Contact Us</h2>
            <p>
              For questions about this privacy policy or our data practices, contact us at privacy@illuminati-ny.org.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
