import { verifyZipcode } from 'data/api';
import { Alert } from 'react-native';
import { useMutation } from 'react-query';

export const useVerifyZipcode = () => {
  return useMutation<boolean, Error, string>(
    async (variables: string) => verifyZipcode(variables),
    {onSuccess: (data) => Alert.alert(JSON.stringify(data))},
  );
};
