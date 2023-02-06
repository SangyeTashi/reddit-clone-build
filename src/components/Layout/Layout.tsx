import React, { PropsWithChildren } from "react"
import Navbar from '../Navbar/Navbar'



export default function Layout(props: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    )
}