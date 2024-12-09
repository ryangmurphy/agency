import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Layout, Zap } from "lucide-react";

export default function WebDevelopmentService() {
  return (
    <div className="bg-background min-h-screen">
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Web Development Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transforming your digital vision into powerful, responsive websites
          </p>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4 space-y-16">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Web Development Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Layout className="h-6 w-6 mr-2" />
                  <span>Responsive Design</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Create websites that look great and function flawlessly on all
                  devices, from desktops to smartphones.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-6 w-6 mr-2" />
                  <span>Custom Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Build tailor-made web solutions that perfectly align with your
                  unique business needs and goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-6 w-6 mr-2" />
                  <span>Performance Optimization</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Enhance your website&apos;s speed and efficiency for better
                  user experience and improved SEO rankings.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Web Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Our Web Development Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Web Project?
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Let&apos;s discuss how we can bring your web development ideas to
            life.
          </p>
          <Button size="lg">Get a Free Consultation</Button>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Web Development Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const process = [
  {
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience to create a tailored web strategy.",
  },
  {
    title: "Design",
    description:
      "Our designers create visually appealing and user-friendly mockups that align with your brand identity.",
  },
  {
    title: "Development",
    description:
      "Our expert developers bring the designs to life, ensuring clean code and optimal functionality.",
  },
  {
    title: "Launch & Support",
    description:
      "We thoroughly test, launch your website, and provide ongoing support to ensure continued success.",
  },
];

const reasons = [
  {
    title: "Expertise in Latest Technologies",
    description:
      "Our team stays up-to-date with cutting-edge web technologies to deliver modern and efficient solutions.",
  },
  {
    title: "Customized Solutions",
    description:
      "We don't believe in one-size-fits-all. Every website we create is tailored to meet your specific needs.",
  },
  {
    title: "Responsive and User-Friendly Design",
    description:
      "We ensure your website looks great and functions perfectly on all devices and screen sizes.",
  },
  {
    title: "Ongoing Support and Maintenance",
    description:
      "Our relationship doesn't end at launch. We provide continuous support to keep your website running smoothly.",
  },
];
