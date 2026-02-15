import { ReactNode } from 'react';
import { Heart, AlertTriangle } from 'lucide-react';

interface AppLayoutProps {
  children: ReactNode;
}

/**
 * Main layout component providing consistent structure with Trading Solutions branding, logo, navigation to all sections, and educational disclaimer
 */
export function AppLayout({ children }: AppLayoutProps) {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'unknown-app';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-xs sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/generated/trading-solutions-logo.dim_512x512.png" 
                alt="Trading Solutions Logo" 
                className="w-10 h-10 object-contain"
              />
              <h1 className="text-xl md:text-2xl font-bold text-foreground">
                Trading Solutions
              </h1>
            </div>
            <nav className="flex gap-3 md:gap-6">
              <a 
                href="#home" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a 
                href="#specialists" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Specialists
              </a>
              <a 
                href="#pricing" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 py-8">
          {/* Disclaimer in Footer */}
          <div className="mb-6 pb-6 border-b border-border">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0 text-destructive" />
              <div>
                <p className="font-medium text-foreground mb-1">Disclaimer:</p>
                <p>
                  All content on this website is for educational purposes only and does not guarantee any returns. 
                  Stock market investments are subject to market risk—please do your own research or consult ur own FINANCIAL advisor before investing.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Trading Solutions. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
