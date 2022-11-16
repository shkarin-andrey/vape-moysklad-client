import { HeadCell } from "./TableProfit.interface";

export const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Контрагент",
  },
  {
    id: "stateName",
    numeric: true,
    disablePadding: false,
    label: "Статус",
  },
  {
    id: "sumMonth5",
    numeric: true,
    disablePadding: false,
    label: "5 месяцев назад, руб.",
  },
  {
    id: "sumMonth4",
    numeric: true,
    disablePadding: false,
    label: "4 месяца назад, руб.",
  },
  {
    id: "sumMonth3",
    numeric: true,
    disablePadding: false,
    label: "3 месяца назад, руб.",
  },
  {
    id: "sumMonth2",
    numeric: true,
    disablePadding: false,
    label: "2 месяца назад, руб.",
  },
  {
    id: "sumMonth1",
    numeric: true,
    disablePadding: false,
    label: "Предыдущий месяц, руб.",
  },
  {
    id: "sumMonth0",
    numeric: true,
    disablePadding: false,
    label: "Текущий месяц, руб.",
  },
  {
    id: "marginMonth0",
    numeric: true,
    disablePadding: false,
    label: "Рентабельность, %",
  },
];
