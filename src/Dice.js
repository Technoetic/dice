import blue1 from "./Resource/Blue/dice-blue-1.svg";
import blue2 from "./Resource/Blue/dice-blue-2.svg";
import blue3 from "./Resource/Blue/dice-blue-3.svg";
import blue4 from "./Resource/Blue/dice-blue-4.svg";
import blue5 from "./Resource/Blue/dice-blue-5.svg";
import blue6 from "./Resource/Blue/dice-blue-6.svg";

import red1 from "./Resource/Red/dice-red-1.svg";
import red2 from "./Resource/Red/dice-red-2.svg";
import red3 from "./Resource/Red/dice-red-3.svg";
import red4 from "./Resource/Red/dice-red-4.svg";
import red5 from "./Resource/Red/dice-red-5.svg";
import red6 from "./Resource/Red/dice-red-6.svg";

import grey1 from "./Resource/Grey/dice-grey-1.svg";
import grey2 from "./Resource/Grey/dice-grey-2.svg";
import grey3 from "./Resource/Grey/dice-grey-3.svg";
import grey4 from "./Resource/Grey/dice-grey-4.svg";
import grey5 from "./Resource/Grey/dice-grey-5.svg";
import grey6 from "./Resource/Grey/dice-grey-6.svg";

const blueDiceDot = [blue1, blue2, blue3, blue4, blue5, blue6];
const redDiceDot = [red1, red2, red3, red4, red5, red6];
const greyDiceDot = [grey1, grey2, grey3, grey4, grey5, grey6];

export default function Dice({ blueNum = 1, redNum = 1, greyNum = 1 }) {
  const blueSrc = blueDiceDot[blueNum - 1];
  const redSrc = redDiceDot[redNum - 1];
  const greySrc = greyDiceDot[greyNum - 1];

  return (
    <>
      <img src={blueSrc} alt="Dice" />
      <img src={redSrc} alt="Dice" />
      <img src={greySrc} alt="Dice" />
    </>
  );
}
