import Container from "@/components/shared/Ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-background text-foreground py-14 md:py-20">
        <Container>
          <div className="w-full max-w-xl mx-auto text-center">
            {/* Image */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/shared/404-image.png"
                alt="404 Illustration"
                width={340}
                height={300}
                className="w-full max-w-xs sm:max-w-sm object-contain"
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-semibold font-display mb-4">
              Oops! Page Not Found!
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
              We’re sorry, but the page you’re looking for doesn’t exist or may
              have been moved. Please check the URL or return to the homepage.
            </p>

            <Link href="/">
              <Button size="lg" className="px-5">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NotFoundPage;
