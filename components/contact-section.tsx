"use client";

import { Card, CardContent } from "@/components/ui/card";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/lib/env";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2Icon } from "lucide-react";
import type React from "react";
import { Textarea } from "@/components/ui/textarea";
import { send } from "@emailjs/browser";
import { toast } from "sonner";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isSubmitting: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormData({ ...formData, isSubmitting: true });

    try {
      const res = await send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY);

      if (res?.status !== 200) throw new Error(res.text);

      toast.success("Thank you for contacting me, I will respond to you soon!", {
        duration: 5000,
        position: "top-center",
      });
      setFormData({ name: "", email: "", message: "", isSubmitting: false });
    } catch (err) {
      console.error("send email error:", err);

      toast.error(
        "An unexpected error has occurred, please contact me by another means. Thank you!",
        {
          duration: 5000,
          position: "top-center",
        }
      );

      setFormData({ ...formData, isSubmitting: false });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">Contact</h2>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-ring"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-ring"
                  />
                </div>
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-ring resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={formData.isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
              >
                {formData.isSubmitting ? (
                  <>
                    <Loader2Icon className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
