"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SumbitButton from "../ui/SumbitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { loginUser } from "@/lib/actions/patient.actions";
import { useRouter } from "next/navigation";
import { FormFieldType } from "./PatientForm";
import toast, { Toaster } from "react-hot-toast";

export function LoginForm() {
  // 1. Define your form.
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      const userData = { name, email, phone };
      const newUser = await loginUser(userData);

      if (!newUser) {
        toast.error("Invalid credentials or User not found", {
          className: "bg-dark-700 text-white",
        });
      } else {
        router.push(`/patients/${newUser.$id}/dashboard`);
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }
  return (
    <>
      <Toaster></Toaster>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex-1"
        >
          <section className="mb-12 space-y-4">
            <h1 className="header">Hi there 👋</h1>
            <p className="text-dark-700">
              Enter the correct combination of the details to login.
            </p>
          </section>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Full name"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          ></CustomFormField>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          ></CustomFormField>
          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone number"
            placeholder="(91) 9988776655"
          ></CustomFormField>
          <SumbitButton isLoading={isLoading}>Login</SumbitButton>
        </form>
      </Form>
    </>
  );
}

export default LoginForm;
