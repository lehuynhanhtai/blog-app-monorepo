import Image from "next/image";
import FormSignup from "./FormSignup";

const SignUpPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mx-auto h-10 w-auto">
          <Image
            src={
              "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            }
            alt="logo"
            width={72}
            height={72}
            className="mx-auto"
          />
        </div>
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormSignup />
      </div>
    </div>
  );
};

export default SignUpPage;
