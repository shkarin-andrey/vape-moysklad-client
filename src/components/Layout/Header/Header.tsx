import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton } from "@mui/material";
import { FC, useState } from "react";
import Navigation from "./../../Navigation";

const Header: FC = () => {
  const [anchor, setAnchor] = useState(false);

  return (
    <div className="bg-blue-500 flex px-5 py-3 justify-between items-center">
      <div className="text-2xl font-bold text-white">VapeCompany</div>
      <IconButton onClick={() => setAnchor(true)}>
        <MenuIcon className="text-white" />
      </IconButton>
      <Drawer anchor={"left"} open={anchor} onClose={() => setAnchor(false)}>
        <Navigation setAnchor={setAnchor} />
      </Drawer>
    </div>
  );
};

export default Header;
