import { available } from "./fixtures";

export const verifyZipcode = async (value: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return available.includes(value);
};
