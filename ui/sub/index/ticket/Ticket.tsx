import React from "react";
import "./ticket.css";
import Right from "./Right";
import Wrong from "./Wrong";
import SubHeadings from "../../headers/SubHeadings";

const Ticket: React.FC = () => {
  return (
    <>
    <SubHeadings heading="TICKETS" fontSize={70}/>
    <div className="ticketContainer z-[20] md:flex-row flex-col">
      <div className="ticket md:w-[500px]">
        <div className="ticketTitle">Standard Pass</div>
        <hr />
        <div className="ticketDetail">
          <div>Price:&emsp; ₹ 9,999</div>
          <div className="w-full flex justify-center">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              BUY NOW
            </button>
          </div>
          <div>Ticket Benefits:&emsp;</div>
        </div>
        <div className="ticketRip">
          <div className="circleLeft"></div>
          <div className="ripLine"></div>
          <div className="circleRight"></div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-green-700">Exhibition Zone</div>
          <div className="date">
            <Right/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-green-700">Global Future Education Stage</div>
          <div className="date">
            <Right/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-red-800">Networking Zone with Coffee & Snacks</div>
          <div className="date">
            <Wrong/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-red-800">Priority Seating</div>
          <div className="date">
            <Wrong/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-red-800">Executive Lunch</div>
          <div className="date">
            <Wrong/>
          </div>
        </div>
      </div>

      <div className="ticket md:w-[500px]">
        <div className="ticketTitle">Business Pass</div>
        <hr />
        <div className="ticketDetail">
          <div>Price:&emsp; ₹ 19,999</div>
          <div className="w-full flex justify-center">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              BUY NOW
            </button>
          </div>
          <div>Ticket Benefits:&emsp;</div>
        </div>
        <div className="ticketRip">
          <div className="circleLeft"></div>
          <div className="ripLine"></div>
          <div className="circleRight"></div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-green-700">Exhibition Zone</div>
          <div className="date">
            <Right/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-green-700">Global Future Education Stage</div>
          <div className="date">
            <Right/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-green-700">Networking Zone with Coffee & Snacks</div>
          <div className="date">
            <Right/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-red-800">Priority Seating</div>
          <div className="date">
            <Wrong/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-red-800">Executive Lunch</div>
          <div className="date">
            <Wrong/>
          </div>
        </div>
      </div>
      <div className="ticket md:w-[500px]">
        <div className="ticketTitle">Business Pass</div>
        <hr />
        <div className="ticketDetail">
          <div>Price:&emsp; ₹ 19,999</div>
          <div className="w-full flex justify-center">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              BUY NOW
            </button>
          </div>
          <div>Ticket Benefits:&emsp;</div>
        </div>
        <div className="ticketRip">
          <div className="circleLeft"></div>
          <div className="ripLine"></div>
          <div className="circleRight"></div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-green-700">Exhibition Zone</div>
          <div className="date">
            <Right/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-green-700">Global Future Education Stage</div>
          <div className="date">
            <Right/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-green-700">Networking Zone with Coffee & Snacks</div>
          <div className="date">
            <Right/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-red-800">Priority Seating</div>
          <div className="date">
            <Wrong/>
          </div>
        </div>
        <div className="ticketSubDetail">
          <div className="code text-red-800">Executive Lunch</div>
          <div className="date">
            <Wrong/>
          </div>
        </div>
      </div>
        <div className="ticket md:w-[500px]">
          <div className="ticketTitle">Business Pass</div>
          <hr />
          <div className="ticketDetail">
            <div>Price:&emsp; ₹ 19,999</div>
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                BUY NOW
              </button>
            </div>
            <div>Ticket Benefits:&emsp;</div>
          </div>
          <div className="ticketRip">
            <div className="circleLeft"></div>
            <div className="ripLine"></div>
            <div className="circleRight"></div>
          </div>
          <div className="ticketSubDetail">
            <div className="code text-green-700">Exhibition Zone</div>
            <div className="date">
              <Right/>
            </div>
          </div>
          <div className="ticketSubDetail">
            <div className="code text-green-700">Global Future Education Stage</div>
            <div className="date">
              <Right/>
            </div>
          </div>
          <div className="ticketSubDetail">
            <div className="code text-green-700">Networking Zone with Coffee & Snacks</div>
            <div className="date">
              <Right/>
            </div>
          </div>
          <div className="ticketSubDetail">
            <div className="code text-red-800">Priority Seating</div>
            <div className="date">
              <Wrong/>
            </div>
          </div>
          <div className="ticketSubDetail">
            <div className="code text-red-800">Executive Lunch</div>
            <div className="date">
              <Wrong/>
            </div>
          </div>
        </div>
      <div className="ticketShadow"></div>
    </div>
    </>
  );
};

export default Ticket;
