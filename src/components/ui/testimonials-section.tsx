import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jake Zhu",
    role: "CPTO, Braid",
    content: "The user research and design process was thorough. Our dashboard redesign increased user engagement by 60% and reduced support tickets significantly.",
    rating: 5
  },
  {
    name: "Usama Hafeez",
    role: "Co-founder, Petmera",
    content: "Noor designed PetMera from scratch across mobile, tablet, and web screens. Her attention to detail and intuitive designs made the app highly usable and ensured a smooth development process.",
    rating: 5
  },
  {
    name: "Salman AlQahtani",
    role: "Project Manager, Beatask",
    content: "Outstanding collaboration and design thinking. Noor redesigned key screens of our Beatask app, including the home, product listing, and checkout pages. The new interface reduced onboarding time by 50% and our users love the intuitive workflow.  Her attention to detail and intuitive designs improved usability and made development smooth. Highly recommended.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;