import { DailyPrayer } from '../types/prayer';

export const dailyPrayers: DailyPrayer[] = [
    {
        id: 'monday-prayer',
        title: 'บทสวดวันจันทร์',
        day: 'monday',
        dayThai: 'วันจันทร์',
        description: 'บทสวดมนต์ประจำวันจันทร์ เพื่อสร้างสติและความรู้ สำคัญในการเรียนรู้',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'tisarana', order: 2 },
            { prayerId: 'namo-tassa', order: 3 },
            { prayerId: 'anahong', order: 4 },
            { prayerId: 'metta-chanting', order: 5 },
            { prayerId: 'merit-dedication', order: 6 }
        ]
    },
    {
        id: 'tuesday-prayer',
        title: 'บทสวดวันอังคาร',
        day: 'tuesday',
        dayThai: 'วันอังคาร',
        description: 'บทสวดมนต์ประจำวันอังคาร เพื่อสร้างกำลัง ความเข้มแข็ง และความกล้าหาญ',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'victory-buddha', order: 2 },
            { prayerId: 'chin-banchon', order: 3 },
            { prayerId: 'precepts-five', order: 4 },
            { prayerId: 'blessing-chant', order: 5 },
            { prayerId: 'metta-chanting', order: 6 },
            { prayerId: 'merit-dedication', order: 7 }
        ]
    },
    {
        id: 'wednesday-prayer',
        title: 'บทสวดวันพุธ',
        day: 'wednesday',
        dayThai: 'วันพุธ',
        description: 'บทสวดมนต์ประจำวันพุธ เพื่อสร้างปัญญา ความเข้าใจ และการคิดดี',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'namo-tassa', order: 2 },
            { prayerId: 'precepts-eight', order: 3 },
            { prayerId: 'anahong', order: 4 },
            { prayerId: 'tisarana', order: 5 },
            { prayerId: 'metta-chanting', order: 6 },
            { prayerId: 'merit-dedication', order: 7 }
        ]
    },
    {
        id: 'thursday-prayer',
        title: 'บทสวดวันพฤหัสบดี',
        day: 'thursday',
        dayThai: 'วันพฤหัสบดี',
        description: 'บทสวดมนต์ประจำวันพฤหัสบดี เพื่อสร้างความอยุติธรรม เมตตา และความเสียสละ',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'metta-chanting', order: 2 },
            { prayerId: 'forgiveness', order: 3 },
            { prayerId: 'precepts-five', order: 4 },
            { prayerId: 'blessing-chant', order: 5 },
            { prayerId: 'merit-dedication', order: 6 }
        ]
    },
    {
        id: 'friday-prayer',
        title: 'บทสวดวันศุกร์',
        day: 'friday',
        dayThai: 'วันศุกร์',
        description: 'บทสวดมนต์ประจำวันศุกร์ เพื่อสร้างสุข ความรื่นไร้ และการเพลิดเพลิน',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'tisarana', order: 2 },
            { prayerId: 'namo-tassa', order: 3 },
            { prayerId: 'victory-buddha', order: 4 },
            { prayerId: 'metta-chanting', order: 5 },
            { prayerId: 'blessing-chant', order: 6 },
            { prayerId: 'merit-dedication', order: 7 }
        ]
    },
    {
        id: 'saturday-prayer',
        title: 'บทสวดวันเสาร์',
        day: 'saturday',
        dayThai: 'วันเสาร์',
        description: 'บทสวดมนต์ประจำวันเสาร์ เพื่อสร้างคุณธรรม ความสำคัญ และการเสียสละ',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'precepts-eight', order: 2 },
            { prayerId: 'chin-banchon', order: 3 },
            { prayerId: 'anahong', order: 4 },
            { prayerId: 'forgiveness', order: 5 },
            { prayerId: 'metta-chanting', order: 6 },
            { prayerId: 'merit-dedication', order: 7 }
        ]
    },
    {
        id: 'sunday-prayer',
        title: 'บทสวดวันอาทิตย์',
        day: 'sunday',
        dayThai: 'วันอาทิตย์',
        description: 'บทสวดมนต์ประจำวันอาทิตย์ เพื่อสร้างความสำเร็จ ความปลอดภัย และพรสิ่งที่ดีงาม',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'namo-tassa', order: 2 },
            { prayerId: 'victory-buddha', order: 3 },
            { prayerId: 'blessing-chant', order: 4 },
            { prayerId: 'tisarana', order: 5 },
            { prayerId: 'metta-chanting', order: 6 },
            { prayerId: 'merit-dedication', order: 7 }
        ]
    }
];
