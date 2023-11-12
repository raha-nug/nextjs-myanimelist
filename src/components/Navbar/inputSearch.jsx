"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();



  const handleSearch = (event) => {
    if(searchRef.current.value.length){
      if (event.key === "Enter" || event.type === "click") {
        event.preventDefault();
        const keyword = searchRef.current.value;
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full p-2 rounded"
        placeholder="Search Anime .."
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;