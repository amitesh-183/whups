import React from 'react'
import { Button } from './ui/button'


interface ThemeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnStyle?: string
    title: string
}

const ThemeButton = ({ btnStyle, title, ...props }: ThemeButtonProps) => {
    return (
        <>
            <Button
                className={`bg-linear-to-r from-[#0022FF] to-[#00C4F5] border w-[284px] rounded-[20px] font-semibold h-[52px] cursor-pointer ${btnStyle}`}
                {...props}
            >
                {title}
            </Button>
        </>
    )
}

export default ThemeButton