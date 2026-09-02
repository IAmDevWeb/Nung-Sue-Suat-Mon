import { Ceremony } from '../types/prayer';

export const ceremonies: Ceremony[] = [
    {
        id: 'funeral-chanting',
        title: 'บทสวดในพิธีศพ',
        description: 'บทสวดมนต์เพื่อส่งเสริมความสุขให้กับผู้ที่เสียชีวิต และแผ่ส่วนบุญให้ผู้ที่เสียชีวิต',
        category: 'funeral',
        categoryThai: 'พิธีศพ',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'namo-tassa', order: 2 },
            { prayerId: 'tisarana', order: 3 },
            { prayerId: 'metta-chanting', order: 4 },
            { prayerId: 'merit-dedication', order: 5 }
        ]
    },
    {
        id: 'merit-dedication',
        title: 'บทสวดถวายพรพระและแผ่ส่วนบุญ',
        description: 'บทสวดมนต์เพื่อถวายพรให้แก่พระสงฆ์ และแผ่ส่วนบุญให้ญาติที่ยังชีวิต',
        category: 'merit',
        categoryThai: 'ถวายพรและแผ่ส่วนบุญ',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'namo-tassa', order: 2 },
            { prayerId: 'blessing-chant', order: 3 },
            { prayerId: 'metta-chanting', order: 4 },
            { prayerId: 'merit-dedication', order: 5 }
        ]
    },
    {
        id: 'cloth-dedication',
        title: 'บทสวดการพิธีทำผ้าใหม่',
        description: 'บทสวดมนต์ในพิธีทำผ้าใหม่สำหรับพระสงฆ์ และสละผ้าเก่า',
        category: 'fabric',
        categoryThai: 'พิธีผ้า',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'tisarana', order: 2 },
            { prayerId: 'precepts-five', order: 3 },
            { prayerId: 'blessing-chant', order: 4 },
            { prayerId: 'merit-dedication', order: 5 }
        ]
    },
    {
        id: 'pariwat-ceremony',
        title: 'บทสวดปริวาสกรรม',
        description: 'บทสวดมนต์ในพิธีปริวาสกรรม เพื่อขอพรให้ผู้บวช เป็นสุข และบำรุงจิตใจ',
        category: 'dedication',
        categoryThai: 'ปริวาสกรรม',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'namo-tassa', order: 2 },
            { prayerId: 'victory-buddha', order: 3 },
            { prayerId: 'precepts-eight', order: 4 },
            { prayerId: 'metta-chanting', order: 5 },
            { prayerId: 'merit-dedication', order: 6 }
        ]
    },
    {
        id: 'consecration',
        title: 'บทสวดพิธีปลุกเสกของต่างๆ',
        description: 'บทสวดมนต์ในพิธีปลุกเสก วัตถุบูชา ประกาศนียบัตร ตราประทับ และสิ่งศักดิ์สิทธิ์ต่างๆ',
        category: 'consecration',
        categoryThai: 'พิธีปลุกเสก',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'tisarana', order: 2 },
            { prayerId: 'anahong', order: 3 },
            { prayerId: 'blessing-chant', order: 4 },
            { prayerId: 'metta-chanting', order: 5 },
            { prayerId: 'merit-dedication', order: 6 }
        ]
    },
    {
        id: 'sick-chanting',
        title: 'บทสวดให้คนป่วยฟัง',
        description: 'บทสวดมนต์เพื่อให้กำลังใจและบรรเทาทุกข์แก่ผู้ป่วย ขอให้หายป่วยโดยเร็ว',
        category: 'sick',
        categoryThai: 'สวดให้คนป่วย',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'chin-banchon', order: 2 },
            { prayerId: 'metta-chanting', order: 3 },
            { prayerId: 'blessing-chant', order: 4 },
            { prayerId: 'merit-dedication', order: 5 }
        ]
    },
    {
        id: 'ordination-ceremony',
        title: 'บทสวดในพิธีบวช',
        description: 'บทสวดมนต์ในพิธีบวชพระ เพื่อเป็นพยักษ์และส่งเสริมการบวชให้สำเร็จ',
        category: 'ordination',
        categoryThai: 'พิธีบวช',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'namo-tassa', order: 2 },
            { prayerId: 'tisarana', order: 3 },
            { prayerId: 'precepts-eight', order: 4 },
            { prayerId: 'victory-buddha', order: 5 },
            { prayerId: 'metta-chanting', order: 6 },
            { prayerId: 'merit-dedication', order: 7 }
        ]
    },
    {
        id: 'food-dedication',
        title: 'บทสวดก่อนรับประทานอาหาร',
        description: 'บทสวดมนต์ก่อนรับประทานอาหาร เพื่อขอบคุณผู้ให้ และขอให้บริโภคอาหารอย่างเหมาะสม',
        category: 'other',
        categoryThai: 'บทก่อนอาหาร',
        prayers: [
            { prayerId: 'dedicate-food', order: 1 },
            { prayerId: 'metta-chanting', order: 2 },
            { prayerId: 'merit-dedication', order: 3 }
        ]
    },
    {
        id: 'morning-aspiration',
        title: 'บทอธิฐานที่เช้าวัน',
        description: 'บทสวดอธิฐานในตอนเช้า เพื่อตั้งจิตใจและสัญญาว่าจะทำความดีในวันนั้น',
        category: 'other',
        categoryThai: 'บทอธิฐาน',
        prayers: [
            { prayerId: 'morning-prayer', order: 1 },
            { prayerId: 'precepts-five', order: 2 },
            { prayerId: 'anahong', order: 3 },
            { prayerId: 'metta-chanting', order: 4 },
            { prayerId: 'merit-dedication', order: 5 }
        ]
    },
    {
        id: 'alms-aspiration',
        title: 'บทอธิฐานบาตร',
        description: 'บทสวดอธิฐานเมื่อประกาศนียบัตรบาตร เพื่อให้ผู้ให้บาตรได้บุญเต็มเปี่ยม',
        category: 'other',
        categoryThai: 'บทอธิฐานบาตร',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'blessing-chant', order: 2 },
            { prayerId: 'metta-chanting', order: 3 },
            { prayerId: 'merit-dedication', order: 4 }
        ]
    }
];
