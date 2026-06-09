import { GitBranch, Mail, Code2, Heart } from 'lucide-react';

export default function EJFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#58A6FF,#8B5CF6)' }}>
              <Code2 size={14} className="text-white" />
            </div>
            <span className="text-sm font-bold text-[var(--text)]">Ever Jay Salango</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
            © {year} Ever Jay Salango · Built with <Heart size={11} className="text-red-400" /> using React
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a href="mailto:everjay.salango08@gmail.com"
              className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
              <Mail size={18} />
            </a>
            <a href="https://github.com/salangoeverjay" target="_blank" rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
              <GitBranch size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
