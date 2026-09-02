# 📿 หนังสือสวดมนต์ธรรมะสติ
> แอปพลิเคชั่นสวดมนต์ดิจิทัล รวมบทสวดมนต์ทำวัตรและแผ่เมตตา

## 📋 ภาพรวมโปรเจค

แอปพลิเคชั่นนี้ถูกพัฒนาด้วย **Next.js 16** ด้วยเทคโนโลยี **TypeScript** และ **Tailwind CSS** โดยใช้สถาปัตยกรรม modular ที่ช่วยให้ง่ายต่อการเพิ่มและปรับปรุงบทสวดมนต์

### ✨ ลักษณะพิเศษ

- 📱 **Mobile First Design** - ใช้งานได้ดีบนทุกอุปกรณ์
- 🎯 **โครงสร้าง Modular** - บทสวดแกนหลัก (core prayers) ถูกใช้ซ้ำในหลายวัตรและพิธี
- 🌙 **Dark Mode** - โหมดสีเข้มสำหรับการสวดในยามค่ำคืน
- 🔔 **Bell Sound** - ฟีเจอร์ตีระฆังทำสมาธิ
- 🔍 **ค้นหา** - ค้นหาบทสวดมนต์ได้ง่าย
- 📖 **ปรับขนาดตัวอักษร** - ขยาย/ซูมตัวอักษรได้ตามต้องการ

## 🏗️ โครงสร้างโปรเจค

```
app/
├── types/
│   └── prayer.ts                    # TypeScript interfaces
├── data/
│   ├── core-prayers.ts              # บทสวดแกนหลัก (15 บท)
│   ├── routines.ts                  # วัตรสวดมนต์ (เช้า เย็น 2ทุ่ม)
│   ├── daily-prayers.ts             # บทประจำวัน (จันทร์-อาทิตย์)
│   ├── ceremonies.ts                # พิธีพิเศษ (พิธีศพ บวช ฯลฯ)
│   └── index.ts                     # export ข้อมูลทั้งหมด
├── utils/
│   └── prayer-helpers.ts            # helper functions
└── page.tsx                         # Main UI component
```

## 📊 ข้อมูลในระบบ

### บทสวดแกนหลัก (Core Prayers)
- 15 บทสวดมนต์พื้นฐาน
- ไฟล์: `app/data/core-prayers.ts`
- ถูกใช้ซ้ำในวัตรต่าง ๆ

### วัตรสวดมนต์ (Routines)
- ทำวัตรเช้า (7 บท)
- ทำวัตรเย็น (7 บท)
- ทำวัตร 2 ทุ่ม (7 บท)
- ไฟล์: `app/data/routines.ts`

### บทประจำวัน (Daily Prayers)
- บทสวดวันจันทร์ - อาทิตย์ (7 บท)
- ไฟล์: `app/data/daily-prayers.ts`

### พิธีพิเศษ (Ceremonies)
- พิธีศพ
- ถวายพรพระและแผ่ส่วนบุญ
- พิธีทำผ้าใหม่
- ปริวาสกรรม
- พิธีปลุกเสก
- สวดให้คนป่วยฟัง
- พิธีบวช
- บทก่อนรับประทานอาหาร
- บทอธิฐานเช้าและบาตร
- ไฟล์: `app/data/ceremonies.ts`

## 🚀 เริ่มต้นใช้งาน

### ติดตั้งและรัน

```bash
# ติดตั้ง dependencies
npm install

# รัน development server
npm run dev

# เปิด http://localhost:3000 ในเบราว์เซอร์
```

### Build สำหรับ Production

```bash
npm run build
npm run start
```

## 📖 Manual สำหรับ Web Master: วิธีเพิ่ม/ปรับปรุงบทสวดมนต์

เอกสารนี้เป็นคู่มือสำหรับการเพิ่มและปรับปรุงบทสวดมนต์ในระบบ

### 1️⃣ การเพิ่มบทสวดแกนหลัก (Core Prayer)

บทสวดแกนหลัก (core prayer) คือบทสวดที่ใช้ซ้ำหลายครั้งในวัตร พิธี และบทประจำวัน

**ไฟล์ที่ต้องแก้ไข:** `app/data/core-prayers.ts`

#### ขั้นตอน:

1. เปิดไฟล์ `app/data/core-prayers.ts`

2. เพิ่มบทสวดใหม่ในอาร์เรย์ `corePrayers` ก่อนเครื่องหมาย `];`

```typescript
{
    id: 'unique-prayer-id',                    // ★ ID ต้องไม่ซ้ำกับ ID อื่น
    title: "ชื่อบทสวด",                        // แสดงในหัวข้อ
    paliText: "บทสวดภาษาบาลี",                 // ข้อมูลอ้างอิง
    htmlContent: `                             // เนื้อหาสวดมนต์เป็น HTML
        <p class="font-semibold text-amber-800 dark:text-amber-400 mb-2">
            (คำอธิบายเพิ่มเติม)
        </p>
        <p class="mb-3">บทสวดแบบที่ 1</p>
        <p class="mb-3">บทสวดแบบที่ 2</p>
    `,
    meaning: "ความหมายของบทสวด"               // ไม่บังคับ
}
```

