const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyStyles:document.body.style};let e=null;t.stopBtn.setAttribute("disabled",!0),t.startBtn.addEventListener("click",(()=>{e=setInterval((()=>{t.bodyStyles.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled")})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.5b2db90b.js.map
