import { StreamPlayer } from "@/components/stream-player";
import { Video } from "@/components/stream-player/video";
import { getUserByUsername } from "@/lib/user-service";
import { currentUser } from "@clerk/nextjs";

let params = "crabsss";

export const FeaturedStream = () => {
    

    return (
        <div className="justify-center text-center">
            Featured stream
        </div>
    );
}