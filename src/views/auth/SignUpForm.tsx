'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';
import { useState } from 'react';

import { useFormik, FormikProvider } from 'formik';
import { Auth } from 'aws-amplify';
import clsx from 'clsx';

import Wrapper from '@/views/auth/Wrapper';

import Input from '@/components/Form/Input';
import Button from '@/components/Button';
import PasswordInput from '@/components/Form/PasswordInput';

import { ROUTES } from '@/config/routes';

export default function SignUpForm() {
  const [showCode, setShowCode] = useState(false);
  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      code: '',
    },
    onSubmit: async ({ email, code, confirmPassword, ...values }) => {
      try {
        if (showCode) {
          await Auth.confirmSignUp(values.username, code);
          push(ROUTES.SIGN_IN);
          return;
        }
        await Auth.signUp({ ...values, attributes: { email } });
        setShowCode(true);
        toast.success(
          'Thank you for signing up! A verification code has been sent to your email. Please check your inbox to complete your registration.',
        );
      } catch (error: any) {
        toast.error(error.message);
      }
    },
  });

  return (
    <Wrapper header="Sign Up">
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <Input
              label="Name"
              name="username"
              placeholder="Enter your username"
              icon="tabler:user"
            />
          </div>

          <div className="mb-4">
            <Input
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

          <div className={clsx({ 'mb-6': !showCode, 'mb-4': showCode })}>
            <PasswordInput
              label="Re-type Password"
              placeholder="Re-enter your password"
              name="confirmPassword"
            />
          </div>

          {showCode && (
            <div className="mb-6">
              <Input
                label="Verification code"
                type="text"
                name="code"
                placeholder="Enter your verification code"
                icon="tabler:shield-check-filled"
              />
            </div>
          )}

          <div className="mb-5">
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              label={showCode ? 'Confirm code' : 'Create account'}
            />
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
