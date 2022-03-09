import * as React from "react"
import Header from '../Header'
// @ts-ignore
import * as layoutStyle from './index.module.css'

const Layout = (props: any) => {
    return (
        <>
            <Header/>
            <main className={layoutStyle.mdContent}>
                {props.children}
            </main>
        </>
    )
}

export default Layout
