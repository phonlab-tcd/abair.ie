interface transcriptionModel {
  id?: number | undefined;
  created_at?: string;
  user: string | null;
  session_start: string;
  correct?: boolean | null;
  correction: string;
  corrected?: boolean;
  audio_file_path: string;
  duration: number;
  recognition_response: recognitionTranscriptionModel;
}

interface recognitionTranscriptionModel {
  id: string;
  test_model: recognitionModel;
}

interface recognitionModel {
  id: string;
  status: number;
  hypotheses: hypothesesModel[];
}

interface hypothesesModel {
  utterance: string;
}

export type { transcriptionModel };
