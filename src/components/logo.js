import React from "react"
import logo from "../images/logo_beauty-of-react.svg"
import { Link } from "gatsby"

const Icon = () => (
  <Link to="/">
    <img width={400} src={logo} alt="beauty of React" />
  </Link>
)

export default Icon
