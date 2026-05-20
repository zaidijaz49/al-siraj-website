import { Section, SectionLabel, SectionTitle } from "../components/Section";
import { ChevronRight } from "lucide-react";

const programs = [
  {
    category: "Educational Excellence",
    desc: "Quality, affordable schooling from primary through college, with a 100% board pass rate.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    institutions: [
      {
        name: "Al-Fatima Grammar School",
        detail: "Primary and middle school education for boys and girls. Curriculum includes core subjects with Islamic studies.",
      },
      {
        name: "Al-Fatima Grammar Secondary School",
        detail: "Matriculation-level schooling with 100% board pass rate. Strong focus on STEM and character building.",
      },
      {
        name: "Bakhtawar Girls College",
        detail: "Intermediate-level college for girls, offering FA and FSc programs in a safe, supportive environment.",
      },
    ],
  },
  {
    category: "Healthcare & Welfare",
    desc: "Free clinics and welfare support for underserved families across our communities.",
    img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
    institutions: [
      {
        name: "Fatima-Tu-Zahra Dispensary",
        detail: "Free outpatient clinic providing consultations, medicines, and basic diagnostics to hundreds of patients monthly.",
      },
      {
        name: "Basheera Welfare Program",
        detail: "Monthly financial assistance for widows, orphans, and families facing extreme hardship.",
      },
      {
        name: "Sughara Welfare Program",
        detail: "Targeted support for elderly and disabled individuals within the community.",
      },
    ],
  },
  {
    category: "Community Development",
    desc: "Safe housing, livelihood skills, and partnerships that uplift entire neighborhoods.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    institutions: [
      {
        name: "Al-Fatima Girls Hostel",
        detail: "Safe and affordable residential facility for female students pursuing higher education away from home.",
      },
      {
        name: "Vocational & IT Training",
        detail: "Skills development courses in tailoring, embroidery, computer literacy, and more for women and youth.",
      },
      {
        name: "Institutional Assistance",
        detail: "Financial and operational support extended to partner welfare organizations across Pakistan.",
      },
    ],
  },
];

export default function Programs() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel>Our Programs</SectionLabel>
          <SectionTitle className="max-w-2xl mb-6">
            Holistic care for every stage of life
          </SectionTitle>
          <p className="text-gray-600 max-w-xl">
            From early education to vocational empowerment, we serve communities through three interconnected pillars.
          </p>
        </div>
      </section>

      {/* Program sections */}
      {programs.map((prog, idx) => (
        <Section key={prog.category} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className={`grid md:grid-cols-2 gap-12 items-start ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
              <div className={idx % 2 !== 0 ? "md:order-2" : ""}>
                <img
                  src={prog.img}
                  alt={prog.category}
                  className="rounded-2xl w-full h-64 object-cover"
                />
              </div>
              <div className={idx % 2 !== 0 ? "md:order-1" : ""}>
                <SectionLabel>{prog.category}</SectionLabel>
                <SectionTitle className="mb-3">{prog.category}</SectionTitle>
                <p className="text-gray-500 mb-7">{prog.desc}</p>
                <div className="space-y-4">
                  {prog.institutions.map((inst) => (
                    <div key={inst.name} className="border-l-2 border-brand pl-4">
                      <h4 className="font-semibold text-brand-dark text-sm mb-1">{inst.name}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{inst.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
