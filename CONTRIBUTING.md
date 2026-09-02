# 📚 คู่มือการมีส่วนร่วมและปรับปรุงบทสวดมนต์

เอกสารนี้เป็นคู่มือรายละเอียดสำหรับการเพิ่มหรือปรับปรุงบทสวดมนต์ในแอปพลิเคชั่น

---

## 🎯 คำแนะนำทั่วไป

### ก่อนเริ่มต้น

1. **Clone or Fork** repository
2. **ติดตั้ง dependencies:**
   ```bash
   npm install
   ```
3. **รัน development server:**
   ```bash
   npm run dev
   ```
4. **เปิด http://localhost:3000 ในเบราว์เซอร์**

---

## 📝 ขั้นตอนการเพิ่มบทสวดมนต์

### ขั้นที่ 1: ตัดสินใจประเภทของบทสวด

- **Core Prayer** - บทพื้นฐานที่ใช้ซ้ำหลายครั้ง
- **Routine** - การรวมบทสวดสำหรับวัตรเฉพาะ (เช้า เย็น 2ทุ่ม)
- **Daily Prayer** - บทเฉพาะสำหรับวันต่าง ๆ
- **Ceremony** - บทสำหรับพิธีพิเศษ

### ขั้นที่ 2: เพิ่มบทสวดแกนหลัก (ถ้าจำเป็น)

**สถานการณ์:** เมื่อคุณต้องการเพิ่มบทสวดใหม่ที่ยังไม่มีในระบบ

**ไฟล์:** `app/data/core-prayers.ts`

```typescript
import { CorePrayer } from '../types/prayer';

export const corePrayers: CorePrayer[] = [
    // บทสวดเดิม...
    
    // เพิ่มบทใหม่
    {
        id: 'sample-prayer',                  // ★ ID ต้องไม่ซ้ำ
        title: "ชื่อบทสวดของเรา",
        paliText: "อะบิวะเดมิ นะโม ภะคะวา",  // บาลีข้อมูลอ้างอิง
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-2">
                (บทสวดภาษาบาลี)
            </p>
            <p class="mb-3">
                อะบิวะเดมิ นะโม ภะคะวา
                <span class="text-xs text-amber-600 dark:text-amber-500 block font-normal">
                    (กราบ 3 ครั้ง)
                </span>
            </p>
        `,
        meaning: "นมัสการพระพุทธเจ้า"
    }
];
```

**เคล็ดลับ:**
- ID ควรเป็น kebab-case และอธิบายเนื้อหา เช่น `metta-chanting`, `precepts-five`
- `htmlContent` ใช้ Tailwind CSS classes
- ใช้ `<span>` สำหรับหมายเหตุขนาดเล็ก เช่น "(กราบ 3 ครั้ง)"

---

### ขั้นที่ 3: เพิ่มวัตร (Routine)

**สถานการณ์:** เมื่อต้องการสร้างวัตรสวดใหม่โดยรวมบทสวดแกนหลัย

**ไฟล์:** `app/data/routines.ts`

```typescript
import { Routine } from '../types/prayer';

export const routines: Routine[] = [
    // วัตรเดิม...
    
    // เพิ่มวัตรใหม่
    {
        id: 'new-morning-routine',           // ★ ID ต้องไม่ซ้ำ
        title: 'ทำวัตรเช้าแบบสั้น',
        description: 'วัตรสวดมนต์สั้น ๆ สำหรับผู้ที่มีเวลาจำกัด',
        category: 'morning',                  // ★ morning | evening | 2pm
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'namo-tassa', order: 2 },
            { prayerId: 'precepts-five', order: 3 },
            { prayerId: 'metta-chanting', order: 4 }
        ]
    }
];
```

**ที่สำคัญ:**
- `category` ต้องเป็นค่าใดค่าหนึ่งเท่านั้น: `'morning'`, `'evening'`, `'2pm'`
- `prayerId` ต้องตรงกับ ID ในบทแกนหลัย `core-prayers.ts`
- `order` ระบุลำดับการสวด (1, 2, 3, ...)

**ตัวอย่างเช็ค:**
```bash
# ตรวจสอบว่า prayerId มีในบทแกนหลัย
grep "id: 'phra-ratanantrai'" app/data/core-prayers.ts
# ผลลัพธ์: id: 'phra-ratanantrai', ✓ พบ
```

---

### ขั้นที่ 4: เพิ่มบทประจำวัน (Daily Prayer)

**สถานการณ์:** เมื่อต้องการเพิ่มบทสวดที่เหมาะสำหรับวันใดวันหนึ่ง

**ไฟล์:** `app/data/daily-prayers.ts`

```typescript
import { DailyPrayer } from '../types/prayer';

