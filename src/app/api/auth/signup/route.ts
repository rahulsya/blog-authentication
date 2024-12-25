import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();
export async function POST(req: Request) {
  const { email, name, password, confirmPassword } = await req.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ message: "Email and password are required" }), { status: 400 });
  }

  if (password !== confirmPassword) {
    return new Response(JSON.stringify({ message: "Passwords do not match" }), { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response("Invalid email format", { status: 400 });
  }

  if (password.length < 8) {
    return new Response("Password must be at least 8 characters long", { status: 400 });
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  const data = {
    message: "User created successfully",
    data: newUser,
  };
  return new Response(JSON.stringify(data), { status: 201 });
}
