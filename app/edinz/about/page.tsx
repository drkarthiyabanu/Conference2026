import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '../_components/ContactForm';

export const metadata: Metadata = {
  title: 'About Edinz Tech — ISO Certified Software Company | Inspire Softech Group',
  description: 'Learn about Edinz Tech Private Limited — a next-generation software company with 18+ years of group experience, 1,000+ projects delivered, and a mission to empower businesses through technology.',
};

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
    style={{ background: 'rgba(232,119,34,.12)', color: '#E87722' }}>{children}</span>
);

const values = [
  { icon: '🏭', title: 'Industry Relevance', desc: 'We build solutions grounded in real-world business realities, not theoretical frameworks. Every decision starts with your operational context.' },
  { icon: '💡', title: 'Practical Innovation', desc: 'We pursue innovation that is tangible, deployable, and purposeful — technology that makes a visible difference in your day-to-day operations.' },
  { icon: '⭐', title: 'Integrity & Quality', desc: 'Every line of code and every client relationship is governed by our commitment to excellence and ethical practice, backed by ISO 9001:2015 certification.' },
  { icon: '📈', title: 'Client Empowerment', desc: 'We measure our success not by what we build, but by the growth we enable in our clients — their wins are our milestones.' },
  { icon: '📚', title: 'Continuous Learning', desc: 'We invest in our people, our processes, and our partnerships to remain at the cutting edge of technology and industry knowledge.' },
];

const ecosystem = [
  { icon: '🎓', title: 'Inspire Softech Solutions', desc: 'Skill development, AICTE-approved programs & professional certifications. Empowering the next generation of technology professionals.', highlight: false },
  { icon: '💻', title: 'Edinz Tech Pvt. Ltd.', desc: 'Software development, AI/ML solutions & technology services. Next-generation digital solutions for businesses of every size.', highlight: true },
  { icon: '⚙️', title: 'Adore Technology Solutions', desc: 'ERP/CRM, cloud migration & enterprise automation. Streamlining business operations through intelligent automation platforms.', highlight: false },
  { icon: '🔬', title: 'IGreen StarTech Solutions', desc: 'AI, IoT, Data Science R&D & emerging technology prototyping. Pushing the boundaries of what is technologically possible.', highlight: false },
];

const clients = ['HCL Technologies', 'TCS', 'Wipro', 'Cognizant', 'Samsung', 'Titan', 'ICF', 'CPCL'];

