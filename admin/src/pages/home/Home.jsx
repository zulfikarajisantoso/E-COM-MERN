import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userred } from "../../requestmetode";

export default function Home() {
  const [userStat, setuserStat] = useState([]);

  const MONT = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getstats = async () => {
      try {
        const res = await userred.get("/user/stats");
        res.data.map((item) => {
          setuserStat((prev) => [
            ...prev,
            { name: MONT[item._id - 1], "Active User": item.total },
          ]);
        });
      } catch (error) {}
    };
    getstats();
  }, []);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStat}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
