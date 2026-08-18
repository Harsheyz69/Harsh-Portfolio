import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from "lucide-react";
import bitmoji from "../assets/bitmoji.png";

// Local playlist using renamed safe filenames
const PLAYLIST = [
  {
    title: "Lose My Mind (feat. Doja Cat)",
    url: "/music/track1.mp3"
  },
  {
    title: "On The Floor (Radio Edit)",
    url: "/music/track2.mp3"
  },
  {
    title: "Rakhlo Tum Chupaake",
    url: "/music/track3.mp3"
  },
  {
    title: "Running Up That Hill",
    url: "/music/track4.mp3"
  },
  {
    title: "Sunflower (Spider-Verse)",
    url: "/music/track5.mp3"
  }
];

const MusicPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef(null);
  const currentTrack = PLAYLIST[currentTrackIndex];

  // Handle Play/Pause
  const handlePlayPause = () => {
    if (!audioRef.current) return;
    
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed:", e));
    }
    setPlaying(!playing);
  };

  // Sync state when track changes
  useEffect(() => {
    if (playing && audioRef.current) {
      audioRef.current.play().catch(e => console.error("Playback failed on track change:", e));
    }
  }, [currentTrackIndex]); // removed playing from dependencies so it doesn't auto-trigger

  // Apply volume and mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Auto-play on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setPlaying(true);
      }).catch(e => console.error("Autoplay blocked:", e));
    }
  }, []);

  // Listen for terminal commands
  useEffect(() => {
    const handlePlayMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.error("Terminal play failed:", e));
        setPlaying(true);
      }
    };
    
    const handlePauseMusic = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setPlaying(false);
      }
    };
    
    const handleSyncMute = (e) => {
      setIsMuted(e.detail);
    };

    window.addEventListener('play-music', handlePlayMusic);
    window.addEventListener('pause-music', handlePauseMusic);
    window.addEventListener('sync-mute', handleSyncMute);
    
    return () => {
      window.removeEventListener('play-music', handlePlayMusic);
      window.removeEventListener('pause-music', handlePauseMusic);
      window.removeEventListener('sync-mute', handleSyncMute);
    };
  }, []);

  // Audio Event Listeners
  const onTimeUpdate = () => setCurrentTime(audioRef.current?.currentTime || 0);
  const onLoadedMetadata = () => setDuration(audioRef.current?.duration || 0);
  const onEnded = () => handleNext();

  // Controls
  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (vol > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    const newState = !isMuted;
    setIsMuted(newState);
    window.dispatchEvent(new CustomEvent('sync-mute', { detail: newState }));
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      className="p-5 rounded-2xl flex flex-col gap-5 transition-all duration-300"
      style={{
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
        boxShadow: playing ? '0 10px 30px -10px rgba(249,115,22,0.15)' : 'none'
      }}
    >
      {/* Native Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.url}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />

      <div className="flex items-center gap-4">
        {/* Cover Art (Animated Record) */}
        <div 
          className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden"
          style={{ 
            background: `url(${bitmoji}) center/cover no-repeat`, 
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            animation: playing ? 'spin 4s linear infinite' : 'none'
          }}
        >
          <div className="w-4 h-4 rounded-full" style={{ background: 'var(--bg)', border: '1px solid var(--border)', zIndex: 10 }} />
          {/* Inner ring */}
          <div className="absolute inset-0 rounded-full border-4 pointer-events-none" style={{ borderColor: 'rgba(249,115,22,0.1)', zIndex: 5 }} />
          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-heading font-semibold truncate" style={{ color: 'var(--text-1)' }}>
            {currentTrack.title}
          </h4>
          <p className="font-mono text-[11px] truncate mt-0.5" style={{ color: 'var(--text-3)' }}>
            Track {currentTrackIndex + 1} of {PLAYLIST.length}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button 
            onClick={handlePrev}
            className="p-1.5 rounded-full transition-colors"
            style={{ color: 'var(--text-2)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
          >
            <SkipBack size={18} fill="currentColor" />
          </button>
          
          <button
            onClick={handlePlayPause}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            style={{ background: 'var(--accent)', color: 'var(--bg)' }}
          >
            {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
          </button>
          
          <button 
            onClick={handleNext}
            className="p-1.5 rounded-full transition-colors"
            style={{ color: 'var(--text-2)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
          >
            <SkipForward size={18} fill="currentColor" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center gap-3 font-mono text-[10px]" style={{ color: 'var(--text-3)' }}>
        <span className="w-8 text-right">{formatTime(currentTime)}</span>
        
        <div className="relative flex-1 h-1.5 rounded-full group flex items-center" style={{ background: 'var(--border-strong)' }}>
          <input
            type="range"
            min={0}
            max={duration || 100}
            step="any"
            value={currentTime}
            onChange={handleSeek}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          {/* Filled bar */}
          <div 
            className="h-full rounded-full pointer-events-none transition-all duration-75"
            style={{ width: `${progressPercentage}%`, background: 'var(--accent)' }}
          />
          {/* Hover knob */}
          <div 
            className="absolute h-3 w-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md"
            style={{ left: `calc(${progressPercentage}% - 6px)` }}
          />
        </div>
        
        <span className="w-8">{formatTime(duration)}</span>

        {/* Volume Control */}
        <div className="flex items-center gap-2 ml-2">
          <button onClick={toggleMute} className="text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">
            {isMuted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <div className="relative w-12 h-1.5 rounded-full group flex items-center hidden sm:flex" style={{ background: 'var(--border-strong)' }}>
            <input
              type="range"
              min={0}
              max={1}
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div 
              className="h-full rounded-full pointer-events-none transition-all duration-75"
              style={{ width: `${(isMuted ? 0 : volume) * 100}%`, background: 'var(--text-2)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
