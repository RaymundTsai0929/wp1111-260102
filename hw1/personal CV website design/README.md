# Raymund Tsai 的個人響應式 CV 網頁 (Personal CV Website)

這是學習 Web Programming 的第一個實踐作品，透過 HTML5、CSS3 與 JavaScript 打造出具備「高精度響應式縮放」功能的四屏個人履歷網頁。

## 🚀 Live Demo
[點此查看網頁成品](https://raymundtsai0929.github.io/wp1111-260102/hw1/personal%20CV%20website%20design/)

---

## 🧠 核心技術概念 (Core Web Concepts)
*   **網頁架構**：一頁到底式的網頁設計，由三個主要的主題，Projects/Goal/Bio構成。
*   **檔案路徑管理**：全面採用**相對路徑 (Relative Path)** 管理圖片 (`img/`) 與樣式表，確保專案從本機開發環境遷移至 GitHub 伺服器時，資源引用依然精確無誤。
*   **網頁語意化與結構**：利用 HTML5 標籤將網頁劃分為四個主要區塊（Home, Projects, Goal, Bio），並結合 `id` 錨點達成清晰的資訊階層。

## 🛠 技術棧 (Tech Stack)
*   **HTML**：運用 HTML5 結構標籤、外部資源連結 (`link`, `script`)、多媒體圖片嵌入 (`img`)，並透過縮放層 (`content-scaler`) 實作複雜排版容器。
*   **CSS**：
    *   **盒子模型 (Box Model)** 應用於精確的元件定位。
    *   **CSS 變數 (Variables)**：定義 `--screen-scale` 與 `--content-scale` 達成不同畫面的縮放邏輯。
    *   **進階佈局**：使用 **Flexbox** 進行多欄位排列、**Linear Gradients** 製作精緻的背景漸層。
    *   **動態效果**：實作 **Hover 互動**與 **Transitions** 平滑轉場。
*   **JavaScript**：
    *   實作 **Smooth Scrolling (平滑捲動)** 導覽功能。
    *   **動態縮放演算法**：透過 `resize` 監聽器即時計算視窗比例，解決高解析度營幕 (如 2560px) 與標準設計稿 (1920px) 的適配問題。
*   **編輯工具**：使用 **Cursor** 編輯器，實踐 **Vibe Coding** 流程，透過 AI 協作快速將 Figma 設計稿轉化為高品質代碼。

## ✨ 亮點功能與學習心得 (Key Features & Insights)
*   **功能亮點 A：高精度響應式縮放 (Pixel-Perfect Scaling)**
    *   不同於傳統響應式排版會導致元件位置跑版，本專案開發了一套等比縮放邏輯，確保在任何視窗尺寸下，設計稿的視覺比例都能完美維持。
*   **功能亮點 B：互動式 PDF 專案展示 (PDF Modal Viewer)**
    *   整合彈出視窗（Modal）與 PDF 導航技術，點擊不同作品縮圖可直接開啟 `projects.pdf` 並自動跳轉至對應頁面，提供流暢的數位作品集閱讀體驗。
*   **功能亮點 C：智慧導覽系統**
    *   整合 JavaScript `scrollIntoView` API，並針對不同區塊需求設定「對齊頂部」或「置中呈現」，提供極佳的使用者體驗。
*   **學習體會**：
    *   透過 W3Schools 的系統化學習，理解了 HTML 的文字呈現邏輯
    *   最深刻的體悟是「AI 協作開發」：理解基礎的前端邏輯（如 CSS 變數與 JS 事件監聽）是與 AI 工具溝通的核心語言，這讓我能更精確地描述需求，提升開發效率。
    *   為了提升精準度，利用figma插件，將layout內容及時轉乘code(javascript、CSS)，測試轉進Cursor的效果，個人認為精準度極高。 但由有額度限制問題，screen4改以圖片兼敘述製作，而同時為了提升精準度，文字與內容都以px來敘述其位置與大小，後續的產出個人認為精準度也高，缺點是沒有插件精準，且敘述較複雜


