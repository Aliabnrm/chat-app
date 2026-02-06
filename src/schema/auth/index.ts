import z from "zod";

export const SignupSchema = z.object({
  email: z.string().email({ message: "ایمیل معتبر وارد کنید" }),
  password: z
    .string()
    .min(6, { message: "رمز عبور حداقل باید ۶ کاراکتر باشد" }),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>


export const SigninSchema = z.object({
  email: z.string().email({ message: 'ایمیل معتبر نیست' }),
  password: z.string().min(6, { message: 'رمز عبور باید حداقل ۶ کاراکتر باشد' }),
})

export type SigninSchemaType = z.infer<typeof SigninSchema>
