import React from 'react';

interface QACategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    isDarkMode?: boolean;
}

export const QACategoryFilter: React.FC<QACategoryFilterProps> = ({
    categories,
    selectedCategory,
    onCategoryChange,
    isDarkMode,
}) => {
    return (
        <div className={`${isDarkMode ? 'bg-zinc-800' : 'bg-gray-50'} p-4 border-b ${isDarkMode ? 'border-zinc-700' : 'border-gray-200'}`}>
            <p className={`text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>หมวดหมู่:</p>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                ? 'bg-blue-600 text-white'
                                : isDarkMode
                                    ? 'bg-zinc-700 text-gray-200 border border-zinc-600 hover:border-blue-400'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};
