import * as React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { LiveTranscript } from './LiveTranscript';
import { useAudioTranscript } from '../../hooks/useAudioTranscript';
import { Character } from '../../types/character';

interface LessonAudioPlayerProps {
  audioUrl: string;
  character: Character;
  transcript?: string[];
  onAudioLoaded?: () => void;
}

export const LessonAudioPlayer: React.FC<LessonAudioPlayerProps> = ({
  audioUrl,
  character,
  transcript,
  onAudioLoaded
}) => {
  const [audioDuration, setAudioDuration] = React.useState(0);
  const { 
    audioRef, 
    currentTranscriptIdx, 
    getTranscriptTimeWindows,
    handleAudioTimeUpdate 
  } = useAudioTranscript(transcript, audioDuration);

  const handleAudioLoaded = () => {
    const duration = audioRef.current?.audio?.current?.duration || 0;
    setAudioDuration(duration);
    onAudioLoaded?.();
  };

  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <img
          src={character.avatar}
          alt={character.name}
          className="w-16 h-16 rounded-full shadow-lg border-2 border-slate-200 bg-white object-cover"
          style={{ flexShrink: 0 }}
        />
        <div className="flex-1">
          <AudioPlayer
            src={audioUrl}
            ref={audioRef}
            onLoadedMetaData={handleAudioLoaded}
            showJumpControls={false}
            customAdditionalControls={[]}
            layout="horizontal"
            style={{ borderRadius: '0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          />
        </div>
      </div>

      {/* Live Transcript */}
      {transcript && transcript.length > 0 && (
        <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
          <h4 className="text-base font-semibold text-slate-700 mb-2">Transcript</h4>
          <LiveTranscript 
            transcript={transcript}
            currentTranscriptIdx={currentTranscriptIdx}
            getTranscriptTimeWindows={getTranscriptTimeWindows}
            audioDuration={audioDuration}
          />
        </div>
      )}
    </>
  );
};