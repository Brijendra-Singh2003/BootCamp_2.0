"use client"

export default function Retry({children}) {

    function refresh() {
        document.location = document.location;
    }

  return (
    <button onClick={refresh}>{children}</button>
  )
}
