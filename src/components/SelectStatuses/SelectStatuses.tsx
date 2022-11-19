import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { getStatuses } from "../../services/getStatuses";

const SelectStatuses: FC = () => {
  const [statuses, setStatuses] = useState([]);

  const getUnicStatuses = async () => {
    const res = await getStatuses();
    setStatuses(res);
  };

  useEffect(() => {
    getUnicStatuses();
  }, []);

  return (
    <Form method="get" className="flex gap-2 items-center">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Статус</InputLabel>
        <Select name="stateName" label="Статус">
          <MenuItem value="all">
            <em>Все</em>
          </MenuItem>
          {statuses.length
            ? statuses.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
      <Button variant="contained" type="submit">
        Найти
      </Button>
    </Form>
  );
};

export default SelectStatuses;
