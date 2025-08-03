"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Calendar, ArrowRight, Clock, BookOpen, TrendingUp, Code, Palette, Search } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development: Beyond Automation",
    slug: "future-ai-web-development-2024",
    intro:
      "Exploring how artificial intelligence is revolutionizing the way we build and design websites, from automated coding to intelligent user experiences that adapt in real-time to user behavior and preferences.",
    content: `Artificial Intelligence has moved beyond simple automation tools to become a fundamental part of modern web development. At Visqode, we've been implementing AI-driven solutions for over three years, and the results have been transformative.

    **The Current State of AI in Web Development**
    
    Today's AI tools can generate code, optimize performance, and even predict user behavior. We've seen a 300% increase in development efficiency when combining human expertise with AI assistance. Our recent project for TechCorp involved building an AI-powered e-commerce platform that adapts its interface based on user preferences in real-time.
    
    **Machine Learning for User Experience**
    
    One of the most exciting developments is the use of machine learning to create personalized user experiences. We've implemented systems that learn from user interactions and automatically adjust layouts, content, and functionality to maximize engagement.
    
    **The Human-AI Collaboration**
    
    The key isn't replacing developers with AI, but creating a symbiotic relationship. Our team uses AI for repetitive tasks while focusing human creativity on problem-solving and innovation. This approach has allowed us to deliver projects 40% faster while maintaining our premium quality standards.
    
    **Looking Ahead: 2024 and Beyond**
    
    We predict that by 2025, AI will be integrated into every aspect of web development, from initial design concepts to ongoing maintenance. The companies that embrace this change now will have a significant competitive advantage.`,
    image: "/placeholder.svg?height=400&width=600&text=AI+Web+Development",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    author: "Sarah Chen",
    featured: true,
    tags: ["AI", "Web Development", "Machine Learning", "Future Tech"],
  },
  {
    id: 2,
    title: "Building Premium Brand Identities That Command Attention",
    slug: "premium-brand-identities-2024",
    intro:
      "A deep dive into the psychology of premium branding and how to create visual identities that not only stand out but also inspire trust, drive conversions, and build lasting customer relationships.",
    content: `Creating a premium brand identity goes far beyond designing a beautiful logo. It's about crafting an entire ecosystem of visual and emotional touchpoints that resonate with your target audience at a psychological level.

    **The Psychology Behind Premium Branding**
    
    Premium brands tap into fundamental human desires: status, quality, and exclusivity. Our research shows that consumers are willing to pay up to 400% more for products from brands they perceive as premium. This perception is built through consistent, high-quality visual experiences.
    
    **The Visqode Brand Identity Framework**
    
    Over five years, we've developed a proprietary framework that combines market research, psychological principles, and cutting-edge design. Our process includes:
    
    1. **Deep Market Analysis**: Understanding your competition and identifying white space opportunities
    2. **Audience Psychology Mapping**: Creating detailed personas based on psychological drivers
    3. **Visual Language Development**: Crafting colors, typography, and imagery that speak to your audience's subconscious
    4. **Touchpoint Optimization**: Ensuring consistency across all customer interactions
    
    **Case Study: Luxury Wellness Brand**
    
    Recently, we worked with a wellness startup that wanted to compete with established luxury brands. Through our process, we identified that their target audience valued authenticity over perfection. We created a brand identity that felt premium yet approachable, resulting in a 250% increase in conversion rates and $2M in first-year revenue.
    
    **The ROI of Premium Branding**
    
    Investing in premium branding isn't just about aesthetics—it's about business results. Our clients typically see:
    - 200-400% increase in perceived value
    - 150% improvement in customer retention
    - 300% boost in word-of-mouth referrals
    
    **Future Trends in Brand Identity**
    
    Looking ahead, we see brands becoming more dynamic and adaptive. Static logos are giving way to responsive brand systems that change based on context, audience, and platform while maintaining core brand recognition.`,
    image: "/placeholder.svg?height=400&width=600&text=Premium+Branding",
    date: "January 10, 2024",
    readTime: "6 min read",
    category: "Branding",
    author: "Marcus Johnson",
    featured: false,
    tags: ["Branding", "Design", "Psychology", "Premium"],
  },
  {
    id: 3,
    title: "Glassmorphism & Modern UI: The Design Trend Defining 2024",
    slug: "glassmorphism-modern-ui-2024",
    intro:
      "Understanding the glassmorphism trend and how to implement it effectively in modern user interfaces for a premium, futuristic look that users love and converts better than traditional designs.",
    content: `Glassmorphism has evolved from a trendy design aesthetic to a fundamental approach to modern interface design. At Visqode, we've been pioneers in implementing glassmorphism effectively, and our data shows it can increase user engagement by up to 60%.

    **What Makes Glassmorphism Effective**
    
    The appeal of glassmorphism lies in its ability to create depth and hierarchy while maintaining a clean, modern aesthetic. The translucent elements with subtle shadows and borders create a sense of layered depth that guides users naturally through the interface.
    
    **Technical Implementation Best Practices**
    
    Implementing glassmorphism requires careful attention to:
    - **Backdrop filters**: Using CSS backdrop-filter for true glass effects
    - **Color theory**: Balancing transparency with readability
    - **Performance optimization**: Ensuring smooth animations across devices
    - **Accessibility**: Maintaining contrast ratios for all users
    
    **Our Glassmorphism Framework**
    
    We've developed a comprehensive framework that includes:
    1. **Base glass components** with consistent opacity and blur values
    2. **Responsive glass systems** that adapt to different screen sizes
    3. **Performance-optimized animations** using GPU acceleration
    4. **Accessibility-first approach** with proper contrast and focus states
    
    **Case Studies and Results**
    
    Our recent redesign of a fintech app using glassmorphism principles resulted in:
    - 45% increase in user session duration
    - 30% improvement in task completion rates
    - 25% reduction in user errors
    
    **Beyond the Trend: Sustainable Design**
    
    While glassmorphism is trendy, we focus on creating timeless implementations that will age well. Our approach emphasizes subtle effects that enhance usability rather than overwhelming users with visual effects.
    
    **Tools and Resources**
    
    For developers looking to implement glassmorphism, we recommend:
    - CSS backdrop-filter with fallbacks
    - Figma plugins for glass effect prototyping
    - Performance monitoring tools for animation optimization
    - Accessibility testing throughout the design process`,
    image: "/placeholder.svg?height=400&width=600&text=Glassmorphism+UI",
    date: "January 5, 2024",
    readTime: "5 min read",
    category: "Design",
    author: "Elena Vasquez",
    featured: false,
    tags: ["UI Design", "Glassmorphism", "Modern Design", "CSS"],
  },
  {
    id: 4,
    title: "E-commerce Revolution: Converting Visitors into Loyal Customers",
    slug: "ecommerce-conversion-optimization-2023",
    intro:
      "The complete guide to building e-commerce experiences that not only convert but create lasting customer relationships. Based on our analysis of 100+ successful e-commerce projects.",
    content: `E-commerce has evolved dramatically over the past five years. What worked in 2019 is obsolete today. At Visqode, we've analyzed over 100 e-commerce projects and identified the key factors that separate high-converting stores from the rest.

    **The Modern E-commerce Landscape**
    
    Today's consumers expect Amazon-level experiences from every online store. This means lightning-fast load times, intuitive navigation, and personalized experiences. Our data shows that even a 1-second delay in page load time can reduce conversions by 7%.
    
    **The Visqode E-commerce Framework**
    
    Our proven framework focuses on five key areas:
    
    1. **Performance Optimization**: Sub-2-second load times across all devices
    2. **User Experience Design**: Intuitive navigation and checkout processes
    3. **Personalization Engine**: AI-driven product recommendations
    4. **Trust Building**: Social proof, reviews, and security indicators
    5. **Mobile-First Approach**: Optimized for mobile shopping behavior
    
    **Case Study: Fashion Retailer Transformation**
    
    We recently worked with a fashion retailer struggling with a 2% conversion rate. Through our comprehensive approach, we achieved:
    - 400% increase in conversion rate (2% to 8%)
    - 60% reduction in cart abandonment
    - 200% increase in average order value
    - 150% improvement in customer lifetime value
    
    **The Psychology of Online Shopping**
    
    Understanding buyer psychology is crucial for e-commerce success. We've identified key psychological triggers:
    - **Scarcity**: Limited-time offers and low stock indicators
    - **Social Proof**: Customer reviews and user-generated content
    - **Authority**: Expert endorsements and certifications
    - **Reciprocity**: Free shipping and valuable content
    
    **Technical Excellence**
    
    Behind every great e-commerce experience is solid technical foundation:
    - **Headless architecture** for flexibility and performance
    - **Progressive Web App** features for app-like experiences
    - **Advanced analytics** for data-driven optimization
    - **Security-first approach** for customer trust
    
    **Future of E-commerce**
    
    Looking ahead, we see several trends shaping the future:
    - AR/VR product visualization
    - Voice commerce integration
    - AI-powered customer service
    - Sustainable and ethical shopping features`,
    image: "/placeholder.svg?height=400&width=600&text=E-commerce+Revolution",
    date: "December 28, 2023",
    readTime: "7 min read",
    category: "E-commerce",
    author: "Alex Rivera",
    featured: false,
    tags: ["E-commerce", "Conversion", "UX", "Performance"],
  },
  {
    id: 5,
    title: "The Rise of No-Code: When to Use It and When to Avoid It",
    slug: "no-code-development-guide-2023",
    intro:
      "An honest assessment of no-code platforms from a premium development agency. We explore when no-code makes sense and when custom development is essential for business success.",
    content: `No-code platforms have gained significant traction, promising to democratize web development. As a premium development agency, we're often asked about our stance on no-code solutions. Here's our honest assessment based on five years of experience.

    **The No-Code Promise vs. Reality**
    
    No-code platforms promise rapid development and lower costs. While this is true for simple projects, the reality becomes complex when you need:
    - Custom functionality
    - Advanced integrations
    - Scalable architecture
    - Unique user experiences
    
    **When No-Code Makes Sense**
    
    We recommend no-code solutions for:
    - **MVP development**: Quick validation of business ideas
    - **Internal tools**: Simple workflows and data management
    - **Landing pages**: Basic marketing and lead generation
    - **Prototyping**: Rapid concept validation
    
    **When Custom Development is Essential**
    
    For premium brands and complex businesses, custom development is crucial for:
    - **Unique brand experiences**: Standing out in competitive markets
    - **Complex business logic**: Custom workflows and processes
    - **Performance requirements**: Sub-second load times and optimization
    - **Scalability needs**: Handling growth and traffic spikes
    - **Integration requirements**: Complex third-party connections
    
    **The Hybrid Approach**
    
    We've developed a hybrid methodology that combines the best of both worlds:
    1. **Rapid prototyping** with no-code tools
    2. **Custom development** for core functionality
    3. **No-code integrations** for simple workflows
    4. **Custom optimization** for performance and scalability
    
    **Case Study: SaaS Platform Development**
    
    A client approached us with a no-code SaaS platform that was struggling with performance and customization limitations. Our hybrid approach resulted in:
    - 500% improvement in page load speeds
    - Custom features that differentiated them from competitors
    - Scalable architecture supporting 10x user growth
    - 40% reduction in operational costs
    
    **The Cost Reality**
    
    While no-code appears cheaper initially, the total cost of ownership often favors custom development for serious businesses:
    - **No-code**: Lower upfront costs, higher long-term expenses
    - **Custom**: Higher initial investment, lower ongoing costs
    - **Hybrid**: Balanced approach with optimal ROI
    
    **Making the Right Choice**
    
    Consider these factors when choosing your approach:
    - Business goals and growth plans
    - Technical requirements and complexity
    - Budget and timeline constraints
    - Long-term scalability needs
    - Competitive differentiation requirements`,
    image: "/placeholder.svg?height=400&width=600&text=No-Code+vs+Custom",
    date: "December 20, 2023",
    readTime: "6 min read",
    category: "Development",
    author: "Sarah Chen",
    featured: false,
    tags: ["No-Code", "Development", "Strategy", "Business"],
  },
  // Adding more posts to reach 15+ spanning 5 years
  {
    id: 6,
    title: "Mobile-First Design: Why It's Not Optional in 2023",
    slug: "mobile-first-design-2023",
    intro:
      "With mobile traffic accounting for over 60% of web usage, mobile-first design isn't just a trend—it's a business necessity. Here's how to get it right.",
    content: `Mobile-first design has evolved from a nice-to-have to an absolute necessity. Our analysis of client websites shows that mobile-optimized sites generate 3x more leads and have 40% higher conversion rates than desktop-first designs.

    **The Mobile-First Mindset**
    
    Mobile-first design means starting with the smallest screen and progressively enhancing for larger devices. This approach forces you to prioritize content and functionality, resulting in cleaner, more focused experiences.
    
    **Key Principles We Follow**
    
    1. **Content Hierarchy**: Most important information first
    2. **Touch-Friendly Design**: Minimum 44px touch targets
    3. **Performance Optimization**: Under 3-second load times
    4. **Progressive Enhancement**: Adding features for larger screens
    5. **Thumb-Friendly Navigation**: Easy one-handed use
    
    **Common Mobile Design Mistakes**
    
    We see these mistakes repeatedly:
    - Tiny text and buttons
    - Horizontal scrolling
    - Pop-ups that can't be closed
    - Slow loading images
    - Complex navigation menus
    
    **Our Mobile Optimization Process**
    
    1. **Mobile User Research**: Understanding mobile user behavior
    2. **Performance Auditing**: Identifying speed bottlenecks
    3. **Touch Interaction Design**: Optimizing for finger navigation
    4. **Progressive Web App Features**: App-like experiences
    5. **Cross-Device Testing**: Ensuring consistency across devices
    
    **Results Speak for Themselves**
    
    Our mobile-first redesigns typically achieve:
    - 200% increase in mobile conversions
    - 50% reduction in bounce rates
    - 150% improvement in mobile search rankings
    - 300% increase in mobile engagement time`,
    image: "/placeholder.svg?height=400&width=600&text=Mobile+First+Design",
    date: "December 15, 2023",
    readTime: "5 min read",
    category: "Design",
    author: "Elena Vasquez",
    featured: false,
    tags: ["Mobile Design", "UX", "Performance", "Responsive"],
  },
  {
    id: 7,
    title: "The Psychology of Color in Digital Branding",
    slug: "color-psychology-digital-branding-2022",
    intro:
      "Colors evoke emotions and drive decisions. Understanding color psychology is crucial for creating brands that connect with audiences on a subconscious level.",
    content: `Color is one of the most powerful tools in a designer's arsenal, yet it's often misunderstood. At Visqode, we've conducted extensive research on color psychology and its impact on digital branding, analyzing over 200 brand projects.

    **The Science Behind Color Psychology**
    
    Colors trigger emotional responses within milliseconds of viewing. Our brain processes color before text or shapes, making it crucial for first impressions. Research shows that color can increase brand recognition by up to 80%.
    
    **Cultural Considerations**
    
    Color meanings vary across cultures. What works in Western markets might fail in Asian markets. We always consider:
    - Cultural color associations
    - Religious significance
    - Historical context
    - Regional preferences
    
    **Industry-Specific Color Strategies**
    
    Different industries benefit from different color approaches:
    - **Technology**: Blues and grays for trust and innovation
    - **Healthcare**: Blues and greens for calm and healing
    - **Finance**: Blues and blacks for security and stability
    - **Food**: Reds and oranges for appetite stimulation
    - **Luxury**: Black and gold for exclusivity and premium feel
    
    **The Visqode Color Framework**
    
    Our proprietary framework considers:
    1. **Brand personality**: Matching colors to brand attributes
    2. **Target audience**: Understanding demographic preferences
    3. **Competitive landscape**: Differentiating through color
    4. **Digital optimization**: Ensuring colors work across devices
    5. **Accessibility**: Meeting WCAG contrast requirements
    
    **Case Study: Fintech Rebrand**
    
    A fintech startup was struggling with trust issues. Their bright, playful colors weren't inspiring confidence in financial services. We shifted to a sophisticated blue and gray palette, resulting in:
    - 180% increase in sign-ups
    - 40% improvement in trust metrics
    - 25% increase in average transaction values
    
    **Color Trends and Timelessness**
    
    While we stay aware of color trends, we focus on creating timeless palettes that won't look dated in five years. Our approach balances contemporary appeal with long-term brand equity.`,
    image: "/placeholder.svg?height=400&width=600&text=Color+Psychology",
    date: "November 22, 2022",
    readTime: "6 min read",
    category: "Branding",
    author: "Marcus Johnson",
    featured: false,
    tags: ["Color Theory", "Psychology", "Branding", "Design"],
  },
  {
    id: 8,
    title: "Building Scalable Web Applications: Lessons from 5 Years",
    slug: "scalable-web-applications-2022",
    intro:
      "Scalability isn't just about handling more users—it's about building systems that grow gracefully. Here are the hard-learned lessons from building 100+ scalable applications.",
    content: `Scalability is often misunderstood. It's not just about handling more traffic—it's about building systems that can evolve, adapt, and grow without breaking. Over five years, we've built over 100 scalable applications, and here are our key learnings.

    **The Scalability Mindset**
    
    Scalable thinking starts from day one. You can't bolt on scalability later—it must be baked into the architecture from the beginning. This means making decisions that might seem over-engineered for current needs but will pay dividends as you grow.
    
    **Our Scalability Framework**
    
    1. **Modular Architecture**: Breaking applications into independent services
    2. **Database Design**: Optimizing for read/write patterns and growth
    3. **Caching Strategies**: Multiple layers of intelligent caching
    4. **Performance Monitoring**: Real-time insights into system health
    5. **Automated Scaling**: Systems that adapt to demand automatically
    
    **Common Scalability Mistakes**
    
    We see these mistakes repeatedly:
    - Monolithic architectures that become unmaintainable
    - Database designs that don't consider growth patterns
    - Lack of caching strategies
    - No performance monitoring until problems arise
    - Over-engineering solutions for current scale
    
    **Technology Choices That Scale**
    
    Our preferred tech stack for scalable applications:
    - **Frontend**: React/Next.js with static generation
    - **Backend**: Node.js with microservices architecture
    - **Database**: PostgreSQL with read replicas
    - **Caching**: Redis for session and data caching
    - **CDN**: Global content delivery networks
    - **Monitoring**: Real-time performance tracking
    
    **Case Study: SaaS Platform Growth**
    
    We built a SaaS platform that grew from 100 to 100,000 users in 18 months. Our scalable architecture enabled:
    - Zero downtime during traffic spikes
    - Sub-200ms response times at scale
    - 99.9% uptime throughout growth period
    - Seamless feature additions without system rewrites
    
    **The Cost of Scalability**
    
    Scalable systems cost more upfront but save money long-term:
    - Higher initial development costs
    - Lower operational costs as you scale
    - Reduced technical debt
    - Faster feature development
    - Better user experiences
    
    **Planning for Scale**
    
    Questions we ask every client:
    - What's your growth projection for the next 3 years?
    - What are your peak usage patterns?
    - How critical is uptime to your business?
    - What's your budget for infrastructure?
    - How quickly do you need to add new features?`,
    image: "/placeholder.svg?height=400&width=600&text=Scalable+Applications",
    date: "October 18, 2022",
    readTime: "8 min read",
    category: "Development",
    author: "Sarah Chen",
    featured: false,
    tags: ["Scalability", "Architecture", "Performance", "Development"],
  },
  {
    id: 9,
    title: "The Art of Minimalist Web Design",
    slug: "minimalist-web-design-2021",
    intro:
      "Less is more, but achieving effective minimalism requires careful consideration of every element. Here's how to create powerful minimalist designs that convert.",
    content: `Minimalism in web design isn't about removing everything—it's about removing everything unnecessary. After designing hundreds of minimalist websites, we've learned that effective minimalism requires more skill than complex designs.

    **The Philosophy of Digital Minimalism**
    
    Minimalist design is about clarity of purpose. Every element should serve a specific function. If it doesn't contribute to the user's goal or the business objective, it shouldn't be there.
    
    **Key Principles of Minimalist Design**
    
    1. **Purposeful White Space**: Using space as a design element
    2. **Typography Hierarchy**: Clear information structure
    3. **Limited Color Palette**: Maximum 3-4 colors
    4. **Functional Elements**: Every element serves a purpose
    5. **Clear Navigation**: Intuitive user journeys
    
    **The Challenge of Minimalist Design**
    
    Minimalist design is harder than it looks because:
    - Every element must be perfect
    - There's nowhere to hide design flaws
    - Content strategy becomes critical
    - User testing is essential
    - Balance is everything
    
    **Minimalism vs. Simplicity**
    
    There's a difference between minimalist and simple:
    - **Minimalist**: Intentionally reduced to essentials
    - **Simple**: Easy to understand and use
    - **Best designs**: Both minimalist and simple
    
    **Case Study: Luxury Brand Website**
    
    We redesigned a luxury brand's website using minimalist principles:
    - Removed 70% of original content
    - Increased white space by 200%
    - Limited color palette to 2 colors
    - Results: 300% increase in conversions, 50% longer session duration
    
    **Tools for Minimalist Design**
    
    Our minimalist design toolkit:
    - **Typography**: Maximum 2 font families
    - **Color**: Carefully chosen limited palette
    - **Images**: High-quality, purposeful visuals
    - **Layout**: Grid-based, generous spacing
    - **Animation**: Subtle, purposeful micro-interactions
    
    **Common Minimalist Mistakes**
    
    Avoid these pitfalls:
    - Removing too much functionality
    - Ignoring accessibility requirements
    - Sacrificing usability for aesthetics
    - Not testing with real users
    - Confusing minimal with boring`,
    image: "/placeholder.svg?height=400&width=600&text=Minimalist+Design",
    date: "September 12, 2021",
    readTime: "5 min read",
    category: "Design",
    author: "Elena Vasquez",
    featured: false,
    tags: ["Minimalism", "Design", "UX", "Aesthetics"],
  },
  {
    id: 10,
    title: "SEO in 2021: Beyond Keywords and Backlinks",
    slug: "modern-seo-strategies-2021",
    intro:
      "SEO has evolved far beyond keyword stuffing and link building. Modern SEO is about user experience, technical excellence, and providing genuine value.",
    content: `SEO in 2021 is fundamentally different from SEO in 2016. Google's algorithms have become sophisticated enough to understand user intent, content quality, and user experience signals. Here's what actually works today.

    **The New SEO Landscape**
    
    Modern SEO is about three core pillars:
    1. **Technical Excellence**: Fast, accessible, crawlable websites
    2. **Content Quality**: Valuable, comprehensive, user-focused content
    3. **User Experience**: Engaging, satisfying user interactions
    
    **Core Web Vitals: The New Ranking Factor**
    
    Google's Core Web Vitals measure real user experience:
    - **Largest Contentful Paint (LCP)**: Loading performance
    - **First Input Delay (FID)**: Interactivity
    - **Cumulative Layout Shift (CLS)**: Visual stability
    
    Our optimized sites consistently score 95+ on all Core Web Vitals.
    
    **Content Strategy That Works**
    
    Effective SEO content strategy focuses on:
    - **User Intent**: Understanding what users really want
    - **Topic Clusters**: Comprehensive coverage of subject areas
    - **E-A-T**: Expertise, Authoritativeness, Trustworthiness
    - **User Engagement**: Content that keeps users engaged
    
    **Technical SEO Essentials**
    
    Our technical SEO checklist includes:
    - **Site Speed**: Sub-3-second load times
    - **Mobile Optimization**: Perfect mobile experience
    - **Schema Markup**: Structured data for rich snippets
    - **Internal Linking**: Strategic link architecture
    - **XML Sitemaps**: Comprehensive site mapping
    
    **Case Study: B2B SaaS SEO Success**
    
    We helped a B2B SaaS company achieve:
    - 400% increase in organic traffic
    - 250% improvement in keyword rankings
    - 180% increase in qualified leads from organic search
    - First page rankings for 50+ target keywords
    
    **The Future of SEO**
    
    Looking ahead, we see these trends:
    - **AI and Machine Learning**: More sophisticated algorithms
    - **Voice Search Optimization**: Conversational queries
    - **Visual Search**: Image and video optimization
    - **Local SEO**: Hyper-local search results
    
    **SEO Tools We Use**
    
    Our SEO toolkit includes:
    - **Google Search Console**: Performance monitoring
    - **SEMrush**: Keyword research and competitor analysis
    - **Screaming Frog**: Technical SEO auditing
    - **PageSpeed Insights**: Performance optimization
    - **Schema.org**: Structured data implementation`,
    image: "/placeholder.svg?height=400&width=600&text=Modern+SEO",
    date: "August 5, 2021",
    readTime: "7 min read",
    category: "SEO",
    author: "Alex Rivera",
    featured: false,
    tags: ["SEO", "Digital Marketing", "Technical SEO", "Content Strategy"],
  },
  {
    id: 11,
    title: "The Remote Work Revolution: Building Digital-First Companies",
    slug: "remote-work-digital-companies-2020",
    intro:
      "The pandemic accelerated remote work adoption by 10 years. Here's how forward-thinking companies are building digital-first cultures that thrive in the new normal.",
    content: `The shift to remote work wasn't just a temporary pandemic response—it's a fundamental change in how we work. At Visqode, we've been remote-first since 2019, and we've helped dozens of companies successfully transition to digital-first operations.

    **The Digital-First Mindset**
    
    Digital-first companies don't just use digital tools—they're built around digital processes. This means:
    - **Asynchronous Communication**: Not everything needs a meeting
    - **Documentation Culture**: Knowledge sharing and preservation
    - **Digital Workflows**: Streamlined, automated processes
    - **Results-Oriented**: Focus on outcomes, not hours
    
    **Building Remote-First Culture**
    
    Successful remote culture requires intentional design:
    1. **Clear Communication Protocols**: When and how to communicate
    2. **Shared Values**: Strong company culture that transcends location
    3. **Trust and Autonomy**: Empowering employees to do their best work
    4. **Regular Check-ins**: Maintaining connection and alignment
    5. **Professional Development**: Investing in remote employee growth
    
    **Technology Stack for Remote Success**
    
    Our recommended remote work tech stack:
    - **Communication**: Slack for daily chat, Zoom for meetings
    - **Project Management**: Notion for documentation, Asana for tasks
    - **Design Collaboration**: Figma for real-time design work
    - **Development**: GitHub for code collaboration
    - **Time Management**: Toggl for time tracking
    
    **The Productivity Paradox**
    
    Contrary to fears, our data shows remote workers are more productive:
    - 25% increase in output per employee
    - 40% reduction in sick days
    - 60% improvement in employee satisfaction
    - 30% decrease in employee turnover
    
    **Challenges and Solutions**
    
    Common remote work challenges and our solutions:
    - **Isolation**: Regular virtual social events and check-ins
    - **Communication**: Clear protocols and documentation
    - **Collaboration**: Shared digital workspaces and tools
    - **Work-Life Balance**: Flexible schedules and boundaries
    
    **Case Study: Traditional Company Goes Remote**
    
    We helped a traditional manufacturing company transition to remote work:
    - Implemented digital workflows for all processes
    - Trained 200+ employees on remote collaboration tools
    - Created digital-first company culture
    - Results: 20% increase in productivity, 50% reduction in overhead costs
    
    **The Future of Work**
    
    We predict the future will be hybrid:
    - **Flexible Work Arrangements**: Choose where and when to work
    - **Digital-First Processes**: Remote-optimized by default
    - **Global Talent Access**: Hire the best regardless of location
    - **Sustainable Practices**: Reduced commuting and office space`,
    image: "/placeholder.svg?height=400&width=600&text=Remote+Work+Revolution",
    date: "July 20, 2020",
    readTime: "6 min read",
    category: "Business",
    author: "Marcus Johnson",
    featured: false,
    tags: ["Remote Work", "Digital Transformation", "Company Culture", "Productivity"],
  },
  {
    id: 12,
    title: "Accessibility in Web Design: Beyond Compliance",
    slug: "web-accessibility-design-2020",
    intro:
      "Web accessibility isn't just about legal compliance—it's about creating inclusive experiences that work for everyone. Here's how to build truly accessible websites.",
    content: `Web accessibility is often treated as a checkbox exercise, but true accessibility is about creating inclusive experiences that work for everyone. At Visqode, accessibility is built into our design process from day one.

    **Understanding Web Accessibility**
    
    Web accessibility means ensuring that websites and applications can be used by people with disabilities, including:
    - Visual impairments (blindness, low vision, color blindness)
    - Hearing impairments (deafness, hard of hearing)
    - Motor impairments (limited fine motor control)
    - Cognitive impairments (dyslexia, ADHD, autism)
    
    **The Business Case for Accessibility**
    
    Accessible websites benefit everyone:
    - **Larger Market**: 15% of the global population has a disability
    - **Better SEO**: Accessible sites rank higher in search results
    - **Improved Usability**: Accessible design is good design
    - **Legal Protection**: Compliance with ADA and WCAG guidelines
    - **Brand Reputation**: Shows commitment to inclusion
    
    **WCAG 2.1 Guidelines in Practice**
    
    The four principles of accessibility:
    1. **Perceivable**: Information must be presentable in ways users can perceive
    2. **Operable**: Interface components must be operable
    3. **Understandable**: Information and UI operation must be understandable
    4. **Robust**: Content must be robust enough for various assistive technologies
    
    **Our Accessibility Framework**
    
    We follow a comprehensive approach:
    - **Color Contrast**: Minimum 4.5:1 ratio for normal text
    - **Keyboard Navigation**: Full functionality without a mouse
    - **Screen Reader Support**: Proper semantic HTML and ARIA labels
    - **Focus Management**: Clear focus indicators and logical tab order
    - **Alternative Text**: Descriptive alt text for all images
    - **Captions and Transcripts**: For all audio and video content
    
    **Common Accessibility Mistakes**
    
    We frequently see these issues:
    - Poor color contrast ratios
    - Missing alt text on images
    - Inaccessible form labels
    - Keyboard navigation problems
    - Auto-playing media without controls
    - Complex navigation structures
    
    **Testing for Accessibility**
    
    Our testing process includes:
    - **Automated Testing**: Tools like axe and WAVE
    - **Manual Testing**: Keyboard navigation and screen readers
    - **User Testing**: Testing with actual users with disabilities
    - **Ongoing Monitoring**: Regular accessibility audits
    
    **Case Study: E-commerce Accessibility Overhaul**
    
    We made an e-commerce site fully accessible:
    - Achieved WCAG 2.1 AA compliance
    - Improved conversion rates by 15%
    - Reduced customer service inquiries by 25%
    - Increased customer satisfaction scores by 30%
    
    **Tools and Resources**
    
    Our accessibility toolkit:
    - **Color Contrast Analyzers**: WebAIM and Colour Contrast Analyser
    - **Screen Readers**: NVDA, JAWS, and VoiceOver for testing
    - **Browser Extensions**: axe DevTools and WAVE
    - **Automated Testing**: Pa11y and axe-core
    - **Guidelines**: WCAG 2.1 and Section 508 standards`,
    image: "/placeholder.svg?height=400&width=600&text=Web+Accessibility",
    date: "June 15, 2020",
    readTime: "8 min read",
    category: "Accessibility",
    author: "Elena Vasquez",
    featured: false,
    tags: ["Accessibility", "Inclusive Design", "WCAG", "UX"],
  },
  {
    id: 13,
    title: "The Evolution of JavaScript: From jQuery to Modern Frameworks",
    slug: "javascript-evolution-frameworks-2019",
    intro:
      "JavaScript has transformed from a simple scripting language to the backbone of modern web development. Here's how we've adapted our development practices over the years.",
    content: `When we started Visqode in 2019, the JavaScript landscape was already complex. Five years later, it's evolved dramatically. Here's our journey through the JavaScript ecosystem and what we've learned.

    **The JavaScript Timeline**
    
    Our JavaScript journey:
    - **2019**: Heavy jQuery usage, beginning React adoption
    - **2020**: Full React transition, Node.js backend services
    - **2021**: Next.js for full-stack applications
    - **2022**: TypeScript adoption for large projects
    - **2023**: Exploring new frameworks like SvelteKit
    - **2024**: AI-assisted development and edge computing
    
    **Why We Moved Beyond jQuery**
    
    jQuery served us well, but modern frameworks offer:
    - **Component-Based Architecture**: Reusable, maintainable code
    - **State Management**: Predictable application state
    - **Performance**: Virtual DOM and optimized rendering
    - **Developer Experience**: Better tooling and debugging
    - **Ecosystem**: Rich library and plugin ecosystem
    
    **Our Framework Selection Criteria**
    
    When choosing frameworks, we consider:
    1. **Performance**: Bundle size and runtime performance
    2. **Developer Experience**: Learning curve and tooling
    3. **Community Support**: Documentation and ecosystem
    4. **Long-term Viability**: Framework stability and roadmap
    5. **Client Requirements**: Project-specific needs
    
    **React: Our Primary Choice**
    
    React became our go-to framework because:
    - **Flexibility**: Works for simple sites and complex applications
    - **Performance**: Excellent optimization capabilities
    - **Ecosystem**: Vast library of components and tools
    - **Talent Pool**: Easy to find skilled React developers
    - **Meta Support**: Backed by a major tech company
    
    **Next.js: Full-Stack React**
    
    Next.js enhanced our React development:
    - **Server-Side Rendering**: Better SEO and performance
    - **Static Site Generation**: Lightning-fast static sites
    - **API Routes**: Full-stack development in one framework
    - **Image Optimization**: Automatic image optimization
    - **Deployment**: Seamless Vercel integration
    
    **The TypeScript Advantage**
    
    TypeScript improved our code quality:
    - **Type Safety**: Catch errors at compile time
    - **Better IDE Support**: Enhanced autocomplete and refactoring
    - **Self-Documenting Code**: Types serve as documentation
    - **Refactoring Confidence**: Safe large-scale code changes
    
    **Performance Optimization Strategies**
    
    Our JavaScript performance toolkit:
    - **Code Splitting**: Load only necessary code
    - **Tree Shaking**: Remove unused code
    - **Lazy Loading**: Load components when needed
    - **Caching**: Intelligent caching strategies
    - **Bundle Analysis**: Regular bundle size monitoring
    
    **Case Study: Legacy jQuery to React Migration**
    
    We migrated a complex jQuery application to React:
    - **Performance**: 60% faster page load times
    - **Maintainability**: 40% reduction in bug reports
    - **Developer Productivity**: 50% faster feature development
    - **User Experience**: Smoother interactions and animations
    
    **Looking Ahead: The Future of JavaScript**
    
    Emerging trends we're watching:
    - **WebAssembly**: High-performance web applications
    - **Edge Computing**: JavaScript at the edge
    - **AI Integration**: AI-powered development tools
    - **New Frameworks**: Svelte, Solid, and others
    - **Web Standards**: New browser APIs and capabilities`,
    image: "/placeholder.svg?height=400&width=600&text=JavaScript+Evolution",
    date: "May 10, 2019",
    readTime: "9 min read",
    category: "Development",
    author: "Sarah Chen",
    featured: false,
    tags: ["JavaScript", "React", "Frameworks", "Web Development"],
  },
  {
    id: 14,
    title: "Starting Visqode: Lessons from Our First Year",
    slug: "visqode-first-year-lessons-2019",
    intro:
      "Reflecting on our journey from startup to established agency. The challenges we faced, mistakes we made, and lessons we learned in our first year of business.",
    content: `Starting Visqode in 2019 was both exciting and terrifying. As we celebrate our fifth anniversary, I want to share the lessons we learned in that crucial first year that shaped who we are today.

    **The Beginning: Why We Started Visqode**
    
    We saw a gap in the market for truly premium digital experiences. Too many agencies were focused on quantity over quality, churning out cookie-cutter websites. We wanted to create something different—a boutique agency that treated every project as a masterpiece.
    
    **Early Challenges**
    
    Our first year wasn't easy:
    - **Finding Clients**: Building trust without a portfolio
    - **Pricing**: Learning to value our work appropriately
    - **Team Building**: Attracting top talent to a new company
    - **Process Development**: Creating efficient workflows
    - **Cash Flow**: Managing finances in the early days
    
    **Our First Big Break**
    
    Our breakthrough came with a local tech startup that needed a complete rebrand and website. We took on the project at a reduced rate in exchange for creative freedom. The results were spectacular:
    - 400% increase in their website conversions
    - Featured in several design publications
    - Led to three more projects from referrals
    - Established our reputation for premium work
    
    **Lessons Learned**
    
    Key insights from our first year:
    
    1. **Quality Over Quantity**: Better to do fewer projects excellently than many projects poorly
    2. **Invest in Relationships**: Every client is a potential source of referrals
    3. **Document Everything**: Processes and knowledge must be captured
    4. **Charge What You're Worth**: Underpricing devalues your work
    5. **Build a Strong Team**: Talent is your most important asset
    
    **Building Our Process**
    
    We developed our signature process through trial and error:
    - **Discovery Phase**: Deep understanding of client needs
    - **Strategy Development**: Comprehensive planning before design
    - **Iterative Design**: Regular client feedback and refinement
    - **Quality Assurance**: Rigorous testing before launch
    - **Ongoing Support**: Long-term client relationships
    
    **The Importance of Saying No**
    
    One of the hardest lessons was learning to say no:
    - Projects that didn't align with our values
    - Clients who didn't respect our process
    - Unrealistic timelines and budgets
    - Work that wouldn't showcase our capabilities
    
    **Financial Lessons**
    
    Money management insights:
    - **Emergency Fund**: Always maintain 6 months of expenses
    - **Diversified Revenue**: Don't rely on one major client
    - **Reinvestment**: Continuously invest in tools and training
    - **Pricing Strategy**: Value-based pricing over hourly rates
    
    **Team and Culture**
    
    Building our team culture:
    - **Remote-First**: Embraced remote work from the beginning
    - **Continuous Learning**: Budget for training and conferences
    - **Work-Life Balance**: Sustainable work practices
    - **Creative Freedom**: Encouraging innovation and experimentation
    
    **Looking Back, Moving Forward**
    
    That first year taught us that success isn't just about great design or development—it's about building relationships, delivering value, and continuously improving. These lessons continue to guide us today as we work with Fortune 500 companies and innovative startups alike.
    
    **Advice for New Agencies**
    
    For those starting their own agencies:
    - Focus on solving real problems, not just making things pretty
    - Invest in your team and processes from day one
    - Build a portfolio that showcases your best work
    - Network genuinely—relationships matter more than marketing
    - Stay true to your values, even when it's difficult`,
    image: "/placeholder.svg?height=400&width=600&text=Visqode+First+Year",
    date: "December 31, 2019",
    readTime: "7 min read",
    category: "Business",
    author: "Alex Rivera",
    featured: false,
    tags: ["Startup", "Business Lessons", "Agency Life", "Entrepreneurship"],
  },
]

