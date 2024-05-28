'use client';

import { useFormik, FormikProvider } from 'formik';

import Wrapper from '@/components/Form/Wrapper';
import Select from '@/components/Form/Select';
import Input from '@/components/Form/Input';
import PasswordInput from '@/components/Form/PasswordInput';

interface UserFormProps {
  userId: number;
}

export default function UserForm({ userId }: UserFormProps) {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    },
    onSubmit: (values) => {
      console.log('id', userId);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <Wrapper>
          <Input name="username" label="Username" />
          <Input name="email" label="Email" type="email" />
          <PasswordInput
            name="password"
            label="Password"
            placeholder="Min. 8 characters"
          />
          <PasswordInput
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Min. 8 characters"
          />
          <Select
            id="role"
            label="Role"
            options={[]}
            onChange={formik.handleChange}
            value={formik.values.role}
          />
        </Wrapper>
      </form>
    </FormikProvider>
  );
}
