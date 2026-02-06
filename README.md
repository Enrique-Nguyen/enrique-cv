# Enrique CV - Trang Web CV Cá Nhân

Đây là trang web CV/portfolio cá nhân của tôi, được xây dựng bằng Next.js, TypeScript và Tailwind CSS. Trang web giới thiệu về bản thân, kỹ năng, dự án và thông tin liên hệ.

## ✨ Tính Năng

- **Responsive Design**: Thiết kế đáp ứng trên mọi thiết bị
- **Dark Mode**: Chế độ tối/sáng có thể chuyển đổi
- **Đa Ngôn Ngữ**: Hỗ trợ tiếng Anh, tiếng Nhật và tiếng Việt
- **Trang Chủ**: Giới thiệu cá nhân, kỹ năng và dự án nổi bật
- **Dự Án**: Hiển thị danh sách các dự án đã thực hiện
- **Liên Hệ**: Thông tin liên hệ

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: [Next.js 15](https://nextjs.org/) với App Router
- **Ngôn Ngữ**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) từ Vercel
- **Package Manager**: [Bun](https://bun.sh/)

## 🚀 Cài Đặt và Chạy

### Yêu Cầu Hệ Thống

- Node.js 18+ hoặc Bun
- npm, yarn, pnpm hoặc bun

### Cài Đặt

1. Clone repository:
```bash
git clone <repository-url>
cd enrique-cv
```

2. Cài đặt dependencies:
```bash
bun install
# hoặc
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

3. Chạy server phát triển:
```bash
bun dev
# hoặc
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt để xem kết quả.

## 📁 Cấu Trúc Dự Án

```
enrique-cv/
├── app/                    # Next.js App Router
│   ├── globals.css        # CSS toàn cục
│   ├── layout.tsx         # Layout chính
│   ├── page.tsx           # Trang chủ
│   ├── contact/           # Trang liên hệ
│   └── projects/          # Trang dự án
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── home/             # Components trang chủ
│   ├── projects/         # Components trang dự án
│   └── shared/           # Components dùng chung
├── lib/                  # Utilities và logic
│   ├── data.ts           # Dữ liệu dự án
│   ├── translations.ts   # Đa ngôn ngữ
│   ├── language-context.tsx # Context ngôn ngữ
│   └── utils.ts          # Helper functions
└── public/               # Static assets
    └── images/           # Hình ảnh
```

## 🎨 Tùy Chỉnh

### Thay Đổi Nội Dung

- **Thông tin cá nhân**: Chỉnh sửa `lib/data.ts`
- **Dịch thuật**: Chỉnh sửa `lib/translations.ts`
- **Styling**: Chỉnh sửa các file CSS và component

### Thêm Dự Án Mới

Thêm dự án mới vào mảng `projects` trong `lib/data.ts`:

```typescript
{
  id: "new-project",
  title: "Tên Dự Án",
  description: "Mô tả dự án",
  image: "/images/project-image.jpg",
  technologies: ["Tech1", "Tech2"],
  githubUrl: "https://github.com/username/repo",
  liveUrl: "https://project-url.com"
}
```

## 📦 Build và Triển Khai

### Build cho Production

```bash
bun run build
# hoặc
npm run build
```

### Triển Khai trên Vercel

1. Push code lên GitHub
2. Kết nối repository với [Vercel](https://vercel.com)
3. Vercel sẽ tự động build và deploy

## 🤝 Đóng Góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📞 Liên Hệ

Nguyễn Phú Nguyên - [nguyenphunguyen2005@gmail.com](mailto:nguyenphunguyen2005@gmail.com)

Link dự án: [https://github.com/username/enrique-cv](https://github.com/username/enrique-cv)

---
