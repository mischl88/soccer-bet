'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import { useFormik, FormikProvider } from 'formik';

import Wrapper from '@/views/auth/Wrapper';

import InputField from '@/components/Form/Input';
import Button from '@/components/Button';
import PasswordInput from '@/components/Form/PasswordInput';

import { useMutation } from '@/hooks/useMutation';

import { API_ROUTES, ROUTES } from '@/config/routes';

export default function SignUpForm() {
  const { push } = useRouter();
  const { mutate: signUp } = useMutation(API_ROUTES.SIGN_UP, undefined, {
    onSuccess: () => push('/'),
    onError: (message) => {
      toast.error(message);
    },
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values) => {
      await signUp(values);
    },
  });

  return (
    <Wrapper header="Sign Up">
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <InputField
              label="Name"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="Enter your full name"
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
