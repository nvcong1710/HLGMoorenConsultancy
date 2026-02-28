const blogs = [
  {
    slug: "anapqui-strategic-transformation",
    title:
      "From Raw Material Export to Premium Consumer Brand: ANAPQUI's Journey of Transformation",
    excerpt:
      "Discover how ANAPQUI escaped the raw material wholesale trap and transformed into a high-value consumer brand through comprehensive strategic consulting from HLG Mooren Consulting.",
    category: "Business Strategy",
    image: "assets/media/blog-img/anapqui-strategic-transformation/cover.png",
    date: "2026-02-27",
    readTime: "3 min read",
    file: "blogs/anapqui-strategic-transformation.md",
    author: "Hugo Mooren",
  },
  {
    slug: "dawn-bread-operations",
    title:
      "Breaking Space Limits: Supply Chain and Operations Optimization for Dawn Bread",
    excerpt:
      "Discover how HLG Mooren Consulting helped FMCG giant Dawn Bread optimize their supply chain, resolve space bottlenecks, and increase production capacity by 20% without expanding their facility.",
    category: "Supply Chain Optimization",
    image: "assets/media/blog-img/dawn-bread-operations/cover.jpg",
    date: "2026-02-27",
    readTime: "4 min read",
    file: "blogs/dawn-bread-operations.md",
    author: "Hugo Mooren",
  },
  {
    slug: "specialty-coffee-strategy",
    title:
      "Breaking the Small Scale Trap: Value Chain & Branding Strategy for a Specialty Coffee Business",
    excerpt:
      "How HLG Mooren Consulting helped a South American specialty coffee enterprise standardize its value chain, rebrand, and leverage outsourcing to overcome quality inconsistencies and achieve sustainable growth.",
    category: "Business Strategy",
    image: "assets/media/blog-img/specialty-coffee-strategy/cover.png",
    date: "2026-02-27",
    readTime: "4 min read",
    file: "blogs/specialty-coffee-strategy.md",
    author: "Hugo Mooren",
  },
  {
    slug: "anvies-operations-transformation",
    title:
      "From Local Workshop to Standardized System: The Transformation of Anvies",
    excerpt:
      "Discover how HLG Mooren Consulting helped Anvies standardize its production processes, prepare for HACCP certification, and build a robust B2B distribution strategy for sustainable growth.",
    category: "Business Strategy",
    image: "assets/media/blog-img/anvies-operations-transformation/cover.jpg",
    date: "2026-02-28",
    readTime: "3 min read",
    file: "blogs/anvies-operations-transformation.md",
    author: "Hugo Mooren",
  },
  {
    slug: "csc-foods-pastry",
    title:
      "Unlocking the Pastry Market: New Product Development and Model Transformation for CSC Foods",
    excerpt:
      "Discover how HLG Mooren Consulting guided CSC Foods in transitioning from a B2B raw material supplier to a B2C consumer pastry brand, establishing automated production and a robust retail distribution strategy.",
    category: "New Product Development",
    image: "assets/media/blog-img/csc-foods-pastry/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    file: "blogs/csc-foods-pastry.md",
    author: "Hugo Mooren",
  },
  {
    slug: "dulces-flower-restructuring",
    title:
      "From Local Family Business to National Growth Strategy: The Restructuring Journey of Dulces Flower",
    excerpt:
      "Discover how HLG Mooren Consulting helped Dulces Flower, a Colombian family-owned bakery ingredients business, restructure its operations, standardize processes, and build a national growth strategy.",
    category: "Business Strategy",
    image: "assets/media/blog-img/dulces-flower-restructuring/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    file: "blogs/dulces-flower-restructuring.md",
    author: "Hugo Mooren",
  },
  {
    slug: "ebeston-bakery-haccp",
    title:
      "From Manual Ovens to Standardized HACCP: The Comprehensive Upgrade of Ebeston Bakery",
    excerpt:
      "Discover how HLG Mooren Consulting helped Ebeston Bakery in Ghana transition from manual operations to a standardized system, implementing HACCP and optimizing production for sustainable growth.",
    category: "Operations Optimization",
    image: "assets/media/blog-img/ebeston-bakery-haccp/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    file: "blogs/ebeston-bakery-haccp.md",
    author: "Hugo Mooren",
  },
  {
    slug: "fukia-growth-strategy",
    title:
      "From Local Enterprise to Standardized Agricultural Brand: Comprehensive Growth Strategy for Fukia",
    excerpt:
      "Discover how HLG Mooren Consulting helped Fukia streamline its 23-product portfolio into a focused, scalable agricultural brand with clear B2B and B2C distribution strategies.",
    category: "Business Strategy",
    image: "assets/media/blog-img/fukia-growth-strategy/cover.png",
    date: "2026-02-28",
    readTime: "4 min read",
    file: "blogs/fukia-growth-strategy.md",
    author: "Hugo Mooren",
  },
  {
    slug: "garner-wafers-restructuring",
    title:
      "From 1% Profit to 10% EBIT Goal: Comprehensive Restructuring at Garner Wafers",
    excerpt:
      "Discover how HLG Mooren Consulting helped South African manufacturer Garner Wafers transition from produce-to-order to produce-to-stock, optimizing logistics and cost calculations to target a 10% EBIT.",
    category: "Operations Optimization",
    image: "assets/media/blog-img/garner-wafers-restructuring/cover.jpg",
    date: "2026-02-28",
    readTime: "5 min read",
    file: "blogs/garner-wafers-restructuring.md",
    author: "Hugo Mooren",
  },
  {
    slug: "sos-growth-strategy",
    title:
      "From Uncontrolled Manual Production to Sustainable Growth Strategy: The Restructuring Journey of Dulces Flower y Cia (SOS)",
    excerpt:
      "How HLG Mooren Consulting helped Colombian food manufacturer SOS reduce customer dependency, implement quality systems, and build a national distribution strategy for scalable growth.",
    category: "Business Strategy",
    image: "assets/media/blog-img/sos-growth-strategy/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    file: "blogs/sos-growth-strategy.md",
    author: "Hugo Mooren",
  },
  {
    slug: "thanh-dong-strategy",
    title:
      "From 95% Overcapacity to a 2026–2030 Growth Strategy: The Strategic Turning Point for Thanh Dong Mushroom",
    excerpt:
      "Discover how HLG Mooren Consulting helped a Vietnamese medicinal mushroom farm solve its 95% overcapacity issue by leveraging B2B sales to fund a high-margin B2C brand strategy.",
    category: "Business Strategy",
    image: "assets/media/blog-img/thanh-dong-strategy/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    file: "blogs/thanh-dong-strategy.md",
    author: "Hugo Mooren",
  },
  {
    slug: "aprocam-restructuring-plan",
    title:
      "From a 50% Production Drop to a 350,000kg Roadmap: The 5-Year Restructuring Plan of Aprocam Cacao Cooperative",
    excerpt:
      "Discover how HLG Mooren Consulting helped Aprocam, a Peruvian cacao cooperative, overcome a 50% production drop and heavy customer dependency with a 5-year strategic restructuring plan.",
    category: "Business Strategy",
    image: "assets/media/blog-img/aprocam-restructuring-plan/cover.jpg",

    date: "2026-02-28",
    readTime: "4 min read",
    file: "blogs/aprocam-restructuring-plan.md",
    author: "Hugo Mooren",
  },
  {
    slug: "pili-eu-strategy",
    title:
      'From "Novel Food" to the EU Market: European Entry Strategy for the Philippine Pili Industry',
    excerpt:
      "Discover how the Philippine pili industry navigated EU novel food regulations and developed a strategic roadmap to successfully enter the European market through the Netherlands.",
    category: "Market Entry Strategy",
    image: "assets/media/blog-img/pili-eu-strategy/cover.jpg",
    date: "2026-02-28",
    readTime: "4 min read",
    file: "blogs/pili-eu-strategy.md",
    author: "Hugo Mooren",
  },
];
