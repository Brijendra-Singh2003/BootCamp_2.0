"use client"

import { revalidateTag } from "next/cache";

export default function Retry() {

    function sasta_refresh() {
      document.location = document.location;
    }

  return (
    <button onClick={sasta_refresh}>Retry</button>
  )
}
