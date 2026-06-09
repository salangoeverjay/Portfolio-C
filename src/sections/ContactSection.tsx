import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { Mail, Copy, Check, Send, GitBranch } from 'lucide-react';

const EMAIL = 'everjay.salango08@gmail.com';
const GITHUB = 'https://github.com/salangoeverjay';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1400);
  };

  return (
    <section
      id="contact"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="text-[#0C0C0C] font-light text-center uppercase tracking-wide leading-snug mx-auto mb-16 sm:mb-20 opacity-50"
          style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)', maxWidth: 480 }}
        >
          Have a project in mind? Let's build something incredible together.
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* Left — contact info */}
        <FadeIn delay={0.1} x={-30} y={0}>
          <div className="flex flex-col gap-5">

            {/* Email */}
            <div className="p-6 rounded-2xl border" style={{ borderColor: 'rgba(12,12,12,0.1)', background: 'rgba(12,12,12,0.03)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(12,12,12,0.06)' }}>
                  <Mail size={18} className="text-[#0C0C0C]" />
                </div>
                <div>
                  <p className="text-xs text-[#0C0C0C] opacity-40 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold text-[#0C0C0C]">{EMAIL}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)' }}
                >
                  <Mail size={12} /> Send Email
                </a>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all hover:opacity-70 border"
                  style={{ borderColor: 'rgba(12,12,12,0.15)', color: copied ? '#059669' : '#0C0C0C' }}
                >
                  {copied ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy</>}
                </button>
              </div>
            </div>

            {/* GitHub */}
            <div className="p-6 rounded-2xl border" style={{ borderColor: 'rgba(12,12,12,0.1)', background: 'rgba(12,12,12,0.03)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(12,12,12,0.06)' }}>
                  <GitBranch size={18} className="text-[#0C0C0C]" />
                </div>
                <div>
                  <p className="text-xs text-[#0C0C0C] opacity-40 uppercase tracking-wider">GitHub</p>
                  <p className="text-sm font-semibold text-[#0C0C0C]">github.com/salangoeverjay</p>
                </div>
              </div>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold border transition-all hover:opacity-70"
                style={{ borderColor: 'rgba(12,12,12,0.15)', color: '#0C0C0C' }}
              >
                <GitBranch size={12} /> View GitHub Profile
              </a>
            </div>

            <div className="flex justify-center">
              <ContactButton />
            </div>
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.2} x={30} y={0}>
          <div className="p-6 sm:p-8 rounded-2xl border" style={{ borderColor: 'rgba(12,12,12,0.1)', background: 'rgba(12,12,12,0.03)' }}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 gap-4"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(12,12,12,0.06)', border: '2px solid rgba(12,12,12,0.2)' }}>
                  <Check size={28} className="text-[#0C0C0C]" />
                </div>
                <h4 className="font-black text-[#0C0C0C] text-xl uppercase tracking-tight">Message Sent!</h4>
                <p className="text-sm text-[#0C0C0C] opacity-50 text-center">Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={() => { setSent(false); setForm({ name:'',email:'',subject:'',message:'' }); }} className="text-xs text-[#0C0C0C] opacity-40 hover:opacity-70 uppercase tracking-wider">
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-black text-[#0C0C0C] uppercase tracking-tight mb-2" style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)' }}>
                  Send a Message
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { key: 'name', label: 'Name', placeholder: 'Your name', type: 'text' },
                    { key: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="block text-xs font-medium text-[#0C0C0C] opacity-50 uppercase tracking-wider mb-1.5">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        required
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl text-sm text-[#0C0C0C] outline-none border transition-colors"
                        style={{ background: 'rgba(12,12,12,0.04)', borderColor: 'rgba(12,12,12,0.12)' }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(12,12,12,0.4)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(12,12,12,0.12)')}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0C0C0C] opacity-50 uppercase tracking-wider mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    required
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-[#0C0C0C] outline-none border transition-colors"
                    style={{ background: 'rgba(12,12,12,0.04)', borderColor: 'rgba(12,12,12,0.12)' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(12,12,12,0.4)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(12,12,12,0.12)')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0C0C0C] opacity-50 uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-[#0C0C0C] outline-none border transition-colors resize-none"
                    style={{ background: 'rgba(12,12,12,0.04)', borderColor: 'rgba(12,12,12,0.12)' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(12,12,12,0.4)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(12,12,12,0.12)')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 disabled:opacity-60"
                  style={{ background: 'linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)' }}
                >
                  {sending
                    ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                    : <><Send size={14} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
