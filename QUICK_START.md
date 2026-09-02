# 🚀 Quick Start Guide

การเริ่มต้นอย่างรวดเร็วสำหรับการเพิ่มบทสวดมนต์ใหม่

---

## ⚡ 5 นาที: เพิ่มบทสวดใหม่

### ขั้นที่ 1: เปิดไฟล์

```bash
app/data/core-prayers.ts
```

### ขั้นที่ 2: คัดลอกบทสวดตัวอย่าง

```typescript
{
    id: 'my-new-prayer',                    // ← เปลี่ยนอันนี้
    title: "ชื่อบทสวด",                     // ← เปลี่ยนอันนี้
    paliText: "บทสวดภาษาบาลี",              // ← เปลี่ยนอันนี้
    htmlContent: `                          // ← เปลี่ยนอันนี้
        <p class="font-semibold text-amber-800 dark:text-amber-400 mb-2">
            (คำอธิบาย)
        </p>
        <p class="mb-3">บทสวด</p>
    `,
    meaning: "ความหมาย"                     // ← เปลี่ยนอันนี้
}
```

### ขั้นที่ 3: เพิ่มลงในอาร์เรย์

```typescript
export const corePrayers: CorePrayer[] = [
    // บทสวดเดิม...
    
    // เพิ่มตรงนี้ก่อน ];
    {
        id: 'my-new-prayer',
        title: "ชื่อบทสวด",
        paliText: "บทสวดภาษาบาลี",
        htmlContent: `
            <p class="font-semibold text-amber-800 dark:text-amber-400 mb-2">
                (คำอธิบาย)
            </p>
            <p class="mb-3">บทสวด</p>
        `,
        meaning: "ความหมาย"
    }
];
```

### ขั้นที่ 4: บันทึกและทดสอบ

```bash
npm run build
npm run dev
# เปิด http://localhost:3000
```

**ตรวจสอบ:**
- ❌ ไม่มี error
- ✅ บทสวดปรากฏในรายการ
- ✅ สามารถค้นหาได้

---

## 📋 รายการสั้นๆ สำหรับทุกประเภท

### เพิ่มบทสวดแกนหลัก (Core Prayer)

**ไฟล์:** `app/data/core-prayers.ts`

**รูปแบบ:**
```typescript
{
    id: 'unique-id',           // kebab-case
    title: "ชื่อไทย",           // แสดงบน UI
    paliText: "บาลีข้อมูล",     // อ้างอิง
    htmlContent: `<p>...</p>`, // เนื้อหา HTML
    meaning: "ความหมาย"         // (ไม่บังคับ)
}
```

### เพิ่มวัตร (Routine)

**ไฟล์:** `app/data/routines.ts`

**รูปแบบ:**
```typescript
{
    id: 'unique-id',
    title: "ชื่อไทย",
    description: "คำอธิบาย",
    category: 'morning',        // morning | evening | 2pm
    prayers: [
        { prayerId: 'prayer-1', order: 1 },
        { prayerId: 'prayer-2', order: 2 }
    ]
}
```

### เพิ่มบทประจำวัน (Daily Prayer)

**ไฟล์:** `app/data/daily-prayers.ts`

**รูปแบบ:**
```typescript
{
    id: 'unique-id',
    title: "ชื่อไทย",
    day: 'monday',              // monday - sunday
    dayThai: "วันจันทร์",
    description: "คำอธิบาย",
    prayers: [
        { prayerId: 'prayer-1', order: 1 },
        { prayerId: 'prayer-2', order: 2 }
    ]
}
```

### เพิ่มพิธี (Ceremony)

**ไฟล์:** `app/data/ceremonies.ts`

**รูปแบบ:**
```typescript
{
    id: 'unique-id',
    title: "ชื่อไทย",
    description: "คำอธิบาย",
    category: 'funeral',        // funeral | merit | fabric | ...
    categoryThai: "พิธีศพ",
    prayers: [
        { prayerId: 'prayer-1', order: 1 },
        { prayerId: 'prayer-2', order: 2 }
    ]
}
```

