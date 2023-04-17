import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function Featured({type}) {
  return (
    <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="fantasy">Fantasy</option>
            </select>
          </div>
        )} 

        <img src="https://images7.alphacoders.com/959/959228.jpg" alt="asta-bg" />        
        <div className="info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Black_Clover_Logo.png" alt="blackclover-logo-png " />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nobis consequuntur facilis, molestias laboriosam quae excepturi in molestiae praesentium ad assumenda sunt hic facere nesciunt necessitatibus. Qui ab provident nisi.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
        </div>
    </div>
  )
}

export default Featured