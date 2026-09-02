// Core Prayer Type
export interface CorePrayer {
    id: string;
    title: string;
    paliText: string;
    htmlContent: string;
    meaning?: string;
}

// Prayer Reference (used in routines/ceremonies)
export interface PrayerReference {
    prayerId: string;
    order: number;
    title?: string; // optional override title
}

// Routine (Morning, Evening, 2pm)
export interface Routine {
    id: string;
    title: string;
    description: string;
    category: 'morning' | 'evening' | '2pm';
    prayers: PrayerReference[];
}

// Daily Prayer (Monday - Sunday)
export interface DailyPrayer {
    id: string;
    title: string;
    day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    dayThai: string;
    description?: string;
    prayers: PrayerReference[];
}

// Ceremony/Special Event
export interface Ceremony {
    id: string;
    title: string;
    description: string;
    category: 'funeral' | 'merit' | 'fabric' | 'dedication' | 'consecration' | 'sick' | 'ordination' | 'other';
    categoryThai: string;
    prayers: PrayerReference[];
}

// Main data structure
export interface PrayerAppData {
    corePrayers: CorePrayer[];
    routines: Routine[];
    dailyPrayers: DailyPrayer[];
    ceremonies: Ceremony[];
}

// UI View Type
export type ViewType = 'core' | 'routine' | 'daily' | 'ceremony';
