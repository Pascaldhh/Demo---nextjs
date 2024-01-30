import { forwardRef } from "react"
import { LeftBarType } from "./Types";

const LeftBarOption = forwardRef(({ id = "#", option, className, type = LeftBarType.Default, isActive, onClick}, ref) => {
  const styles = {
    [LeftBarType.Default]: "before:bg-enveus-primary hover:outline-enveus-primary",
    [LeftBarType.LeftHover]: `hover:before:bg-enveus-primary before:transition-colors ${isActive ? "before:bg-enveus-primary" : "before:bg-transparent" }`
  };

  const activeStyle = styles[type];
  return (
    <a ref={ref} onClick={onClick} href={id} className={className + " relative inline-block bg-enveus-black py-4 px-8 font-bold before:h-full before:w-1 before:absolute before:top-0 before:-left-1  outline-4 outline outline-transparent transition-[outline] border-solid " + activeStyle}>
      {option}
    </a>
  )
});

export default LeftBarOption;
