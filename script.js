const params = new URLSearchParams(window.location.search);
const text = params.get("text") || "";

const displayText = document.getElementById("displayText");
const copyBtn = document.getElementById("copyBtn");
const statusMsg = document.getElementById("statusMsg");

displayText.textContent = text || "ไม่พบข้อมูล";

copyBtn.addEventListener("click", async () => {
  if (!text) {
    statusMsg.textContent = "ไม่พบข้อความสำหรับคัดลอก";
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    statusMsg.textContent = "คัดลอกเรียบร้อยแล้ว";
  } catch (err) {
    statusMsg.textContent = "คัดลอกไม่สำเร็จ กรุณาคัดลอกด้วยตนเอง";
  }
});