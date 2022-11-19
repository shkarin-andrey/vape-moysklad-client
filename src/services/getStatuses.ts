import axios from "axios";

export const getStatuses = async () => {
  try {
    const statuses = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/moysklad/statuses`
    );

    return statuses.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
