import "./widgetLg.css";
import { format } from "timeago.js";
import { useEffect, useState } from "react";
import { userred } from "../../requestmetode";

export default function WidgetLg() {
  const [order, setorder] = useState([]);

  useEffect(() => {
    const getorder = async () => {
      try {
        const res = await userred.get("orders");
        setorder(res.data);
        console.log(res.data);
      } catch {}
    };
    getorder();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {order.map((item) => (
          <tr className="widgetLgTr" key={order.userId}>
            <td className="widgetLgUser">
              <img src={order} alt="" className="widgetLgImg" />
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
