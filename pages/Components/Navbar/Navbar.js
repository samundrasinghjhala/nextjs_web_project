import { useRouter } from "next/router";
import { Menu } from '@headlessui/react'

const Navbar = () => {
  const router = useRouter();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const handleLogOut = () => {
    localStorage.removeItem('token')
    router.push('/');
  }
  return (
    <>
      <div className="min-h-10 bg-gray-100 min-w-screen">

        <div className="w-full text-gray-700 bg-white shadow-md body-font" >
          <div className="container flex flex-col p-4 mx-auto md:flex-row">
            <nav className=" flex items-center justify-center md:ml-auto">
              <a href="http://localhost:3005/home" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">Home</a>
              <a href="http://localhost:3005/blog" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">Blog</a>
              <a href="http://localhost:3005/about" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">About</a>
              <a href="http://localhost:3005/contact" className="mr-20 font-semibold text-gray-900 hover:text-orange-500">Contact</a>
            </nav>
            <div className=" flex items-end h-full pl-7 ml-10 border-l  border-gray-200 absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/Components/SignUp/SignUp#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Register User
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        onClick={handleLogOut}
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>

              </Menu>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};
export default Navbar;