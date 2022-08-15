document.getElementById("yes").addEventListener("click", function () {
  document.getElementById("msg").innerText = "I LOVE YOU 💘 ";
  commnFun2("msg");
});
// 
function loveLetter() {
  commnFun2("msg");
    document.getElementById("msg").innerText = "I LOVE YOU JOHON💝 ";
}

function commnFun2(id) {
  document.getElementById(id).innerText = "I LOVE YOU JOHON💘 ";
}
