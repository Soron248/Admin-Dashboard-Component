import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoPrintSharp } from "react-icons/io5";

const Invoice = () => {
  return (
    <section className="w-full bg-white rounded-md shadow-md">
      <h1 className="w-fit h-fit text-2xl lg:text-5xl text-gray-500 font-bold p-2 md:p-5 border-b-2 ">
        Invoice
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-5 justify-between p-5 md:p-10 ">
        <section>
          <p className="text-gray-500 font-thin">FROM,</p>
          <h1 className="font-bold">ADMIN</h1>
          <p className="text-gray-400 font-semibold">4006, Victoria Street,</p>
          <p className="text-gray-400 font-semibold">London, UK</p>
        </section>

        <section className="flex  rounded-lg overflow-hidden">
          <div className="bg-primary bg-opacity-60 flex justify-center items-center flex-col p-3 gap-2 text-white font-semibold md:w-32">
            <FaFileAlt className="text-xl" />
            <p className="font-thin text-center">INVOICE No.</p>
            <p># 007</p>
          </div>
          <div className="bg-primary flex justify-center items-center flex-col p-3 gap-2 text-white font-semibold md:w-32">
            <FaCalendarCheck className="text-xl" />
            <p className="font-thin text-center">INVOICE DATE</p>
            <p>22-12-24</p>
          </div>
          <div className="bg-primary bg-opacity-60 flex justify-center items-center flex-col p-3 gap-2 text-white font-semibold md:w-32">
            <AiFillDollarCircle className="text-xl" />
            <p className="font-thin text-center">DUE</p>
            <p>$5000</p>
          </div>
        </section>

        <section>
          <p className="text-gray-500 font-thin">INVOICE TO,</p>
          <h1 className="font-bold">JHON ABRAHAM</h1>
          <p className="text-gray-400 font-semibold">House 05, Road 02</p>
          <p className="text-gray-400 font-semibold">London, UK</p>
        </section>
      </div>

      <div className="overflow-x-auto w-full p-5 md:p-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-gray-500 text-base">
              <th></th>
              <th>Discription</th>
              <th>Quantity</th>
              <th>Unit Cost</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {/* row 1 */}
            <tr className="hover:bg-gray-100 cursor-pointer">
              <th className="text-black">1</th>
              <td>Folder</td>
              <td>45</td>
              <td>$5</td>
              <td>$123</td>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-gray-100 cursor-pointer">
              <th className="text-black">2</th>
              <td>Docs</td>
              <td>21</td>
              <td>$5</td>
              <td>$123</td>
            </tr>
            {/* row 3 */}
            <tr className="hover:bg-gray-100 cursor-pointer">
              <th className="text-black">3</th>
              <td>Mokeups</td>
              <td>78</td>
              <td>$5</td>
              <td>$123</td>
            </tr>
            {/* row 4 */}
            <tr className="hover:bg-gray-100 cursor-pointer">
              <th className="text-black">4</th>
              <td>Scripts</td>
              <td>12</td>
              <td>$5</td>
              <td>$123</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto w-full p-5 md:p-10 flex flex-col md:flex-row gap-8 justify-between items-center">
        <section className="flex flex-col gap-2 items-center md:items-start">
          <h1 className="text-xl text-gray-600">PAYMENT METHOD</h1>
          <div className="flex gap-2">
            <p className="bg-primary text-white px-2 rounded-badge cursor-pointer text-sm md:text-base">
              Paypal
            </p>
            <p className="bg-primary text-white px-2 rounded-badge cursor-pointer text-sm md:text-base">
              Visa Card
            </p>
            <p className="bg-primary text-white px-2 rounded-badge cursor-pointer text-sm md:text-base">
              Master Card
            </p>
          </div>
        </section>

        <section className="w-60">
          <table className="table">
            <tbody className="text-gray-500">
              {/* row 1 */}
              <tr className="hover:bg-gray-100 cursor-pointer">
                <th className="text-gray-600">SUBTOTAL</th>
                <td className="bg-primary text-white">$1000</td>
              </tr>
              {/* row 2 */}
              <tr className="hover:bg-gray-100 cursor-pointer">
                <th className="text-gray-600">Vat</th>
                <td className="bg-primary text-white">$100</td>
              </tr>
              {/* row 3 */}
              <tr className="hover:bg-gray-100 cursor-pointer">
                <th className="text-gray-600">DISCOUNT</th>
                <td className="bg-primary text-white">$10</td>
              </tr>
              {/* row 4 */}
              <tr className="hover:bg-gray-100 cursor-pointer">
                <th className="bg-primary text-white border-r border-gray-500">
                  GRAND TOTAL
                </th>
                <td className="bg-primary text-white">$1200</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <div className=" w-full p-5 md:p-10 flex justify-center md:justify-end">
        <div className="flex gap-2">
          <p className="bg-pink-500 text-white px-2 py-1 rounded cursor-pointer">
            Proceed to payment
          </p>
          <p className="flex items-center gap-2 bg-blue-500 text-white px-2 py-1 rounded cursor-pointer">
            <IoPrintSharp /> Print
          </p>
        </div>
      </div>
    </section>
  );
};

export default Invoice;
