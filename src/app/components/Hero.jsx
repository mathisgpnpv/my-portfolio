import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="bg-slate-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">
                {/* Left Section: Text Content */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold leading-tight">
                        Hi, I'm <span className="text-blue-400">[Your Name]</span>
                    </h1>
                    <p className="text-xl text-slate-300">
                        I'm a passionate full-stack developer with a focus on building beautiful, responsive, and user-friendly websites. I craft solutions that help businesses grow and succeed online.
                    </p>

                    <div>
                        <Button variant="outline" className="mt-4 text-white hover:text-blue-400 border-white">
                            Get in Touch
                        </Button>
                    </div>
                </div>

                {/* Right Section: Image or Visual Element */}
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden">
                        <Image
                            src="/path/to/your-image.jpg"  // Replace with your own image
                            alt="Your Name"
                            layout="fill"
                            objectFit="cover"
                            className="object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
