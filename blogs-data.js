/**
 * blogs-data.js
 *
 * Each entry has top-level fields: slug, image, date, readTime, author
 * plus language blocks:  en: { title, excerpt, category, file }
 *                        vi: { title, excerpt, category, file }
 *
 * File naming convention:
 *   blogs/<slug>.vi.md   – Vietnamese article
 *   blogs/<slug>.en.md   – English article
 *
 * The original .md files (no suffix) are the Vietnamese versions.
 * Set vi.file to the original path until you rename them to .vi.md.
 */

const blogs = [
  {
    slug: "anapqui-strategic-transformation",
    image: "assets/media/blog-img/anapqui-strategic-transformation/cover.png",
    date: "2026-02-27",
    readTime: "3 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "From Raw Material Export to Premium Consumer Brand: ANAPQUI's Journey of Transformation",
      excerpt:
        "Discover how ANAPQUI escaped the raw material wholesale trap and transformed into a high-value consumer brand through comprehensive strategic consulting from HLG Mooren Consulting.",
      category: "Business Strategy",
      file: "blogs/anapqui-strategic-transformation.en.md",
    },
    vi: {
      title:
        "Từ Xuất Khẩu Nguyên Liệu Thô Đến Thương Hiệu Tiêu Dùng Cao Cấp: Hành Trình Chuyển Mình Của ANAPQUI",
      excerpt:
        "Khám phá cách ANAPQUI thoát khỏi bẫy bán buôn nguyên liệu thô và chuyển mình thành thương hiệu tiêu dùng giá trị cao thông qua tư vấn chiến lược toàn diện từ HLG Mooren Consulting.",
      category: "Chiến lược kinh doanh",
      file: "blogs/anapqui-strategic-transformation.md",
    },
  },
  {
    slug: "dawn-bread-operations",
    image: "assets/media/blog-img/dawn-bread-operations/cover.jpg",
    date: "2026-02-27",
    readTime: "4 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "Breaking Space Limits: Supply Chain and Operations Optimization for Dawn Bread",
      excerpt:
        "Discover how HLG Mooren Consulting helped FMCG giant Dawn Bread optimize their supply chain, resolve space bottlenecks, and increase production capacity by 20% without expanding their facility.",
      category: "Supply Chain Optimization",
      file: "blogs/dawn-bread-operations.en.md",
    },
    vi: {
      title:
        "Phá Vỡ Giới Hạn Không Gian: Tối Ưu Hóa Chuỗi Cung Ứng và Vận Hành cho Dawn Bread",
      excerpt:
        "Khám phá cách HLG Mooren Consulting giúp tập đoàn FMCG Dawn Bread tối ưu hóa chuỗi cung ứng, giải quyết nút thắt không gian và tăng công suất sản xuất 20% mà không mở rộng cơ sở vật chất.",
      category: "Tối ưu hóa chuỗi cung ứng",
      file: "blogs/dawn-bread-operations.md",
    },
  },
  {
    slug: "specialty-coffee-strategy",
    image: "assets/media/blog-img/specialty-coffee-strategy/cover.png",
    date: "2026-02-27",
    readTime: "4 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "Breaking the Small Scale Trap: Value Chain & Branding Strategy for a Specialty Coffee Business",
      excerpt:
        "How HLG Mooren Consulting helped a South American specialty coffee enterprise standardize its value chain, rebrand, and leverage outsourcing to overcome quality inconsistencies and achieve sustainable growth.",
      category: "Business Strategy",
      file: "blogs/specialty-coffee-strategy.en.md",
    },
    vi: {
      title:
        "Phá Vỡ Bẫy Quy Mô Nhỏ: Chiến Lược Chuỗi Giá Trị & Thương Hiệu cho Doanh Nghiệp Cà Phê Đặc Sản",
      excerpt:
        "Cách HLG Mooren Consulting giúp một doanh nghiệp cà phê đặc sản Nam Mỹ chuẩn hóa chuỗi giá trị, tái định vị thương hiệu và tận dụng outsourcing để vượt qua vấn đề chất lượng không đồng nhất.",
      category: "Chiến lược kinh doanh",
      file: "blogs/specialty-coffee-strategy.md",
    },
  },
  {
    slug: "anvies-operations-transformation",
    image: "assets/media/blog-img/anvies-operations-transformation/cover.jpg",
    date: "2026-02-28",
    readTime: "3 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "From Local Workshop to Standardized System: The Transformation of Anvies",
      excerpt:
        "Discover how HLG Mooren Consulting helped Anvies standardize its production processes, prepare for HACCP certification, and build a robust B2B distribution strategy for sustainable growth.",
      category: "Business Strategy",
      file: "blogs/anvies-operations-transformation.en.md",
    },
    vi: {
      title:
        "Từ Xưởng Địa Phương Đến Hệ Thống Chuẩn Hóa: Sự Chuyển Mình Của Anvies",
      excerpt:
        "Khám phá cách HLG Mooren Consulting giúp Anvies chuẩn hóa quy trình sản xuất, chuẩn bị chứng nhận HACCP và xây dựng chiến lược phân phối B2B bền vững.",
      category: "Chiến lược kinh doanh",
      file: "blogs/anvies-operations-transformation.md",
    },
  },
  {
    slug: "csc-foods-pastry",
    image: "assets/media/blog-img/csc-foods-pastry/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "Unlocking the Pastry Market: New Product Development and Model Transformation for CSC Foods",
      excerpt:
        "Discover how HLG Mooren Consulting guided CSC Foods in transitioning from a B2B raw material supplier to a B2C consumer pastry brand, establishing automated production and a robust retail distribution strategy.",
      category: "New Product Development",
      file: "blogs/csc-foods-pastry.en.md",
    },
    vi: {
      title:
        "Mở Khóa Thị Trường Bánh Ngọt: Phát Triển Sản Phẩm Mới và Chuyển Đổi Mô Hình cho CSC Foods",
      excerpt:
        "Khám phá cách HLG Mooren Consulting hướng dẫn CSC Foods chuyển đổi từ nhà cung cấp nguyên liệu thô B2B sang thương hiệu bánh ngọt B2C, thiết lập sản xuất tự động và chiến lược phân phối bán lẻ.",
      category: "Phát triển sản phẩm mới",
      file: "blogs/csc-foods-pastry.md",
    },
  },
  {
    slug: "dulces-flower-restructuring",
    image: "assets/media/blog-img/dulces-flower-restructuring/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "From Local Family Business to National Growth Strategy: The Restructuring Journey of Dulces Flower",
      excerpt:
        "Discover how HLG Mooren Consulting helped Dulces Flower, a Colombian family-owned bakery ingredients business, restructure its operations, standardize processes, and build a national growth strategy.",
      category: "Business Strategy",
      file: "blogs/dulces-flower-restructuring.en.md",
    },
    vi: {
      title:
        "Từ Doanh Nghiệp Gia Đình Địa Phương Đến Chiến Lược Tăng Trưởng Quốc Gia: Hành Trình Tái Cơ Cấu Dulces Flower",
      excerpt:
        "Khám phá cách HLG Mooren Consulting giúp Dulces Flower, doanh nghiệp nguyên liệu bánh ngọt gia đình Colombia, tái cơ cấu vận hành, chuẩn hóa quy trình và xây dựng chiến lược tăng trưởng quốc gia.",
      category: "Chiến lược kinh doanh",
      file: "blogs/dulces-flower-restructuring.md",
    },
  },
  {
    slug: "ebeston-bakery-haccp",
    image: "assets/media/blog-img/ebeston-bakery-haccp/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "From Manual Ovens to Standardized HACCP: The Comprehensive Upgrade of Ebeston Bakery",
      excerpt:
        "Discover how HLG Mooren Consulting helped Ebeston Bakery in Ghana transition from manual operations to a standardized system, implementing HACCP and optimizing production for sustainable growth.",
      category: "Operations Optimization",
      file: "blogs/ebeston-bakery-haccp.en.md",
    },
    vi: {
      title:
        "Từ Lò Thủ Công Đến HACCP Chuẩn Hóa: Nâng Cấp Toàn Diện Của Ebeston Bakery",
      excerpt:
        "Khám phá cách HLG Mooren Consulting giúp Ebeston Bakery ở Ghana chuyển đổi từ vận hành thủ công sang hệ thống chuẩn hóa, triển khai HACCP và tối ưu hóa sản xuất bền vững.",
      category: "Tối ưu hóa vận hành",
      file: "blogs/ebeston-bakery-haccp.md",
    },
  },
  {
    slug: "fukia-growth-strategy",
    image: "assets/media/blog-img/fukia-growth-strategy/cover.png",
    date: "2026-02-28",
    readTime: "4 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "From Local Enterprise to Standardized Agricultural Brand: Comprehensive Growth Strategy for Fukia",
      excerpt:
        "Discover how HLG Mooren Consulting helped Fukia streamline its 23-product portfolio into a focused, scalable agricultural brand with clear B2B and B2C distribution strategies.",
      category: "Business Strategy",
      file: "blogs/fukia-growth-strategy.en.md",
    },
    vi: {
      title:
        "Từ Doanh Nghiệp Địa Phương Đến Thương Hiệu Nông Nghiệp Chuẩn Hóa: Chiến Lược Tăng Trưởng Toàn Diện cho Fukia",
      excerpt:
        "Khám phá cách HLG Mooren Consulting giúp Fukia tập trung hóa danh mục 23 sản phẩm thành thương hiệu nông nghiệp có thể mở rộng với chiến lược phân phối B2B và B2C rõ ràng.",
      category: "Chiến lược kinh doanh",
      file: "blogs/fukia-growth-strategy.md",
    },
  },
  {
    slug: "garner-wafers-restructuring",
    image: "assets/media/blog-img/garner-wafers-restructuring/cover.jpg",
    date: "2026-02-28",
    readTime: "5 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "From 1% Profit to 10% EBIT Goal: Comprehensive Restructuring at Garner Wafers",
      excerpt:
        "Discover how HLG Mooren Consulting helped South African manufacturer Garner Wafers transition from produce-to-order to produce-to-stock, optimizing logistics and cost calculations to target a 10% EBIT.",
      category: "Operations Optimization",
      file: "blogs/garner-wafers-restructuring.en.md",
    },
    vi: {
      title:
        "Từ Lợi Nhuận 1% Đến Mục Tiêu EBIT 10%: Tái Cơ Cấu Toàn Diện Tại Garner Wafers",
      excerpt:
        "Khám phá cách HLG Mooren Consulting giúp nhà sản xuất Nam Phi Garner Wafers chuyển đổi từ sản xuất theo đơn sang sản xuất theo tồn kho, tối ưu logistics và tính toán chi phí để hướng tới EBIT 10%.",
      category: "Tối ưu hóa vận hành",
      file: "blogs/garner-wafers-restructuring.md",
    },
  },
  {
    slug: "sos-growth-strategy",
    image: "assets/media/blog-img/sos-growth-strategy/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "From Uncontrolled Manual Production to Sustainable Growth Strategy: The Restructuring Journey of Dulces Flower y Cia (SOS)",
      excerpt:
        "How HLG Mooren Consulting helped Colombian food manufacturer SOS reduce customer dependency, implement quality systems, and build a national distribution strategy for scalable growth.",
      category: "Business Strategy",
      file: "blogs/sos-growth-strategy.en.md",
    },
    vi: {
      title:
        "Từ Sản Xuất Thủ Công Không Kiểm Soát Đến Chiến Lược Tăng Trưởng Bền Vững: Hành Trình Tái Cơ Cấu Của SOS",
      excerpt:
        "Cách HLG Mooren Consulting giúp nhà sản xuất thực phẩm Colombia SOS giảm phụ thuộc khách hàng, triển khai hệ thống chất lượng và xây dựng chiến lược phân phối quốc gia.",
      category: "Chiến lược kinh doanh",
      file: "blogs/sos-growth-strategy.md",
    },
  },
  {
    slug: "thanh-dong-strategy",
    image: "assets/media/blog-img/thanh-dong-strategy/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "From 95% Overcapacity to a 2026–2030 Growth Strategy: The Strategic Turning Point for Thanh Dong Mushroom",
      excerpt:
        "Discover how HLG Mooren Consulting helped a Vietnamese medicinal mushroom farm solve its 95% overcapacity issue by leveraging B2B sales to fund a high-margin B2C brand strategy.",
      category: "Business Strategy",
      file: "blogs/thanh-dong-strategy.en.md",
    },
    vi: {
      title:
        "Từ 95% Dư Thừa Công Suất Đến Chiến Lược Tăng Trưởng 2026–2030: Bước Ngoặt Chiến Lược Của Thanh Đông Mushroom",
      excerpt:
        "Khám phá cách HLG Mooren Consulting giúp trang trại nấm dược liệu Việt Nam giải quyết vấn đề dư thừa 95% công suất bằng cách tận dụng doanh số B2B để tài trợ cho chiến lược thương hiệu B2C.",
      category: "Chiến lược kinh doanh",
      file: "blogs/thanh-dong-strategy.md",
    },
  },
  {
    slug: "aprocam-restructuring-plan",
    image: "assets/media/blog-img/aprocam-restructuring-plan/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "From a 50% Production Drop to a 350,000kg Roadmap: The 5-Year Restructuring Plan of Aprocam Cacao Cooperative",
      excerpt:
        "Discover how HLG Mooren Consulting helped Aprocam, a Peruvian cacao cooperative, overcome a 50% production drop and heavy customer dependency with a 5-year strategic restructuring plan.",
      category: "Business Strategy",
      file: "blogs/aprocam-restructuring-plan.en.md",
    },
    vi: {
      title:
        "Từ Sản Lượng Giảm 50% Đến Lộ Trình 350.000kg: Kế Hoạch Tái Cơ Cấu 5 Năm Của Hợp Tác Xã Cacao Aprocam",
      excerpt:
        "Khám phá cách HLG Mooren Consulting giúp Aprocam, hợp tác xã cacao Peru, vượt qua sản lượng giảm 50% và phụ thuộc nặng vào khách hàng với kế hoạch tái cơ cấu chiến lược 5 năm.",
      category: "Chiến lược kinh doanh",
      file: "blogs/aprocam-restructuring-plan.md",
    },
  },
  {
    slug: "pili-eu-strategy",
    image: "assets/media/blog-img/pili-eu-strategy/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    author: "Hugo Mooren",
    en: {
      title:
        'From "Novel Food" to the EU Market: European Entry Strategy for the Philippine Pili Industry',
      excerpt:
        "Discover how the Philippine pili industry navigated EU novel food regulations and developed a strategic roadmap to successfully enter the European market through the Netherlands.",
      category: "Market Entry Strategy",
      file: "blogs/pili-eu-strategy.en.md",
    },
    vi: {
      title:
        'Từ "Thực Phẩm Mới" Đến Thị Trường EU: Chiến Lược Thâm Nhập Châu Âu Cho Ngành Pili Philippines',
      excerpt:
        "Khám phá cách ngành pili Philippines điều hướng các quy định thực phẩm mới của EU và phát triển lộ trình chiến lược để thành công thâm nhập thị trường châu Âu qua Hà Lan.",
      category: "Chiến lược thâm nhập thị trường",
      file: "blogs/pili-eu-strategy.md",
    },
  },
  {
    slug: "alta-montana-transformation",
    image: "assets/media/blog-img/alta-montana-transformation/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    author: "Hugo Mooren",
    en: {
      title:
        "From Decentralized Cooperative to Controlled Specialty Coffee Model: The Strategic Transformation of Alta Montaña",
      excerpt:
        "Discover how HLG Mooren Consulting helped a Peruvian coffee cooperative transition into a data-driven specialty coffee enterprise through process centralization, strict cost control, and origin-based storytelling.",
      category: "Business Strategy",
      file: "blogs/alta-montana-transformation.en.md",
    },
    vi: {
      title:
        "Từ Hợp Tác Xã Phi Tập Trung Đến Mô Hình Cà Phê Đặc Sản Có Kiểm Soát: Sự Chuyển Đổi Chiến Lược Của Alta Montaña",
      excerpt:
        "Khám phá cách HLG Mooren Consulting giúp hợp tác xã cà phê Peru chuyển mình thành doanh nghiệp cà phê đặc sản dựa trên dữ liệu thông qua tập trung hóa quy trình và kiểm soát chi phí chặt chẽ.",
      category: "Chiến lược kinh doanh",
      file: "blogs/alta-montana-transformation.md",
    },
  },
];
