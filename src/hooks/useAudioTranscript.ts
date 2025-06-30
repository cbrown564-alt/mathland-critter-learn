import * as React from "react";

export interface TranscriptWindow {
  start: number;
  end: number;
}

export const useAudioTranscript = (transcript?: string[], audioDuration: number = 0) => {
  const audioRef = React.useRef<any>(null);
  const [currentTranscriptIdx, setCurrentTranscriptIdx] = React.useState(0);

  // Helper: calculate word-based time windows for transcript
  const getTranscriptTimeWindows = React.useCallback((transcript: string[], audioDuration: number): TranscriptWindow[] => {
    if (!transcript || transcript.length === 0 || audioDuration === 0) return [];
    const wordCounts = transcript.map(p => p.split(/\s+/).length);
    const totalWords = wordCounts.reduce((a, b) => a + b, 0);
    let acc = 0;
    return wordCounts.map((count, i) => {
      const start = (acc / totalWords) * audioDuration;
      acc += count;
      const end = (acc / totalWords) * audioDuration;
      return { start, end };
    });
  }, []);

  const handleAudioTimeUpdate = React.useCallback(() => {
    if (!audioRef.current || !transcript) return;
    const currentTime = audioRef.current?.audio?.current?.currentTime || 0;
    const windows = getTranscriptTimeWindows(transcript, audioDuration);
    const idx = windows.findIndex(w => currentTime >= w.start && currentTime < w.end);
    setCurrentTranscriptIdx(idx === -1 ? transcript.length - 1 : idx);
  }, [transcript, audioDuration, getTranscriptTimeWindows]);

  // Attach timeupdate event for smooth transcript sync
  React.useEffect(() => {
    const audioEl = audioRef.current?.audio?.current;
    if (!audioEl) return;
    const update = () => handleAudioTimeUpdate();
    audioEl.addEventListener('timeupdate', update);
    return () => audioEl.removeEventListener('timeupdate', update);
  }, [audioRef.current, transcript, audioDuration, handleAudioTimeUpdate]);

  return {
    audioRef,
    currentTranscriptIdx,
    getTranscriptTimeWindows,
    handleAudioTimeUpdate
  };
};