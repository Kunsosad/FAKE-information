const profile={
  personal:[["Họ tên","PHAN CÔNG HUY"],["Ngày sinh","04/08/2006"],["Nơi sinh","Đà Nẵng"],["Giới tính","Nam"],["Dân tộc","Kinh"],["Quốc tịch","Việt Nam"],["Số CCCD","049206000454"],["Ngày cấp CCCD","13/04/2021"],["Nơi sinh cũ","Tỉnh Quảng Nam"],["Tôn giáo","Không"],["Tài khoản cá nhân",""],["Tại ngân hàng",""]],
  academic:[["Ngành","Công nghệ chế tạo máy"],["Lớp","24C1B"],["Chương trình đào tạo","Công nghệ chế tạo máy K2024_ Kỹ sư"],["Chương trình 2",""],["Tài khoản Office365","101240071@sv1.dut.udn.vn"],["Email cá nhân","phanconghuytienganh@gmail.com"],["Mật khẩu Office365","••••••••••••"],["Facebook","Phan Công Huy"],["Điện thoại","0987520146"],["Điện thoại gia đình","0399396045"],["Địa chỉ cư trú","Xã Đại Hiệp huyện Đại Lộc tỉnh Quảng Nam"],["Tỉnh/ Thành phố","TP Đà Nẵng"]],
  family:[["Mẹ","Nguyễn Thị Cẩm Vân"],["Ngày sinh mẹ","26/03/1983"],["Cha","Phan Công Hào"],["Ngày sinh cha","16/08/1978"]],
  home:[["Số nhà, đường","DT609"],["Tỉnh/ Thành phố","TP Đà Nẵng"],["Xã/ Phường","Xã Đại Lộc"]],
  emergency:[["Họ tên/ Quan hệ","Nguyễn Thị Cẩm Vân"],["Số điện thoại","0399396045"],["Địa chỉ","DT609"]]
};

