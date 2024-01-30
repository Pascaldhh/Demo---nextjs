import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const AccountPage = ({title, children, isActive, className, btns, inputWrapperHeight}) => {
  return (
    <div className={className + " " + (isActive ? "visible open" : "invisible")}>
      <div className="flex justify-between items-center">
        <h3 className="uppercase font-medium text-3xl">{title}</h3>
        <a href="#dashboard" className="text-enveus-primary hover:text-opacity-80 transition-all flex items-center font-medium">back<HiOutlineArrowNarrowRight size={20}/></a>
      </div>
      <div className={`mt-12 ${inputWrapperHeight} px-1 w-full overflow-y-auto`}>
        {children}
      </div>
      <div className="mt-20">
        {btns}
      </div>
    </div>
  )
};

export default AccountPage;
