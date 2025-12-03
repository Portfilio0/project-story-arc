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
import beatask6 from "@/assets/beatask-6.png";
import beatask7 from "@/assets/beatask-7.png";
import beatask8 from "@/assets/beatask-8.png";
import beatask9 from "@/assets/beatask-9.png";
import beatask10 from "@/assets/beatask-10.png";
import ubank1 from "@/assets/ubank-1.jpeg";
import ubank2 from "@/assets/ubank-2.jpeg";
import ubank3 from "@/assets/ubank-3.jpeg";
import ubank4 from "@/assets/ubank-4.jpeg";
import braid1 from "@/assets/braid-1.jpeg";
import braid2 from "@/assets/braid-2.jpeg";
import mbank15 from "@/assets/meezan-bank-15.jpeg";

const caseStudyData = {
  "beatask": {
    title: "Beatask",
    subtitle: "Marketplace App Revamp",
    description: "Worked on revamping Beatask, a marketplace app connecting users with helpers and cleaners. Focused on improving the log-in flow and fixing critical UX issues that were causing friction in user onboarding and engagement.",
    image: beatask2,
    images: [beatask2, beatask1, beatask3, beatask4, beatask5, beatask6, beatask7, beatask8, beatask9, beatask10],
    tags: ["Figma", "Animations"],
    year: "2025",
    duration: "3 months",
    role: "UI UX Designer",
    pdfLink: undefined,
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
    image: braid1,
    images: [braid1, braid2],
    tags: ["UX", "Figma"],
    year: "2025",
    duration: "4 months",
    role: "UI UX Designer & Researcher",
    pdfLink: undefined,
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
  "ubank": {
    title: "UBank",
    subtitle: "Mobile & Web App (Final Iteration Support)",
    description: "Contributed to Ubank’s mobile and web app project during its final iteration, where progress had slowed. Focused on ensuring design quality and consistency across platforms, while accelerating delivery through attention to detail and stakeholder alignment.",
    image: ubank1,
    images: [ubank1, ubank2, ubank3, ubank4],
    tags: ["Figma"],
    year: "2024",
    duration: "4 months",
    role: "UI UX Desginer",
    pdfLink: undefined,
    challenge: "- The project was lagging in its final iteration, with tight deadlines and stakeholder pressure.\n- Both mobile and web screens had usability inconsistencies and visual errors.\n- Delays in reviews risked missing the release timeline.",
    solution: "- Audited all mobile and web app flows with meticulous attention to detail.\n- Corrected small but critical errors that affected hierarchy, alignment, and usability.\n- Ensured consistency across platforms (mobile ↔ web).\n- Presented polished screens directly to stakeholders, speeding up feedback cycles.\n- Collaborated closely with the team to quickly implement feedback and finalize designs.",
    results: [
      "Accelerated the design process, enabling on-time delivery of both apps.",
      "Reduced design-review rework through quality-first refinements.",
      "Boosted stakeholder confidence with polished, ready-to-ship designs.",
      "Contributed directly to the successful completion of the final iteration."
    ],
    features: [
      "Pixel-perfect refinements on both mobile and web app screens.",
      "Improved navigation consistency, hierarchy, and error handling.",
      "Streamlined design review process via stakeholder presentations.",
      "Delivered final high-quality screens with minimal rework."
    ]
  },
  "meezan-bank": {
    title: "Meezan Bank (Case Study)",
    subtitle: "Banking App Redesign",
    description: "The banking app redesign aimed to streamline the payment process by introducing a Quick Pay feature and enhancing beneficiary management. The solution reduced friction in transactions and improved user satisfaction by allowing direct payments without the need to save every recipient as a beneficiary.",
    image: mbank15,
    images: [mbank15],
    pdfLink: "/meezan-bank-case-study.pdf",
    tags: ["Figma", "UX Research"],
    year: "2024",
    duration: "1 months",
    role: "UI UX Desginer",
    challenge: "Users of the current banking app face frustration due to the mandatory requirement of adding a beneficiary before making payments or transfers. This process is cumbersome and leads to a cluttered list of unnecessary beneficiaries, particularly when users only need to make one-time payments.",
    solution: "Objective 1:\nTo enhance the user experience by allowing direct payments without the need to add a beneficiary first, streamline beneficiary management.\nObjective 2:\nTo ensure that only important contacts are saved as beneficiaries while maintaining a transaction history for easy tracking.\n\nQuantitative Research\nThe quantitative research revealed critical areas where the current app experience falls short. These insights guided the design of a more efficient and user-friendly solution that aligns with user needs and expectations.\n\nMethodology\n\nUser Surveys\nDesign: I designed an online survey with structured questions aimed at understanding users' frequency of app usage, common tasks performed, and the challenges faced, especially related to beneficiary management and payment processes.\nDistribution: The survey was distributed to a diverse group of users through email and social media platforms, targeting users who frequently engage in digital banking.\nSample Size: I received responses from 40 users, providing a substantial dataset to analyze trends and patterns in user behavior.\nUsage Analytics: Data Analysis: Using tools like Excel, Google Sheets, I analyzed the data to identify bottlenecks and inefficiencies in the user journey.",
    results: [
      "User testing revealed that the new features significantly reduced the time taken to complete payments.", 
      "80% of users finding the Quick Pay option more efficient than previous methods."
    ],
    features: [
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
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/case-studies">
            <Button>Back to Projects</Button>
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
                Back to Projects
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
                  
                  {study.pdfLink && (
                    <a href={study.pdfLink} target="_blank" rel="noopener noreferrer">
                      <Button className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Full Case Study (PDF)
                      </Button>
                    </a>
                  )}
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
                {
                  study.features.length > 0 && (<div>
                  <h3 className="text-3xl font-bold mb-6">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {study.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>)
                }
                
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