import Navbar from "../components/Navbar";
import CheckInCard from "../components/CheckInCard";
import ProgressCard from "@/components/ProgressCard";
import GoalsCard from "@/components/GoalsCard";
import RoutineCard from "@/components/RoutineCard";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-gradient-to-t from-base-100 via-primary to-base-200 min-h-screen">
        {/* Custom Hero Section */}
        <div className="flex flex-col justify-center items-center flex-1">
          <h1 className="text-5xl font-extrabold text-white mb-5 whitespace-nowrap">
            Make Every{" "}
            <a className="bg-secondary text-transparent bg-clip-text text-7xl ">
              Rep
            </a>{" "}
            Matter
          </h1>
          <div className="text-center max-w-xl">
            <p className="text-lg text-white opacity-90 mb-9">
              Unlock your potential with a dedicated platform to track and
              enhance your workout journey. Every rep counts towards your goals.
            </p>
            <Link
              href="/auth/login"
              className="btn btn-secondary text-xl text-white h-10 w-32 hover:scale-105 border-transparent shadow-2xl"
            >
              Hop on
            </Link>
          </div>
        </div>

        {/* Grid layout for cards with reduced gap */}
        <div className="flex gap-10 justify-center mb-60">
          <ProgressCard />
          <CheckInCard />
          <GoalsCard />
          <RoutineCard />
        </div>
      </main>
    </>
  );
}
