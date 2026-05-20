import { Section, SectionLabel, SectionTitle } from "../components/Section";
import { Shield, Leaf, Building2, Users } from "lucide-react";

const team = [
  { initials: "MR", name: "Mr. Muhammad Rafique", role: "Chairman" },
  { initials: "WK", name: "Mr. Waleed Khawar Ahmed", role: "President" },
  { initials: "SR", name: "Ms. Snober Rafique", role: "Vice-President" },
  { initials: "AS", name: "Mr. Ali Saeed", role: "Finance Secretary" },
  { initials: "GA", name: "Mr. Ghufran Ali Khan", role: "Secretary" },
  { initials: "GA", name: "Mr. Gohar Aziz", role: "Member" },
  { initials: "NK", name: "Mr. Nauman Khalid", role: "Member" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel>About Us</SectionLabel>
          <SectionTitle className="max-w-2xl mb-6">
            A foundation rooted in compassion and accountability
          </SectionTitle>
          <p className="text-gray-600 max-w-xl leading-relaxed">
            Established in 2012, Al-Siraj Welfare Foundation has been transforming lives across
            Pakistan through accessible education, quality healthcare, and ethical community development.
          </p>
        </div>
      </section>

      {/* Story */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <SectionTitle className="mb-5">How it all began</SectionTitle>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Al-Siraj Welfare Foundation was born from a simple yet powerful belief — that
                every child in Pakistan deserves access to quality education, and every family
                deserves access to basic healthcare, regardless of their economic circumstances.
              </p>
              <p>
                Founded in 2012 by a group of committed individuals in Lahore, we started
                with a single school and a vision to build a compassionate, self-sufficient
                community. Over 13 years, we've grown to support 40 institutions nationwide.
              </p>
              <p>
                Our approach is holistic and sustainable — every initiative we run is
                Shariah-compliant, independently audited, and designed to create lasting change.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
              alt="Our story"
              className="rounded-2xl w-full h-80 object-cover"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 border border-green-100">
              <div className="text-3xl font-display font-bold text-brand">13+</div>
              <div className="text-sm text-gray-500 mt-0.5">Years of impact</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>Vision &amp; Mission</SectionLabel>
            <SectionTitle className="text-center">What drives us forward</SectionTitle>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-8 border border-green-100">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-4">Vision</p>
              <p className="text-gray-700 leading-relaxed">
                To build a compassionate and progressive society where accessible education,
                quality healthcare, and ethical community development empower individuals
                and uplift communities for a better future.
              </p>
            </div>
            <div className="bg-brand rounded-2xl p-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">Mission</p>
              <p className="text-white font-medium leading-relaxed text-lg">
                We believe that every individual deserves the opportunity to learn, grow,
                and thrive regardless of economic circumstances.
              </p>
            </div>
          </div>

          {/* Key values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            {[
              { icon: Shield, label: "Transparency" },
              { icon: Leaf, label: "Sustainability" },
              { icon: Building2, label: "Accountability" },
              { icon: Users, label: "Community" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 border border-green-100 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center">
                  <Icon size={18} className="text-brand" />
                </div>
                <p className="text-brand-dark font-semibold text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <SectionLabel>Leadership</SectionLabel>
          <SectionTitle className="text-center mb-12">
            The team behind the mission
          </SectionTitle>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg">
                  {member.initials}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm leading-snug">{member.name}</p>
                  <p className="text-brand text-xs mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
