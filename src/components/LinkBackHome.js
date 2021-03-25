import * as React from "react"
import { Link } from "gatsby"
// import styled from "@emotion/styled"
import { css } from "@emotion/react"

const LinkBackHome = () => {
  return (
    <Link
      to="/"
      css={css`
        color: #0070f3;
        text-decoration: none;
        font-size: 18px;
        margin-top: 50px;
        display: block;
        &:hover {
          text-decoration: underline;
        }
      `}
    >
      ← Go back to the homepage
    </Link>
  )
}

export default LinkBackHome
