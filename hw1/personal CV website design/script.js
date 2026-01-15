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
        // 先顯示 Modal 確保 iframe 是可見的
        modal.style.display = "block";
        
        const targetUrl = `${pdfPath}#page=${page}`;
        
        // 嘗試使用 location.replace 來觸發內部跳轉而不重新載入 viewer
        try {
          if (iframe.contentWindow) {
            iframe.contentWindow.location.replace(targetUrl);
          } else {
            iframe.src = targetUrl;
          }
        } catch (err) {
          iframe.src = targetUrl;
        }
      }
    });
  });

  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.style.display = "none";
      // 保持 src，實現「只載入一次」
    };
  }

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
