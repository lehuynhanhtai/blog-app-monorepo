"use client";
import SubmitButton from "@/components/ui/submitButton";
import { signUp } from "@/lib/auth";
import { useActionState } from "react";

const FormSignup = () => {
  const [state, formAction] = useActionState(signUp, undefined);
  return (
    <form action={formAction}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            required
            className="block border w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      {state?.error?.name && (
        <p className="text-sm text-red-500">{state.error.name}</p>
      )}

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
        <div className="text-sm text-red-500">
          <p>Password must:</p>
          <ul>
            {state.error.password.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <SubmitButton>Sign up</SubmitButton>
    </form>
  );
};

export default FormSignup;
