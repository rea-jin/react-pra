export const ColorMsg2 = (props)=>{
    // わたされたpropsをかくにん
    console.log(props);

    const contentStyleA = {
        color: props.color,
        fontSize: "18px",
        margin: 10
    };

    return (
        // childrenとするとコンポーネントタグで囲った中身を取得できる
        <p style={contentStyleA}>{props.children}</p>
    )
}