import { Building2, Clock, Smartphone, Shield, Headphones, CreditCard } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Premium Venues",
      description: "Access to high-quality event spaces, party halls, meeting rooms, and workspaces equipped with modern amenities."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Hourly Booking",
      description: "Revolutionary pay-per-hour model. Book exactly what you need, when you need it. No long-term commitments."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Instant Booking",
      description: "Book spaces in real-time through our platform. Get instant confirmation and digital access codes."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Locations",
      description: "All spaces are thoroughly vetted and verified. Clean, safe, and professional environments guaranteed."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with bookings, access issues, or any queries."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Flexible Payments",
      description: "Multiple payment options including digital wallets, bank transfers, and corporate billing solutions."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What <span className="text-gradient">We Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            RentMySpace revolutionizes space access in Pakistan by providing flexible, 
            hourly-based booking solutions for events, parties, meetings, and work.
          </p>
        </div>

        <div className="feature-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-hover p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-soft">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
              Transforming How Pakistan Celebrates & Works
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From birthday parties needing a perfect venue to businesses requiring 
              temporary meeting spaces, RentMySpace connects you to the perfect 
              space solution across major Pakistani cities including Karachi, Lahore, 
              Islamabad, Peshawar, and Faisalabad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;