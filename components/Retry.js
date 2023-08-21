"use client"

export default function Retry({children}) {

    function sasta_refresh() {
        document.location = document.location;
    }

  return (
    <button onClick={sasta_refresh}>{children}</button>
  )
}
