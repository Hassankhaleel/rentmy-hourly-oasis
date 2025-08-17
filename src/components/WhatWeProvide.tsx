import { Wifi, Coffee, Car, Printer, Shield, Headphones, Users, Monitor } from "lucide-react";

const WhatWeProvide = () => {
  const amenities = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "High-Speed WiFi",
      description: "Blazing fast internet up to 1Gbps"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Complimentary Refreshments",
      description: "Tea, coffee, and light snacks included"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Parking Facility",
      description: "Secure parking spaces available"
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Business Services",
      description: "Printing, scanning, and copying facilities"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "24/7 Security",
      description: "Round-the-clock security and access control"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Phone Booths",
      description: "Private spaces for confidential calls"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Meeting Rooms",
      description: "Fully equipped conference facilities"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "AV Equipment",
      description: "Projectors, screens, and presentation tools"
    }
  ];

  const spaceTypes = [
    {
      title: "Hot Desks",
      description: "Flexible shared workspace perfect for freelancers and remote workers",
      price: "From PKR 200/hour",
      features: ["Open seating", "Shared amenities", "Community access", "Basic setup"]
    },
    {
      title: "Private Offices",
      description: "Dedicated spaces for teams and businesses requiring privacy",
      price: "From PKR 800/hour", 
      features: ["Lockable office", "Personal storage", "Team collaboration", "Professional setup"]
    },
    {
      title: "Meeting Rooms",
      description: "Professional conference rooms for presentations and client meetings",
      price: "From PKR 1,500/hour",
      features: ["AV equipment", "Whiteboard", "Video conferencing", "Catering options"]
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What <span className="text-gradient">We Provide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium workspaces equipped with everything you need to be productive, 
            professional, and comfortable.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:bg-secondary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {amenity.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Space Types */}
        <div className="grid lg:grid-cols-3 gap-8">
          {spaceTypes.map((space, index) => (
            <div 
              key={index}
              className="card-hover p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {space.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {space.description}
              </p>
              <div className="text-2xl font-bold text-primary mb-6">
                {space.price}
              </div>
              <ul className="space-y-3">
                {space.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Work Experience?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have discovered the flexibility and freedom of hourly workspace booking.
            </p>
            <button className="btn-hero-outline !border-white !text-white hover:!bg-white hover:!text-primary">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;