import React from 'react'

interface Props {
    children: React.ReactNode
    cardStyles?: string
}

const BorderCard = ({ children, cardStyles }: Props) => {
    return (
        <section
            className={`border border-[#A4A0A0] px-6 py-2 rounded-2xl bg-[#03006040] ${cardStyles} `}>
            {children}
        </section>
    )
}

export default BorderCard