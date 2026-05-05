import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Edinz Tech — Custom Software, ERP, AI & Cloud Solutions | Chennai',
};

/* ── reusable mini-components ── */
const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
    style={{ background: 'rgba(232,119,34,.12)', color: '#E87722' }}>
    {children}
  </span>
);

const Btn = ({ href, children, variant = 'primary', lg }: { href: string; children: React.ReactNode; variant?: 'primary' | 'outline' | 'outlineWhite'; lg?: boolean }) => {
  const base = `inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 ${lg ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'}`;
  const styles = {
    primary: { background: '#E87722', color: '#fff' },
    outline: { background: 'transparent', color: '#1B3A6B', border: '2px solid #1B3A6B' },
    outlineWhite: { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,.5)' },
  };
  return <Link href={href} className={base} style={styles[variant]}>{children}</Link>;
};

const services = [
  { icon: '🌐', title: 'Website Design & Development', desc: 'Stunning, responsive websites that convert visitors into customers. Pixel-perfect digital experiences built for speed, SEO, and mobile-first performance.', href: '/edinz/services#web' },
  { icon: '📊', title: 'ERP Solutions', desc: 'Unify your operations with robust, scalable ERP platforms. Finance, HR, inventory, and CRM — centralise your data and automate your workflows.', href: '/edinz/services#erp' },
  { icon: '⚙️', title: 'Full Stack Development', desc: 'Enterprise-grade applications built on Java and Python, front to back. Customer portals, internal tools, or complex business platforms — built to last.', href: '/edinz/services#fullstack' },
  { icon: '🤖', title: 'Artificial Intelligence & ML', desc: 'Turn your data into your greatest competitive advantage. Intelligent automation, predictive analytics, and smart decision-making tools built for real-world impact.', href: '/edinz/services#ai' },
  { icon: '☁️', title: 'Cloud Computing', desc: 'Migrate, modernise, and manage your infrastructure with confidence. Cloud-native architectures that reduce costs and give your team agility.', href: '/edinz/services#cloud' },
];

const whyItems = [
  { icon: '🏆', title: '18+ Years of Group Expertise', desc: 'Built on the deep domain knowledge of the Inspire Softech Group across software, AI, cloud, IoT, and enterprise systems.' },
  { icon: '✅', title: 'ISO 9001:2015 Quality Standards', desc: 'Every project we deliver is governed by global quality benchmarks, ensuring reliability, consistency, and zero compromises.' },
  { icon: '🤝', title: 'Industry-Proven, Innovation-Led', desc: 'Trusted by HCL Technologies, TCS, Wipro, Cognizant, Samsung, and government bodies like ICF and CPCL.' },
  { icon: '🔗', title: 'End-to-End Partnership', desc: 'From discovery to deployment and beyond — we are your long-term technology partner, not just a vendor.' },
];

const stats = [
  { num: '18+', label: 'Years Experience' },
  { num: '1000+', label: 'Projects Delivered' },
  { num: '5000+', label: 'Professionals Trained' },
  { num: '35+', label: 'Academic MoU Partners' },
];

const clients = ['HCL Technologies', 'TCS', 'Wipro', 'Cognizant', 'Samsung', 'Titan', 'ICF', 'CPCL'];

export default function EdinzHomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-[76px]"
        style={{ background: 'linear-gradient(135deg, #0F2347 0%, #1B3A6B 55%, #2a5298 100%)' }}>
        <div className="absolute -left-24 top-24 w-44 h-44 rounded-full bg-white/10 blur-3xl animate-floating" />
        <div className="absolute right-0 top-32 w-32 h-32 rounded-full bg-[#E87722]/20 blur-3xl animate-floating" />
        {/* grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 75% 50%, rgba(232,119,34,.18) 0%, transparent 60%)' }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10 py-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 fade-in-up delay-100"
            style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.9)', border: '1px solid rgba(255,255,255,.2)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E87722' }} />
            An Inspire Softech Group Company
          </div>

          <h1 className="font-black text-white mb-6 leading-[1.1] fade-in-up delay-200" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.4rem)', letterSpacing: '-0.02em' }}>
            Build Smarter.<br />
            <span style={{ color: '#E87722' }}>Scale Faster.</span><br />
            Transform Boldly.
          </h1>

          <p className="text-lg mb-10 max-w-xl leading-relaxed fade-in-up delay-300" style={{ color: 'rgba(255,255,255,.8)' }}>
            Edinz Tech delivers next-generation software solutions — from custom web development and ERP systems
            to AI, Machine Learning, and Cloud Computing — purpose-built to help your business lead in the digital era.
          </p>

          <div className="flex flex-wrap gap-4 fade-in-up delay-400">
            <Btn href="/edinz/services" variant="primary" lg>Explore Our Solutions →</Btn>
            <Btn href="/edinz/about#contact" variant="outlineWhite" lg>Book a Free Consultation</Btn>
          </div>

          {/* hero stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 fade-in-up delay-500" style={{ borderTop: '1px solid rgba(255,255,255,.15)' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-white leading-none">{s.num}</div>
                <div className="text-[10px] font-semibold uppercase tracking-widest mt-1" style={{ color: 'rgba(255,255,255,.55)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div style={{ background: '#E87722' }} className="py-7">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-around gap-6">
            {[
              ['ISO', '9001:2015 Certified'],
              ['AICTE', 'Associated'],
              ['HCL · TCS', 'Wipro · Cognizant'],
              ['ICF · CPCL', 'Samsung · Titan'],
              ['2', 'Offices — Chennai & Bengaluru'],
            ].map(([num, label]) => (
              <div key={num} className="flex items-center gap-3 text-white">
                <span className="text-2xl font-black">{num}</span>
                <span className="text-xs font-semibold uppercase tracking-wide opacity-85 max-w-[90px] leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* visual */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1B3A6B, #2a5298)', aspectRatio: '4/3' }}>
                <div className="text-center p-10" style={{ color: 'rgba(255,255,255,.65)' }}>
                  <div className="text-7xl mb-4 opacity-50">🏢</div>
                  <p className="text-sm font-medium">Olympia Tech Park<br />Chennai – 600032</p>
                </div>
              </div>
              {/* cert badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl p-5 shadow-2xl flex items-center gap-3" style={{ border: '2px solid #E2E8F0' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white font-black"
                  style={{ background: 'linear-gradient(135deg, #E87722, #F5922E)' }}>✓</div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider">Certified Since</div>
                  <div className="text-sm font-bold" style={{ color: '#1B3A6B' }}>ISO 9001:2015</div>
                </div>
              </div>
            </div>

            {/* content */}
            <div>
              <SectionTag>Who We Are</SectionTag>
              <h2 className="text-4xl font-black mb-4 leading-tight" style={{ color: '#1B3A6B' }}>
                Powering Digital Futures <span style={{ color: '#E87722' }}>Since Day One</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Edinz Tech Private Limited is a next-generation software development and technology solutions company —
                and a proud member of the <strong className="text-gray-700">Inspire Softech Group</strong>, a dynamic technology consortium
                with over 18 years of industry experience.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  { icon: '🏛️', text: <><strong className="text-gray-700">Headquartered at Olympia Tech Park, Chennai</strong> with a branch in Bengaluru — serving businesses, enterprises, and academic institutions across India.</> },
                  { icon: '⚡', text: <><strong className="text-gray-700">From full-stack web applications to AI-driven automation,</strong> ERP platforms, and cloud-native architectures — we build technology that works as hard as you do.</> },
                  { icon: '🎓', text: <><strong className="text-gray-700">35+ Academic MoU Partners</strong> — bringing fresh talent pipelines and cutting-edge academic research into our solutions.</> },
                ].map(({ icon, text }, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(232,119,34,.12)' }}>{icon}</div>
                    <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <Btn href="/edinz/about" variant="outline">Learn More About Us →</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24" style={{ background: '#F8F9FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTag>What We Build</SectionTag>
            <h2 className="text-4xl font-black mb-4" style={{ color: '#1B3A6B' }}>What We Build For You</h2>
            <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
              Comprehensive, end-to-end technology solutions designed to accelerate your business at every stage of growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, idx) => (
              <div key={s.title} className="bg-white rounded-2xl p-9 border transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl fade-in-up"
                style={{ borderColor: '#E2E8F0', animationDelay: `${idx * 80}ms` }}>
                <div className="absolute top-0 left-0 right-0 h-1 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                  style={{ background: 'linear-gradient(90deg, #E87722, #F5922E)' }} />
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300"
                  style={{ background: 'rgba(27,58,107,.08)' }}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#1B3A6B' }}>{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.desc}</p>
                <Link href={s.href} className="text-sm font-semibold inline-flex items-center gap-1.5 transition-all duration-200 hover:gap-3"
                  style={{ color: '#E87722' }}>
                  Explore →
                </Link>
              </div>
            ))}
            {/* CTA card */}
            <div className="rounded-2xl p-9 flex flex-col justify-between drop-shadow-xl fade-in-up delay-200"
              style={{ background: 'linear-gradient(135deg, #1B3A6B, #2a5298)' }}>
              <div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6" style={{ background: 'rgba(255,255,255,.12)' }}>🚀</div>
                <h3 className="font-bold text-lg text-white mb-3">Ready to Start?</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>
                  Every solution is purpose-built, quality-assured, and designed for the long term.
                </p>
              </div>
              <Btn href="/edinz/about#contact" variant="primary">Book a Consultation</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EDINZ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionTag>Why Choose Us</SectionTag>
              <h2 className="text-4xl font-black mb-8 leading-tight" style={{ color: '#1B3A6B' }}>
                The Edinz Tech <span style={{ color: '#E87722' }}>Advantage</span>
              </h2>
              <div className="flex flex-col gap-6">
                {whyItems.map((w) => (
                  <div key={w.title} className="flex gap-5 items-start">
                    <div className="w-13 h-13 rounded-xl flex items-center justify-center text-xl flex-shrink-0 text-white"
                      style={{ minWidth: '52px', width: '52px', height: '52px', background: 'linear-gradient(135deg, #1B3A6B, #2a5298)' }}>
                      {w.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1.5" style={{ color: '#1B3A6B' }}>{w.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* stat cards */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { num: '18+', label: 'Years Experience', featured: false },
                { num: '1000+', label: 'Projects Delivered', featured: true },
                { num: '5000+', label: 'Professionals Trained', featured: true },
                { num: '35+', label: 'Academic Partners', featured: false },
              ].map(({ num, label, featured }) => (
                <div key={label} className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
                  style={featured
                    ? { background: 'linear-gradient(135deg, #E87722, #F5922E)', border: 'none' }
                    : { background: '#F8F9FC', border: '1px solid #E2E8F0' }}>
                  <div className="text-3xl font-black leading-none mb-2" style={{ color: featured ? '#fff' : '#1B3A6B' }}>{num}</div>
                  <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: featured ? 'rgba(255,255,255,.85)' : '#6B7280' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="py-20" style={{ background: '#F8F9FC', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {clients.map((c) => (
              <div key={c} className="bg-white border rounded-xl px-7 py-4 text-sm font-bold text-gray-400 transition-all duration-200 hover:text-[#1B3A6B] hover:border-[#1B3A6B] hover:-translate-y-0.5 hover:shadow-md cursor-default"
                style={{ borderColor: '#E2E8F0' }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2347 0%, #1B3A6B 60%, #2a5298 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(232,119,34,.2), transparent)' }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-wrap items-center justify-between gap-10">
          <div>
            <h2 className="font-black text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
              Ready to Build Something Remarkable?
            </h2>
            <p className="max-w-lg leading-relaxed" style={{ color: 'rgba(255,255,255,.75)' }}>
              Whether you are a startup ready to launch, an enterprise ready to scale, or an institution ready to innovate —
              Edinz Tech is your technology partner from day one.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Btn href="/edinz/about#contact" variant="primary" lg>Get in Touch →</Btn>
            <Btn href="/edinz/services" variant="outlineWhite" lg>View Services</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
