import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import imdb from '../assets/imdbu.png'
import { Link } from 'react-router-dom';


import {
    Button,
    Input,
  } from "@material-tailwind/react";


const navigation = [
{ name: 'Popular', to: '/movies/popular', current: false },
{ name: 'Top Rated', to: '/movies/rop_rated', current: false },
{ name: 'Upcoming', to: '/movies/upcoming', current: false },
{ name: 'Now Playing', to: '/movies/now_playing', current: false },
]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

export default function Header() {
return (
    <div className="container">
        <Disclosure as="nav" className="bg-black">
        {({ open }) => (
            <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white  hover:text-imdb_red focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <Link to='/'>
                        <img
                        className="h-8 w-auto"
                        src={imdb}
                        alt="imdb logo"
                        />
                    </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            className={classNames(
                            item.current ? 'bg-black text-white' : 'text-white  hover:text-imdb_red',
                            'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <Link to={item.to}>{item.name}</Link>
                        </a>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* <button
                    type="button"
                    className="rounded-full bg-black p-1 text-white hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}

                    {/* Profile dropdown */}
                    {/* <Menu as="div" className="relative ml-3">
                    <div>
                        <Menu.Button className="flex rounded-full bg-black text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white hover:text-imdb_red')}
                            >
                                Your Profile
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white hover:text-imdb_red')}
                            >
                                Settings
                            </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <a
                                className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white hover:text-imdb_red')}
                            >
                                Sign out
                            </a>
                            )}
                        </Menu.Item>
                        </Menu.Items>
                    </Transition>
                    </Menu> */}

                    <div className="relative flex w-full gap-2 md:w-max">
                        <Input
                            type="search"
                            label="Type here..."
                            className="pr-20"
                            containerProps={{
                            className: "min-w-[288px]",
                            }}
                        />
                        <Button size="sm" className="!absolute right-1 top-1 rounded">
                            Search
                        </Button>
                        </div>
                                </div>
                                </div>
                    </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    className={classNames(
                        item.current ? 'bg-black text-white hover:text-imdb_red' : 'text-white hover:text-imdb_red',
                        'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                        <Link to={item.to}>{item.name}</Link>

                    </Disclosure.Button>
                ))}
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    </div>
)
}
