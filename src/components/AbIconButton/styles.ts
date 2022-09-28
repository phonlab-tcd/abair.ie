// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// import StopIcon from '@mui/icons-material/Stop';
import { IconButtonItem } from './types';

const CreateItem = () => {
  const styles: { [name: string]: IconButtonItem } = {
    record: {
      backgroundColor: 'background.default',
      backgroundHoverColor: 'secondary.main',
      hoverColor: 'background.default',
      iconColour: 'secondary.main',
      marginSmall: 2,
      marginXSmall: 1,
      border: 1,
      fontSize: 'large',
      padding: 1,
    },
    stop: {
      backgroundColor: 'background.default',
      backgroundHoverColor: 'warning.main',
      hoverColor: 'background.default',
      iconColour: 'warning.main',
      marginSmall: 2,
      marginXSmall: 1,
      border: 1,
      fontSize: 'large',
      padding: 1,
    },
    correct: {
      backgroundColor: 'rgba(0,0,0,0)',
      backgroundHoverColor: 'rgba(0,0,0,0)',
      hoverColor: 'primary.dark',
      iconColour: 'primary.main',
      marginSmall: 0,
      marginXSmall: 0,
      border: 0,
      fontSize: 'large',
      padding: 1,
    },
    incorrect: {
      backgroundColor: 'rgba(0,0,0,0)',
      backgroundHoverColor: 'rgba(0,0,0,0)',
      hoverColor: 'warning.dark',
      iconColour: 'warning.main',
      marginSmall: 0,
      marginXSmall: 0,
      border: 0,
      fontSize: 'large',
      padding: 0,
    },
    genderUnselected: {
      backgroundColor: 'info',
      backgroundHoverColor: 'info',
      hoverColor: 'secondary.dark',
      iconColour: 'secondary.light',
      marginSmall: 1,
      marginXSmall: 1,
      border: 0,
      fontSize: 'large',
      padding: 1,
    },
    genderHighlighted: {
      backgroundColor: 'info',
      backgroundHoverColor: 'info',
      hoverColor: 'secondary.dark',
      iconColour: 'secondary.main',
      marginSmall: 1,
      marginXSmall: 1,
      border: 0,
      fontSize: 'large',
      padding: 1,
    },
    genderSelected: {
      backgroundColor: 'info',
      backgroundHoverColor: 'info',
      hoverColor: 'secondary.dark',
      iconColour: 'secondary.dark',
      marginSmall: 1,
      marginXSmall: 1,
      border: 0,
      fontSize: 'large',
      padding: 1,
    },
    editGreen: {
      backgroundColor: 'rgba(0,0,0,0)',
      backgroundHoverColor: 'rgba(0,0,0,0)',
      hoverColor: 'primary.dark',
      iconColour: 'primary.main',
      marginSmall: 1,
      marginXSmall: 1,
      border: 0,
      fontSize: 'medium',
      padding: 0,
    },
    editRed: {
      backgroundColor: 'rgba(0,0,0,0)',
      backgroundHoverColor: 'rgba(0,0,0,0)',
      hoverColor: 'warning.dark',
      iconColour: 'warning.main',
      marginSmall: 1,
      marginXSmall: 1,
      border: 0,
      fontSize: 'medium',
      padding: 0,
    },
  };

  return styles;
};

export default CreateItem;
