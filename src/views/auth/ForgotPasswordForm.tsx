'use client';

import Link from 'next/link';

import { useFormik, FormikProvider } from 'formik';

import Wrapper from '@/views/auth/Wrapper';

import Input from '@/components/Form/Input';
import Button from '@/components/Button';

import { ROUTES } from '@/config/routes';

export default function ForgotPasswordForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Wrapper header="Reset Password">
      <p>Enter your email address to receive a password reset link.</p>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              icon="mdi:envelope-outline"
            />
          </div>

          <div className="mb-5">
            <Button type="submit" label="Send Password Reset Link" />
          </div>

          <div className="mt-6 text-center">
            <p>
              Don’t have any account?{' '}
              <Link href={ROUTES.SIGN_IN} className="text-primary">
                Back to Sign In
              </Link>
            </p>
          </div>
        </form>
      </FormikProvider>
    </Wrapper>
  );
}
