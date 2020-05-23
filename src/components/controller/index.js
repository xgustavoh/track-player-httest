/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {Box, Text, Button, SubTitle} from './style';

import TrackPlayer from 'react-native-track-player';

const Controller = ({stations}) => {
  const [quality, setQuality] = useState(-1);

  const onPrev = () => {
    TrackPlayer.skipToPrevious()
      .then(() => console.log('onPrev!'))
      .catch(e => console.error('onPrev', e));
  };
  const onNext = () => {
    TrackPlayer.skipToNext()
      .then(() => console.log('Next!'))
      .catch(e => console.error('Next', e));
  };
  const onPlay = () => {
    TrackPlayer.play()
      .then(() => console.log('play!'))
      .catch(e => console.error('play', e));
  };
  const onStop = () => {
    TrackPlayer.stop()
      .then(() => console.log('onStop!'))
      .catch(e => console.error('onStop', e));
  };
  const onPause = () => {
    TrackPlayer.pause()
      .then(() => console.log('onPause!'))
      .catch(e => console.error('onPause', e));
  };
  const onReset = () => {
    TrackPlayer.reset()
      .then(() => console.log('onReset!'))
      .catch(e => console.error('onReset', e));
    setQuality(-1);
  };
  const onDestroy = () => {
    TrackPlayer.destroy();
  };
  const onCheck = () => {};

  // useEffect(() => {
  //   if (quality > -1) {
  //     const createTrack = s => {
  //       const stream = s.streams.find(st => st.quality === quality);
  //       return {
  //         id: s.key,
  //         url: stream ? stream.url : '',
  //         type: 'HLS',
  //         userAgent: 'APP-Teste',
  //         title: s.name,
  //         artist: 'Testando',
  //       };
  //     };

  //     const tracks = stations.map(createTrack);
  //     TrackPlayer.checkTracks(tracks).then(({isCurrent, insert, update}) => {
  //       if (isCurrent) {
  //         TrackPlayer.reset().then(() => {
  //           TrackPlayer.add([...tracks]).then(() => {
  //             TrackPlayer.skip('jld3aw2-2312312-qwfast85d').then(() => {
  //               TrackPlayer.play();
  //             });
  //           });
  //         });
  //       } else if (insert.length > 0) {
  //         TrackPlayer.add(insert);
  //       }
  //       console.log('isCurrent', isCurrent);
  //       console.log('insert', insert);
  //       console.log('update', update);
  //     });

  //     // TrackPlayer.reset().then(() => {
  //     //   TrackPlayer.add(tracks);
  //     // });
  //   }
  // }, [quality]);

  const onQuality = q => {
    setQuality(q);

    if (quality > -1) {
      const createTrack = s => {
        const stream = s.streams.find(st => st.quality === q);
        return {
          id: s.key,
          url: stream ? stream.url : '',
          type: 'HLS',
          userAgent: 'APP-Teste',
          title: s.name,
          artist: 'Testando',
        };
      };

      const tracks = stations.map(createTrack);

      console.log('Add:', tracks);
      TrackPlayer.add(tracks)
        .then(() => {
          console.log('Sucess');
          // TrackPlayer.play();
        })
        .catch(e => {
          console.error('Fail', e);
        });
      // TrackPlayer.reset().then(() => {
      //   TrackPlayer.add(tracks);
      // });
    }
  };
  return (
    <>
      <SubTitle>Controles</SubTitle>
      <Box>
        <Button onPress={onPrev}>
          <Text>{'<'}</Text>
        </Button>
        <Button onPress={onNext}>
          <Text>{'>'}</Text>
        </Button>

        <Button onPress={onPlay}>
          <Text>Play</Text>
        </Button>

        <Button onPress={onStop}>
          <Text>Stop</Text>
        </Button>

        <Button onPress={onPause}>
          <Text>Pause</Text>
        </Button>

        <Button onPress={onReset}>
          <Text>Reset</Text>
        </Button>

        <Button onPress={onDestroy}>
          <Text>Destroy</Text>
        </Button>

        <Button onPress={onCheck}>
          <Text>Check</Text>
        </Button>
      </Box>
      <SubTitle>Qualidade</SubTitle>
      <Box>
        <Button onPress={() => onQuality(0)}>
          <Text>Baixa</Text>
        </Button>
        <Button onPress={() => onQuality(1)}>
          <Text>Média</Text>
        </Button>

        <Button onPress={() => onQuality(2)}>
          <Text>Alta</Text>
        </Button>

        <Button onPress={() => onQuality(3)}>
          <Text>Ultra</Text>
        </Button>
      </Box>
    </>
  );
};

export default Controller;
