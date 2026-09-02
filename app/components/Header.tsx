import React from 'react';

interface HeaderProps {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
    onQAClick: () => void;
    onMeditationClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
    isDarkMode,
    setIsDarkMode,
    isSidebarOpen,
    setIsSidebarOpen,
    onQAClick,
    onMeditationClick
}) => {
    return (
        <header className="bg-amber-700 dark:bg-zinc-900 text-white shadow-md sticky top-0 z-50 border-b border-amber-800 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="md:hidden p-2 hover:bg-amber-600 rounded-lg transition"
                    >
                        <span className="text-xl">☰</span>
                    </button>
                    <span className="text-2xl md:text-3xl">📿</span>
                    <div className="hidden sm:block">
                        <h1 className="text-lg md:text-xl font-bold tracking-wide">หนังสือสวดมนต์ธรรมะสติ</h1>
                        <p className="text-xs text-amber-200 dark:text-zinc-400">รวมบทสวดมนต์ทำวัตรและแผ่เมตตา</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={onQAClick}
                        className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition shadow"
                        title="Q&A สมาธิ"
                    >
                        <span className="text-xl">❓</span>
                    </button>
                    <button
                        onClick={onMeditationClick}
                        className="p-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white transition shadow"
                        title="นั่งสมาธิ"
                    >
                        <span className="text-xl">🧘</span>
                    </button>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2.5 rounded-full bg-amber-800 dark:bg-zinc-800 hover:bg-amber-900 dark:hover:bg-zinc-700 transition shadow"
                        title="เปลี่ยนโหมดสี"
                    >
                        <span className="text-xl">{isDarkMode ? '☀️' : '🌙'}</span>
                    </button>
                </div>
            </div>
        </header>
    );
};
