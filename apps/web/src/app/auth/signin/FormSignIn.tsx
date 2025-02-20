"use client";

import SubmitButton from "@/components/ui/submitButton";
import { signIn } from "@/lib/auth";
import { useActionState } from "react";

const FormSignIn = () => {
  const [state, formAction] = useActionState(signIn, undefined);

  return (
    <form className="space-y-6" action={formAction}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            className="block border w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      {state?.error?.email && (
        <p className="text-sm text-red-500">{state.error.email}</p>
      )}

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Password
          </label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            required
            className="block border w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      {state?.error?.password && (
        <p className="text-sm text-red-500">{state.error.password}</p>
      )}

      <SubmitButton> Sign in </SubmitButton>
    </form>
  );
};

export default FormSignIn;
