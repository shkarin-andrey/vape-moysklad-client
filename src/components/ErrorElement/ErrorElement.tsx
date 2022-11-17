import { FC } from "react";
import { useAsyncError } from "react-router-dom";

const ErrorElement: FC = () => {
  const error = useAsyncError();

  return (
    <div className="text-center">
      <div className="font-bold text-xl">
        Ох... Что-то сломалось... Попробуйте повторить позже
      </div>
      <p>
        Статус ошибки:{" "}
        <span className="text-red-500 font-medium">
          {(error as Error).message}
        </span>
      </p>
    </div>
  );
};

export default ErrorElement;
