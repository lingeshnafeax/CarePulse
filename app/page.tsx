import PatientForm from "@/components/forms/PatientForm";
import PasskeyModel from "@/components/PasskeyModel";
import Image from "next/image";
import Link from "next/link";
const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams.admin === "true";
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModel />}
      <section className="remove-scrollbar container my-auto ">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="Logo of app"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <PatientForm></PatientForm>
          <Link href="/login" className="text-dark-600 flex-grow w-full mt-12">
            Already registered? <span className="text-dark-700 underline"> Login </span>
          </Link>
          <div className="text-14-regular mt-12 flex justify-between flex-wrap">
            <p className=" justify-items-end text-dark-600 xl:text-left">
              &#169; 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
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

export default Home;
