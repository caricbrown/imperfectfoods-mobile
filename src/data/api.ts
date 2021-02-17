export const verifyZipcode = async (value: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const available = ['97402', '97404', '97405'];
  return available.includes(value);
};