const courses=[
  {n:1,sem:"1/2024-2025",code:"2090150.2410.24.02",name:"Triết học Mác - Lênin",cr:3,formula:"[GK]*0.30+[BT]*0.20+<br>[CK]*0.50",bt:9,ck:5.5,gk:9,final:6.9,survey:1},
  {n:2,sem:"1/2024-2025",code:"1012130.2410.24.02",name:"Nhập môn ngành (CTM)",cr:2,formula:"[GK]*0.30+[BT]*0.20+<br>[CK]*0.50",bt:8,ck:8,gk:9,final:8.3,survey:1},
  {n:3,sem:"1/2024-2025",code:"1073431.2410.24.02",name:"Hóa đại cương",cr:2,formula:"[GK]*0.30+[BT]*0.20+<br>[CK]*0.50",bt:7.5,ck:2.8,gk:8,final:5.3,survey:1},
  {n:4,sem:"1/2024-2025",code:"0130011.2410.24.02",name:"Giáo dục thể chất 1",cr:0,formula:"[GK]*0.30+[CK]*0.70"},
  {n:5,sem:"1/2024-2025",code:"3190111.2410.24.02",name:"Giải tích 1",cr:4,formula:"[GK]*0.20+[BT]*0.30+<br>[CK]*0.50",bt:9,ck:2.5,gk:7.5,final:5.5,survey:1},
  {n:6,sem:"1/2024-2025",code:"1032750.2410.24.02",name:"Đồ họa kỹ thuật",cr:3,formula:"[GK]*0.20+[BT]*0.30+<br>[CK]*0.50",bt:5,ck:3.8,gk:8,final:5},
  {n:7,sem:"1/2024-2025",code:"4130311.2410.24.02",name:"Anh văn A2.2",cr:4,formula:"[GK]*0.30+[BT]*0.20+<br>[CK]*0.50",bt:9.5,ck:6.8,gk:7.3,final:7.5},
  {n:8,sem:"2/2024-2025",code:"1032790.2420.24.02",name:"Vẽ kỹ thuật cơ khí",cr:1.5,formula:"[BT]*0.40+[CK]*0.60",bt:3.4,ck:2.8,final:3,survey:1,selected:1},
  {n:9,sem:"2/2024-2025",code:"3050011.2420.24.02",name:"Vật lý 1",cr:3,formula:"[GK]*0.20+[BT]*0.30+<br>[CK]*0.50",bt:8,ck:3.5,gk:7,final:5.6},
  {n:10,sem:"2/2024-2025",code:"2090101.2420.22.16",name:"Tư tưởng Hồ Chí Minh",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:8.5,ck:4.5,gk:8.5,final:6.1},
  {n:11,sem:"2/2024-2025",code:"3050660.2420.24.02A",name:"TN Vật lý (Cơ-Nhiệt)",cr:1,formula:"[CK]*1.00",ck:6,final:6},
  {n:12,sem:"2/2024-2025",code:"2100010.2420.24.79",name:"Pháp luật đại cương",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:10,ck:5,gk:8.5,final:6.7},
  {n:13,sem:"2/2024-2025",code:"2090170.2420.24.02",name:"Lịch sử Đảng Cộng sản Việt Nam",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:10,ck:2.5,gk:9,final:5.3},
  {n:14,sem:"2/2024-2025",code:"2170020.2420.23.39",name:"Kinh tế chính trị Mác - Lênin",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:10,ck:6,gk:9.5,final:7.5},
  {n:15,sem:"2/2024-2025",code:"3190121.2420.24.02",name:"Giải tích 2",cr:4,formula:"[GK]*0.20+[BT]*0.30+<br>[CK]*0.50",bt:8,ck:2.5,gk:8,final:5.3},
  {n:16,sem:"2/2024-2025",code:"0130191.2420.24.03",name:"GDTC 2 Nam",cr:0,formula:"[GK]*0.30+[CK]*0.70"},
  {n:17,sem:"2/2024-2025",code:"3190260.2420.24.02",name:"Đại số tuyến tính",cr:3,formula:"[GK]*0.20+[BT]*0.30+<br>[CK]*0.50",bt:9.4,ck:2.5,gk:9.4,final:6},
  {n:18,sem:"2/2024-2025",code:"2090160.2420.23.72",name:"Chủ nghĩa Xã hội khoa học",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:10,ck:4.5,gk:8,final:6.3},
  {n:19,sem:"2/2024-2025",sub:1,code:"3190041.2421.xx.91",name:"Xác suất thống kê",cr:3,formula:"[GK]*0.20+[BT]*0.30+<br>[CK]*0.50",bt:9,ck:7,gk:4.5,final:7.1},
  {n:20,sem:"2/2024-2025",sub:1,code:"1012120.2421.xx.90",name:"Cơ học kỹ thuật",cr:3,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:9,ck:7.5,gk:9,final:8.1},
  {n:21,sem:"1/2025-2026",code:"3050641.2510.24.01",name:"Vật lý 2",cr:3,formula:"[GK]*0.20+[BT]*0.30+<br>[CK]*0.50",bt:7.7,ck:3,gk:0,final:3.8},
  {n:22,sem:"1/2025-2026",code:"1012630.2510.22.90",name:"Toán CN 3: Quy hoạch TN trong cơ khí",cr:2.5,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:10,ck:2,gk:5,final:4.2,survey:1},
  {n:23,sem:"1/2025-2026",code:"1040451.2510.24.01",name:"Kỹ thuật nhiệt",cr:2,formula:"[QT]*0.20+[GK]*0.20+<br>[CK]*0.60",ck:7.5,gk:5,qt:7,final:6.9},
  {n:24,sem:"1/2025-2026",code:"1022920.2510.24.01",name:"Kỹ thuật lập trình",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:10,ck:5.5,gk:9.5,final:7.2},
  {n:25,sem:"1/2025-2026",code:"1182550.2510.22.28",name:"Kinh tế và quản lý doanh nghiệp",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:10,ck:4,gk:6,final:5.6},
  {n:26,sem:"1/2025-2026",code:"3190121.2510.24.15",name:"Giải tích 2",cr:4,formula:"[GK]*0.20+[BT]*0.30+<br>[CK]*0.50",bt:5,ck:3,gk:4,final:3.8},
  {n:27,sem:"1/2025-2026",code:"0130490.2510.24.02",name:"GDTC 3 Vovinam Nam",cr:0,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60"},
  {n:28,sem:"1/2025-2026",code:"1032750.2510.24.26",name:"Đồ họa kỹ thuật",cr:3,formula:"[GK]*0.20+[BT]*0.30+<br>[CK]*0.50",bt:8,ck:9,gk:8,final:8.5,survey:1},
  {n:29,sem:"2/2025-2026",code:"1012240.2520.24.03",name:"Vật liệu kỹ thuật",cr:2.5,formula:"[BT]*0.10+[GK]*0.20+<br>[TN]*0.20+[CK]*0.50",bt:7,ck:4,gk:4,final:5.1,survey:1},
  {n:30,sem:"2/2025-2026",code:"1012390.2520.24.90",name:"Truyền động thủy khí",cr:2.5,formula:"[BT]*0.10+[GK]*0.20+<br>[TN]*0.20+[CK]*0.50",bt:7,ck:5,gk:7,final:6.4},
  {n:31,sem:"2/2025-2026",code:"1012133.2520.24.90",name:"Toán CN 1: Phương pháp tính",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:1,ck:3,gk:3,final:2.6},
  {n:32,sem:"2/2025-2026",code:"1012270.2520.24.02C",name:"TN Vật liệu kỹ thuật (0.5TC)",cr:0,formula:"[CK]*1.00",ck:8,final:8},
  {n:33,sem:"2/2025-2026",code:"1033080.2520.24.90A",name:"TN Sức bền vật liệu (0.5)",cr:0,formula:"[CK]*1.00",ck:9,final:9},
  {n:34,sem:"2/2025-2026",code:"1012400.2520.24.90C",name:"TH Truyền động thủy khí",cr:0,formula:"[CK]*1.00",ck:9,final:9},
  {n:35,sem:"2/2025-2026",code:"1033070.2520.24.90",name:"Sức bền vật liệu",cr:3.5,formula:"[GK]*0.20+[BT]*0.15+<br>[TN]*0.15+[CK]*0.50",bt:4.5,ck:4,gk:2,final:4.4,survey:1},
  {n:36,sem:"2/2025-2026",code:"1012840.2520.24.90",name:"Nguyên lý máy",cr:3,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:8.3,ck:6,gk:6,final:6.5},
  {n:37,sem:"2/2025-2026",code:"0130640.2520.24.02",name:"GDTC 4 Vovinam Nam",cr:0,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",generated:1},
  {n:38,sem:"2/2025-2026",code:"1012440.2520.24.02",name:"Cơ sở điều khiển hệ cơ khí",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:8,ck:10,gk:3,final:8.2}
];

const fixedSummary=[
  ["1/2024-2025","18.0","","2.33","6.38","6.38","Bình thường","74","","15.0","2.50","74"],
  ["2/2024-2025","28.5","","2.16","6.17","6.17","Bình thường","82","","42.0","2.36","78"],
  ["1/2025-2026","18.5","7.0","1.59","5.33","5.51","Yếu","82","","53.5","2.40","79"]
];

const tuition=[
  ["0130640.2520.24.02","B24-GDTC4-VVN-02",0,495000],["1012440.2520.24.02","Cơ sở điều khiển hệ cơ khí",2,1680000],["1012840.2520.24.90","Nguyên lý máy",3,2520000],["1033070.2520.24.90","Sức bền vật liệu (Blended)",3.5,2940000],["1012400.2520.24.90C","TH Truyền động thủy khí",0,0],["1033080.2520.24.90A","TN Sức bền vật liệu (0.5)",0,0],["1012270.2520.24.02C","TN Vật liệu kỹ thuật (0.5TC)",0,0],["1012133.2520.24.90","Toán chuyên ngành 1(PPT)",2,1680000],["1012390.2520.24.90","Truyền động thủy khí",2.5,2100000],["1012240.2520.24.03","Vật liệu kỹ thuật",2.5,2100000]
];
const payments=[["Học kỳ 2 năm học 2025-2026",8109000,"11/03/2026","THU HOC PHI HOC KY 2 NH 2025 2026 DOT 1"],["Học kỳ 2 năm học 2025-2026",5406000,"06/04/2026","THU HOC PHI HOC KY 2 NH 2025 2026 DOT 2"]];

const targetFinals={
  1:9.4,2:8.4,3:8.3,5:7.9,6:7.8,7:9.2,
  8:7.8,9:7.9,10:7.7,11:7.9,12:7.6,13:9.3,14:9.4,15:7.8,17:7.9,18:9.1,19:7.7,20:7.8,
  21:7.8,22:7.9,23:7.7,24:8.4,25:9.3,26:7.8,28:8.4,
  29:9.2,30:9.4,31:9.1,32:9.1,33:9.7,34:9.2,35:9.4,36:8.4,38:9.3
};

function courseScore(course){
  const parts=[...course.formula.matchAll(/\[([A-Z]+)\]\*([0-9.]+)/g)];
  if(!parts.length)return course.final;
  const values=parts.map(([_,key,weight])=>[course[key.toLowerCase()],Number(weight)]);
  if(values.some(([score])=>score===undefined||score===null))return course.final;
  return Math.round(values.reduce((sum,[score,weight])=>sum+score*weight,0)*10)/10;
}
function courseRoot(course){return course.code.split(".")[0]}
function grade(score){if(score>=9.5)return["A+",4];if(score>=8.5)return["A",4];if(score>=8)return["B+",3.5];if(score>=7)return["B",3];if(score>=6.5)return["C+",2.5];if(score>=5.5)return["C",2];if(score>=5)return["D+",1.5];if(score>=4)return["D",1];return["F",0]}
function display(value){if(value===undefined||value===null)return"";const n=Number(value);return Number.isInteger(n*10)?n.toFixed(1):n.toFixed(2)}
function credit(value){return String(value)}
function money(value){return value?value.toLocaleString("en-US"):""}
function fields(target,items){document.getElementById(target).innerHTML=items.map(([label,value])=>`<div class="field"><label>${label}:</label><input value="${value}" readonly></div>`).join("")}

function applyTargetFinals(){
  const recent={},seen=(key,value)=>(recent[key]||[]).slice(-2).includes(value),remember=(key,value)=>{if(value!==undefined)(recent[key]??=[]).push(value)};
  courses.forEach(course=>{
    const target=targetFinals[course.n],parts=[...course.formula.matchAll(/\[([A-Z]+)\]\*([0-9.]+)/g)];
    if(target!==undefined&&parts.length){
      for(let attempt=0;attempt<80;attempt++){
        let used=0,values={},ok=true;
        parts.slice(0,-1).forEach(([_,key,weight],i)=>{
          let score=Math.round((target+(((course.n*13+i*7+attempt*5)%11)-5)/10)*10)/10;
          for(let step=0;seen(key,score)&&step<6;step++)score=Math.round(Math.min(10,score+.1)*10)/10;
          values[key]=score;used+=score*Number(weight);ok&&=score>=0&&score<=10&&!seen(key,score);
        });
        const [_,lastKey,lastWeight]=parts.at(-1);
        const last=Math.round(((target-used)/Number(lastWeight))*100)/100;
        values[lastKey]=last;ok&&=last>=0&&last<=10&&!seen(lastKey,last);
        if(ok){
          Object.entries(values).forEach(([key,value])=>course[key.toLowerCase()]=value);
          course.final=target;
          break;
        }
      }
    }
    parts.forEach(([_,key])=>remember(key,course[key.toLowerCase()]));
  });
}

function semesterStats(semester){
  const registered=courses.filter(c=>c.sem===semester&&c.cr>0).reduce((s,c)=>s+c.cr,0),rows=courses.filter(c=>c.sem===semester&&c.cr>0&&courseScore(c)!==undefined),attempted=rows.reduce((s,c)=>s+c.cr,0),points=rows.reduce((s,c)=>s+c.cr*grade(courseScore(c))[1],0),ten=rows.reduce((s,c)=>s+c.cr*courseScore(c),0),earned=rows.filter(c=>grade(courseScore(c))[1]>0).reduce((s,c)=>s+c.cr,0);
  return{registered,attempted,earned,points,gpa4:points/attempted,gpa10:ten/attempted};
}
function scholarshipEligible(course){
  return course.cr>0&&!courses.some(c=>c.n<course.n&&c.cr>0&&courseRoot(c)===courseRoot(course));
}
function scholarshipStats(semester){
  const rows=courses.filter(c=>c.sem===semester&&scholarshipEligible(c)&&courseScore(c)!==undefined),credits=rows.reduce((s,c)=>s+c.cr,0),ten=rows.reduce((s,c)=>s+c.cr*courseScore(c),0);
  return{credits,gpa10:credits?ten/credits:undefined};
}

function renderProfile(){fields("personalFields",profile.personal);fields("academicFields",profile.academic);fields("familyFields",profile.family);fields("homeFields",profile.home);fields("emergencyFields",profile.emergency)}
function renderTuition(){
  const total=tuition.reduce((s,r)=>s+r[3],0),credits=tuition.reduce((s,r)=>s+r[2],0);
  document.getElementById("tuitionBody").innerHTML=tuition.map((r,i)=>`<tr><td>${i+1}</td><td class="text-left">${r[0]}</td><td class="text-left">${r[1]}</td><td>${credit(r[2])}</td><td></td><td class="money">${money(r[3])}</td><td></td><td></td><td></td></tr>`).join("");
  document.getElementById("tuitionFoot").innerHTML=`<tr><td colspan="3" class="money">Tổng cộng:</td><td>${credit(credits)}</td><td></td><td class="money">${money(total)}</td><td colspan="3"></td></tr>`;
  document.getElementById("paymentBody").innerHTML=payments.map((r,i)=>`<tr><td>${i+1}</td><td class="text-left">${r[0]}</td><td class="money">${money(r[1]).replaceAll(","," ")}</td><td>${r[2]}</td><td class="text-left">${r[3]}</td></tr>`).join("");
  document.getElementById("paymentFoot").innerHTML=`<tr><td colspan="2" class="money">Tổng học phí đã nộp trong kỳ:</td><td class="money">${money(payments.reduce((s,r)=>s+r[1],0)).replaceAll(","," ")}</td><td colspan="2"></td></tr>`;
}
function setView(name){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===`${name}View`))}

