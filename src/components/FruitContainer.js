import { useState, useEffect } from "react";
import FruitFilter from "./FruitFilter";
import FruitList from "./FruitList";

/*
Where will our event return from fruitfilter back to fruitContainer
*/
//  this is our stateful component
function FruitContainer(props){

    // initialize the fruit list to the full list passed in props
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);

    // handle the filter, and update state when the filter value changes
    // store the filter state and filter the list of fruits to display

    const handleFilterChange = (event) => {
        event.preventDefault()
        
        const filterValue = event.target.value;
        setFruitsToDisplay((_prevState) => {
            // remove fruits that don't contain the filter value
            const filteredFruitList = props.fruits.filter((fruit) => {
                return fruit.toLowerCase().includes(filterValue.toLowerCase())
            });
            return filteredFruitList
        })

    }

    useEffect(() => {
        console.log("do something", fruitsToDisplay)
    },[fruitsToDisplay])

    return(
        <div>
            <FruitFilter onChange={(e) => handleFilterChange(e)} />
            <FruitList fruit={fruitsToDisplay}/>
        </div>
    )
    // all of the datab is hoisted to the top of the tree in the container
    // and is passed to the child components
}
export default FruitContainer;