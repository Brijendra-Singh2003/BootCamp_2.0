"use client"

import { signIn } from 'next-auth/react'

export default function SignInButton() {
    function foo() {
        signIn('google');
    }
    return (
        <div className="innerleft">
            <button id="sign" onTouchStart={foo} onMouseDown={foo}>Sign In</button>
        </div>
    )
}
