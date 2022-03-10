import React, {useEffect} from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import {initHighlight} from "../utils"

const BlogPost = ({data}: any) => {
    useEffect(() => {
        initHighlight()
    })

    return (
        <Layout>
            <h2>{data.mdx.frontmatter.title}</h2>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      slug
      body
    }
  }
`

export default BlogPost
