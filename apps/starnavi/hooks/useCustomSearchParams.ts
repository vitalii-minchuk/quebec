import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "qs";

interface IQueryParamsItem {
  key?: string;
  value?: string;
}

export const useCustomSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const removeAllQueryParams = useCallback(() => {
    pathname && router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  const addQueryParams = useCallback(
    (params: IQueryParamsItem[]) => {
      const newParams = searchParams ? qs.parse(searchParams.toString()) : null;

      if (newParams && params.length) {
        params.forEach(({ key, value }) => {
          if (key && value) {
            newParams[key] = value;
          }
        });

        router.push(`${pathname}?${qs.stringify(newParams)}`, {
          scroll: false,
        });
      }
    },
    [pathname, router, searchParams],
  );

  const removeQueryParams = useCallback(
    (params: string[]) => {
      const newParams = searchParams ? qs.parse(searchParams.toString()) : null;

      if (newParams) {
        params.forEach((el) => {
          delete newParams[el];
        });

        router.push(`${pathname}?${qs.stringify(newParams)}`, {
          scroll: false,
        });
      }
    },
    [pathname, router, searchParams],
  );

  return {
    removeAllQueryParams,
    removeQueryParams,
    addQueryParams,
  };
};
