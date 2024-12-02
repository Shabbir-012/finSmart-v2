import * as React from "react";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const TakePicture = (props) => (
  <Svg
    width={70}
    height={70}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={100} cy={100} r={100} fill="url(#paint0_linear_161_21)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56.9216 81.505C55.75 82.6766 55.75 84.5622 55.75 88.3334V133.333C55.75 136.162 55.75 137.576 56.6287 138.455C57.5074 139.333 58.9216 139.333 61.75 139.333H138.25C141.078 139.333 142.493 139.333 143.371 138.455C144.25 137.576 144.25 136.162 144.25 133.333V88.3334C144.25 84.5622 144.25 82.6766 143.078 81.505C141.907 80.3334 140.021 80.3334 136.25 80.3334H134.444C132.039 80.3334 130.836 80.3334 129.869 79.736C128.903 79.1386 128.365 78.0628 127.289 75.9111L120.772 62.8779C120.234 61.8021 119.965 61.2641 119.482 60.9654C118.999 60.6667 118.397 60.6667 117.195 60.6667H82.8055C81.6027 60.6667 81.0012 60.6667 80.5179 60.9654C80.0346 61.2641 79.7657 61.8021 79.2278 62.8779L79.2278 62.8779L72.7111 75.9111C71.6353 78.0628 71.0974 79.1386 70.1308 79.736C69.1642 80.3334 67.9614 80.3334 65.5557 80.3334H63.75C59.9788 80.3334 58.0931 80.3334 56.9216 81.505ZM117.667 104.917C117.667 114.674 109.757 122.583 100 122.583C90.243 122.583 82.3333 114.674 82.3333 104.917C82.3333 95.1597 90.243 87.2501 100 87.2501C109.757 87.2501 117.667 95.1597 117.667 104.917ZM119.667 104.917C119.667 115.778 110.862 124.583 100 124.583C89.1384 124.583 80.3333 115.778 80.3333 104.917C80.3333 94.0551 89.1384 85.2501 100 85.2501C110.862 85.2501 119.667 94.0551 119.667 104.917Z"
      fill="#CCD0D4"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_161_21"
        x1={100}
        y1={0}
        x2={100}
        y2={200}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4B79A1" />
        <Stop offset={1} stopColor="#283E51" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default TakePicture;