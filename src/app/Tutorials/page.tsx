
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, 
         HiInbox, HiShoppingBag, 
         HiTable, HiUser, 
         HiMenu,
         HiChartBar,
} from "react-icons/hi";

import { TiThMenu } from "react-icons/ti";
import { FaImage, FaWpforms  } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { SiCarrd } from "react-icons/si";

export default function Tutorials() {
  return (
    <Sidebar aria-label="Default sidebar example" className="shadow-shape m-5">
      <Sidebar.Items className="">
        <Sidebar.ItemGroup className="w-96 ">
          <Sidebar className="text-[#8257e5] font-extrabold text-4xl pl-6">
            Tutoriais
          </Sidebar>
          <Sidebar.Item href="#" icon={HiChartBar} className="text-[#8257e5] font-bold text-xl">
            Estrutura de página
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={TiThMenu} className="text-[#8257e5] font-bold text-xl">
            Menu 
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaImage} className="text-[#8257e5] font-bold text-xl">
            Imagens
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaTableList} className="text-[#8257e5] font-bold text-xl">
            Tables 
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaWpforms} className="text-[#8257e5] font-bold text-xl">
            Forms 
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={SiCarrd} className="text-[#8257e5] font-bold text-xl">
            carrossel
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