const contactItems = [
  { icon: '📞', label: 'Phone', content: <><a href="tel:+914461459000" className="block text-sm font-semibold hover:text-[#E87722] transition-colors" style={{ color: '#1B3A6B' }}>+91 44 6145 90000</a><a href="tel:+918667493679" className="block text-sm font-semibold hover:text-[#E87722] transition-colors" style={{ color: '#1B3A6B' }}>+91 86674 93679</a></> },
  { icon: '✉️', label: 'Email', content: <a href="mailto:projects@edinztech.com" className="text-sm font-semibold hover:text-[#E87722] transition-colors" style={{ color: '#1B3A6B' }}>projects@edinztech.com</a> },
  { icon: '📍', label: 'Head Office', content: <p className="text-sm font-semibold" style={{ color: '#1B3A6B' }}>10th Floor, CITIUS – A Block,<br />Olympia Tech Park, Guindy,<br />Chennai – 600032</p> },
  { icon: '📍', label: 'Branch Office', content: <p className="text-sm font-semibold" style={{ color: '#1B3A6B' }}>Bengaluru, Karnataka</p> },
  { icon: '🌐', label: 'Website', content: <a href="https://www.edinztech.com" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:text-[#E87722] transition-colors" style={{ color: '#1B3A6B' }}>www.edinztech.com</a> },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-[76px]" style={{ background: 'linear-gradient(135deg, #0F2347 0%, #1B3A6B 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 80% at 80% 50%, rgba(232,119,34,.15), transparent)' }} />
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 fade-in-up">
          <div className="flex items-center gap-2 text-sm mb-5" style={{ color: 'rgba(255,255,255,.5)' }}>
            <Link href="/edinz" className="hover:text-[#E87722] transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,.9)' }}>About Us</span>
          </div>
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 fade-in-up delay-100"
            style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.9)', border: '1px solid rgba(255,255,255,.2)' }}>
            About Edinz Tech
          </span>
          <h1 className="font-black text-white mb-4 leading-tight fade-in-up delay-200" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Innovating at the Intersection of<br /><span style={{ color: '#E87722' }}>Technology, Purpose & Impact</span>
          </h1>
          <p className="max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem' }}>
            We are Edinz Tech Private Limited — a next-generation software development and technology solutions company,
            and a proud member of the Inspire Softech Group.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Visual */}
            <div>
              <div className="rounded-2xl overflow-hidden flex items-center justify-center mb-6 fade-in-up delay-200"
                style={{ background: 'linear-gradient(135deg, #1B3A6B, #2a5298)', aspectRatio: '3/2' }}>
                <div className="text-center p-10" style={{ color: 'rgba(255,255,255,.6)' }}>
                  <div className="text-7xl mb-4 opacity-40">🏢</div>
                  <p className="text-sm font-medium">Olympia Tech Park · Chennai</p>
                </div>
              </div>
              {/* Achievement cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '18+', label: 'Years Experience' },
                  { num: '1000+', label: 'Projects Delivered' },
                  { num: '5000+', label: 'Professionals Trained' },
                  { num: '35+', label: 'Academic Partners' },
                ].map(({ num, label }, idx) => (
                  <div key={label} className="text-center p-5 rounded-xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-lg fade-in-up"
                    style={{ background: '#F8F9FC', borderColor: '#E2E8F0', animationDelay: `${idx * 80}ms` }}>
                    <div className="text-2xl font-black leading-none" style={{ color: '#1B3A6B' }}>
                      {num.replace('+', '')}<span style={{ color: '#E87722' }}>+</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <SectionTag>Our Story</SectionTag>
              <h2 className="text-3xl font-black mb-6" style={{ color: '#1B3A6B' }}>Who We Are</h2>
              <div className="flex flex-col gap-4 text-sm text-gray-500 leading-relaxed fade-in-up delay-300">
                <p>Edinz Tech Private Limited was built with one conviction: that businesses of every size deserve access to world-class technology — not as a luxury, but as a growth enabler.</p>
                <p>As a proud member of the <strong className="text-gray-700">Inspire Softech Group</strong> — a technology consortium with 18+ years of industry experience — Edinz Tech brings together deep domain expertise across software engineering, artificial intelligence, cloud computing, IoT, and enterprise systems.</p>
                <p>We are headquartered at Olympia Tech Park, Chennai, with an additional office in Bengaluru, and our work spans corporations, government bodies, and academic institutions across India and beyond.</p>
                <p>Our team is made up of seasoned engineers, creative designers, domain strategists, and technology researchers united by a shared belief: that <strong className="text-gray-700">great software must solve real problems</strong>, not just look impressive in a pitch deck.</p>
                <p>We are ISO 9001:2015 certified, AICTE associated, and trusted by clients including HCL Technologies, Tata Consultancy Services, Wipro, Cognizant, Samsung, Titan, and government institutions including ICF and CPCL.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-7">
                {['ISO 9001:2015 Certified', 'AICTE Associated', 'Chennai HQ', 'Bengaluru Branch'].map((c) => (
                  <div key={c} className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold" style={{ background: '#F8F9FC', border: '1px solid #E2E8F0', color: '#1B3A6B' }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: '#E87722' }} />{c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24" style={{ background: '#F8F9FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag>Mission & Vision</SectionTag>
            <h2 className="text-4xl font-black mb-4" style={{ color: '#1B3A6B' }}>What Drives Us Forward</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">Our vision and mission define the north star behind every solution we build and every partnership we forge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="rounded-2xl p-12 text-white fade-in-up delay-200" style={{ background: 'linear-gradient(135deg, #1B3A6B, #2a5298)' }}>
              <div className="text-5xl mb-6 opacity-80">🎯</div>
              <h3 className="text-2xl font-black mb-4">Our Vision</h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,.8)', fontSize: '.95rem' }}>
                To be the most trusted technology partner for businesses navigating digital transformation — delivering intelligent,
                scalable, and future-ready solutions that create lasting impact across industries and communities.
              </p>
            </div>
            <div className="rounded-2xl p-12 text-white fade-in-up delay-300" style={{ background: 'linear-gradient(135deg, #E87722, #F5922E)' }}>
              <div className="text-5xl mb-6 opacity-80">🚀</div>
              <h3 className="text-2xl font-black mb-4">Our Mission</h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,.85)', fontSize: '.95rem' }}>
                To empower organisations with innovative, quality-driven software solutions that simplify complexity, accelerate growth,
                and create sustainable competitive advantage — while fostering a culture of continuous learning, ethical practice, and
                human-centred technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag>Core Values</SectionTag>
            <h2 className="text-4xl font-black mb-4" style={{ color: '#1B3A6B' }}>What We Stand For</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">Five principles that guide every line of code we write and every client relationship we build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div key={v.title} className="bg-white border rounded-2xl p-9 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl fade-in-up"
                style={{ borderColor: '#E2E8F0', animationDelay: `${idx * 70}ms` }}>
                <div className="w-18 h-18 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 transition-all duration-300"
                  style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #1B3A6B, #2a5298)' }}>
                  {v.icon}
                </div>
                <h4 className="font-bold text-lg mb-3" style={{ color: '#1B3A6B' }}>{v.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
            {/* 6th card */}
            <div className="rounded-2xl p-9 text-center" style={{ background: 'linear-gradient(135deg, #1B3A6B, #2a5298)' }}>
              <div className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5" style={{ background: 'rgba(255,255,255,.15)' }}>🤝</div>
              <h4 className="font-bold text-lg mb-3 text-white">Long-Term Partnership</h4>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,.75)' }}>
                We are not just a vendor. From discovery to deployment and beyond — we are your committed technology partner for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspire Softech Ecosystem */}
      <section className="py-24" style={{ background: '#F8F9FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag>The Group</SectionTag>
            <h2 className="text-4xl font-black mb-4" style={{ color: '#1B3A6B' }}>
              Part of a <span style={{ color: '#E87722' }}>Larger Vision</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Edinz Tech is one of four specialised companies within the Inspire Softech Group — a unified technology ecosystem
              delivering end-to-end digital solutions across software, training, enterprise automation, and emerging technology R&D.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecosystem.map((e, idx) => (
              <div key={e.title}
                className="flex gap-5 items-start rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl fade-in-up"
                style={{
                  background: '#fff',
                  border: `1px solid ${e.highlight ? '#E87722' : '#E2E8F0'}`,
                  boxShadow: e.highlight ? '0 0 0 1px #E87722' : 'none',
                  animationDelay: `${idx * 80}ms`,
                }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 text-white"
                  style={{ background: e.highlight ? 'linear-gradient(135deg, #E87722, #F5922E)' : 'linear-gradient(135deg, #1B3A6B, #2a5298)' }}>
                  {e.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold" style={{ color: '#1B3A6B' }}>{e.title}</h4>
                    {e.highlight && (
                      <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background: '#E87722' }}>You Are Here</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center p-8 rounded-2xl border" style={{ background: '#fff', borderColor: '#E2E8F0' }}>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
              This ecosystem approach means our clients benefit from the{' '}
              <strong style={{ color: '#1B3A6B' }}>combined capabilities of four specialised practices</strong>{' '}
              — all under one accountable, ISO-certified group.
            </p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionTag>Our Clients</SectionTag>
            <h2 className="text-4xl font-black mb-4" style={{ color: '#1B3A6B' }}>
              Trusted by <span style={{ color: '#E87722' }}>Industry Leaders</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {clients.map((c) => (
              <div key={c} className="bg-white border rounded-xl px-7 py-4 text-sm font-bold cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: '#E2E8F0', color: '#9CA3AF' }}
                onMouseEnter={undefined} onMouseLeave={undefined}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24" style={{ background: '#F8F9FC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag>Contact Us</SectionTag>
            <h2 className="text-4xl font-black mb-4" style={{ color: '#1B3A6B' }}>
              Ready to Build Something <span style={{ color: '#E87722' }}>Remarkable?</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Whether you are a startup ready to launch, an enterprise ready to scale, or an institution ready to innovate —
              Edinz Tech is your technology partner from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Contact info */}
            <div>
              <h3 className="text-2xl font-black mb-2" style={{ color: '#1B3A6B' }}>Get in Touch</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Reach out for a free consultation, project discussion, or any enquiry. Our team responds within 24 business hours.
              </p>
              <div className="flex flex-col gap-4">
                {contactItems.map(({ icon, label, content }) => (
                  <div key={label} className="flex gap-4 items-start p-5 rounded-xl border" style={{ background: '#fff', borderColor: '#E2E8F0' }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #E87722, #F5922E)' }}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{label}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Contact form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
