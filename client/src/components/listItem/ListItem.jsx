import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { useState } from "react";

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/embed/jar1LTxxAeM";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <img
        src="https://img1.ak.crunchyroll.com/i/spire3/693598935088048cd25e4a4fc7b5ceb41572256544_full.jpg"
        alt="item"
      />
      {isHovered && (
        <>
          <iframe
            src={trailer}
            title="trailer"
            frameborder="0"
            allow="autoplay"
            loop
          ></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon />
              <AddIcon />
              <ThumbUpOutlinedIcon />
              <ThumbDownOffAltOutlinedIcon />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 9 mins</span>
              <span className="age-limit"> PG13 </span>
              <span>2005</span>
            </div>
            <div className="dec">
              Waga Na Wa Megumin! I am a user of the finest magic crimson demons
              possess, and I command explosion magic. Behold my power!
            </div>
            <div className="genre">Adeventure</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
