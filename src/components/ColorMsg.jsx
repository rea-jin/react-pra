export const ColorMsg = (props)=>{
    // 上の時点で分割代入してもいい
    // const ColorMsg = ({ color, message }) =>{}
    // わたされたpropsをかくにん
    // propsの値が変わったら再度レンダリングされる
    console.log(props);
    // object分割代入
    const {color, message} = props;

    const contentStyleA = {
        // color: color, // オブジェクトの名前とプロパティ名が一緒の時は省略
        color,
        fontSize: "18px",
        margin: 10
    };

    return (
        <p style={contentStyleA}>{message}</p>
    )
}