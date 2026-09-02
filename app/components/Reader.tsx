import React from 'react';

interface ReaderProps {
    currentTitle: string;
    currentDescription: string;
    currentPrayers: any[];
    fontSize: number;
    isDarkMode: boolean;
    onFavoriteClick: () => void;
}

export const Reader: React.FC<ReaderProps> = ({
    currentTitle,
    currentDescription,
    currentPrayers,
    fontSize,
    isDarkMode,
    onFavoriteClick
}) => {
    return (
        <div className={`flex-grow bg-white dark:bg-zinc-900 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-amber-100 dark:border-zinc-800 flex flex-col justify-between`}>
            <div>
                <div className="flex justify-between items-start mb-6 border-b border-amber-100 dark:border-zinc-800 pb-4">
                    <div className="flex-1">
                        <span className="text-xs bg-amber-100 dark:bg-zinc-800 text-amber-800 dark:text-amber-400 px-2.5 py-1 rounded-full font-medium inline-block mb-2">
                            {currentDescription || 'บทสวดมนต์'}
                        </span>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-900 dark:text-amber-300 line-clamp-2">
                            {currentTitle}
                        </h2>
                    </div>
                    <button
                        onClick={onFavoriteClick}
                        className="text-2xl text-amber-500 hover:scale-110 transition p-1 ml-2 flex-shrink-0"
                        title="บันทึกบทโปรด"
                    >
                        ⭐
                    </button>
                </div>

                {/* Prayer Content */}
                <div className="space-y-6">
                    {currentPrayers.length > 0 ? (
                        currentPrayers.map((prayer: any, idx: number) => (
                            <div key={idx} className="space-y-3">
                                <h3
                                    style={{ fontSize: `${fontSize + 4}px` }}
                                    className="font-semibold text-amber-800 dark:text-amber-400"
                                >
                                    {prayer.title}
                                </h3>
                                <div
                                    style={{ fontSize: `${fontSize}px` }}
                                    className="space-y-4 leading-relaxed text-zinc-700 dark:text-zinc-300 transition-all duration-200"
                                    dangerouslySetInnerHTML={{ __html: prayer.htmlContent }}
                                />
                                {idx < currentPrayers.length - 1 && (
                                    <hr className="my-6 border-amber-100 dark:border-zinc-800" />
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-zinc-400">ยังไม่มีบทสวดมนต์</p>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 pt-4 border-t border-amber-100 dark:border-zinc-800">
                <div className="text-center text-sm text-zinc-400 font-medium">
                    {currentTitle}
                </div>
            </div>
        </div>
    );
};
