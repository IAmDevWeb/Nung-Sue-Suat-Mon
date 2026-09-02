import React from 'react';

interface QAItem {
    id: string;
    question: string;
    category: string;
}

interface QAListProps {
    items: QAItem[];
    selectedId: string | null;
    onSelect: (id: string) => void;
    isDarkMode?: boolean;
}

export const QAList: React.FC<QAListProps> = ({ items, selectedId, onSelect, isDarkMode }) => {
    return (
        <div className="flex-1 overflow-y-auto">
            <div className={`divide-y ${isDarkMode ? 'divide-zinc-700' : 'divide-gray-200'}`}>
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        className={`w-full text-left px-4 py-3 transition-colors ${selectedId === item.id
                                ? isDarkMode
                                    ? 'bg-blue-900 border-l-4 border-blue-400'
                                    : 'bg-blue-50 border-l-4 border-blue-600'
                                : isDarkMode
                                    ? 'hover:bg-zinc-800'
                                    : 'hover:bg-gray-100'
                            }`}
                    >
                        <p className={`font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{item.question}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};
