import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    _id: "tm1",
    name: "Abdur Rahman",
    role: "CEO & Founder",
    image: "/images/about/team/rahman.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    _id: "tm2",
    name: "MD. Sumon",
    role: "Co-Founder",
    image: "/images/about/team/rahman.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    _id: "tm3",
    name: "Abdur Rahman",
    role: "Full Stack Developer",
    image: "/images/about/team/rahman.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    _id: "tm4",
    name: "Sophia Bennett",
    role: "AI Systems Strategist",
    image: "/images/about/team/rahman.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];

export default function OurTeam() {
  return (
    <section className=" bg-muted pb-14 md:pb-20">
      <Container>
        <div className="max-w-3xl">
          <SectionTitle
            subTitle="Our Team"
            title="Meet the"
            highlight="Experts"
          />

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base 2xl:text-lg">
            A tight-knit team of specialists — each with deep expertise in their
            domain, and a shared obsession with building things that actually
            work.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <div
              key={member._id}
              className="gradient-border group relative rounded-xl  text-center shadow-cardDarkShadow transition-all duration-300 "
            >
              <div className="relative z-10 bg-background rounded-xl px-6 py-8">
                {/* avatar */}
                <div className="mx-auto mb-8 w-fit rounded-full bg-linear-to-r from-primary to-secondary p-1">
                  <div className="relative h-32 w-32 md:h-36 md:w-36 2xl:h-40 2xl:w-40 overflow-hidden rounded-full bg-muted ">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1536px) 160px, (min-width: 768px) 144px, 128px"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* name */}
                <h3 className="text-xl md:text-2xl font-heading font-semibold leading-none text-white">
                  {member.name}
                </h3>

                {/* role */}
                <p className="mt-1 text-sm md:text-base font-medium text-primary">
                  {member.role}
                </p>

                {/* socials */}
                <div className="mt-8 flex items-center justify-center gap-3">
                  <Link
                    target="_blank"
                    href={member.socials.facebook}
                    className="text-white transition-colors duration-200 hover:text-primary"
                  >
                    <Facebook className="h-5 w-5 2xl:h-5.5 2xl:w-5.5" />
                  </Link>

                  <Link
                    target="_blank"
                    href={member.socials.linkedin}
                    className="text-white transition-colors duration-200 hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5 2xl:h-5.5 2xl:w-5.5" />
                  </Link>

                  <Link
                    target="_blank"
                    href={member.socials.instagram}
                    className="text-white transition-colors duration-200 hover:text-primary"
                  >
                    <Instagram className="h-5 w-5 2xl:h-5.5 2xl:w-5.5" />
                  </Link>

                  <Link
                    target="_blank"
                    href={member.socials.twitter}
                    className="text-white transition-colors duration-200 hover:text-primary"
                  >
                    <Twitter className="h-5 w-5 2xl:h-5.5 2xl:w-5.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
