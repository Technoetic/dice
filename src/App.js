import { useState } from "react";

import Dice from "./Dice";
import DiceButton from "./DiceButton";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [blueNumb, setBlueNum] = useState(1);
  const [redNumb, setRedNum] = useState(1);
  const [greyNumb, setGreyNum] = useState(1);

  const check = [blueNumb, redNumb, greyNumb].reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const resultData = Math.max(check[blueNumb], check[redNumb], check[greyNumb]);

  const duplicateKey = Object.keys(check).find(
    key => check[key] === resultData
  );

  const case3Key = 1000 + duplicateKey * 100;

  const keylist = Object.keys(check);
  keylist.map(value => parseInt(value));
  const maxKey = Math.max(...keylist.map(value => parseInt(value)));
  const case1Key = maxKey * 100;

  const case1 =
    blueNumb !== redNumb && blueNumb !== greyNumb && redNumb !== greyNumb;

  const case2 =
    blueNumb === redNumb && blueNumb === greyNumb && redNumb === greyNumb;

  const case2Key = 10000 + duplicateKey * 1000;

  const blueRandomClick = () => {
    const nextBlueNum = random(6);
    setBlueNum(nextBlueNum);
  };

  const redRandomClick = () => {
    const nextRedNum = random(6);
    setRedNum(nextRedNum);
  };

  const greyRandomClick = () => {
    const nextGreyNum = random(6);
    setGreyNum(nextGreyNum);
  };

  const handleClearClick = () => {
    setBlueNum(1);
    setRedNum(1);
    setGreyNum(1);
  };

  return (
    <>
      <DiceButton onClick={blueRandomClick}>Random</DiceButton>
      <DiceButton onClick={redRandomClick}>Random</DiceButton>
      <DiceButton onClick={greyRandomClick}>Random</DiceButton>
      <DiceButton onClick={handleClearClick}>Initialize</DiceButton>
      <div>
        <Dice blueNum={blueNumb} redNum={redNumb} greyNum={greyNumb} />
      </div>
      <div>
        {case1 === true && (
          <text>
            GET {case1Key} KRW #주사위의 점이 모두 다를 때, ( 가장 높은 주사위
            점 * 100 )
          </text>
        )}
      </div>
      <div>
        {case2 === true && (
          <text>
            GET {case2Key} KRW #주사위의 점이 3개가 같을 때, ( 10000 + (같은 점
            * 1000 )
          </text>
        )}
      </div>
      <div>
        {case1 !== true && case2 !== true && (
          <text>
            GET {case3Key} KRW #주사위의 점이 2개가 같을 때, ( 1000 + (같은 점 *
            100 )
          </text>
        )}
      </div>
    </>
  );
}

export default App;
