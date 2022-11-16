const useNumberFormat = () => {
  const numberFormat = (sum: number, locale = "ru-RU") => {
    return new Intl.NumberFormat(locale).format(sum);
  };

  return numberFormat;
};

export default useNumberFormat;
