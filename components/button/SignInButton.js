"use client"

import { signIn } from 'next-auth/react'

export default function SignInButton() {
    return (
        <div className="innerleft">
        <button id="sign" onClick={() => { signIn('google')}}>Sign In</button>
        </div>
    )
}
