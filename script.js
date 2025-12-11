function updateProgress() {
  const goalP = Number(document.getElementById("goalP").value);
  const goalC = Number(document.getElementById("goalC").value);
  const goalF = Number(document.getElementById("goalF").value);

  const eatP  = Number(document.getElementById("eatP").value);
  const eatC  = Number(document.getElementById("eatC").value);
  const eatF  = Number(document.getElementById("eatF").value);

  document.getElementById("progP").style.width = Math.min((eatP / goalP) * 100, 100) + "%";
  document.getElementById("progC").style.width = Math.min((eatC / goalC) * 100, 100) + "%";
  document.getElementById("progF").style.width = Math.min((eatF / goalF) * 100, 100) + "%";
}

/* 可折叠训练日卡片 */
function toggleDay(btn) {
  const content = btn.nextElementSibling;
  content.style.display =
    content.style.display === "block" ? "none" : "block";
}
