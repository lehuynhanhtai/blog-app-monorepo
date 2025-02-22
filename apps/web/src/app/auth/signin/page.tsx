import Image from "next/image";
import Link from "next/link";
import FormSignIn from "./FormSignIn";
import { getSession, Session } from "@/lib/session";
import { redirect } from "next/navigation";
import { BACKEND_URL } from "@/lib/constants";

const SignInPage = async () => {
  const session: Session | null = await getSession();
  if (session?.user) redirect("/");

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
        <FormSignIn />
        <div className="flex flex-col items-center mt-6 space-y-4">
          <a href={`${BACKEND_URL}/auth/google/login`}>SignIn Google</a>
          <p className="text-sm/6 text-gray-500">
            You not a account?
            <Link
              href="/auth/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
