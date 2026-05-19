const quotes = [
    {
        id: 1,
        category: 'career',
        categoryName: '职场干货',
        text: '职场中，能力是底气，人品是底牌，二者缺一不可。'
    },
    {
        id: 2,
        category: 'career',
        categoryName: '职场干货',
        text: '不要等万事俱备才开始，在行动中完善，在试错中成长。'
    },
    {
        id: 3,
        category: 'career',
        categoryName: '职场干货',
        text: '学会向上管理，不是讨好领导，而是让他知道你的价值和需求。'
    },
    {
        id: 4,
        category: 'career',
        categoryName: '职场干货',
        text: '职场最大的护城河，是你不可替代的专业能力。'
    },
    {
        id: 5,
        category: 'career',
        categoryName: '职场干货',
        text: '结果思维比苦劳更重要，用成果说话，用数据证明。'
    },
    {
        id: 6,
        category: 'career',
        categoryName: '职场干货',
        text: '主动承担责任，机会往往藏在麻烦背后。'
    },
    {
        id: 7,
        category: 'career',
        categoryName: '职场干货',
        text: '持续学习是职场的终身课题，停止成长就是退步的开始。'
    },
    {
        id: 8,
        category: 'career',
        categoryName: '职场干货',
        text: '建立个人品牌，让你的名字成为品质的代名词。'
    },
    {
        id: 9,
        category: 'life',
        categoryName: '人生感悟',
        text: '人生没有白走的路，每一步都算数。'
    },
    {
        id: 10,
        category: 'life',
        categoryName: '人生感悟',
        text: '接受无常，学会放下，内心才能真正强大。'
    },
    {
        id: 11,
        category: 'life',
        categoryName: '人生感悟',
        text: '真正的成熟，是接纳自己的不完美。'
    },
    {
        id: 12,
        category: 'life',
        categoryName: '人生感悟',
        text: '别让昨天的遗憾，消耗今天的时光。'
    },
    {
        id: 13,
        category: 'life',
        categoryName: '人生感悟',
        text: '幸福不是拥有更多，而是懂得感恩已有。'
    },
    {
        id: 14,
        category: 'life',
        categoryName: '人生感悟',
        text: '人生是场马拉松，比的不是速度，而是耐力。'
    },
    {
        id: 15,
        category: 'struggle',
        categoryName: '奋斗励志',
        text: '那些打不倒你的，终将使你更强大。'
    },
    {
        id: 16,
        category: 'struggle',
        categoryName: '奋斗励志',
        text: '努力到无能为力，拼搏到感动自己。'
    },
    {
        id: 17,
        category: 'struggle',
        categoryName: '奋斗励志',
        text: '梦想不会逃跑，逃跑的永远是自己。'
    },
    {
        id: 18,
        category: 'struggle',
        categoryName: '奋斗励志',
        text: '现在的每一份努力，都是未来的铺垫。'
    },
    {
        id: 19,
        category: 'struggle',
        categoryName: '奋斗励志',
        text: '你若盛开，蝴蝶自来；你若精彩，天自安排。'
    },
    {
        id: 20,
        category: 'struggle',
        categoryName: '奋斗励志',
        text: '在最黑暗的时候，坚持住，黎明就在前方。'
    },
    {
        id: 21,
        category: 'vision',
        categoryName: '格局眼界',
        text: '眼界决定境界，格局决定结局。'
    },
    {
        id: 22,
        category: 'vision',
        categoryName: '格局眼界',
        text: '站在更高处看问题，用更长远的眼光做决策。'
    },
    {
        id: 23,
        category: 'vision',
        categoryName: '格局眼界',
        text: '大格局不是天生的，是被委屈和经历撑大的。'
    },
    {
        id: 24,
        category: 'vision',
        categoryName: '格局眼界',
        text: '不与小人争长短，不与愚人论是非。'
    },
    {
        id: 25,
        category: 'vision',
        categoryName: '格局眼界',
        text: '把眼光放远，把心胸放宽，人生之路才会越走越宽。'
    },
    {
        id: 26,
        category: 'eloquence',
        categoryName: '口才情商',
        text: '会说话是优势，会倾听是修养。'
    },
    {
        id: 27,
        category: 'eloquence',
        categoryName: '口才情商',
        text: '高情商不是八面玲珑，而是让人舒服，自己也不委屈。'
    },
    {
        id: 28,
        category: 'eloquence',
        categoryName: '口才情商',
        text: '懂得换位思考，是最高级的情商。'
    },
    {
        id: 29,
        category: 'eloquence',
        categoryName: '口才情商',
        text: '说话让人舒服，做事让人放心，做人让人想念。'
    },
    {
        id: 30,
        category: 'greeting',
        categoryName: '早安晚安',
        text: '早安！新的一天，愿你眼里有光，心中有爱，脚下有力。'
    },
    {
        id: 31,
        category: 'greeting',
        categoryName: '早安晚安',
        text: '早安！把每一个清晨当作新的开始，全力以赴。'
    },
    {
        id: 32,
        category: 'greeting',
        categoryName: '早安晚安',
        text: '晚安！放下一天的疲惫，好好休息，明天会更好。'
    },
    {
        id: 33,
        category: 'greeting',
        categoryName: '早安晚安',
        text: '晚安！愿你今夜好梦，明日醒来，活力满满。'
    },
    {
        id: 34,
        category: 'career',
        categoryName: '职场干货',
        text: '沟通的本质不是说服别人，而是理解彼此。'
    },
    {
        id: 35,
        category: 'career',
        categoryName: '职场干货',
        text: '时间管理不是要做更多事，而是做对的事。'
    },
    {
        id: 36,
        category: 'life',
        categoryName: '人生感悟',
        text: '活在当下，过去不念，未来不忧。'
    },
    {
        id: 37,
        category: 'life',
        categoryName: '人生感悟',
        text: '简单生活，才能快乐生活。'
    },
    {
        id: 38,
        category: 'struggle',
        categoryName: '奋斗励志',
        text: '成功的路上并不拥挤，因为坚持的人不多。'
    },
    {
        id: 39,
        category: 'struggle',
        categoryName: '奋斗励志',
        text: '比你优秀的人比你还努力，你有什么理由不奋斗。'
    },
    {
        id: 40,
        category: 'vision',
        categoryName: '格局眼界',
        text: '将军赶路，不追小兔。'
    },
    {
        id: 41,
        category: 'vision',
        categoryName: '格局眼界',
        text: '心有多大，舞台就有多大。'
    },
    {
        id: 42,
        category: 'eloquence',
        categoryName: '口才情商',
        text: '适时沉默，是一种智慧。'
    },
    {
        id: 43,
        category: 'eloquence',
        categoryName: '口才情商',
        text: '赞美要真诚，批评要委婉。'
    },
    {
        id: 44,
        category: 'greeting',
        categoryName: '早安晚安',
        text: '早安！阳光正好，微风不燥，未来可期。'
    },
    {
        id: 45,
        category: 'greeting',
        categoryName: '早安晚安',
        text: '晚安！今天辛苦了，好好爱自己。'
    }
];

