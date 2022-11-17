import { FC } from "react";

interface ITotalSum {
  sum: number;
}

const TotalSum: FC<ITotalSum> = ({ sum }) => {
  return (
    <div className="mb-5 flex item-center gap-3">
      <div className="text-xl text-gray-600 text-medium">
        В этом месяце продано на:
      </div>
      <div className="font-bold text-2xl">{sum}₽</div>
    </div>
  );
};

export default TotalSum;
