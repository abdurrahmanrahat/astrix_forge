import Footer from "@/components/shared/Ui/Footer/Footer";
import Navbar from "@/components/shared/Ui/Navbar/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
