import React from 'react';

interface MeditationTimerProps {
    show: boolean;
    onClose: () => void;
    meditationTime: number;
    isTimerRunning: boolean;
    onStartStop: () => void;
    onReset: () => void;
    isDarkMode: boolean;
    formatTime: (seconds: number) => string;
}

export const MeditationTimer: React.FC<MeditationTimerProps> = ({
    show,
    onClose,
    meditationTime,
    isTimerRunning,
    onStartStop,
    onReset,
    isDarkMode,
    formatTime
}) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
            <div className={`${isDarkMode ? 'bg-zinc-900' : 'bg-white'} rounded-3xl shadow-2xl p-8 max-w-md w-full`}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-300 mb-2">🧘 นั่งสมาธิ</h2>
                    <p className={`text-sm ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'} mb-8`}>
                        เวลา 5 นาที
                    </p>

                    {/* Timer Display */}
                    <div className="mb-8 p-8 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800 rounded-2xl">
                        <div className="text-6xl font-bold text-amber-900 dark:text-amber-100 font-mono">
                            {formatTime(meditationTime)}
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6 bg-amber-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-amber-600 h-full transition-all duration-300"
                            style={{ width: `${((300 - meditationTime) / 300) * 100}%` }}
                        ></div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mb-4">
                        <button
                            onClick={onStartStop}
                            className={`flex-1 py-3 rounded-xl font-bold text-white transition ${
                                isTimerRunning
                                    ? 'bg-red-600 hover:bg-red-700'
                                    : 'bg-green-600 hover:bg-green-700'
                            }`}
                        >
                            {isTimerRunning ? '⏸ หยุด' : '▶ เริ่ม'}
                        </button>
                        <button
                            onClick={onReset}
                            className="flex-1 py-3 rounded-xl font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900 hover:bg-amber-200 dark:hover:bg-amber-800 transition"
                        >
                            ↻ รีเซ็ต
                        </button>
                    </div>

                    <button
                        onClick={onClose}
                        className={`w-full py-3 rounded-xl font-bold transition ${
                            isDarkMode
                                ? 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700'
                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                    >
                        ปิด
                    </button>
                </div>
            </div>
        </div>
    );
};
