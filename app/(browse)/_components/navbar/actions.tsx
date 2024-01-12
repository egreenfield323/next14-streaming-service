import Link from "next/link";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Clapperboard } from "lucide-react";


export const Actions = async () => {
    const user = await currentUser();

    return (
        <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
            {!user && (
                <SignInButton>
                    <Button size="sm" variant="dark">
                        Login
                    </Button>
                </SignInButton>
            )}
            {!!user && (
                <div className="flex items-center gap-x-4">
                    <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-slate-800" asChild>
                        <Link href={`/u/${user.username}`}>
                            <Clapperboard className="h-5 w-5 lg:mr-2 text-[#fffdf0]" />
                            <span className="hidden lg:block text-[#fffdf0]">
                                Dashboard
                            </span>
                        </Link>
                    </Button>
                    <UserButton afterSwitchSessionUrl="/" />
                </div>
            )}
        </div>
    );
};