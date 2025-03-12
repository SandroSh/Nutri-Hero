import { Navlink } from "@/components/atoms/NavLink"
import Title from "@/components/atoms/TitleField/title.component"

export interface InfoDisplayProps {
    className?: string
    
    titleText: string
    titleClassName?: string
    children?: React.ReactNode
}
const InfoDisplay = ({
    className,
    titleClassName,
    titleText,
    children,
    ...rest
}:InfoDisplayProps) => {
  return (
    <div className={`w-full flex  ${className}`} {...rest} >
        <Title text={titleText} className={`text-2xl text-center ${titleClassName}`} />
        {children}
    </div>
  )
}

export default InfoDisplay