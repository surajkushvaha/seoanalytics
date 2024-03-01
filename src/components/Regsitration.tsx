import React from "react";
import ButtonComponent from "@/common/components/ButtonComponent";
import InputTextComponent from "@/common/components/InputTextComponent";
import { useFormik } from "formik";
import * as yup from "yup";

const data = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Regsitration: React.FC = () => {
  const validationSchema = yup.object().shape({
    fullName: yup
      .string()
      .required("Full name is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Please enter password more then 6 characters")
      .max(20, "Please enter password less then 20 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .min(6, "Please enter password more then 6 characters")
      .max(20, "Please enter password less then 20 characters")
      .required("Confirm password is required")
      .oneOf(
        [yup.ref("password")],
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
    <div className="px-20 py-5">
      <div className="text-left text-[2rem] font-[700] tracking-wide my-2">
        Register
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <div>
          <InputTextComponent
            value={values?.fullName}
            onChange={handleChange}
            type="text"
            placeholder="Your Full Name"
            name="fullName"
            error={errors?.fullName}
            touched={touched?.fullName}
            className="text-[12px] rounded  px-[1rem] py-[8px] focus:outline-none w-full border-[1px] border-[#ddd]"
          />
        </div>
        <div>
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
        </div>
        <div>
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
      <div className="mt-2 flex justify-start items-center">
        <div>
          <InputTextComponent
            onChange={handleChange}
            type="checkbox"
            name="loggedIn"
            className="rounded border-[1px] border-[#ddd]"
          />
        </div>
        <div className="text-[0.8rem] ms-2">
          I agree to the Terms & Condition
        </div>
      </div>
      <div className="mt-6">
        <ButtonComponent
          onClick={()=>handleSubmit()}
          type="submit"
          label="Sign up"
          className="px-6 py-2 w-full rounded bg-[#1f1f70] text-white"
        />
      </div>
    </div>
  );
};

export default Regsitration;
