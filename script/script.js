const content = "꾸준함과 성실함을 가치로 두고 무한히 성장하는New Frontend Developer 안일혁입니다.";
const text = document.querySelector(".text");
text.textContent = "";
let txtIdx = 0;
function typing(){
      let txt = content[txtIdx++];
      if (txt == undefined) return;
      text.innerHTML += txt === "\n" ? "<br/>": txt;
      if (txtIdx > content.length) {
          txtIdx = 0;
      }else{
        setTimeout(typing, 100)
      }
}
typing();
