declare module 'react-video-cover' {
  import { ComponentType } from 'react'

  interface VideoCoverProps {
    videoOptions?: React.VideoHTMLAttributes<HTMLVideoElement>
    remeasureOnWindowResize?: boolean
    style?: React.CSSProperties
  }

  const Cover: ComponentType<VideoCoverProps>
  export default Cover
}
