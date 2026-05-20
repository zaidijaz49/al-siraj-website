import { Link } from "react-router-dom";
import {
  Heart, Users, Shield, Leaf, Building2, BookOpen, Stethoscope,
  Home as HomeIcon, GraduationCap, Star, ChevronRight, ArrowRight
} from "lucide-react";
import { Section, SectionLabel, SectionTitle } from "../components/Section";
import { useState } from "react";
// Add this import at the top of Home.jsx
import { FileText, Download, ExternalLink, Calendar } from "lucide-react";
import Report2025 from "../assets/reports/2023.pdf";
import Report2024 from "../assets/reports/2024.pdf";
import Report2023 from "../assets/reports/2025.pdf";
import Img12 from "../assets/img12.jpeg"
import Img15 from "../assets/img15.jpeg"
import Img3 from "../assets/img3.jpeg"
import Img13 from "../assets/img13.jpeg"
import Img1 from "../assets/img1.jpeg"

// ── Hero ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-brand-dark">
        <img
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=1600&q=80"
          alt="Children smiling"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="text-brand-light">✦</span>
          Serving Pakistan Since 2012
        </div>

        <h1 className="font-display font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-3xl mb-6">
          Empowering
          Communities Through{" "}
          <span className="text-brand-light">Education &amp;</span>{" "}
          <span className="text-brand-light">Healthcare</span>
        </h1>

        <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
          Since 2012, Al-Siraj Welfare Foundation has been transforming lives through
          accessible education, healthcare, and community development across Pakistan.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-brand hover:bg-brand-mid text-white font-semibold px-7 py-3.5 rounded-full transition-colors no-underline"
          >
            <Heart size={16} /> Donate Now
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full transition-colors no-underline backdrop-blur"
          >
            <Users size={16} /> Become a Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Who We Are ────────────────────────────────────────────────────
