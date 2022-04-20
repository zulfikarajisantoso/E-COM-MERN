import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { userred } from "../../requestmetode";
import { useEffect, useState } from "react";

export default function WidgetSm() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userred.get("user/?new=true");
        setusers(res.data);
        console.log(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                users.img ||
                "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
