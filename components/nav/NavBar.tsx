import Link from "next/link";
import { Button } from "../ui/button";
import { RxGithubLogo } from "react-icons/rx";

export function NavBar() {
    return (
        <nav className="flex items-center justify-between">
            <div className="group">
                <Link href="/" className="text-2xl font-bold">
                    Carneiro
                </Link>
                <div className="h-1 w-0 group-hover:w-full transition-all bg-yellow-500"></div>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
                <RxGithubLogo className="w-4 h-4 mr-2" /> Login
            </Button>
        </nav>
    )
}