import * as React from 'react'
import Layout from "../components/Layout"
import {graphql} from "gatsby"
import {initHighlight} from "../utils"
import {MDXRenderer} from "gatsby-plugin-mdx";

class IndexPage extends React.Component {
    componentDidMount() {
        initHighlight()
    }

    render () {
    // @ts-ignore
    const {data} = this.props

    return (
        <Layout>
          <MDXRenderer>{data.allMdx.nodes[0].body}</MDXRenderer>
        </Layout>
    )
  }
}

export const query = graphql`
    query {
      allMdx(filter: {slug: {regex: "/guide-summary/"}}) {
        nodes {
          body
          id
          slug
          frontmatter {
                        date(formatString: "MMMM D, YYYY")
            title
          }
        }
      }
    }
`

export default IndexPage
