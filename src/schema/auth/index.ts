import z from "zod";

export const authSchema = z.object({
  email: z.string().email({ message: "ایمیل معتبر وارد کنید" }),
  password: z
    .string()
    .min(6, { message: "رمز عبور حداقل باید ۶ کاراکتر باشد" }),
});
