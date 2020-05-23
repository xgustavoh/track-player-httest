/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useMemo} from 'react';
import {BoxStation, Text, BoxQuality, NameStation} from './style';

const Station = ({station, current}) => {
  const currentStream = useMemo(() => {
    const stream = station.streams.find(s => s.url === current.url);
    return stream ? stream.quality : -1;
  }, [station.streams, current.url]);
  return (
    <BoxStation>
      <NameStation isCurrent={station.key === current.key}>
        {station.name}
      </NameStation>
      <BoxQuality>
        <Text
          noListed={station.streams.findIndex(s => s.quality === 0) < 0}
          isCurrent={currentStream === 0}>
          Baixa
        </Text>
        <Text
          noListed={station.streams.findIndex(s => s.quality === 1) < 0}
          isCurrent={currentStream === 1}>
          Média
        </Text>
        <Text
          noListed={station.streams.findIndex(s => s.quality === 2) < 0}
          isCurrent={currentStream === 2}>
          Alta
        </Text>
        <Text
          noListed={station.streams.findIndex(s => s.quality === 3) < 0}
          isCurrent={currentStream === 3}>
          Ultra
        </Text>
      </BoxQuality>
    </BoxStation>
  );
};

export default Station;
