document.addEventListener("DOMContentLoaded", () => {
  // --- 自動縮放 Screen 1 & Screen 2 的邏輯 ---
  const updateScale = () => {
    const screen1 = document.querySelector(".screen-1");
    if (screen1) {
      const width = window.innerWidth;
      // 計算比例：當前視窗寬度 / 設計稿寬度 (1920)
      const scale = width / 1920;
      
      // 1. 無上限縮放（用於 Screen 1，確保滿版）
      document.documentElement.style.setProperty("--screen-scale", scale);

      // 2. 有上限縮放（最高只到 1，用於其他區域，確保大螢幕不變形）
      const cappedScale = Math.min(1, scale);
      document.documentElement.style.setProperty("--content-scale", cappedScale);

      // 當視窗寬度 >= 1920px 時，視為「大畫面/最大化」，加上特定標籤
      if (width >= 1920) {
        document.body.classList.add("is-large-screen");
      } else {
        document.body.classList.remove("is-large-screen");
      }
    }
  };

  window.addEventListener("resize", updateScale);
  updateScale(); // 初始執行一次

  // --- 原有的捲動邏輯 ---
  const navProjects = document.getElementById("nav-projects");
  const navGoal = document.getElementById("nav-goal");
  const navBio = document.getElementById("nav-bio");

  const scrollToSection = (id, block = "start") => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: block, // 允許自定義捲動對齊位置
      });
    }
  };

  if (navProjects) navProjects.addEventListener("click", () => scrollToSection("projects", "center"));
  if (navGoal) navGoal.addEventListener("click", () => scrollToSection("goal"));
  if (navBio) navBio.addEventListener("click", () => scrollToSection("bio"));
});
