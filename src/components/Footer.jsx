import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const cities = [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", 
    "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala"
  ];

  const quickLinks = [
    "How It Works", "Pricing", "Locations", "For Business", "Support", "Blog"
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Rent<span className="text-accent">MySpace</span>
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Pakistan's premier hourly workspace booking platform. 
              Transforming how professionals work across the country.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors animated-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Available Cities</h4>
            <ul className="space-y-2">
              {cities.slice(0, 6).map((city, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-accent transition-colors text-sm animated-underline">
                    {city}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-white/60 text-sm mt-4">+ 9 more cities</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80 text-sm">
                    Main Office: I.I. Chundrigar Road,<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:hello@rentmyspace.pk" className="text-white/80 text-sm hover:text-accent transition-colors">
                  hello@rentmyspace.pk
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+923001234567" className="text-white/80 text-sm hover:text-accent transition-colors">
                  +92 300 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 RentMySpace. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 text-sm hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;