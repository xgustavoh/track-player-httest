import TrackPlayer from 'react-native-track-player';
import Event from 'react-native-track-player/lib/eventTypes';

export default async () => {
  console.log('Event', 'Defined');
  // This service needs to be registered for the module to work
  // but it will be used later in the "Receiving Events" section

  TrackPlayer.addEventListener(Event.REMOTE_PLAY, () => {
    console.log('Event', Event.REMOTE_PLAY);
  });
  TrackPlayer.addEventListener(Event.REMOTE_PAUSE, () => {
    console.log('Event', Event.REMOTE_PAUSE);
  });
  TrackPlayer.addEventListener(Event.REMOTE_STOP, () => {
    console.log('Event', Event.REMOTE_STOP);
  });
  TrackPlayer.addEventListener(Event.REMOTE_NEXT, () => {
    console.log('Event', Event.REMOTE_NEXT);
  });
  TrackPlayer.addEventListener(Event.REMOTE_PREVIOUS, () => {
    console.log('Event', Event.REMOTE_PREVIOUS);
  });
  TrackPlayer.addEventListener(Event.PLAYBACK_STATE, () => {
    console.log('Event', Event.PLAYBACK_STATE);
  });
  TrackPlayer.addEventListener(Event.PLAYBACK_METADATA_RECEIVED, () => {
    console.log('Event', Event.PLAYBACK_METADATA_RECEIVED);
  });
  TrackPlayer.addEventListener(Event.PLAYBACK_TRACK_CHANGED, () => {
    console.log('Event', Event.PLAYBACK_TRACK_CHANGED);
  });
};
