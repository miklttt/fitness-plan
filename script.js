// ==========================
// 卡片折叠/展开逻辑
// ==========================
function toggleDay(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("i");
  if (content.style.display === "block") {
    content.style.display = "none";
    icon.classList.replace("fa-angles-up", "fa-angles-down");
  } else {
    content.style.display = "block";
    icon.classList.replace("fa-angles-down", "fa-angles-up");
  }
}

// ==========================
// 三大营养素动态进度条
// ==========================
function updateProgress() {
  const goalP = parseFloat(document.getElementById("goalP").value) || 1;
  const goalC = parseFloat(document.getElementById("goalC").value) || 1;
  const goalF = parseFloat(document.getElementById("goalF").value) || 1;
  const eatP = parseFloat(document.getElementById("eatP").value) || 0;
  const eatC = parseFloat(document.getElementById("eatC").value) || 0;
  const eatF = parseFloat(document.getElementById("eatF").value) || 0;

  // 计算百分比，限制 0–100%
  const percentP = Math.min((eatP / goalP) * 100, 100);
  const percentC = Math.min((eatC / goalC) * 100, 100);
  const percentF = Math.min((eatF / goalF) * 100, 100);

  document.getElementById("progP").style.width = percentP + "%";
  document.getElementById("progC").style.width = percentC + "%";
  document.getElementById("progF").style.width = percentF + "%";
}
