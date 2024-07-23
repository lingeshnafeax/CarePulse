import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto ">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="Logo of app"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <LoginForm></LoginForm>
          <Link href="/" className="text-dark-600 flex-grow w-full mt-12">
            New user?{" "}
            <span className="text-dark-700 underline"> Register </span>
          </Link>
          <div className="text-14-regular mt-12 flex justify-between flex-wrap">
            <p className=" justify-items-end text-dark-600 xl:text-left">
              &#169; 2024 CarePulse
            </p>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="Onboarding image"
        className="side-img max-w-[50%]"
      ></Image>
    </div>
  );
};

export default LoginPage;
