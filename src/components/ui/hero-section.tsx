import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import profilePicture from "@/assets/profile-picture.png";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Portfolio hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center mb-8">
            <Avatar className="w-24 h-24 mb-6 animate-fade-in shadow-elegant">
              <AvatarImage src={profilePicture} alt="Usama Hafeez" />
              <AvatarFallback>UH</AvatarFallback>
            </Avatar>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Usama Hafeez</span>
              <br />UI/UX Designer & Researcher
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-slide-up max-w-2xl mx-auto">
            Creating intuitive, user-centered digital experiences through research, prototyping, and data-driven design solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-smooth"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;