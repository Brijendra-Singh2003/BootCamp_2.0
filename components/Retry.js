"use client"

export default function Retry({children, tag}) {

    function sasta_refresh() {
      revalidateTag(tag);
      document.location = document.location;
    }

  return (
    <button onClick={sasta_refresh}>{children}</button>
  )
}
