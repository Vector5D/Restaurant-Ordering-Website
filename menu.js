const menuData = {
  1401: "辛味チキン",
  1202: "小エビのサラダ",
  2303: "ペペロンチーノ",
  2402: "若鶏のディアボラ風",
  5101: "セットドリンクバー"
};

const inputBox = document.getElementById("inputBox");
const dishDisplay = document.getElementById("dishDisplay");
const delBtn = document.getElementById("delBtn");
const nextBtn = document.getElementById("nextBtn");

// 初始化为空字符串，避免“全角空格”
inputBox.textContent = "";
dishDisplay.textContent = "";

document.querySelectorAll(".num").forEach(button => {
  button.addEventListener("click", () => {
    const num = button.textContent.trim();

    // 限制最多 4 位
    if (inputBox.textContent.length >= 4) return;

    inputBox.textContent += num;
    updateDishDisplay();
  });
});

delBtn.addEventListener("click", () => {
  if (inputBox.textContent.length === 0) return;
  inputBox.textContent = inputBox.textContent.slice(0, -1);
  updateDishDisplay();
});

function updateDishDisplay() {
  const code = inputBox.textContent.trim();
  dishDisplay.textContent = menuData[code] || "";
}

nextBtn.addEventListener("click", () => {
  const code = inputBox.textContent.trim();
  if (menuData[code]) {
    alert(`「${menuData[code]}」の数量選択画面へ（未実装）`);
  } else {
    alert("有効なメニュー番号を入力してください。");
  }
});