let currentCategory = 'all';
let displayedQuotes = [...quotes];

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderQuotes(displayedQuotes);
    initEventListeners();
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function initEventListeners() {
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('randomBtn').addEventListener('click', showRandomQuotes);
    document.getElementById('searchBtn').addEventListener('click', searchQuotes);
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchQuotes();
    });

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => filterByCategory(btn.dataset.category));
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function filterByCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    if (category === 'all') {
        displayedQuotes = [...quotes];
    } else {
        displayedQuotes = quotes.filter(q => q.category === category);
    }
    renderQuotes(displayedQuotes);
}

function showRandomQuotes() {
    const shuffled = [...quotes].sort(() => Math.random() - 0.5);
    const count = Math.min(6, shuffled.length);
    displayedQuotes = shuffled.slice(0, count);
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
    });
    currentCategory = 'all';
    renderQuotes(displayedQuotes);
}

function searchQuotes() {
    const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!keyword) {
        if (currentCategory === 'all') {
            displayedQuotes = [...quotes];
        } else {
            displayedQuotes = quotes.filter(q => q.category === currentCategory);
        }
    } else {
        const searchIn = currentCategory === 'all' ? quotes : quotes.filter(q => q.category === currentCategory);
        displayedQuotes = searchIn.filter(q => 
            q.text.toLowerCase().includes(keyword) || 
            q.categoryName.toLowerCase().includes(keyword)
        );
    }
    renderQuotes(displayedQuotes);
}

function renderQuotes(quotesToRender) {
    const container = document.getElementById('quoteContainer');
    if (quotesToRender.length === 0) {
        container.innerHTML = `
            <div class="quote-card" style="text-align: center;">
                <p style="color: var(--text-light); font-size: 1.1rem;">未找到相关语录</p>
            </div>
        `;
        return;
    }
    container.innerHTML = quotesToRender.map(quote => `
        <div class="quote-card" data-id="${quote.id}">
            <span class="quote-category">${quote.categoryName}</span>
            <p class="quote-text">${quote.text}</p>
            <div class="quote-actions">
                <button class="copy-btn" onclick="copyQuote(${quote.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    复制
                </button>
            </div>
        </div>
    `).join('');
}

function copyQuote(id) {
    const quote = quotes.find(q => q.id === id);
    if (!quote) return;
    navigator.clipboard.writeText(quote.text).then(() => {
        showToast('已复制到剪贴板');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = quote.text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('已复制到剪贴板');
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}
