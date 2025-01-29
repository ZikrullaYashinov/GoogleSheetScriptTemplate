# Google Sheets CRUD Template

Bu loyiha **Google Sheets Script** orqali CRUD (Create, Read, Update, Delete) operatsiyalarini amalga oshirish uchun tayyor **shablon (template)** hisoblanadi. Ushbu shablon yordamida **Google Sheets** bilan ishlashni avtomatlashtirish va ma'lumotlarni tezkor boshqarish mumkin.

## 📌 Foydalanish bo‘yicha qo‘llanma

### 1️⃣ Google Sheet-da yangi fayl yaratish

Avvalo, **Google Drive** orqali yangi **Google Sheet** hujjatini yarating.

### 2️⃣ Script muharririga o‘tish

- **Extensions (Qo‘shimchalar) → Apps Script** bo‘limiga kiring.
- Yangi **Google Apps Script muharriri** ochiladi.

### 3️⃣ Kodingizni qo‘shish

- Ushbu repository-dagi **kodni nusxalab** script muharririga joylashtiring.
- **File → Save** (CTRL + S) orqali saqlang.

### 4️⃣ Google Sheets uchun sozlamalar

Google Sheets ichida **ma'lumotlar bazasi sifatida** ishlashi uchun **quyidagi qadamlarni bajaring**:

#### 🔹 `config` nomli sheet yaratish

| Table name | Generated id |
| ---------- | ------------ |
| students   | 0            |

- Ushbu jadvalda **har bir jadval nomi** va **avtomatik ID yaratish uchun oxirgi ID** saqlanadi.

#### 🔹 Har bir jadval uchun alohida sheet ochish

- Har bir **ma'lumotlar jadvali** uchun **alohida sheet** oching.
- Sheet nomi **config sheetdagi "Table name" ustuni bilan bir xil** bo‘lishi kerak.
- Masalan, **"students"** nomli sheet yaratish va ustunlarni qo‘shish mumkin.

### 5️⃣ Yangi versiyani deploy qilish

- **Deploy → New Deployment** bo‘limiga o‘ting.
- **Type: Web app** ni tanlang.
- **Execute as: Me** (O‘zim) deb tanlang.
- **Who has access: Anyone** (Hamma) qilib qo‘ying.
- Deploy tugmasini bosib, **URL** ni oling.

**✅ Endi API chaqiriqlar yordamida ushbu Google Sheet bilan ishlash mumkin!**

## 🎥 Video darslik

Ko‘proq tushunish uchun **quyidagi video darsni tomosha qiling**:

➡️ [YouTube video darslik](https://youtube.com/@zikrullayashinov?si=_MAm1V0WtSIKxyh1) *(Tez orada yuklanadi!)*

## 🔗 Qo‘shimcha manbalar

📢 **Telegram kanal:** [@ZikrullaBlog](https://t.me/ZikrullaBlog)\
💰 **Donate:** [tirikchilik.uz/zikrulla](https://tirikchilik.uz/zikrulla)

