import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import plus from "./Assets/img/plusblack.png";
import upi from "./Assets/img/upi.png";
import arrow from "./Assets/img/arrow.png";
import logo1 from "./Assets/img/wallet/paytm.png";
import logo2 from "./Assets/img/wallet/astropay.png";
import logo3 from "./Assets/img/wallet/Skrill.png";
import proceed from "./Assets/img/wallet/procced-Cta.png";

const Wallet = () => {
  let urlData = "http://gamepitara.globaldigitaz.com/api/GetSignature";
  const url = "https://jsonplaceholder.typicode.com/albums";

  const [items, setItems] = useState([]);
  const [showPerpage, setShowPerpage] = useState(5);
  const [counter, setCounter] = useState(1);
  const [Amount, setAmount] = useState(0);
  const RegId = localStorage.getItem("auth");
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerpage,
  });
  const gateway = { RegId, Amount };
  const [cashfree, setCashfree] = useState({});

  async function dataURL(url) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(gateway),
    }).then(async (result) => {
      result.json().then(async (res) => {
        setCashfree((inputs) => {
         return {
          appId: res.AppId,
          customerEmail: res.Email,
          customerName: res.Name,
          customerPhone: res.Mobile,
          orderAmount: res.Amount,
          orderId: res.OrderId,
          returnUrl: res.ReturnURL,
          redirectUrl: res.RedirectURL,
          signature: res.Signature,
         }
        });
      });
    });
  }

  const handleChange = (e) => {
    console.log(Amount);
    setAmount(e.target.value);
    dataURL(urlData);
   
  };

  // handleSubmit
  const  handleSubmit = (e) => {
    // e.preventDefault()
     dataURL(urlData);
    console.log("lkj",cashfree)
    dataURL(urlData)
  };

  const onPaginationChnage = (start, end) => {
    setPagination({ start: start, end: end });
  };

  //handlePagination
  useEffect(() => {
    // dataURL(urlData);
    const value = showPerpage * counter;
    onPaginationChnage(value - showPerpage, value);
  }, [counter, showPerpage]);
  useEffect(() => {
    const test = fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        (error) => {}
      );
    console.log(test);

    //api
  }, []);

  return (
    <div className="wallet1">
      <Tabs defaultActiveKey="statement" id="uncontrolled-tab-example">
        <Tab eventKey="statement" title="statement">
          <div className="balance__history">
            <div className="balance">
              <h3>
                total balance INR <span>6000.00</span>
              </h3>
              <button>
                <img src={plus} alt="" />
                Add Money
              </button>
            </div>
            {/* filter */}
            <div className="filter">
              <form action="">
                <div className="row">
                  <div className="form-group col-sm-4">
                    <label htmlFor="period">Period *</label>
                    <select name="period" id="">
                      <option value="all">All</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="period">Payment Type *</label>
                    <select name="period" id="">
                      <option value="all">All</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-3">
                    <label htmlFor="period" className="last">
                      Payment Type *
                    </label>
                    <button type="submit">Search</button>
                  </div>
                </div>
              </form>
            </div>
            {/* filter end */}

            {/* tables */}
            <table className="table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.slice(pagination.start, pagination.end).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>2021 - 01 - 04</td>
                    <td>deposit</td>
                    <td className="success">sucess</td>
                    <td>1,000.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* tables end */}
            <div className="pagination">
              <div className="buttons">
                <button
                  type="button"
                  disabled={pagination.start < 5}
                  onClick={() => setCounter(counter - 1)}
                >
                  <i className="fa fa-chevron-left"></i>
                  <i className="fa fa-chevron-left"></i> Previous
                </button>
                <button
                  type="button"
                  disabled={items.length - pagination.end < 5}
                  onClick={() => setCounter(counter + 1)}
                >
                  Next <i className="fa fa-chevron-right"></i>
                  <i className="fa fa-chevron-right"></i>{" "}
                </button>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="deposit" title="Deposit">
          <div className="deposit">
            <form
              action={cashfree.redirectUrl}
              method="POST"
              className="amount"
              onSubmit={handleSubmit}
            >
              <label htmlFor="amount">Amount *</label>
              <input value={Amount} type="text" onChange={handleChange} required />
              <span>INR</span>
              <input
                type="hidden"
                name="signature"
                value={cashfree.signature}
              />
              <input type="hidden" name="appId" value={cashfree.appId} />
              <input
                type="hidden"
                name="customerEmail"
                value={cashfree.customerEmail}
              />
              <input
                type="hidden"
                name="customerName"
                value={cashfree.customerName}
              />
              <input
                type="hidden"
                name="customerPhone"
                value={cashfree.customerPhone}
              />
              <input
                type="hidden"
                name="orderAmount"
                value={cashfree.orderAmount}
              />
              <input type="hidden" name="orderId" value={cashfree.orderId} />
              <input
                type="hidden"
                name="returnUrl"
                value={cashfree.returnUrl}
              />
              <input type="submit" value="Submit" />
            </form>
            <div className="upis">
              <div className="leftupi">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="upi">
                      UPI <img src={upi} alt="" />
                    </label>
                    <div className="debit">
                      <input type="text" placeholder="Enter UPI id" />
                    </div>
                    <img src={arrow} alt="" className="arrow" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="net">net banking</label>
                    <div className="debit">
                      <select name="net" id="">
                        <option value="">Choose Your Bank</option>
                      </select>
                    </div>
                    <img src={arrow} alt="" className="arrow" />
                  </div>
                  <div className="form-group boreder merg">
                    <label htmlFor="debit">debit/credit</label>
                    <div className="debit">
                      <input type="text" placeholder="name on card" />
                      <input type="text" placeholder="card number" />
                      <div className="expiry">
                        <select name="expiry" id="">
                          <option value="">mm/yy</option>
                        </select>
                        <input type="text" placeholder="cvv" />
                      </div>
                    </div>
                    <img
                      src={arrow}
                      alt=""
                      className="arrow"
                      style={{ visibility: "hidden" }}
                    />
                  </div>
                  <div className="form-group boreder ">
                    <label htmlFor="chekbox" style={{ visibility: "hidden" }}>
                      check
                    </label>
                    <div className="debit">
                      <div className="checkbox">
                        <input type="checkbox" />
                        save this card
                      </div>
                    </div>
                    <img src={arrow} className="arrow" alt="" />
                  </div>
                  <div className="proceed">
                    <img src={proceed} type="submit" alt="" />
                  </div>
                </form>
              </div>
              <div className="rightupi">
                <h3>e-Wallets</h3>
                <div className="item">
                  <img src={logo1} alt="" />
                </div>
                <div className="item">
                  <img src={logo3} alt="" />
                </div>
                <div className="item">
                  <img src={logo2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="withdraw" title="Withdraw">
          <div className="deposit">
            <form action="" className="amount">
              <label htmlFor="amount">Withdraw *</label>
              <input type="text" />
              <span>INR</span>
            </form>
            <div className="upis">
              <div className="leftupi">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="upi">
                      UPI <img src={upi} alt="" />
                    </label>
                    <div className="debit">
                      <input type="text" placeholder="Enter UPI id" />
                    </div>
                    <img src={arrow} alt="" className="arrow" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="net">net banking</label>
                    <div className="debit">
                      <select name="net" id="">
                        <option value="">Choose Your Bank</option>
                      </select>
                    </div>
                    <img src={arrow} alt="" className="arrow" />
                  </div>
                  <div className="form-group boreder merg">
                    <label htmlFor="debit">Bank Account</label>
                    <div className="debit bank">
                      <input type="text" placeholder="Your Name" />
                      <select name="bank" id="">
                        <option value="">Choose Your Bank</option>
                      </select>
                      <input type="text" placeholder="account number" />
                      <input type="text" placeholder="ifsc code" />
                    </div>
                    <img
                      src={arrow}
                      alt=""
                      className="arrow"
                      style={{ visibility: "hidden" }}
                    />
                  </div>
                  <div className="form-group boreder ">
                    <label htmlFor="chekbox" style={{ visibility: "hidden" }}>
                      check
                    </label>
                    <div className="debit">
                      <div className="checkbox">
                        <input type="checkbox" />
                        save these account details
                      </div>
                    </div>
                    <img src={arrow} className="arrow" alt="" />
                  </div>
                </form>
              </div>
              <div className="rightupi">
                <h3>e-Wallets</h3>
                <div className="item">
                  <img src={logo1} alt="" />
                </div>
                <div className="item">
                  <img src={logo3} alt="" />
                </div>
                <div className="item">
                  <img src={logo2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="refral" title="Referral"></Tab>
      </Tabs>
    </div>
  );
};

export default Wallet;
