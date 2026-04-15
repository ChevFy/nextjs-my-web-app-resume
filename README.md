# Nextjs About Me

เว็บพอร์ตโฟลิโอ/แนะนำตัวส่วนตัว พัฒนาด้วย Next.js (App Router) รองรับ 2 ภาษา (ไทย/อังกฤษ) พร้อมหน้า Home, Projects, Services และ Contact

## AI Note

README ฉบับนี้จัดทำด้วย AI (GitHub Copilot)

## Features

- รองรับหลายภาษา: `en`, `th` ด้วย dictionary JSON
- Routing แบบ locale ผ่าน path เช่น `/en`, `/th`
- Middleware เปลี่ยนเส้นทางไป locale เริ่มต้นอัตโนมัติ (`en`)
- หน้าแสดงข้อมูลหลัก:
	- Home (โปรไฟล์, ประสบการณ์, Tech Stack)
	- Projects
	- Services
	- Contact
- UI แบบ responsive และมี animation ด้วย `framer-motion`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Project Structure

```text
app/
	[locale]/
		layout.tsx
		page.tsx
		globals.css
		components/
		contact/page.tsx
		project/page.tsx
		services/page.tsx
dictionaries/
	en.json
	th.json
middleware.ts
```

## Getting Started

### 1) Install dependencies

```bash
pnpm install
```

### 2) Run development server

```bash
pnpm dev
```

เปิดเบราว์เซอร์ที่ `http://localhost:3000`

## Available Scripts

```bash
pnpm dev    # Run dev server
pnpm build  # Build for production
pnpm start  # Start production server
pnpm lint   # Run ESLint
```

## Locale Behavior

- หากเข้า URL ที่ไม่มี locale เช่น `/project` ระบบจะ rewrite ไปที่ `/en/project`
- หากระบุ locale แล้ว เช่น `/th` หรือ `/en/services` จะใช้งานตามภาษานั้นทันที

## Deployment

สามารถ deploy ได้บน Vercel หรือแพลตฟอร์มที่รองรับ Next.js

ตัวอย่างบน Vercel:

```bash
pnpm build
```

จากนั้นตั้งค่า start command เป็น:

```bash
pnpm start
```
