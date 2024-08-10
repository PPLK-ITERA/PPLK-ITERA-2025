import { useToast } from "../ui/use-toast";

import React, { useState } from "react";

import { IconSearch } from "@tabler/icons-react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

function RelasiSearch({
  className,
  onsubmit,
}: {
  className?: string;
  onsubmit: (search: string) => void;
}) {
  const [search, setSearch] = useState("");

  return (
    <form
      className={`${className} w-full`}
      onSubmit={(e) => {
        e.preventDefault();
        onsubmit(search);
      }}
    >
      <Input
        type="text"
        placeholder="Cari Nusantara Muda yang Lain"
        className="p-4 border rounded-[10px]"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button
        type="submit"
        className="absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-tr from-[#864D0D] to-[#A6680C] rounded-r-lg rounded-l-none"
      >
        <IconSearch className="w-4 h-4" />
      </Button>
    </form>
  );
}

export default RelasiSearch;
