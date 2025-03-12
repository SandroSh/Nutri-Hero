

export interface NavlinkProps {
  children?: React.ReactNode;
  isActive?: boolean;
  className?: string;

}


const Navlink = ({
  children,
  isActive = false,
  className,
  ...rest

}: NavlinkProps) => {
  const baseClasses = "text-[17px] cursor-pointer transition-all font-Lato ";
  const activeClasses = isActive ? "border-b-[3px] font-bold border-red-10 mb-0" : "";
  const hoverClasses = "hover:border-b-[3px] hover:border-red-10";

  const combinedClasses = `${baseClasses} ${activeClasses} ${hoverClasses} ${className || ""}`;
  return (
    <p className={combinedClasses} {...rest} >{children}</p>
  )
}

export default Navlink
