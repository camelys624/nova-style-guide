import React from 'react'
import TypeCard from "../type-card"
import Layout from "../Layout";

const TemplatePage = ({data}: any) => {
    return <Layout>
      {data.map((item: ContentType) => {
        return <TypeCard title={item.title} list={item.list} />
      })}
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
}