import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/navbar";

export default function DasboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 h-screen">
      <Sidebar />
      <div className="col-span-10 bg-[#1f1f70]">
        <div className="grid grid-rows-12 h-screen">
          <Navbar />
          <div className="row-span-11 bg-red-500">{children}</div>
        </div>
      </div>
    </div>
  );
}
