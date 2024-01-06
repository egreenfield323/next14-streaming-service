import { Check } from "lucide-react";

export const VerifiedMark = () => {
    return (
        <div className="p-0.5 flex items-center justify-center h-4 w-4 rounded-full bg-rose-500">
            <Check className="mt-[1px] mr-[1px] h-[10px] w-[10px] text-primary stroke-[4px]" />
        </div>
    );
}