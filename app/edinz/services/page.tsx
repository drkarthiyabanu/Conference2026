import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software Development Services — ERP, AI, Web & Cloud',
  description: "Explore Edinz Tech's complete service portfolio — custom web development, ERP solutions, full stack engineering, AI/ML models, and cloud computing tailored for your business.",
};

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
    style={{ background: 'rgba(232,119,34,.12)', color: '#E87722' }}>{children}</span>
);

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-3 items-start p-4 rounded-xl border" style={{ background: '#F8F9FC', borderColor: '#E2E8F0' }}>
    <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: '#E87722' }} />
    <p className="text-sm text-gray-600 leading-relaxed"><strong className="text-gray-800">{title}</strong> — {desc}</p>
  </div>
);

const DiffItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 items-center">
    <span className="text-sm font-bold" style={{ color: '#E87722' }}>✓</span>
    <p className="text-sm" style={{ color: 'rgba(255,255,255,.8)' }}>{children}</p>
  </div>
);

interface ServicePanelProps {
  icon: string;
  title: string;
  tagline: string;
  bullets: string[];
}

const ServicePanel = ({ icon, title, tagline, bullets }: ServicePanelProps) => (
  <div className="rounded-2xl p-10 text-white h-full" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2a5298 100%)' }}>
    <div className="text-5xl mb-6 opacity-80">{icon}</div>
    <h3 className="text-xl font-black mb-3">{title}</h3>
    <p className="text-sm mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,.7)' }}>{tagline}</p>
    <div className="flex flex-col gap-3">
      {bullets.map((b) => <DiffItem key={b}>{b}</DiffItem>)}
    </div>
  </div>
);

