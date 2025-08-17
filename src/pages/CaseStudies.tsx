import Navigation from "@/components/ui/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const allCaseStudies = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description: "A comprehensive web application for data visualization and business intelligence with real-time analytics.",
    image: caseStudy1,
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    slug: "analytics-dashboard",
    year: "2024"
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    description: "Modern mobile shopping experience with seamless user interface and advanced payment integration.",
    image: caseStudy2,
    tags: ["React Native", "Node.js", "MongoDB", "Stripe"],
    slug: "ecommerce-app",
    year: "2023"
  },
  {
    id: 3,
    title: "SaaS Platform",
    description: "Enterprise-grade platform for project management and team collaboration with advanced features.",
    image: caseStudy3,
    tags: ["Next.js", "PostgreSQL", "AWS", "Redis"],
    slug: "saas-platform",
    year: "2024"
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Case <span className="bg-gradient-primary bg-clip-text text-transparent">Studies</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up">
                Detailed insights into my design and development process, showcasing the journey from concept to completion.
              </p>
            </div>
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {allCaseStudies.map((study, index) => (
                <Card 
                  key={study.id} 
                  className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {study.year}
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                        {study.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {study.description}
                      </p>
                      
                      <Link to={`/case-study/${study.slug}`}>
                        <Button 
                          variant="ghost" 
                          className="p-0 h-auto font-medium text-primary hover:text-primary-glow group/btn"
                        >
                          View Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaseStudies;