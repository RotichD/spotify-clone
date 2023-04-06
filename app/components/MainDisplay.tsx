'use client';
import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { signOut, useSession } from 'next-auth/react';
import { shuffle } from 'lodash';
import { useRecoilValue, useRecoilState } from 'recoil';
import { playlistIdState, playlistState } from '@/atoms/playlistAtom';
import useSpotify from '@/hooks/useSpotify';
import Tracks from './Tracks';

const bgColors = [
  'from-blue-900',
  'from-red-900',
  'from-green-900',
  'from-cyan-900',
  'from-violet-900',
  'from-rose-900',
  'from-lime-900',
  'from-amber-900',
  'from-teal-900',
  'from-orange-900',
];

function MainDisplay() {
  const { data: session } = useSession();
  const [color, setColor] = useState<any>(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const spotifyApi = useSpotify();

  useEffect(() => {
    setColor(shuffle(bgColors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((error) => console.log('Something went wrong', error));
  }, [spotifyApi, playlistId]);

  return (
    <div className='flex-grow text-white overflow-y-scroll h-screen scrollbar-hide'>
      <header className='absolute top-5 right-8'>
        <div
          onClick={() => signOut()}
          className='flex items-center bg-gray-500 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'
        >
          <img
            className='rounded-full w-7 h-7'
            src={session?.user?.image!}
            alt='User Profile Picture'
          />
          <h2 className='font-medium text-sm truncate w-24'>
            {session?.user?.name}
          </h2>
          <ChevronDownIcon className='h-5 w-5' />
        </div>
      </header>

      <section
        className={`mb-8 flex flex-col items-center md:flex-row md:items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 px-8 pt-8`}
      >
        {playlist && (
          <>
            <img
              src={playlist?.images[0].url}
              alt='Album Cover for Playlist'
              className='h-40 w-40 0 md:h-56 md:w-56 shadow-2xl'
            />
            <div className='flex flex-col space-y-2 justify-end h-56'>
              <p className='text-xl font-medium'>Playlist</p>
              <h1 className='text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold'>
                {playlist?.name}
              </h1>
              <p className='text-gray-300 text-xs'>{playlist?.description}</p>
              <div className='flex space-x-2 font-medium text-xs lg:text-sm'>
                <p>{playlist?.owner.display_name}</p>
                <p> • {playlist?.followers.total} likes</p>
                <p> • {playlist?.tracks.total} songs</p>
              </div>
            </div>
          </>
        )}
      </section>
      <Tracks />
    </div>
  );
}

export default MainDisplay;
