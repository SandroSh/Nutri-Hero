import { CustomDivider } from '@/components/atoms/CustomDivider'
import React from 'react'

const DividerParagraph = ({title, pText}:{title:string, pText:string}) => {
    return (
        <div>
            <CustomDivider children={title} />
            <p>
                {pText}
            </p>
        </div>
    )
}

export default DividerParagraph