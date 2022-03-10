import * as React from 'react'
import CustomLinkCard from "../custom-link-card"
import {ContentType, MdxContent} from "../template-page"
// @ts-ignore
import * as typeCardStyle from './index.module.css'

export default function TypeCard(props: ContentType) {
  return (<>
    <h2 className={typeCardStyle.typeCard__title}>{props.title}</h2>
    <div className={typeCardStyle.typeCard__content}>
      {props.list.map((item: MdxContent) => <CustomLinkCard title={item.title} slug={item.slug}/>)}
    </div>
  </>)
}