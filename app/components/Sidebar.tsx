'use client';
import { useState, useEffect } from 'react';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon, BookmarkIcon, HomeIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import useSpotify from '@/hooks/useSpotify';
import { playlistIdState } from '@/atoms/playlistAtom';
import { useRecoilState } from 'recoil';
import spotifyApi from '@/lib/spotify';
import { SetStateAction } from 'react';

type Playlist = {
  name: string;
  images: { url: string }[];
  owner: {
    display_name: string;
  };
  followers: {
    total: number;
  };
  tracks: {
    total: number;
  };
  description: string;
  id: string;
};

function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();

  const [playlists, setPlaylists] = useState<any>([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div className='hidden sm:block text-neutral-400 p-5 pr-16 pb-36 text-xs border-r border-gray-900 font-medium overflow-y-scroll h-screen scrollbar-hide min-w-fit  sm:max-w-[12rem] lg:max-w-[15rem]'>
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
          {playlists.map((playlist: Playlist) => (
            <p
              key={playlist.id}
              className='hover:text-white cursor-default transition duration-200'
              onClick={() => setPlaylistId(playlist.id)}
            >
              {playlist.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
