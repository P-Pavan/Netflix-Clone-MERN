import "./list.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

function List() {
    
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber>0) {
            listRef.current.style.transform = `translateX(${230 + distance}px)`
            setSlideNumber(slideNumber-1)
        }
        if(direction === "right" && slideNumber<5) {
            listRef.current.style.transform = `translateX(${distance - 230}px)`
            setSlideNumber(slideNumber+1)
        }
    }

    
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlinedIcon className="slideArrow left" onClick={() => handleClick("left")}/>
                <div className="container" ref={listRef}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                </div>
                <ArrowForwardIosOutlinedIcon className="slideArrow right" onClick={() => handleClick("right")}/>
            </div>
    </div>
  )
}

export default List