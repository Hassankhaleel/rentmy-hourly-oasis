import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import { useState, useEffect } from "react";
import heroMultipurpose from "@/assets/hero-image-new.jpg";
import heroParty from "@/assets/hero-party.jpg";
import heroMeeting from "@/assets/hero-meeting.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";
import heroSocial from "@/assets/hero-social.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: heroMultipurpose,
      title: "Book Your Perfect Space",
      subtitle: "By The Hour",
      description: "Revolutionary hourly space booking platform connecting you to premium venues, event spaces, meeting rooms, and party halls across Pakistan.",
      highlight: "Any space, any occasion, anytime."
    },
    {
      image: heroParty,
      title: "Perfect Party Venues",
      subtitle: "For Every Celebration",
      description: "Transform your birthday parties, anniversaries, and special celebrations with our premium party venues equipped with everything you need.",
      highlight: "Make every moment memorable."
    },
    {
      image: heroMeeting,
      title: "Professional Meeting Rooms",
      subtitle: "For Business Success",
      description: "Elevate your business meetings, presentations, and corporate discussions in our modern, fully-equipped conference spaces.",
      highlight: "Where business gets done."
    },
    {
      image: heroWedding,
      title: "Elegant Wedding Venues",
      subtitle: "For Your Special Day",
      description: "Create unforgettable wedding receptions and ceremonies in our beautifully designed event halls with premium amenities.",
      highlight: "Your dream day awaits."
    },
    {
      image: heroCorporate,
      title: "Corporate Event Spaces",
      subtitle: "For Professional Networking",
      description: "Host impressive corporate events, product launches, and networking sessions in our sophisticated business venues.",
      highlight: "Connect, collaborate, succeed."
    },
    {
      image: heroSocial,
      title: "Social Gathering Spaces",
      subtitle: "For Friends & Family",
      description: "Bring people together in our comfortable, modern spaces perfect for casual meetups, reunions, and social events.",
      highlight: "Where connections happen."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const currentHero = heroSlides[currentSlide];

  return (
    <section 
      className="min-h-screen relative overflow-hidden flex items-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${currentHero.image})`,
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
            {currentHero.title}
            <span className="text-gradient block">{currentHero.subtitle.split(' ')[0]}</span>
            <span className="text-accent">{currentHero.subtitle.split(' ').slice(1).join(' ')}</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
            {currentHero.description}
            <strong className="text-accent"> {currentHero.highlight}</strong>
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
          
          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-accent shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          {/* Waiting List */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email to join the waiting list"
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="btn-hero whitespace-nowrap">
                Join Waiting List
              </button>
            </div>
            <p className="text-sm text-white/70 mt-3 text-center">
              Be the first to know when we launch in your city!
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero-outline">
              Learn More
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