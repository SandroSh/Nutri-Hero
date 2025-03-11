

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

}:NavlinkProps) => {
  return (
    <p className={`${className} text-[17px] ${isActive ? 'border-b-2 font-bold border-red-10 mb-0' : ''}`} {...rest} >{children}</p>
  )
}

export default Navlink