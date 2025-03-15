import { Navlink } from "@/components/atoms/NavLink"
import Title from "@/components/atoms/TitleField/title.component"

export interface InfoDisplayProps {
  className?: string

  children?: React.ReactNode
}
const InfoDisplay = ({
  className,
  children,
  ...rest
}: InfoDisplayProps) => {
  return (
    <div className={`w-full flex  ${className}`} {...rest} >
      {children}
    </div>
  )
}

export default InfoDisplay