/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useMemo, useState} from 'react';
import {Box, Text, SubTitle} from './style';

import TrackPlayer from 'react-native-track-player';
import Event from 'react-native-track-player/lib/eventTypes';
import {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player/lib/hooks';

const Status = () => {
  const {
    position,
    duration,
    bufferedPosition: buffered,
  } = useTrackPlayerProgress();

  const state = usePlaybackState();
  const showState = useMemo(() => {
    switch (state) {
      case TrackPlayer.STATE_NONE:
        return 'None';
      case TrackPlayer.STATE_READY:
        return 'Ready';
      case TrackPlayer.STATE_PLAYING:
        return 'Playing';
      case TrackPlayer.STATE_PAUSED:
        return 'Paused';
      case TrackPlayer.STATE_STOPPED:
        return 'Stopped';
      case TrackPlayer.STATE_BUFFERING:
        return 'Buffering';
      case TrackPlayer.STATE_CONNECTING:
        return 'Connecting';
      default:
        return 'Desconhecido';
    }
  }, [state]);

  const [music, setMusic] = useState({title: '', artist: '', url: ''});
  useTrackPlayerEvents([Event.PLAYBACK_METADATA_RECEIVED], async event => {
    TrackPlayer.getCurrentTrack().then(track => {
      TrackPlayer.getTrack(track).then(({url}) => {
        if (
          music.title !== event.title ||
          music.artist !== event.artist ||
          music.url !== url
        ) {
          setMusic({title: event.title, artist: event.artist, url});
          TrackPlayer.updateMetadataForTrack(track, {
            title: event.title,
            artist: event.artist,
          });
        }
      });
    });
  });
  return (
    <Box>
      <SubTitle>Status - {showState}</SubTitle>
      <Text>{`Tocando Agora: ${music.title} - ${music.artist}`}</Text>
      <Text>Stream: {music.url}</Text>
      <Text>
        Position: {position} | Duration: {duration} | Buffered: {buffered}
      </Text>
    </Box>
  );
};

export default Status;
