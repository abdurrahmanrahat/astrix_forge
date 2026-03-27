"use client";

import MYForm from "@/components/shared/Forms/MYForm";
import MYInput from "@/components/shared/Forms/MYInput";
import MYTextArea from "@/components/shared/Forms/MYTextArea";
import { Button } from "@/components/ui/button";
import { ChevronDown, Loader } from "lucide-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const serviceTypes = [
  "AI Automation Systems",
  "AI Agents - Voice & LLM",
  "Website Development",
  "Others",
];

const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name is too long"),

  email: z.string().email("Invalid email address"),

  phone: z
    .string()
    .min(8, "Phone number is too short")
    .max(20, "Phone number is too long"),

  serviceType: z.string().min(1, "Please select a service type"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type TContactForm = z.infer<typeof contactSchema>;

const contactDefaultValues: TContactForm = {
  name: "",
  email: "",
  phone: "",
  serviceType: "AI Automation Systems",
  message: "",
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleContact = async (values: TContactForm) => {
    setIsLoading(true);

    const templateParams = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      serviceType: values.serviceType,
      message: values.message,
      time: new Date().toLocaleString(),
    };

    console.log("templateParams", templateParams);

    try {
      // const response = await emailjs.send(
      //   import.meta.env.NEXT_PUBLIC_SERVICE_ID as string,
      //   import.meta.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      //   templateParams,
      //   {
      //     publicKey: import.meta.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      //   },
      // );
      toast.success("Success! We’ll reach out to you shortly.");

      // if (response.status === 200) {
      //   toast.success("Success! We’ll reach out to you shortly.");
      // } else {
      //   toast.error("Something went wrong. Please try again.");
      // }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send your request. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="gradient-border rounded-xl bg-deep-dark/70 p-6 backdrop-blur-xl md:p-8 xl:p-10 shadow-cardLightShadow dark:shadow-cardDarkShadow">
        <MYForm
          onSubmit={handleContact}
          schema={contactSchema}
          defaultValues={contactDefaultValues}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Full Name <span className="text-primary">*</span>
              </label>
              <MYInput
                name="name"
                placeholder="Enter your full name"
                className="h-11 rounded-lg border-muted bg-muted text-foreground placeholder:text-muted-foreground focus-visible:ring-0 2xl:h-12"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-foreground"
              >
                WhatsApp Number <span className="text-primary">*</span>
              </label>
              <MYInput
                name="phone"
                placeholder="Enter your whatsapp number"
                className="h-11 rounded-lg border-muted bg-muted text-foreground placeholder:text-muted-foreground focus-visible:ring-0 2xl:h-12"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email Address <span className="text-primary">*</span>
              </label>
              <MYInput
                name="email"
                type="email"
                placeholder="Enter your email"
                className="h-11 rounded-lg border-muted bg-muted text-foreground placeholder:text-muted-foreground focus-visible:ring-0 2xl:h-12"
              />
            </div>

            <ServiceTypeField />

            <div className="grid gap-2 sm:col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Project Details <span className="text-primary">*</span>
              </label>
              <MYTextArea
                name="message"
                placeholder="Tell us about your business, current bottlenecks, and what you'd like to automate or build..."
                className="min-h-[110px] resize-none rounded-lg border-muted bg-muted text-foreground placeholder:text-muted-foreground focus-visible:ring-0 2xl:min-h-[120px]"
              />
            </div>

            <div className="pt-2 sm:col-span-2">
              <Button
                type="submit"
                disabled={isLoading}
                size="lg"
                className="rounded-full shadow-topUpShadow transition-all duration-300 hover:-translate-y-0.5 min-w-[190px]"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Book a Strategy Call"
                )}
              </Button>
            </div>
          </div>
        </MYForm>
      </div>
    </div>
  );
};

export default ContactForm;

function ServiceTypeField() {
  const {
    control,
    formState: { errors },
  } = useFormContext<TContactForm>();

  return (
    <div className="grid gap-2">
      <label
        htmlFor="serviceType"
        className="text-sm font-medium text-foreground"
      >
        Service Type <span className="text-primary">*</span>
      </label>

      <Controller
        name="serviceType"
        control={control}
        render={({ field }) => (
          <div className="relative">
            <select
              id="serviceType"
              value={field.value}
              onChange={field.onChange}
              className="h-11 w-full appearance-none rounded-lg border border-muted bg-muted px-4 pr-10 text-sm 2xl:text-base text-foreground outline-none transition-all duration-300 focus:border-primary cursor-pointer 2xl:h-12 "
            >
              {serviceTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                  className="bg-background text-foreground"
                >
                  {type}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        )}
      />

      {errors.serviceType && (
        <p className="text-sm text-red-500">{errors.serviceType.message}</p>
      )}
    </div>
  );
}
