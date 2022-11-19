import { CircularProgress } from "@mui/material";
import { FC, Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import TotalSum from "../components/TotalSum";
import SelectStatuses from "./../components/SelectStatuses/SelectStatuses";
import TableProfit from "./../components/TableProfit";
import { getProfits } from "./../services/getProfits";

const ProfitPage: FC = () => {
  const { data }: any = useLoaderData();

  return (
    <>
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <div className="font-bold text-2xl mb-5">Прибыльность</div>
        <SelectStatuses />
      </div>

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

export const Loader = async ({ request }: any) => {
  const url = new URL(request.url);
  const stateName = url.searchParams.get("stateName");

  return defer({ data: getProfits(stateName) });
};
