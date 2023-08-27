"use client"

import handleRevalidate from "@/functions/revalidate";

export default function Retry() {

    function sasta_refresh() {
      handleRevalidate();
      document.location = document.location;
    }

  return (
    <button onClick={sasta_refresh}>Retry</button>
  )
}