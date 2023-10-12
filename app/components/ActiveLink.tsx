'use client'

import { FC } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"


interface Props {
  text: string;
  href: string; //Si le pongo href? significa que no son obligatorias
}

export const ActiveLink: FC<Props> = ({text, href}) => {
  const pathname = usePathname()

  return (
    <Link className={`${pathname === href ? 'text-blue-600 underline' : ''}`} href={href}>{text}</Link>
  )
}
