import {
    PlusIcon,
    MagnifyingGlassIcon,
    BuildingLibraryIcon,
  } from '@heroicons/react/24/outline';
  import { HeartIcon, BookmarkIcon, HomeIcon } from '@heroicons/react/24/solid';
  
  function Sidebar() {
    return (
      <div className='text-gray-300 p-5 text-xs border-r border-gray-900 font-semibold'>
        <div className='space-y-4 mb-8'>
          <button className='flex items-center space-x-3 hover:text-white transition duration-200'>
            <HomeIcon className='h-6 w-6' />
            <p>Home</p>
          </button>
          <button className='flex items-center space-x-3 hover:text-white transition duration-200'>
            <MagnifyingGlassIcon className='h-6 w-6' />
            <p>Search</p>
          </button>
          <button className='flex items-center space-x-3 hover:text-white transition duration-200'>
            <BuildingLibraryIcon className='h-6 w-6' />
            <p>Your Library</p>
          </button>
        </div>
  
        <div className='space-y-4'>
          <button className='flex items-center space-x-3 hover:text-white group transition duration-200'>
            <div className='bg-gray-100 rounded-sm p-1 flex justify-center items-center opacity-70 group-hover:opacity-100 transition duration-200'>
              <PlusIcon className='h-3 w-3 lg:h-4 lg:w-4 text-gray-900 group-hover:text-gray-800' />
            </div>
            <p>Create Playlist</p>
          </button>
          <button className='flex items-center space-x-3 hover:text-white group transition duration-200'>
            <div className='rounded-sm p-1 flex justify-center items-center bg-gradient-to-br from-purple-600 to-blue-500 opacity-70 group-hover:opacity-100 transition duration-200'>
              <HeartIcon className='h-3 w-3 lg:h-4 lg:w-4 text-gray-200' />
            </div>
            <p>Liked Songs</p>
          </button>
          <button className='flex items-center space-x-3 hover:text-white group transition duration-200'>
            <div className='rounded-sm p-1 flex justify-center items-center bg-green-800 opacity-70 group-hover:opacity-100 transition duration-200'>
              <BookmarkIcon className='h-3 w-3 lg:h-4 lg:w-4 text-green-500' />
            </div>
            <p>Your Episodes</p>
          </button>
          <hr className='border-t-[0.1px] border-gray-600 opacity-50' />
  
          <div className='font-normal md:text-sm space-y-4'>
            <p className='hover:text-white cursor-default transition duration-200'>
              Playlist Name...
            </p>
            <p className='hover:text-white cursor-default transition duration-200'>
              Playlist Name...
            </p>
            <p className='hover:text-white cursor-default transition duration-200'>
              Playlist Name...
            </p>
            <p className='hover:text-white cursor-default transition duration-200'>
              Playlist Name...
            </p>
            <p className='hover:text-white cursor-default transition duration-200'>
              Playlist Name...
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  