import { Section, SectionLabel, SectionTitle } from "../components/Section";
import Annual from "../assets/reports/Annual.pdf"

const stats = [
  { value: "Rs. 60.53M", label: "Total Income", desc: "Total funds received in FY2025" },
  { value: "Rs. 45.53M", label: "Program Allocation", desc: "Directly spent on welfare programs" },
  { value: "40", label: "Institutions Supported", desc: "Partner organizations nationwide" },
  { value: "350", label: "Welfare Cases", desc: "Families assisted with direct aid" },
  { value: "100%", label: "Board Pass Rate", desc: "Students passing board exams" },
  { value: "5.16%", label: "Admin Expense Ratio", desc: "Among the lowest in the sector" },
];

const years = [
  { year: "2012", milestone: "Foundation established in Lahore with Al-Fatima Grammar School." },
  { year: "2014", milestone: "Fatima-Tu-Zahra Dispensary opened, providing free healthcare." },
  { year: "2016", milestone: "Bakhtawar Girls College inaugurated — expanding girls' education." },
  { year: "2018", milestone: "Vocational & IT Training program launched for women." },
  { year: "2020", milestone: "Girls Hostel completed, enabling safe residential learning." },
  { year: "2022", milestone: "Reached 40+ institutional partnerships across Pakistan." },
  { year: "2025", milestone: "Rs. 60.53M income — highest ever, reflecting growing trust." },
];

export default function Impact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel>Impact &amp; Reports</SectionLabel>
          <SectionTitle className="max-w-2xl mb-6">
            Transparency in every rupee, dignity in every life
          </SectionTitle>
          <p className="text-gray-600 max-w-xl">
            Every year we publish audited financial statements and impact reports. Here's what your trust has built.
          </p>
        </div>
      </section>

      {/* Stats dark section */}
      <Section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-brand-light/70 text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-6 h-px bg-brand-light/50 inline-block" />
            Our Impact
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-3">
            Numbers that tell our story
          </h2>
          <p className="text-white/50 text-sm mb-14">
            Audited results from FY2025 — every rupee accounted for, every life valued.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map(({ value, label, desc }) => (
              <div key={label} className="bg-brand/30 border border-brand/50 rounded-2xl p-6 text-left">
                <div className="font-display font-bold text-3xl text-white mb-1">{value}</div>
                <div className="text-white/80 text-sm font-medium">{label}</div>
                <div className="text-white/40 text-xs mt-1">{desc}</div>
                <div className="mt-4 h-px bg-white/20 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>Our Journey</SectionLabel>
            <SectionTitle className="text-center">13 years of milestones</SectionTitle>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-brand-light hidden md:block" />

            <div className="space-y-10">
              {years.map((item, i) => (
                <div key={item.year} className={`flex gap-6 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    {i % 2 === 0 && (
                      <p className="text-gray-600 text-sm leading-relaxed pt-1">{item.milestone}</p>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-0 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold text-xs font-sans z-10">
                      {item.year}
                    </div>
                  </div>

                  <div className={`hidden md:block flex-1 ${i % 2 !== 0 ? "text-left" : ""}`}>
                    {i % 2 !== 0 && (
                      <p className="text-gray-600 text-sm leading-relaxed pt-1">{item.milestone}</p>
                    )}
                  </div>

                  {/* Mobile view */}
                  <div className="md:hidden flex-1">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Annual Report CTA */}
      <Section className="bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <SectionLabel>Financial Transparency</SectionLabel>
          <SectionTitle className="text-center mb-5">
            Clean audit. Open books.
          </SectionTitle>
          <p className="text-gray-600 mb-8">
            Al-Siraj has maintained a clean audit opinion every year since inception.
            Our administrative expense ratio of just 5.16% means more of your donation reaches those who need it.
          </p>
          <a
          href={Annual}
          download
            className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-7 py-3.5 rounded-full hover:bg-brand-mid transition-colors no-underline"
          >
            Request Annual Report
          </a>
        </div>
      </Section>
    </>
  );
}
