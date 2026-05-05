'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('done');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 3500);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3500);
    }
  };

  const inputCls = "w-full px-4 py-3.5 rounded-xl border-2 text-sm outline-none transition-all duration-200 bg-white font-[inherit]";
  const inputStyle = { borderColor: '#E2E8F0', color: '#1F2937' };

  return (
    <div className="rounded-2xl p-8 md:p-12" style={{ background: '#F8F9FC', border: '1px solid #E2E8F0' }}>
      <h3 className="text-2xl font-black mb-8" style={{ color: '#1B3A6B' }}>Send Us a Message</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#1B3A6B' }}>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your first name" required className={inputCls} style={inputStyle}
              onFocus={e => { e.target.style.borderColor = '#E87722'; e.target.style.boxShadow = '0 0 0 4px rgba(232,119,34,.1)'; }}
              onBlur={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.boxShadow = 'none'; }} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#1B3A6B' }}>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Your last name" required className={inputCls} style={inputStyle}
              onFocus={e => { e.target.style.borderColor = '#E87722'; e.target.style.boxShadow = '0 0 0 4px rgba(232,119,34,.1)'; }}
              onBlur={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.boxShadow = 'none'; }} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#1B3A6B' }}>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required className={inputCls} style={inputStyle}
              onFocus={e => { e.target.style.borderColor = '#E87722'; e.target.style.boxShadow = '0 0 0 4px rgba(232,119,34,.1)'; }}
              onBlur={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.boxShadow = 'none'; }} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#1B3A6B' }}>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" className={inputCls} style={inputStyle}
              onFocus={e => { e.target.style.borderColor = '#E87722'; e.target.style.boxShadow = '0 0 0 4px rgba(232,119,34,.1)'; }}
              onBlur={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.boxShadow = 'none'; }} />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#1B3A6B' }}>Company / Organisation</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" className={inputCls} style={inputStyle}
            onFocus={e => { e.target.style.borderColor = '#E87722'; e.target.style.boxShadow = '0 0 0 4px rgba(232,119,34,.1)'; }}
            onBlur={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.boxShadow = 'none'; }} />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#1B3A6B' }}>Service of Interest</label>
          <select name="service" value={formData.service} onChange={handleChange} className={inputCls} style={inputStyle}
            onFocus={e => { e.target.style.borderColor = '#E87722'; e.target.style.boxShadow = '0 0 0 4px rgba(232,119,34,.1)'; }}
            onBlur={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.boxShadow = 'none'; }}>
            <option value="">Select a service...</option>
            <option>Website Design & Development</option>
            <option>ERP Solutions</option>
            <option>Full Stack Development</option>
            <option>Artificial Intelligence & ML</option>
            <option>Cloud Computing</option>
            <option>Multiple Services / Not Sure</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <label className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#1B3A6B' }}>Message</label>
          <textarea rows={4} name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or requirements..." required className={inputCls + ' resize-y'} style={inputStyle}
            onFocus={e => { e.target.style.borderColor = '#E87722'; e.target.style.boxShadow = '0 0 0 4px rgba(232,119,34,.1)'; }}
            onBlur={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.boxShadow = 'none'; }} />
        </div>
        <button
          type="submit"
          disabled={status !== 'idle'}
          className="w-full py-4 rounded-xl text-white font-semibold text-base transition-all duration-300"
          style={{ background: status === 'done' ? '#22c55e' : status === 'error' ? '#ef4444' : '#E87722', opacity: status === 'sending' ? 0.8 : 1 }}
        >
          {status === 'idle' ? 'Send Message →' : status === 'sending' ? 'Sending…' : status === 'done' ? '✓ Message Sent!' : '✗ Failed to Send'}
        </button>
        <p className="text-xs text-center mt-3 text-gray-400">
          We respond within 24 business hours. Your information is kept confidential.
        </p>
      </form>
    </div>
  );
}
