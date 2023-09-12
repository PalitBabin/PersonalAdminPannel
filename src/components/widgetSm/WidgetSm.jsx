import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2023/08/22/14/51/south-indian-woman-8206562_640.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ayana Mukherjee</span>
            <span className="widgetSmUserTitle">Model</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/19/17/59/woman-5501688_640.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Shruti Banerjee</span>
            <span className="widgetSmUserTitle">Normal Girl</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2021/06/26/17/38/woman-6366762_640.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Pakhi Das</span>
            <span className="widgetSmUserTitle">Job</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2023/08/22/02/56/woman-8205287_640.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ayana Mukherjee</span>
            <span className="widgetSmUserTitle">Modeling</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2023/06/29/04/37/saree-8095641_640.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ayushi Ghosh</span>
            <span className="widgetSmUserTitle">Art</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm;