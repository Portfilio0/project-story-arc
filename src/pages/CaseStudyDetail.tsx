import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CaseStudyGallery from "@/components/ui/case-study-gallery";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import beatask1 from "@/assets/beatask-1.jpeg";
import beatask2 from "@/assets/beatask-2.jpeg";
import beatask3 from "@/assets/beatask-3.jpeg";
import beatask4 from "@/assets/beatask-4.jpeg";
import beatask5 from "@/assets/beatask-5.jpeg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy2Journey from "@/assets/case-study-2-journey.jpg";
import caseStudy2Testing from "@/assets/case-study-2-testing.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";
import caseStudy3DesignSystem from "@/assets/case-study-3-design-system.jpg";
import caseStudy3Personas from "@/assets/case-study-3-personas.jpg";

const caseStudyData = {
  "beatask": {
    title: "Beatask",
    subtitle: "Marketplace App Revamp",
    description: "Worked on revamping Beatask, a marketplace app connecting users with helpers and cleaners. Focused on improving the log-in flow and fixing critical UX issues that were causing friction in user onboarding and engagement.",
    image: beatask2,
    images: [beatask2, beatask1, beatask3, beatask4, beatask5],
    tags: ["Figma", "Animations"],
    year: "2025",
    duration: "3 months",
    role: "UI UX Designer",
    challenge: "The existing app faced major usability issues:\n- Confusing navigation that led to high user drop-off.\n- Complicated login and checkout flows. \n- Lack of engaging elements such as animations and micro-interactions.",
    solution: "- Revamped core user flows, simplifying navigation and reducing friction in login and checkout.\n- Applied Material Design principles to establish a scalable, consistent design system.\n- Introduced animations and micro-interactions to improve user engagement.\n- Delivered responsive layouts for mobile and web, ensuring cross-device usability.",
    results: [
      "Improved task completion and reduced checkout abandonment.",
      "Enhanced user engagement through micro-interactions.",
      "Delivered a modern app experience that aligned with the client’s vision and business goals."
    ],
    features: [
      "Clean, intuitive navigation system.",
      "Streamlined login and checkout flow.",
      "Scalable design system based on Material Design.",
      "Engaging interactions with animations and transitions."
    ]
  },
  "braid": {
    title: "Braid",
    subtitle: "Web App Revamp",
    description: "Led the redesign of Braid’s web app, focusing on improving usability, hierarchy, and visual consistency across financial workflows. Revamped the OFAC compliance page, transaction details page, and dashboard to streamline navigation and enhance clarity.",
    image: caseStudy2,
    images: [caseStudy2, caseStudy2Journey, caseStudy2Testing],
    tags: ["UX", "Figma"],
    year: "2025",
    duration: "4 months",
    role: "UI UX Designer & Researcher",
    challenge: "The web app faced several UX pain points:\n- Complex navigation across financial workflows.\n- Poor hierarchy and cluttered layouts in dashboard and transaction pages.\n- Compliance-heavy OFAC page lacked clarity and usability.",
    solution: "- Redesigned the dashboard to provide a cleaner overview and prioritize essential information.\n- Improved transaction details pages by simplifying layouts and enhancing readability.\n- Revamped the OFAC compliance page for better usability and clearer action states.\n- Applied consistent design patterns to reduce cognitive load and improve overall flow.",
    results: [
      "Reduced user drop-off from complex workflows.",
      "Increased efficiency in reviewing transactions and compliance checks.",
      "Enhanced visual consistency and usability, improving customer satisfaction."
    ],
    features: [
      "Streamlined dashboard with intuitive hierarchy.",
      "Optimized transaction details with improved structure.",
      "User-friendly OFAC page aligned with compliance standards.",
      "High-fidelity wireframes and interactive prototypes for seamless developer handoff."
    ]
  },
  "saas-platform": {
    title: "SaaS Team Collaboration Platform",
    subtitle: "Enterprise Workflow Design",
    description: "Designed comprehensive team collaboration platform using design thinking methodology to streamline complex enterprise workflows and boost productivity.",
    image: caseStudy3,
    images: [caseStudy3, caseStudy3DesignSystem, caseStudy3Personas],
    tags: ["Design Systems", "User Personas", "Wireframing", "Adobe XD", "Enterprise UX"],
    year: "2024",
    duration: "8 months",
    role: "Lead UX Designer & Design Systems Architect",
    challenge: "Enterprise teams were using 8+ different tools to manage projects, causing context switching, data silos, and collaboration breakdowns. User research showed 73% of teams felt overwhelmed by tool complexity and spent 2+ hours daily just managing workflows.",
    solution: "I led design thinking workshops with 50+ stakeholders, created detailed user personas for different team roles, and designed a unified platform. Built a comprehensive design system, conducted extensive usability testing, and created role-specific interfaces that adapt to user needs.",
    results: [
      "45% increase in team productivity metrics",
      "60% reduction in time spent on administrative tasks",
      "85% user adoption rate within first month",
      "92% of users found the interface intuitive (vs 23% with previous tools)",
      "50% decrease in project delivery time"
    ],
    features: [
      "Adaptive interface based on user role and context",
      "Comprehensive design system with 120+ components",
      "Smart project automation and suggestions",
      "Unified communication and file sharing",
      "Advanced permissions and workflow customization",
      "Cross-platform consistency (web, mobile, desktop)"
    ]
  }
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudyData[slug as keyof typeof caseStudyData] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies">
            <Button>Back to Case Studies</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Link to="/case-studies" className="inline-flex items-center text-muted-foreground hover:text-primary transition-smooth mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
              
              <div className="space-y-12">
                <div>
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
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                    {study.title}
                  </h1>
                  
                  <h2 className="text-xl text-muted-foreground mb-6 animate-slide-up">
                    {study.subtitle}
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-8 animate-slide-up">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                    <Button className="bg-gradient-primary hover:shadow-glow">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-primary/20 hover:border-primary">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </div>
                
                <div className="animate-fade-in">
                  <CaseStudyGallery 
                    images={study.images}
                    title={study.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Details */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Project Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-primary mb-2">Year</h3>
                    <p className="text-muted-foreground">{study.year}</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-primary mb-2">Duration</h3>
                    <p className="text-muted-foreground">{study.duration}</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-primary mb-2">Role</h3>
                    <p className="text-muted-foreground">{study.role}</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Challenge & Solution */}
              <div className="space-y-16">
                <div>
                  <h3 className="text-3xl font-bold mb-6">The Challenge</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                    {study.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold mb-6">The Solution</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                    {study.solution}
                  </p>
                </div>
                
                {/* Features */}
                <div>
                  <h3 className="text-3xl font-bold mb-6">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {study.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Results */}
                <div>
                  <h3 className="text-3xl font-bold mb-6">Results & Impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {study.results.map((result, index) => (
                      <Card key={index} className="border border-border/10 bg-card backdrop-blur-sm">
                        <CardContent className="p-6">
                          <p className="font-medium text-foreground">{result}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaseStudyDetail;