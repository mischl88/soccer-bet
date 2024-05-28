import { useCallback, useEffect, useState } from 'react';

import axios from '@/lib/axios';

type Pagination = {
  page: number;
  limit: number;
};

type Response<R> = {
  data: R extends { data: R[] } ? { data: R[] } : R;
  page?: number;
  limit?: number;
  total?: number;
  totalPages?: number;
};

export const mapURLSearchParams = (
  queryParams: Record<string, any>,
): string => {
  const params = new URLSearchParams();
  for (const [name, value] of Object.entries(queryParams)) {
    params.set(name, JSON.stringify(value));
  }

  return params.toString();
};

export const useRequest = <R extends object>(
  url: string,
  options?: {
    pagination?: Pagination;
    enabled?: boolean;
  },
) => {
  const enabled = options?.enabled ?? true;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Response<R> | undefined>();

  const makeRequest = useCallback(async () => {
    try {
      const response = await axios.get(
        url +
          (options?.pagination
            ? `?${mapURLSearchParams({ ...options?.pagination })}`
            : ''),
      );

      if (
        response.data &&
        Object.prototype.hasOwnProperty.call(response.data, 'data')
      ) {
        setData(response.data);
      } else {
        setData({ data: response.data });
      }

      return response.data;
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [url, options?.pagination]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    setIsLoading(true);
    makeRequest();
  }, [url, enabled, makeRequest]);

  if (data) {
    const { data: responseData, ...rest } = data;

    return { data: responseData, meta: rest ?? undefined, isLoading, error };
  }

  return {
    data: undefined,
    meta: undefined,
    isLoading,
    fetch: makeRequest,
    error,
  };
};
