# ❓ Q&A Management Guide

**สำหรับ Web Master และผู้ดูแลเนื้อหา**

---

## 📖 Table of Contents

1. [Quick Start](#quick-start)
2. [Where to Find Q&A Data](#where-to-find-qa-data)
3. [How to Add New Q&A](#how-to-add-new-qa)
4. [How to Edit Existing Q&A](#how-to-edit-existing-qa)
5. [How to Delete Q&A](#how-to-delete-qa)
6. [Categories](#categories)
7. [FAQ About Q&A Management](#faq-about-qa-management)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

**To add a new Q&A:**

1. Open file: `app/data/meditation-qa.ts`
2. Copy an existing Q&A block
3. Update the ID (e.g., `qa-13`, `qa-14`)
4. Update question, answer, and category
5. Save the file
6. Run: `npm run build` to verify

That's it! 🎉

---

## 📁 Where to Find Q&A Data

**Main file:** `app/data/meditation-qa.ts`

Location in project:
```
Nung-Sue-Suat-Mon/
└── app/
    └── data/
        └── meditation-qa.ts  ← All Q&A data is here
```

**Related files (components):**
```
app/components/
├── MeditationQA.tsx         ← Main Q&A modal
├── QAHeader.tsx             ← Header section
├── QACategoryFilter.tsx      ← Category buttons
├── QAList.tsx               ← List of Q&As
└── QADetail.tsx             ← Answer detail view
```

---

## ➕ How to Add New Q&A

### Example: Adding a New Q&A

**Current state:** The file has Q&A items from `qa-1` to `qa-12`

**Step 1: Open `app/data/meditation-qa.ts`**

You'll see:

```typescript
export const meditationQA: QAItem[] = [
    {
        id: 'qa-1',
        question: 'สมาธิคืออะไร',
        answer: 'สมาธิ หมายถึง...',
        category: 'พื้นฐาน',
    },
    // ... more items ...
    {
        id: 'qa-12',
        question: 'จะรู้ได้อย่างไรว่าสมาธิลึก',
        answer: 'เมื่อสมาธิลึก...',
        category: 'พื้นฐาน',
    },
];
```

**Step 2: Add New Item Before the Closing Bracket**

Add this after the last Q&A (before the closing `];`):

```typescript
    {
        id: 'qa-13',
        question: 'ท่านั่งสมาธิในบ้านได้ไหม',
        answer: 'ได้ครับ สามารถนั่งสมาธิที่บ้านได้ตราบใดที่มีที่ที่เงียบสงบ ไม่มีเสียงรบกวน อากาศถ่ายเท ได้สำหรับ 5-10 นาที',
        category: 'วิธีปฏิบัติ',
    },
];
```

**Step 3: Save File**

Press `Ctrl+S` (or `Cmd+S` on Mac)

**Step 4: Verify Build**

Open terminal and run:

```bash
npm run build
```

You should see:
```
✓ Compiled successfully
```

If there's an error, check the syntax (missing comma, quotes, etc.)

---

## ✏️ How to Edit Existing Q&A

### Edit Answer

Find the Q&A by ID and update the `answer` field:

**Before:**
```typescript
{
    id: 'qa-3',
    question: 'ควรนั่งสมาธินานเท่าไร',
    answer: 'สำหรับผู้เริ่มต้น ควรนั่งสมาธิประมาณ 5-10 นาที',
    category: 'วิธีปฏิบัติ',
}
```

**After (Updated):**
```typescript
{
    id: 'qa-3',
    question: 'ควรนั่งสมาธินานเท่าไร',
    answer: 'สำหรับผู้เริ่มต้น ควรนั่งสมาธิประมาณ 5-10 นาที ค่อยๆ เพิ่มเป็น 15-20 นาที',
    category: 'วิธีปฏิบัติ',
}
```

### Edit Question

Update the `question` field:

```typescript
{
    id: 'qa-5',
    question: 'ท่านั่งสมาธิที่ถูกต้องคืออะไร',  // ← Updated question
    answer: 'ควรนั่งเป็นท่าสมาธิ...',
    category: 'วิธีปฏิบัติ',
}
```

### Change Category

Update the `category` field:

```typescript
{
    id: 'qa-1',
    question: 'สมาธิคืออะไร',
    answer: '...',
    category: 'Advanced Topics',  // ← Changed category
}
```

---

## 🗑️ How to Delete Q&A

Find the Q&A block and remove it entirely:

**Before:**
```typescript
    {
        id: 'qa-7',
        question: 'ใจนอนแล่นเรื่อยเป็นปกติหรือ',
        answer: 'ใช่ ปกติมาก...',
        category: 'ปัญหาทั่วไป',
    },
    {
        id: 'qa-8',
        question: 'รู้สึกหนัวปวด เวียนศีรษะขณะสมาธิ',
        answer: 'อาจเกิดจากท่านั่งไม่ถูก...',
        category: 'ปัญหาทั่วไป',
    },
```

**After (Removed qa-7):**
```typescript
    {
        id: 'qa-8',
        question: 'รู้สึกหนัวปวด เวียนศีรษะขณะสมาธิ',
        answer: 'อาจเกิดจากท่านั่งไม่ถูก...',
        category: 'ปัญหาทั่วไป',
    },
```

**Don't forget:** Remove the comma on the previous item if it's the last one.

---

## 📂 Categories

### Current Categories

| Category | Thai Name | Purpose | Count |
|----------|-----------|---------|-------|
| `'พื้นฐาน'` | Basic Concepts | Definition, fundamentals | 4 |
| `'ประโยชน์'` | Benefits | Benefits of meditation | 1 |
| `'วิธีปฏิบัติ'` | Techniques | How-to, practices | 5 |
| `'ปัญหาทั่วไป'` | Common Problems | Troubleshooting | 4 |
| `'ทั่วไป'` | General | General questions | 1 |

### How Categories Work

Categories are **automatically detected** from the Q&A data. When a user opens the Q&A modal:

1. App reads all Q&A items
2. Extracts unique categories
3. Shows category buttons at the top
4. User can click to filter

**To create a new category:** Just add a Q&A with a new category name!

```typescript
{
    id: 'qa-20',
    question: 'Your question?',
    answer: 'Your answer.',
    category: 'Advanced Meditation',  // ← New category automatically appears
}
```

### Recommended Category Names

Keep it clear and concise:

- `'พื้นฐาน'` - Basic, fundamental
- `'ประโยชน์'` - Benefits, advantages
- `'วิธีปฏิบัติ'` - How-to, techniques
- `'ปัญหาทั่วไป'` - Problems, troubleshooting
- `'ลำดับขั้น'` - Levels, stages
- `'ทั่วไป'` - General, miscellaneous

---

## ❓ FAQ About Q&A Management

### Q1: Do I need to restart the app after editing Q&A?

**A:** No. Changes are automatically picked up:

```bash
npm run build
npm run dev  # or just save and refresh browser
```

Then refresh your browser to see the changes.

### Q2: Can I add Q&A in other languages?

**A:** Yes! The system doesn't require Thai:

```typescript
{
    id: 'qa-15',
    question: 'What is meditation?',
    answer: 'Meditation is a practice of focusing the mind...',
    category: 'English QA',
}
```

### Q3: Can I use HTML or special formatting in answers?

**A:** Currently, answers support plain text with line breaks:

```typescript
answer: 'First paragraph.\n\nSecond paragraph.'
```

HTML is not supported in Q&A. Keep it simple.

### Q4: What's the maximum number of Q&A items?

**A:** No hard limit. The app handles 100+ items fine. Currently using 12.

### Q5: How do I know if my Q&A is displayed correctly?

**A:** Open the app after building:

```bash
npm run build
npm run dev
```

Click the ❓ button in the header to open the Q&A modal.

### Q6: Can I reuse Q&A IDs?

**A:** No! Each ID must be unique. Use sequential IDs:

```
qa-1, qa-2, qa-3, ... qa-12, qa-13, qa-14
```

### Q7: What if I make a mistake in the file?

**A:** The build will fail with an error. Common issues:

- Missing comma between items
- Unclosed quotes
- Wrong syntax

Check the error message and fix it.

### Q8: Can I delete all Q&As?

**A:** Yes, but the Q&A button will show an empty list. You can:

```typescript
export const meditationQA: QAItem[] = [];  // Empty array
```

### Q9: Do I need to edit anything else when adding Q&A?

**A:** No! Just edit the `meditation-qa.ts` file. Everything else updates automatically.

### Q10: How often should I update the Q&A?

**A:** As needed. Add Q&As whenever:
- Users ask common questions
- You want to update information
- New meditation topics arise

---

## 💡 Best Practices

### 1. Keep Questions Clear and Concise

**✅ Good:**
```typescript
question: 'ควรนั่งสมาธินานเท่าไร'
```

**❌ Avoid:**
```typescript
question: 'มีเขา มีขา เบาแต่แรง ห่อหุ่มในอากาศ มันคืออะไร'
```

### 2. Provide Complete Answers

**✅ Good:**
```typescript
answer: 'สำหรับผู้เริ่มต้น ควรนั่งสมาธิประมาณ 5-10 นาที ครั้งแรก แล้วค่อยๆ เพิ่มเวลาขึ้นไป'
```

**❌ Avoid:**
```typescript
answer: 'ประมาณนั่นแหละ'
```

### 3. Use Thai for Thai Questions

All current Q&As are in Thai. Keep it consistent for the target audience.

### 4. Organize by Category

Group related Q&As in the same category:

```typescript
{
    id: 'qa-1',
    question: '...',
    category: 'วิธีปฏิบัติ',  // ← Same category
},
{
    id: 'qa-2',
    question: '...',
    category: 'วิธีปฏิบัติ',  // ← Same category
},
```

### 5. Test After Adding

Always run:

```bash
npm run build
npm run dev
```

And manually test the Q&A modal to ensure it displays correctly.

### 6. Use Sequential IDs

Keep track of the highest ID and increment:

```
Current highest: qa-12
Next ID: qa-13
```

### 7. Avoid Duplicate Content

Check existing Q&As before adding new ones:

```bash
# Search for related questions
grep -i "สมาธิ" app/data/meditation-qa.ts
```

### 8. Keep Answers Up-to-Date

Review periodically to ensure information is still accurate and relevant.

---

## 🔧 Troubleshooting

### Problem 1: Build Error - "Unexpected token"

**Cause:** Syntax error in the file

**Solution:** Check for:
- Missing commas between Q&A items
- Unclosed quotes
- Extra/missing braces

**Example Error:**
```typescript
{
    id: 'qa-13',
    question: 'My question?'  // ← Missing comma here
    answer: 'My answer.',
    category: 'Category',
},
```

**Fixed:**
```typescript
{
    id: 'qa-13',
    question: 'My question?',  // ← Added comma
    answer: 'My answer.',
    category: 'Category',
},
```

### Problem 2: Q&A Not Showing in App

**Cause:** File not saved or build not run

**Solution:**
```bash
# Save the file (Ctrl+S / Cmd+S)

# Rebuild
npm run build

# Restart dev server
npm run dev

# Refresh browser
# Press Ctrl+Shift+R / Cmd+Shift+R to hard refresh
```

### Problem 3: "ID 'qa-13' Already Exists"

**Cause:** Duplicate ID

**Solution:** Use unique IDs:

```typescript
// Wrong - duplicate IDs
{ id: 'qa-13', ... },
{ id: 'qa-13', ... },  // ← Error!

// Correct
{ id: 'qa-13', ... },
{ id: 'qa-14', ... },  // ← Different ID
```

### Problem 4: Special Characters Not Displaying

**Cause:** Encoding issue

**Solution:** Ensure file is saved as UTF-8:

In most editors: `File → Save with Encoding → UTF-8`

### Problem 5: Category Filter Not Working

**Cause:** Typo in category name

**Solution:** Make sure category names match exactly:

```typescript
// Wrong - inconsistent
{ id: 'qa-1', category: 'วิธีปฏิบัติ' },
{ id: 'qa-2', category: 'วิธีปฏิบัติ ' },  // ← Extra space!

// Correct
{ id: 'qa-1', category: 'วิธีปฏิบัติ' },
{ id: 'qa-2', category: 'วิธีปฏิบัติ' },
```

---

## 📞 Need More Help?

If you encounter issues:

1. Check this guide again (most answers are here)
2. Review the `MAINTENANCE.md` file for technical details
3. Check the console for error messages: Press `F12` → `Console` tab
4. Run: `npm run build` to see detailed error messages

---

## 🎯 Summary

**To manage Q&A:**

| Task | File | How |
|------|------|-----|
| Add Q&A | `meditation-qa.ts` | Add new object in array |
| Edit Q&A | `meditation-qa.ts` | Update question/answer/category fields |
| Delete Q&A | `meditation-qa.ts` | Remove entire object |
| Add Category | `meditation-qa.ts` | Use new category name in Q&A |
| Test | Terminal | Run `npm run build && npm run dev` |

**Remember:** Only one file to edit: `app/data/meditation-qa.ts` ✅

---

**Last Updated:** September 2026

**Version:** 1.0.0

**Maintained by:** Web Development Team

