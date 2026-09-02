export { corePrayers } from './core-prayers';
export { routines } from './routines';
export { dailyPrayers } from './daily-prayers';
export { ceremonies } from './ceremonies';

import { corePrayers } from './core-prayers';
import { routines } from './routines';
import { dailyPrayers } from './daily-prayers';
import { ceremonies } from './ceremonies';
import { PrayerAppData } from '../types/prayer';

export const prayerAppData: PrayerAppData = {
    corePrayers,
    routines,
    dailyPrayers,
    ceremonies
};

// Helper function to get a core prayer by ID
export const getCorePrayer = (id: string) => {
    return corePrayers.find(prayer => prayer.id === id);
};

// Helper function to get all prayers for a routine
export const getRoutinePrayers = (routineId: string) => {
    const routine = routines.find(r => r.id === routineId);
    if (!routine) return [];

    return routine.prayers.map(ref => {
        const prayer = getCorePrayer(ref.prayerId);
        return {
            ...prayer,
            order: ref.order,
            title: ref.title || prayer?.title
        };
    }).filter(Boolean);
};

// Helper function to get all prayers for a daily prayer
export const getDailyPrayerContent = (dailyId: string) => {
    const daily = dailyPrayers.find(d => d.id === dailyId);
    if (!daily) return [];

    return daily.prayers.map(ref => {
        const prayer = getCorePrayer(ref.prayerId);
        return {
            ...prayer,
            order: ref.order,
            title: ref.title || prayer?.title
        };
    }).filter(Boolean);
};

// Helper function to get all prayers for a ceremony
export const getCeremonyPrayers = (ceremonyId: string) => {
    const ceremony = ceremonies.find(c => c.id === ceremonyId);
    if (!ceremony) return [];

    return ceremony.prayers.map(ref => {
        const prayer = getCorePrayer(ref.prayerId);
        return {
            ...prayer,
            order: ref.order,
            title: ref.title || prayer?.title
        };
    }).filter(Boolean);
};

// Helper function to get routines by category
export const getRoutinesByCategory = (category: 'morning' | 'evening' | '2pm') => {
    return routines.filter(r => r.category === category);
};

// Helper function to get daily prayer by day
export const getDailyPrayerByDay = (day: string) => {
    return dailyPrayers.find(d => d.day === day);
};

// Helper function to get all ceremonies by category
export const getCeremoniesByCategory = (category: string) => {
    return ceremonies.filter(c => c.category === category);
};
