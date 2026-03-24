import React, { useState } from 'react'
import { Sparkles, Clock, TrendingUp, Bot, Image, Video, Code, Book, Search, Moon, Sun, Menu, X } from 'lucide-react'

const newsData = {
  categories: [
    { id: 'all', label: '全部', icon: Sparkles },
    { id: 'llm', label: '大模型', icon: Bot },
    { id: 'image', label: '图像生成', icon: Image },
    { id: 'video', label: '视频生成', icon: Video },
    { id: 'code', label: '编程工具', icon: Code },
    { id: 'news', label: '行业资讯', icon: Book },
  ],
  tools: [
    { name: 'ChatGPT', category: 'llm', desc: 'OpenAI 对话模型，推理能力强', hot: true, url: 'https://chat.openai.com' },
    { name: 'DeepSeek', category: 'llm', desc: '国产开源大模型，性能对标GPT-4', hot: true, url: 'https://deepseek.com' },
    { name: 'Claude', category: 'llm', desc: 'Anthropic AI，专注专业写作', hot: true, url: 'https://claude.ai' },
    { name: '豆包', category: 'llm', desc: '字节AI，中文理解强', hot: false, url: 'https://doubao.com' },
    { name: 'Midjourney', category: 'image', desc: '专业级AI绘图，审美出众', hot: true, url: 'https://midjourney.com' },
    { name: '即梦', category: 'image', desc: '中文文字直出，电商神器', hot: true, url: 'https://jimeng.jianying.com' },
    { name: '可灵', category: 'video', desc: '快手AI视频生成，电影级效果', hot: true, url: 'https://klingai.com' },
    { name: 'Runway', category: 'video', desc: '专业视频生成，影视级', hot: false, url: 'https://runwayml.com' },
    { name: 'Cursor', category: 'code', desc: 'AI代码编辑器，智能补全', hot: true, url: 'https://cursor.sh' },
    { name: 'Trae', category: 'code', desc: '字节AI编程，全中文界面', hot: true, url: 'https://trae.ai' },
    { name: '秘塔AI搜索', category: 'llm', desc: 'AI搜索引擎，支持知识库', hot: false, url: 'https://metaso.cn' },
    { name: 'Kimi', category: 'llm', desc: '长文本处理，支持文件分析', hot: true, url: 'https://kimi.moonshot.cn' },
  ],
  news: [
    { title: 'OpenAI 发布 GPT-5，性能提升 300%', source: '机器之心', time: '2小时前', category: 'llm' },
    { title: '国产AI模型DeepSeek登顶全球榜首', source: '36氪', time: '4小时前', category: 'llm' },
    { title: 'AI视频生成进入实时时代，1秒生成4K视频', source: '量子位', time: '6小时前', category: 'video' },
    { title: 'AI编程助手用户突破1亿，Copilot份额领先', source: '极客公园', time: '8小时前', category: 'code' },
    { title: 'AI绘图工具 Midjourney V7 发布，细节再升级', source: '爱范儿', time: '10小时前', category: 'image' },
    { title: '国家出台AI生成内容标识管理办法', source: '新华网', time: '12小时前', category: 'news' },
  ]
}

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [darkMode, setDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredTools = activeCategory === 'all' 
    ? newsData.tools 
    : newsData.tools.filter(t => t.category === activeCategory)

  const filteredNews = newsData.news.filter(n => 
    activeCategory === 'all' || n.category === activeCategory
  )

  const searchedTools = searchQuery 
    ? newsData.tools.filter(t => 
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredTools

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900 dark:text-white">AI News Hub</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">人工智能资讯聚合</p>
                </div>
              </div>
              
              <div className="hidden md:flex flex-1 max-w-md mx-8">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="搜索AI工具..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-500" />}
                </button>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Category Nav */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {newsData.categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Results or Tools */}
          {searchQuery ? (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                搜索 "{searchQuery}" 的结果 ({searchedTools.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {searchedTools.map((tool, i) => (
                  <a key={i} href={tool.url} target="_blank" rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{tool.category === 'llm' ? '🤖' : tool.category === 'image' ? '🎨' : tool.category === 'video' ? '🎬' : '💻'}</span>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
                      {tool.hot && <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 text-xs rounded-full">热门</span>}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{tool.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Hot Tools */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  热门AI工具
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredTools.map((tool, i) => (
                    <a key={i} href={tool.url} target="_blank" rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{tool.category === 'llm' ? '🤖' : tool.category === 'image' ? '🎨' : tool.category === 'video' ? '🎬' : '💻'}</span>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
                        {tool.hot && <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full">🔥</span>}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{tool.desc}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Latest News */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  最新资讯
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm divide-y divide-gray-100 dark:divide-gray-700">
                  {filteredNews.map((item, i) => (
                    <div key={i} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{item.source}</span>
                        <span>•</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-6 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
            AI News Hub © 2024 | 聚合全球AI资讯与工具
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
