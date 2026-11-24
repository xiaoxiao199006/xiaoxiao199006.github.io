/* ============================================================
   Jingwei Yixing · China Travel Custom (English inbound)
   Demo product dataset — prices and listings are samples for
   layout review; final products, prices and availability are
   confirmed on inquiry.
   Category keys:
     transfer  Airport transfer
     car       Private charter with driver
     hotel     Hotel (booked by night)
     attraction Guided tours / activities / tickets
     corp      Company / corporate visit
     univ      University visit
     other     Add-on services (dining, guide, interpreter, visa…)
   Slot keys: morning / afternoon / evening / allday / flexible / night
   Age keys: all / family / young / senior / couple / business
   ============================================================ */
window.PRODUCTS = [

  /* ---------------- BEIJING · North China ---------------- */
  {
    id: "BJ-01", name: "Forbidden City & Tiananmen Square Guided Tour",
    city: "Beijing", region: "Beijing", country: "China", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "Full day", slot: "allday" },
    price: { fixed: 380, unit: "per person", range: "¥280–680 / person" },
    desc: "A comprehensive walking tour of Tiananmen Square and the Forbidden City, with an English-speaking guide covering imperial history, architecture and court life. Admission tickets arranged in advance.",
    included: ["English-speaking guide", "Forbidden City admission", "Hotel pickup & drop-off in central Beijing", "Bottled water"],
    excluded: ["Lunch", "Imperial Garden optional ticket", "Personal expenses"],
    note: "ID / passport required for entry. Reserved slots are confirmed after booking.",
    related: ["BJ-03", "XA-01", "SH-03"], standalone: false
  },
  {
    id: "BJ-02", name: "Mutianyu Great Wall Private Day Tour",
    city: "Beijing", region: "Beijing", country: "China", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "Full day", slot: "allday" },
    price: { fixed: 680, unit: "per group", range: "¥520–1,280 / group" },
    desc: "Private door-to-door day trip to the Mutianyu section of the Great Wall — less crowded than Badaling, with cable car or toboggan options. Private vehicle and guide arranged for your group.",
    included: ["Private vehicle", "English-speaking guide", "Round-trip transfers", "Wall admission"],
    excluded: ["Cable car / toboggan", "Lunch", "Travel insurance"],
    note: "Allow 3–4 hours on site; moderate walking involved.",
    related: ["BJ-01", "ZJJ-01", "GL-01"], standalone: false
  },
  {
    id: "BJ-03", name: "Temple of Heaven & Old Hutong Rickshaw Ride",
    city: "Beijing", region: "Beijing", country: "China", cat: "attraction",
    tags: { stars: 4, age: "all", dur: "Half day", slot: "afternoon" },
    price: { fixed: 320, unit: "per person", range: "¥240–480 / person" },
    desc: "Afternoon visit to the Temple of Heaven imperial complex, followed by a rickshaw ride through preserved hutong alleys and a local courtyard stop.",
    included: ["English-speaking guide", "Temple of Heaven admission", "Rickshaw ride", "Transfers in central Beijing"],
    excluded: ["Tea / snack tasting", "Dinner"],
    note: "Rickshaw seats limited; confirm group size when inquiring.",
    related: ["BJ-01", "SH-02", "XA-02"], standalone: false
  },
  {
    id: "BJ-04", name: "Peking Duck Signature Dinner",
    city: "Beijing", region: "Beijing", country: "China", cat: "other",
    tags: { stars: 5, age: "all", dur: "Evening", slot: "evening" },
    price: { fixed: 320, unit: "per person", range: "¥220–520 / person" },
    desc: "Reserved table at an established roast-duck restaurant; classic duck carving ceremony with pancakes, sauces and seasonal side dishes. Hotel transfer can be added.",
    included: ["Duck dinner set", "Table reservation", "English menu support"],
    excluded: ["Drinks", "Hotel transfer", "Service charge"],
    note: "Halal / vegetarian alternatives available on request.",
    related: ["GZ-02", "CD-03", "BJ-03"], standalone: false
  },
  {
    id: "BJ-05", name: "Beijing Airport Private Transfer (PEK / PKX)",
    city: "Beijing", region: "Beijing", country: "China", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "Per transfer", slot: "flexible" },
    price: { fixed: 350, unit: "per car", range: "¥280–480 / car" },
    desc: "Meet-and-greet private transfer between Beijing Capital (PEK) or Daxing (PKX) airport and your downtown hotel. Flight number tracked for delays; child seats available on request.",
    included: ["Meet & greet at arrivals", "Private vehicle", "Flight delay tracking", "Waiting time allowance"],
    excluded: ["Overtime waiting fee", "Tolls / parking if applicable"],
    note: "Provide flight number, terminal and hotel address when booking.",
    related: ["SH-05", "XA-05", "CD-05"], standalone: false
  },
  {
    id: "BJ-06", name: "Private Charter Car with Driver — 8 Hours",
    city: "Beijing", region: "Beijing", country: "China", cat: "car",
    tags: { stars: 5, age: "all", dur: "8 hours", slot: "flexible" },
    price: { fixed: 880, unit: "per car", range: "¥680–1,280 / car" },
    desc: "Private car with English-aware driver for up to 8 hours within Beijing. Flexible routing for sights, meetings and shopping; larger vans available for groups.",
    included: ["Fuel & driver", "8-hour usage", "Door-to-door service"],
    excluded: ["Guide / interpreter", "Tolls & parking", "Overtime"],
    note: "Vehicle size matches passenger count and luggage.",
    related: ["BJ-05", "SH-06", "GL-03"], standalone: false
  },
  {
    id: "BJ-07", name: "Tsinghua & Peking University Campus Visit",
    city: "Beijing", region: "Beijing", country: "China", cat: "univ",
    tags: { stars: 4, age: "young", dur: "Half day", slot: "morning" },
    price: { fixed: 800, unit: "per group", range: "¥600–1,200 / group" },
    desc: "Campus walk through two of China's most renowned universities, with background on admissions, academic strengths and student life. Entry arranged according to current campus visitor policy.",
    included: ["Campus route planning", "Visitor application support", "Guide escort"],
    excluded: ["Faculty meetings", "Admissions consultation"],
    note: "University entry policies change frequently; slots are subject to approval.",
    related: ["SH-07", "XA-07", "CD-06"], standalone: false
  },
  {
    id: "BJ-08", name: "Zhongguancun Tech Park & Innovation Company Visit",
    city: "Beijing", region: "Beijing", country: "China", cat: "corp",
    tags: { stars: 4, age: "business", dur: "Half day", slot: "morning" },
    price: { fixed: 1500, unit: "per group", range: "¥1,200–2,800 / group" },
    desc: "Guided visit to Beijing's Zhongguancun innovation cluster, covering tech parks, startup hubs and selected company showrooms. Briefing on China's tech ecosystem included.",
    included: ["Park & showroom itinerary", "Business escort", "Ecosystem briefing notes"],
    excluded: ["Specific company meetings", "Translation beyond basic escort"],
    note: "Company-level visits require advance approval and are confirmed case by case.",
    related: ["SH-08", "SZ-01", "BJ-07"], standalone: false
  },
  {
    id: "BJ-09", name: "5-Star Business Hotel — Wangfujing / Guomao",
    city: "Beijing", region: "Beijing", country: "China", cat: "hotel",
    tags: { stars: 5, age: "all", dur: "Per night", slot: "night" },
    price: { fixed: 680, unit: "per night", range: "¥480–1,280 / night" },
    desc: "Handpicked 4–5 star hotels in central Beijing (Wangfujing, Qianmen or Guomao), close to metro lines and major sights. Room type and bed configuration confirmed on inquiry.",
    included: ["Breakfast option", "Free cancellation where available", "Booking confirmation"],
    excluded: ["City tax", "Minibar & extras"],
    note: "Booked by night; assign to each check-in date in your itinerary.",
    related: ["SH-09", "HZ-03", "BJ-06"], standalone: false
  },

  /* ---------------- SHANGHAI · East China ---------------- */
  {
    id: "SH-01", name: "The Bund & French Concession Walking Tour",
    city: "Shanghai", region: "Shanghai", country: "China", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "Half day", slot: "morning" },
    price: { fixed: 350, unit: "per person", range: "¥260–520 / person" },
    desc: "Morning walk along the Bund waterfront, then into the tree-lined French Concession: former residences, former concessions history, boutiques and cafés with a local guide.",
    included: ["English-speaking guide", "Walking route", "Metro / short transfers as needed"],
    excluded: ["Café & shopping expenses", "River cruise ticket"],
    note: "Comfortable walking shoes recommended.",
    related: ["SH-02", "SH-03", "BJ-03"], standalone: false
  },
  {
    id: "SH-02", name: "Yu Garden & Old Town God Temple Afternoon",
    city: "Shanghai", region: "Shanghai", country: "China", cat: "attraction",
    tags: { stars: 4, age: "family", dur: "Half day", slot: "afternoon" },
    price: { fixed: 300, unit: "per person", range: "¥220–450 / person" },
    desc: "Afternoon in Shanghai's old town: classical Yu Garden, Old Street bazaar and City God Temple, with tea-house and snack recommendations for the family.",
    included: ["English-speaking guide", "Yu Garden admission", "Old town orientation"],
    excluded: ["Snacks & tea", "Souvenirs"],
    note: "Weekends are crowded; weekday visits recommended.",
    related: ["SH-01", "SU-01", "XA-02"], standalone: false
  },
  {
    id: "SH-03", name: "Shanghai Museum Guided Visit",
    city: "Shanghai", region: "Shanghai", country: "China", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "Half day", slot: "morning" },
    price: { fixed: 280, unit: "per person", range: "¥200–420 / person" },
    desc: "Guided morning visit to one of China's finest museums: bronze, ceramics, painting and jade collections, interpreted in context for first-time visitors.",
    included: ["Guide narration", "Reservation support", "Gallery route"],
    excluded: ["Special exhibition tickets"],
    note: "Free general entry but timed slots are limited; reserve early.",
    related: ["SH-01", "XA-04", "BJ-01"], standalone: false
  },
  {
    id: "SH-04", name: "Lujiazui Observation Deck Ticket",
    city: "Shanghai", region: "Shanghai", country: "China", cat: "attraction",
    tags: { stars: 4, age: "all", dur: "Flexible", slot: "evening" },
    price: { fixed: 180, unit: "per person", range: "¥150–260 / person" },
    desc: "Standalone observation-deck ticket in Lujiazui skyline tower, best at sunset or after dark. Ticket only — no guide or transfer included; arrange independently or add a charter car.",
    included: ["Observation deck entry", "Timed ticket"],
    excluded: ["Guide", "Transfer", "Dining at the tower"],
    note: "Standalone ticket: it does not take up a day slot in the itinerary planner.",
    related: ["SH-01", "GZ-01"], standalone: true
  },
  {
    id: "SH-05", name: "Shanghai Airport Private Transfer (PVG / SHA)",
    city: "Shanghai", region: "Shanghai", country: "China", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "Per transfer", slot: "flexible" },
    price: { fixed: 350, unit: "per car", range: "¥280–480 / car" },
    desc: "Private meet-and-greet transfer between Pudong (PVG) or Hongqiao (SHA) airport and your Shanghai hotel. Flight tracking and waiting allowance included.",
    included: ["Meet & greet", "Private vehicle", "Flight delay tracking"],
    excluded: ["Overtime waiting fee", "Tolls / parking"],
    note: "PVG is farther from downtown; provide terminal and flight number.",
    related: ["BJ-05", "XA-05", "CD-05"], standalone: false
  },
  {
    id: "SH-06", name: "Private Charter Car with Driver — 8 Hours",
    city: "Shanghai", region: "Shanghai", country: "China", cat: "car",
    tags: { stars: 5, age: "all", dur: "8 hours", slot: "flexible" },
    price: { fixed: 880, unit: "per car", range: "¥680–1,280 / car" },
    desc: "Private car and driver for up to 8 hours across Shanghai, suitable for sightseeing loops, business meetings and shopping. Vans available for groups and luggage.",
    included: ["Fuel & driver", "8-hour usage", "Door-to-door service"],
    excluded: ["Guide / interpreter", "Tolls & parking", "Overtime"],
    note: "Routing shared with driver the evening before.",
    related: ["SH-05", "BJ-06", "GL-03"], standalone: false
  },
  {
    id: "SH-07", name: "Fudan & Shanghai Jiao Tong University Visit",
    city: "Shanghai", region: "Shanghai", country: "China", cat: "univ",
    tags: { stars: 4, age: "young", dur: "Half day", slot: "morning" },
    price: { fixed: 800, unit: "per group", range: "¥600–1,200 / group" },
    desc: "Campus orientation at Fudan University and/or Shanghai Jiao Tong University, covering academic strengths, international programs and student life. Visitor entry arranged per current policy.",
    included: ["Campus route", "Visitor application support", "Escort"],
    excluded: ["Faculty / admissions meeting"],
    note: "Entry approval varies by season; confirm dates early.",
    related: ["BJ-07", "XA-07", "CD-06"], standalone: false
  },
  {
    id: "SH-08", name: "Zhangjiang Hi-Tech Park Company Visit",
    city: "Shanghai", region: "Shanghai", country: "China", cat: "corp",
    tags: { stars: 4, age: "business", dur: "Half day", slot: "morning" },
    price: { fixed: 1500, unit: "per group", range: "¥1,200–2,800 / group" },
    desc: "Visit to Zhangjiang Innovation Park's semiconductor, biotech and software clusters, with showroom stops and a briefing on industry chains and partnerships.",
    included: ["Park itinerary", "Business escort", "Briefing materials"],
    excluded: ["Named-company meetings", "Simultaneous interpretation"],
    note: "Specific company visits require advance approval; subject to availability.",
    related: ["BJ-08", "SZ-01", "SH-07"], standalone: false
  },
  {
    id: "SH-09", name: "Boutique Hotel — People's Square / the Bund",
    city: "Shanghai", region: "Shanghai", country: "China", cat: "hotel",
    tags: { stars: 5, age: "all", dur: "Per night", slot: "night" },
    price: { fixed: 720, unit: "per night", range: "¥520–1,380 / night" },
    desc: "Curated 4–5 star and boutique hotels near People's Square, Nanjing Road or the Bund, with metro access for sightseeing and business.",
    included: ["Breakfast option", "Booking confirmation", "Cancellation terms shown"],
    excluded: ["City tax", "Minibar & extras"],
    note: "Booked by night; match each night of your stay in the planner.",
    related: ["BJ-09", "HZ-03", "SH-06"], standalone: false
  },

  /* ---------------- SUZHOU & HANGZHOU · East China ---------------- */
  {
    id: "HZ-01", name: "West Lake Boat Cruise & Lingyin Temple Day Tour",
    city: "Hangzhou", region: "Suzhou & Hangzhou", country: "China", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "Full day", slot: "allday" },
    price: { fixed: 420, unit: "per person", range: "¥320–680 / person" },
    desc: "Day tour of Hangzhou: West Lake cruise, Su Causeway walk, Lingyin Temple and Feilai Peak, with Longjing tea stop. Transfers from Shanghai or Hangzhou available.",
    included: ["Guide", "Lake cruise ticket", "Temple admission", "Transfers within tour"],
    excluded: ["Lunch", "Tea souvenir"],
    note: "Can be combined with a Suzhou garden tour on a multi-day loop.",
    related: ["SU-01", "HZ-02", "SH-01"], standalone: false
  },
  {
    id: "HZ-02", name: "Longjing Tea Plantation & Tea House Experience",
    city: "Hangzhou", region: "Suzhou & Hangzhou", country: "China", cat: "attraction",
    tags: { stars: 4, age: "couple", dur: "Half day", slot: "morning" },
    price: { fixed: 300, unit: "per person", range: "¥220–480 / person" },
    desc: "Morning in the Longjing tea hills: terrace walk, tea-picking explanation, brewing demonstration and a tasting session at a local tea house.",
    included: ["Guide", "Tea tasting", "Plantation walk"],
    excluded: ["Tea purchase", "Lunch"],
    note: "Best in spring harvest season; other seasons show terrace landscapes.",
    related: ["HZ-01", "SU-02", "BJ-03"], standalone: false
  },
  {
    id: "SU-01", name: "Suzhou Classical Gardens & Pingjiang Road",
    city: "Suzhou", region: "Suzhou & Hangzhou", country: "China", cat: "attraction",
    tags: { stars: 4, age: "all", dur: "Full day", slot: "allday" },
    price: { fixed: 380, unit: "per person", range: "¥280–560 / person" },
    desc: "Day tour of Suzhou's classical gardens (Humble Administrator's Garden / Lingering Garden) and the canal-side Pingjiang Road historic district, with silk-shop orientation.",
    included: ["Guide", "Garden admissions", "Suzhou round-trip transfer from Shanghai option"],
    excluded: ["Silk purchases", "Lunch"],
    note: "Often paired with HZ-01 on a 2-day Shanghai–Suzhou–Hangzhou loop.",
    related: ["HZ-01", "SU-02", "SH-02"], standalone: false
  },
  {
    id: "SU-02", name: "Water Town Day Trip — Zhouzhuang or Tongli",
    city: "Suzhou", region: "Suzhou & Hangzhou", country: "China", cat: "attraction",
    tags: { stars: 4, age: "couple", dur: "Full day", slot: "allday" },
    price: { fixed: 400, unit: "per person", range: "¥300–620 / person" },
    desc: "Day escape to a preserved Jiangnan water town: stone bridges, canal boat ride, old canalside houses and local snacks. Quiet morning slots recommended for photos.",
    included: ["Transfer", "Water town admission", "Canal boat ride", "Guide"],
    excluded: ["Lunch & snacks", "Souvenirs"],
    note: "Two town options offered; choice confirmed on inquiry.",
    related: ["SU-01", "HZ-01", "GL-02"], standalone: false
  },
  {
    id: "HZ-03", name: "Lake-View Boutique Hotel, Hangzhou",
    city: "Hangzhou", region: "Suzhou & Hangzhou", country: "China", cat: "hotel",
    tags: { stars: 5, age: "couple", dur: "Per night", slot: "night" },
    price: { fixed: 760, unit: "per night", range: "¥560–1,480 / night" },
    desc: "Curated hotel near West Lake or Xixi wetland, chosen for quiet setting and lake/garden views. Room layout and view level confirmed before booking.",
    included: ["Breakfast option", "Booking confirmation"],
    excluded: ["Resort fee", "Spa & extras"],
    note: "Booked by night for each stop on your route.",
    related: ["SH-09", "BJ-09", "HZ-01"], standalone: false
  },

  /* ---------------- XI'AN · Northwest ---------------- */
  {
    id: "XA-01", name: "Terracotta Warriors & Huaqing Palace Day Tour",
    city: "Xi'an", region: "Xi'an", country: "China", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "Full day", slot: "allday" },
    price: { fixed: 380, unit: "per person", range: "¥280–620 / person" },
    desc: "Full-day Xi'an classic: Terracotta Army pits with guide narration, museum interpretation, and optional Huaqing Palace / Tang hot-spring stop on the way back.",
    included: ["English-speaking guide", "Warriors admission", "Round-trip transfer", "Bottled water"],
    excluded: ["Lunch", "Huaqing Palace optional ticket", "Evening show"],
    note: "Sites are 40 km east of Xi'an; early departure recommended.",
    related: ["XA-04", "XA-03", "BJ-01"], standalone: false
  },
  {
    id: "XA-02", name: "City Wall Bike Ride & Muslim Quarter Evening",
    city: "Xi'an", region: "Xi'an", country: "China", cat: "attraction",
    tags: { stars: 4, age: "young", dur: "Half day", slot: "afternoon" },
    price: { fixed: 260, unit: "per person", range: "¥180–400 / person" },
    desc: "Afternoon cycling on the ancient City Wall, then evening in the Muslim Quarter: street food, mosque architecture and local bazaar, with guide recommendations.",
    included: ["Bike rental", "Wall admission", "Quarter guide walk"],
    excluded: ["Food & drinks", "Bike deposit"],
    note: "Cycling section optional; walking route available instead.",
    related: ["XA-01", "XA-03", "CD-04"], standalone: false
  },
  {
    id: "XA-03", name: "Big Wild Goose Pagoda & Tang Dynasty Show",
    city: "Xi'an", region: "Xi'an", country: "China", cat: "attraction",
    tags: { stars: 4, age: "all", dur: "Evening", slot: "evening" },
    price: { fixed: 320, unit: "per person", range: "¥240–560 / person" },
    desc: "Evening visit to the Big Wild Goose Pagoda plaza, followed by a Tang Dynasty culture song-and-dance show in a theater district.",
    included: ["Show ticket (selected tier)", "Plaza orientation", "Transfer option"],
    excluded: ["Dinner", "Premium seating upgrade"],
    note: "Show schedules vary by season; seat tier chosen on inquiry.",
    related: ["XA-01", "XA-02", "BJ-04"], standalone: false
  },
  {
    id: "XA-04", name: "Shaanxi History Museum Guided Visit",
    city: "Xi'an", region: "Xi'an", country: "China", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "Half day", slot: "morning" },
    price: { fixed: 280, unit: "per person", range: "¥200–420 / person" },
    desc: "Morning guided visit to Shaanxi History Museum's defining treasures — Zhou bronzes, Qin terracotta figures, Tang gold and silver — set against the Silk Road story.",
    included: ["Guide narration", "Reservation support", "Gallery route"],
    excluded: ["Special exhibition ticket"],
    note: "Timed free slots sell out fast; reserve in advance.",
    related: ["XA-01", "SH-03", "BJ-01"], standalone: false
  },
  {
    id: "XA-05", name: "Xi'an Airport Private Transfer (XIY)",
    city: "Xi'an", region: "Xi'an", country: "China", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "Per transfer", slot: "flexible" },
    price: { fixed: 320, unit: "per car", range: "¥260–450 / car" },
    desc: "Private transfer between Xi'an Xianyang Airport (XIY) and city hotel, with meet-and-greet and flight tracking.",
    included: ["Meet & greet", "Private vehicle", "Flight delay tracking"],
    excluded: ["Overtime waiting fee", "Tolls"],
    note: "Airport is ~40 km from downtown; provide flight number.",
    related: ["BJ-05", "SH-05", "CD-05"], standalone: false
  },
  {
    id: "XA-06", name: "Private Charter Car with Driver — 8 Hours",
    city: "Xi'an", region: "Xi'an", country: "China", cat: "car",
    tags: { stars: 4, age: "all", dur: "8 hours", slot: "flexible" },
    price: { fixed: 780, unit: "per car", range: "¥600–1,080 / car" },
    desc: "Private car and driver for Xi'an city sights and east-side museum loop. Suitable for families and small groups; van options available.",
    included: ["Fuel & driver", "8-hour usage", "Door-to-door service"],
    excluded: ["Guide", "Tolls & parking", "Overtime"],
    note: "Warriors round trip fits within an 8-hour charter.",
    related: ["XA-05", "BJ-06", "GL-03"], standalone: false
  },
  {
    id: "XA-07", name: "Xi'an Jiaotong University Campus Visit",
    city: "Xi'an", region: "Xi'an", country: "China", cat: "univ",
    tags: { stars: 4, age: "young", dur: "Half day", slot: "morning" },
    price: { fixed: 700, unit: "per group", range: "¥500–1,000 / group" },
    desc: "Campus walk at Xi'an Jiaotong University, one of China's leading research universities, with introduction to engineering, management and international programs.",
    included: ["Campus route", "Visitor application support", "Escort"],
    excluded: ["Faculty meeting", "Admissions interview"],
    note: "Entry subject to current visitor policy.",
    related: ["BJ-07", "SH-07", "CD-06"], standalone: false
  },

  /* ---------------- CHENGDU · Southwest ---------------- */
  {
    id: "CD-01", name: "Giant Panda Breeding Base Morning Visit",
    city: "Chengdu", region: "Chengdu", country: "China", cat: "attraction",
    tags: { stars: 5, age: "family", dur: "Half day", slot: "morning" },
    price: { fixed: 260, unit: "per person", range: "¥180–400 / person" },
    desc: "Early morning visit to the Chengdu Research Base of Giant Panda Breeding, when pandas are most active. Guide explains breeding, conservation and reserve work.",
    included: ["Guide", "Base admission", "Round-trip transfer"],
    excluded: ["Panda holding / photo add-on"],
    note: "Arrive early for active pandas; bring light rain gear in summer.",
    related: ["CD-04", "CD-02", "GZ-02"], standalone: false
  },
  {
    id: "CD-02", name: "Leshan Giant Buddha Day Trip",
    city: "Chengdu", region: "Chengdu", country: "China", cat: "attraction",
    tags: { stars: 4, age: "all", dur: "Full day", slot: "allday" },
    price: { fixed: 420, unit: "per person", range: "¥320–620 / person" },
    desc: "Day trip to the Leshan Giant Buddha, with cliffside walkways, river-view photo stop and optional boat cruise at the confluence of three rivers.",
    included: ["Transfer", "Guide", "Buddha scenic area admission"],
    excluded: ["Boat cruise ticket", "Lunch"],
    note: "Steep steps on cliff route; an easier river-view option exists.",
    related: ["CD-01", "ZJJ-01", "XA-01"], standalone: false
  },
  {
    id: "CD-03", name: "Sichuan Cuisine Cooking Class & Market Walk",
    city: "Chengdu", region: "Chengdu", country: "China", cat: "other",
    tags: { stars: 5, age: "young", dur: "Half day", slot: "morning" },
    price: { fixed: 380, unit: "per person", range: "¥280–560 / person" },
    desc: "Morning market walk to read local ingredients, then hands-on cooking class for 2–3 Sichuan classics (kung pao, mapo tofu, dumplings). Sit down to eat what you cook.",
    included: ["Market walk", "Ingredients & class", "Recipe card", "Lunch (your dishes)"],
    excluded: ["Drinks", "Cooking tools to take home"],
    note: "Dietary restrictions shared in advance; spicy level adjustable.",
    related: ["CD-04", "BJ-04", "GZ-02"], standalone: false
  },
  {
    id: "CD-04", name: "Jinli Ancient Street & Wuhou Shrine",
    city: "Chengdu", region: "Chengdu", country: "China", cat: "attraction",
    tags: { stars: 4, age: "all", dur: "Half day", slot: "afternoon" },
    price: { fixed: 240, unit: "per person", range: "¥160–360 / person" },
    desc: "Afternoon at Wuhou Shrine's Three Kingdoms history, then Jinli pedestrian street for snacks, tea houses and handicrafts.",
    included: ["Guide", "Shrine admission", "Street orientation"],
    excluded: ["Snacks & tea", "Souvenirs"],
    note: "Pairs well with the cooking class on the same day.",
    related: ["CD-01", "CD-03", "XA-02"], standalone: false
  },
  {
    id: "CD-05", name: "Chengdu Airport Private Transfer (CTU / TFU)",
    city: "Chengdu", region: "Chengdu", country: "China", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "Per transfer", slot: "flexible" },
    price: { fixed: 320, unit: "per car", range: "¥260–480 / car" },
    desc: "Private transfer between Chengdu Shuangliu (CTU) or Tianfu (TFU) airport and city hotel. Confirm terminal; TFU is farther from downtown.",
    included: ["Meet & greet", "Private vehicle", "Flight tracking"],
    excluded: ["Overtime waiting fee", "Tolls"],
    note: "Provide flight number and terminal when booking.",
    related: ["BJ-05", "SH-05", "XA-05"], standalone: false
  },
  {
    id: "CD-06", name: "Sichuan University Campus Visit",
    city: "Chengdu", region: "Chengdu", country: "China", cat: "univ",
    tags: { stars: 4, age: "young", dur: "Half day", slot: "morning" },
    price: { fixed: 700, unit: "per group", range: "¥500–1,000 / group" },
    desc: "Campus orientation at Sichuan University, covering its medical, engineering and humanities strengths and international student life.",
    included: ["Campus route", "Visitor application support", "Escort"],
    excluded: ["Faculty meeting"],
    note: "Entry subject to current campus policy.",
    related: ["BJ-07", "SH-07", "XA-07"], standalone: false
  },

  /* ---------------- GUILIN & YANGSHUO · South China ---------------- */
  {
    id: "GL-01", name: "Li River Scenic Cruise to Yangshuo",
    city: "Guilin", region: "Guilin & Yangshuo", country: "China", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "Full day", slot: "allday" },
    price: { fixed: 380, unit: "per person", range: "¥280–560 / person" },
    desc: "Classic Li River cruise from Guilin to Yangshuo past karst peaks, bamboo groves and riverside villages — the landscape on the ¥20 banknote.",
    included: ["Cruise ticket", "English guide briefing", "Guilin–Yangshuo transfer arrangement"],
    excluded: ["Lunch on board", "Yangshuo evening show"],
    note: "Cruise schedule depends on water level; departure time confirmed before travel.",
    related: ["GL-02", "BJ-02", "ZJJ-01"], standalone: false
  },
  {
    id: "GL-02", name: "Yangshuo Bamboo Raft & Countryside Cycling",
    city: "Yangshuo", region: "Guilin & Yangshuo", country: "China", cat: "attraction",
    tags: { stars: 4, age: "young", dur: "Full day", slot: "allday" },
    price: { fixed: 360, unit: "per person", range: "¥260–520 / person" },
    desc: "Countryside cycling through rice paddies and villages, followed by a bamboo raft ride on the Yulong River. Relaxed pace, photo stops along the way.",
    included: ["Bike rental", "Bamboo raft", "Guide", "Rural transfers"],
    excluded: ["Lunch", "Drinks"],
    note: "Raft age/weight limits apply; alternative pontoon boats available.",
    related: ["GL-01", "SU-02", "XA-02"], standalone: false
  },
  {
    id: "GL-03", name: "Guilin Private Charter Car — Full Day",
    city: "Guilin", region: "Guilin & Yangshuo", country: "China", cat: "car",
    tags: { stars: 4, age: "all", dur: "Full day", slot: "flexible" },
    price: { fixed: 780, unit: "per car", range: "¥600–1,080 / car" },
    desc: "Private car and driver for the Guilin–Yangshuo loop, flexible between river cruise, raft and countryside stops.",
    included: ["Fuel & driver", "Full-day usage", "Door-to-door service"],
    excluded: ["Guide", "Tolls & parking"],
    note: "Car waits at each stop; route agreed in advance.",
    related: ["GL-01", "BJ-06", "SH-06"], standalone: false
  },

  /* ---------------- GUANGZHOU & SHENZHEN · South China ---------------- */
  {
    id: "GZ-01", name: "Canton Tower & Shamian Island City Tour",
    city: "Guangzhou", region: "Guangzhou & Shenzhen", country: "China", cat: "attraction",
    tags: { stars: 4, age: "all", dur: "Half day", slot: "afternoon" },
    price: { fixed: 300, unit: "per person", range: "¥220–460 / person" },
    desc: "Afternoon city walk through Shamian's colonial riverside streets, then Canton Tower waterfront and skyline viewpoint. Cantonese city-life orientation included.",
    included: ["Guide", "Shamian walk", "Tower waterfront stop"],
    excluded: ["Observation deck ticket", "Cable car"],
    note: "Deck ticket can be added as a standalone product.",
    related: ["GZ-02", "SH-01", "SU-02"], standalone: false
  },
  {
    id: "GZ-02", name: "Cantonese Dim Sum Morning Tea Experience",
    city: "Guangzhou", region: "Guangzhou & Shenzhen", country: "China", cat: "other",
    tags: { stars: 5, age: "family", dur: "Morning", slot: "morning" },
    price: { fixed: 260, unit: "per person", range: "¥180–420 / person" },
    desc: "Reserved morning-tea table at a traditional dim sum restaurant; guide explains classic dishes (har gow, siu mai, rice rolls) and tea pairing.",
    included: ["Dim sum set", "Table reservation", "Dish guidance"],
    excluded: ["Drinks", "Service charge"],
    note: "Vegetarian and allergy options available on request.",
    related: ["BJ-04", "CD-03", "GZ-01"], standalone: false
  },
  {
    id: "GZ-03", name: "Guangzhou Baiyun Airport Private Transfer (CAN)",
    city: "Guangzhou", region: "Guangzhou & Shenzhen", country: "China", cat: "transfer",
    tags: { stars: 4, age: "all", dur: "Per transfer", slot: "flexible" },
    price: { fixed: 320, unit: "per car", range: "¥260–450 / car" },
    desc: "Private transfer between Baiyun Airport (CAN) and Guangzhou or Shenzhen hotel, with flight tracking and meet-and-greet.",
    included: ["Meet & greet", "Private vehicle", "Flight delay tracking"],
    excluded: ["Cross-city overnight surcharge", "Tolls"],
    note: "Guangzhou–Shenzhen cross-city quote confirmed separately.",
    related: ["BJ-05", "SH-05", "XA-05"], standalone: false
  },
  {
    id: "SZ-01", name: "Nanshan Innovation Park & Shenzhen Tech Visit",
    city: "Shenzhen", region: "Guangzhou & Shenzhen", country: "China", cat: "corp",
    tags: { stars: 4, age: "business", dur: "Half day", slot: "morning" },
    price: { fixed: 1500, unit: "per group", range: "¥1,200–2,800 / group" },
    desc: "Morning in Shenzhen's Nanshan tech district: innovation park showrooms, hardware supply-chain overview and briefing on Shenzhen's startup and manufacturing ecosystem.",
    included: ["Park itinerary", "Business escort", "Ecosystem briefing"],
    excluded: ["Named factory / company meetings", "Interpreter"],
    note: "Company floor visits require advance approval; arranged case by case.",
    related: ["SH-08", "BJ-08", "SZ-02"], standalone: false
  },
  {
    id: "SZ-02", name: "Modern Shenzhen Skyline & Reform History Tour",
    city: "Shenzhen", region: "Guangzhou & Shenzhen", country: "China", cat: "attraction",
    tags: { stars: 4, age: "business", dur: "Half day", slot: "afternoon" },
    price: { fixed: 300, unit: "per person", range: "¥220–460 / person" },
    desc: "Afternoon overview of Shenzhen's transformation: downtown skyline, Lianhua Park viewpoint, early reform-era streetscapes and modern retail districts.",
    included: ["Guide", "Metro / short transfers", "Viewpoint stops"],
    excluded: ["Tower observation ticket"],
    note: "Can be combined with the Nanshan tech visit on the same day.",
    related: ["SZ-01", "GZ-01", "SH-01"], standalone: false
  },

  /* ---------------- TIBET · LHASA ---------------- */
  {
    id: "LS-01", name: "Potala Palace & Jokhang Temple Guided Tour",
    city: "Lhasa", region: "Tibet · Lhasa", country: "China", cat: "attraction",
    tags: { stars: 5, age: "senior", dur: "Full day", slot: "allday" },
    price: { fixed: 520, unit: "per person", range: "¥380–880 / person" },
    desc: "Guided day in Lhasa: Potala Palace interior route, Jokhang Temple and Barkhor pilgrimage circuit, with altitude-aware pacing and cultural background on Tibetan Buddhism.",
    included: ["Guide", "Palace & temple admissions", "Local transfers"],
    excluded: ["Travel to Lhasa", "Oxygen / altitude supplements"],
    note: "Tibet Travel Permit required; arrange at least 2–3 weeks ahead. Acclimatize on arrival day.",
    related: ["LS-02", "XA-01", "BJ-01"], standalone: false
  },
  {
    id: "LS-02", name: "Namtso Lake Day Excursion",
    city: "Lhasa", region: "Tibet · Lhasa", country: "China", cat: "attraction",
    tags: { stars: 4, age: "young", dur: "Full day", slot: "allday" },
    price: { fixed: 680, unit: "per person", range: "¥520–980 / person" },
    desc: "High-altitude day excursion to Namtso Lake, one of Tibet's great sacred lakes, with mountain views and lakeside stop. Private vehicle and guide for the group.",
    included: ["Private vehicle", "Guide", "Lake area admission"],
    excluded: ["Meals", "Altitude oxygen"],
    note: "Elev. ~4,700 m; only after 1–2 days of Lhasa acclimatization.",
    related: ["LS-01", "ZJJ-01", "GL-01"], standalone: false
  },

  /* ---------------- ZHANGJIAJIE · Central China ---------------- */
  {
    id: "ZJJ-01", name: "Avatar Mountains & Tianmen Mountain — 2-Day Combo",
    city: "Zhangjiajie", region: "Zhangjiajie", country: "China", cat: "attraction",
    tags: { stars: 5, age: "all", dur: "2 days", slot: "allday" },
    price: { fixed: 1280, unit: "per person", range: "¥980–1,880 / person" },
    desc: "Two-day combo of Zhangjiajie National Forest (sandstone pillar peaks made famous by the Avatar scenery) and Tianmen Mountain with glass walkway and cableway. Tickets, routes and two nights' hotel can be bundled.",
    included: ["Guide", "Scenic area tickets", "Two-day transport", "Cableway where listed"],
    excluded: ["Hotel", "Meals", "Glass walkway upgrade"],
    note: "Mountain weather changes fast; rain gear and non-slip shoes recommended.",
    related: ["GL-01", "LS-02", "CD-02"], standalone: false
  },

  /* ---------------- NATIONWIDE ADD-ON SERVICES ---------------- */
  {
    id: "OT-01", name: "English-/Chinese-Speaking Local Guide",
    city: "Nationwide", region: "Nationwide", country: "China", cat: "other",
    tags: { stars: 5, age: "all", dur: "Per day", slot: "flexible" },
    price: { fixed: 600, unit: "per day", range: "¥450–1,000 / day" },
    desc: "Certified local guide at your destination for culture, history and on-the-ground coordination. Guide language and specialty (food, business, family) confirmed on inquiry.",
    included: ["Guide service per day", "Itinerary briefing"],
    excluded: ["Guide's meals & transport allowance"],
    note: "Can be attached to any tour or charter day in your plan.",
    related: ["OT-02", "OT-06", "BJ-01"], standalone: false
  },
  {
    id: "OT-02", name: "Certified Business Interpreter (EN / Chinese)",
    city: "Nationwide", region: "Nationwide", country: "China", cat: "other",
    tags: { stars: 4, age: "business", dur: "Per day", slot: "flexible" },
    price: { fixed: 800, unit: "per day", range: "¥600–1,500 / day" },
    desc: "Business liaison interpreter for factory visits, meetings and negotiations, with industry glossary preparation in advance.",
    included: ["Interpreter per day", "Pre-meeting glossary"],
    excluded: ["Travel & accommodation allowance"],
    note: "Simultaneous interpretation quoted separately for conferences.",
    related: ["OT-01", "SZ-01", "SH-08"], standalone: false
  },
  {
    id: "OT-03", name: "China Visa Application Assistance",
    city: "Nationwide", region: "Nationwide", country: "China", cat: "other",
    tags: { stars: 4, age: "all", dur: "Flexible", slot: "flexible" },
    price: { fixed: 300, unit: "per person", range: "¥200–500 / person" },
    desc: "Document checklist, application guidance and appointment coordination for China tourist / business visas. We advise on materials; embassy decision remains with the consulate.",
    included: ["Document checklist", "Application guidance", "Appointment tips"],
    excluded: ["Visa fee charged by embassy", "Passport processing"],
    note: "Visa rules vary by nationality; share passport country when inquiring.",
    related: ["OT-06", "OT-05"], standalone: false
  },
  {
    id: "OT-04", name: "Airport VIP Lounge Access",
    city: "Nationwide", region: "Nationwide", country: "China", cat: "other",
    tags: { stars: 4, age: "all", dur: "Per visit", slot: "flexible" },
    price: { fixed: 450, unit: "per person", range: "¥350–680 / visit" },
    desc: "Pay-per-use airport lounge access at major Chinese hubs: seating, refreshments, Wi-Fi and boarding assistance. Booked by visit, not tied to a tour day.",
    included: ["Lounge entry (2–3 h)", "Light refreshments"],
    excluded: ["Alcoholic drinks", "Meet & assist service"],
    note: "Availability depends on airport and terminal.",
    related: ["OT-05", "BJ-05", "SH-05"], standalone: true
  },
  {
    id: "OT-05", name: "Flight Seat Advance Selection Assistance",
    city: "Nationwide", region: "Nationwide", country: "China", cat: "other",
    tags: { stars: 3, age: "all", dur: "Flexible", slot: "flexible" },
    price: { fixed: 120, unit: "per person", range: "¥80–200 / person" },
    desc: "Help with advance seat requests (window / aisle / adjacent seats for groups) once your ticket is issued. Tickets themselves are booked separately.",
    included: ["Seat request coordination", "Confirmation follow-up"],
    excluded: ["Flight ticket", "Airline seat fee if charged"],
    note: "Seat assignment remains subject to airline policy.",
    related: ["OT-03", "OT-04"], standalone: true
  },
  {
    id: "OT-06", name: "Tailor-Made Itinerary Planning Service",
    city: "Nationwide", region: "Nationwide", country: "China", cat: "other",
    tags: { stars: 5, age: "all", dur: "Flexible", slot: "flexible" },
    price: { fixed: 0, unit: "complimentary", range: "Planning free; products quoted on request" },
    desc: "Tell us your dates, group, interests and budget — we assemble a day-by-day plan, compare options and explain what is included. Planning itself is complimentary; confirmed products are quoted separately.",
    included: ["Route & day-by-day plan", "Option comparison", "Budget breakdown", "Condition & risk notes"],
    excluded: ["Confirmed bookings and tickets"],
    note: "Build your draft plan in the itinerary planner, then send it to us for a quote.",
    related: ["OT-01", "OT-03"], standalone: false
  }
];
