import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20">
                <MapPin className="w-4 h-4" />
                Available Across Pakistan
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Book Your Perfect 
              <span className="text-gradient block">Workspace</span>
              <span className="text-accent">By The Hour</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Revolutionary hourly space booking platform connecting you to premium workspaces, 
              meeting rooms, and collaborative spaces across Pakistan. 
              <strong className="text-accent"> Work anywhere, anytime.</strong>
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-accent" />
                <span className="font-semibold">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Users className="w-5 h-5 text-accent" />
                <span className="font-semibold">500+ Spaces</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-hero group">
                Start Booking Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-hero-outline">
                Explore Locations
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern coworking space in Pakistan" 
                className="w-full h-auto rounded-3xl shadow-strong"
              />
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-medium animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Book in Minutes</p>
                    <p className="text-xs text-muted-foreground">Instant confirmation</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-medium animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Prime Locations</p>
                    <p className="text-xs text-muted-foreground">Across major cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;