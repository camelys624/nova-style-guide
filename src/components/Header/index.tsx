import * as React from "react"
import {Link} from 'gatsby'
// @ts-ignore
import * as headerStyle from './index.module.css'

const Header = () => {
    return (
        <div className={headerStyle.headerBox}>
            <header>
                <h2>Nova Style Guide</h2>
                <nav>
                    <ul className={headerStyle.menu}>
                      <li><Link to='/front-end-page'>Front End</Link></li>
                        <li>Back End</li>
                        <li>UI/UX Design</li>
                        <li>
                            Projects
                            <ul className={headerStyle.subMenu}>
                                <li>Nova</li>
                                <li>Hydra</li>
                                <li>Asgard</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
