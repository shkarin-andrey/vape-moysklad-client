import { CircularProgress } from "@mui/material";
import { FC, Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import TotalSum from "../components/TotalSum";
import TableProfit from "./../components/TableProfit";
import { getProfits } from "./../services/getProfits";

const ProfitPage: FC = () => {
  const { data }: any = useLoaderData();

  return (
    <>
      <div className="font-bold text-2xl mb-5">Прибыльность</div>

      <Suspense
        fallback={
          <div className="flex justify-center">
            <CircularProgress />
          </div>
        }
      >
        <Await resolve={data} errorElement={<ErrorElement />}>
          {(data) => (
            <>
              <TotalSum sum={data.totalSum} />
              <TableProfit rows={data.profits} />
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default ProfitPage;

export const Loader = async () => {
  return defer({ data: getProfits() });
};
