import Navbar from "@/components/Navbar";
import Trends from "@/components/Trends";
import Users from "@/components/Users";
import Boxes from "@/components/Boxes";
import TopPlatform from "@/components/TopPlatform";

export default function Home() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
    <div className="px-3 md:px-6 py-10">
      <div className="flex flex-col gap-y-5">
      <div className=" flex flex-col md:flex-row gap-x-5 gap-y-5">
      <div className="flex flex-col md:w-7/12 gap-y-4 ">
          <div>
          <Trends />
          </div>
        </div>
        <div className="flex flex-col md:w-5/12 gap-y-4">
        <div>
          <Boxes />
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-x-5 gap-y-5">
      <div className="flex flex-col md:w-7/12 gap-y-4">
          <div>
          <Users />
          </div>
        </div>
        <div className="flex flex-col md:w-5/12 gap-y-4">
        <div>
          <TopPlatform />
          </div>
        </div>
      </div>
      </div>
    </div>
    </main>
  );
}
