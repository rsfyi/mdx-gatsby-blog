import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
// ...GatsbyImageSharpFluid

const getPersonImg = graphql`
  query Myquery {
    person: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({ showPerson }) => {
  const { person } = useStaticQuery(getPersonImg)
  return (
    <header className="hero">
      {showPerson && (
        <Image fluid={person.childImageSharp.fluid} className="hero-person" />
      )}
    </header>
  )
}

export default Hero
