export const DESK_CONFIGS = {
    "world politics and governance": {
        title: "World Politics & Governance Terminal",
        engineTitle: "Policy Analysis Engine",
        terminalTitle: "Diplomatic Feed Stream",
        keywordLabel: "Policy Parameters / Keywords",
        placeholder: "e.g., bilateral treaties, election metrics...",
        defaultKeywords: "global governance policy",
        dynamicLabel: "Geopolitical Focus Region",
        dynamicRender: () => `
            <select id="daySpan" class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-sky-500">
                <option value="Global">Global Operations</option>
                <option value="AU">African Union (AU)</option>
                <option value="EU">European Union (EU)</option>
            </select>`,
        sources: [
            { value: "all", text: "Consolidated Geopolitical News" },
            { value: "reuters_politics", text: "Reuters Intelligence Wire" }
        ],
        bgHeader: "bg-indigo-600",
        glowColor: 0x6366f1
    },
    "sports & analytics": {
        title: "Sports Analytics Terminal",
        engineTitle: "Statistical Extraction Engine",
        terminalTitle: "Live Soccer Analytics Matrix",
        keywordLabel: "Target Team / Player / Metric",
        placeholder: "e.g., Manchester United transfers...",
        defaultKeywords: "Manchester United transfer news",
        dynamicLabel: "Target League Matrix",
        dynamicRender: () => `
            <select id="daySpan" class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-sky-500">
                <option value="Premier League">English Premier League</option>
                <option value="La Liga">Spanish La Liga</option>
            </select>`,
        sources: [
            { value: "all", text: "Consolidated Live Stream" },
            { value: "sky_sports", text: "Sky Sports Live Wire" }
        ],
        bgHeader: "bg-emerald-600",
        glowColor: 0x10b981
    },
    "business and finance": {
        title: "Business & Finance Matrix",
        engineTitle: "Financial Analytics Engine",
        terminalTitle: "Asset & Index Ticker Terminal",
        keywordLabel: "Market Sector / Instrument",
        placeholder: "e.g., Forex trends...",
        defaultKeywords: "Exness asset performance metrics",
        dynamicLabel: "Asset Class / Indicator",
        dynamicRender: () => `
            <select id="daySpan" class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-sky-500">
                <option value="Forex">Foreign Exchange (Forex)</option>
                <option value="Equities">Tech Equities Market</option>
            </select>`,
        sources: [
            { value: "all", text: "Consolidated Financial Pipelines" }
        ],
        bgHeader: "bg-amber-600",
        glowColor: 0xf59e0b
    },
    "general hot news": {
        title: "General Hot News Pulse",
        engineTitle: "Global Alert Scrapers",
        terminalTitle: "Breaking News Output Feed",
        keywordLabel: "Alert Keywords",
        placeholder: "e.g., Regional alerts...",
        defaultKeywords: "breaking international news",
        dynamicLabel: "Priority Severity Level",
        dynamicRender: () => `
            <select id="daySpan" class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-sky-500">
                <option value="1">Level 1: Critical Breaking Wire</option>
                <option value="2">Level 2: High Trending Vectors</option>
            </select>`,
        sources: [
            { value: "all", text: "Universal Live Feeds" }
        ],
        bgHeader: "bg-purple-600",
        glowColor: 0xa855f7
    },
    "default": {
        title: "Automation Control Hub",
        engineTitle: "Engine Variables",
        terminalTitle: "Live Matrix Terminal",
        keywordLabel: "Search Keywords",
        placeholder: "Enter search parameters...",
        defaultKeywords: "",
        dynamicLabel: "Day History Span",
        dynamicRender: () => `<input type="number" id="daySpan" value="1" class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-sky-500">`,
        sources: [{ value: "all", text: "Consolidated Live Stream" }],
        bgHeader: "bg-sky-600",
        glowColor: 0x38bdf8
    }
};
