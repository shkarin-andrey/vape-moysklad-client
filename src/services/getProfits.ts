import axios from "axios";
import { IMoySklad } from "./../util/interfaces/moysklad.interface";

export const getTotalSum = (arrSum: IMoySklad[]) => {
  const allSum = arrSum.reduce(
    (previousValue: number, currentValue: IMoySklad) => {
      return previousValue + currentValue.sumMonth0;
    },
    0
  );

  const sum = new Intl.NumberFormat("ru-RU").format(allSum);

  return sum;
};

export const getProfits = async (stateName: any) => {
  try {
    const params =
      stateName && stateName !== "all"
        ? {
            stateName,
          }
        : {};

    const profits = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/moysklad`,
      {
        params,
      }
    );
    const totalSum = getTotalSum(profits.data);

    return { profits: profits.data, totalSum };
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
