'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import { useFormik, FormikProvider } from 'formik';
import { Auth } from 'aws-amplify';

import Wrapper from '@/views/auth/Wrapper';

import InputField from '@/components/Form/Input';
import Button from '@/components/Button';
import PasswordInput from '@/components/Form/PasswordInput';

import { ROUTES } from '@/config/routes';

export default function SignUpForm() {
  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async ({ email, ...values }) => {
      await Auth.signUp({ ...values, attributes: { email } });
      push(ROUTES.SIGN_IN);
    },
  });

  return (
    <Wrapper header="Sign Up">
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <InputField
              label="Name"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="Enter your username"
              icon="tabler:user"
            />
          </div>

          <div className="mb-4">
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              icon="mdi:envelope-outline"
            />
          </div>

          <div className="mb-4">
            <PasswordInput
              label="Password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <PasswordInput
              label="Re-type Password"
              placeholder="Re-enter your password"
              name="confirmPassword"
            />
          </div>

          <div className="mb-5">
            <Button type="submit" label="Create account" />
          </div>
          <div className="mt-6 text-center">
            <p>
              Already have an account?{' '}
              <Link href={ROUTES.SIGN_IN} className="text-primary">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </FormikProvider>
    </Wrapper>
  );
}
