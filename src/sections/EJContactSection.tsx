import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, GitBranch, Send, Copy, Check, MessageSquare } from 'lucide-react';

const EMAIL = 'everjay.salango08@gmail.com';
const GITHUB = 'https://github.com/salangoeverjay';

export default function EJContactSection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send (wire to a real service like Resend/EmailJS in production)
    setTimeout(() => { setSending(false); setSent(true); }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[var(--primary)] mb-3 block">
            Let's connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full"
            style={{ background: 'linear-gradient(135deg,#58A6FF,#8B5CF6)' }} />
          <p className="mt-5 text-[var(--text-muted)] max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm currently open to freelance and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Email card */}
            <div className="p-5 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(88,166,255,0.1)' }}>
                  <Mail size={18} className="text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)]">Email me at</p>
                  <p className="text-sm font-semibold text-[var(--text)]">{EMAIL}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg,#58A6FF,#8B5CF6)' }}
                >
                  <Mail size={12} /> Send Email
                </a>
                <button
                  onClick={copyEmail}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: copied ? 'var(--accent)' : 'var(--text-muted)' }}
                >
                  {copied ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy</>}
                </button>
              </div>
            </div>

            {/* GitHub card */}
            <div className="p-5 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(139,92,246,0.1)' }}>
                  <GitBranch size={18} className="text-[var(--secondary)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)]">Follow my work</p>
                  <p className="text-sm font-semibold text-[var(--text)]">github.com/salangoeverjay</p>
                </div>
              </div>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
                style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
              >
                <GitBranch size={12} /> View GitHub Profile
              </a>
            </div>

            {/* Status card */}
            <div className="p-5 rounded-2xl"
              style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-sm font-semibold text-[var(--accent)]">Available for work</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Currently open to new opportunities — freelance, part-time, or full-time roles.
              </p>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-6 sm:p-8 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={18} className="text-[var(--primary)]" />
                <h3 className="font-bold text-[var(--text)]">Send a Message</h3>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(16,185,129,0.1)', border: '2px solid var(--accent)' }}>
                    <Check size={28} className="text-[var(--accent)]" />
                  </div>
                  <h4 className="font-bold text-[var(--text)] text-lg mb-2">Message Sent!</h4>
                  <p className="text-sm text-[var(--text-muted)]">Thanks for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => { setSent(false); setForm({ name:'',email:'',subject:'',message:'' }); }}
                    className="mt-5 text-xs text-[var(--primary)] hover:underline">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: 'var(--surface-2)',
                          border: '1px solid var(--border)',
                          color: 'var(--text)',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: 'var(--surface-2)',
                          border: '1px solid var(--border)',
                          color: 'var(--text)',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Subject</label>
                    <input
                      type="text"
                      placeholder="What's this about?"
                      required
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: 'var(--surface-2)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{
                        background: 'var(--surface-2)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg,#58A6FF,#8B5CF6)' }}
                  >
                    {sending ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
