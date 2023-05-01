import React from "react";
import IconImage from "../../public/images/icon.png";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import ReactModal from "react-modal";

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div
        // className=" d-flex justify-content-between align-items-center py-2 px-5"
        className="flex  align-items-center py-2 px-5  w-screen bg-[#73c8d2] "
        // style={{
        //   backgroundColor: "#73c8d2",
        //   margin: "0px",
        //   padding: "0px",
        //   width: "1560px",
        //   display: "flex",
        //   // align:'center'
        // }}
      >
        <div>
          <h1>AuctionHub</h1>
        </div>
        <div className="d-flex gap-3 ml-[800px]">
          <button
            type="button"
            className="btn btn-primary btn-primary-hover btn-primary-focus w-75"
          >
            Logout
          </button>
          <ReactModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={{
              
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
              content: {
                width: "1000px",
                margin: "0 auto",
              },
            }}
          >
            <div className="rounded-4xl m-0 p-0">
              {/* <div className="col-sm-9 mb-3 mb-sm-0"> */}
                <div
                  className="card"
                  style={{
                    // marginLeft: "350px",
                    marginTop:'0px',
                    borderRadius: "20px",
                    borderColor: "#75d2dd",
                    borderWidth: "20px",
                  }}
                >
                  <div className="card-body">
                    <h1
                      className="card-title"
                      style={{ alignContent: "center" }}
                    >
                      Create An Auction
                    </h1>
                    <hr />
                    <form>
                      <div className="form-group">
                        <label htmlFor="nameField">Product Name</label>
                        <input
                          type="text"
                          id="nameField"
                          placeholder="Enter here"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mt-4">
                        <label htmlFor="price">Product Price (in INR)</label>
                        <input
                          type="text"
                          id="price"
                          placeholder="Enter here"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mt-4">
                        <label htmlFor="expiry">Expiry</label>
                        <input
                          type="date"
                          id="expiry"
                          placeholder="Enter here"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mt-4">
                        <label htmlFor="category">Product Category</label>
                        <select
                          className="form-select"
                          id="category"
                          aria-label="Default select example"
                        >
                          <option selected>Select Product Category</option>
                          <option value="1">Automobile</option>
                          <option value="2">Electronics</option>
                          <option value="3">Furniture</option>
                        </select>
                      </div>
                      <div className="form-group mt-4">
                        <label htmlFor="imgField">Product Image</label>
                        <input
                          id="imgField"
                          type="file"
                          className="form-control"
                        />
                      </div>
                      <br />
                      <center>
                        <button onClick={() => setIsModalOpen(false)} type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </center>
                    </form>
                  </div>
                </div>
              {/* </div> */}
              {/* <button >Close Modal</button> */}
            </div>
          </ReactModal>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn btn-danger"
          >
            Create an auction
          </button>
        </div>
      </div>
      <div className=" border-2 w-[300px] px-3 py-9 h-screen bg-[#9EE5ED]">
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2] rounded-2xl text-left border-b-4 border-red-500">
          Live Bids
        </p>
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2] rounded-2xl  text-left border-b-4 border-red-500">
          Order History
        </p>
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2] rounded-2xl  text-left border-b-4 border-red-500">
          Queries
        </p>
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2] rounded-2xl  text-left border-b-4 border-red-500">
          Responses
        </p>
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2] rounded-2xl  text-left border-b-4 border-red-500">
          Unsold
        </p>
        <p className="text-3xl pb-2 text-center py-1 cursor-pointer hover:text-4xl bg-[#73c8d2] rounded-2xl  text-left border-b-4 border-red-500">
          Successful Bids
        </p>
      </div>
    </div>
  );
};

export default Layout;
