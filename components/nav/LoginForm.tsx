'use client'

import { Button } from "../ui/button";
import { RxGithubLogo } from "react-icons/rx";
import { createBrowserClient } from '@supabase/ssr'
import { usePathname } from "next/navigation";

export function LoginForm() {
    const pathname = usePathname()

const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: location.origin + '/auth/callback?next=' + pathname,
      },
    });
  };

    return (
        <Button variant="outline" className="flex items-center gap-2" onClick={handleLogin}>
            <RxGithubLogo className="w-4 h-4 mr-2" /> Login
        </Button>
    )
}
