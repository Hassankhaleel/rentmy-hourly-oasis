import { 
  Calendar, Clock, MapPin, Users, Shield, Star, 
  Coffee, Wifi, Car, Headphones 
} from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Instant Booking",
      description: "Book any space in minutes with real-time availability and instant confirmation."
    },
    {
      icon: <Clock className="w-8 h-8" />,  
      title: "Hourly Flexibility",
      description: "Pay only for the hours you need. Perfect for short meetings or all-day events."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Prime Locations", 
      description: "Access premium venues in the heart of Pakistan's major business districts."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "All Event Types",
      description: "From business meetings to birthday parties, weddings to corporate events."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Spaces",
      description: "Every venue is personally verified and meets our high standards for quality."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Amenities", 
      description: "High-speed WiFi, AV equipment, catering, and professional support."
    }
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What <span className="text-gradient">We Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing how people access and use spaces across Pakistan. 
            From spontaneous meetings to planned celebrations, we make it simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-hover text-center p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-white text-center animate-fade-in-up">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Transforming How Pakistan Celebrates & Works
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            From bustling Karachi boardrooms to elegant Lahore wedding halls, intimate Islamabad gatherings 
            to grand Rawalpindi celebrations - we're making premium spaces accessible to everyone, 
            one hour at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-white/80">Major Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/80">Premium Spaces</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">10K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;