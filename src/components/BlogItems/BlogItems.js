import React from 'react'
import { navigate } from "gatsby"
import { Container, H1 } from "../layout"
import { Block, Title, Description, Date } from "./BlogItems.styles"

export const BlogItems = ({ dark, title, blogs, preview }) => {

  const handleClick = path => {
    navigate(path)
  }

  return (
    <Container dark={dark} id="blog">
      <H1>{title}</H1>
      {blogs.edges.map(({ node }, i) => {
        const { frontmatter: { path, title, description, date } } = node
        return (
          <Block key={i} onClick={() => handleClick(path)} dark={dark}>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Date>{date}</Date>
          </Block>
        )
      })}
      {preview && <Block onClick={() => handleClick('/blogs')} dark={dark}>
        <Title>View More</Title>
      </Block>}
    </Container>
  )
}