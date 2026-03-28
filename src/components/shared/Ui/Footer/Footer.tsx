import Container from "@/components/shared/Ui/Container";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  // { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "AI Automation Systems", href: "/services/ai-automation-systems" },
  {
    name: "AI Agents - Voice & LLM",
    href: "/services/ai-agents-voice-and-llm",
  },
  { name: "Website Development", href: "/services/development" },
  { name: "App Development", href: "/services/development" },
  { name: "Workflow Integrations", href: "/services/ai-automation-systems" },
  // { name: "Custom Internal Tools", href: "/services#internal-tools" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-muted bg-background text-foreground">
      <Container>
        <div className="relative z-10 pt-12 pb-6 md:pt-16 md:pb-10 2xl:pt-20 2xl:pb-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Link href="/">
                <Image
                  src="/images/shared/logo.png"
                  alt="astrix_forge"
                  width={160}
                  height={60}
                  className="h-10 md:h-11 xl:h-16 w-auto"
                  priority
                />
              </Link>

              <div className="mt-5 space-y-4">
                <p className="max-w-md text-sm leading-6 text-muted-foreground 2xl:text-[17px]">
                  We build AI automation systems, intelligent agents, and modern
                  digital products that help businesses scale operations without
                  scaling headcount.
                </p>

                {/* <div className="flex flex-wrap gap-2 pt-2">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="rounded-full px-5 shadow-topUpShadow"
                    >
                      <Calendar className="h-5 w-5" />
                      Book a Call
                    </Button>
                  </Link>

                  <a
                    href="https://wa.me/8801XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full border-muted bg-background px-5 text-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Chat
                    </Button>
                  </a>
                </div> */}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <div className="mb-4">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary 2xl:text-sm">
                  Navigation
                </p>
                <h4 className="mt-1 font-heading text-lg font-semibold 2xl:text-xl">
                  Quick Links
                </h4>
                <div className="mt-2 h-px w-14 bg-primary" />
              </div>

              <ul className="space-y-1.5 2xl:space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary 2xl:text-base"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className="mb-4">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary 2xl:text-sm">
                  Services
                </p>
                <h4 className="mt-1 font-heading text-lg font-semibold 2xl:text-xl">
                  What We Build
                </h4>
                <div className="mt-2 h-px w-14 bg-primary" />
              </div>

              <ul className="space-y-1.5 2xl:space-y-2">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary 2xl:text-base"
                    >
                      <span>{service.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="mb-4">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary 2xl:text-sm">
                  Get In Touch
                </p>
                <h4 className="mt-1 font-heading text-lg font-semibold 2xl:text-xl">
                  Contact Us
                </h4>
                <div className="mt-2 h-px w-14 bg-primary" />
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <a
                      href="tel:+8801XXXXXXXXX"
                      className="text-sm font-medium text-foreground transition-colors hover:text-primary 2xl:text-base"
                    >
                      +8801778119298
                    </a>
                    <p className="mt-1 text-xs text-muted-foreground 2xl:text-sm">
                      Mon - Sat: 08:00 AM - 10:00 PM
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <a
                      href="mailto:astrixforge7@gmail.com"
                      className="text-sm font-medium text-foreground transition-colors hover:text-primary 2xl:text-base"
                    >
                      astrixforge7@gmail.com
                    </a>
                    <p className="mt-1 text-xs text-muted-foreground 2xl:text-sm">
                      Send us your requirements anytime
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="text-sm leading-6 text-muted-foreground 2xl:text-base">
                    <p className="font-medium text-foreground">
                      Remote-First Delivery
                    </p>
                    <p>Working with clients globally</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-muted py-4 md:py-5 xl:py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-xs text-muted-foreground 2xl:text-sm">
              © {new Date().getFullYear()} Astrix Forge. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-xs text-muted-foreground 2xl:text-sm">
              <Link href="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-primary">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