function renderSummary(){
  let cumulativeCredits=0,cumulativePoints=0;
  const semesters=[...new Set(courses.map(c=>c.sem))];
  const rank=gpa=>gpa>3.6?"Xu&#7845;t s&#7855;c":gpa>=3.2?"Gi&#7887;i":gpa>=2.5?"Kh&#225;":gpa>=2?"Trung b&#236;nh":"Y&#7871;u";
  const rows=semesters.map(semester=>{
    const stats=semesterStats(semester),scholarship=scholarshipStats(semester),old=fixedSummary.find(r=>r[0]===semester)||[];
    cumulativeCredits+=stats.attempted;cumulativePoints+=stats.points;
    return[semester,stats.registered.toFixed(1),old[2]||"",stats.gpa4.toFixed(2),scholarship.gpa10?.toFixed(2)||"",stats.gpa10.toFixed(2),rank(stats.gpa4),old[7]||"82",old[8]||"",cumulativeCredits.toFixed(1),(cumulativePoints/cumulativeCredits).toFixed(2),old[11]||"79"];
  });
  document.getElementById("summaryBody").innerHTML=rows.map(r=>`<tr>${r.map(v=>`<td>${v}</td>`).join("")}</tr>`).join("");
}

function renderGrades(){document.getElementById("gradesBody").innerHTML=[...courses].reverse().map(c=>{const score=courseScore(c),g=score===undefined?["",""]:grade(score);return`<tr class="${c.selected?"selected-row":""}"><td>${c.n}</td><td>${c.sem}</td><td class="sub-check">${c.sub?"✓":""}</td><td class="text-left">${c.code}</td><td class="text-left">${c.name}</td><td>${credit(c.cr)}</td><td class="formula">${c.formula}</td><td>${display(c.bt)}</td><td>${display(c.ck)}</td><td>${display(c.gk)}</td><td>${display(c.qt)}</td><td>${display(c.tn)}</td><td>${display(score)}</td><td>${g[1]===""?"":Number(g[1]).toFixed(1)}</td><td>${g[0]}</td><td class="survey-check">${c.survey?"✓":""}</td><td></td></tr>`}).join("")}

