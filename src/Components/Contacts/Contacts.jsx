"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import ContactCard from "./ContactCard";

const Contacts = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-secondary">Contacts</h1>

        <div className="flex flex-col md:flex-row gap-3">
          <form
            action=""
            className="bg-white flex items-center gap-3 max-w-4xl p-2 rounded-md shadow-md"
          >
            <BiSearch className="text-primary text-xl" />
            <input
              type="search"
              placeholder="serach contacts"
              className="outline-none"
            />
          </form>

          <button
            // className="btn"
            onClick={() => document.getElementById("my_modal").showModal()}
            className="bg-primary rounded-md text-white px-2 py-2 md:py-0 font-semibold text-sm md:text-base"
          >
            Add Contact
          </button>
          <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-white">
              <div className="modal-action flex justify-center items-center">
                <form method="dialog" className="flex flex-col gap-2">
                  {/* if there is a button in form, it will close the modal */}
                  <input type="file" className="border text-xl rounded-md" />
                  <select
                    name=""
                    id=""
                    className="p-2 rounded-md bg-white border"
                  >
                    <option value="" defaultChecked>
                      Team
                    </option>
                    <option value="">Dev</option>
                    <option value="">QA</option>
                    <option value="">HR</option>
                  </select>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="p-2 rounded-md bg-white border"
                    placeholder="Nick Name"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="p-2 rounded-md bg-white border"
                    placeholder="Designation"
                  />
                  <input
                    type="tel"
                    name=""
                    id=""
                    className="p-2 rounded-md bg-white border"
                    placeholder="Phone"
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    className="p-2 rounded-md bg-white border"
                    placeholder="Email"
                  />
                  <button
                    className="bg-primary text-white py-2
                   rounded"
                  >
                    Submit
                  </button>
                  <button className="bg-black text-white py-2 rounded">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <div className=" flex justify-center gap-5 flex-wrap">
        <ContactCard />
        <ContactCard />
      </div>
    </section>
  );
};

export default Contacts;
