import {
  useSynthesisGender,
  useSynthesisMode,
  useSynthesisPitch,
  useSynthesisSpeed,
} from '@/store/synthesis';

import { AbRadioGroupModel } from './types';

const CreateOptions = () => {
  const { synthesisGender, setSynthesisGender } = useSynthesisGender();
  const { synthesisMode, setSynthesisMode } = useSynthesisMode();
  const { synthesisPitch, setSynthesisPitch } = useSynthesisPitch();
  const { synthesisSpeed, setSynthesisSpeed } = useSynthesisSpeed();

  const synthesisProps: AbRadioGroupModel[] = [
    {
      name: 'gender',
      getter: synthesisGender,
      setter: setSynthesisGender,
      options: ['male', 'female'],
    },
    {
      name: 'mode',
      getter: synthesisMode,
      setter: setSynthesisMode,
      options: ['DNN', 'HTS'],
    },
    {
      name: 'pitch',
      getter: synthesisPitch,
      setter: setSynthesisPitch,
      options: ['very low', 'low', 'normal', 'high', 'very high'],
    },
    {
      name: 'speed',
      getter: synthesisSpeed,
      setter: setSynthesisSpeed,
      options: ['very slow', 'slow', 'normal', 'fast', 'very fast'],
    },
  ];

  return synthesisProps;
};

export default CreateOptions;
