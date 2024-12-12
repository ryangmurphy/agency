"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Form from "@/components/contact/ContactForm"
import {
  MapPin,
  Mail,
  PhoneCallIcon,
} from "lucide-react";
import Link from "next/link";
import { LinkedInLogoIcon, TwitterLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center md:mb-12">
        <h1 className="text-4xl font-bold md:mb-4">Connect with Us</h1>
        <p className="text-muted-foreground"></p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Form />
        <Card className="h-fit">
          <CardContent className="space-y-8 p-6">
            <div className="space-y-4">
              <div className="w-full h-[300px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45228.43351143492!2d-63.59825765!3d44.67204135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a23b9c2eb3785%3A0x68889900a8bb4782!2sDartmouth%2C%20NS!5e0!3m2!1sen!2sca!4v1701977149943!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex space-x-2">
                <MapPin className="h-6 w-6" />
                <span className=" font-semibold">
                  Dartmouth, Nova Scotia, Canada
                </span>
              </div>
              <div className="space-y-4">
                <Link href="mailto:contact@munkdevs.com">
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="mr-2 h-5 w-5" />
                    contact@munkdevs.com
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <PhoneCallIcon className="mr-2 h-5 w-5" />
                  9026996969
                </Button>
              </div>
              <div className="space-y-4 pb-24">
                <h3 className="font-semibold">Social Media</h3>
                <div className="grid grid-cols-4">
                  <ul className="flex items-center space-x-6 text-muted-foreground">
                    <li className="font-medium hover:text-primary">
                      <a href="/">
                        <LinkedInLogoIcon className="size-8" />
                      </a>
                    </li>
                    <li className="font-medium hover:text-primary">
                      <a href="/">
                        <InstagramLogoIcon className="size-8" />
                      </a>
                    </li>
                    <li className="font-medium hover:text-primary">
                      <a href="/">
                        <FacebookIcon className="size-8" />
                      </a>
                    </li>
                    <li className="font-medium hover:text-primary">
                      <a href="/">
                        <TwitterLogoIcon className="size-8" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
