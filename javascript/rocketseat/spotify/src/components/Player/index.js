import React from 'react';
import Slider from 'rc-slider';
import {
  Container, Current, Volume, Progress, Controls,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';

import ShuffleIcon from '../../assets/images/shuffle.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91OKWPQcuEL._SL1500_.jpg"
        alt="Teste"
      />
      <div>
        <span> Times Like These</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="shuffle" />
        </button>
        <button type="button">
          <img src={BackwardIcon} alt="shuffle" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="shuffle" />
        </button>
        <button type="button">
          <img src={ForwardIcon} alt="shuffle" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="shuffle" />
        </button>
      </Controls>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ backgroundColor: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
