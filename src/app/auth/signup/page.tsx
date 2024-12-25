"use client";
import { signup } from "@/app/actions/auth";
import { FormEvent } from "react";

function Signup() {
  const SubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const form = e.currentTarget;
    // const formData = new FormData(form);
    // const data = {
    //   name: formData.get("name") as string,
    //   email: formData.get("email") as string,
    //   password: formData.get("password") as string,
    //   confirmPassword: formData.get("confirm-password") as string,
    // };

    // signup(data)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(JSON.parse(error.message));
    //   });
  };

  return (
    <div className="h-full flex flex-col justify-between ">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="mt-[-50px] pb-4 text-center">
          <div className="text-3xl font-bold">Sign Up</div>
          <div className="text-sm px-4">Enter you email and password to create new account!</div>
        </div>
        <form onSubmit={SubmitForm} className="w-full pt-4">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm" htmlFor="name">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="text-sm w-full py-3 px-3 rounded-lg bg-gray-100 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <label className="font-semibold text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-sm w-full py-3 px-3 rounded-lg bg-gray-100 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <label className="font-semibold text-sm" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="text-sm w-full py-3 px-3 rounded-lg bg-gray-100 outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <label className="font-semibold text-sm" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="text-sm w-full py-3 px-3 rounded-lg bg-gray-100 outline-none"
              placeholder="Confirm your password"
            />
          </div>
          <div className="pt-8">
            <button type="submit" className="w-full py-3 bg-gray-900 rounded-lg text-white text-sm">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
