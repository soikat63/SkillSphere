"use client";
import { Check } from "@gravity-ui/icons";
import { useState } from "react";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";
import { authClient } from "../../../lib/auth-client";

// --- Eye icons for show/hide password toggle ---
const EyeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const SignIn = () => {
  // --- Toggle state for password visibility ---
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md border border-gray-100 shadow-none rounded-2xl px-8 py-10">
        {/* --- Header --- */}
        <div className="text-center mb-7">
          <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-500"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Welcome back
          </h1>
          <p className="text-sm text-gray-400">Sign in to your account</p>
        </div>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* --- Email field --- */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-xs font-medium text-gray-500">
              Email address <span className="text-red-400">*</span>
            </Label>
            <Input
              placeholder="john@example.com"
              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all bg-white"
            />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          {/* --- Password field with eye toggle --- */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type={showPassword ? "text" : "password"}
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value))
                return "Password must contain at least one uppercase letter";
              if (!/[0-9]/.test(value))
                return "Password must contain at least one number";
              return null;
            }}
          >
            <div className="flex justify-between items-center">
              <Label className="text-xs font-medium text-gray-500">
                Password <span className="text-red-400">*</span>
              </Label>
              <a
                href="/forgot-password"
                className="text-xs text-blue-500 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* --- Input wrapper with eye icon button --- */}
            <div className="relative">
              <Input
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 pr-11 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all bg-white"
              />
              {/* --- Eye toggle button --- */}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            <Description className="text-xs text-gray-300">
              Min 8 characters, 1 uppercase letter and 1 number
            </Description>
            <FieldError className="text-xs text-red-500" />
          </TextField>

          {/* --- Action buttons --- */}
          <div className="flex gap-2.5 mt-1">
            <Button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold bg-gray-900 hover:bg-gray-700 text-white rounded-xl transition-colors border-0"
            >
              <Check width={15} height={15} />
              Sign in
            </Button>
            <Button
              type="reset"
              className="px-5 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* --- Divider --- */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs text-gray-300">or</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* --- Google sign in button --- */}
        <Button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2.5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <GrGoogle size={16} />
          Sign in with Google
        </Button>

        {/* --- Sign up link --- */}
        <p className="text-center text-xs text-gray-400 mt-5">
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="text-blue-500 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </Card>
    </div>
  );
};

export default SignIn;
