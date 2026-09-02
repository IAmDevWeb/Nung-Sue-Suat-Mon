import { Routine } from '../types/prayer';

export const routines: Routine[] = [
    {
        id: 'morning-routine',
        title: 'ทำวัตรเช้า',
        description: 'วัตรสวดมนต์ในตอนเช้า เพื่อเริ่มต้นวันใหม่ด้วยจิตใจสดชื่น',
        category: 'morning',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'namo-tassa', order: 2 },
            { prayerId: 'precepts-five', order: 3 },
            { prayerId: 'morning-prayer', order: 4 },
            { prayerId: 'victory-buddha', order: 5 },
            { prayerId: 'metta-chanting', order: 6 },
            { prayerId: 'merit-dedication', order: 7 }
        ]
    },
    {
        id: 'evening-routine',
        title: 'ทำวัตรเย็น',
        description: 'วัตรสวดมนต์ในตอนเย็น เพื่อตรวจสอบการกระทำและสวดมนต์ขอบัญชา',
        category: 'evening',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'namo-tassa', order: 2 },
            { prayerId: 'evening-prayer', order: 3 },
            { prayerId: 'forgiveness', order: 4 },
            { prayerId: 'precepts-five', order: 5 },
            { prayerId: 'metta-chanting', order: 6 },
            { prayerId: 'merit-dedication', order: 7 }
        ]
    },
    {
        id: 'two-pm-routine',
        title: 'ทำวัตร 2 ทุ่ม',
        description: 'วัตรสวดมนต์ในเวลา 2 ทุ่ม (8 โมงเย็น) เพื่อเตรียมจิตใจก่อนนอน',
        category: '2pm',
        prayers: [
            { prayerId: 'tisarana', order: 1 },
            { prayerId: 'precepts-eight', order: 2 },
            { prayerId: 'chin-banchon', order: 3 },
            { prayerId: 'anahong', order: 4 },
            { prayerId: 'metta-chanting', order: 5 },
            { prayerId: 'sleep-prayer', order: 6 },
            { prayerId: 'merit-dedication', order: 7 }
        ]
    }
];
