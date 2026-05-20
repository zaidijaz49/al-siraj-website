import { Link } from "react-router-dom";
import { Globe, Link2, Share2, Rss, MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-white font-bold text-base">
              A
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white leading-tight">Al-Siraj</div>
              <div className="text-[9px] uppercase tracking-widest text-white/50">Welfare Foundation</div>
            </div>
          </div>
          <p className="text-sm text-white/65 leading-relaxed">
            Empowering communities across Pakistan through accessible education, healthcare, and ethical development since 2012.
          </p>
          <div className="flex gap-2.5 mt-5">
            {[Globe, Link2, Share2, Rss].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/programs", "Our Programs"],
              ["/impact", "Impact & Reports"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/60 hover:text-white transition-colors no-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Programs</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            {[
              "Al-Fatima Grammar School",
              "Bakhtawar Girls College",
              "Fatima-Tu-Zahra Dispensary",
              "Girls Hostel",
              "Vocational & IT Training",
            ].map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Stay Connected</h4>
          <ul className="space-y-3 text-sm text-white/65 mb-5">
            <li className="flex gap-2.5 items-start">
              <MapPin size={15} className="mt-0.5 shrink-0 text-white/50" />
              17-Abid Majeed Road, Lahore Cantt
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone size={15} className="shrink-0 text-white/50" />
              042-36316430-31
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail size={15} className="shrink-0 text-white/50" />
              alsirajwelfarefoundation@gmail.com
            </li>
          </ul>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
            />
            <button className="bg-brand hover:bg-brand-mid transition-colors rounded-lg px-3 py-2 shrink-0">
              <Send size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <p>© 2026 Al-Siraj Welfare Foundation. All Rights Reserved.</p>
          <p>Built with compassion for a better tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
