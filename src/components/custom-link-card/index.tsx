import React from 'react'
import {Link} from 'gatsby'
import {MdxContent} from "../template-page"

// @ts-ignore
import * as customLinkCardStyle from './index.module.css'

export default function CustomLinkCard(props: MdxContent) {
  return (<>
    <Link className={customLinkCardStyle.card} to={'/' + props.slug}>
      <h3>{props.title}</h3>
    </Link>
  </>)
}
