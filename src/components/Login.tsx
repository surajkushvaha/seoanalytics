import React from "react";
import ButtonComponent from "@/common/components/ButtonComponent";
import InputTextComponent from "@/common/components/InputTextComponent";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import Gogglelogo from "../common/assets/svgs/google-icon.svg";
import Logo from "../common/assets/svgs/seo-icon.svg";
import Link from 'next/link';

const data = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const googleLogin = () => {};

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Please enter password more then 6 characters")
      .max(20, "Please enter password less then 20 characters")
      .required("Password is required"),
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
    <div className="px-20 py-5">
      <div className="flex justify-center">
        <Image src={Logo} width={50} height={50} alt="Google" />
      </div>
      <div className="text-center text-[2rem] font-[600] tracking-wide my-5">
        Welcome Back
      </div>
      <div className="text-center">
        <div
          onClick={googleLogin}
          className="rounded hover:cursor-pointer flex shadow-custom px-4 py-2 relative"
        >
          <div className="absolute">
            <Image src={Gogglelogo} width={20} height={20} alt="Google" />
          </div>
          <div className="text-[12px] font-[600] text-center w-full tracking-[.1rem]">
            Log in with Google
          </div>
        </div>
      </div>
      <div className="flex items-center my-6">
        <div className="flex-1 border-t-2 border-gray-200"></div>
        <span className="px-3 text-gray-500 bg-white uppercase text-[0.7rem] tracking-wide">
          or login with email
        </span>
        <div className="flex-1 border-t-2 border-gray-200"></div>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <InputTextComponent
          value={values?.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          name="email"
          error={errors?.email}
          touched={touched?.email}
          className="text-[12px] rounded  px-[1rem] py-[8px] focus:outline-none w-full border-[1px] border-[#ddd]"
        />
        <InputTextComponent
          value={values?.password}
          onChange={handleChange}
          type="password"
          placeholder="Your Password"
          name="password"
          error={errors?.password}
          touched={touched?.password}
          className="text-[12px] rounded  px-[1rem] py-[8px] focus:outline-none w-full border-[1px] border-[#ddd]"
        />
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex gap-2">
          <div>
           <InputTextComponent
              onChange={handleChange}
              type="checkbox"
              name="loggedIn"
              className="rounded border-[1px] border-[#ddd]"
            />
          </div>
          <div className="text-[0.8rem]">keep me logged in</div>
        </div>
        <div className="underline underline-offset-2 text-[0.8rem] text-[#1f1f70] hover:cursor-pointer">
          <Link href="/forgot-password">Forgot password</Link>
        </div>
      </div>
      <div className="mt-4">
        <ButtonComponent
          onClick={()=>handleSubmit()}
          type="submit"
          label="Log in"
          className="px-6 py-2 w-full rounded bg-[#1f1f70] text-white"
          icon="pi pi-arrow-right" 
          iconPos="right"
        />
      </div>
    </div>
  );
};

export default Login;
