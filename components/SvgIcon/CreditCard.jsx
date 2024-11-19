import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const CreditCard = (props) => (
  <Svg
    width={800}
    height={750}
    viewBox="0 0 800 750"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={2.5}
      y={2.5}
      width={795}
      height={745}
      rx={147.5}
      stroke="#CECECE"
      strokeWidth={5}
    />
    <Path
      d="M159 223.438C159 195.823 181.386 173.438 209 173.438H590C617.614 173.438 640 195.823 640 223.438V295.975H159V223.438Z"
      fill="#F7941D"
    />
    <Path
      d="M159 341.722H640V526.994C640 554.608 617.614 576.994 590 576.994H209C181.386 576.994 159 554.608 159 526.994V341.722Z"
      fill="#249E63"
    />
    <Rect
      x={212.804}
      y={397.198}
      width={137.457}
      height={99.776}
      rx={5}
      fill="#D9D9D9"
    />
    <Rect
      x={438.626}
      y={457.063}
      width={39.2733}
      height={39.9104}
      rx={3}
      fill="#D9D9D9"
    />
    <Rect
      x={497.536}
      y={457.063}
      width={39.2733}
      height={39.9104}
      rx={3}
      fill="#D9D9D9"
    />
    <Rect
      x={556.446}
      y={457.063}
      width={39.2733}
      height={39.9104}
      rx={3}
      fill="#D9D9D9"
    />
  </Svg>
);
export default CreditCard;
