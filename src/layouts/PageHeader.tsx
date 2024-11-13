import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Logo from "../assets/Logo.png";
import Button from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

export default function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div
      className="flex gap-10 lg:ga-20 justify-between pt-2 mx-4 mb-6"
    >
     <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
          {showFullWidthSearch &&  <Button onClick={()=> setShowFullWidthSearch(false)} type="button" size="icon" variant="ghost" className="flex-shrink-0">
          <ArrowLeft />
        </Button>}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-red-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0 ">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`${
          showFullWidthSearch ? "hidden" : "flex"
        } flex-shrink-0 md:gap-2`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

type PageHeaderFirstSectionProps ={
  hidden? : boolean;
}

export function PageHeaderFirstSection({hidden=false}:PageHeaderFirstSectionProps){
  const {toggle} = useSidebarContext();
  return   <div className={`${
    hidden ? "hidden" : "flex"
  } gap-4 items-center flex-shrink-0`}>
    <Button variant="ghost" size="icon" onClick={toggle}>
      <Menu />
    </Button>
    <a href="/">
      <img src={Logo} className="h-6" alt="Youtube" />
    </a>
  </div>
}