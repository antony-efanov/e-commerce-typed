import axios from "axios";

import { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { EmptyPage } from "../../components/EmptyPage";

const Orders = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://62bd6719c5ad14c110bdcc61.mockapi.io/orders`
        );
        setOrders(data.reduce((prev, order) => [...prev, ...order.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Помилка завантаження замовлень");
        console.error(error);
      }
    })();
  }, []);

  return (
    <main className="content">
      <div className="catalog">
        <h1 className="catalog__title">Мої замовлення</h1>
      </div>
      <div className="cards">
        {orders.length > 0 ? (
          (isLoading ? [...Array(10)] : orders).map((item, index) => (
            <Card key={index} loading={isLoading} {...item} amount="" />
          ))
        ) : (
          <EmptyPage
            text="Ви ще нічого не замовляли"
            imgSrc="/e-commerce-ua-merch/img/box.png"
          />
        )}
      </div>
    </main>
  );
};

export default Orders;