export const dailyPrayers: DailyPrayer[] = [
    // บทประจำวันเดิม...
    
    // เพิ่มบทใหม่
    {
        id: 'wednesday-extended-prayer',    // ★ ID ต้องไม่ซ้ำ
        title: 'บทสวดวันพุธ (ฉบับขยาย)',
        day: 'wednesday',                     // ★ monday | tuesday | ... | sunday
        dayThai: 'วันพุธ',
        description: 'บทสวดวันพุธ เพื่อสร้างปัญญา ความเข้าใจ',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'namo-tassa', order: 2 },
            { prayerId: 'precepts-eight', order: 3 },
            { prayerId: 'anahong', order: 4 }
        ]
    }
];
```

**วันที่พร้อมใช้:**
```
'monday'    ➜ จันทร์
'tuesday'   ➜ อังคาร
'wednesday' ➜ พุธ
'thursday'  ➜ พฤหัสบดี
'friday'    ➜ ศุกร์
'saturday'  ➜ เสาร์
'sunday'    ➜ อาทิตย์
```

---

### ขั้นที่ 5: เพิ่มพิธีพิเศษ (Ceremony)

**สถานการณ์:** เมื่อต้องการเพิ่มบทสวดสำหรับพิธีพิเศษ

**ไฟล์:** `app/data/ceremonies.ts`

```typescript
import { Ceremony } from '../types/prayer';

export const ceremonies: Ceremony[] = [
    // พิธีเดิม...
    
    // เพิ่มพิธีใหม่
    {
        id: 'merit-dedication-extended',    // ★ ID ต้องไม่ซ้ำ
        title: 'บทถวายพรพระ (ฉบับขยาย)',
        description: 'บทสวดถวายพรและแผ่ส่วนบุญให้พระสงฆ์',
        category: 'merit',                   // ★ category ต้องเป็นค่าที่กำหนด
        categoryThai: 'ถวายพรและแผ่ส่วนบุญ',
        prayers: [
            { prayerId: 'phra-ratanantrai', order: 1 },
            { prayerId: 'blessing-chant', order: 2 },
            { prayerId: 'metta-chanting', order: 3 },
            { prayerId: 'merit-dedication', order: 4 }
        ]
    }
];
```

**หมวดหมู่พิธี:**
```
'funeral'       ➜ พิธีศพ
'merit'         ➜ ถวายพรและแผ่ส่วนบุญ
'fabric'        ➜ พิธีผ้า
'dedication'    ➜ บทอธิฐาน/ปริวาสกรรม
'consecration'  ➜ พิธีปลุกเสก
'sick'          ➜ สวดให้คนป่วย
'ordination'    ➜ พิธีบวช
'other'         ➜ อื่น ๆ
```

---

## 🔍 ตรวจสอบและทดสอบ

### ขั้นที่ 1: ตรวจสอบ syntax

```bash
npm run build
```

ตรวจสอบว่าไม่มี error จากการ compile

### ขั้นที่ 2: ทดสอบในเบราว์เซอร์

```bash
npm run dev
# เปิด http://localhost:3000
```

- [ ] ทดสอบบนมือถือ (ใช้ DevTools หรือ responsive mode)
- [ ] ทดสอบบน Desktop
- [ ] ทดสอบการค้นหา (search feature)
- [ ] ทดสอบเปลี่ยน view (วัตร, ประจำวัน, พิธี, บท)
- [ ] ทดสอบ dark mode
- [ ] ทดสอบปรับขนาดตัวอักษร

### ขั้นที่ 3: ตรวจสอบข้อมูล

```typescript
// เช็คว่าทั้งหมดมี prayerId ที่ถูกต้อง
// เช็คว่าไม่มี ID ซ้ำกัน
// เช็คว่า order ถูกต้อง (1, 2, 3, ...)
```

---

## 🎨 HTML & Styling Guide

### 1. หัวข้อและคำอธิบาย

```html
<p class="font-semibold text-amber-800 dark:text-amber-400 mb-2">
    (คำอธิบายหรือคำชี้แจง)
</p>
```

### 2. เนื้อหาสวดมนต์หลัก

```html
<p class="mb-3">เนื้อหาบทสวด</p>
```

### 3. หมายเหตุเล็ก ๆ (เช่น การกราบ)

```html
<span class="text-xs text-amber-600 dark:text-amber-500 block font-normal">
    (กราบ 3 ครั้ง)
