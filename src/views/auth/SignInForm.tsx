'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { toast } from 'react-toastify';

import { useFormik, FormikProvider } from 'formik';

import axios from '@/lib/axios';
import { useAuthContext } from '@/contexts/Auth';

import Wrapper from '@/views/auth/Wrapper';

import Button from '@/components/Button';
import PasswordInput from '@/components/Form/PasswordInput';
import Input from '@/components/Form/Input';

import { useRequest } from '@/hooks/useRequest';

import { API_ROUTES, ROUTES } from '@/config/routes';

export default function SignInForm() {
  const { push } = useRouter();
  const { setUser } = useAuthContext();
  const { fetch } = useRequest(API_ROUTES.ME, { enabled: false });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: async (values) => {
      try {
        await axios.post(API_ROUTES.SIGN_IN, values);
        const response = await (fetch && fetch());
        setUser(response);
        push('/');
      } catch (error: any) {
        toast.error(error.message);
      }
    },
  });

  return (
    <Wrapper header="Sign In">
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

          <div className="mb-6">
            <PasswordInput
              label="Password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-5">
            <Button type="submit" label="Sign In" />
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
