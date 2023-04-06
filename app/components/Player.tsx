'use client';
import { currentTrackIdState, isPlayingState } from '@/atoms/trackAtom';
import useSongInfo from '@/hooks/useSongInfo';
import useSpotify from '@/hooks/useSpotify';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  PlayCircleIcon,
  PauseCircleIcon,
  ArrowsRightLeftIcon,
  BackwardIcon,
  ForwardIcon,
  ArrowPathRoundedSquareIcon,
  SpeakerXMarkIcon,
} from '@heroicons/react/24/solid';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { debounce } from 'lodash';

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);
  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    // if (!songInfo) {
    spotifyApi.getMyCurrentPlayingTrack().then((data) => {
      setCurentTrackId(data.body?.item?.id);

      spotifyApi.getMyCurrentPlaybackState().then((data) => {
        setIsPlaying(data.body?.is_playing);
      });
    });
    // }
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [currentTrackId, spotifyApi, session]);

  useEffect(() => {
    if (volume > 0 && volume <= 100) {
      debouncedAdjVolume(volume);
    }
    spotifyApi.setVolume(0).catch((err) => {});
  }, [volume]);

  const debouncedAdjVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch((err) => {});
    }, 500),
    []
  );

  const rewind = async () => {
    await spotifyApi.skipToPrevious();
    await spotifyApi
      .getMyCurrentPlayingTrack()
      .then((data) => setCurentTrackId(data.body?.item?.id));
    await spotifyApi
      .getMyCurrentPlayingTrack()
      .then((data) => setCurentTrackId(data.body?.item?.id));
  };

  const forward = async () => {
    await spotifyApi.skipToNext();
    await spotifyApi
      .getMyCurrentPlayingTrack()
      .then((data) => setCurentTrackId(data.body?.item?.id));
    await spotifyApi
      .getMyCurrentPlayingTrack()
      .then((data) => setCurentTrackId(data.body?.item?.id));
  };

  const playPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body?.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  };

  console.log(songInfo, 'DEEZ')

  return (
    <div className='text-white h-24 bg-gradient-to-b from-black to-neutral-900 grid grid-cols-3 text-sm md:text-base px-2 md:px-8'>
      <div className='flex items-center space-x-4'>
        <img
          className='hidden md:inline h-10 w-10'
          src={songInfo?.album.images?.[0]?.url}
          alt='Image Cover'
        />
        <div>
          <h3 className='font-medium md:text-lg'>{songInfo?.name}</h3>
          <p className='text-neutral-400 text-xs md:text-sm'>
            {songInfo?.artists?.[0]?.name}
          </p>
        </div>
      </div>

      <div className='flex items-center justify-evenly'>
        <ArrowsRightLeftIcon className='button' />
        <BackwardIcon className='button' onClick={rewind} />
        {isPlaying ? (
          <PauseCircleIcon onClick={playPause} className='button h-10 w-10' />
        ) : (
          <PlayCircleIcon onClick={playPause} className='button h-10 w-10' />
        )}
        <ForwardIcon onClick={forward} className='button' />
        <ArrowPathRoundedSquareIcon className='button' />
      </div>

      <div className='flex items-center space-x-3 md:space-x-4 justify-end pr-5'>
        {volume == 0 ? (
          <SpeakerXMarkIcon onClick={() => setVolume(50)} className='button' />
        ) : (
          <SpeakerWaveIcon onClick={() => setVolume(0)} className='button' />
        )}
        <input
          className='w-14 md:w-28 rounded-full'
          type='range'
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          min={0}
          max={100}
        />
      </div>
    </div>
  );
}

export default Player;
