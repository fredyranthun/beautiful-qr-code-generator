import React from 'react';
import {Menu, Transition} from '@headlessui/react';
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

const DropDown = (props) => {

    const menuItens = props.listItems.map((value, index) => (
        <Menu.Item key={index}>
            {({ active }) => (
                <button
                className={`${active ? "bg-blue-300 text-white" : "text-gray-900"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                {value}
                </button>
            )}
        </Menu.Item>
    ));
    return (
        <div className="w-56 m-2">
          <Menu as="div" className="relative inline-block text-left w-full">
            {({ open }) => (
              <>
                <div>
                    <Menu.Button
                        className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                        {props.children}
                        
                        <ChevronDownIcon
                        className={`${
                            open ? "transform rotate-180" : ""
                        } transition duration-200 w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100`}
                        aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="z-50 absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="px-1 py-1 ">
                        {menuItens}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      );
}
export default DropDown;