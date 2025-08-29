import { 
  Zap, MapPin, Users, Star, Shield, TrendingUp 
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Book in under 2 minutes with instant confirmation",
      highlight: "2min booking"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Locally Focused", 
      description: "Deep understanding of Pakistani market and cultural needs",
      highlight: "Made for Pakistan"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Built by locals, for locals, supporting local businesses",
      highlight: "Local community"  
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Every space is personally verified and quality assured",
      highlight: "Quality guaranteed"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises - just honest hourly rates",
      highlight: "What you see is what you pay"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Innovation First",
      description: "Cutting-edge platform designed for the modern Pakistani professional",
      highlight: "Future-ready"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">RentMySpace</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another booking platform. We're your partners in creating 
            memorable experiences and successful events across Pakistan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="card-hover p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <div className="text-sm font-semibold text-accent mb-3">
                {reason.highlight}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-secondary/30 rounded-3xl p-8 lg:p-12 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Trusted by Thousands Across Pakistan
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join the growing community of professionals, event planners, and families 
              who trust us with their most important moments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Verified Spaces</div>
              <div className="text-sm text-muted-foreground">
                Personally inspected and quality assured
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Happy Users</div>
              <div className="text-sm text-muted-foreground">
                Successful bookings and memorable events
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Cities Covered</div>
              <div className="text-sm text-muted-foreground">
                From Karachi to Lahore, Islamabad to Faisalabad
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;