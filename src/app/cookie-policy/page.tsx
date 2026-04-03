import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Cookie Policy | Illuminati Lodge of New York",
  description: "Cookie Policy for the Illuminati Lodge of New York website.",
};

export default function CookiePolicyPage() {
  return (
    <PageLayout title="Cookie Policy" subtitle="Legal">
      <div className="prose prose-invert max-w-none">
        <p className="text-[#9a9a9a] text-sm mb-8">Last Updated: January 2026</p>

        <div className="space-y-8 text-[#c0c0c0] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">How We Use Cookies</h2>
            <p className="mb-4">The Illuminati Lodge of New York uses cookies for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              <li><strong>Security Cookies:</strong> Help protect against malicious activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Types of Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#d4af37]/20 mt-4">
                <thead>
                  <tr className="bg-[#0D2137]">
                    <th className="border border-[#d4af37]/20 p-3 text-left text-[#d4af37]">Cookie Type</th>
                    <th className="border border-[#d4af37]/20 p-3 text-left text-[#d4af37]">Purpose</th>
                    <th className="border border-[#d4af37]/20 p-3 text-left text-[#d4af37]">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#d4af37]/20 p-3">Session</td>
                    <td className="border border-[#d4af37]/20 p-3">Maintain your session state</td>
                    <td className="border border-[#d4af37]/20 p-3">Until browser closed</td>
                  </tr>
                  <tr className="bg-[#0D2137]">
                    <td className="border border-[#d4af37]/20 p-3">Analytics</td>
                    <td className="border border-[#d4af37]/20 p-3">Track website usage</td>
                    <td className="border border-[#d4af37]/20 p-3">Up to 2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-[#d4af37]/20 p-3">Preference</td>
                    <td className="border border-[#d4af37]/20 p-3">Remember your preferences</td>
                    <td className="border border-[#d4af37]/20 p-3">Up to 1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can typically:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies from specific sites</li>
              <li>Block all cookies from all sites</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="mt-4">
              Please note that disabling cookies may affect the functionality of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Third-Party Cookies</h2>
            <p>
              Some cookies may be placed by third-party services that appear on our pages. We do not control these cookies. Please check the relevant third-party website for more information about their cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-4 font-cinzel">Contact Us</h2>
            <p>
              For questions about our use of cookies, contact us at privacy@illuminati-ny.org.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
