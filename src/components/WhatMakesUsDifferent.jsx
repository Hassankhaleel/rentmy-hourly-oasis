import { Clock, Shield, MapPin, Users, Zap, Heart } from "lucide-react";

const WhatMakesUsDifferent = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "True Hourly Booking",
      description: "First platform in Pakistan offering genuine hourly space rentals. No minimum day requirements.",
      benefit: "Save up to 80% on traditional venue costs"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero Security Deposit", 
      description: "Book instantly without hefty security deposits. Our trust-based system protects both parties.",
      benefit: "No upfront payments or hidden fees"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Hyperlocal Coverage",
      description: "Deep presence in every major Pakistani city with local partnerships and cultural understanding.",
      benefit: "Spaces that understand your local needs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Ecosystem",
      description: "Connect with local vendors, caterers, decorators, and service providers through our platform.",
      benefit: "One-stop solution for all event needs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Matching",
      description: "AI-powered recommendations based on your event type, budget, and location preferences.",
      benefit: "Find perfect spaces in seconds"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Cultural Sensitivity",
      description: "Spaces and services designed with Pakistani traditions, customs, and celebration styles in mind.",
      benefit: "Venues that respect your values"
    }
  ];

  return (
    <section className="section-padding bg-secondary/10">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just copying international models. We're building something 
            uniquely Pakistani - understanding your culture, needs, and dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-6 p-8 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  {feature.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-white animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Traditional vs RentMySpace
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              See why thousands are switching from traditional venue booking to our modern approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-lg font-bold mb-4 text-white/70">Traditional Booking</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  Full day minimum bookings
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  Heavy security deposits
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  Limited venue options
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  Complex booking process
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  No quality assurance
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/30">
              <h4 className="text-lg font-bold mb-4 text-accent">RentMySpace Way</h4>
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Book by the hour, save money
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Zero security deposits
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  500+ verified premium spaces
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  2-minute instant booking
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  Quality guaranteed spaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;