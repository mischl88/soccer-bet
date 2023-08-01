"use client";
import { useState } from "react";

import { useFormik } from "formik";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

import Wrapper from "@/components/form/Wrapper";
import Select from "@/components/form/Select";
import InputField from "@/components/form/Input";

interface UserFormProps {
  userId: number;
}

export default function UserForm({ userId }: UserFormProps) {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
    onSubmit: (values) => {
      console.log("id", userId);
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleClick = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <InputField id="username" label="Username" variant="auth" type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username} />
        <InputField id="email" label="Email" variant="auth" type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email} />
        <InputField id="password" label="Password" variant="auth"
                    type={show ? "text" : "password"} mb="24px"
                    placeholder="Min. 8 characters"
                    onIconClick={handleClick}
                    icon={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onChange={formik.handleChange}
                    value={formik.values.password} />

        <InputField id="confirmPassword" label="Confirm Password" variant="auth"
                    type={show ? "text" : "password"} mb="24px"
                    placeholder="Min. 8 characters"
                    onIconClick={handleClick}
                    icon={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword} />
        <Select id="role" label="Role" isRequired options={[]}
                onChange={formik.handleChange}
                value={formik.values.role} />

      </Wrapper>
    </form>
  );
}
