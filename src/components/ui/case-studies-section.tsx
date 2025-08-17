import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const caseStudies = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description: "A comprehensive web application for data visualization and business intelligence.",
    image: caseStudy1,
    tags: ["React", "TypeScript", "D3.js"],
    slug: "analytics-dashboard"
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    description: "Modern mobile shopping experience with seamless user interface.",
    image: caseStudy2,
    tags: ["React Native", "Node.js", "MongoDB"],
    slug: "ecommerce-app"
  },
  {
    id: 3,
    title: "SaaS Platform",
    description: "Enterprise-grade platform for project management and team collaboration.",
    image: caseStudy3,
    tags: ["Next.js", "PostgreSQL", "AWS"],
    slug: "saas-platform"
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and creative design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.id} 
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
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
                      className="p-0 h-auto font-medium text-primary hover:text-primary-glow group/btn"
                    >
                      View Case Study
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
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5">
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