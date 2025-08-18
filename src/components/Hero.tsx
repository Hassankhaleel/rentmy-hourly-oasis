import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center text-white animate-fade-in-up max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20">
              <MapPin className="w-4 h-4" />
              Available Across Pakistan
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Book Your Perfect 
            <span className="text-gradient block">Workspace</span>
            <span className="text-accent">By The Hour</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
            Revolutionary hourly space booking platform connecting you to premium workspaces, 
            meeting rooms, and collaborative spaces across Pakistan. 
            <strong className="text-accent"> Work anywhere, anytime.</strong>
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero group">
              Start Booking Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-hero-outline">
              Explore Locations
            </button>
          </div>
        </div>
        
        {/* Floating Cards */}
        <div className="absolute top-20 left-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-medium animate-fade-in border border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white">Book in Minutes</p>
              <p className="text-xs text-white/70">Instant confirmation</p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-20 right-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-medium animate-fade-in border border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white">Prime Locations</p>
              <p className="text-xs text-white/70">Across major cities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;