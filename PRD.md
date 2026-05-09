1. Executive Summary
The client is a curated pre-owned luxury car dealership currently operating via Instagram. This website will be a full-featured digital showroom — matching every capability on wishwheels.com, built from scratch on a modern stack (Next.js + Tailwind), and customized to the client's brand identity. The goal is to convert passive Instagram followers and search traffic into warm leads via WhatsApp and Instagram DMs, while giving the client full operational control over their catalogue.

2. Brand & Design System
Extracted from the 3 Instagram posts provided (Mercedes C200, GLC 200 4MATIC, Range Rover Sport):
ElementDirectionBackgroundDeep black / near-black (#0A0A0A, #111)AccentWarm gold / champagne (#C9A84C or similar)TypographyElegant sans-serif headings (think Cormorant Garamond / Playfair Display / PP Editorial), clean body fontPhotography styleMulti-angle, well-lit, studio-adjacent. Grid of 9–10 shots per car. Clean, confident, no clutterCopy tonePremium bullet-point format with section headers (Exterior / Interior / Performance / Technology / Safety). Factual but aspirational. "Discover More" hook at top.Animation feelSlow, cinematic. Parallax scrolls, fade-in reveals, no bouncy or snappy transitions

3. Full Feature Set
Every feature on wishwheels.com is included. They're organized below by section.

3.1 Navigation

Transparent navbar over hero, solid on scroll (with backdrop blur)
Logo centered (or left, per client brand)
Phone number in top bar (click-to-call)
Login / Account link (for saved cars / wishlist — v1 optional, v2 full)
Nav items:

Car Collection → dropdown: Pre-Loved Cars | Unregistered Cars | Sold Cars
Sell Your Car
Compare (car vs car comparison tool)


Sticky CTA button: "Book a Home Test Drive" → appointment form
Mobile: hamburger menu, WhatsApp floating button


3.2 Hero Section (Slider)
Wishwheels uses a 4-slide hero (Slider Revolution). We build this natively:

Full-screen slider with 4 slides:

Slide 1: Pre-Loved Cars feature image → links to Pre-Loved catalogue
Slide 2: Unregistered Cars feature image → links to Unregistered catalogue
Slide 3: Full Collection feature image → links to Shop
Slide 4: "Dreams Delivered" cinematic video loop → "Explore Collection" CTA


Arrow navigation + dot indicators
Autoplay with slow crossfade
Mobile: separate optimized images (portrait crop)


3.3 Advanced Search & Filter Bar
Full filter system, directly on homepage below hero — this is a major conversion feature:
FilterOptionsFuel TypePetrol, Diesel, Electric, Hybrid, Petrol HybridState / RegistrationAll 28 states + UTs (MH, DL, KA, etc.)KM DrivenRanges: 0–5K / 5–10K / 10–20K / 20K+ / customPrice Range<50L / 50L–1Cr / 1Cr+Body TypeSUV / Sedan / Coupe / Hatchback / Convertible / Sport / MUVBrandAll brands (AMG, Aston Martin, Audi, Bentley, BMW, Ferrari, Lamborghini, Land Rover, Lexus, Maybach, McLaren, Mercedes-Benz, Porsche, Range Rover, Rolls-Royce, etc.)Seating2 / 4 / 5 / 6 / 7 / 8+ seaterTransmissionAutomatic / Manual / ElectricManufacturing YearFrom / To (range picker, 2000–2026)Owner History1st / 2nd / 3rd / Unregistered / MultipleSort ByNewest First / Oldest First / Price Low→High / Price High→Low

Search button + Reset Filters link
Filter state persists in URL params (shareable filtered URLs)


3.4 Car Catalogue (Shop Page)

Grid: 2-col mobile, 3-col desktop
Each car card shows:

Primary photo (hover to see alternate angle)
Brand name + Model name
Seating capacity badge
SOLD badge overlay (for sold cars — still visible, creates social proof)
Price (₹ formatted)
Registration Year
"→" link to full listing


"Showing X vehicles" count
Pagination or infinite scroll
Three sub-catalogues with separate URLs:

/pre-loved-cars — registered, previously owned
/unregistered-cars — brand new but unregistered (grey market / import)
/sold-cars — social proof archive




3.5 Individual Car Listing Page

Full-width image gallery (9–10 photos, same grid style as client's Instagram posts)
Lightbox on click (fullscreen photo viewer)
Car title, brand, year, price
Specs badges: Fuel | KM | Ownership | Registration State | Transmission | Seating
Description sections (matching Instagram post format):

Exterior
Interior
Performance & Capability
Technology & Assistance
Safety


Sticky bottom bar (mobile): "Enquire on WhatsApp" + "DM on Instagram" — pre-filled with car name
"You May Also Like" — 3 similar car cards


3.6 Model Range Section (Homepage)
Visual grid of body type filters — click to filter catalogue:

Coupe | Sedan | SUV | MUV | Sport | Hatchback | Convertible
Each with a representative silhouette/image and label


3.7 Sell Your Car Page (/sell-car)
Full page mirroring WishWheels' sell flow — this is a lead gen page for inventory acquisition:

Headline: "Sell your car in minutes, not weeks."
6 USP points:

100% Transparent Valuation
Instant Liquidity
Trusted by [X]+ Satisfied Customers
Easy Online Sell Form
Get Best Offer in as Little as 29 Minutes
Outright Purchase


Sell form fields: Name, Phone, Car Brand, Model, Year, KM Driven, Registration State, Ownership, Asking Price, Photos upload, Message
Submit → WhatsApp trigger or email to client


3.8 Car Services Section (Homepage + Sub-pages)
Three service tiles, each with a looping background video:
ServicePageCar Service/car-serviceModifications & Upgrades/modifications-upgradesCar Detailing/car-detailing
Each sub-page: service description, what's included, CTA to book via WhatsApp.

3.9 Book a Home Test Drive (/book-appointment)
Appointment booking form:

Name, Phone, Email, Preferred Car, Preferred Date & Time, Address/City
Submit → confirmation email to user + WhatsApp notification to client
Can integrate with Google Calendar (optional v2)


3.10 About Us Section (/about-us)

Founder quote / message (matching WishWheels' "best dealer" tone)
Founder name + title
Company origin story, city, values
Trust signal numbers: Cars Sold, Years in Business, Satisfied Customers, Brands Available


3.11 Compare Feature (/compare)

Select 2–3 cars from catalogue
Side-by-side spec comparison table: Price, Year, KM, Fuel, Engine, Power, Transmission, Features
"Enquire" CTA per car in comparison


3.12 Testimonials Section

Google Review-style cards (name, verified badge, review text)
Carousel on mobile, grid on desktop
Minimum 5 reviews at launch (sourced from client's existing Google/IG reviews)


3.13 Contact Section + Form

Contact form: Name, Phone, Email, Message, consent checkbox
Click-to-call phone number
WhatsApp link
Office address
Business hours
Embedded Google Map


3.14 Footer

Logo
Quick links: Company Info / Contact / T&C / Privacy Policy / FAQs
Full nav links: Car Collection / Sell Car / Car Servicing / Modifications / Car Detailing / Cars Media / About / News
Social icons: Instagram, Facebook, YouTube, WhatsApp
Phone + Email
Address
Copyright line


3.15 Additional Pages
PageContent/faqsCommon buyer/seller questions/terms-and-conditionsStandard T&C/privacy-policyGDPR/IT Act compliant/news or /blogOptional: car news/updates for SEO/cars-mediaPhoto/video gallery of cars and deliveries/my-accountUser login, saved/wishlist cars (v2)

4. Lead CTAs — Full Implementation
CTA TypeTriggerBehaviorWhatsApp (per car)Listing page CTA buttonOpens wa.me/91XXXXXXXXXX?text=Hi, I'm interested in [Car Name] – [Year] listed on [ClientSite]Instagram DMListing page + contact sectionOpens ig.me/m/[handle]Floating WhatsAppAll pages, bottom-rightGeneric enquiryBook Test DriveNavbar button + heroOpens /book-appointment formSell Your CarNavbar + sell sectionOpens /sell-car formContact FormContact sectionEmail/WhatsApp notification to clientClick-to-callTop bar + footertel: link

5. Analytics & Tracking
Everything you asked about — yes, fully doable:
A. Time on Site & Session Data

Google Analytics 4 (free): avg. engagement time, scroll depth, bounce rate, session count, geography, device breakdown
Vercel Analytics (free tier): page views, unique visitors, top pages

B. Per-Car Click Tracking

GA4 custom events on every meaningful interaction:

car_view → { car_name, brand, price_band, body_type }
whatsapp_click → { car_name, source_page }
instagram_dm_click → { car_name }
test_drive_book → { car_name }
filter_used → { filter_type, value }
sell_car_form_submit


Client gets a GA4 dashboard showing which cars get most views and which generate most leads

C. Heatmaps & Session Recordings

Microsoft Clarity (free): full session recordings + click heatmaps + scroll maps
Client can literally watch how users browse — which cars they hover, where they drop off

D. Instagram Feed Embed

Behold.so or SnapWidget (free tier): pulls latest 6–9 IG posts live. Site stays fresh without manual work.


6. Content Plan
ContentSource3 existing car listings (full spec + photos)Client's Instagram posts (provided)10 additional car listings (photos + editorial descriptions)AI-generated — matching client's styleBrand name, logo, colors, taglineClient inputWhatsApp number, Instagram handleClientAbout text, founder quoteClient input / Claude draftTestimonials (5+)Client's Google/IG reviewsService page contentClient input / Claude draft
AI-generated cars (10) will match the exact description format from the client's posts — section headers (Exterior / Interior / Performance / Technology / Safety), bullet points, luxury editorial tone, Instagram caption style. Photos generated to match: multi-angle, dark/dramatic lighting, premium feel.
Cars to be generated (subject to client approval):
BMW X5 M Sport | Porsche Cayenne | Audi Q8 | Mercedes GLE 450 | Lamborghini Urus | Rolls-Royce Ghost | Bentley Bentayga | BMW 7 Series | Aston Martin DBX | Lexus LX 570

7. Tech Stack
LayerToolReasonFrameworkNext.js 14 (App Router)SEO, fast routing, image optimizationStylingTailwind CSS + custom CSS variablesPrecision luxury stylingAnimationsFramer MotionCinematic scroll reveals, parallaxCMSJSON files or Notion DBClient can update cars without touching codeHostingVercel (free tier)Zero config deploy, auto HTTPSAnalyticsGA4 + Vercel AnalyticsFull funnel trackingHeatmapsMicrosoft ClaritySession recordings, freeIG FeedBehold.soLive Instagram embedFormsFormspree or custom API routeSell form, contact form, test drive bookingImagesNext/image + Cloudinary (free tier)Optimized delivery, fast load

8. SEO Strategy

Each car listing is a unique URL (/cars/[slug]) — indexed by Google
Title tags: [Brand] [Model] [Year] for Sale – [City] | [ClientName]
Meta descriptions auto-generated from car spec data
Sitemap auto-generated
Schema markup: AutoDealer, Car, Product (rich results in Google Search)
Core Web Vitals optimized (Vercel + Next/image handles most of this)


9. Deliverables
#Deliverable1This PRD (signed off)2Figma design mockup — Hero, Catalogue page, Car listing page, Mobile views310 AI-generated car photos + editorial descriptions (matching client style)4Full Next.js build with all pages + features above5GA4 + Clarity setup with custom event tracking6CMS setup (client can add/edit/remove cars independently)7Client handoff doc — how to update inventory, check analytics8Deployment on Vercel with custom domain

10. Timeline
PhaseTasksDays1 — Brand & DesignExtract brand system, Figma mockup (3 key screens)22 — Content10 AI car photos + descriptions1 (parallel)3 — Core BuildHomepage, catalogue, car listing page, filters34 — Inner PagesSell car, test drive, about, services, compare25 — Analytics + QAGA4 events, Clarity, cross-device testing16 — LaunchDeploy, domain, handoff doc1Total~8–9 working days

11. Out of Scope — V1

Payment / booking deposit system
Live chat widget
User accounts / saved cars (noted for v2)
Car loan EMI calculator (v2)
Multilingual support