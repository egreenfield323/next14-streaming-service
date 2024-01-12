import Link from "next/link";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export const Actions = () => {
    return (
        <div className="flex items-center justify-end gap-x-2">
            <Button size="sm" variant="ghost" className="text-[#fffdf0] hover:text-[#fffdf0] hover:bg-slate-800" asChild>
                <Link href="/">
                    <LogOut className="h-5 w-5 mr-2 text-[#fffdf0]" />
                    Exit
                </Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};