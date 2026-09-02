import React from 'react';
import { ViewType } from '../types/prayer';

interface SidebarProps {
    viewType: ViewType;
    setViewType: (type: ViewType) => void;
    setSelectedId: (id: string) => void;
    isSidebarOpen: boolean;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    fontSize: number;
    setFontSize: (size: number) => void;
    isDarkMode: boolean;
    selectedId: string;
    filteredItems: any[];
    corePrayersCount: number;
    onBellClick: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
    viewType,
    setViewType,
    setSelectedId,
    isSidebarOpen,
    searchTerm,
    setSearchTerm,
    fontSize,
    setFontSize,
    isDarkMode,
    selectedId,
    filteredItems,
    corePrayersCount,
    onBellClick
}) => {
    const getTitle = () => {
        switch (viewType) {
            case 'routine':
                return 'วัตรสวดมนต์';
            case 'daily':
                return 'บทสวดประจำวัน';
            case 'ceremony':
                return 'พิธีและงานพิเศษ';
            case 'core':
            default:
                return `บทสวดแกนหลัก (${corePrayersCount} บท)`;
        }
    };

    return (
        <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block lg:w-80 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-sm border border-amber-100 dark:border-zinc-800 h-fit flex flex-col`}>
            {/* View Type Tabs */}
            <div className="mb-4 flex flex-wrap gap-2">
                <button
                    onClick={() => {
                        setViewType('routine');
                        setSelectedId('morning-routine');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                        viewType === 'routine'
                            ? 'bg-amber-600 text-white'
                            : 'bg-amber-100 dark:bg-zinc-800 hover:bg-amber-200 dark:hover:bg-zinc-700'
                    }`}
                >
                    วัตร
                </button>
                <button
                    onClick={() => {
                        setViewType('daily');
                        setSelectedId('monday-prayer');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                        viewType === 'daily'
                            ? 'bg-amber-600 text-white'
                            : 'bg-amber-100 dark:bg-zinc-800 hover:bg-amber-200 dark:hover:bg-zinc-700'
                    }`}
                >
                    ประจำวัน
                </button>
                <button
                    onClick={() => {
                        setViewType('ceremony');
                        setSelectedId('funeral-chanting');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                        viewType === 'ceremony'
                            ? 'bg-amber-600 text-white'
                            : 'bg-amber-100 dark:bg-zinc-800 hover:bg-amber-200 dark:hover:bg-zinc-700'
                    }`}
                >
                    พิธี
                </button>
                <button
                    onClick={() => {
                        setViewType('core');
                        setSelectedId('phra-ratanantrai');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                        viewType === 'core'
                            ? 'bg-amber-600 text-white'
                            : 'bg-amber-100 dark:bg-zinc-800 hover:bg-amber-200 dark:hover:bg-zinc-700'
                    }`}
                >
                    บท
                </button>
            </div>

            <h2 className="text-lg font-semibold mb-3 text-amber-800 dark:text-amber-400 border-b pb-2 border-amber-100 dark:border-zinc-800">
                {getTitle()}
            </h2>

            {/* Search Input */}
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="ค้นหา..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-sm bg-amber-50 dark:bg-zinc-800 border border-amber-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-600 dark:text-zinc-100 placeholder-zinc-400"
                />
            </div>

            {/* Items List */}
            <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item: any) => (
                        <button
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition flex flex-col justify-between ${
                                selectedId === item.id
                                    ? 'bg-amber-700 text-white shadow-md'
                                    : 'hover:bg-amber-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                            }`}
                        >
                            <span className="font-medium line-clamp-2">{item.title}</span>
                            <span className={`text-[10px] mt-0.5 ${selectedId === item.id ? 'text-amber-200' : 'text-zinc-400'}`}>
                                {item.description?.substring(0, 40) ||
                                    item.dayThai ||
                                    item.categoryThai ||
                                    ''}
                            </span>
                        </button>
                    ))
                ) : (
                    <p className="text-sm text-zinc-400 text-center py-4">ไม่พบที่ค้นหา</p>
                )}
            </div>

            {/* Font Size Adjuster */}
            <div className="mt-5 pt-4 border-t border-amber-100 dark:border-zinc-800">
                <h3 className="text-sm font-medium mb-2 text-zinc-500 dark:text-zinc-400">ขนาดตัวอักษร</h3>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                        className="flex-1 bg-amber-100 dark:bg-zinc-800 hover:bg-amber-200 dark:hover:bg-zinc-700 py-1.5 rounded-lg text-sm font-medium transition"
                    >
                        A-
                    </button>
                    <button
                        onClick={() => setFontSize(18)}
                        className="px-3 bg-amber-100 dark:bg-zinc-800 hover:bg-amber-200 dark:hover:bg-zinc-700 py-1.5 rounded-lg text-sm font-medium transition"
                    >
                        ค่าเริ่มต้น
                    </button>
                    <button
                        onClick={() => setFontSize(Math.min(28, fontSize + 2))}
                        className="flex-1 bg-amber-100 dark:bg-zinc-800 hover:bg-amber-200 dark:hover:bg-zinc-700 py-1.5 rounded-lg text-sm font-medium transition"
                    >
                        A+
                    </button>
                </div>
            </div>

            {/* Bell Button */}
            <div className="mt-4 pt-4 border-t border-amber-100 dark:border-zinc-800">
                <button
                    onClick={onBellClick}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-xl font-medium shadow transition flex items-center justify-center space-x-2"
                >
                    <span>🔔</span>
                    <span>ตีระฆังทำสมาธิ</span>
                </button>
            </div>
        </div>
    );
};
