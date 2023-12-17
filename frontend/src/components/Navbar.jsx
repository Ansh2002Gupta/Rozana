import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import Flag from "../assets/Images/Flag.png";
import classNames from "classnames";
import { useState } from "react";

const Navbar = () => {
  const [linkClicked, setLinkClicked] = useState("Homepage");
  console.log(linkClicked);
  return (
    <div className="flex flex-row justify-between px-5">
      <div className=" flex flex-row gap-2 p-1 justify-center items-center">
        <div className="flex flex-row">
          <img src={Flag} alt="flag image" style={{ width: "25px", height: "25px" }} />
          <span>
            <ArrowDropDownIcon />
          </span>
        </div>
        <div className="text-sm">
          Rupee
          <span>
            <ArrowDropDownIcon />
          </span>
        </div>
        <div className={classNames(" text-sm w-20 flex justify-center items-center px-1 py-3", { "bg-gradient-to-t from-slate-200 to-white border-b-4 border-b-black": linkClicked === "Men", "border-b-none": linkClicked !== "Men" })}>
          <Link
            to="/Product/72"
            onClick={() => {
              setLinkClicked("Men");
            }}>
            Men
          </Link>
        </div>
        <div className={classNames(" text-sm w-20 flex justify-center items-center px-1 py-3", { "bg-gradient-to-t from-slate-200 to-white border-b-4 border-b-black": linkClicked === "Women", "border-b-none": linkClicked !== "Women" })}>
          <Link
            to="/Products/34"
            onClick={() => {
              setLinkClicked("Women");
            }}>
            Women
          </Link>
        </div>
        <div className={classNames(" text-sm w-20 flex justify-center items-center px-1 py-3", { "bg-gradient-to-t from-slate-200 to-white border-b-4 border-b-black": linkClicked === "Kid", "border-b-none": linkClicked !== "Kid" })}>
          <Link
            to="/Product/78"
            onClick={() => {
              setLinkClicked("Kid");
            }}>
            Kid
          </Link>
        </div>
        <div className={classNames(" text-sm w-20 flex justify-center items-center px-1 py-3", { "bg-gradient-to-t from-slate-200 to-white border-b-4 border-b-black": linkClicked === "Addons", "border-b-none": linkClicked !== "Addons" })}>
          <Link
            to="/Products/89"
            onClick={() => {
              setLinkClicked("Addons");
            }}>
            Addons
          </Link>
        </div>
      </div>
      <div className=" flex flex-row">
        <div className="text-3xl font-bold p-1">Rozana</div>
      </div>
      <div className="flex flex-row gap-2 justify-center items-center">
        <div className={classNames(" text-sm w-20 flex justify-center items-center px-1 py-3", { "bg-gradient-to-t from-slate-200 to-white border-b-4 border-b-black": linkClicked === "Homepage", "border-b-none": linkClicked !== "Homepage" })}>
          <Link
            to="/Homepage"
            onClick={() => {
              setLinkClicked("Homepage");
            }}>
            Homepage
          </Link>
        </div>
        <div className={classNames(" text-sm w-20 flex justify-center items-center px-1 py-3", { "bg-gradient-to-t from-slate-200 to-white border-b-4 border-b-black": linkClicked === "About", "border-b-none": linkClicked !== "About" })}>
          <Link
            to="/Products/1"
            onClick={() => {
              setLinkClicked("About");
            }}>
            About
          </Link>
        </div>
        <div className={classNames(" text-sm w-20 flex justify-center items-center px-1 py-3", { "bg-gradient-to-t from-slate-200 to-white border-b-4 border-b-black": linkClicked === "Contact", "border-b-none": linkClicked !== "Contact" })}>
          <Link
            to="/Product/100"
            onClick={() => {
              setLinkClicked("Contact");
            }}>
            Contact Us
          </Link>
        </div>
        <div className={classNames(" text-sm w-20 flex justify-center items-center px-1 py-3", { "bg-gradient-to-t from-slate-200 to-white border-b-4 border-b-black": linkClicked === "Store", "border-b-none": linkClicked !== "Store" })}>
          <Link
            to="/"
            onClick={() => {
              setLinkClicked("Store");
            }}>
            Store
          </Link>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <div>
            <SearchIcon />
          </div>
          <div>
            <PersonIcon />
          </div>
          <div className="relative">
            <FavoriteIcon />
            <div className="absolute top-[-10px] right-[-10px] bg-[#fe2828] flex justify-center items-center p-1 text-white rounded-full ring-2 ring-white w-[16px] h-[16px] text-xs">1</div>
          </div>
          <div className="relative">
            <ShoppingCartIcon />
            <div className="absolute top-[-10px] right-[-10px] bg-[#fe2828] flex justify-center items-center p-1 text-white rounded-full ring-2 ring-white w-[16px] h-[16px] text-xs">2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
