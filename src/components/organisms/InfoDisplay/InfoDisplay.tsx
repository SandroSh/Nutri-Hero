

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