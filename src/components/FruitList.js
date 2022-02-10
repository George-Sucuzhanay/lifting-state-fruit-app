function FruitList(props){
    return(
        <div>
            <ul>
                {props.fruit.map((fruit) => {
                    return <li>{fruit}</li>
                })}
            </ul>
        </div>
    )
}
export default FruitList;