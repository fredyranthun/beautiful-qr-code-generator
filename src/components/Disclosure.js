import React from 'react';
import {Disclosure, Transition} from '@headlessui/react';
import { ChevronUpIcon } from "@heroicons/react/solid";


export default function MyDisclosure(props) {
    return (
        <Disclosure>
            {/* It will renders the props.content when 'open', and display the animation on icon. */}
            {({ open }) => (
            <>
                <Disclosure.Button className="flex justify-between w-full my-2 px-4 py-2 text-sm font-medium text-left text-white bg-blue-800 rounded-lg hover:bg-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{props.children.toUpperCase()}</span>
                    <ChevronUpIcon
                    className={`${
                        open ? "transform rotate-180" : ""
                    } transition duration-300 w-5 h-5 text-white`}
                    />
                </Disclosure.Button>
                <Transition
                    show={open}
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-300 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"              
                >
                    <Disclosure.Panel static className="pt-2 pb-2">
                        {props.content}
                    </Disclosure.Panel>
                </Transition>
            </>
            )}
        </Disclosure>
  );
}
