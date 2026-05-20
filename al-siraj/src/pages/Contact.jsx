import { useState } from "react";
import { MapPin, Phone, Mail, Send, Heart, Users } from "lucide-react";
import { Section, SectionLabel, SectionTitle } from "../components/Section";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionLabel>Contact Us</SectionLabel>
          <SectionTitle className="max-w-xl mb-6">
            Get in touch. We'd love to hear from you.
          </SectionTitle>
          <p className="text-gray-600 max-w-md">
            Whether you want to donate, volunteer, partner, or simply ask a question — our team is here.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14">
          {/* Contact info */}
          <div>
            <h3 className="font-display font-bold text-2xl text-brand-dark mb-8">Our Information</h3>

            <div className="space-y-5 mb-10">
              {[
                { icon: MapPin, label: "Address", value: "17-Abid Majeed Road, Lahore Cantt" },
                { icon: MapPin, label: "Our project Area", value: "Al Siraj Welfare Foundation Chak No.241/JB Mangoana,Bhowana,Chiniot" },
                { icon: Phone, label: "Phone", value: "042-36316430-31" },
                { icon: Mail, label: "Email", value: "alsirajwelfarefoundation@gmail.com" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-brand-dark font-medium text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Ways to help */}
            <div className="bg-brand-light rounded-2xl p-6">
              <h4 className="font-semibold text-brand-dark mb-4 text-sm">Ways to Support</h4>
              <div className="space-y-3">
                {[
                  { icon: Heart, title: "Donate", desc: "One-time or recurring financial support" },
                  { icon: Users, title: "Volunteer", desc: "Give your time and skills to the mission" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-brand-dark font-semibold text-sm">{title}</p>
                      <p className="text-gray-500 text-xs">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="font-display font-bold text-2xl text-brand-dark mb-8">Send a Message</h3>

            {sent ? (
              <div className="bg-brand-light rounded-2xl p-10 text-center border border-green-200">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-white" />
                </div>
                <h4 className="font-display font-bold text-xl text-brand-dark mb-2">Message Sent!</h4>
                <p className="text-gray-600 text-sm">
                  Thank you for reaching out. We'll get back to you within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition bg-white text-gray-700"
                  >
                    <option value="">Select a subject</option>
                    <option value="donate">I want to donate</option>
                    <option value="volunteer">I want to volunteer</option>
                    <option value="partner">Partnership inquiry</option>
                    <option value="report">Request annual report</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-mid text-white font-semibold py-3.5 rounded-xl transition-colors"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
