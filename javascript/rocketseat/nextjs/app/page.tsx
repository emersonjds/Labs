import GithubProfile from "./components/githubProfile";
import LowerComponent from "./components/lowerComponent";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <div>
      <h1>Welcome</h1>

      <GithubProfile />

      <LowerComponent />
    </div>
  );
}
