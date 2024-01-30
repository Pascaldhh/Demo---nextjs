import { forwardRef } from "react"
import { PiMagnifyingGlassBold } from "react-icons/pi"

const SearchBar = forwardRef(({}, ref) => {
  return (
    <label ref={ref} htmlFor="search" className="opacity-0 relative cursor-text outline focus-within:outline-offset-4 focus-within:outline-enveus-primary bg-enveus-black bg-opacity-50 border-2 border-enveus-primary p-3 rounded-lg w-full">
      <PiMagnifyingGlassBold size="25" className="absolute top-1/2 -translate-y-1/2 text-white text-opacity-50"/>
      <input id="search" type="text" className="bg-transparent w-full font-bold uppercase pl-10 focus:outline-none" placeholder="Search" />
    </label>
  )
});

export default SearchBar;
