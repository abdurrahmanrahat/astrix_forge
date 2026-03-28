"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-10">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-[10%] -right-[5%] h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-secondary) 12%, transparent), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[5%] h-[320px] w-[320px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-primary) 12%, transparent), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <div className="gradient-border rounded-[28px] bg-background/80 p-6 shadow-cardLightShadow backdrop-blur-xl dark:shadow-cardDarkShadow md:p-8 2xl:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary md:h-18 md:w-18">
              <AlertCircle className="h-8 w-8 md:h-9 md:w-9" />
            </div>

            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-heading font-bold tracking-tight text-foreground">
              Something Went Wrong
            </h1>

            <p className="mt-3 max-w-md text-sm md:text-base 2xl:text-[17px] leading-7 text-muted-foreground">
              An unexpected issue interrupted this page. Please try again, and
              if the problem continues, contact our team.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-4 md:p-5">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Error Details
            </p>

            <p className="mt-2 break-words text-[13px] md:text-sm 2xl:text-[15px] leading-6 text-muted-foreground">
              {error?.message || "An unexpected error occurred"}
            </p>

            {error?.digest && (
              <p className="mt-3 text-xs 2xl:text-sm text-muted-foreground">
                Error ID: {error.digest}
              </p>
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              onClick={() => reset()}
              size="lg"
              className="rounded-full shadow-topUpShadow transition-all duration-300 hover:-translate-y-0.5"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
