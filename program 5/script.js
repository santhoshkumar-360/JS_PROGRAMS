
document.getElementById("mainText").addEventListener("input", function () { const text = this.value;
document.getElementById("mainCharCount").innerText = text.length;
const trimmed = text.trim(); const wordCount = trimmed === "" ? 0 : trimmed.split(/\s+/).length; document.getElementById("mainWordCount").innerText = wordCount;
});
