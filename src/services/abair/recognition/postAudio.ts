// import { transcriptionModel } from '@/models/transcription';
import axios from 'axios';

import { recognitionURL } from '@/config';

// const postAudioBlob = async (blob: string | undefined, filename: string): transcriptionModel[] => {
const postAudio = (audioData: string | undefined, filename: string) => {
  axios({
    method: 'post',
    url: recognitionURL,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      recogniseBlob: audioData,
      userID: 0,
      sessionID: filename,
      developer: true,
    },
  })
    .then(function (response) {
      console.log('response.data:', response.data);
    })
    .catch(function (error) {
      alert('error:' + error);
      return 'problem';
    })
    .then(function () {
      console.log('recognition complete');
    });
};

export default postAudio;
