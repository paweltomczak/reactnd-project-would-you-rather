export const IS_LOADING = 'IS_LOADING';

export function setIsLoading(status) {
  return {
    type: IS_LOADING,
    status,
  };
}
