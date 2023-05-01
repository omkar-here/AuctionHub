import React from "react";


const Cards = () => {
    var BidsArray = [{
        "ProductName": "Laptop",
        "CurrentBid": "8",
        "StartPrice": "9888",
        "BidClosingTime": "4:00",
        "BidsTillNow": "100"
    }];
    const listItems = BidsArray.map(
        (element) => {
            return (
                // <ul type="disc">
                //     <li style={{
                //         fontWeight: 'bold',
                //         color: 'red'
                //     }}
                //     >
                //         {element.ProductName}
                //     </li>
                //     <li>{element.CurrentBid}</li>
                // </ul>
                // <div className="w-full h-full border-2 flex justify-center items-center">
                    <div className="w-96 h-fit border-2 rounded-lg bg-white shadow-lg shadow-cyan-500/50">
                        <ul>
                            <div className="w-full h-4/5">
                                <img className="w-full h-full"
                                    src="https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_960_720.jpg" alt="Card image"
                                />
                            </div>
                            <li>Product Name: {element.ProductName}</li>
                            <li>Current Bid: {element.CurrentBid}</li>
                            <li>Start Price: {element.StartPrice}</li>
                            <li>Bid Closing Time: {element.BidClosingTime}</li>
                            <li>Bids Till now: {element.BidsTillNow}</li>

                        </ul>
                    </div>

                // </div>
            )
        }
    )
    return (
        <>
            {listItems}
        </>
    )

}

export default Cards;