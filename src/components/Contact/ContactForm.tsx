"use client";

import { useActionState, useRef, useState } from "react";
import { submitContactForm } from "./actions";
import ReCAPTCHA from "react-google-recaptcha";

const initialState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="bg-drkblue2/50 relative z-10 mx-auto max-w-140 space-y-6 rounded-2xl border border-blue-600/20 p-8 md:p-10"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-blue-200"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full rounded-md border border-blue-300/10 bg-blue-900/10 px-3 py-2 shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-blue-200"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border border-blue-300/10 bg-blue-900/10 px-3 py-2 shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-blue-200"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          className="mt-1 block w-full rounded-md border border-blue-300/10 bg-blue-900/10 px-3 py-2 shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-blue-200"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border border-blue-300/10 bg-blue-900/10 px-3 py-2 shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none sm:text-sm"
        />
      </div>

      <div className="flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "your_site_key"
          }
          onChange={setCaptchaToken}
        />
      </div>
      <input
        type="hidden"
        name="g-recaptcha-response"
        value={captchaToken || ""}
      />

      <div>
        <button
          type="submit"
          disabled={isPending || !captchaToken}
          className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </div>

      {state.message && (
        <div
          className={`rounded-md p-4 ${state.success ? "border-green-400/30 bg-green-400/40" : "border-red-400/30 bg-red-400/40"}`}
        >
          <div className="flex">
            <div className="ml-3">
              <h3
                className={`text-sm font-medium ${state.success ? "text-green-300" : "text-red-300"}`}
              >
                {state.message}
              </h3>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
