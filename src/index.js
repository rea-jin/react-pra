// 基本的な書き方 jsx記法
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import { App } from "./App";　// 名前付きエクスポートを使用 ファイル名は関係ないがコンポーネント名は大文字はじまり

const rootElement = document.getElementById("root");
// rendering to html
const root = createRoot(rootElement);

// // 関数としてかく この部分はコンポーネントとして切り出す
// const App = ()=>{
//   // 複数業のときはかっこつける, １つの要素で囲まれていないとダメ
//   // 今は空タグにも対応してる <></>
//   return (
//     <>
//       <h1>hello</h1>
//       <p>how are you?</p>
//     </>
//   );
// }

// ここにかけばブラウザに反映される
// strict mode ではエラーが全て出る
// 自動でimportタグが追加される。コンポーネントの拡張子はjsxとする
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


