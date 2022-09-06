import { atom, selector, useRecoilState } from 'recoil';

interface synthesisVoiceModel {
  name: string;
  gender: string;
  locale: string;
  shortCode: string;
  voices: string[];
  pitchRange: number[];
  speedRange: number[];
}

const synthesisVoiceIndexState = atom<number>({
  key: 'synthesis-voice-index',
  default: -1,
});

const useSynthesisVoiceIndex = () => {
  const [synthesisVoiceIndex, setSynthesisVoiceIndex] = useRecoilState(synthesisVoiceIndexState);
  return { synthesisVoiceIndex, setSynthesisVoiceIndex };
};

const synthesisVoiceOptionsState = atom<synthesisVoiceModel[]>({
  key: 'synthesis-voice-options',
  default: [],
});

const useSynthesisVoiceOptions = () => {
  const [synthesisVoiceOptions, setSynthesisVoiceOptions] = useRecoilState(
    synthesisVoiceOptionsState,
  );
  return { synthesisVoiceOptions, setSynthesisVoiceOptions };
};

const synthesisVoiceSelectedState = selector({
  key: 'synthesis-voice-selected',
  get: ({ get }) => {
    const selectedVoiceIndex = get(synthesisVoiceIndexState);
    const voiceOptions = get(synthesisVoiceOptionsState);
    if (selectedVoiceIndex === -1) {
      return {
        name: '',
        gender: 'all',
        locale: 'all',
        shortCode: '',
        voices: [],
        pitchRange: [0.5, 1.5],
        speedRange: [0.5, 1.5],
      };
    } else {
      return voiceOptions[selectedVoiceIndex];
    }
  },
});

const synthesisPitchState = atom<number>({
  key: 'synthesis-pitch',
  default: 1,
});

const useSynthesisPitch = () => {
  const [synthesisPitch, setSynthesisPitch] = useRecoilState(synthesisPitchState);
  return { synthesisPitch, setSynthesisPitch };
};

const synthesisSpeedState = atom<number>({
  key: 'synthesis-speed',
  default: 1,
});

const useSynthesisSpeed = () => {
  const [synthesisSpeed, setSynthesisSpeed] = useRecoilState(synthesisSpeedState);
  return { synthesisSpeed, setSynthesisSpeed };
};

const synthesisMapFilterState = atom({
  key: 'synthesis-map-filter',
  default: 'all',
});

const useSynthesisMapFilter = () => {
  const [synthesisMapFilter, setSynthesisMapFilter] = useRecoilState(synthesisMapFilterState);
  return { synthesisMapFilter, setSynthesisMapFilter };
};

const synthesisModeFilterState = atom({
  key: 'synthesis-mode-filter',
  default: 'all',
});

const synthesisGenderFilterState = atom({
  key: 'synthesis-gender-filter',
  default: 'all',
});

const useSynthesisGenderFilter = () => {
  const [synthesisGenderFilter, setSynthesisGenderFilter] = useRecoilState(
    synthesisGenderFilterState,
  );
  return { synthesisGenderFilter, setSynthesisGenderFilter };
};

const filteredSynthesisVoiceOptionsState = selector({
  key: 'filtered-synthesis-voice-options',
  get: ({ get }) => {
    const list = get(synthesisVoiceOptionsState);
    const mapState = get(synthesisMapFilterState);
    const genderState = get(synthesisGenderFilterState);
    const modeState = get(synthesisModeFilterState);

    const filterMap = (l) => {
      switch (mapState) {
        case 'Donegal':
          return l.filter((item) => item.locale === 'Ulster');
        case 'Galway':
          return l.filter((item) => item.locale === 'Connemara');
        case 'Kerry':
          return l.filter((item) => item.locale === 'Munster');
        default:
          return l;
      }
    };

    const filterGender = (l) => {
      switch (genderState) {
        case 'male':
          return l.filter((item) => item.gender === 'male');
        case 'female':
          return l.filter((item) => item.gender === 'female');
        case 'neutral':
          return l.filter((item) => item.gender === 'neutral');
        default:
          return l;
      }
    };

    const filterMode = (l) => {
      switch (modeState) {
        case 'HTS':
          return l.filter((item) => item.mode === 'HTS');
        case 'DNN':
          return l.filter((item) => item.mode === 'DNN');
        case 'neutral':
          return l.filter((item) => item.mode === 'neutral');
        default:
          return l;
      }
    };

    const filteredMap = filterMap(list);
    const filteredGender = filterGender(filteredMap);
    const filteredMode = filterMode(filteredGender);
    return filteredMode;
  },
});

export {
  filteredSynthesisVoiceOptionsState,
  useSynthesisVoiceIndex,
  useSynthesisVoiceOptions,
  useSynthesisMapFilter,
  synthesisMapFilterState,
  useSynthesisGenderFilter,
  useSynthesisPitch,
  useSynthesisSpeed,
  synthesisVoiceSelectedState,
  synthesisVoiceIndexState,
};

export type { synthesisVoiceModel };
