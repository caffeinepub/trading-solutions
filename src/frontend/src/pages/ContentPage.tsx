import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { TrendingUp, BarChart3, LineChart, AlertTriangle, CheckCircle2, Users, Target, Shield, Award } from 'lucide-react';

/**
 * Main content page for Trading Solutions with hero section, educational disclaimer, features, pricing plans, stock specialists section, and contact form
 */
export function ContentPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Pre-fill message field
    const messageField = document.getElementById('message') as HTMLTextAreaElement;
    if (messageField) {
      messageField.value = `I'm interested in the ${planName}. Please provide more information.`;
      messageField.focus();
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section id="home" className="text-center mb-12">
        <div className="max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Educational Platform
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trading Solutions
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your comprehensive platform for learning about stock market trading and investment strategies. 
            Empowering traders with knowledge and insights for informed decision-making.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              View Plans
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Prominent Disclaimer Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <Alert className="border-destructive/50 bg-destructive/5">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertTitle className="text-lg font-bold mb-2">Important Disclaimer</AlertTitle>
          <AlertDescription className="text-base leading-relaxed">
            All content on this website is for educational purposes only and does not guarantee any returns. 
            Stock market investments are subject to market risk—please do your own research or consult ur own FINANCIAL advisor before investing.
          </AlertDescription>
        </Alert>
      </section>

      {/* Features Section */}
      <section id="about" className="mb-16">
        <h3 className="text-3xl font-bold text-center text-foreground mb-12">
          What We Offer
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-card hover:shadow-soft transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Market Analysis</CardTitle>
              <CardDescription>
                Educational content on market trends, technical analysis, and trading patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn to analyze market movements and understand key indicators that drive trading decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-soft transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Trading Strategies</CardTitle>
              <CardDescription>
                Explore various trading approaches and risk management techniques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Discover different trading strategies and learn how to manage risk effectively in volatile markets.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-soft transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Educational Resources</CardTitle>
              <CardDescription>
                Comprehensive learning materials for traders at all levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access curated educational content designed to help you understand market dynamics and trading fundamentals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stock Specialists Section */}
      <section id="specialists" className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Our Stock Specialists
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Work with experienced professionals who provide educational guidance and market insights to help you navigate the stock market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card hover:shadow-soft transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Expert Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our specialists have years of experience in market analysis and trading education.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-soft transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Focused Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Tailored educational strategies designed to match your learning goals and risk tolerance.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-soft transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Risk Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn comprehensive risk management techniques to protect your capital.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-soft transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Proven Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Educational content based on time-tested trading principles and market analysis.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl">What Our Specialists Provide</CardTitle>
            <CardDescription>
              Comprehensive educational support and market insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Market Analysis Education</p>
                  <p className="text-sm text-muted-foreground">Learn to read charts, identify trends, and understand market indicators</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Strategy Development</p>
                  <p className="text-sm text-muted-foreground">Guidance on building personalized trading strategies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Portfolio Insights</p>
                  <p className="text-sm text-muted-foreground">Educational content on diversification and asset allocation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Ongoing Support</p>
                  <p className="text-sm text-muted-foreground">Continuous learning resources and market updates</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the educational plan that best fits your trading journey and learning objectives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Foundation Plan */}
          <Card className="shadow-card hover:shadow-soft transition-all hover:scale-105">
            <CardHeader className="text-center pb-8">
              <Badge variant="secondary" className="w-fit mx-auto mb-4">
                Starter
              </Badge>
              <CardTitle className="text-2xl mb-2">Foundation Plan</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">₹75,000</span>
              </div>
              <CardDescription className="mt-2">
                Perfect for beginners starting their trading education
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Basic market analysis education</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Introduction to trading strategies</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Educational resources access</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Email support</span>
                </div>
              </div>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => handlePlanSelect('Foundation Plan')}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Growth Plan */}
          <Card className="shadow-card hover:shadow-soft transition-all hover:scale-105 border-primary">
            <CardHeader className="text-center pb-8">
              <Badge className="w-fit mx-auto mb-4">
                Popular
              </Badge>
              <CardTitle className="text-2xl mb-2">Growth Plan</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">₹125,000</span>
              </div>
              <CardDescription className="mt-2">
                Advanced education for serious traders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Everything in Foundation Plan</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Advanced technical analysis training</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Portfolio management guidance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Priority support</span>
                </div>
              </div>
              <Button 
                className="w-full"
                onClick={() => handlePlanSelect('Growth Plan')}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Loss Recovery Specialist */}
          <Card className="shadow-card hover:shadow-soft transition-all hover:scale-105">
            <CardHeader className="text-center pb-8">
              <Badge variant="secondary" className="w-fit mx-auto mb-4">
                Premium
              </Badge>
              <CardTitle className="text-2xl mb-2">Loss Recovery Specialist</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">₹175,000</span>
              </div>
              <CardDescription className="mt-2">
                Specialized guidance for portfolio recovery strategies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Everything in Growth Plan</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Personalized recovery strategy education</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">One-on-one specialist consultations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">24/7 dedicated support</span>
                </div>
              </div>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => handlePlanSelect('Loss Recovery Specialist')}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto">
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Get in Touch</CardTitle>
            <CardDescription>
              Have questions about our educational content or plans? We're here to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
