import React from 'react';

interface QAHeaderProps {
    onClose: () => void;
}

export const QAHeader: React.FC<QAHeaderProps> = ({ onClose }) => {
    return (
        <div className="sticky top-0 bg-blue-600 text-white p-6 rounded-t-3xl">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">❓ คำถาม & คำตอบ เกี่ยวกับสมาธิ</h2>
                <button
                    onClick={onClose}
                    className="text-2xl hover:opacity-80"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};
