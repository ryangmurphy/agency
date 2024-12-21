"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  hoverImage: string;
  bio: string;
  linkedin: string;
  buttonText: string;
  badges: string[];
}

const teamMembers: TeamMember[] = [
  /*
  {
    name: "Ryan Murphy",
    role: "Software Developer",
    image: "/about/developer.png",
    hoverImage: "/ryan.jpg",
    bio: "Ryan has a dynamic entrepreneurial spirit and a passion for creating meaningful value for customers. With a solid foundation in commerce and software development, Ryan earned a Bachelor of Commerce from Saint Mary’s University before completing a Full Stack Development graduate certificate from Nova Scotia Community College. \n \nRyan seamlessly wears many “hats” leveraging expertise in business operations, marketing, social media, web development, ai, and more. His creativity and diverse skill set make him a driving force behind innovative solutions and exceptional customer experiences. \n \n Some of Ryan’s interests outside of the corporate world include fitness, video editing, photography,, and he is a huge anime fan. He also recently took up golf in 2024 and discovered a new passion for bouldering. Ryan’s fascination with technology started early—he built his first PC and created his first website as a teenager, setting the foundation for his lifelong interest in all things tech.",
    buttonText: "Behind the Scenes",
    linkedin: "https://www.linkedin.com/in/ryangmurphy",
    badges: [],
  }, */
  {
    name: "Thackery Wallis",
    role: "Business Director",
    image: "/about/thack-headshot.png",
    hoverImage: "/thack.webp",
    bio: "Thackery is an entrepreneur",
    buttonText: "Behind the Scenes",
    linkedin: "https://www.linkedin.com/in/thackwallis/",
    badges: [],
  },
  {
    name: "Jonson Allen",
    role: "Software Developer",
    image: "/about/thack-ai.png",
    hoverImage: "/jonson.jpg",
    bio: "Jonson is a tech enthusiast and coding wizard. With a background in computer science and machine learning, he leads our development team in creating cutting-edge web applications.",
    buttonText: "Behind the Scenes",
    linkedin: "https://www.linkedin.com/in/jonson-allen-56a29227a/",
    badges: [],
  },
  {
    name: "Mathew Combden",
    role: "Software Developer",
    image: "/about/murph-ai.png",
    hoverImage: "/matt.jpg",
    bio: "Behind the Scenes",
    buttonText: "Behind the Scenes",
    linkedin: "https://www.linkedin.com/in/mathewcombdon",
    badges: [],
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <div className="min-h-screen pb-24">
      <div className="container px-4  mx-auto">
        <div className="space-y-8 pt-36 text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold font-serif tracking-tighter">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto">
            We blend creativity, focus, and a dash of fun to achieve great
            things
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-5xl mx-auto pb-16">
          {teamMembers.map((member) => (
            <Card key={member.name} className="border-none rounded-t-full">
              <CardContent className="p-4">
                <div
                  className="aspect-[3/4] relative overflow-hidden rounded-lg mb-4"
                  onMouseEnter={() => setHoveredMember(member.name)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <Image
                    src={
                      hoveredMember === member.name
                        ? member.hoverImage
                        : member.image
                    }
                    alt={member.name}
                    fill
                    className="object-cover transition-opacity duration-300 rounded-t-full cursor-crosshair overflow-hidden"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-semibold">{member.name}</h2>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <LinkedInLogoIcon className="h-6 w-6" />
                    </a>
                  </div>
                  <Button
                    onClick={() => setSelectedMember(member)}
                    variant="outline"
                    className="w-full px-4 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-green-700 hover:text-white"
                  >
                    {member.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg p-6 max-w-xl w-full">
            <h2 className="text-2xl font-bold mb-2">{selectedMember.name}</h2>
            <p className="text-muted-foreground mb-4">{selectedMember.role}</p>
            <p className="mb-4 whitespace-pre-line">{selectedMember.bio}</p>
            <div className="flex flex-wrap gap-2 my-6">
              {selectedMember.badges.map((badge) => (
                <Badge key={badge} variant="default" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
            <Button onClick={() => setSelectedMember(null)}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}
