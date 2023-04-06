import React from 'react';
import { useRecoilValue } from 'recoil';
import { playlistState } from '@/atoms/playlistAtom';
import Track from './Track';
import { ClockIcon } from '@heroicons/react/24/outline';

function Tracks() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className='flex flex-col space-y-4 text-neutral-400 px-8 pt-8'>
      {playlist ? (
        <div className='grid grid-cols-2 px-2 border-b border-neutral-400 pb-2'>
          <div className='flex space-x-4'>
            <p className='w-8 text-center'>#</p>
            <p>Title</p>
          </div>
          <div className='flex items-center justify-between ml-auto md:ml-0'>
            <p className='w-40 hidden md:inline'>Album</p>
            <p className='hidden lg:inline'>Date added</p>
            <div className='w-10 flex justify-center'>
              <ClockIcon className='w-5 h-5' />
            </div>
          </div>
        </div>
      ): (<div className='flex flex-col justify-center text-center space-y-5'>
        <h1 className='text-4xl lg:text-7xl font-extrabold text-white '>This Web App Controls Spotify Playback on Another Device</h1>
        <h2 className='text-2xl'>To get started: Make sure Spotify is playing on another device.</h2>
        <p className='text-2xl'>Next: Load a Playlist from the left sidebar</p>
      </div>)}
      {playlist?.tracks.items.map((track: Track, index: number) => (
        <Track
          key={track.track.id}
          track={track}
          order={index}
          playlistUri={playlist.uri}
        />
      ))}
    </div>
  );
}

export default Tracks;
