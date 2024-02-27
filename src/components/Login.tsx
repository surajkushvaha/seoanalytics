import React from 'react';
import ButtonComponent from '@/common/components/ButtonComponent';
import InputTextComponent from '@/common/components/InputTextComponent';
import { useFormik } from "formik";
import * as yup from "yup";

const data = {
  email: "",
  password: "",
};

const Login: React.FC = () => {

  const googleLogin = () => {

  }

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
   console.log("value", value)
  };

  const formik = useFormik({
    initialValues: data,
    onSubmit: onHandleSubmit,
    validationSchema: validationSchema,
    enableReinitialize: true,
    validateOnBlur: true,
  });

  const { values, errors, handleSubmit, handleChange, touched, handleBlur } = formik;

  return (
    <div>
      <div>logo</div>
      <div>Welcome Back</div>
      <div>
        <ButtonComponent
          onClick={googleLogin}
          label="Log in with Google"
        />
      </div>
      <div>
        <hr />
      </div>
      <div>
        <InputTextComponent 
           value={values?.email}
           onChange={handleChange} 
           type='email'
           placeholder="Your Email" 
           name="email"
           className='login-input'
        />
        <InputTextComponent 
           value={values?.password}
           onChange={handleChange}
           type='password'
           placeholder="Your Password"
           name="password"
           className='login-input'
        />
      </div>
    </div>
  )
}

export default Login