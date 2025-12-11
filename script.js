// ==========================
// 折叠/展开训练日卡片逻辑
// ==========================
function toggleDay(button) {
  const dayContent = button.nextElementSibling;
  if (dayContent.style.display === "block") {
    dayContent.style.display = "none";
    button.querySelector("i").classList.replace("fa-angles-up", "fa-angles-down");
  } else {
    dayContent.style.display = "block";
    button.querySelector("i").classList.replace("fa-angles-down", "fa-angles-up");
  }
}

// ==========================
// 营养进度条逻辑
// ==========================
function updateProgress() {
  const goalP = parseFloat(document.getElementById("goalP").value) || 0;
  const goalC = parseFloat(document.getElementById("goalC").value) || 0;
  const goalF = parseFloat(document.getElementById("goalF").value) || 0;
  const eatP  = parseFloat(document.getElementById("eatP").value) || 0;
  const eatC  = parseFloat(document.getElementById("eatC").value) || 0;
  const eatF  = parseFloat(document.getElementById("eatF").value) || 0;

  // Safely calculate percentages
  const pPercent = goalP > 0 ? Math.min((eatP / goalP) * 100, 100) : 0;
  const cPercent = goalC > 0 ? Math.min((eatC / goalC) * 100, 100) : 0;
  const fPercent = goalF > 0 ? Math.min((eatF / goalF) * 100, 100) : 0;

  // Assign progress width
  document.getElementById("progP").style.width = pPercent + "%";
  document.getElementById("progC").style.width = cPercent + "%";
  document.getElementById("progF").style.width = fPercent + "%";
}
