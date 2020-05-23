/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {BoxStations, SubTitle} from './style';
import Station from './item';

import TrackPlayer from 'react-native-track-player';
import Event from 'react-native-track-player/lib/eventTypes';
import {useTrackPlayerEvents} from 'react-native-track-player/lib/hooks';

const Stations = ({stations}) => {
  const [current, setCurrent] = useState({key: '', url: ''});
  useTrackPlayerEvents([Event.PLAYBACK_TRACK_CHANGED], async event => {
    if (event.type === Event.PLAYBACK_TRACK_CHANGED) {
      if (event.nextTrack === null) {
        setCurrent({key: '', url: ''});
      } else {
        TrackPlayer.getTrack(event.nextTrack).then(track => {
          console.log(event, track);
          if (track !== null) {
            setCurrent({key: track.id, url: track.url});
          }
        });
      }
    }
  });
  return (
    <>
      <SubTitle>Estações disponivel</SubTitle>
      <BoxStations>
        {stations.map(s => (
          <Station key={s.key} station={s} current={current} />
        ))}
      </BoxStations>
    </>
  );
};

export default Stations;
