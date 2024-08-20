import { Suspense } from "react";
import GithubProfile from "./components/githubProfile";
import LowerComponent from "./components/lowerComponent";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <div>
      <h1>Welcome Home</h1>

      <Suspense fallback={<div>Loading Github data...</div>}>
        <GithubProfile />
      </Suspense>

      <Suspense fallback={<div>Loading Lower Component...</div>}>
        <LowerComponent />
      </Suspense>
    </div>
  );
}
