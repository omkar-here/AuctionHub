import React from "react";

const ProductList = () => {
  var BidsArray = [
    {
      ProductName: "Laptop",
      CurrentBid: "10000",
      StartPrice: "9888",
      BidClosingTime: "4:00",
      BidsTillNow: "100",
    },
    {
      ProductName: "Laptop",
      CurrentBid: "10000",
      StartPrice: "9888",
      BidClosingTime: "4:00",
      BidsTillNow: "100",
    },
    {
      ProductName: "Laptop",
      CurrentBid: "10000",
      StartPrice: "9888",
      BidClosingTime: "4:00",
      BidsTillNow: "100",
    },
    {
      ProductName: "Laptop",
      CurrentBid: "10000",
      StartPrice: "9888",
      BidClosingTime: "4:00",
      BidsTillNow: "100",
    },
    {
      ProductName: "Laptop",
      CurrentBid: "10000",
      StartPrice: "9888",
      BidClosingTime: "4:00",
      BidsTillNow: "100",
    },
  ];
  const listItems = BidsArray.map((element) => {
    return (
      <div className="grid grid-cols-3 gap-[0px]">
        <div className="w-[300px] h-fit border-2 rounded-lg  bg-white shadow-lg p-2">
          <div>
            <img
              className=" w-[300px]"
              src="https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_960_720.jpg"
              alt="Card image"
            />
          </div>
          <ul className="grid grid-cols-2 grid-rows-[30px] p-0 m-0">
            <div className="flex align-items-center gap-1">
              <li className="text-left">Product:</li>
              <span> {element.ProductName}</span>
            </div>
            <div className="flex align-items-center gap-1">
              <li className="text-left">Start Price:</li>
              <span> {element.StartPrice}</span>
            </div>

            <li className="text-left">Bids Till now: {element.BidsTillNow}</li>

            <div className="flex align-items-center gap-1">
              <li className="text-left ">Current Bid:</li>
              <span> {element.CurrentBid}</span>
            </div>
          </ul>
          <div className="d-flex">
            <p>Bid Ends in: </p>
            <p className=" text-red-600">15 minutes</p>
          </div>
          <div className="flex gap-2">
            <div className=" cursor-pointer bg-blue-600 w-[150px] rounded  text-white">
              Post a Question
            </div>
            <input
              className=" outline-2 w-[150px] px-2 border-2 rounded-2xl border-black"
              placeholder="Make a bid (in Rs.)"
            ></input>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="grid grid-cols-3 gap-x-[0px] gap-y-4">{listItems}</div>
  );
};

export default ProductList;
