// この関数コンポーネントはApp.jsでしかつかえない

import { ColorMsg } from "./components/ColorMsg";
import { ColorMsg2 } from "./components/ColorMsg2";

// stateをつかうとき
import { useState } from "react";
import { useEffect } from "react";

// Appは親コンポーネント 親がサイレンダリングされると子コンポーネントも再度レンダイングされる（設定による）
export const App = ()=>{
  // stateを使う時、配列の分割代入 ()の中に初期値
  const [num, setNum] = useState(0); // このようなフック？は1回奏目でしか定義できない
  const [isShow, setIsShow] = useState(true);

    // 複数業のときはかっこつける, １つの要素で囲まれていないとダメ
    // 今は空タグにも対応してる <></>
    // イベントが実行されるとコンポーネントが再度評価されてレンダリングされる（Strictmodeで開発の時は2回レンダリングされる）
    const onClickButton = ()=>alert();
    const countUp = ()=>{
      // numをせっとする
      // setNum(num+1); // state更新され、コンポーネントが処理される
      // react state関数は特定の処理の中でバッチ化されて処理される
      // stateのset関数には関数も渡せる
      // 現在の値を渡す
      setNum((prev)=>{return prev + 1});
      setNum((prev)=> prev + 1); // 上で更新された値でさらに更新できる 引数に値を渡すだけではできない
    };
    const onClickToggle = ()=>{
      setIsShow(!isShow); // trueならfalseにする
    }

    // styleはオブジェクトでかく cssのプロパティもキャメルケース
    const contentStyle = {
      color:"blue",
      fontSize: "18px",
      margin: 10

    };

    useEffect(()=>{
      console.log("第一引数に関数、第２引数に配列、最初のマウント時にのみ関数実行")
      // 配列でどの時に関数を実行するか決める
      if(num > 0){
        // この条件を入れるとonClickToggleが効かなくなる。ー＞useEffectをつかう
        if(num%3 === 0){
          isShow || setIsShow(true); // ３の倍数の時だけ表示
        }else{
          isShow && setIsShow(false); // set関数が読み込まれて再度レンダリングされる。無限ループにならないように注意
        }
      }
    },[num]); // 依存配列にnum を指定することで、numが変更された時のみ条件式を通る

    // if(num > 0){
    //   // この条件を入れるとonClickToggleが効かなくなる。ー＞useEffectをつかう
    //   if(num%3 === 0){
    //     isShow || setIsShow(true); // ３の倍数の時だけ表示
    //   }else{
    //     isShow && setIsShow(false); // set関数が読み込まれて再度レンダリングされる。無限ループにならないように注意
    //   }
    // }

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

        {/* // 表示非表示 */}
        <button onClick={onClickToggle}>on/off</button>
        {/* trueなら表示される */}
        {isShow && <p>display on</p>} 
      </>
    );
  }