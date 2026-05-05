import type { Metadata } from 'next';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Edinz Tech — Custom Software, ERP, AI & Cloud Solutions | Chennai',
    template: '%s | Edinz Tech',
  },
  description:
    'Edinz Tech delivers enterprise software solutions — ERP, Full Stack Development, AI/ML, Cloud Computing, and Website Design. ISO certified. 18+ years of group expertise. Chennai & Bengaluru.',
  keywords: [
    'software development company Chennai',
    'ERP solutions India',
    'custom web development Chennai',
    'AI ML solutions India',
    'full stack development Java Python',
    'cloud computing services Chennai',
    'ISO certified software company Tamil Nadu',
    'Inspire Softech Group',
  ],
};

export default function EdinzLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'Inter', 'Geist Sans', system-ui, sans-serif" }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
