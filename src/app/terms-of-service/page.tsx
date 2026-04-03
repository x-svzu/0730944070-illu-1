import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Terms of Service | Illuminati Lodge of New York",
  description: "Terms of Service for the Illuminati Lodge of New York website.",
};

export default function TermsOfServicePage() {
  return (
    <PageLayout title="Terms of Service" subtitle="Legal">
      <div className="prose prose-invert max-w-none">
        <p className="text-[#9a9a9a] text-sm mb-8">Last Updated: January 2026</p>

        <div className="space-y-8 text-[#c0c0c0] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Acceptance of Terms</h2>
            <p>
              By accessing and using the Illuminati Lodge of New York website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Use of Website</h2>
            <p className="mb-4">You agree to use this website only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Infringe upon the rights of others</li>
              <li>Restrict or inhibit anyone&apos;s use of the website</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Transmit any malicious code or harmful content</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of the Illuminati Lodge of New York and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Membership Applications</h2>
            <p>
              Submission of a membership application does not guarantee acceptance. The Illuminati Lodge of New York reserves the right to accept or reject any application at its sole discretion. All information provided in applications must be accurate and complete.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Limitation of Liability</h2>
            <p>
              The Illuminati Lodge of New York shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on any information contained herein. This website is provided &quot;as is&quot; without warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites. Links are provided for convenience only and do not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Modifications</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Contact</h2>
            <p>
              For questions about these Terms of Service, contact us at legal@illuminati-ny.org.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
