"use client";
import { signIn } from "next-auth/react"
 
export function LoginButton() {
  return <Button onClick={() => signIn()}>Sign In</Button>
}
