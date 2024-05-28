import { useCallback, useState } from 'react';

import axios from '@/lib/axios';

export const useMutation = (
  url: string,
  id?: string,
  options?: {
    onSuccess?: () => void | Promise<void>;
    onError?: (message: string) => void | Promise<void>;
  },
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(
    async (data: Record<string, any> | Record<string, any>[]) => {
      setIsLoading(true);
      try {
        if (id) {
          await axios.put(`${url}/${id}`, data);
        } else {
          await axios.post(url, data);
        }
        options?.onSuccess && options?.onSuccess();
      } catch (error: any) {
        setError(error.message);
        options?.onError && options?.onError(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [url, id, options],
  );

  return {
    mutate,
    isLoading,
    error,
  };
};
