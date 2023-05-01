import React from "react";

function AuctionForm() {
  return (
    <div style={{ marginTop: "70px", fontStyle: "normal" }}>
      <div className="col-sm-9 mb-3 mb-sm-0 ">
        <div
          className="card text-green"
          style={{
            marginLeft: "350px",
            borderRadius: "20px",
            borderColor: "#75d2dd",
            borderWidth: "20px",
          }}
        >
          <div className="card-body">
            <h1 className="card-title ">Create An Auction</h1>
            <hr />
            <form>
              <div className="form-group">
                <label htmlFor="nameField">
                  Product Name
                </label>
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
                  <option defaultValue>Select Product Category</option>
                  <option value="1">Automobile</option>
                  <option value="2">Electronics</option>
                  <option value="3">Furniture</option>
                </select>
              </div>

              <div className="form-group mt-4">
                <label htmlFor="imgField">Product Image</label>
                <input id="imgField" type="file" className="form-control" />
              </div>

              <div className="form-group mt-4 text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionForm;
