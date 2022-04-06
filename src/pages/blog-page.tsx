import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import TemplatePage, { ContentType, MdxContent } from "../components/template-page"

class BlogPage extends Component<Element, any> {
    render() {
        let result: ContentType[] = []
        let typeMap: any = {}
        let readme: MdxContent = {
            title: '',
            slug: '',
            body: ''
        }

        // @ts-ignore
        const { allMdx } = this.props.data
        allMdx.nodes.forEach((item: any) => {
            let type: string = item.frontmatter.type
            let formatItem: MdxContent = {
                title: item.frontmatter.title,
                slug: item.slug
            }

            if (!typeMap[type]) {
                typeMap[type] = {
                    title: type,
                    list: [formatItem]
                }
                result.push(typeMap[type])
            } else {
                typeMap[type].list.push(formatItem)
            }
        })

        return <TemplatePage data={result} />
    }
}

export const query = graphql`
    query {
        allMdx(filter: {slug: {regex: "/blog/"}}) {
            nodes {
                frontmatter {
                    title
                    type
                    date
                }
                id
                body
                slug
            }
        }
    }
`

export default BlogPage
