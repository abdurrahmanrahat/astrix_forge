import { Quote, Star } from "lucide-react";
import Image from "next/image";

type TTestimonialCardProps = {
  _id: string;
  quote: string;
  author: string;
  role: string;
  photo?: string;
  rating: number;
};

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: TTestimonialCardProps;
}) {
  return (
    <div className="gradient-border group relative rounded-md p-5 xl:p-6 transition-all duration-300 hover:shadow-topUpShadow">
      {/* rating */}
      <div className="mb-2 flex items-center gap-1 text-amber-400">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 2xl:h-4 2xl:w-4 fill-amber-400"
          />
        ))}
      </div>

      {/* quote */}
      <p className="mb-3 text-[13px] md:text-sm 2xl:text-[15px] leading-6 xl:leading-[26px] text-muted-foreground italic">
        “{testimonial.quote}”
      </p>

      {/* author */}
      <div className="flex items-center gap-3">
        {/* avatar */}
        {testimonial?.photo ? (
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-muted">
            <Image
              src={testimonial.photo}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary text-sm font-bold text-white">
            {testimonial.author
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>
        )}

        <div>
          <div className="text-sm md:text-[15px] 2xl:text-[17px] font-semibold text-foreground">
            {testimonial.author}
          </div>
          <div className="text-[12px] md:text-[13px] 2xl:text-sm text-muted-foreground">
            {testimonial.role}
          </div>
        </div>
      </div>

      {/* quote icon */}
      <Quote className="pointer-events-none absolute bottom-5 right-5 h-10 w-10 text-primary opacity-20" />
    </div>
  );
}
