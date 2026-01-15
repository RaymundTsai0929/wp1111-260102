document.addEventListener("DOMContentLoaded", () => {
  // --- 自動縮放邏輯 ---
  const updateScale = () => {
    const screen1 = document.querySelector(".screen-1");
    if (screen1) {
      const width = window.innerWidth;
      const scale = width / 1920;
      
      // 1. 無上限縮放 (用於 Screen 1)
      document.documentElement.style.setProperty("--screen-scale", scale);

      // 2. 有上限縮放 (用於 Screen 2, 3, 4)
      const cappedScale = Math.min(1, scale);
      document.documentElement.style.setProperty("--content-scale", cappedScale);

      if (width >= 1920) {
        document.body.classList.add("is-large-screen");
      } else {
        document.body.classList.remove("is-large-screen");
      }
    }
  };

  window.addEventListener("resize", updateScale);
  updateScale();

  // --- 捲動導覽邏輯 ---
  const scrollToSection = (id, block = "start") => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: block,
      });
    }
  };

  const navProjects = document.getElementById("nav-projects");
  const navGoal = document.getElementById("nav-goal");
  const navBio = document.getElementById("nav-bio");

  if (navProjects) navProjects.addEventListener("click", () => scrollToSection("projects", "center"));
  if (navGoal) navGoal.addEventListener("click", () => scrollToSection("goal"));
  if (navBio) navBio.addEventListener("click", () => scrollToSection("bio"));

  // --- PDF Modal 邏輯 ---
  const modal = document.getElementById("pdf-modal");
  const iframe = document.getElementById("pdf-viewer");
  const closeBtn = document.querySelector(".close-btn");
  const pdfPath = "projects.pdf";

  // 抓取所有具備 project-target 類別的圖片和文字
  const projectTargets = document.querySelectorAll(".project-target");

  projectTargets.forEach(target => {
    target.addEventListener("click", (e) => {
      e.stopPropagation();
      const page = target.getAttribute("data-page");
      if (page) {
        modal.style.display = "block";
        
        // 判斷是否已經有載入過 PDF
        const isPdfLoaded = iframe.src && iframe.src.includes(pdfPath);
        
        if (!isPdfLoaded) {
          // 第一次載入：設定完整網址
          iframe.src = `${pdfPath}#page=${page}`;
        } else {
          // 已經載入過：只修改 hash 觸發「內部翻頁」，不重新載入 PDF 閱讀器
          try {
            // 強制讓 iframe 內的 location.hash 變更
            iframe.contentWindow.location.hash = `page=${page}`;
          } catch (err) {
            // 如果因為跨網域限制（雖然機率低）無法改 hash，則使用 src 切換
            iframe.src = `${pdfPath}#page=${page}`;
          }
        }
      }
    });
  });

  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.style.display = "none";
      // 保持 src，不重置，實現只載入一次
    };
  }

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
