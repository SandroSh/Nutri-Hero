import { NavlinkProps } from "./navlink.config";
import { baseClasses, activeClasses, hoverClasses } from "./navlink.style";


const Navlink = ({
  children,
  isActive = false,
  hoverAnimate = true,
  className,
  ...rest

}: NavlinkProps) => {

  return (
    <p className={` ${className} ${baseClasses} ${isActive && activeClasses} ${hoverAnimate && hoverClasses}`} {...rest} >{children}</p>
  )
}

export default Navlink