</span>
```

### 4. ข้อความอธิบายหรือแปล

```html
<p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
    ความหมาย: ...
</p>
```

### 5. เส้นคั่น (ระหว่างบท)

```html
<hr class="my-6 border-amber-100 dark:border-zinc-800" />
```

### 6. ตัวอักษรหนา/เน้น

```html
<p class="font-bold text-lg mb-4 text-amber-900 dark:text-amber-300">
    เนื้อหาที่สำคัญ
</p>
```

---

## 🚀 Git Workflow (สำหรับ Git Users)

### 1. สร้าง branch ใหม่

```bash
git checkout -b add/new-prayer-name
# เช่น: git checkout -b add/morning-prayer-extended
```

### 2. ทำการแก้ไข

```bash
# แก้ไขไฟล์ที่ต้องการ
# เช่น: app/data/core-prayers.ts
```

### 3. ทดสอบ

```bash
npm run build
npm run dev
# ทดสอบในเบราว์เซอร์
```

### 4. Commit

```bash
git add app/data/core-prayers.ts
git commit -m "Add: new prayer 'my-prayer' to core prayers"
```

### 5. Push

```bash
git push origin add/new-prayer-name
```

### 6. สร้าง Pull Request

บน GitHub/GitLab สร้าง PR ไปยัง `main` branch

---

## ⚠️ Common Mistakes & How to Avoid

### ❌ Mistake 1: ID ซ้ำกัน

```typescript
// ❌ ผิด - ID เดียวกันในสองที่
{ id: 'my-prayer', ... }
{ id: 'my-prayer', ... }

// ✅ ถูก
{ id: 'my-prayer-1', ... }
{ id: 'my-prayer-2', ... }
```

### ❌ Mistake 2: prayerId ไม่มีในบทแกนหลัย

```typescript
// ❌ ผิด - 'unknown-prayer' ไม่มีในบทแกนหลัย
{ prayerId: 'unknown-prayer', order: 1 }

// ✅ ถูก - เชค core-prayers.ts ก่อน
{ prayerId: 'phra-ratanantrai', order: 1 }
```

### ❌ Mistake 3: category ไม่ถูกต้อง

```typescript
// ❌ ผิด - category ไม่อยู่ในรายการ
{ category: 'special' }

// ✅ ถูก
{ category: 'morning' } // morning | evening | 2pm
```

### ❌ Mistake 4: ไม่ทดสอบหลังแก้ไข

```bash
# ❌ ผิด - commit ไม่สร้าง build
git push origin ...

# ✅ ถูก
npm run build  # ตรวจ error
npm run dev    # ทดสอบใน browser
git push origin ...
```

### ❌ Mistake 5: HTML ไม่ถูกต้อง

```typescript
// ❌ ผิด - ไม่มีการปิด tag
<p>เนื้อหา

// ✅ ถูก
<p>เนื้อหา</p>
```

---

## 📊 Checklist สำหรับการส่ง PR

- [ ] สร้าง branch ใหม่จาก `main`
- [ ] เพิ่มข้อมูลในไฟล์ที่ถูกต้อง
- [ ] ID ไม่ซ้ำกับอื่น
- [ ] prayerId ตรวจสอบแล้ว (มีจริง)
- [ ] category/day ใช้ค่าที่ถูกต้อง
- [ ] HTML formatting ถูกต้อง
- [ ] `npm run build` ไม่มี error
- [ ] `npm run dev` ทำงานได้ดี
- [ ] ทดสอบบน mobile และ desktop
- [ ] ทดสอบ dark mode
- [ ] Commit message ชัดเจน
- [ ] ไม่มี console error

---

## 📞 ความช่วยเหลือและติดต่อ

หากมีคำถามหรือพบปัญหา:

1. **ตรวจสอบ Console Errors**
   ```
   F12 (DevTools) → Console tab → ดูข้อความ error
   ```

2. **ตรวจสอบ Network**
   ```
   F12 (DevTools) → Network tab → ดูการโหลด resource
   ```

3. **ติดต่อผู้พัฒนา**
   - Email: [อีเมล]
   - Website: [เว็บไซต์]

---

## 🙏 ขอบคุณ

ขอบคุณที่มีส่วนร่วมในการพัฒนาแอปพลิเคชั่นนี้เพื่อเผยแพร่ธรรมชาติ 

**"ขอให้ทุกท่านมีความสุขความเจริญ เจริญในธรรม 🙏"**
