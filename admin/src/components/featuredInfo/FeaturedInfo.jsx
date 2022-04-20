import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userred } from "../../requestmetode";

export default function FeaturedInfo() {
  const [income, setincome] = useState([]);
  const [perc, setperc] = useState(0);

  useEffect(() => {
    const getincomme = async () => {
      try {
        const res = await userred.get("orders/income");
        setincome(res.data);
        setperc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (error) {}
    };
    getincomme();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[1]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}
            {perc < 0 ? (
              <ArrowUpward className="featuredIcon" />
            ) : (
              <ArrowDownward className="featuredIcon negative" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">+2.4</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
