"use client";
import React from "react";
import ButtonComponent from "@/common/components/ButtonComponent";
import InputTextComponent from "@/common/components/InputTextComponent";
import { useFormik } from "formik";
import Link from "next/link";
import * as yup from "yup";

const data = {
  newPassword: "",
  confirmPassword: "",
};

const ForgotPassword: React.FC = () => {
  const validationSchema = yup.object().shape({
    newPassword: yup
      .string()
      .min(6, "Please enter new password more then 6 characters")
      .max(20, "Please enter new password less then 20 characters")
      .required("New password is required"),
    confirmPassword: yup
      .string()
      .min(6, "Please enter password more then 6 characters")
      .max(20, "Please enter password less then 20 characters")
      .required("Confirm password is required")
      .oneOf(
        [yup.ref("newPassword")],
        "Confirm password and New Password should be same"
      ),
  });

  const onHandleSubmit = (value: any) => {
    console.log("value", value);
  };

  const formik = useFormik({
    initialValues: data,
    onSubmit: onHandleSubmit,
    validationSchema: validationSchema,
    enableReinitialize: true,
    validateOnBlur: true,
  });

  const { values, errors, handleSubmit, handleChange, touched, handleBlur } =
    formik;

  return (
    <div className="grid grid-cols-2 h-screen relative font-[rubik]">
      <div className="col-span-1 bg-[#cce4ff]"></div>
      <div className="col-span-1 bg-[#1f1f70]"></div>
      <div className="absolute">
        <div className="grid grid-cols-1 w-[50vw] top-[18vh] left-[25vw] h-[55vh] relative rounded-3xl shadow-md">
          <div className="bg-white rounded-3xl">
            <div className="px-20 py-5">
              <div className="text-left text-[2rem] font-[700] tracking-wide my-2">
                Reset Password
              </div>
              <div className="mt-4 flex flex-col gap-4">
                <div>
                  <InputTextComponent
                    value={values?.newPassword}
                    onChange={handleChange}
                    type="newPassword"
                    placeholder="Your New Password"
                    name="newPassword"
                    error={errors?.newPassword}
                    touched={touched?.newPassword}
                    className="text-[12px] rounded  px-[1rem] py-[8px] focus:outline-none w-full border-[1px] border-[#ddd]"
                  />
                </div>
                <div>
                  <InputTextComponent
                    value={values?.confirmPassword}
                    onChange={handleChange}
                    type="confirmPassword"
                    placeholder="Your Confirm Password"
                    name="confirmPassword"
                    error={errors?.confirmPassword}
                    touched={touched?.confirmPassword}
                    className="text-[12px] rounded  px-[1rem] py-[8px] focus:outline-none w-full border-[1px] border-[#ddd]"
                  />
                </div>
              </div>
              <div className="underline underline-offset-2 text-[0.8rem] text-end mt-2 text-[#1f1f70] hover:cursor-pointer">
                <Link href="/">Back to login</Link>
              </div>
              <div className="mt-6">
                <ButtonComponent
                  onClick={() => handleSubmit()}
                  type="submit"
                  label="Reset Password"
                  className="px-6 py-2 w-full rounded bg-[#1f1f70] text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
