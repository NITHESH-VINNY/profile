/* Inject JS files dynamically */
const grid=document.querySelector(".assignments-grid");
jsFiles.forEach(f=>{
  grid.insertAdjacentHTML("afterbegin",`
  <div class="assignment-card" data-category="javascript">
    <div class="assignment-header">
      <h3>${f}</h3>
      <span class="badge">JavaScript</span>
    </div>
    <p>Practice and concept implementation file.</p>
    <a class="btn-view" href="assignment/${f}" target="_blank">View File</a>
  </div>`);
});

/* FILTER */
const btns=document.querySelectorAll(".filter-btn");
const cards=document.querySelectorAll(".assignment-card");
btns.forEach(b=>{
b.onclick=()=>{
btns.forEach(x=>x.classList.remove("active"));
b.classList.add("active");
cards.forEach(c=>{
c.style.display=b.dataset.filter==="all"||c.dataset.category===b.dataset.filter?"flex":"none";
});
};
});

/* SCROLL PROGRESS */
const bar=document.createElement("div");
bar.className="scroll-progress";
document.body.appendChild(bar);
window.addEventListener("scroll",()=>{
const h=document.documentElement.scrollHeight-window.innerHeight;
bar.style.width=(scrollY/h)*100+"%";
});