**ตัวอย่าง:**

```typescript
{
    id: 'my-new-prayer',
    title: "บทสวดใหม่",
    paliText: "อโน ภะคะวา",
    htmlContent: `
        <p class="font-semibold text-amber-800 dark:text-amber-400 mb-2">(สวดมนต์)</p>
        <p class="mb-3">อโน ภะคะวา อะระหะโต สัมมาสัมพุทโธ</p>
    `,
    meaning: "ถวายความเคารพแก่พระพุทธเจ้า"
}
```

---

### 2️⃣ การเพิ่มวัตรใหม่ (Routine)

วัตร คือการรวมกลุ่มของบทสวดแกนหลัยที่สวดกันในเวลาที่กำหนด

**ไฟล์ที่ต้องแก้ไข:** `app/data/routines.ts`

#### ขั้นตอน:

1. เปิดไฟล์ `app/data/routines.ts`

2. เพิ่มวัตรใหม่ในอาร์เรย์ `routines`

```typescript
{
    id: 'unique-routine-id',                   // ★ ID ต้องไม่ซ้ำ
    title: 'ชื่อวัตร',                         // แสดงหน้า UI
    description: 'คำอธิบายวัตร',               // อธิบายเป้าหมายของวัตร
    category: 'morning' | 'evening' | '2pm',   // ★ ต้องเป็นค่าใดค่าหนึ่ง
    prayers: [
        { prayerId: 'prayer-id-1', order: 1 },
        { prayerId: 'prayer-id-2', order: 2 },
        { prayerId: 'prayer-id-3', order: 3 },
        // ... เพิ่มบทสวดเพิ่มเติมตามต้องการ
    ]
}
```

**หมายเหตุ:**
- `category` ต้องเป็นค่าใดค่าหนึ่ง: `'morning'` | `'evening'` | `'2pm'`
- `order` เป็นลำดับที่ของบทสวด (เริ่มจาก 1)
- `prayerId` ต้องตรงกับ `id` ในบทสวดแกนหลัก

**ตัวอย่าง:**

```typescript
{
    id: 'morning-routine-extended',
    title: 'ทำวัตรเช้า (ฉบับขยาย)',
    description: 'วัตรสวดมนต์เช้าที่ขยายเพิ่มเติม',
    category: 'morning',
    prayers: [
        { prayerId: 'phra-ratanantrai', order: 1 },
        { prayerId: 'namo-tassa', order: 2 },
        { prayerId: 'my-new-prayer', order: 3 },
    ]
}
```

---

### 3️⃣ การเพิ่มบทประจำวัน (Daily Prayer)

บทประจำวัน คือบทสวดที่เหมาะสำหรับแต่ละวันในสัปดาห์

**ไฟล์ที่ต้องแก้ไข:** `app/data/daily-prayers.ts`

#### ขั้นตอน:

1. เปิดไฟล์ `app/data/daily-prayers.ts`

2. เพิ่มบทประจำวันใหม่ในอาร์เรย์ `dailyPrayers`

```typescript
{
    id: 'unique-daily-id',
    title: 'ชื่อบทประจำวัน',
    day: 'monday' | 'tuesday' | ... | 'sunday',  // ★ วันที่
    dayThai: 'วันจันทร์',                        // ชื่อวันภาษาไทย
    description: 'คำอธิบาย',
    prayers: [
        { prayerId: 'prayer-id-1', order: 1 },
        { prayerId: 'prayer-id-2', order: 2 },
    ]
}
```

**วันที่พร้อมใช้:**
- `'monday'` - วันจันทร์
- `'tuesday'` - วันอังคาร
- `'wednesday'` - วันพุธ
- `'thursday'` - วันพฤหัสบดี
- `'friday'` - วันศุกร์
- `'saturday'` - วันเสาร์
- `'sunday'` - วันอาทิตย์

---

### 4️⃣ การเพิ่มพิธีพิเศษ (Ceremony)

พิธีพิเศษ คือบทสวดสำหรับเหตุการณ์หรือพิธีเฉพาะ

**ไฟล์ที่ต้องแก้ไข:** `app/data/ceremonies.ts`

#### ขั้นตอน:

1. เปิดไฟล์ `app/data/ceremonies.ts`

2. เพิ่มพิธีใหม่ในอาร์เรย์ `ceremonies`

```typescript
{
    id: 'unique-ceremony-id',
    title: 'ชื่อพิธี',
    description: 'คำอธิบายพิธี',
    category: 'funeral' | 'merit' | 'fabric' | 'dedication' | 'consecration' | 'sick' | 'ordination' | 'other',
    categoryThai: 'ชื่อหมวดหมู่ภาษาไทย',
    prayers: [
        { prayerId: 'prayer-id-1', order: 1 },
        { prayerId: 'prayer-id-2', order: 2 },
    ]
}
```

