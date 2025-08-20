import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import beatask2 from "@/assets/beatask-2.jpeg";
import braid1 from "@/assets/braid-1.jpeg";
import ubank1 from "@/assets/ubank-1.jpeg";

const caseStudies = [
  {
    id: 1,
    title: "Beatask",
    description: "Worked on revamping Beatask, a marketplace app connecting users with helpers and cleaners. Focused on improving the log-in flow and fixing critical UX issues that were causing friction in user onboarding and engagement.",
    image: beatask2,
    tags: ["Figma", "Animations"],
    slug: "beatask"
  },
  {
    id: 2,
    title: "Braid",
    description: "Led the redesign of Braid’s web app, focusing on improving usability, hierarchy, and visual consistency across financial workflows. Revamped the OFAC compliance page, transaction details page, and dashboard to streamline navigation and enhance clarity.",
    image: braid1,
    tags: ["UX", "Figma"],
    slug: "braid"
  },
  {
    id: 3,
    title: "UBank",
    description: "Contributed to Ubank’s mobile and web app project during its final iteration, where progress had slowed. Focused on ensuring design quality and consistency across platforms, while accelerating delivery through attention to detail and stakeholder alignment.",
    image: ubank1,
    tags: ["Figma"],
    slug: "ubank"
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">My Work</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.id} 
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-border/20 hover:border-border/40 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {study.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {study.description}
                  </p>
                  
                  <Link to={`/case-study/${study.slug}`}>
                    <Button 
                      variant="ghost" 
                      className="py-1 px-2 h-auto font-medium text-primary hover:text-white group/btn"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/case-studies">
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5 hover:text-white">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;