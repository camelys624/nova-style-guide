import React from 'react'
import {Link} from 'gatsby'
import {MdxContent} from "../template-page"

export default function CustomLinkCard(props: MdxContent) {
  return (<>
    <Link to={props.slug}>
      <h3>{props.title}</h3>
    </Link>
  </>)
}