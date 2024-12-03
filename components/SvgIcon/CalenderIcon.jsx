import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const CalenderIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 123 123"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={15.375}
      y={30.75}
      width={92.25}
      height={76.875}
      rx={2}
      stroke="#524C4C"
    />
    <Path
      d="M15.375 34.75C15.375 32.8644 15.375 31.9216 15.9608 31.3358C16.5466 30.75 17.4894 30.75 19.375 30.75H103.625C105.511 30.75 106.453 30.75 107.039 31.3358C107.625 31.9216 107.625 32.8644 107.625 34.75V51.25H15.375V34.75Z"
      fill="#524C4C"
    />
    <Path
      d="M35.875 15.375L35.875 30.75"
      stroke="#524C4C"
      strokeLinecap="round"
    />
    <Path
      d="M87.125 15.375L87.125 30.75"
      stroke="#524C4C"
      strokeLinecap="round"
    />
    <Rect
      x={35.875}
      y={61.5}
      width={20.5}
      height={10.25}
      rx={0.5}
      fill="#524C4C"
    />
    <Rect
      x={35.875}
      y={82}
      width={20.5}
      height={10.25}
      rx={0.5}
      fill="#524C4C"
    />
    <Rect
      x={66.625}
      y={61.5}
      width={20.5}
      height={10.25}
      rx={0.5}
      fill="#524C4C"
    />
    <Rect
      x={66.625}
      y={82}
      width={20.5}
      height={10.25}
      rx={0.5}
      fill="#524C4C"
    />
  </Svg>
);
export default CalenderIcon;
