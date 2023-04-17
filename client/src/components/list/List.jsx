import "./list.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from "../listItem/ListItem";
import { useRef } from "react";

function List() {
    
    const listRef = useRef()

    const handleClick = (direction) => {
        if(direction === "left") {
            listRef.current.style.transform = `translateX(230px)`
        }
    }

    
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlinedIcon className="slideArrow left" onClick={handleClick("left")}/>
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
                <ArrowForwardIosOutlinedIcon className="slideArrow right" onClick={handleClick("right")}/>
            </div>
    </div>
  )
}

export default List