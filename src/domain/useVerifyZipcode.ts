import { verifyZipcode } from 'data/api';
import { useMutation } from 'react-query';

export const useVerifyZipcode = () => {
  return useMutation<boolean, Error, string>(async (variables: string) =>
    verifyZipcode(variables),
  );
};
