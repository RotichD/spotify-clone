import { currentTrackIdState, isPlayingState } from '@/atoms/trackAtom';
import useSpotify from '@/hooks/useSpotify';
import { msToMin, addedAt } from '@/lib/time';
import { useRecoilState } from 'recoil';



interface Props {
  playlistUri: string;
  track: any;
  order: number;
};

function Track({ order, track, playlistUri }: Props) {
  const spotifyApi = useSpotify();

  const {
    track: { name, artists, album, duration_ms, id, uri },
    added_at,
  } = track;

  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playSong = async () => {
    await spotifyApi
      .play({
        context_uri: playlistUri,
        offset: {
          position: order,
        },
      })
      .then(() => {
        setCurrentTrackId(id);
        setIsPlaying(true);
      });
  };

  return (
    <div
      onClick={playSong}
      className='grid grid-cols-2 text-neutral-400 text-xs px-2 hover:bg-neutral-900 rounded'
    >
      <div className='flex items-center space-x-4'>
        <p className='w-8 text-center'>{order + 1}</p>
        <img
          className='w-10 h-10'
          src={album.images[0].url}
          alt='Song Cover Art'
        />
        <div className=''>
          <p className='text-white text-sm w-36 lg:w-64 truncate'>{name}</p>
          <p className='w-36 lg:w-64 truncate'>{artists[0].name}</p>
        </div>
      </div>

      <div className='flex items-center justify-between ml-auto md:ml-0'>
        <p className='hidden md:inline w-40'>{album.name}</p>
        <p className='hidden lg:inline'>{addedAt(added_at)}</p>
        <p className='w-10 text-center'>{msToMin(duration_ms)}</p>
      </div>
    </div>
  );
}

export default Track;