**หมวดหมู่พิธี (Category):**
- `'funeral'` - พิธีศพ
- `'merit'` - ถวายพรและแผ่ส่วนบุญ
- `'fabric'` - พิธีผ้า
- `'dedication'` - บทอธิฐาน/ปริวาสกรรม
- `'consecration'` - พิธีปลุกเสก
- `'sick'` - สวดให้คนป่วย
- `'ordination'` - พิธีบวช
- `'other'` - อื่น ๆ

---

## 🔗 ความสัมพันธ์ระหว่างข้อมูล

```
Core Prayers (บทแกนหลัก)
    ↓
    ├─→ Routines (วัตร)
    │
    ├─→ Daily Prayers (บทประจำวัน)
    │
    └─→ Ceremonies (พิธีพิเศษ)
```

การเพิ่มบทสวดแกนหลัก 1 บทสามารถใช้ได้ในหลาย ๆ วัตร วัน และพิธี

---

## ✅ Checklist สำหรับการเพิ่มข้อมูล

- [ ] เพิ่มบทสวดแกนหลัก (ถ้าเป็นบทใหม่)
  - [ ] ใช้ ID ที่ไม่ซ้ำ
  - [ ] เพิ่มเนื้อหา HTML ที่ถูกต้อง
  - [ ] ตรวจสอบ HTML formatting (class, spacing)

- [ ] เพิ่มวัตร/บทประจำวัน/พิธี
  - [ ] ใช้ ID ที่ไม่ซ้ำ
  - [ ] ตรวจสอบว่า prayerId มีจริงในบทแกนหลัก
  - [ ] ตรวจสอบลำดับ order

- [ ] Build และทดสอบ
  ```bash
  npm run build
  npm run dev
  ```
  - [ ] ตรวจสอบไม่มี error
  - [ ] ทดสอบการแสดงผลบนมือถือและ Desktop
  - [ ] ตรวจสอบการค้นหาได้ถูกต้อง

---

## 🎨 HTML Styling Reference

สำหรับการเพิ่มเนื้อหาสวดมนต์ สามารถใช้ class ต่อไปนี้:

```html
<!-- หัวข้อ/คำอธิบาย -->
<p class="font-semibold text-amber-800 dark:text-amber-400 mb-2">
    (คำอธิบายในวงเล็บ)
</p>

<!-- เนื้อหาสวดมนต์หลัก -->
<p class="mb-3">บทสวดมนต์</p>

<!-- ข้อความขนาดเล็ก/อธิบาย -->
<p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
    ข้อความอธิบายหรือแปล
</p>

<!-- ระบุจำนวนการกราบ -->
<span class="text-xs text-amber-600 dark:text-amber-500 block font-normal">
    (กราบ 3 ครั้ง)
</span>

<!-- เส้นคั่น -->
<hr class="my-6 border-amber-100 dark:border-zinc-800" />
```

---

## 🔧 Helper Functions

ไฟล์ `app/utils/prayer-helpers.ts` มี functions ช่วยเหลือ:

```typescript
getCorePrayer(id: string)              // ดึงบทสวดแกนหลักตาม ID
getRoutinePrayers(routineId: string)   // ดึงบทสวดทั้งหมดของวัตร
getDailyPrayerContent(dailyId: string) // ดึงบทสวดทั้งหมดของบทประจำวัน
getCeremonyPrayers(ceremonyId: string)  // ดึงบทสวดทั้งหมดของพิธี
getRoutinesByCategory(category)         // ดึงวัตรตามหมวดหมู่
getDailyPrayerByDay(day: string)        // ดึงบทประจำวันตามวัน
getCeremoniesByCategory(category)       // ดึงพิธีตามหมวดหมู่
```

---

## 📝 Tips & Best Practices

1. **ID ต้องไม่ซ้ำกัน** - ใช้ kebab-case (เช่น `my-prayer-id`)
2. **ใช้ prayerId ที่มีอยู่** - ตรวจสอบว่า prayerId ที่ใช้มีจริงในบทแกนหลัก
3. **ลำดับ order** - ต้องตั้งค่าให้สมเหตุสมผลตามลำดับการสวด
4. **HTML Formatting** - ใช้ Tailwind CSS class เพื่อให้ consistent
5. **Testing** - ทดสอบหลังการแก้ไขเสมอ

---

## 📞 ติดต่อและสนับสนุน

หากมีคำถามหรือต้องการการช่วยเหลือ โปรดติดต่อ:
- **Website:** [ชื่อเว็บไซต์]
- **Email:** [อีเมล]

---

**ขอบคุณที่ใช้งานแอปพลิเคชั่นนี้เพื่อเผยแพร่ธรรมชาติ 🙏**
