import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
export default function HeroImage() {
    const { placeholderImage } = useStaticQuery(
        graphql`
            queryMyQuery {
                file(relativePath: {eq: "banner2.jpg"}) {
                    childImageSharp {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }
        `
      )
    return (
        <div className="bg-fixed">
            <StaticImage src="../../images/banner2.jpg"  imgClassName="h-3/6 w-full" />
        </div>
    )
}
