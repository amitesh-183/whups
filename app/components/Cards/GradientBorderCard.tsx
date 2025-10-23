import React from 'react'


interface Props {
    children: React.ReactNode
    borderStyles?: string,
    outerStyles?: string
}

const GradientBorderCard = ({ children, borderStyles, outerStyles }: Props) => {
    return (
        <div className={`relative p-[0.8px] rounded-2xl ${outerStyles}`}>
            <div className={`bg-gradient-to-br from-[#A9005D] to-[#0098C6] rounded-2xl flex flex-col gap-5 ${borderStyles}`}>
                {children}
            </div>
        </div>
    )
}

export default GradientBorderCard