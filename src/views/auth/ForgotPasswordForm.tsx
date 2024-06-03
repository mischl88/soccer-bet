'use client';

import Link from 'next/link';

import { useState } from 'react';
import { toast } from 'react-toastify';

import { useFormik, FormikProvider } from 'formik';
import { Auth } from 'aws-amplify';
import clsx from 'clsx';

import Wrapper from '@/views/auth/Wrapper';

import Input from '@/components/Form/Input';
import Button from '@/components/Button';
import PasswordInput from '@/components/Form/PasswordInput';

import { ROUTES } from '@/config/routes';

export default function ForgotPasswordForm() {
  const [showCode, setShowCode] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: '',
      code: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values) => {
      try {
        if (!showCode) {
          await Auth.forgotPassword(values.username);
          setShowCode(true);
          return;
        }
        await Auth.forgotPasswordSubmit(
          values.username,
          values.code,
          values.password,
        );
        toast.success(
          'Your password has been successfully updated. You can now use your new password to log in.',
        );
        setShowCode(false);
        formik.resetForm();
      } catch (error: any) {
        toast.error(error.message);
      }
    },
  });

  return (
    <Wrapper
      header="Reset Password"
      subHeader="Enter your username to receive a verification code."
    >
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <div className={clsx({ 'mb-6': !showCode, 'mb-4': showCode })}>
            <Input
              label="Username"
              type="text"
              name="username"
              placeholder="Enter your username"
              icon="tabler:user"
            />
          </div>

          {showCode && (
            <>
              <div className="mb-6">
                <Input
                  label="Verification code"
                  type="text"
                  name="code"
                  placeholder="Enter your verification code"
                  icon="tabler:shield-check-filled"
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
            </>
          )}

          <div className="mb-5">
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              label="Send verification code"
            />
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
