import Link from "next/link";
import { LoginForm } from "./LoginForm";

export function NavBar() {
    return (
        <nav className="flex items-center justify-between">
            <div className="group">
                <Link href="/" className="text-2xl font-bold">
                    Carneiro
                </Link>
                {/* <div className="h-1 w-0 group-hover:w-full transition-all bg-yellow-500"></div> */}
            </div>
                <LoginForm />
        </nav>
    )
}
