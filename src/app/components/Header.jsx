import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-slate-800 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/" className="hover:text-blue-400">
                        My Portfolio
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="text-white hover:text-blue-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-blue-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="text-white hover:text-blue-400">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-white hover:text-blue-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* CTA Button */}
                <div>
                    <Button variant="outline" className="text-white hover:text-blue-400 border-white">
                        Let's Talk
                    </Button>
                </div>
            </div>
        </header>
    );
}