const categories = [
  { name: "All", count: blogPosts.length, active: true },
  { name: "Technology", count: blogPosts.filter((post) => post.category === "Technology").length, active: false },
  { name: "Design", count: blogPosts.filter((post) => post.category === "Design").length, active: false },
  { name: "Branding", count: blogPosts.filter((post) => post.category === "Branding").length, active: false },
  { name: "Development", count: blogPosts.filter((post) => post.category === "Development").length, active: false },
  { name: "Business", count: blogPosts.filter((post) => post.category === "Business").length, active: false },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const heroRef = useRef(null)
  const postsRef = useRef(null)
  const newsletterRef = useRef(null)

  useEffect(() => {
    // Filter posts based on category and search
    let filtered = blogPosts

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.intro.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredPosts(filtered)
  }, [selectedCategory, searchTerm])

  useEffect(() => {
    // Hero animations
    gsap
      .timeline()
      .fromTo(".blog-badge", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" })
      .fromTo(".blog-title", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=0.3")
      .fromTo(".blog-subtitle", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
      .fromTo(".blog-search", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")

    // Blog posts animation
    gsap.fromTo(
      ".blog-post",
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: postsRef.current,
          start: "top 75%",
        },
      },
    )

    // Newsletter animation
    gsap.fromTo(
      ".newsletter-content",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-night text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-tiffany-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-hookers-green/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div className="blog-badge inline-flex items-center gap-2 px-6 py-3 rounded-full bg-tiffany-blue/10 border border-tiffany-blue/20 mb-8">
              <BookOpen className="w-4 h-4 text-tiffany-blue" />
              <span className="text-sm font-medium text-tiffany-blue">5 Years of Insights</span>
            </motion.div>

            <h1 className="blog-title text-7xl md:text-8xl font-bold mb-8 leading-none">
              <span className="block text-white">Insights &</span>
              <span className="block bg-gradient-to-r from-tiffany-blue to-white bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>

            <p className="blog-subtitle text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover the latest trends, insights, and innovations in digital design, development, and brand strategy
              from the Visqode team. 5 years of expertise distilled into actionable knowledge.
            </p>

            {/* Search and Filter */}
            <div className="blog-search max-w-2xl mx-auto mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-tiffany-blue/50 focus:bg-white/15 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.name
                        ? "bg-gradient-to-r from-tiffany-blue to-hookers-green text-night"
                        : "bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    {category.name} ({category.count})
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.article whileHover={{ y: -10, scale: 1.01 }} className="blog-post group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8">
                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night text-sm font-bold rounded-full">
                        FEATURED
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-tiffany-blue text-xs font-semibold rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-tiffany-blue transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-8 text-lg">{featuredPost.intro}</p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                        <div className="flex items-center gap-2">
                          <span>By {featuredPost.author}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-tiffany-blue font-bold text-lg group-hover:gap-4 transition-all duration-300"
                      >
                        Read Full Article
                        <ArrowRight className="w-6 h-6" />
                      </motion.button>
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="blog-post group cursor-pointer"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="h-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 p-6">
                          {/* Image */}
                          <div className="relative overflow-hidden rounded-2xl mb-6">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night text-xs font-semibold rounded-full">
                                {post.category}
                              </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </div>
                            </div>

                            <h2 className="text-xl font-bold text-white mb-4 group-hover:text-tiffany-blue transition-colors line-clamp-2 leading-tight">
                              {post.title}
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">{post.intro}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-400">By {post.author}</span>
                              <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 text-tiffany-blue font-semibold group-hover:gap-3 transition-all duration-300"
                              >
                                Read More
                                <ArrowRight className="w-4 h-4" />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              {regularPosts.length >= 9 && (
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(180, 232, 219, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night font-bold text-lg rounded-full transition-all duration-300"
                  >
                    Load More Articles
                  </motion.button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section ref={newsletterRef} className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-tiffany-blue/5 via-transparent to-hookers-green/5" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="newsletter-content p-16 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tiffany-blue/10 to-hookers-green/10 rounded-3xl" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-full flex items-center justify-center mx-auto mb-8">
                <TrendingUp className="w-10 h-10 text-night" />
              </div>

              <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">Stay Ahead of the Curve</h3>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get exclusive insights, cutting-edge trends, and expert knowledge delivered directly to your inbox. Join
                thousands of innovators who trust Visqode for the latest in digital excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-tiffany-blue/50 focus:bg-white/15 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(180, 232, 219, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-tiffany-blue to-hookers-green text-night font-bold rounded-full transition-all duration-300"
                >
                  Subscribe Now
                </motion.button>
              </div>

              <p className="text-sm text-gray-400">No spam, unsubscribe at any time. We respect your privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Topics</h2>
            <p className="text-xl text-gray-400">Dive deeper into the subjects that matter most</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Development",
                description: "Latest in web technologies, frameworks, and coding best practices",
                count: `${blogPosts.filter((post) => post.category === "Development").length} Articles`,
              },
              {
                icon: Palette,
                title: "Design",
                description: "UI/UX trends, design systems, and creative inspiration",
                count: `${blogPosts.filter((post) => post.category === "Design").length} Articles`,
              },
              {
                icon: TrendingUp,
                title: "Strategy",
                description: "Business insights, brand building, and growth strategies",
                count: `${blogPosts.filter((post) => post.category === "Business" || post.category === "Branding").length} Articles`,
              },
            ].map((topic, index) => (
              <motion.div
                key={topic.title}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-tiffany-blue/30 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-tiffany-blue to-hookers-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <topic.icon className="w-8 h-8 text-night" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{topic.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{topic.description}</p>
                <span className="text-tiffany-blue font-semibold text-sm">{topic.count}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
