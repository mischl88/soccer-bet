'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { toast } from 'react-toastify';

import { useFormik, FormikProvider } from 'formik';
import { Auth } from 'aws-amplify';

import { useAuthContext } from '@/contexts/Auth';

import Wrapper from '@/views/auth/Wrapper';

import Button from '@/components/Button';
import PasswordInput from '@/components/Form/PasswordInput';
import Input from '@/components/Form/Input';

import { ROUTES } from '@/config/routes';

export default function SignInForm() {
  const { push } = useRouter();
  const { setUser } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: async ({ password, username }) => {
      try {
        const user = await Auth.signIn({
          username,
          password,
        });
        setUser(user);
        push('/');
      } catch {
        toast.error('Incorrect username or password. Please try again.');
      }
    },
  });

  return (
    <Wrapper header="Sign In">
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <Input
              label="Username"
              name="username"
              placeholder="Enter your username"
              icon="tabler:user"
            />
          </div>

          <div className="mb-6">
            <PasswordInput
              label="Password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-5">
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              label="Sign In"
            />
          </div>

          <div className="mt-6 flex justify-between">
            <p>
              <Link href={ROUTES.FORGOT_PASSWORD} className="text-primary">
                Forgot password?
              </Link>
            </p>
            <p>
              Don’t have any account?{' '}
              <Link href={ROUTES.SIGN_UP} className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </FormikProvider>
    </Wrapper>
  );
}