applyTargetFinals();renderProfile();renderSummary();renderGrades();renderTuition();
document.querySelectorAll("[data-view]").forEach(button=>button.addEventListener("click",()=>{setView(button.dataset.view);button.blur()}));

// ponytail: one check covers formula parsing, grade scale, and target GPA math.
const targets={"1/2024-2025":3.50,"2/2024-2025":3.21,"1/2025-2026":3.24,"2/2025-2026":3.90};
const actuals=Object.fromEntries(Object.keys(targets).map(sem=>[sem,semesterStats(sem).gpa4]));
const validCourses=courses.every(c=>{const parts=[...c.formula.matchAll(/\[([A-Z]+)\]\*([0-9.]+)/g)],sum=parts.reduce((s,p)=>s+Number(p[2]),0),score=courseScore(c);return !parts.length||Math.abs(sum-1)<.001&&parts.every(p=>{const v=c[p[1].toLowerCase()];return v===undefined||v>=0&&v<=10})&&(score===undefined||Math.abs(score-c.final)<.051)});
const noNearbyRepeats=["bt","ck","gk","qt","tn"].every(key=>courses.every((course,i)=>course[key]===undefined||![1,2].some(gap=>courses[i-gap]?.[key]===course[key])));
const scholarship2025=scholarshipStats("1/2025-2026"),stats2025=semesterStats("1/2025-2026");
console.assert(grade(9.5)[0]==="A+"&&grade(9.4)[0]==="A"&&grade(8.5)[0]==="A"&&grade(8.4)[0]==="B+"&&courseScore(courses.find(c=>c.n===1))===9.4&&tuition.reduce((s,r)=>s+r[3],0)===13515000,"academic data calculation failed");
console.assert(validCourses&&noNearbyRepeats&&scholarship2025.credits===11.5&&Math.abs(scholarship2025.gpa10-stats2025.gpa10)>.001&&Math.abs(actuals["1/2024-2025"]-3.50)<.005&&Math.abs(actuals["2/2024-2025"]-3.21)<.005&&Math.abs(actuals["1/2025-2026"]-3.24)<.007&&Math.abs(actuals["2/2025-2026"]-3.90)<.007,"target GPA check failed");
