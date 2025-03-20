import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Left Section: Links */}
                    <div className="flex space-x-6">
                        <Link href="/" className="hover:text-blue-400">Home</Link>
                        <Link href="/about" className="hover:text-blue-400">About</Link>
                        <Link href="/projects" className="hover:text-blue-400">Projects</Link>
                        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
                    </div>

                    {/* Right Section: CTA Button */}
                    <div>
                        <Button variant="outline" className="text-white hover:text-blue-400 border-white">
                            Let's Talk
                        </Button>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-600 pt-4 text-center">
                    <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
