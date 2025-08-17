import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const caseStudyData = {
  "analytics-dashboard": {
    title: "Analytics Dashboard",
    subtitle: "Data Visualization & Business Intelligence Platform",
    description: "A comprehensive web application designed to help businesses make data-driven decisions through intuitive visualizations and real-time analytics.",
    image: caseStudy1,
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    year: "2024",
    duration: "4 months",
    role: "Full-Stack Developer & UI/UX Designer",
    challenge: "The client needed a way to visualize complex business data from multiple sources in real-time. The existing reporting system was outdated and couldn't handle the volume of data or provide the interactive experience users needed.",
    solution: "I developed a modern dashboard using React and TypeScript for the frontend, with D3.js for custom data visualizations. The backend was built with Node.js and PostgreSQL to handle real-time data processing and API management.",
    results: [
      "40% increase in user engagement with business reports",
      "60% reduction in time spent generating insights",
      "Real-time data processing for 10,000+ records per second",
      "Mobile-responsive design with 95% user satisfaction"
    ],
    features: [
      "Interactive data visualizations with D3.js",
      "Real-time dashboard updates",
      "Custom report generation",
      "User role-based access control",
      "Export functionality (PDF, Excel, CSV)",
      "Mobile-responsive design"
    ]
  },
  "ecommerce-app": {
    title: "E-Commerce Mobile App",
    subtitle: "Modern Shopping Experience",
    description: "A sleek mobile application that revolutionizes online shopping with an intuitive interface and seamless payment integration.",
    image: caseStudy2,
    tags: ["React Native", "Node.js", "MongoDB", "Stripe", "Firebase"],
    year: "2023",
    duration: "6 months",
    role: "Mobile App Developer & UI/UX Designer",
    challenge: "The client wanted to enter the mobile commerce space with a app that could compete with major e-commerce platforms while providing a unique, branded experience for their customers.",
    solution: "I created a cross-platform mobile app using React Native, with a Node.js backend and MongoDB database. Integrated Stripe for payments and Firebase for real-time notifications and user authentication.",
    results: [
      "50,000+ app downloads in first month",
      "25% higher conversion rate vs web platform",
      "4.8/5 star rating on app stores",
      "30% increase in customer retention"
    ],
    features: [
      "Cross-platform mobile app (iOS & Android)",
      "Secure payment processing with Stripe",
      "Real-time order tracking",
      "Push notifications for offers and updates",
      "Wishlist and favorites functionality",
      "Social media integration"
    ]
  },
  "saas-platform": {
    title: "SaaS Platform",
    subtitle: "Project Management & Team Collaboration",
    description: "An enterprise-grade platform that streamlines project management and enhances team collaboration with advanced features and integrations.",
    image: caseStudy3,
    tags: ["Next.js", "PostgreSQL", "AWS", "Redis", "WebSocket"],
    year: "2024",
    duration: "8 months",
    role: "Lead Developer & Technical Architect",
    challenge: "A growing startup needed a scalable project management solution that could handle multiple teams, complex workflows, and integrate with existing tools while maintaining high performance.",
    solution: "Built a comprehensive SaaS platform using Next.js for the frontend, PostgreSQL for data management, AWS for cloud infrastructure, and Redis for caching. Implemented real-time collaboration features using WebSocket technology.",
    results: [
      "500+ teams onboarded in first quarter",
      "99.9% uptime with auto-scaling infrastructure",
      "45% improvement in team productivity metrics",
      "Integration with 20+ third-party tools"
    ],
    features: [
      "Real-time collaboration and editing",
      "Advanced project tracking and analytics",
      "Custom workflow automation",
      "Third-party integrations (Slack, GitHub, etc.)",
      "Role-based permissions and security",
      "Multi-tenant architecture"
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
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full rounded-lg shadow-elegant"
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
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {study.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold mb-6">The Solution</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
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
                      <Card key={index} className="border-0 bg-primary/5 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <p className="font-medium text-primary">{result}</p>
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