function WhoWeAre() {
  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionLabel>Who We Are</SectionLabel>
        <SectionTitle className="max-w-xl mb-12">
          A foundation rooted in compassion and accountability
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with badge */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={Img12}
                alt="Community"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 right-6 bg-white rounded-2xl shadow-xl px-6 py-4 border border-green-100">
              <div className="text-3xl font-display font-bold text-brand">13+</div>
              <div className="text-sm text-gray-500 mt-0.5">Years uplifting communities<br />across Pakistan</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-7">
              Established in 2012, Al-Siraj Welfare Foundation is dedicated to bridging
              the socio-economic divide in Pakistan through accessible education, healthcare
              services, girls' empowerment, and vocational training.
            </p>

            <ul className="space-y-4">
              {[
                { icon: Shield, text: "Clean audit opinion & full financial transparency" },
                { icon: Leaf, text: "Shariah-compliant, sustainability-focused investments" },
                { icon: Building2, text: "40 institutions supported nationwide" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-brand" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{text}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand transition-colors no-underline"
            >
              Read our story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ── Vision & Mission ──────────────────────────────────────────────
function VisionMission() {
  const pillars = [
    { icon: BookOpen, label: "Free & Affordable Education" },
    { icon: Stethoscope, label: "Healthcare Services" },
    { icon: HomeIcon, label: "Girls Hostel Facilities" },
    { icon: GraduationCap, label: "Vocational Training" },
  ];

  return (
    <Section className="bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionLabel>Vision &amp; Mission</SectionLabel>
          <SectionTitle className="text-center">What drives us forward</SectionTitle>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 border border-green-100">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-4">Vision</p>
            <p className="text-gray-700 leading-relaxed">
              To build a compassionate and progressive society where accessible education,
              quality healthcare, and ethical community development empower individuals
              and uplift communities for a better future.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-brand rounded-2xl p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">Mission</p>
            <p className="text-white font-medium leading-relaxed text-lg">
              We believe that every individual deserves the opportunity to learn, grow,
              and thrive regardless of economic circumstances.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pillars.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-white rounded-2xl p-6 border border-green-100 flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center">
                <Icon size={18} className="text-brand" />
              </div>
              <p className="text-brand-dark font-semibold text-sm leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── Programs Preview ──────────────────────────────────────────────
function ProgramsPreview() {
  const programs = [
    {
      title: "Educational Excellence",
      desc: "Quality, affordable schooling from primary through college, with a 100% board pass rate.",
      items: ["Al-Fatima Grammar School", "Al-Fatima Grammar Secondary School", "Bakhtawar Girls College"],
      img: Img15,
    },
    {
      title: "Healthcare & Welfare",
      desc: "Free clinics and welfare support for underserved families across our communities.",
      items: ["Fatima-Tu-Zahra Dispensary", "Basheera & Sughara Welfare Program"],
      img: Img3,
    },
    {
      title: "Community Development",
      desc: "Safe housing, livelihood skills, and partnerships that uplift entire neighborhoods.",
      items: ["Al-Fatima Girls Hostel", "Vocational & IT Training", "Institutional Assistance"],
      img: Img13,
    },
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionLabel>Our Programs</SectionLabel>
        <SectionTitle className="max-w-lg mb-3">
          Holistic care for every stage of life
        </SectionTitle>
        <p className="text-gray-500 mb-12 max-w-xl">
          From early education to vocational empowerment, we serve communities through three interconnected pillars.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div key={prog.title} className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <img src={prog.img} alt={prog.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-brand-dark mb-2">{prog.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{prog.desc}</p>
                <ul className="space-y-1 mb-5">
                  {prog.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-brand mt-1.5 text-xs">•</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-1 text-brand font-semibold text-sm hover:gap-2 transition-all no-underline"
                >
                  Learn more <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── Impact Stats ──────────────────────────────────────────────────
function ImpactStats() {
  const stats = [
    { value: "Rs. 60.53M", label: "Total Income" },
    { value: "Rs. 45.53M", label: "Program Allocation" },
    { value: "40", label: "Institutions Supported" },
    { value: "350", label: "Welfare Cases" },
    { value: "100%", label: "Board Pass Rate" },
    { value: "5.16%", label: "Admin Expense Ratio" },
  ];

  return (
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
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-brand/30 border border-brand/50 rounded-2xl p-6 text-left">
              <div className="font-display font-bold text-3xl text-white mb-1">{value}</div>
              <div className="text-white/60 text-sm">{label}</div>
              <div className="mt-4 h-px bg-white/20 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={Img1}
          alt="CTA background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/75" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
          Together, We Can Build a Better Future
        </h2>
        <p className="text-white/70 mb-9 text-lg">
          Your support helps provide education, healthcare, and hope to underserved communities.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-white text-brand-dark font-semibold px-7 py-3.5 rounded-full hover:bg-brand-light transition-colors no-underline"
          >
            <Heart size={16} /> Donate Now
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors no-underline"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
function AnnualReports() {
  const reports = [
    {
      year: "2025",
      title: "Annual Report — 30 June 2025",
      desc: "Audited financial statements and program impact for FY2025. Highest income recorded to date.",
      file: Report2025,
      size: "PDF",
      highlight: true,
    },
    {
      year: "2024",
      title: "Annual Report — 30 June 2024",
      desc: "Full audited accounts and welfare program outcomes for the financial year ending June 2024.",
      file: Report2024,
      size: "PDF",
    },
    {
      year: "2023",
      title: "Annual Report — 30 June 2023",
      desc: "Certified financial report and impact summary covering all programs for FY2023.",
      file: Report2023,
      size: "PDF",
    },
  ];

  return (
    <Section className="bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Transparency &amp; Reports</SectionLabel>
            <SectionTitle>Annual Reports</SectionTitle>
            <p className="text-gray-500 mt-3 max-w-lg">
              Every rupee accounted for. Download our independently audited annual
              reports and see exactly how your trust is honoured.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-brand text-white px-5 py-3 rounded-2xl shrink-0 self-start md:self-auto">
            <div className="w-2 h-2 rounded-full bg-green-300" />
            <span className="text-sm font-semibold">Clean Audit — Every Year</span>
          </div>
        </div>

        {/* Report cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {reports.map((report) => (
            <div
              key={report.year}
              className={`rounded-2xl p-6 flex flex-col gap-4 border transition-shadow hover:shadow-md ${
                report.highlight
                  ? "bg-brand border-brand/30 text-white"
                  : "bg-white border-gray-100"
              }`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    report.highlight ? "bg-white/15" : "bg-brand-light"
                  }`}
                >
                  <FileText
                    size={22}
                    className={report.highlight ? "text-white" : "text-brand"}
                  />
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    report.highlight
                      ? "bg-white/20 text-white"
                      : "bg-brand-light text-brand"
                  }`}
                >
                  {report.highlight ? "Latest" : report.year}
                </span>
              </div>

              {/* Title & desc */}
              <div className="flex-1">
                <div
                  className={`flex items-center gap-1.5 text-xs font-medium mb-1.5 ${
                    report.highlight ? "text-white/70" : "text-gray-400"
                  }`}
                >
                  <Calendar size={12} />
                  {report.year}
                </div>
                <h3
                  className={`font-display font-bold text-lg leading-snug mb-2 ${
                    report.highlight ? "text-white" : "text-brand-dark"
                  }`}
                >
                  {report.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    report.highlight ? "text-white/75" : "text-gray-500"
                  }`}
                >
                  {report.desc}
                </p>
              </div>

              {/* Action buttons — ✅ fixed missing opening <a> tags */}
              <div className="flex gap-2 pt-2 border-t border-white/10">
                <a                              
                  href={report.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-colors no-underline ${
                    report.highlight
                      ? "bg-white text-brand hover:bg-brand-light"
                      : "bg-brand text-white hover:bg-brand-mid"
                  }`}
                >
                  <ExternalLink size={13} /> View
                </a>
                <a                            
                  href={report.file}
                  download
                  className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-colors no-underline ${
                    report.highlight
                      ? "bg-white/15 text-white hover:bg-white/25"
                      : "bg-brand-light text-brand hover:bg-green-100"
                  }`}
                >
                  <Download size={13} /> Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note — ✅ fixed missing opening <a> tag */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Reports are independently audited. For older reports, email{" "}
          <a                               
            href="mailto:alsirajwelfarefoundation@gmail.com"
            className="text-brand hover:underline"
          >
            alsirajwelfarefoundation@gmail.com
          </a>
        </p>
      </div>
    </Section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      quote: "Watching the girls hostel grow over the years has been a blessing. This is what real community looks like.",
      name: "Dr. Saima K.",
      role: "Community Member",
    },
    {
      quote: "Transparent, accountable, and genuinely impactful. Al-Siraj sets the standard for ethical philanthropy.",
      name: "Hassan A.",
      role: "Long-time Donor",
    },
    {
      quote: "Al-Siraj gave my daughter a chance at education she never would have had. We are forever grateful.",
      name: "Rukhsana B.",
      role: "Parent",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <SectionLabel>Voices</SectionLabel>
        <SectionTitle className="text-center mb-12">
          Stories from the communities we serve
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-8">
          {testimonials.slice(0, 2).map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 text-left">
              <div className="text-brand text-3xl font-display leading-none mb-3">"</div>
              <p className="text-gray-700 leading-relaxed mb-5 italic">"{t.quote}"</p>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-brand text-brand" />
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-brand-dark text-sm">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all ${
                active === i ? "w-6 h-2.5 bg-brand" : "w-2.5 h-2.5 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── Main Export ───────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <VisionMission />
      <ProgramsPreview />
      <ImpactStats />
      <CTABanner />
      <AnnualReports/>
      <Testimonials />
    </>
  );
}
