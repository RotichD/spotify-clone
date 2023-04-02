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
          <button className='flex items-center space-x-3 hover:text-white'>
            <HomeIcon className='h-6 w-6' />
            <p>Home</p>
          </button>
          <button className='flex items-center space-x-3 hover:text-white'>
            <MagnifyingGlassIcon className='h-6 w-6' />
            <p>Search</p>
          </button>
          <button className='flex items-center space-x-3 hover:text-white'>
            <BuildingLibraryIcon className='h-6 w-6' />
            <p>Your Library</p>
          </button>
        </div>
  
        <div className='space-y-4'>
          <button className='flex items-center space-x-3 hover:text-white group'>
            <div className='bg-gray-100 rounded-sm p-1 flex justify-center items-center opacity-70 group-hover:opacity-100 '>
              <PlusIcon className='h-3 w-3 lg:h-4 lg:w-4 text-gray-900 group-hover:text-gray-800' />
            </div>
            <p>Create Playlist</p>
          </button>
          <button className='flex items-center space-x-3 hover:text-white group transition duration-500'>
            <div className='rounded-sm p-1 flex justify-center items-center bg-gradient-to-br from-purple-600 to-blue-500 opacity-70 group-hover:opacity-100'>
              <HeartIcon className='h-3 w-3 lg:h-4 lg:w-4 text-gray-200' />
            </div>
            <p>Liked Songs</p>
          </button>
          <button className='flex items-center space-x-3 hover:text-white group'>
            <div className='rounded-sm p-1 flex justify-center items-center bg-green-800 opacity-70 group-hover:opacity-100'>
              <BookmarkIcon className='h-3 w-3 lg:h-4 lg:w-4 text-green-500' />
            </div>
            <p>Your Episodes</p>
          </button>
          <hr className='border-t-[0.1px] border-gray-600 opacity-50' />
  
          <div className='font-normal md:text-sm space-y-4'>
            <p className='hover:text-white'>
              Playlist Name...
            </p>
            <p className='hover:text-white'>
              Playlist Name...
            </p>
            <p className='hover:text-white'>
              Playlist Name...
            </p>
            <p className='hover:text-white'>
              Playlist Name...
            </p>
            <p className='hover:text-white'>
              Playlist Name...
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  