import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// hooks
import useDeviceDetect from "../hooks/useDeviceDetect"
import useWindowScrollPosition from "../hooks/useScrollHandler"
import styled from "styled-components"

// components
import VideoPlayer from "../components/VideoPlayer"
import DemoVideo from "../assets/videos/ocean.mp4"
import placeholderDemo from "../assets/images/DemoPlaceholder.png"

const ColoredText = styled.h1`
  color: ${props => (props.reached ? "green" : "grey")};
  font-size: 30px;
`

const IndexPage = () => {
  const { isMobile } = useDeviceDetect()
  const scrollPosition = useWindowScrollPosition()
  return (
    <Layout>
      <h1>Jule</h1>
      {/* check for mobile device */}
      {isMobile ? (
        <h4>Du siehst die Seite auf einem mobiles Gerät</h4>
      ) : (
        <h4>Du siehst die Seite auf einem Desktop Computer</h4>
      )}

      <VideoPlayer placeholder={placeholderDemo}>
        <source src={DemoVideo} type="video/mp4" />
      </VideoPlayer>
      {scrollPosition > 100 ? (
        <ColoredText reached>Scrollposition erreicht</ColoredText>
      ) : (
        <ColoredText>Scrollposition nicht erreicht</ColoredText>
      )}
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod. Laboris quis Lorem id nisi consectetur irure ad est
        incididunt minim amet ullamco veniam nisi veniam sunt nisi pariatur
        mollit. Cupidatat proident id ipsum tempor ea sint dolor qui est ullamco
        deserunt deserunt nostrud.
      </p>
    </Layout>
  )
}

export default IndexPage
