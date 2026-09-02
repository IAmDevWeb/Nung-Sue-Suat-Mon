# 🔧 Technical Maintenance Guide

เอกสารนี้สำหรับผู้ดูแลระบบและผู้พัฒนาที่ต้องการเข้าใจ architecture และทำการ maintenance

---

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Data Structure](#data-structure)
3. [How to Add Data](#how-to-add-data)
4. [Type Definitions](#type-definitions)
5. [Build & Deployment](#build--deployment)
6. [Troubleshooting](#troubleshooting)
7. [Performance Tips](#performance-tips)

---

## 🏗️ Architecture Overview

### Technology Stack

- **Framework:** Next.js 16.3.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Pattern:** React Components (Client-side)
- **Data:** Static TypeScript modules

### Directory Structure

```
app/
├── types/
│   └── prayer.ts                    # All TypeScript interfaces
├── data/
│   ├── core-prayers.ts              # Base prayers (15 items)
│   ├── routines.ts                  # Routines (3 items)
│   ├── daily-prayers.ts             # Daily prayers (7 items)
│   ├── ceremonies.ts                # Ceremonies (10 items)
│   └── index.ts                     # Aggregated exports
├── utils/
│   └── prayer-helpers.ts            # Helper functions
├── page.tsx                         # Main component
├── layout.tsx                       # Root layout
├── globals.css                      # Global styles
└── favicon.ico

node_modules/                        # Dependencies
public/                              # Static assets
.next/                              # Build output
```

---

## ❓ Q&A Management

### Overview

Q&A (Questions and Answers) about meditation is stored separately in `app/data/meditation-qa.ts` for easy maintenance and updates.

**Current Q&A Count:** 12 items  
**Categories:** 5 categories

### Q&A Structure

#### QAItem Interface

```typescript
export interface QAItem {
    id: string;          // Unique identifier (qa-1, qa-2, etc.)
    question: string;    // Question in Thai
    answer: string;      // Answer in Thai
    category: string;    // Category name (ประเภท)
}
```

#### Example Q&A Entry

```typescript
{
    id: 'qa-1',
    question: 'สมาธิคืออะไร',
    answer: 'สมาธิ หมายถึง การรวมสติ ความสำนึกไว้ที่เดียว มิให้ใจเสียสติหรือหลงไปตามความคิดต่างๆ ช่วยให้ใจสงบและมีสมาธิสูง',
    category: 'พื้นฐาน',
}
```

### Current Categories

1. **พื้นฐาน** - Basic concepts about meditation
2. **ประโยชน์** - Benefits of meditation
3. **วิธีปฏิบัติ** - Techniques and practices
4. **ปัญหาทั่วไป** - Common problems and solutions
5. **ทั่วไป** - General questions

### How to Add Q&A

#### Step 1: Open the Q&A File

File: `app/data/meditation-qa.ts`

#### Step 2: Add New Q&A Item

Insert a new object in the `meditationQA` array:

```typescript
export const meditationQA: QAItem[] = [
    // ... existing items (qa-1 to qa-12)
    
    {
        id: 'qa-13',                          // New unique ID
        question: 'Your question in Thai?',   // The question
        answer: 'Your answer in Thai.',       // The answer (can be multi-line)
        category: 'Category name',            // Use existing category or create new one
    }
];
```

#### Step 3: Choose or Create Category

**Existing categories (recommended to use these):**
- `'พื้นฐาน'` - Basic concepts
- `'ประโยชน์'` - Benefits
- `'วิธีปฏิบัติ'` - Techniques
- `'ปัญหาทั่วไป'` - Problem solving
- `'ทั่วไป'` - General

**Or create new category:**

```typescript
{
    id: 'qa-13',
    question: 'Your question?',
    answer: 'Your answer.',
    category: 'New Category',  // Will appear automatically in filter
}
```

#### Step 4: Format Answer

For multi-line answers, use line breaks:

```typescript
answer: 'First paragraph.\n\nSecond paragraph.\n\nThird paragraph.'
```

Or keep it simple in one line (works fine too).

#### Step 5: Test

```bash
npm run build
npm run dev
```

Then open the app and click the Q&A button to verify:
- Your new Q&A appears in the list
- Category filter works correctly
- Answer displays properly

### How to Edit Q&A

#### Modify Existing Answer

File: `app/data/meditation-qa.ts`

Find the item by ID and edit the `answer` field:

```typescript
{
    id: 'qa-1',
    question: 'สมาธิคืออะไร',
    answer: 'Updated answer text here...',  // ← Edit this
    category: 'พื้นฐาน',
}
```

#### Change Category

Edit the `category` field:

```typescript
{
    id: 'qa-5',
    question: 'ท่านั่งสมาธิที่ถูกต้อง',
    answer: '...',
    category: 'วิธีปฏิบัติ',  // ← Change category here
}
```

#### Update Question

Edit the `question` field:

```typescript
{
    id: 'qa-3',
    question: 'Updated question here?',  // ← Edit this
    answer: '...',
    category: 'วิธีปฏิบัติ',
}
```

### How to Delete Q&A

Remove the entire object from the `meditationQA` array:

```typescript
export const meditationQA: QAItem[] = [
    // ... other items
    
    // Remove this entire block:
    // {
    //     id: 'qa-10',
    //     question: '...',
    //     answer: '...',
    //     category: '...',
    // }
    
    // ... remaining items
];
```

### Helper Functions

The file also includes utility functions for the UI:

```typescript
// Get all unique categories
export const getQACategories = (): string[] => {
    const categories = new Set(meditationQA.map((qa) => qa.category));
    return Array.from(categories);
};

// Get Q&A items by category
export const getQAByCategory = (category: string): QAItem[] => {
    return meditationQA.filter((qa) => qa.category === category);
};

// Get single Q&A by ID
export const getQAById = (id: string): QAItem | undefined => {
    return meditationQA.find((qa) => qa.id === id);
};
```

You generally don't need to edit these unless adding new features.

### Component Architecture

Q&A is separated into modular components for better organization:

```
MeditationQA (Main container)
    ├── QAHeader (Title + close button)
    ├── QACategoryFilter (Category buttons)
    ├── QAList (List of Q&As)
    └── QADetail (Detailed answer view)
```

**File locations:**
- `app/components/MeditationQA.tsx` - Main component
- `app/components/QAHeader.tsx` - Header
- `app/components/QACategoryFilter.tsx` - Category filter
- `app/components/QAList.tsx` - Q&A list
- `app/components/QADetail.tsx` - Answer detail

### Dark Mode Support

All Q&A components support dark mode automatically. No additional styling needed.

### How to Add More Categories

Categories are automatically detected from the Q&A items' `category` field:

```typescript
// Just add items with new category names
{
    id: 'qa-20',
    question: '...',
    answer: '...',
    category: 'Advanced Topics',  // New category automatically added
}
```

The category filter will automatically include it.

---

## 📊 Data Structure

### Relationship Diagram

```
┌─────────────────────────────────────────────────────────┐
│              Core Prayers (15 items)                    │
│                                                         │
│  - phra-ratanantrai                                     │
│  - namo-tassa                                           │
│  - precepts-five                                        │
│  - victory-buddha                                       │
│  - ... (11 more)                                        │
└──────────────┬──────────────────────────────────────────┘
               │
        ┌──────┴──────┬──────────┬────────────┐
        ▼             ▼          ▼            ▼
    Routines     DailyPrayers Ceremonies   (Direct use)
    (3 items)    (7 items)    (10 items)
    
    • Morning     • Monday     • Funeral
    • Evening     • Tuesday    • Merit
    • 2pm         • ...        • Fabric
                  • Sunday     • ...
```

### Core Data Types

#### 1. CorePrayer

```typescript
interface CorePrayer {
    id: string;                    // Unique identifier
    title: string;                 // Display name
    paliText: string;              // Pali reference
    htmlContent: string;           // HTML with Tailwind classes
    meaning?: string;              // Optional meaning/translation
}
```

**Location:** `app/data/core-prayers.ts`

**Example:**
```typescript
{
    id: 'phra-ratanantrai',
    title: "บทบูชาพระรัตนตรัย",
    paliText: "อรหัง สัมมาสัมพุทโธ ภะคะวา",
    htmlContent: `
        <p class="font-semibold text-amber-800 dark:text-amber-400 mb-2">
            (กราบ 3 ครั้ง)
        </p>
        <p class="mb-3">อรหัง สัมมาสัมพุทโธ ภะคะวา...</p>
    `,
    meaning: "บูชา และนมัสการพระรัตนตรัย"
}
```

#### 2. PrayerReference

```typescript
interface PrayerReference {
    prayerId: string;              // Reference to CorePrayer.id
    order: number;                 // Sequence number
    title?: string;                // Optional override title
}
```

**Usage:** Used in Routines, DailyPrayers, and Ceremonies

#### 3. Routine

```typescript
interface Routine {
    id: string;
    title: string;
    description: string;
    category: 'morning' | 'evening' | '2pm';
    prayers: PrayerReference[];
}
```

**Location:** `app/data/routines.ts`

**Categories:**
- `'morning'` - Morning routine
- `'evening'` - Evening routine
- `'2pm'` - 8 PM routine

#### 4. DailyPrayer

```typescript
interface DailyPrayer {
    id: string;
    title: string;
    day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    dayThai: string;               // Thai day name
    description?: string;
    prayers: PrayerReference[];
}
```

**Location:** `app/data/daily-prayers.ts`

#### 5. Ceremony

```typescript
interface Ceremony {
    id: string;
    title: string;
    description: string;
    category: 'funeral' | 'merit' | 'fabric' | 'dedication' | 'consecration' | 'sick' | 'ordination' | 'other';
    categoryThai: string;          // Thai category name
    prayers: PrayerReference[];
}
```

**Location:** `app/data/ceremonies.ts`

---

## 📝 How to Add Data

### Step 1: Identify Data Type

Determine what you're adding:
- **New prayer** → Core Prayer
- **New prayer combination** → Routine/Daily/Ceremony
- **New day** → Daily Prayer
- **New event** → Ceremony

### Step 2: Check for Duplicates

```bash
# Check if ID already exists
grep -r "id: 'my-id'" app/data/

# Should return nothing if unique
```

### Step 3: Add to Correct File

#### Adding Core Prayer

File: `app/data/core-prayers.ts`

```typescript
export const corePrayers: CorePrayer[] = [
    // ... existing items
    
    {
        id: 'unique-id',
        title: "Title in Thai",
        paliText: "Pali text",
        htmlContent: `<p>Content</p>`,
        meaning: "Meaning"
    }
];
```

#### Adding Routine

File: `app/data/routines.ts`

```typescript
export const routines: Routine[] = [
    // ... existing items
    
    {
        id: 'unique-routine-id',
        title: 'Routine name',
        description: 'Description',
        category: 'morning', // or 'evening', '2pm'
        prayers: [
            { prayerId: 'existing-prayer-id', order: 1 },
            { prayerId: 'another-prayer-id', order: 2 }
        ]
    }
];
```

#### Adding Daily Prayer

File: `app/data/daily-prayers.ts`

```typescript
export const dailyPrayers: DailyPrayer[] = [
    // ... existing items
    
    {
        id: 'unique-daily-id',
        title: 'Day prayer name',
        day: 'monday', // or other days
        dayThai: 'วันจันทร์',
        description: 'Description',
        prayers: [
            { prayerId: 'prayer-id-1', order: 1 },
            { prayerId: 'prayer-id-2', order: 2 }
        ]
    }
];
```

#### Adding Ceremony

File: `app/data/ceremonies.ts`

```typescript
export const ceremonies: Ceremony[] = [
    // ... existing items
    
    {
        id: 'unique-ceremony-id',
        title: 'Ceremony name',
        description: 'Description',
        category: 'funeral', // or other categories
        categoryThai: 'พิธีศพ',
        prayers: [
            { prayerId: 'prayer-id-1', order: 1 },
            { prayerId: 'prayer-id-2', order: 2 }
        ]
    }
];
```

### Step 4: Test

```bash
npm run build
npm run dev
```

---

## 🔤 Type Definitions

All types are defined in `app/types/prayer.ts`:

```typescript
// Core Prayer
export interface CorePrayer {
    id: string;
    title: string;
    paliText: string;
    htmlContent: string;
    meaning?: string;
}

// Prayer Reference in collections
export interface PrayerReference {
    prayerId: string;
    order: number;
    title?: string;
}

// Routine
export interface Routine {
    id: string;
    title: string;
    description: string;
    category: 'morning' | 'evening' | '2pm';
    prayers: PrayerReference[];
}

// Daily Prayer
export interface DailyPrayer {
    id: string;
    title: string;
    day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    dayThai: string;
    description?: string;
    prayers: PrayerReference[];
}

// Ceremony
export interface Ceremony {
    id: string;
    title: string;
    description: string;
    category: 'funeral' | 'merit' | 'fabric' | 'dedication' | 'consecration' | 'sick' | 'ordination' | 'other';
    categoryThai: string;
    prayers: PrayerReference[];
}

// Main view type
export type ViewType = 'core' | 'routine' | 'daily' | 'ceremony';

// Aggregated data
export interface PrayerAppData {
    corePrayers: CorePrayer[];
    routines: Routine[];
    dailyPrayers: DailyPrayer[];
    ceremonies: Ceremony[];
}
```

---

## 🚀 Build & Deployment

### Development

```bash
npm run dev
# Runs on http://localhost:3000
# Hot reload enabled
```

### Production Build

```bash
npm run build
npm run start
```

### Build Output

- Location: `.next/`
- Static HTML pages
- Optimized JavaScript
- No dynamic server-side rendering needed

### Deployment Options

1. **Vercel (Recommended)**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Docker**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

3. **Self-hosted (Node.js)**
   ```bash
   npm install
   npm run build
   NODE_ENV=production npm start
   ```

---

## 🔍 Troubleshooting

### Issue 1: Build Error - "Export X doesn't exist"

**Cause:** Missing import or typo in file path

**Solution:**
```bash
# Check file exists
ls app/data/core-prayers.ts

# Check import path is correct
grep -n "export const corePrayers" app/data/core-prayers.ts

# Check exports in index.ts
grep -n "export" app/data/index.ts
```

### Issue 2: Prayer Not Showing

**Cause:** Incorrect prayerId reference

**Solution:**
```bash
# List all available prayer IDs
grep "id: '" app/data/core-prayers.ts

# Make sure prayerId matches exactly
grep "prayerId: 'my-prayer-id'" app/data/*.ts
```

### Issue 3: Type Error - "Property does not exist"

**Cause:** Missing type definition or wrong property

**Solution:**
```bash
# Check type definitions
cat app/types/prayer.ts

# Ensure all objects match interface
# Example: Routine must have id, title, description, category, prayers
```

### Issue 4: Styling Looks Wrong

**Cause:** Missing Tailwind CSS class or wrong class name

**Solution:**
```bash
# Check Tailwind classes are valid
# Reference: https://tailwindcss.com/docs

# Common classes:
# - mb-3 (margin-bottom)
# - font-semibold (font weight)
# - text-amber-800 (color)
# - dark:text-amber-400 (dark mode)
```

### Issue 5: Search Not Working

**Cause:** Search term not matching fields

**Solution:**
The search function looks for:
- `title` field
- `dayThai` field (for daily prayers)
- `categoryThai` field (for ceremonies)
- `description` field

Ensure these fields contain searchable text.

---

## ⚡ Performance Tips

### 1. Data Loading

Currently, all data is loaded at build time (static). For 100+ prayers, this is still efficient because:
- No database queries
- No API calls
- Instant rendering
- Small bundle size

### 2. Potential Optimizations (Future)

If adding more data, consider:

```typescript
// Current: All data loaded
import { corePrayers } from './data/core-prayers';

// Future: Lazy loading (if needed)
const corePrayers = await import('./data/core-prayers');
```

### 3. Caching Strategy

- Browser caches static files
- Next.js caches production builds
- No cache busting needed unless deployment changes

### 4. Bundle Size

Current metrics:
- Core prayers: ~30KB
- Routines: ~5KB
- Daily prayers: ~7KB
- Ceremonies: ~8KB
- **Total data: ~50KB** (compressed: ~12KB)

Acceptable even for slower connections.

---

## 📞 Maintenance Checklist

Regular tasks:

- [ ] **Weekly:** Check for TypeScript errors
  ```bash
  npm run build
  ```

- [ ] **Monthly:** Verify all prayer IDs are unique
  ```bash
  grep -o "id: '[^']*'" app/data/*.ts | sort | uniq -d
  ```

- [ ] **Quarterly:** Update dependencies
  ```bash
  npm update
  npm audit fix
  ```

- [ ] **Annually:** Performance audit
  ```bash
  npm run build
  # Check bundle size in .next/static/
  ```

---

## 🔐 Security Considerations

1. **HTML Content:** Uses `dangerouslySetInnerHTML` - ensure content is trusted
2. **No User Input:** No database, no user submissions
3. **Static Content:** No vulnerability from dynamic data
4. **Dependencies:** Keep updated for security patches

---

## 📞 Contact & Support

For technical issues:
- Check this document first
- Run TypeScript type check: `npm run build`
- Check browser console for errors: `F12 → Console`
- Contact: [maintainer email]

---

**Last Updated:** September 2026

**Version:** 1.0.0

**Maintained by:** Web Development Team
