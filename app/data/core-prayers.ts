import { CorePrayer } from '../types/prayer';

export const corePrayers: CorePrayer[] = [
    {
        id: 'phra-ratanantrai',
        title: "บทบูชาพระรัตนตรัย",
        paliText: "อรหัง สัมมาสัมพุทโธ ภะคะวา, พุทธัง ภะคะวันตัง อภิวาเทมิ",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-2">(กราบ 3 ครั้ง)</p>
            <p class="mb-3">อรหัง สัมมาสัมพุทโธ ภะคะวา, พุทธัง ภะคะวันตัง อภิวาเทมิ. <span class="text-xs text-amber-600 dark:text-amber-500 block font-normal">(กราบ)</span></p>
            <p class="mb-3">สวากขาโต ภะคะวะตา ธัมโม, ธัมมัง นะมัสสามิ. <span class="text-xs text-amber-600 dark:text-amber-500 block font-normal">(กราบ)</span></p>
            <p class="mb-3">สุปฏิปันโน ภะคะวะโต สาวะกะสังโฆ, สังฆัง นะมามิ. <span class="text-xs text-amber-600 dark:text-amber-500 block font-normal">(กราบ)</span></p>
        `,
        meaning: "บูชา และนมัสการพระรัตนตรัย (พระพุทธเจ้า ธรรม สังฆ)"
    },
    {
        id: 'namo-tassa',
        title: "นมัสการพระพุทธเจ้า (นะโม 3 จบ)",
        paliText: "นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ",
        htmlContent: `
            <p class="font-medium text-amber-800 dark:text-amber-400 mb-4">(ตั้งนะโม 3 จบ)</p>
            <p class="font-bold text-lg mb-4 text-amber-900 dark:text-amber-300">นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ (๓ จบ)</p>
            <p class="mb-2">พุทธัง สะระณัง คัจฉามิ</p>
            <p class="mb-2">ธัมมัง สะระณัง คัจฉามิ</p>
            <p class="mb-2">สังฆัง สะระณัง คัจฉามิ</p>
            <p class="mb-2">ทุติยัมปิ พุทธัง สะระณัง คัจฉามิ</p>
            <p class="mb-2">ทุติยัมปิ ธัมมัง สะระณัง คัจฉามิ</p>
            <p class="mb-2">ทุติยัมปิ สังฆัง สะระณัง คัจฉามิ</p>
            <p class="mb-2">ตะติยัมปิ พุทธัง สะระณัง คัจฉามิ</p>
            <p class="mb-2">ตะติยัมปิ ธัมมัง สะระณัง คัจฉามิ</p>
            <p class="mb-2">ตะติยัมปิ สังฆัง สะระณัง คัจฉามิ</p>
        `,
        meaning: "นมัสการศรณที่พระรัตนตรัย 3 ครั้ง"
    },
    {
        id: 'precepts-five',
        title: "คำสมาทานศีล 5",
        paliText: "ปาณาติปาตา เวระมณี สิกขาปะทัง สมาทิยามิ",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">(สมาทานศีล 5)</p>
            <p class="mb-2">๑. ปาณาติปาตา เวระมณี สิกขาปะทัง สมาทิยามิ</p>
            <p class="mb-2">๒. อทินนาทานา เวระมณี สิกขาปะทัง สมาทิยามิ</p>
            <p class="mb-2">๓. กาเมสุมิจฉาจารา เวระมณี สิกขาปะทัง สมาทิยามิ</p>
            <p class="mb-2">๔. มุสาวาทา เวระมณี สิกขาปะทัง สมาทิยามิ</p>
            <p class="mb-2">๕. สุราเมระยะมัชชะปะมาทัฏฐานา เวระมณี สิกขาปะทัง สมาทิยามิ</p>
        `,
        meaning: "สัญญา 5 ประการ - ละเว้นการฆ่า ขโมย การไป การพูดเท็จ และเหล้า"
    },
    {
        id: 'victory-buddha',
        title: "บทพุทธชัยมงคลคาถา",
        paliText: "พาหุง สะหัสสะภินิมมิเต สาวุธันตัง",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">บทชัยมงคล</p>
            <p class="mb-3">พาหุง สะหัสสะภินิมมิเต สาวุธันตัง<br/>ครีเมขะลัง อุดิตโฆระสะเซนะมารัง<br/>ทานาดิเธมมะวิธินา จิตฺวา มุนินฺโด<br/>ตัน เตชะวะบาวะตุ เต ชะยะมังคะลานิ</p>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-4">(พระพุทธองค์ชนะพญามารด้วยบารมี ขอชัยมงคลจงมีแก่ท่าน)</p>
        `,
        meaning: "ขอให้ได้ชัยมงคลเหมือนพระพุทธเจ้า"
    },
    {
        id: 'chin-banchon',
        title: "คาถาชินบัญชร",
        paliText: "ชินะปัญชะระปริตตัง มังรักขะตุ สัพพะทา",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">(คาถาชินบัญชร)</p>
            <p class="mb-2">ชินะปัญชะระปริตตัง มังรักขะตุ สัพพะทา</p>
            <p class="mb-2">ปุตตกาโม ละเภปุตตัง ธะนกาโม ละเภธะนัง</p>
            <p class="mb-2">อัตถิกาเย กายะยะ เทวานัง ปิยะตัง สุตวา</p>
            <p class="mb-2">ิติติปิโส ภะคะวา ยะมะราชาโน ท้าวเวสสุวัณโณ</p>
            <p class="mb-2">มรณัง สุขัง อะหัง สุคะโต นโม พุทธายะ</p>
        `,
        meaning: "ป้องกันภัย ชินะ (ราชา) เป็นที่พึ่งใจ"
    },
    {
        id: 'metta-chanting',
        title: "บทสวดแผ่เมตตา",
        paliText: "สัพเพ สัตตา, สัททุรา โหนตุ",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">(แผ่เมตตา)</p>
            <p class="mb-3">สัพเพ สัตตา, สัททุรา โหนตุ, อะเวรา โหนตุ, อัพพะยาปัชฌา โหนตุ, อะนีฆา โหนตุ, สุขี อัตตานัง ปะริหะรันตุ.</p>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">สัตว์ทั้งหลายจงเป็นสุข อย่ามีเวร อย่าเบียดเบียน อย่ามีทุกข์ จงรักษาตนให้มีความสุข</p>
        `,
        meaning: "แผ่ปีติ เมตตา ให้สัตว์ทั้งปวง"
    },
    {
        id: 'merit-dedication',
        title: "บทแผ่ส่วนบุญส่วนกุศล",
        paliText: "อิทัง โน ญาตินัง โหตุ, สุขิตา โหนตุ ญาตโย",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">(แผ่ส่วนบุญ)</p>
            <p class="mb-3">อิทัง โน ญาตินัง โหตุ, สุขิตา โหนตุ ญาตโย.</p>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">ขอส่วนบุญนี้ จงสำเร็จแก่ญาติทั้งหลายของพวกเรา ขอญาติจงมีความสุข</p>
        `,
        meaning: "แผ่ส่วนบุญให้ญาติและผู้ที่เสียชีวิต"
    },
    {
        id: 'morning-prayer',
        title: "บทสวดมนต์ตอนเช้า",
        paliText: "พุทธโฺ สุสุทโฺโด กรุณามหโนศา",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">บทระลึกพระรัตนตรัย</p>
            <p class="mb-2">พุทธโฺ สุสุทโฺโด กรุณามหโนศา</p>
            <p class="mb-2">ธัมโฺโม ปะทีโฺโป สดุกะวโร</p>
            <p class="mb-2">สังโฺโฆ สุวุดฺฒิ ปุญญักเขตฺโต</p>
            <p class="mb-2">ตัง ตัง อาบันทามิ สีรสา อะหัง</p>
        `,
        meaning: "ระลึกถึงพระคุณของพระรัตนตรัยในตอนเช้า"
    },
    {
        id: 'evening-prayer',
        title: "บทสวดมนต์ตอนเย็น",
        paliText: "สันธยา คะลปะ พุทธานุสติ",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">บทสนุติตอนเย็น</p>
            <p class="mb-3">เวลาสิ้นวันนี้ แล้วมาแต่เช้า<br/>จากความเพียร บ่มบำรุงจิตใจ<br/>ด้วยศีลธรรม นำจิตสู่แสง<br/>จงอำนาจ ปกป้องใจทั้งคืน</p>
        `,
        meaning: "ระลึกถึงการกระทำความดีและการสวดมนต์ตอนเย็น"
    },
    {
        id: 'forgiveness',
        title: "บทขออภัย",
        paliText: "โทสมิ ภันเต สะขเล สุขุมารา",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">บทขออภัย</p>
            <p class="mb-3">โทสมิ ภันเต เสขเล สุขุมารา<br/>ทุคกาตา อะกัตตา อะกิริยา<br/>อภัตตา อเนคา ช กตา มยา<br/>ปริยาเยมี ภะวันตา ภะคะวา</p>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">ขออภัยสำหรับการกระทำที่ไม่ดี โดยไม่ตั้งใจ</p>
        `,
        meaning: "ขออภัยจากความผิดพลาด"
    },
    {
        id: 'blessing-chant',
        title: "บทมงคล",
        paliText: "มงคลั สัตตะ มหา มังคลัง",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">บทมงคลสูงสุด</p>
            <p class="mb-2">มงคลั สัตตะ มหา มังคลัง</p>
            <p class="mb-2">มาตา จ ปิตา จ สะชา อะตะปเนย</p>
            <p class="mb-2">อัตตานัง จ ววดฺฒนัง กทัง</p>
            <p class="mb-2">ยั มังคลัง ตัน ตัม จา อะหัง</p>
        `,
        meaning: "มงคลสูงสุด คือการได้สิ่งดีงาม"
    },
    {
        id: 'tisarana',
        title: "ไตรสรณ",
        paliText: "พุทธัง สะระณัง คัจฉามิ",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">ไตรสรณ (ศรณยาจนา)</p>
            <p class="mb-2">พุทธัง สะระณัง คัจฉามิ</p>
            <p class="mb-2">ธัมมัง สะระณัง คัจฉามิ</p>
            <p class="mb-2">สังฆัง สะระณัง คัจฉามิ</p>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-3">(ซ้ำ 3 ครั้ง)</p>
        `,
        meaning: "ศรณยาจนา - สารณของพระรัตนตรัย"
    },
    {
        id: 'anahong',
        title: "บทอานาหงค์",
        paliText: "โอม นะโม ตะสัง ภะคะวา",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">บทอานาหงค์</p>
            <p class="mb-3">โอม นะโม ตะสัง ภะคะวา อะระหะโต สัมมาสัมพุทโธ<br/>โอม นะโม ตะสัง ภะคะวา อะระหะโต สัมมาสัมพุทโธ<br/>โอม นะโม ตะสัง ภะคะวา อะระหะโต สัมมาสัมพุทโธ</p>
        `,
        meaning: "บทมนต์เสริมพลังจิตใจ"
    },
    {
        id: 'dedicate-food',
        title: "บทก่อนรับประทานอาหาร",
        paliText: "หตสุขา มัคคา, คระหิตสุขา มัคคา",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">บทก่อนรับประทานอาหาร</p>
            <p class="mb-2">หตสุขา มัคคา, คระหิตสุขา มัคคา</p>
            <p class="mb-2">นิอิจฺฉโล ผญฺเชจ สุทฺธิยา</p>
            <p class="mb-2">วายะ สุนิวตฺติตา ตัจฺชา ทุทุตัง</p>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">ขอบคุณ คิดถึงความพยายาม และก่อสัญญา ไม่เบียดเบียนสัตว์</p>
        `,
        meaning: "ขอบคุณและประติญญา ก่อนรับประทานอาหาร"
    },
    {
        id: 'sleep-prayer',
        title: "บทสวดมนต์ก่อนนอน",
        paliText: "บุทฺธเมตัง มนัง ตัสมิง ราชิ",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">บทก่อนนอน</p>
            <p class="mb-3">บุทฺธเมตัง มนัง ตัสมิง ราชิ<br/>ปฎิบัตฺตา ศีลา จ ปฎิปันนา<br/>เทวา หิ เต มนุมฺสนตี ปชา<br/>สุทฺธจิตตา อะมะตา ปบันธนา</p>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">ระลึกถึงการทำความดี ขอให้มีจิตใจบริสุทธิ์ เป็นสุขในการนอนหลับ</p>
        `,
        meaning: "ระลึกถึงการทำความดีและขอการนอนหลับที่สบาย"
    },
    {
        id: 'precepts-eight',
        title: "ศีลแปดประการ",
        paliText: "ปาณาติปาตา เวระมณี สิกขาปะทัง สมาทิยามิ",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-3">(ศีล 8 ประการ)</p>
            <p class="mb-2">๑. ปาณาติปาตา เวระมณี สิกขาปะทัง สมาทิยามิ</p>
            <p class="mb-2">๒. อทินนาทานา เวระมณี สิกขาปะทัง สมาทิยามิ</p>
            <p class="mb-2">๓. กาเมสุมิจฉาจารา เวระมณี สิกขาปะทัง สมาทิยามิ</p>
            <p class="mb-2">๔. มุสาวาทา เวระมณี สิกขาปะทัง สมาทิยามิ</p>
            <p class="mb-2">๕. สุราเมระยะมัชชะปะมาทัฏฐานา เวระมณี สิกขาปะทัง สมาทิยามิ</p>
            <p class="mb-2">๖. วิกาลเภชนะ เวระมณี สิกขาปะทัง สมาทิยามิ</p>
            <p class="mb-2">๗. นัจชะกิลากัสโสลละยิสายนะ เวระมณี สิกขาปะทัง สมาทิยามิ</p>
            <p class="mb-2">๘. มาลาคันธะวิภูเสงสะยนะ เวระมณี สิกขาปะทัง สมาทิยามิ</p>
        `,
        meaning: "สัญญา 8 ประการ - ศีลที่สูงขึ้นสำหรับการบำรุงจิต"
    }
];
