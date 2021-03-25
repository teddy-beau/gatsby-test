import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Header = ({ path }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
  `

  return (
    <header>
      {path === "/" ? (
        <Container>
          <Link to="/">
            <StaticImage
              src="../images/avatar.png"
              width={120}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Logo"
              css={css`
                border-radius: 50%;
                margin-bottom: 15px;
                &:hover {
                  opacity: 0.7;
                }
              `}
            />
          </Link>
          <h1>
            <Link
              to="/"
              css={css`
                color: #222;
                text-decoration: none;
                &:hover {
                  text-decoration: underline;
                }
              `}
            >
              Shu Uesugi
            </Link>
          </h1>
        </Container>
      ) : (
        <Container>
          <Link to="/">
            <StaticImage
              src="../images/avatar.png"
              width={90}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Logo"
              css={css`
                border-radius: 50%;
                margin-bottom: 15px;
                &:hover {
                  opacity: 0.7;
                }
              `}
            />
          </Link>
          <h2>
            <Link
              to="/"
              css={css`
                color: #222;
                text-decoration: none;
                &:hover {
                  text-decoration: underline;
                }
              `}
            >
              Shu Uesugi
            </Link>
          </h2>
        </Container>
      )}
    </header>
  )
}

export default Header
