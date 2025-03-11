

export interface NavlinkProps {
    children: React.ReactNode;
    isActive?: boolean;
    className?: string;
       
}


const Navlink = ({
    children,
    isActive,
    className,
    ...rest

}:NavlinkProps) => {
  return (
    <p className={`${className} ${isActive ? 'border-b-2 font-bold border-red-10' : ''}`} {...rest} >{children}</p>
  )
}

export default Navlink