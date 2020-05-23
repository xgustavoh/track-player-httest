/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import Controller from '../components/controller';
import Stations from '../components/stations';
import Status from '../components/status';
import {Background, Title} from './style';

const stations = [
  {
    name: 'POP',
    key: 'jl2vwy6i-apswl5mr-onw1zw43kc',
    streams: [
      {url: 'https://hls.hunter.fm/pop/192.m3u8', bitrate: 128, quality: 2},
      {url: 'https://hls.hunter.fm/pop/64.m3u8', bitrate: 64, quality: 1},
      {url: 'https://hls.hunter.fm/pop/32.m3u8', bitrate: 32, quality: 0},
    ],
  },
  {
    name: 'Pop2k',
    key: 'jl339l70-23gg7tj7-hf6w8d3hg2',
    streams: [
      {
        url: 'https://hls.hunter.fm/pop2k/192.m3u8',
        bitrate: 128,
        quality: 2,
      },
      {url: 'https://hls.hunter.fm/pop2k/64.m3u8', bitrate: 64, quality: 1},
      {url: 'https://hls.hunter.fm/pop2k/32.m3u8', bitrate: 32, quality: 0},
    ],
  },
  {
    name: 'Setanejo',
    key: 'jld3aw2-d1a2s1d-sdwadsfawd',
    streams: [
      {
        url: 'https://hls.hunter.fm/sertanejo/192.m3u8',
        bitrate: 128,
        quality: 2,
      },
      {
        url: 'https://hls.hunter.fm/sertanejo/64.m3u8',
        bitrate: 64,
        quality: 1,
      },
      {
        url: 'https://hls.hunter.fm/sertanejo/32.m3u8',
        bitrate: 32,
        quality: 0,
      },
    ],
  },
  {
    name: 'Fresh',
    key: 'jld3aw2-2312312-qwfast85d',
    streams: [
      {
        url: 'https://hls.hunter.fm/tropical/192.m3u8',
        bitrate: 128,
        quality: 2,
      },
      {
        url: 'https://hls.hunter.fm/tropical/64.m3u8',
        bitrate: 64,
        quality: 1,
      },
      {
        url: 'https://hls.hunter.fm/tropical/32.m3u8',
        bitrate: 32,
        quality: 0,
      },
    ],
  },
  {
    name: 'NCS',
    key: 'jiç32sa2-d21sd234s-qq312dsa24s',
    streams: [
      {url: 'https://hls.hunter.fm/ncs/192.m3u8', bitrate: 128, quality: 2},
      {url: 'https://hls.hunter.fm/ncs/64.m3u8', bitrate: 64, quality: 1},
      {url: 'https://hls.hunter.fm/ncs/32.m3u8', bitrate: 32, quality: 0},
    ],
  },
  {
    name: '80s',
    key: 'jiç32234-22d21sd23-4sqq312dsas',
    streams: [
      {url: 'https://hls.hunter.fm/80s/192.m3u8', bitrate: 192, quality: 2},
      {url: 'https://hls.hunter.fm/80s/64.m3u8', bitrate: 64, quality: 1},
      {url: 'https://hls.hunter.fm/80s/32.m3u8', bitrate: 32, quality: 0},
    ],
  },
  {
    name: 'Rock',
    key: 'jic321Sd-dawd1S27s-Se24s1daw2',
    streams: [
      {
        url: 'https://hls.hunter.fm/rock/192.m3u8',
        bitrate: 192,
        quality: 2,
      },
      {url: 'https://hls.hunter.fm/rock/64.m3u8', bitrate: 64, quality: 1},
      {url: 'https://hls.hunter.fm/rock/32.m3u8', bitrate: 32, quality: 0},
    ],
  },
  {
    name: 'Lo-Fi',
    key: 'jic321Sd-de2s3d7s-S12e24s1daw2',
    streams: [
      {
        url: 'https://hls.hunter.fm/lofi/192.m3u8',
        bitrate: 192,
        quality: 2,
      },
      {url: 'https://hls.hunter.fm/lofi/64.m3u8', bitrate: 64, quality: 1},
      {url: 'https://hls.hunter.fm/lofi/32.m3u8', bitrate: 32, quality: 0},
    ],
  },
];
const App = () => {
  TrackPlayer.isServiceRunning().then(run => {
    console.log(`[TrackPlayer] isServiceRunning? ${run}`);
    if (run === false) {
      TrackPlayer.setupPlayer({
        minBuffer: 10,
        maxBuffer: 60,
        playBuffer: 1.5,
        playRebuffer: 3,
        backBuffer: 0,
        waitForBuffer: true,
      })
        .then(() => {
          console.log('[TrackPlayer] Instalado com sucesso!');
          TrackPlayer.updateOptions({
            stopWithApp: false,
            duckingVolumeMultiplier: 0.3,
            icon: require('../icon.png'),
            capabilities: [
              TrackPlayer.CAPABILITY_PLAY,
              TrackPlayer.CAPABILITY_STOP,
              TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
              TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
            ],
            compactCapabilities: [
              TrackPlayer.CAPABILITY_PLAY,
              TrackPlayer.CAPABILITY_STOP,
              TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
              TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
            ],
          })
            .then(() => {
              console.log('Configurações alteradas!');
            })
            .catch(() => console.log('Falha ao alterar consifurações'));
        })
        .catch(err => {
          console.error('[TrackPlayer] Falha ao instalar!', err);
        });
    }
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Background>
        <Title>Track Player - Hunter.FM V2</Title>
        <Stations stations={stations} />
        <Status />
        <Controller stations={stations} />
      </Background>
    </>
  );
};

export default App;
