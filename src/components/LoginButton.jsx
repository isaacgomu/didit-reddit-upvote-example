"use client";
import { signIn } from "next-auth/react"
 
export function LoginButton() {
  return <button onClick={() => signIn()}>Sign In</button>
}
