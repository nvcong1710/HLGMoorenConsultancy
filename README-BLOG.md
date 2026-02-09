# Margin AI Blog System - Hướng dẫn sử dụng

Hệ thống blog tự động load và hiển thị các bài viết từ file Markdown.

## Cấu trúc thư mục

```
project/
├── index.html              # Trang chủ
├── projects.html           # Trang danh sách blog
├── blog-detail.html        # Trang chi tiết blog
├── blogs/                  # Thư mục chứa file markdown
│   ├── ai-transformation-guide.md
│   ├── automation-workflows.md
│   └── lms-implementation.md
└── assets/
    ├── media/             # Hình ảnh
    ├── css/               # CSS files
    └── js/                # JavaScript files
```

## Cách thêm bài viết mới

### Bước 1: Tạo file Markdown

Tạo file `.md` mới trong thư mục `blogs/`:

```bash
blogs/ten-bai-viet.md
```

### Bước 2: Viết nội dung

Sử dụng Markdown syntax:

```markdown
# Tiêu đề bài viết

Giới thiệu bài viết...

## Phần 1

Nội dung phần 1...

### Tiêu đề con

- Danh sách
- Item 2

**In đậm**, *In nghiêng*

> Trích dẫn

` ``javascript
// Code example
const example = "Hello";
` ``

| Cột 1 | Cột 2 |
|-------|-------|
| A     | B     |

![Alt text](image.jpg)
```

### Bước 3: Thêm metadata vào projects.html

Mở file `projects.html`, tìm mảng `blogs` và thêm entry mới:

```javascript
const blogs = [
  // ... các blog hiện có
  {
    slug: 'ten-bai-viet',                    // URL slug (unique)
    title: 'Tiêu đề hiển thị',              // Tiêu đề blog
    excerpt: 'Mô tả ngắn...',               // Excerpt hiển thị trên card
    category: 'AI Strategy',                 // Danh mục
    image: 'assets/media/image.jpg',        // Ảnh đại diện
    date: '2024-02-10',                     // Ngày đăng
    readTime: '5 min read'                  // Thời gian đọc
  }
];
```

### Bước 4: Thêm metadata vào blog-detail.html

Mở file `blog-detail.html`, tìm object `blogData` và thêm:

```javascript
const blogData = {
  // ... các blog hiện có
  'ten-bai-viet': {
    title: 'Tiêu đề hiển thị',
    category: 'AI Strategy',
    image: 'assets/media/image.jpg',
    date: '2024-02-10',
    readTime: '5 min read',
    author: 'Tên tác giả',
    file: 'blogs/ten-bai-viet.md'          // Đường dẫn file markdown
  }
};
```

⚠️ **Lưu ý quan trọng**: 
- `slug` trong `projects.html` phải khớp với key trong `blogData` của `blog-detail.html`
- Đường dẫn `file` phải chính xác tới file markdown

## Tính năng

### 1. Trang danh sách (projects.html)

- **Grid layout** responsive (1-3 cột tùy màn hình)
- **Hover effects** với animation
- **Category badges** màu sắc
- **Loading state** khi tải dữ liệu
- **Staggered animation** khi hiển thị cards

### 2. Trang chi tiết (blog-detail.html)

- **Markdown rendering** tự động với marked.js
- **Syntax highlighting** cho code blocks (highlight.js)
- **Responsive design** cho mobile
- **Share buttons** (Twitter, LinkedIn, Copy link)
- **Hero image** với gradient overlay
- **Auto-generated** table of contents (từ headings)

### 3. Markdown Support

Hỗ trợ đầy đủ Markdown syntax:
- Headings (H1-H6)
- Text formatting (bold, italic)
- Lists (ordered, unordered)
- Links và images
- Code blocks với syntax highlighting
- Tables
- Blockquotes
- Horizontal rules

## Styling

### Màu sắc chính

```css
Background: #050e13
Text: #e0e0e0
Accent: #3b82f6 (blue)
Gradient: cyan -> blue -> purple
```

### Fonts

- **Headings**: EB Garamond (serif)
- **Body**: Inter (sans-serif)
- **Code**: Courier New (monospace)

### Animations

- Fade in với stagger effect
- Hover scale và shadow
- Gradient border animation
- Smooth color transitions

## Tối ưu hóa

### Performance

1. **Lazy loading** cho hình ảnh
2. **CDN** cho libraries (Tailwind, marked.js, highlight.js)
3. **Responsive images** với `srcset` (nên thêm)
4. **Minimize** CSS/JS trước khi deploy

### SEO

1. Update `<title>` tags
2. Thêm meta descriptions
3. Thêm Open Graph tags
4. Sitemap cho blog posts
5. Schema markup cho articles

### Accessibility

- Semantic HTML
- Alt text cho images
- ARIA labels cho interactive elements
- Keyboard navigation support
- Color contrast ratios

## Troubleshooting

### Blog không hiển thị

1. Kiểm tra console có lỗi không
2. Verify đường dẫn file markdown đúng
3. Kiểm tra slug khớp giữa 2 files
4. Clear browser cache

### Code highlighting không hoạt động

1. Verify CDN links loaded
2. Check language tag đúng (```javascript, ```python, etc.)
3. Ensure hljs.highlightElement() được gọi

### Images không load

1. Kiểm tra đường dẫn relative
2. Verify file tồn tại trong thư mục assets
3. Check permissions

## Mở rộng

### Thêm tính năng

1. **Search functionality**: Thêm search box filter blogs
2. **Categories/Tags**: Filter theo category
3. **Pagination**: Cho nhiều bài viết
4. **Related posts**: Gợi ý bài viết liên quan
5. **Comments**: Integrate Disqus hoặc custom
6. **RSS feed**: Auto-generate từ blog list
7. **Dark/Light mode**: Theme switcher

### Tích hợp CMS

Để quản lý dễ hơn, có thể tích hợp:
- **Headless CMS**: Strapi, Contentful
- **Git-based**: Netlify CMS, Forestry
- **Database**: Firebase, Supabase

### Analytics

Track performance với:
- Google Analytics
- Plausible (privacy-friendly)
- Custom event tracking

## Support

Có vấn đề? [Contact us](index.html#contact-us)

---

**Built with ❤️ by Margin AI Team**