const services = [
  {
    id: 'web',
    num: '01',
    icon: '🌐',
    title: 'Website Design & Development',
    tagline: 'Your Digital Storefront, Engineered for Impact',
    intro: "In today's digital-first world, your website is your most powerful business asset. At Edinz Tech, we design and develop high-performance websites and web applications that do more than look great — they convert visitors, build trust, and drive measurable business results.",
    intro2: 'Our team of experienced UI/UX designers and full-stack developers combine aesthetic excellence with engineering rigour. Every project is grounded in strategy — from sitemap architecture and wireframing through to pixel-perfect design and high-velocity deployment.',
    features: [
      { title: 'Custom Website Design & Development', desc: 'Bespoke designs tailored to your brand identity, industry, and customer journey.' },
      { title: 'Responsive & Mobile-First Design', desc: 'Flawless performance across all devices, screen sizes, and browsers.' },
      { title: 'Modern Frameworks', desc: 'Built using React, Angular, Vue, Django, Flask, Spring Boot — selecting the right stack for your business needs.' },
      { title: 'UX Research & Wireframing', desc: 'User-centric design processes that reduce friction and maximise engagement.' },
      { title: 'SEO-Optimised Architecture', desc: 'Clean, semantic code and performance tuning to enhance search visibility from day one.' },
      { title: 'E-Commerce Development', desc: 'Secure, scalable online stores with integrated payment gateways and order tracking.' },
      { title: 'Ongoing Maintenance & Support', desc: 'Post-launch support packages to keep your digital presence secure and performing.' },
    ],
    panel: { icon: '🌐', title: 'Web Design & Development', tagline: 'Pixel-perfect, high-performance websites built for speed, SEO, and every device.', bullets: ['React.js · Angular · Vue.js', 'Django · Flask · Spring Boot', 'PostgreSQL · MySQL · MongoDB', 'AWS · Azure · GCP Deployments'] },
    industries: ['Education & EdTech', 'Healthcare', 'Manufacturing', 'Retail & E-Commerce', 'Financial Services', 'Real Estate', 'Government'],
    cta: 'Request a Free Website Audit',
  },
  {
    id: 'erp',
    num: '02',
    icon: '📊',
    title: 'ERP Solutions',
    tagline: 'One System. Total Clarity. Complete Control.',
    intro: "Running a business across disconnected spreadsheets, siloed teams, and fragmented software is a growth killer. Edinz Tech's ERP solutions bring every function of your business — finance, HR, procurement, inventory, sales, and more — into a single, unified platform.",
    intro2: 'Our enterprise resource planning systems are not off-the-shelf. They are architected around your workflows, configured to your industry, and built to scale as your organisation grows.',
    features: [
      { title: 'Finance & Accounting', desc: 'Automate billing, invoicing, payroll, tax compliance, and financial reporting with full audit trails.' },
      { title: 'Human Resource Management', desc: 'Manage recruitment, attendance, leave, performance reviews, and employee records from one dashboard.' },
      { title: 'Inventory & Supply Chain', desc: 'Real-time stock tracking, automated reorder triggers, warehouse management, and supplier coordination.' },
      { title: 'CRM & Sales Management', desc: 'Track leads, manage pipelines, automate follow-ups, and close deals faster with integrated CRM tools.' },
      { title: 'Procurement & Vendor Management', desc: 'Streamline purchase orders, vendor onboarding, and approval workflows.' },
      { title: 'Production & Manufacturing', desc: 'BOM management, production planning, quality control, and shop floor monitoring.' },
      { title: 'Custom Dashboards & Analytics', desc: 'Role-based dashboards with live KPIs, custom reports, and business intelligence visualisations.' },
    ],
    panel: { icon: '📊', title: 'ERP Solutions', tagline: 'Industry-specific ERP configured around your workflows — not a generic product pushed into your processes.', bullets: ['Industry-specific configuration', 'Scalable architecture', 'Seamless third-party API integration', 'Cloud-ready & on-premise options', 'Dedicated implementation support'] },
    industries: [],
    cta: 'Schedule an ERP Demo',
  },
  {
    id: 'fullstack',
    num: '03',
    icon: '⚙️',
    title: 'Full Stack Development',
    tagline: 'Complete Applications. Front to Back. No Compromises.',
    intro: 'Our full-stack engineers build enterprise-grade applications using Java and Python — two of the most powerful, battle-tested languages in software development. Whether your need is a complex microservices architecture, a high-traffic SaaS platform, or a secure internal business tool, we engineer it with precision.',
    intro2: '',
    features: [
      { title: 'Frontend', desc: 'React.js, Angular, Vue.js — modern, responsive, and performance-optimised interfaces.' },
      { title: 'Backend (Java)', desc: 'Spring Boot, Hibernate, RESTful APIs, microservices, Apache Kafka.' },
      { title: 'Backend (Python)', desc: 'Django, Flask, FastAPI — rapid development with clean, maintainable code.' },
      { title: 'Databases', desc: 'PostgreSQL, MySQL, MongoDB, Redis — structured and unstructured data management.' },
      { title: 'API Development & Integrations', desc: 'Third-party service integrations, payment gateways, authentication layers, and webhook systems.' },
    ],
    panel: { icon: '⚙️', title: 'Full Stack Engineering', tagline: 'Enterprise-grade applications architected for performance, security, and long-term maintainability.', bullets: ['Complex microservices architectures', 'High-traffic SaaS platforms', 'Secure internal business tools', 'Customer portals & self-service apps', 'Real-time dashboards & analytics'] },
    industries: [],
    cta: 'Talk to Our Tech Team',
  },
  {
    id: 'ai',
    num: '04',
    icon: '🤖',
    title: 'Artificial Intelligence & Machine Learning',
    tagline: 'Decisions Powered by Data. Processes Powered by Intelligence.',
    intro: 'Artificial Intelligence is no longer the future — it is the competitive differentiator of today. Our AI and Machine Learning team builds intelligent systems that automate repetitive tasks, uncover hidden insights in your data, and enable your business to make sharper, faster, more confident decisions.',
    intro2: '',
    features: [
      { title: 'Custom AI/ML Model Development', desc: 'Predictive models, classification systems, recommendation engines, and anomaly detection tailored to your data.' },
      { title: 'Generative AI & LLM Integration', desc: 'Prompt engineering, RAG systems, fine-tuned LLMs, and Agentic AI workflows for intelligent business automation.' },
      { title: 'Data Science & Analytics', desc: 'End-to-end data pipelines, business intelligence dashboards, and applied data science for actionable insights.' },
      { title: 'Computer Vision', desc: 'Image recognition, object detection, quality inspection systems, and visual analytics.' },
      { title: 'Natural Language Processing (NLP)', desc: 'Sentiment analysis, document intelligence, chatbots, and language model applications.' },
      { title: 'MLOps & Model Deployment', desc: 'Scalable model serving, monitoring, versioning, and continuous retraining pipelines.' },
    ],
    panel: { icon: '🤖', title: 'AI & Machine Learning', tagline: 'Turn your data into your greatest competitive advantage with intelligent automation built for real-world impact.', bullets: ['Intelligent process automation', 'Demand forecasting & planning', 'Customer churn prediction', 'Conversational AI & chatbots', 'Real-time fraud detection', 'Quality control via computer vision'] },
    industries: [],
    cta: 'Explore AI Solutions',
  },
  {
    id: 'cloud',
    num: '05',
    icon: '☁️',
    title: 'Cloud Computing',
    tagline: 'Unlimited Scale. Zero Infrastructure Headaches.',
    intro: 'Whether you are migrating legacy systems, building cloud-native applications from scratch, or optimising a hybrid infrastructure, Edinz Tech delivers cloud solutions that are secure, cost-efficient, and engineered for business continuity.',
    intro2: '',
    features: [
      { title: 'Cloud Strategy & Consulting', desc: 'Roadmaps for cloud adoption, provider selection (AWS, Azure, GCP), and migration planning.' },
      { title: 'Cloud-Native Application Development', desc: 'Microservices, containerisation (Docker, Kubernetes), and serverless architectures.' },
      { title: 'Migration & Modernisation', desc: 'Lift-and-shift, re-platforming, and full refactoring of legacy applications to cloud environments.' },
      { title: 'Managed Cloud Services', desc: 'Infrastructure monitoring, cost optimisation, security patching, and 24/7 cloud operations support.' },
      { title: 'DevOps & CI/CD Pipelines', desc: 'Automated testing, continuous integration, and deployment pipelines for faster, safer software releases.' },
    ],
    panel: { icon: '☁️', title: 'Cloud Computing', tagline: 'Secure, cost-efficient, and resilient cloud infrastructure — engineered for business continuity at any scale.', bullets: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'Docker & Kubernetes orchestration', 'Serverless & microservices', 'Hybrid & multi-cloud strategies'] },
    industries: [],
    cta: 'Talk to Our Cloud Team',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-[76px]" style={{ background: 'linear-gradient(135deg, #0F2347 0%, #1B3A6B 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 80% at 80% 50%, rgba(232,119,34,.15), transparent)' }} />
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="flex items-center gap-2 text-sm mb-5" style={{ color: 'rgba(255,255,255,.5)' }}>
            <Link href="/edinz" className="hover:text-[#E87722] transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,.9)' }}>Services</span>
          </div>
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.9)', border: '1px solid rgba(255,255,255,.2)' }}>
            Our Services
          </span>
          <h1 className="font-black text-white mb-4 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Technology Solutions That<br /><span style={{ color: '#E87722' }}>Move With Your Business</span>
          </h1>
          <p className="max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem' }}>
            Comprehensive, end-to-end technology solutions designed to accelerate your business at every stage of growth.
          </p>
          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mt-10">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90"
                style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.85)', border: '1px solid rgba(255,255,255,.2)' }}>
                {s.icon} {s.title.split(' ').slice(0, 3).join(' ')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className="py-24" style={{ background: i % 2 === 0 ? '#fff' : '#F8F9FC' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Content */}
              <div>
                <SectionTag>Service {s.num}</SectionTag>
                <h2 className="text-3xl font-black mb-2 leading-tight" style={{ color: '#1B3A6B' }}>{s.title}</h2>
                <p className="font-semibold italic mb-5" style={{ color: '#E87722' }}>{s.tagline}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.intro}</p>
                {s.intro2 && <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.intro2}</p>}
                <h4 className="font-bold mb-4 mt-7" style={{ color: '#1B3A6B' }}>
                  {s.id === 'erp' ? 'Core ERP Modules We Build' : s.id === 'fullstack' ? 'Technology Stack' : s.id === 'ai' ? 'Our AI & ML Capabilities' : s.id === 'cloud' ? 'Our Cloud Services' : 'What We Deliver'}
                </h4>
                <div className="flex flex-col gap-3 mb-8">
                  {s.features.map((f) => <FeatureItem key={f.title} title={f.title} desc={f.desc} />)}
                </div>
                {s.industries.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-bold mb-3" style={{ color: '#1B3A6B' }}>Industries We Serve</h4>
                    <div className="flex flex-wrap gap-2">
                      {s.industries.map((ind) => (
                        <span key={ind} className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: '#F8F9FC', border: '1px solid #E2E8F0', color: '#1B3A6B' }}>{ind}</span>
                      ))}
                    </div>
                  </div>
                )}
                <Link href="/edinz/about#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ background: '#E87722' }}>
                  {s.cta} →
                </Link>
              </div>

              {/* Panel */}
              <div className="lg:sticky lg:top-[100px]">
                <ServicePanel {...s.panel} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Band */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2347 0%, #1B3A6B 60%, #2a5298 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(232,119,34,.2), transparent)' }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-wrap items-center justify-between gap-10">
          <div>
            <h2 className="font-black text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Not Sure Which Service You Need?</h2>
            <p className="max-w-lg leading-relaxed" style={{ color: 'rgba(255,255,255,.75)' }}>
              Our technology consultants will understand your business challenges and recommend the right solution stack — at no cost, no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/edinz/about#contact" className="px-8 py-4 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90" style={{ background: '#E87722' }}>
              Book a Free Consultation →
            </Link>
            <Link href="/edinz/about" className="px-8 py-4 rounded-xl font-semibold text-base transition-all" style={{ color: '#fff', border: '2px solid rgba(255,255,255,.5)' }}>
              About Edinz Tech
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
