import { assets } from "@/assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";

export default function layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="flex flex-col w-full border border-black">
          <div className="flex gap-5 items-center justify-end w-full py-3 max-h-[60px]  px-12 ">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} width={38} alt="" />
          </div>
          {children}
        </div>
      </div>

    </>
  )
}