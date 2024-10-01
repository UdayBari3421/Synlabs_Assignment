import React from "react";

function Dropdown({ options, text }) {
  const [state, setState] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(`Select ${text ? text : "Option"}`);

  const handleSelection = (e, option) => {
    e.preventDefault();
    setSelectedOption(option);
    setState(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex w-full min-w-[150px]">
        <button
          onClick={() => setState(!state)}
          type="button"
          className={`${
            state ? "ring-purple-600 text-purple-500" : null
          } inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {selectedOption}
          {!state ? (
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832l-3.71 3.938a.75.75 0 01-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
      {options.length > 0 && state ? (
        <div
          className={`${state ? "flex" : "hidden"} absolute right-0 left-0 z-10 mt-2 w-[8.8srem] origin-center rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="p-1 w-full" role="none">
            {options.map((option, index) => (
              <a
                key={option + "option" + index}
                onClick={(e) => {
                  handleSelection(e, option);
                }}
                href="#"
                className="hover:bg-[#e2dfff] w-full block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dropdown;
