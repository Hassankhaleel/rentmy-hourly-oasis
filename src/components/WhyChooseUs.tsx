import { Zap, Target, Heart, Trophy, Globe, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description: "Book your ideal space in under 60 seconds. Our streamlined process gets you celebrating or working immediately.",
      highlight: "60 second booking"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Pakistan-Focused",
      description: "Built specifically for Pakistani culture. We understand local celebrations, business needs, and space preferences.",
      highlight: "Local expertise"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Community Driven",
      description: "Join a thriving community of event planners, entrepreneurs, and businesses. Network while you celebrate.",
      highlight: "Growing community"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Premium Quality",
      description: "Hand-picked locations with great ambiance, modern facilities, and perfect environments for any occasion.",
      highlight: "Curated spaces"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Nationwide Access",
      description: "Seamlessly book across multiple cities. One platform, unlimited possibilities throughout Pakistan.",
      highlight: "Multi-city access"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Innovation First",
      description: "Cutting-edge technology meets traditional hospitality. Experience the future of space booking.",
      highlight: "Tech-powered"
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">RentMySpace</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another booking platform. We're your space partner, 
            committed to transforming how Pakistan celebrates and works.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex gap-6 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary flex-shrink-0">
                {reason.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-medium">
                    {reason.highlight}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Verified Spaces</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
            <p className="text-muted-foreground">Happy Users</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Cities Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;