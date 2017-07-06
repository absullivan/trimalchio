import React from "react"
import { rhythm } from "../utils/typography"

class About extends React.Component {
  render() {
    return (
      <div
        css={{
          padding: rhythm(3 / 4),
        }}
      >
        <h1>About ABSgram</h1>
        <p>
          ABSgram is a fork of Gatsbygram. Gatsbygram's site says it is an, "example website built with the JavaScript web
          framework"
          {` `}
          <a target="_blank" href="https://github.com/gatsbyjs/gatsby">
            Gatsby
          </a>
          .
        </p>
        <p>
          The site's code is here {` `}
          <a
            href="https://github.com/gatsbyjs/gatsby/tree/1.0/examples/gatsbygram"
            target="_blank"
          >
            https://github.com/gatsbyjs/gatsby/tree/1.0/examples/gatsbygram
          </a>
        </p>
        <p>
          <a href="https://www.gatsbyjs.org/blog/gatsbygram-case-study/">
            There is a case study on how to build Gatsbygram
          </a>
        </p>
      </div>
    )
  }
}

export default About
