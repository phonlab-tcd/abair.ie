import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { transcriptionModel } from '@/models/transcription';
import AbRecognitionButtonsCtrl from '@/sections/AbRecognitionButtonsCtrl';
import AbRecognitionCtrl from '@/sections/AbRecognitionCtrl';
import AbRecognitionTextFieldCtrl from '@/sections/AbRecognitionTextFieldCtrl/AbRecognitionTextFieldCtrl';
import deleteTranscription from '@/services/supabase/transcriptions/deleteTranscription';
import { useTranscription, useTranscriptions } from '@/store/transcriptions';

import AbIconButton from '../../components/AbIconButton';
import { CenteredFlexBox } from '../../components/styled';

interface AbTranscriptionListItemCtrlProps {
  trans: transcriptionModel;
}

const AbTranscriptionListItemCtrl = ({ trans }: AbTranscriptionListItemCtrlProps) => {
  const { transcription, setTranscription } = useTranscription();
  const { transcriptions, setTranscriptions } = useTranscriptions();

  const handleClick = (t: transcriptionModel) => {
    if (transcription?.id !== t.id) {
      setTranscription(t);
    } else {
      setTranscription(undefined);
    }
  };

  const handleDelete = (id: number | undefined) => {
    id !== undefined
      ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deleteTranscription(id).then((res) => {
          setTranscriptions(transcriptions.filter((t: transcriptionModel) => t.id !== id));
        })
      : alert("can't delete undefined");
  };

  return (
    <Accordion
      expanded={trans.id === transcription?.id ? true : false}
      elevation={0}
      sx={{
        borderRadius: 3,
        border: 1,
        borderColor: 'warning.light',
        py: 0,
        backgroundColor: 'warning.wafer',
        color: '#000',
      }}
      onChange={() => {
        handleClick(trans);
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box>
          {trans.recognition_response
            .map(({ utterance }) => utterance)
            .map((t, i) => (
              <Box key={i}>
                <Typography>
                  model {i + 1}. &quot;<i>{t}</i>&quot;
                </Typography>
              </Box>
            ))}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <AbRecognitionCtrl
          textbox={<AbRecognitionTextFieldCtrl rows={4} />}
          buttons={<AbRecognitionButtonsCtrl />}
        />
      </AccordionDetails>
      <CenteredFlexBox>
        <AbIconButton
          variation="gray"
          handleClick={() => {
            handleDelete(trans.id);
          }}
          icon={DeleteIcon}
        />
      </CenteredFlexBox>
    </Accordion>
  );
};

export default AbTranscriptionListItemCtrl;
