export const verifyZipcode = async (value: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (value === '97405') {
    return true;
  }
  return false;
};
