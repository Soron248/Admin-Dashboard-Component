import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto h-full overflow-y-scroll w-full md:w-3/4 bg-white shadow-md py-3 px-5 rounded-md">
      <div className="mb-5">
        <h1 className="font-semibold text-lg">Projects of the Month</h1>
        <p className="font-light text-gray-500">Technology</p>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="border-opacity-25 border-gray-500">
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover:border-l-4 border-opacity-25 border-gray-500">
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://cdn.dribbble.com/users/8309782/screenshots/17449329/media/6232cca89209dba5998b6418aba87157.png?resize=400x0"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className=" border-2 rounded-full border-opacity-60 border-black font-light text-xs px-1">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs bg-primary text-white hover:text-primary">
                details
              </button>
            </th>
          </tr>
          {/* row 2 */}
          <tr className="hover:border-l-4 border-opacity-25 border-gray-500">
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/58732105/original/aa.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <span className=" border-2 rounded-full border-opacity-60 border-black font-light text-xs px-1">
                Tax Accountant
              </span>
            </td>
            <td>Red</td>
            <th>
              <button className="btn btn-ghost btn-xs bg-primary text-white hover:text-primary">
                details
              </button>
            </th>
          </tr>
          {/* row 3 */}
          <tr className="hover:border-l-4 border-opacity-25 border-gray-500">
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/42b8cbad0e2b0fb5e49359700b8e3921-1680822965/Jevan_wade-01-01/draw-cartoon-gaming-social-media-profile-picture.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              <span className=" border-2 rounded-full border-opacity-60 border-black font-light text-xs px-1">
                Office Assistant I
              </span>
            </td>
            <td>Crimson</td>
            <th>
              <button className="btn btn-ghost btn-xs bg-primary text-white hover:text-primary">
                details
              </button>
            </th>
          </tr>
          {/* row 4 */}
          <tr className="hover:border-l-4 border-opacity-25 border-gray-500">
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/284442670/original/f58552d6dc4ae04fa248f0e9e2d8227737e2b08a/make-your-photo-into-a-cartoon-portrait.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td>
              Wyman-Ledner
              <br />
              <span className=" border-2 rounded-full border-opacity-60 border-black font-light text-xs px-1">
                Community Outreach Specialist
              </span>
            </td>
            <td>Indigo</td>
            <th>
              <button className="btn btn-ghost btn-xs bg-primary text-white hover:text-primary">
                details
              </button>
            </th>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
