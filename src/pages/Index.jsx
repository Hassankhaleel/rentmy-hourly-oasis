import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatWeProvide from "@/components/WhatWeProvide";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <WhatWeProvide />
      <WhatMakesUsDifferent />
      <Footer />
    </div>
  );
};

export default Index;