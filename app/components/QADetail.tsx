import React from 'react';

interface QADetailProps {
    question: string;
    answer: string;
    category: string;
    isDarkMode?: boolean;
}

export const QADetail: React.FC<QADetailProps> = ({ question, answer, category, isDarkMode }) => {
    return (
        <div className={`${isDarkMode ? 'bg-zinc-800' : 'bg-white'} p-6 overflow-y-auto flex-1`}>
            <div className="mb-4">
                <span className={`inline-block ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} text-xs font-semibold px-3 py-1 rounded-full`}>
                    {category}
                </span>
            </div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>{question}</h3>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed whitespace-pre-wrap`}>
                {answer}
            </div>
        </div>
    );
};
