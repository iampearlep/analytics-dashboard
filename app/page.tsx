import Navbar from "@/components/Navbar";
import Trends from "@/components/Trends";
import Users from "@/components/Users";
import Boxes from "@/components/Boxes";
import Discount from "@/components/Discount";

export default function Home() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
    <div className="px-6 py-10">
      <div className="flex flex-col gap-y-5">
      <div className=" flex flex-row gap-x-5">
      <div className="flex flex-col w-7/12 gap-y-4">
          <div>
          <Trends />
          </div>
        </div>
        <div className="flex flex-col w-5/12 gap-y-4">
        <div>
          <Boxes />
          </div>
        </div>
      </div>
      <div className=" flex flex-row gap-x-5">
      <div className="flex flex-col w-7/12 gap-y-4">
          <div>
          <Users />
          </div>
        </div>
        <div className="flex flex-col w-5/12 gap-y-4">
        <div>
          <Discount />
          </div>
        </div>
      </div>
      </div>
    </div>
    </main>
  );
}
