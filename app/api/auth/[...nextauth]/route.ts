import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from "@/lib/prisma";

const handler = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    throw new Error("Missing credentials")
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if(!user) {
                    throw new Error("Invalid credentials")
                }

                const isPasswordValid = await compare(credentials.password, user.password)
                if(!isPasswordValid) {
                    throw new Error("Invalid credentials")
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                }
            }
        })
    ],
    pages: {
        signIn: "/"
    },
    session: {
        strategy: "jwt"
    }
})

export { handler as GET, handler as POST }
