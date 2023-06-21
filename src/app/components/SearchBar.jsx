"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handledSubmit = e => {
    e.preventDefault();
    console.log(search);
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handledSubmit}
      className='flex max-w-6xl mx-auto justify-between 
      items-center px-5  flex-1'
    >
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        type='text'
        name=''
        id=''
        placeholder='Search keywords...'
        className='w-full h-14 rounded-sm placeholder-gray-500 outline-none
      bg-transparent
      '
      />
      <button
        disabled={!search}
        type='submit'
        className='text-amber-600 disabled:text-gray-400'
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
