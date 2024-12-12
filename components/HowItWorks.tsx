//show clients the process of steps on how we work on project

//1 discovery call
//2 Project breakdown
//3 sitback relax, get updates
//project done



//project update section

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneCall, Search, Code, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery Call",
    icon: PhoneCall,
    points: [
      "Understand your business needs and goals",
      "Discuss project scope and timeline",
      "Identify key challenges and opportunities",
    ],
  },
  {
    title: "Research & Project Breakdown",
    icon: Search,
    points: [
      "Conduct in-depth market and competitor analysis",
      "Create detailed project roadmap and milestones",
      "Define technical requirements and architecture",
    ],
  },
  {
    title: "Development & Updates",
    icon: Code,
    points: [
      "Implement agile development methodology",
      "Provide regular progress updates and demos",
      "Iterate based on feedback and changing requirements",
    ],
  },
  {
    title: "Launch & Growth",
    icon: Rocket,
    points: [
      "Perform thorough testing and quality assurance",
      "Execute smooth deployment and launch strategy",
      "Provide ongoing support and growth optimization",
    ],
  },
];

export default function HowItWorks() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 bg-emerald-100 p-3 rounded-full">
                {<step.icon className="w-6 h-6 text-emerald-700" />}
              </div>
              <CardTitle className="text-xl font-semibold">
              {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <ul className="list-disc pl-5 space-y-2 mb-4">
                {step.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-md">
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
