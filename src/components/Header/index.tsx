import * as React from "react"
import {Link} from 'gatsby'
// @ts-ignore
import * as headerStyle from './index.module.css'

const Header = () => {
    return (
        <div className={headerStyle.headerBox}>
            <header>
                <h2><Link to='/'>Nova Style Guide</Link></h2>
                <nav>
                    <ul className={headerStyle.menu}>
                      <li><Link to='/front-end-page'>Front End</Link></li>
                        <li><Link to='/store'>Back End</Link></li>
                        <li>UI/UX Design</li>
                        <li><Link to='/blog-page'>Blog</Link></li>
                        <li>
                            Projects
                            <ul className={headerStyle.subMenu}>
                                <li><Link to='/nova-project-page'>Nova</Link></li>
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
