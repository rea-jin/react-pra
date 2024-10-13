// この関数コンポーネントはApp.jsでしかつかえない

import { ColorMsg } from "./components/ColorMsg";
import { ColorMsg2 } from "./components/ColorMsg2";

// stateをつかうとき
import { useState } from "react";

export const App = ()=>{
  // stateを使う時、配列の分割代入 ()の中に初期値
  const [num, setNum] = useState(0);

    // 複数業のときはかっこつける, １つの要素で囲まれていないとダメ
    // 今は空タグにも対応してる <></>
    // イベント
    const onClickButton = ()=>alert();
    const countUp = ()=>{
      // numをせっとする
      setNum(num+1); // state更新され、コンポーネントが処理される
      // react state関数は特定の処理の中でバッチ化されて処理される
    };
    // styleはオブジェクトでかく cssのプロパティもキャメルケース
    const contentStyle = {
      color:"blue",
      fontSize: "18px",
      margin: 10

    };

    return (
      <>
        <h1 style={{ color:"red"}}>hello</h1>
        <p style={ contentStyle }>how are you?</p>
        {/* コンポーネントにpropsを渡す */}
        <ColorMsg color="blue" message="hi!" />
        {/* 別のpropsをわたしてコンポーネントを再利用できる */}
        <ColorMsg color="green" message="how are you?" />
      {/* 囲った場合 */}
      <ColorMsg2 color="red">whats up?</ColorMsg2>
        {/* イベント割り当て{} */}
        {console.log('hoge')}
        <button onClick={onClickButton}>button</button>
        <button onClick={countUp}>countup</button>
        {/* state */}
        <p>{num}</p>
      </>
    );
  }