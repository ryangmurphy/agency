"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

// Schema for contact form validation
const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(phoneRegex, "Invalid Number"),
  company: z.string(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
  isHuman: z.boolean().default(false),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      isHuman: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Simulate a successful contact form submission
      console.log(values);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting contact form", error);
      toast.error("Failed to send your message. Please try again.");
    }
  }

  return (
    <div className="flex min-h-[60vh] h-full items-center justify-center px-4 pb-16 ">
      <Card className="mx-auto max-w-4xl bg-transparent border-none outline-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl">Reach Out</CardTitle>
          <CardDescription>
            Please fill out the form below and we will get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <FormControl>
                          <Input
                            id="firstName"
                            placeholder=""
                            type="text"
                            className="border-2 border-primary/40 shadow-md dark:shadow-sm dark:shadow-white"
                            autoComplete="first name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            id="lastName"
                            placeholder=""
                            type="text"
                            className="border-2 border-primary/40 shadow-md dark:shadow-sm dark:shadow-white"
                            autoComplete="last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Company Field */}
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="company">Business Name</FormLabel>
                      <FormControl>
                        <Input
                          id="company"
                          placeholder=""
                          className="border-2 border-primary/40 shadow-md dark:shadow-sm dark:shadow-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="phone">Phone</FormLabel>
                      <FormControl>
                        <Input
                          id="phone"
                          placeholder=""
                          type="phone"
                          className="border-2 border-primary/40 shadow-md dark:shadow-sm dark:shadow-white"
                          autoComplete="phone"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder=""
                          type="email"
                          className="border-2 border-primary/40 shadow-md dark:shadow-sm dark:shadow-white"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your business and project.."
                          className="resize-none h-[150px] border-2 border-primary/40 shadow-md dark:shadow-sm dark:shadow-white "
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isHuman"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border-2 border-primary/40 p-4 shadow-md dark:shadow-sm dark:shadow-white">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Are You Human?</FormLabel>
                        <FormDescription>
                          Check the box to make sure!
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
