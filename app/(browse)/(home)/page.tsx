import { Suspense } from "react";
import { Results, ResultsSkeleton } from "./_components/results";
import { FeaturedStream } from "./_components/featured-stream";

export default function HomePage() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <FeaturedStream />
      <h1 className="text-4xl font-bold mb-8">Discover</h1>
      <Suspense fallback={<ResultsSkeleton />}>
        <Results />
      </Suspense>
    </div>
  );
}