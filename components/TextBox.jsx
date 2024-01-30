import { forwardRef } from "react"

const TextBox = forwardRef(({ className, children, bgOpacity, padding }, ref) => {
  return (
    <div ref={ref} className={className}>
      <div className={"relative before:inset-0 before:absolute before:z-10 after:z-20 before:bg-enveus-black before:w-full before:h-full after:h-1 after:w-full after:bg-enveus-primary after:absolute after:left-0 after:bottom-0 " + ((padding ?? "p-6") + " ") + (bgOpacity ?? "before:opacity-80")}>
        <div className="relative z-20">{children}</div>
      </div>
    </div>
  )
});
export default TextBox;
