import React, {useEffect} from 'react'
import TypeCard from "../type-card"
import {initHighlight} from "../../utils"
import Layout from "../Layout"

const TemplatePage = ({data, children}: any) => {
    useEffect(() => {
        initHighlight()
    })

    return <Layout>
      {data.map((item: ContentType, index: number) => {
        return <TypeCard title={item.title} list={item.list} key={index} />
      })}
      {children}
    </Layout>
}

export default TemplatePage

export interface ContentType {
  title: string,
  list: MdxContent[]
}

export interface MdxContent {
  title: string,
  slug: string,
  body?: string
}
