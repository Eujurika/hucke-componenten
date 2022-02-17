import React, { useRef } from "react"
import { createMachine } from "xstate"
import { useMachine } from "@xstate/react"
import styled from "styled-components"
import SvgIcon from "../components/SvgIcon"
import Colors from "../constants/Colors"

const VideoWrapper = styled.div`
display flex;
  position: relative;
 /*  width: 100vw; */
  
`

const ButtonWrapper = styled.div`
  display: block;
  position: absolute;
  bottom: 5%;
  right: 5%;
`

const playerMachine = videoRef =>
  createMachine(
    {
      id: "player",
      initial: "paused",
      context: { videoRef },
      states: {
        paused: {
          entry: "stop",
          on: {
            PLAY: "playing",
          },
        },
        playing: {
          entry: "play",
          on: {
            STOP: "paused",
          },
        },
      },
    },
    {
      actions: {
        play: context => {
          if (context.videoRef.current) {
            context.videoRef.current.play()
          }
        },
        stop: context => {
          if (context.videoRef.current) {
            context.videoRef.current.pause()
          }
        },
      },
    }
  )

export default function VideoPlayer(props) {
  const videoRef = useRef(null)
  const machine = playerMachine(videoRef)
  const [current, send] = useMachine(machine)
  console.log("current", current.value)
  return (
    <VideoWrapper>
      <video loop muted poster={props.placeholder} ref={videoRef} width="100%">
        {props.children}
      </video>

      <br />
      <ButtonWrapper>
        <button
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "transparent",
            borderColor: "transparent",
          }}
          onClick={() =>
            current.value === "playing" ? send("STOP") : send("PLAY")
          }
        >
          {current.value === "playing" ? (
            <SvgIcon iconName="stop" color={Colors.grey} />
          ) : (
            <SvgIcon iconName="play" color={Colors.grey} />
          )}
        </button>
      </ButtonWrapper>
    </VideoWrapper>
  )
}
