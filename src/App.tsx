import { CircularProgress } from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import Layout from "./components/Layout";
import TableProfit from "./components/TableProfit";
import { IMoySklad } from "./util/interfaces/moysklad.interface";

const App: FC = () => {
  const [data, setData] = useState([]);
  const [totalSum, setTotalSum] = useState("0");
  const [isloading, setIsLoading] = useState(false);

  const getTotalSum = (arrSum: IMoySklad[]) => {
    const allSum = arrSum.reduce(
      (previousValue: number, currentValue: IMoySklad) => {
        return previousValue + currentValue.sumMonth0;
      },
      0
    );

    const sum = new Intl.NumberFormat("ru-RU").format(allSum);
    setTotalSum(sum);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const res = await axios.get("http://localhost:4000/api/moysklad");
        await getTotalSum(res.data);

        setData(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Layout>
      <div className="font-bold text-2xl mb-5">Прибыльность</div>

      {data && !isloading ? (
        <>
          <div className="mb-5 flex item-center gap-3">
            <div className="text-xl text-gray-600 text-medium">
              В этом месяце продано на:
            </div>
            <div className="font-bold text-2xl">{totalSum}₽</div>
          </div>
          <TableProfit rows={data} />
        </>
      ) : (
        <div className="flex justify-center items-center w-full">
          <CircularProgress />
        </div>
      )}
    </Layout>
  );
};

export default App;