---

## 🔑 Key Points

✅ **ต้องทำ:**
- [ ] ใช้ ID ที่ไม่ซ้ำ (check ด้วย Ctrl+F)
- [ ] ตรวจสอบ prayerId มีจริงในบทแกนหลัย
- [ ] ทดสอบ build: `npm run build`
- [ ] ทดสอบบนเบราว์เซอร์

❌ **ไม่ควรทำ:**
- ❌ ใช้ ID ซ้ำกัน
- ❌ เว้นวรรค/ไม่ปิด tag HTML
- ❌ ใช้ prayerId ที่ไม่มี
- ❌ Commit ไม่สร้าง build

---

## 🔗 Allowed Values

### Category (Routine)
```
'morning' | 'evening' | '2pm'
```

### Day (Daily Prayer)
```
'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
```

### Category (Ceremony)
```
'funeral' | 'merit' | 'fabric' | 'dedication' | 'consecration' | 'sick' | 'ordination' | 'other'
```

---

## 📱 HTML Cheat Sheet

```html
<!-- หัวข้อ -->
<p class="font-semibold text-amber-800 dark:text-amber-400 mb-2">
    (text)
</p>

<!-- เนื้อหา -->
<p class="mb-3">text</p>

<!-- เล็กและสีอ่อน -->
<p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
    text
</p>

<!-- หมายเหตุเล็ก -->
<span class="text-xs text-amber-600 dark:text-amber-500 block font-normal">
    (text)
</span>
```

---

## 🧪 Test Checklist

เมื่อเพิ่มเสร็จแล้ว:

```bash
# 1. Build
npm run build
# ✅ ต้องไม่มี error

# 2. Run dev
npm run dev

# 3. Test ในเบราว์เซอร์:
```

- [ ] เปิด http://localhost:3000
- [ ] ข้อมูลใหม่แสดง
- [ ] ค้นหาได้
- [ ] Mobile ดูดี
- [ ] Dark mode ดูดี
- [ ] ไม่มี console error (F12)

---

## 🆘 ถ้ามี Error

```
❌ "Build error"
→ npm run build อีกครั้ง
→ ตรวจสอบ syntax (เครื่องหมายไม่หาย)

❌ "Export does not exist"
→ ตรวจสอบชื่อไฟล์และ import

❌ "Property does not exist on type"
→ ตรวจสอบ type definition ใน app/types/prayer.ts

❌ "Data doesn't show"
→ ตรวจสอบ prayerId ถูกต้อง
→ ตรวจสอบ order ต่อเนื่อง (1, 2, 3...)
```

---

## 📚 Full Documentation

สำหรับรายละเอียดเพิ่มเติม:

- **README.md** - ภาพรวมโปรเจค
- **CONTRIBUTING.md** - คู่มือรายละเอียด
- **MAINTENANCE.md** - เอกสาร Technical

---

## 💡 Tips

1. **Copy-paste ที่ถูกต้อง**
   - Copy format จากตัวอย่าง
   - เปลี่ยนเฉพาะค่า

2. **ใช้ Editor ที่ดี**
   - VS Code + Prettier ช่วยจัด formatting
   - Ctrl+F ค้นหา ID ซ้ำ

3. **ทดสอบบ่อย**
   - Build หลังแต่ละครั้ง
   - ใช้ dev server เพื่อดูผลทันที

4. **Git Best Practice**
   ```bash
   git checkout -b add/prayer-name
   # ... แก้ไข
   git add app/data/core-prayers.ts
   git commit -m "Add: new prayer"
   git push origin add/prayer-name
   ```

---

**🙏 ขอบคุณที่ช่วยเพิ่มบทสวดมนต์**

**Good luck! 🚀**
