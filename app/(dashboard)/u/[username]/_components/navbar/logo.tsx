import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-x-4 hover:opacity-75 transition">
                <div className="bg-slate-300/5 rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
                    <Image src="/crabs-logo.png" alt="crabby" height="32" width="32" />
                </div>
                <div className={cn(
                    "hidden lg:flex",
                    font.className)}>
                    <p className="text-lg font-semibold mr-4 text-[#fffdf0]">
                        crabby.tv
                    </p>
                    <p className="mt-[7px] text-xs text-[#fffdf0]/80">
                        Creator dashboard
                    </p>
                </div>
            </div>
        </Link>
    );
};