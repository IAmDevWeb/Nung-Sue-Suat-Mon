import React, { useState } from 'react';
import { QAItem, getQACategories, getQAByCategory, meditationQA } from '../data/meditation-qa';
import { QAHeader } from './QAHeader';
import { QACategoryFilter } from './QACategoryFilter';
import { QAList } from './QAList';
import { QADetail } from './QADetail';

interface MeditationQAProps {
    show: boolean;
    onClose: () => void;
    isDarkMode: boolean;
}

export const MeditationQA: React.FC<MeditationQAProps> = ({
    show,
    onClose,
    isDarkMode,
}) => {
    const [selectedQAId, setSelectedQAId] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    if (!show) return null;

    const categories = ['all', ...getQACategories()];
    const displayedQA = selectedCategory && selectedCategory !== 'all'
        ? getQAByCategory(selectedCategory)
        : meditationQA;
    const selectedQA = displayedQA.find((qa: QAItem) => qa.id === selectedQAId);

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4 overflow-y-auto ${isDarkMode ? 'dark' : ''}`}>
            <div className={`${isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white'} rounded-3xl shadow-2xl w-full max-w-3xl my-8 flex flex-col max-h-[90vh]`}>
                {/* Header */}
                <QAHeader onClose={onClose} />

                {/* Content */}
                {!selectedQAId ? (
                    <>
                        {/* Category Filter */}
                        <QACategoryFilter
                            categories={categories}
                            selectedCategory={selectedCategory || 'all'}
                            onCategoryChange={(category) =>
                                setSelectedCategory(category === 'all' ? null : category)
                            }
                            isDarkMode={isDarkMode}
                        />

                        {/* Q&A List */}
                        <QAList
                            items={displayedQA.map((qa: QAItem) => ({
                                id: qa.id,
                                question: qa.question,
                                category: qa.category,
                            }))}
                            selectedId={selectedQAId}
                            onSelect={setSelectedQAId}
                            isDarkMode={isDarkMode}
                        />
                    </>
                ) : selectedQA ? (
                    <>
                        <button
                            onClick={() => setSelectedQAId(null)}
                            className={`mx-6 mt-4 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition ${isDarkMode ? 'dark:text-blue-400' : ''}`}
                        >
                            ← กลับ
                        </button>
                        {/* Q&A Detail */}
                        <QADetail
                            question={selectedQA.question}
                            answer={selectedQA.answer}
                            category={selectedQA.category}
                            isDarkMode={isDarkMode}
                        />
                    </>
                ) : null}
            </div>
        </div>
    );
};
