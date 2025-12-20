import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

type UserPayload = {
  email: string;
};

const JWT_SECRET = process.env.JWT_SECRET_KEY!;

export async function getUserInfo(): Promise<UserPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;
    return { email: decoded.email };
  } catch {
    return null;
  }
}
