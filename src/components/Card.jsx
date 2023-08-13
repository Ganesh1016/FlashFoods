const Card = () => {
  return (
    <div
      className="max-w-xs max-h-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      style={{ margin: "10px" }}
    >
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
      </a>
      <div className="p-5" style={{ border: "2px solid black" }}>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div
          className="actions flex"
          style={{
            // border: "2px solid black",
            width: "100%",
            height: "30px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            id="quantityDropdownDefaultButton"
            data-dropdown-toggle="quantityDropdown"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            style={{ fontSize: "8px", width: "30%", height: "100%" }}
          >
            Quantity
            <svg
              className="w-2 h-2 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="quantityDropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            style={{
              width: "130px",
              height: "fit-content",
              // border: "2px solid black",
            }}
          >
            <ul
              className="py-2 text-xs text-gray-700 dark:text-gray-200"
              // aria-labelledby="dropdownDefaultButton"
              style={{
                width: "100%",
                height: "60%",
                // border: "2px solid black",
              }}
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Half
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Full
                </a>
              </li>
            </ul>
          </div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            style={{ fontSize: "8px", width: "30%", height: "100%" }}
          >
            Amount
            <svg
              className="w-2 h-2 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            style={{
              width: "130px",
              height: "fit-content",
              // border: "2px solid black",
            }}
          >
            <ul
              className="py-2 text-xs text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
              style={{
                width: "100%",
                height: "60%",
                // border: "2px solid black",
              }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <li key={i + 1}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {i + 1}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <h3 className="text-base text-slate-950 font-semibold">
            Price: ₹132
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
