import React from "react"
import styled from "styled-components"

//import { ReactComponent as PlayLogo } from '../assets/images/play.svg';
import Colors from "../constants/Colors"
import PlayLogo from "../assets/images/svg/play.svg"
import PauseLogo from "../assets/images/svg/stop.svg"

/* const SvgOpen = props => {
  const { color } = props
  return (
    <svg
      width="3.5rem"
      height="3.5rem"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 61.13 99.79"
      fill={color}
    >
      <path
        d="M932,587.87h0a6.48,6.48,0,0,1,.19-9.18L972.52,540l-40.36-38.72a6.48,6.48,0,0,1-.19-9.18h0a6.5,6.5,0,0,1,9.18-.19L991.28,540l-50.13,48.09A6.49,6.49,0,0,1,932,587.87Z"
        transform="translate(-930.16 -490.08)"
        stroke={color}
        strokeWidth={8}
      />
    </svg>
  )
} */

/* const SvgSmall = props => {
  const { color } = props
  return (
    <svg
      width="1rem"
      height="1rem"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 61.13 99.79"
      fill={color}
    >
      <path
        d="M932,587.87h0a6.48,6.48,0,0,1,.19-9.18L972.52,540l-40.36-38.72a6.48,6.48,0,0,1-.19-9.18h0a6.5,6.5,0,0,1,9.18-.19L991.28,540l-50.13,48.09A6.49,6.49,0,0,1,932,587.87Z"
        transform="translate(-930.16 -490.08)"
        stroke={color}
        strokeWidth={8}
      />
    </svg>
  )
} */

const StyledPlayLogo = styled.svg`
  /* border: 2px solid red; */
  width: 4rem;
  height: 4rem;
  polygon {
    fill: "transparent";
  }
  circle {
    fill: ${props => props.color};
  }
`

const SvgPlay = props => {
  const { color } = props
  return (
    <StyledPlayLogo color={color}>
      <PlayLogo />
    </StyledPlayLogo>
  )
}

const StyledPauseLogo = styled.svg`
  /* border: 2px solid red; */
  width: 4rem;
  height: 4rem;
  circle {
    fill: ${props => props.color};
  }
`

const SvgPause = props => {
  const { color } = props
  return (
    <StyledPauseLogo color={color}>
      <PauseLogo />
    </StyledPauseLogo>
  )
}

const StyledContactLogo = styled.svg`
  width: 80px;
  height: 80px;
  ellipse {
    fill: ${Colors.grey};
  }
  polyline {
    fill: ${Colors.grey};
  }
`

function SvgIcon(props) {
  const { iconName, color } = props
  return (
    <>
      {/* Uebergeben von open oder play bei Auswahl von Icon. */}
      {iconName === "play" ? (
        <SvgPlay color={color} />
      ) : (
        <SvgPause color={color} />
      )}
    </>
  )
}

export default SvgIcon
