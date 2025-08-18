import { Rocket, Heart, Lightbulb, Users, Clock, MapPin } from "lucide-react";

const WhatMakesUsDifferent = () => {
  const differentiators = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "First in Pakistan",
      description: "We pioneered hourly space booking in Pakistan, creating an entirely new way to celebrate and work.",
      stats: "First to Market"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "True Flexibility",
      description: "Book for 1 hour or 10+ hours. Scale up or down based on your actual needs, not fixed plans.",
      stats: "No Minimum Commitment"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Local Understanding",
      description: "Built by Pakistanis for Pakistanis. We understand local celebrations, business culture, and space needs.",
      stats: "100% Local"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Smart Technology",
      description: "AI-powered space matching, predictive availability, and seamless digital access systems.",
      stats: "AI-Powered"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focus",
      description: "More than spaces - we're building Pakistan's largest event and professional community hub.",
      stats: "10K+ Members"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Strategic Locations",
      description: "Prime business districts, near metro stations, with easy access and proximity to restaurants and services.",
      stats: "Premium Locations"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just following trends - we're setting them. Here's what sets RentMySpace apart 
            from traditional venue rentals and international competitors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-card hover:shadow-medium transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="text-primary group-hover:text-accent transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-medium">
                        {item.stats}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft animate-fade-in-up">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-foreground">
            RentMySpace vs Traditional Venue Rentals
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-muted-foreground mb-4">
                Traditional Venue Rentals
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>12-month minimum contracts</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Heavy security deposits</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Fixed space allocation</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Limited amenities</span>
                </div>
              </div>
            </div>
            
            {/* RentMySpace */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary mb-4">
                RentMySpace Advantage
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Book by the hour, no contracts</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Pay only for time used</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Choose different spaces daily</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Premium amenities included</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Experience the Difference Today
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the space revolution and see why thousands of people choose RentMySpace 
            for their events, meetings, and celebrations.
          </p>
          <button className="btn-hero">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;