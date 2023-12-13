import PaymentGateways from "../assets/Images/payment gateways.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-gray-300 to-gray-50 wrapper flex flex-col gap-10 pt-16 pb-7 px-20">
      <div className="subWrapper-1 flex flex-row gap-2">
        <div className=" wrapper-categories flex flex-col gap-1 w-[25vw] p-2">
          <div className="text-md text-bold">Categories</div>
          <div className="text-sm hover:underline">
            <Link to="/Homepage">Men</Link>
          </div>
          <div className="text-sm hover:underline">
            <Link to="/Homepage">Women</Link>
          </div>
          <div className="text-sm hover:underline">
            <Link to="/Homepage">Kid</Link>
          </div>
          <div className="text-sm hover:underline">
            <Link to="/Homepage">Addons</Link>
          </div>
          <div className="text-sm hover:underline">
            <Link to="/Homepage">Trendies</Link>
          </div>
        </div>
        <div className=" wrapper-links flex flex-col gap-1 w-[25vw] p-2">
          <div className="text-md text-bold">Links</div>
          <div className="text-sm hover:underline">
            <Link to="/Homepage">FAQ</Link>
          </div>
          <div className="text-sm hover:underline">
            <Link to="/Homepage">Pages</Link>
          </div>
          <div className="text-sm hover:underline">
            <Link to="/Homepage">Store</Link>
          </div>
          <div className="text-sm hover:underline">
            <Link to="/Homepage">Compare</Link>
          </div>
          <div className="text-sm hover:underline">
            <Link to="/Homepage">Cookies</Link>
          </div>
        </div>
        <div className=" wrapper-about flex flex-col gap-1 w-[25vw] p-2">
          <div className="text-md text-bold">About</div>
          <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus beatae facilis odit maiores. Unde facere aspernatur illum ullam laborum voluptatum obcaecati, velit id at esse quod asperiores repellat aliquid?</p>
        </div>
        <div className=" wrapper-contact flex flex-col gap-1 w-[25vw] p-2">
          <div className="text-md text-bold">Contact</div>
          <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus beatae facilis odit maiores. Unde facere aspernatur illum ullam laborum voluptatum obcaecati, velit id at esse quod asperiores repellat aliquid?</p>
        </div>
      </div>
      <div className="subWrapper-2 flex flex-row justify-between">
        <div className="wrapper-leftsection flex flex-row gap-1 items-center">
          <div className="text-2xl text-cyan-600">Rozana</div>
          <div className="text-sm">@Copyright 2023. All Rights Reserved.</div>
        </div>
        <div className="wrapper-rightsection flex flex-row gap-1">
          <img src={PaymentGateways} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
