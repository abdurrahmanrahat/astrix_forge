import { MyLoader } from "@/components/shared/Ui/Loader/MyLoader";

const LoadingPage = () => {
  return (
    <div className="w-[90%] mx-auto h-screen flex justify-center items-center">
      <MyLoader />
    </div>
  );
};

export default LoadingPage;
