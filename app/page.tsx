'use client';

import React, { useState, useEffect } from 'react';
import { corePrayers } from './data/core-prayers';
import { routines } from './data/routines';
import { dailyPrayers } from './data/daily-prayers';
import { ceremonies } from './data/ceremonies';
import { getRoutinePrayers, getDailyPrayerContent, getCeremonyPrayers } from './utils/prayer-helpers';
import { ViewType } from './types/prayer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Reader } from './components/Reader';
import { MeditationTimer } from './components/MeditationTimer';
import { MeditationQA } from './components/MeditationQA';

export default function App() {
    const [viewType, setViewType] = useState<ViewType>('routine');
    const [selectedId, setSelectedId] = useState<string>('morning-routine');
    const [fontSize, setFontSize] = useState<number>(18);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [showMeditationTimer, setShowMeditationTimer] = useState<boolean>(false);
    const [meditationTime, setMeditationTime] = useState<number>(300);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
    const [showMeditationQA, setShowMeditationQA] = useState<boolean>(false);

    // Toggle Dark Mode class on document root
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Meditation Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isTimerRunning && meditationTime > 0) {
            interval = setInterval(() => {
                setMeditationTime(prev => prev - 1);
            }, 1000);
        } else if (meditationTime === 0 && isTimerRunning) {
            setIsTimerRunning(false);
            playMeditationAlert();
            showToast("⏰ เวลา 5 นาทีครบแล้ว! 🧘");
        }

        return () => clearInterval(interval);
    }, [isTimerRunning, meditationTime]);

    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => {
            setToastMessage(null);
        }, 2000);
    };

    const playBell = () => {
        try {
            const audio = new Audio('/370507__craigmaloney__bell.wav');
            audio.volume = 0.8;
            audio.play().catch(e => console.log("Audio playback failed", e));
            showToast("ตีระฆังทำสมาธิแล้ว 🔔");
        } catch (e) {
            console.log("Audio not supported", e);
        }
    };

    const playMeditationAlert = () => {
        try {
            const audio = new Audio('/370507__craigmaloney__bell.wav');
            audio.volume = 0.8;
            audio.play().catch(e => console.log("Audio playback failed", e));
        } catch (e) {
            console.log("Audio not supported", e);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const resetMeditationTimer = () => {
        setMeditationTime(300);
        setIsTimerRunning(false);
    };

    // Get current view data
    const getCurrentViewItems = () => {
        switch (viewType) {
            case 'routine':
                return routines;
            case 'daily':
                return dailyPrayers;
            case 'ceremony':
                return ceremonies;
            case 'core':
            default:
                return corePrayers;
        }
    };

    const getCurrentPrayers = () => {
        switch (viewType) {
            case 'routine': {
                const prayers = getRoutinePrayers(selectedId);
                return prayers;
            }
            case 'daily': {
                const prayers = getDailyPrayerContent(selectedId);
                return prayers;
            }
            case 'ceremony': {
                const prayers = getCeremonyPrayers(selectedId);
                return prayers;
            }
            case 'core':
            default:
                return [corePrayers.find(p => p.id === selectedId)].filter(Boolean);
        }
    };

    const getCurrentTitle = () => {
        const items = getCurrentViewItems();
        const item = items.find((i: any) => i.id === selectedId);
        return item?.title || 'หนังสือสวดมนต์';
    };

    const getCurrentDescription = () => {
        const items = getCurrentViewItems();
        const item = items.find((i: any) => i.id === selectedId);
        return (item as any)?.description || (item as any)?.dayThai || (item as any)?.categoryThai || '';
    };

    // Filter items based on search
    const filterItems = (items: any[]) => {
        if (!searchTerm) return items;
        return items.filter(item =>
            item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.dayThai?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.categoryThai?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const viewItems = getCurrentViewItems();
    const filteredItems = filterItems(viewItems);
    const currentPrayers = getCurrentPrayers();
    const currentTitle = getCurrentTitle();
    const currentDescription = getCurrentDescription();

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-amber-50 text-zinc-800'}`}>

            {/* Header */}
            <Header
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                onQAClick={() => setShowMeditationQA(true)}
                onMeditationClick={() => setShowMeditationTimer(true)}
            />

            {/* Main Content Area */}
            <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">

                {/* Sidebar */}
                <Sidebar
                    viewType={viewType}
                    setViewType={setViewType}
                    setSelectedId={setSelectedId}
                    isSidebarOpen={isSidebarOpen}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    isDarkMode={isDarkMode}
                    selectedId={selectedId}
                    filteredItems={filteredItems}
                    corePrayersCount={corePrayers.length}
                    onBellClick={playBell}
                />

                {/* Reader Panel */}
                <Reader
                    currentTitle={currentTitle}
                    currentDescription={currentDescription}
                    currentPrayers={currentPrayers}
                    fontSize={fontSize}
                    isDarkMode={isDarkMode}
                    onFavoriteClick={() => showToast(`บันทึก "${currentTitle}" ในรายการโปรดแล้ว`)}
                />

            </main>

            {/* Meditation Timer Modal */}
            <MeditationTimer
                show={showMeditationTimer}
                onClose={() => {
                    setShowMeditationTimer(false);
                    resetMeditationTimer();
                }}
                meditationTime={meditationTime}
                isTimerRunning={isTimerRunning}
                onStartStop={() => {
                    if (!isTimerRunning) {
                        playMeditationAlert();
                    }
                    setIsTimerRunning(!isTimerRunning);
                }}
                onReset={resetMeditationTimer}
                isDarkMode={isDarkMode}
                formatTime={formatTime}
            />

            {/* Meditation Q&A Modal */}
            <MeditationQA
                show={showMeditationQA}
                onClose={() => setShowMeditationQA(false)}
                isDarkMode={isDarkMode}
            />

            {/* Footer */}
            <footer className="text-center py-4 text-xs text-zinc-500 dark:text-zinc-400">
                ขอให้ทุกท่านมีความสุขความเจริญ เจริญในธรรม 🙏
            </footer>

            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed bottom-5 right-5 bg-zinc-900 text-white px-4 py-2 rounded-xl shadow-lg transition-all duration-300 text-sm z-50">
                    {toastMessage}
                </div>
            )}

        </div>
    );
}
