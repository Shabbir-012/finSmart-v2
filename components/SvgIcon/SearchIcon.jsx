import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SearchIcon = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 73 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.4583 6.08325C48.5771 6.08325 60.8333 18.3395 60.8333 33.4583C60.8333 39.9211 58.5937 45.8609 54.8483 50.5438L66.0258 61.7241C67.2136 62.912 67.2136 64.8379 66.0258 66.0257C64.9293 67.1222 63.204 67.2065 62.0108 66.2787L61.7242 66.0257L50.5439 54.8482C45.861 58.5936 39.9212 60.8332 33.4583 60.8332C18.3395 60.8332 6.08334 48.577 6.08334 33.4583C6.08334 18.3395 18.3395 6.08325 33.4583 6.08325ZM33.4583 12.1666C21.6993 12.1666 12.1667 21.6992 12.1667 33.4583C12.1667 45.2173 21.6993 54.7499 33.4583 54.7499C45.2174 54.7499 54.75 45.2173 54.75 33.4583C54.75 21.6992 45.2174 12.1666 33.4583 12.1666Z"
      fill="black"
    />
  </Svg>
);
export default SearchIcon;