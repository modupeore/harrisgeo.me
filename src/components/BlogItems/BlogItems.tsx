import React from "react"
import { navigate } from "gatsby"
import { Container, H1, Tag } from "../Layout"
import {
  Block,
  Title,
  Description,
  Date,
  MiniWrapper,
  BlockWrapper,
} from "./BlogItems.styles"

export const BlogItems = ({ dark, title, blogs, preview }: any) => {
  const handleClick = (path: any) => {
    navigate(path)
  }

  return (
    <Container dark={dark} id='blog'>
      <H1>{title}</H1>
      {blogs.edges.map(({ node }: any, i: number) => {
        const {
          frontmatter: { path, title, description, date, tags },
        } = node

        return (
          <BlockWrapper key={i}>
            <Block onClick={() => handleClick(path)} dark={dark}>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Block>
            <MiniWrapper>
              <Date>{date}</Date>
              {tags.map((tag: string, j: number) => (
                <Tag
                  key={j}
                  dark={dark}
                  onClick={e => {
                    e.preventDefault()
                    handleClick(`/tags/${tag}`)
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </MiniWrapper>
          </BlockWrapper>
        )
      })}
      {preview && (
        <Block onClick={() => handleClick("/blogs")} dark={dark}>
          <Title>View More</Title>
        </Block>
      )}
    </Container>
  )
}
