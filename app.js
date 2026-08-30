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
  {n:38,sem:"2/2025-2026",code:"1012440.2520.24.02",name:"Cơ sở điều khiển hệ cơ khí",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60",bt:8,ck:10,gk:3,final:8.2},
  {n:39,sem:"1/2026-2027",code:"1012850.2610.24.01",name:"Chi tiết máy",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60"},
  {n:40,sem:"1/2026-2027",code:"1012680.2610.24.01",name:"Dụng sai và kỹ thuật đo",cr:2.5,formula:"[QT]*0.10+[TN]*0.20+<br>[GK]*0.20+[CK]*0.50"},
  {n:41,sem:"1/2026-2027",code:"1012550.2610.24.01A",name:"PBL 1: Thiết kế hệ thống cơ khí",cr:3,formula:"[ĐÁ]*0.30+[CK]*0.70"},
  {n:42,sem:"1/2026-2027",code:"1012540.2610.24.01B",name:"TN Nguyên lý và dụng cụ gia công vật liệu",cr:0,formula:"[CK]*1.00"},
  {n:43,sem:"1/2026-2027",code:"1012530.2610.24.01",name:"Nguyên lý và dụng cụ gia công vật liệu",cr:3.5,formula:"[QT]*0.10+[TN]*0.20+<br>[GK]*0.20+[CK]*0.50"},
  {n:44,sem:"1/2026-2027",code:"1012520.2610.24.01B",name:"TN Xử lý vật liệu kỹ thuật (0.5TC)",cr:0,formula:"[CK]*1.00"},
  {n:45,sem:"1/2026-2027",code:"1012510.2610.24.01",name:"Xử lý vật liệu kỹ thuật",cr:2.5,formula:"[BT]*0.10+[GK]*0.20+<br>[TN]*0.20+[CK]*0.50"},
  {n:46,sem:"1/2026-2027",code:"1012500.2610.24.01",name:"Công nghệ đúc và hàn (tiếng anh)",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60"},
  {n:47,sem:"1/2026-2027",code:"1012490.2610.24.01",name:"Thiết kế hệ thống dẫn động cơ khí",cr:2,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60"},
  {n:48,sem:"1/2026-2027",code:"1012280.2610.24.01A",name:"TH Dụng sai và kỹ thuật đo (0.5TC)",cr:0,formula:"[CK]*1.00"},
  {n:49,sem:"1/2026-2027",code:"1012610.2610.24.01",name:"Linh kiện điện tử và cảm biến công nghiệp",cr:3,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60"},
  {n:50,sem:"1/2026-2027",code:"1012620.2610.24.01",name:"Kỹ thuật điện tử và cảm biến trong máy bay",cr:3,formula:"[GK]*0.20+[BT]*0.20+<br>[CK]*0.60"}
];

const fixedSummary=[
  ["1/2024-2025","18.0","","2.33","6.38","6.38","Bình thường","74","","15.0","2.50","74"],
  ["2/2024-2025","28.5","","2.16","6.17","6.17","Bình thường","82","","42.0","2.36","78"],
  ["1/2025-2026","18.5","","1.59","5.33","5.51","Yếu","82","","53.5","2.40","79"]
];

const tuition=[
  ["0130640.2520.24.02","B24-GDTC4-VVN-02",0,495000],["1012440.2520.24.02","Cơ sở điều khiển hệ cơ khí",2,1680000],["1012840.2520.24.90","Nguyên lý máy",3,2520000],["1033070.2520.24.90","Sức bền vật liệu (Blended)",3.5,2940000],["1012400.2520.24.90C","TH Truyền động thủy khí",0,0],["1033080.2520.24.90A","TN Sức bền vật liệu (0.5)",0,0],["1012270.2520.24.02C","TN Vật liệu kỹ thuật (0.5TC)",0,0],["1012133.2520.24.90","Toán chuyên ngành 1(PPT)",2,1680000],["1012390.2520.24.90","Truyền động thủy khí",2.5,2100000],["1012240.2520.24.03","Vật liệu kỹ thuật",2.5,2100000]
];
const tuitionData = {
  "2026-1": {
    courses: [
      ["1012850.2610.24.01","Chi tiết máy",2,1800000],
      ["1012500.2610.24.01","Công nghệ đúc và hàn (tiếng anh)",2,1800000],
      ["1012680.2610.24.01","Dụng sai và kỹ thuật đo",2.5,2250000],
      ["1012530.2610.24.01","Nguyên lý và dụng cụ gia công vật liệu",3.5,3150000],
      ["1012550.2610.24.01A","PBL 1: Thiết kế hệ thống cơ khí",3,2700000],
      ["1012280.2610.24.01A","TH Dụng sai và kỹ thuật đo (0.5TC)",0,0],
      ["1012490.2610.24.01","Thiết kế hệ thống dẫn động cơ khí",2,1800000],
      ["1012540.2610.24.01B","TN Nguyên lý và dụng cụ gia công vật liệu",0,0],
      ["1012520.2610.24.01B","TN Xử lý vật liệu kỹ thuật (0.5TC)",0,0],
      ["1012510.2610.24.01","Xử lý vật liệu kỹ thuật",2.5,2250000],
      ["1012610.2610.24.01","Linh kiện điện tử và cảm biến công nghiệp",3,2700000],
      ["1012620.2610.24.01","Kỹ thuật điện tử và cảm biến trong máy bay",3,2700000]
    ],
    payments: [],
    due: [
      {stt:1, sem:"Học kỳ 1 năm học 2026-2027", amount:12690000, bankPaid:0, time:"", transId:"", note:""}
    ]
  },
  "2025-2": {
    courses: [
      ["0130640.2520.24.02","B24-GDTC4-VVN-02",0,495000],
      ["1012440.2520.24.02","Cơ sở điều khiển hệ cơ khí",2,1680000],
      ["1012840.2520.24.90","Nguyên lý máy",3,2520000],
      ["1033070.2520.24.90","Sức bền vật liệu (Blended)",3.5,2940000],
      ["1012400.2520.24.90C","TH Truyền động thủy khí",0,0],
      ["1033080.2520.24.90A","TN Sức bền vật liệu (0.5)",0,0],
      ["1012270.2520.24.02C","TN Vật liệu kỹ thuật (0.5TC)",0,0],
      ["1012133.2520.24.90","Toán chuyên ngành 1(PPT)",2,1680000],
      ["1012390.2520.24.90","Truyền động thủy khí",2.5,2100000],
      ["1012240.2520.24.03","Vật liệu kỹ thuật",2.5,2100000]
    ],
    payments: [
      ["Học kỳ 2 năm học 2025-2026",8109000,"11/03/2026","THU HOC PHI HOC KY 2 NH 2025 2026 DOT 1"],
      ["Học kỳ 2 năm học 2025-2026",5406000,"06/04/2026","THU HOC PHI HK2 NH 2024 2025 DOT 2"]
    ],
    due: []
  },
  "2025-1": {
    courses: [
      ["0130490.2510.24.02","B24-GDTC3-VVN-02",0,495000,false],
      ["1032750.2510.24.26","Đồ họa kỹ thuật",3,2520000,false],
      ["3190121.2510.24.15","Giải tích 2",4,3360000,false],
      ["1182550.2510.22.28","Kinh tế và quản lý doanh nghiệp",2,1680000,false],
      ["1022920.2510.24.01","Kỹ thuật lập trình",2,1680000,false],
      ["1040451.2510.24.01","Kỹ thuật nhiệt",2,1680000,false],
      ["1012630.2510.22.90","Toán CN 3: Quy hoạch TN trong cơ khí",2.5,2100000,false],
      ["3050641.2510.24.01","Vật lý 2",3,2520000,false]
    ],
    payments: [
      ["Học kỳ 1 năm học 2025-2026",6414000,"20/11/2025","THU GIA HAN HOC PHI HK1 NH 2025 2026"],
      ["Học kỳ 1 năm học 2025-2026",9621000,"22/09/2025","THU HOC PHI HOC KY 1 NH 2025 2026 DOT 1"]
    ],
    due: []
  },
  "2024-3": {
    courses: [
      ["1012120.2421.xx.90","Cơ học kỹ thuật",3,2340000],
      ["3190041.2421.xx.91","Xác suất thống kê",3,2340000]
    ],
    payments: [
      ["Học kỳ Hè năm học 2024-2025",4680000,"07/07/2025","THU HOC PHI HOC KY HE NH 2024 2025"]
    ],
    due: []
  },
  "2024-2": {
    courses: [
      ["0130191.2420.24.03","B24 GDTC2 TD 03",0,440000],
      ["2090160.2420.23.72","Chủ nghĩa Xã hội khoa học",2,1560000],
      ["3190260.2420.24.02","Đại số tuyến tính",3,2340000],
      ["3190121.2420.24.02","Giải tích 2",4,3120000],
      ["2170020.2420.23.39","Kinh tế chính trị Mác - Lênin",2,1560000],
      ["2090170.2420.24.02","Lịch sử Đảng Cộng sản Việt Nam",2,1560000],
      ["2100010.2420.24.79","Pháp luật đại cương",2,1300000],
      ["3050660.2420.24.02A","TN Vật lý (Cơ-Nhiệt) (1TC)",1,780000],
      ["2090101.2420.22.16","Tư tưởng Hồ Chí Minh",2,1560000],
      ["3050011.2420.24.02","Vật lý 1",3,2340000],
      ["1032790.2420.24.02","Vẽ kỹ thuật cơ khí",1.5,1170000]
    ],
    payments: [
      ["Học kỳ 2 năm học 2024-2025",10638000,"14/03/2025","THU HOC PHI HKII NH 2024 2025 DOT 1"],
      ["Học kỳ 2 năm học 2024-2025",7092000,"04/04/2025","THU HOC PHI HK2 NH 2024 2025 DOT 2"]
    ],
    due: []
  },
  "2024-1": {
    courses: [
      ["4130311.2410.24.02","Anh văn A2.2",4,3120000],
      ["1032750.2410.24.02","Đồ họa kỹ thuật",3,2340000],
      ["3190111.2410.24.02","Giải tích 1",4,3120000],
      ["0130011.2410.24.02","Giáo dục thể chất 1",0,440000],
      ["1073431.2410.24.02","Hóa đại cương",2,1560000],
      ["1012130.2410.24.02","Nhập môn ngành (CTM)",2,1560000],
      ["2090150.2410.24.02","Triết học Mác - Lênin",3,2340000]
    ],
    payments: [
      ["Học kỳ 1 năm học 2024-2025",14303870,"21/08/2024","Học phí học kỳ 1 24 25"],
      ["Học kỳ 1 năm học 2024-2025",176130,"12/12/2024","THU HOC PHI HOC KY 1 NH 2024 2025"]
    ],
    due: [],
    note: "*Lưu ý: dữ liệu học phí được cập nhật đến ngày 00:00 10/12/2024"
  }
};

const schedule2026=[
  {tt:1,code:"1012850.2610.24.01",name:"Chi tiết máy",cr:2,tichhop:"",clc:"",gv:"Trần Minh Sang",tkb:"Thứ 3,4-5,F306",tuan:"1-16"},
  {tt:2,code:"1012500.2610.24.01",name:"Công nghệ đúc và hàn (tiếng anh)",cr:2,tichhop:"",clc:"",gv:"Tào Quang Bảng",tkb:"Thứ 4,1-2,E2.105",tuan:"1-16"},
  {tt:3,code:"1012680.2610.24.01",name:"Dụng sai và kỹ thuật đo",cr:2.5,tichhop:"1012280",clc:"",gv:"Lưu Đức Bình",tkb:"Thứ 4,3-4,H208",tuan:"1-16"},
  {tt:4,code:"1012530.2610.24.01",name:"Nguyên lý và dụng cụ gia công vật liệu",cr:3.5,tichhop:"1012540",clc:"",gv:"Nguyễn Phạm Thế Nhân",tkb:"Thứ 5,1-3,F106",tuan:"1-16"},
  {tt:5,code:"1012550.2610.24.01A",name:"PBL 1: Thiết kế hệ thống cơ khí",cr:3,tichhop:"",clc:"",gv:"Trần Ngọc Hải",tkb:"Thứ 3,1-3,F306",tuan:"1-16"},
  {tt:6,code:"1012280.2610.24.01A",name:"TH Dụng sai và kỹ thuật đo (0.5TC)",cr:0,tichhop:"",clc:"",gv:"Phạm Nguyễn Quốc Huy",tkb:"Thứ 5,6-10,M206",tuan:"15-17"},
  {tt:7,code:"1012490.2610.24.01",name:"Thiết kế hệ thống dẫn động cơ khí",cr:2,tichhop:"",clc:"",gv:"Trần Minh Sang",tkb:"Thứ 2,1-2,F401",tuan:"1-16"},
  {tt:8,code:"1012540.2610.24.01B",name:"TN Nguyên lý và dụng cụ gia công vật liệu",cr:0,tichhop:"",clc:"",gv:"Nguyễn Tấn Minh",tkb:"Thứ 3,6-10,XUONG CK",tuan:"12-14"},
  {tt:9,code:"1012520.2610.24.01B",name:"TN Xử lý vật liệu kỹ thuật (0.5TC)",cr:0,tichhop:"",clc:"",gv:"Nguyễn Linh Giang",tkb:"Thứ 3,6-10,K105",tuan:"15-17"},
  {tt:10,code:"1012510.2610.24.01",name:"Xử lý vật liệu kỹ thuật",cr:2.5,tichhop:"1012520",clc:"",gv:"Nguyễn Bá Kiên",tkb:"Thứ 5,4-5,F106",tuan:"1-16"},
  {tt:11,code:"1012610.2610.24.01",name:"Linh kiện điện tử và cảm biến công nghiệp",cr:3,tichhop:"",clc:"",gv:"Đinh Quỳnh Như",tkb:"Thứ 6,1-3,E2.206",tuan:"1-16"},
  {tt:12,code:"1012620.2610.24.01",name:"Kỹ thuật điện tử và cảm biến trong máy bay",cr:3,tichhop:"",clc:"",gv:"Đoàn Lê Anh",tkb:"Thứ 7,1-2,E2.206",tuan:"1-16"}
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

function renderProfile(){}

function renderTuition(){
  const select = document.getElementById("tuitionSemSelect");
  const sem = select ? select.value : "2026-1";
  const data = tuitionData[sem] || tuitionData["2026-1"];
  const list = data.courses;
  const paymentsList = data.payments;
  const dueList = data.due || [];

  const total = list.reduce((s,r)=>s+r[3],0);
  const credits = list.reduce((s,r)=>s+r[2],0);

  document.getElementById("tuitionBody").innerHTML = list.map((r,i) => {
    const isHocLai = r[4] === true ? "✓" : "";
    return `<tr>
      <td>${i+1}</td>
      <td class="text-left">${r[0]}</td>
      <td class="text-left">${r[1]}</td>
      <td>${credit(r[2])}</td>
      <td></td>
      <td class="money">${money(r[3])}</td>
      <td class="survey-check">${isHocLai}</td>
      <td></td>
      <td></td>
    </tr>`;
  }).join("");

  document.getElementById("tuitionFoot").innerHTML = `<tr><td colspan="3" class="money">Tổng cộng:</td><td>${credit(credits)}</td><td></td><td class="money">${money(total)}</td><td colspan="3"></td></tr>`;

  const totalPaid = paymentsList.reduce((s,r)=>s+r[1],0);
  if(paymentsList.length > 0){
    let pFootNote = data.note ? `<br><span style="font-weight:normal;font-style:italic">${data.note}</span>` : "";
    document.getElementById("paymentBody").innerHTML = paymentsList.map((r,i)=>`<tr><td>${i+1}</td><td class="text-left">${r[0]}</td><td class="money">${money(r[1]).replaceAll(","," ")}</td><td>${r[2]}</td><td class="text-left">${r[3]}</td></tr>`).join("");
    document.getElementById("paymentFoot").innerHTML = `<tr><td colspan="2" class="money">Tổng học phí đã nộp trong kỳ:</td><td class="money">${money(totalPaid).replaceAll(","," ")}</td><td colspan="2" style="text-align:left">${pFootNote}</td></tr>`;
  } else {
    document.getElementById("paymentBody").innerHTML = `<tr class="empty-row"><td colspan="5"></td></tr>`;
    document.getElementById("paymentFoot").innerHTML = `<tr><td colspan="2" class="money">Tổng học phí đã nộp trong kỳ:</td><td class="money">0</td><td colspan="2"></td></tr>`;
  }

  const dueBody = document.getElementById("dueBody");
  if(dueBody){
    if(dueList.length > 0){
      dueBody.innerHTML = dueList.map(r => `<tr>
        <td>${r.stt}</td>
        <td class="text-left">${r.sem}</td>
        <td class="money">${money(r.amount).replaceAll(","," ")}</td>
        <td class="money">${r.bankPaid ? money(r.bankPaid) : "0"}</td>
        <td>${r.time}</td>
        <td>${r.transId}</td>
        <td class="text-left">${r.note}</td>
      </tr>`).join("");
    } else {
      dueBody.innerHTML = `<tr class="empty-row"><td colspan="7"></td></tr>`;
    }
  }
}

function renderSchedule(){
  const totalCredits = schedule2026.reduce((sum, item) => sum + item.cr, 0);
  const scheduleRows = schedule2026.map(item => `
    <tr>
      <td>${item.tt}</td>
      <td class="text-left">${item.code}</td>
      <td class="text-left">${item.name}</td>
      <td>${item.cr}</td>
      <td>${item.tichhop}</td>
      <td>${item.clc}</td>
      <td class="text-left">${item.gv}</td>
      <td class="text-left">${item.tkb}</td>
      <td>${item.tuan}</td>
      <td class="icon-cell">🔍</td>
      <td class="icon-cell">🔍</td>
      <td class="icon-cell">🔍</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  `).join("");
  
  const scheduleBody = document.getElementById("scheduleBody");
  if(scheduleBody) scheduleBody.innerHTML = scheduleRows;
  
  const scheduleFoot = document.getElementById("scheduleFoot");
  if(scheduleFoot) scheduleFoot.innerHTML = `<tr><td colspan="3" style="text-align:right;font-weight:700">Tổng cộng:</td><td style="font-weight:700">${totalCredits}</td><td colspan="13"></td></tr>`;
  
  const examRows = schedule2026.map(item => `
    <tr>
      <td>${item.tt}</td>
      <td class="text-left">${item.code}</td>
      <td class="text-left">${item.name}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  `).join("");
  
  const examBody = document.getElementById("examBody");
  if(examBody) examBody.innerHTML = examRows;
}

function setView(name){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===`${name}View`));
}

let isLoggedIn = false;

function doLogin(e){
  if(e) e.preventDefault();
  isLoggedIn = true;
  const topNav = document.getElementById("topNav");
  if(topNav) topNav.style.display = "flex";
  setView("profile");
  return false;
}

function doLogout(){
  isLoggedIn = false;
  const topNav = document.getElementById("topNav");
  if(topNav) topNav.style.display = "none";
  setView("login");
}

function renderCurrentTerm(){
  const currentCourses = courses.filter(c => c.sem === "1/2026-2027");
  const rows = [...currentCourses].reverse().map((c, i) => `
    <tr>
      <td>${currentCourses.length - i}</td>
      <td class="text-left">${c.code}</td>
      <td class="text-left">${c.name}</td>
      <td>${credit(c.cr)}</td>
      <td class="formula">${c.formula.replaceAll("<br>","")}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  `).join("");
  const el = document.getElementById("currentTermBody");
  if(el) el.innerHTML = rows;
}

function renderSummary(){
  let cumulativeCredits=0,cumulativePoints=0;
  const semesters=[...new Set(courses.map(c=>c.sem))].filter(s => s !== "1/2026-2027");
  const rank=gpa=>gpa>3.6?"Xu&#7845;t s&#7855;c":gpa>=3.2?"Gi&#7887;i":gpa>=2.5?"Kh&#225;":gpa>=2?"Trung b&#236;nh":"Y&#7871;u";
  const rows=semesters.map(semester=>{
    const stats=semesterStats(semester),scholarship=scholarshipStats(semester),old=fixedSummary.find(r=>r[0]===semester)||[];
    cumulativeCredits+=stats.attempted;cumulativePoints+=stats.points;
    return[semester,stats.registered.toFixed(1),"",stats.gpa4.toFixed(2),scholarship.gpa10?.toFixed(2)||"",stats.gpa10.toFixed(2),rank(stats.gpa4),old[7]||"82",old[8]||"",cumulativeCredits.toFixed(1),(cumulativePoints/cumulativeCredits).toFixed(2),old[11]||"79"];
  });
  document.getElementById("summaryBody").innerHTML=rows.map(r=>`<tr>${r.map(v=>`<td>${v}</td>`).join("")}</tr>`).join("");
}

function renderGrades(){document.getElementById("gradesBody").innerHTML=[...courses].reverse().map(c=>{const score=courseScore(c),g=score===undefined?["",""]:grade(score);return`<tr class="${c.selected?"selected-row":""}"><td>${c.n}</td><td>${c.sem}</td><td class="sub-check">${c.sub?"✓":""}</td><td class="text-left">${c.code}</td><td class="text-left">${c.name}</td><td>${credit(c.cr)}</td><td class="formula">${c.formula}</td><td>${display(c.bt)}</td><td>${display(c.ck)}</td><td>${display(c.gk)}</td><td>${display(c.qt)}</td><td>${display(c.tn)}</td><td>${display(score)}</td><td>${g[1]===""?"":Number(g[1]).toFixed(1)}</td><td>${g[0]}</td><td class="survey-check">${c.survey?"✓":""}</td><td></td></tr>`}).join("")}

const curriculumData = [[1, 1, "", "3190111", "Giải tích 1", 4, false, true, false, "2", "", "Được", "", "", "", ""], [2, 1, "", "4130311", "Anh văn A2.2", 4, false, true, false, "3", "", "Được", "", "", "", ""], [3, 1, "", "2090150", "Triết học Mác - Lênin", 3, false, true, false, "2.5", "", "Được", "", "", "", ""], [4, 1, "", "1032750", "Đồ họa kỹ thuật", 3, false, true, false, "4", "", "Được", "", "", "", ""], [5, 1, "", "1073431", "Hóa đại cương", 2, false, false, false, "1.5", "", "Được", "", "", "", ""], [6, 1, "", "1012130", "Nhập môn ngành (CTM)", 2, false, true, false, "3.5", "", "Được", "", "", "", ""], [7, 1, "", "0130011", "Giáo dục thể chất 1", 0, false, true, false, "", "", "Được", "", "", "", ""], [8, 2, "", "3190121", "Giải tích 2", 4, false, true, false, "1.5", "", "Được", "3190111- Giải tích 1", "", "", ""], [9, 2, "", "2090170", "Lịch sử Đảng Cộng sản Việt Nam", 2, false, true, false, "1.5", "", "Được", "", "", "", ""], [10, 2, "", "3190260", "Đại số tuyến tính", 3, false, true, false, "2", "", "Được", "", "", "", ""], [11, 2, "", "3050011", "Vật lý 1", 3, false, true, false, "2", "", "Được", "3190111- Giải tích 1", "", "", ""], [12, 2, "", "3050660", "TN Vật lý (Cơ-Nhiệt)", 1, false, true, false, "2", "", "Được, nếu ĐK được HP song hành", "", "3050011- Vật lý 1", "", ""], [13, 2, "GDTC2", "0130021", "Giáo dục thể chất 2", 0, false, true, false, "", "", "Được", "", "", "", ""], [14, 2, "", "1032790", "Vẽ kỹ thuật cơ khí", 1.5, false, true, false, "0", "", "Được", "", "", "", ""], [15, 2, "", "4130120", "Anh văn B1.1", 3, false, false, false, "", "", "Được", "", "", "", ""], [16, 3, "GDTC3", "0130031", "Giáo dục thể chất 3", 0, false, true, false, "", "", "Được", "", "", "", ""], [17, 3, "", "2090101", "Tư tưởng Hồ Chí Minh", 2, false, true, false, "2", "", "Được", "2090150- Triết học Mác - Lênin", "", "", ""], [18, 3, "", "3190041", "Xác suất thống kê", 3, false, true, false, "3", "", "Được", "3190111- Giải tích 1", "", "", ""], [19, 3, "", "3050641", "Vật lý 2", 3, false, true, false, "0", "", "Được", "3050011- Vật lý 1", "", "", ""], [20, 3, "", "1040451", "Kỹ thuật nhiệt", 2, false, true, false, "2.5", "", "Được", "3050011- Vật lý 1", "", "", ""], [21, 3, "", "2100010", "Pháp luật đại cương", 2, false, true, false, "2.5", "", "Được", "", "", "", ""], [22, 3, "", "1022920", "Kỹ thuật lập trình", 2, false, true, false, "3", "", "Được", "3190260- Đại số tuyến tính", "", "", ""], [23, 3, "", "1012120", "Cơ học kỹ thuật", 3, false, true, false, "3.5", "", "Được", "3050011- Vật lý 1<br>3190121- Giải tích 2", "", "", ""], [24, 4, "", "2170020", "Kinh tế chính trị Mác - Lênin", 2, false, true, false, "3", "", "Được", "", "", "", ""], [25, 4, "", "1012133", "Toán CN 1: Phương pháp tính", 2, false, true, false, "0", "", "Được", "3190260- Đại số tuyến tính<br>1022920- Kỹ thuật lập trình", "", "", ""], [26, 4, "", "1033070", "Sức bền vật liệu", 3.5, false, true, false, "1", "", "Được", "1012120- Cơ học kỹ thuật", "", "", ""], [27, 4, "", "1033080", "TN Sức bền vật liệu (0.5)", 0, false, true, false, "4", "", "Được, nếu ĐK được HP song hành", "", "1033070- Sức bền vật liệu", "", ""], [28, 4, "", "1012840", "Nguyên lý máy", 3, false, true, false, "2.5", "", "Được", "1012120- Cơ học kỹ thuật", "", "", ""], [29, 4, "", "1012240", "Vật liệu kỹ thuật", 2.5, false, true, false, "1.5", "", "Được, nếu ĐK được HP song hành", "1073431- Hóa đại cương<br>3050641- Vật lý 2", "1033070- Sức bền vật liệu", "", ""], [30, 4, "", "1012270", "TN Vật liệu kỹ thuật (0.5TC)", 0, false, true, false, "3.5", "", "Được, nếu ĐK được HP song hành", "", "1012240- Vật liệu kỹ thuật", "", ""], [31, 4, "", "1012440", "Cơ sở điều khiển hệ cơ khí", 2, false, true, false, "3.5", "", "Được", "3190260- Đại số tuyến tính<br>1012130- Nhập môn ngành (CTM)<br>3190121- Giải tích 2", "", "", ""], [32, 4, "", "1012390", "Truyền động thủy khí", 2.5, false, true, false, "2", "", "Được", "3050641- Vật lý 2", "", "", ""], [33, 4, "", "1012400", "TH Truyền động thủy khí", 0, false, true, false, "4", "", "Được, nếu ĐK được HP song hành", "", "1012390- Truyền động thủy khí", "", ""], [34, 4, "GDTC4", "0130041", "Giáo dục thể chất 4", 0, false, true, false, "", "", "Được", "", "", "", ""], [35, 5, "", "1012850", "Chi tiết máy", 2, false, true, false, "", "", "Được", "1012240- Vật liệu kỹ thuật<br>1033070- Sức bền vật liệu<br>1012840- Nguyên lý máy", "", "", ""], [36, 5, "", "1012490", "Thiết kế hệ thống dẫn động cơ khí", 2, false, true, false, "", "", "Được", "1012840- Nguyên lý máy", "", "", ""], [37, 5, "", "1012680", "Dụng sai và kỹ thuật đo", 2.5, false, true, false, "", "", "Được", "1033070- Sức bền vật liệu", "", "", ""], [38, 5, "", "1012280", "TH Dụng sai và kỹ thuật đo (0.5TC)", 0, false, true, false, "", "", "Được, nếu ĐK được HP song hành", "", "1012680- Dụng sai và kỹ thuật đo", "", ""], [39, 5, "", "1012500", "Công nghệ đúc và hàn", 2, false, true, false, "", "", "Được", "1012240- Vật liệu kỹ thuật", "", "", ""], [40, 5, "", "1012510", "Xử lý vật liệu kỹ thuật", 2.5, false, true, false, "", "", "Được", "1012240- Vật liệu kỹ thuật", "", "", "Chọn 1 trong 2"], [41, 5, "", "1012520", "TN Xử lý vật liệu kỹ thuật (0.5TC)", 0, false, true, false, "", "", "Được, nếu ĐK được HP song hành", "", "1012510- Xử lý vật liệu kỹ thuật", "", ""], [42, 5, "", "1012790", "Vật liệu hàng không và xử lý vật liệu", 2.5, false, true, false, "", "", "Được", "1012240- Vật liệu kỹ thuật", "", "", "Chọn 1 trong 2"], [43, 5, "", "1012800", "TN Vật liệu hàng không và xử lý vật liệu", 0, false, true, false, "", "", "Được, nếu ĐK được HP song hành", "", "1012790- Vật liệu hàng không và xử lý vật liệu", "", ""], [44, 5, "", "1012530", "Nguyên lý và dụng cụ gia công vật liệu", 3.5, false, true, false, "", "", "Được", "1012240- Vật liệu kỹ thuật", "", "", ""], [45, 5, "", "1012540", "TN Nguyên lý và dụng cụ gia công vật liệu", 0, false, true, false, "", "", "Được, nếu ĐK được HP song hành", "", "1012530- Nguyên lý và dụng cụ gia công vật liệu", "", ""], [46, 5, "", "1012550", "PBL 1: Thiết kế hệ thống cơ khí", 3, false, true, true, "", "", "Được, nếu ĐK được HP song hành", "1032790- Vẽ kỹ thuật cơ khí<br>1012840- Nguyên lý máy", "1012850- Chi tiết máy<br>1012490- Thiết kế hệ thống dẫn động cơ khí", "", ""], [47, 6, "", "1012230", "Toán CN 2: PP phần tử hữu hạn", 2, false, true, false, "", "", "Được", "1033070- Sức bền vật liệu", "", "", ""], [48, 6, "", "1012560", "Công nghệ gia công áp lực", 2, false, true, false, "", "", "Được", "1012240- Vật liệu kỹ thuật", "", "", ""], [49, 6, "", "1012570", "Cơ sở máy công cụ", 2, false, true, false, "", "", "Được", "1012490- Thiết kế hệ thống dẫn động cơ khí<br>1012850- Chi tiết máy", "", "", ""], [50, 6, "", "1012580", "Cơ sở công nghệ chế tạo máy", 3.5, false, true, false, "", "", "Được", "1012530- Nguyên lý và dụng cụ gia công vật liệu", "", "", ""], [51, 6, "", "1012590", "TN Cơ sở công nghệ chế tạo máy (0.5TC)", 0, false, true, false, "", "", "Được, nếu ĐK được HP song hành", "", "1012580- Cơ sở công nghệ chế tạo máy", "", ""], [52, 6, "", "1012640", "Kỹ thuật gia công CNC", 2, false, true, false, "", "", "Được", "1012530- Nguyên lý và dụng cụ gia công vật liệu", "", "", ""], [53, 6, "", "1010772", "Điều khiển thuỷ khí", 2, false, true, false, "", "", "Được", "1012390- Truyền động thủy khí<br>1012440- Cơ sở điều khiển hệ cơ khí", "", "", ""], [54, 6, "", "1012600", "Điều khiển logic và lập trình PLC", 2.5, false, true, false, "", "", "Được", "1012440- Cơ sở điều khiển hệ cơ khí", "", "", ""], [55, 6, "", "1012610", "TN Điều khiển logic và lập trình PLC", 0, false, true, false, "", "", "Được, nếu ĐK được HP song hành", "", "1012600- Điều khiển logic và lập trình PLC", "", ""], [56, 6, "", "1012620", "PBL 2: Hệ thống điều khiển thiết bị cơ khí", 3, false, true, false, "", "", "Được, nếu ĐK được HP song hành", "1012390- Truyền động thủy khí", "1012600- Điều khiển logic và lập trình PLC<br>1010772- Điều khiển thuỷ khí", "", ""], [57, 7, "", "2090160", "Chủ nghĩa Xã hội khoa học", 2, false, false, false, "2", "", "Được", "2090150- Triết học Mác - Lênin", "", "", ""], [58, 7, "", "1012630", "Toán CN 3: Quy hoạch TN trong cơ khí", 2.5, false, false, false, "1", "", "Được", "3190041- Xác suất thống kê", "", "", ""], [59, 7, "", "1012650", "Linh kiện điện tử và cảm biến công nghiệp", 3, false, true, false, "", "", "Được", "1012440- Cơ sở điều khiển hệ cơ khí", "", "", "Chọn 1 trong 2"], [60, 7, "", "1012610", "Kỹ thuật điện tử và cảm biến trong máy bay", 3, false, true, false, "", "", "Được", "1073431- Hóa đại cương<br>3050011- Vật lý 1<br>3050641- Vật lý 2", "", "", "Chọn 1 trong 2"], [61, 7, "", "1010132", "Công nghệ CAD/CAM", 1, false, true, false, "", "", "Được, nếu ĐK được HP song hành", "1022920- Kỹ thuật lập trình<br>1012530- Nguyên lý và dụng cụ gia công vật liệu", "1012660- PBL 3: Chế tạo với hỗ trợ của máy tính", "", ""], [62, 7, "", "1182550", "Kinh tế và quản lý doanh nghiệp", 2, false, true, false, "2", "", "Được", "2170020- Kinh tế chính trị Mác - Lênin", "", "", ""], [63, 7, "", "1012860", "Robot công nghiệp", 2.5, false, true, false, "", "", "Được", "1012490- Thiết kế hệ thống dẫn động cơ khí<br>1012600- Điều khiển logic và lập trình PLC", "", "", "Chọn 1 trong 2"], [64, 7, "", "1012870", "TH Robot công nghiệp", 0, false, true, false, "", "", "Được, nếu ĐK được HP song hành", "", "1012860- Robot công nghiệp", "", ""], [65, 7, "", "1017880", "Các hệ thống sản xuất tiên tiến", 2.5, false, true, false, "", "", "Được", "1012580- Cơ sở công nghệ chế tạo máy", "", "", "Chọn 1 trong 2"], [66, 7, "", "1012890", "Thiết bị gia công áp lực", 2, false, true, false, "", "", "Được", "1012560- Công nghệ gia công áp lực", "", "", ""], [67, 7, "", "1012900", "Thiết kế máy công cụ", 2, false, true, false, "", "", "Được", "1012570- Cơ sở máy công cụ", "", "", ""], [68, 7, "", "1012660", "PBL 3: Chế tạo với hỗ trợ của máy tính", 3, false, true, true, "", "", "Được", "1012580- Cơ sở công nghệ chế tạo máy<br>1012640- Kỹ thuật gia công CNC", "", "", ""], [69, 8, "", "1012910", "Tự động hóa quá trình sản xuất", 2, false, true, false, "", "", "Được", "1012650- Linh kiện điện tử và cảm biến công nghiệp<br>1012860- Robot công nghiệp", "", "", ""], [70, 8, "", "1012920", "Công nghệ chế tạo máy", 2, false, true, false, "", "", "Được, nếu ĐK được HP song hành", "1012580- Cơ sở công nghệ chế tạo máy<br>1012640- Kỹ thuật gia công CNC", "1012940- Trang bị công nghệ", "", ""], [71, 8, "", "1011263", "Bảo trì công nghiệp", 2, false, true, false, "", "", "Được", "1012570- Cơ sở máy công cụ<br>1012890- Thiết bị gia công áp lực", "", "", ""], [72, 8, "", "1053470", "Trang bị điện trong máy công nghiệp", 3, false, true, false, "", "", "Được", "1012570- Cơ sở máy công cụ", "", "", ""], [73, 8, "", "1012930", "Công nghệ gia công tiên tiến", 2, false, true, false, "", "", "Được", "1012580- Cơ sở công nghệ chế tạo máy", "", "", ""], [74, 8, "", "1012940", "Trang bị công nghệ", 2, false, true, false, "", "", "Được", "1012580- Cơ sở công nghệ chế tạo máy", "", "", ""], [75, 8, "", "1012950", "Ứng dụng CAD/CAE trong sản xuất", 1.5, false, true, false, "", "", "Được", "1012230- Toán CN 2: PP phần tử hữu hạn<br>1010132- Công nghệ CAD/CAM", "", "", ""], [76, 8, "", "1012960", "TH Ứng dụng CAD/CAE trong sản xuất (0.5TC)", 0, false, true, false, "", "", "Được, nếu ĐK được HP song hành", "", "1012950- Ứng dụng CAD/CAE trong sản xuất", "", ""], [77, 8, "", "1012260", "Thực tập kỹ thuật (CTM)", 2, false, true, false, "", "", "Được", "1012580- Cơ sở công nghệ chế tạo máy", "", "", ""], [78, 8, "", "1012970", "PBL 4: Thiết kế máy công cụ", 3, false, true, false, "", "", "Được", "1012900- Thiết kế máy công cụ", "", "", ""], [79, 9, "", "1012980", "Kỹ thuật đo cơ khí chính xác", 2, false, true, false, "", "", "Được", "1012680- Dụng sai và kỹ thuật đo", "", "", "Chọn 1 trong 2"], [80, 9, "", "1011283", "Anh văn CN Cơ khí", 2, false, true, false, "", "", "Được", "1012580- Cơ sở công nghệ chế tạo máy", "", "", "Chọn 1 trong 2"], [81, 9, "", "1012990", "Thiết kế nhà máy cơ khí", 2, false, true, false, "", "", "Được", "1012920- Công nghệ chế tạo máy<br>1012970- PBL 4: Thiết kế máy công cụ", "", "", "Chọn 1 trong 2"], [82, 9, "", "1013000", "Tối ưu hóa quá trình gia công cơ", 2, false, true, false, "", "", "Được", "1012580- Cơ sở công nghệ chế tạo máy", "", "", "Chọn 1 trong 2"], [83, 9, "", "1011093", "Kỹ thuật an toàn & Môi trường", 2, false, true, false, "", "", "Được", "1012560- Công nghệ gia công áp lực<br>1012570- Cơ sở máy công cụ", "", "", ""], [84, 9, "", "1013010", "Thiết kế tối ưu cho chế tạo", 2, false, true, false, "", "", "Được", "1012920- Công nghệ chế tạo máy", "", "", ""], [85, 9, "", "1013020", "Lắp ráp và quản lý chất lượng", 2, false, true, false, "", "", "Được", "1012910- Tự động hóa quá trình sản xuất", "", "", ""], [86, 9, "", "1013030", "Tư duy thiết kế và phát triển sản phẩm", 2, false, true, false, "", "", "Được", "1012920- Công nghệ chế tạo máy", "", "", ""], [87, 9, "", "1013040", "Kỹ thuật năng chuyển", 2, false, true, false, "", "", "Được", "1012850- Chi tiết máy", "", "", ""], [88, 9, "", "1013050", "Hệ thống sản xuất tự động", 2, false, true, false, "", "", "Được", "1012650- Linh kiện điện tử và cảm biến công nghiệp<br>1012860- Robot công nghiệp<br>1012910- Tự động hóa quá trình sản xuất", "", "", ""], [89, 9, "", "1013060", "PBL 5: Thiết kế QTCN chế tạo chi tiết máy", 3, false, true, false, "", "", "Được", "1012920- Công nghệ chế tạo máy<br>1012940- Trang bị công nghệ", "", "", ""], [90, 10, "", "1014390", "Thực tập tốt nghiệp (CTM)", 5, false, true, true, "", "", "Được", "", "", "1012660- PBL 3: Chế tạo với hỗ trợ của máy tính", ""], [91, 10, "", "1010692", "Đồ án Tốt nghiệp Cơ khí chế tạo", 10, false, false, false, "", "", "Được", "1012260- Thực tập kỹ thuật (CTM)", "", "1012660- PBL 3: Chế tạo với hỗ trợ của máy tính", ""]];

function renderCurriculum(){
  const el = document.getElementById("curriculumBody");
  if(!el) return;
  el.innerHTML = curriculumData.map(r => `
    <tr>
      <td>${r[0]}</td>
      <td>${r[1]}</td>
      <td>${r[2]}</td>
      <td class="text-left">${r[3]}</td>
      <td class="text-left">${r[4]}</td>
      <td>${r[5]}</td>
      <td class="survey-check">${r[6] ? "✓" : ""}</td>
      <td class="survey-check">${r[7] ? "✓" : ""}</td>
      <td class="survey-check">${r[8] ? "✓" : ""}</td>
      <td>${r[9]}</td>
      <td>${r[10]}</td>
      <td>${r[11]}</td>
      <td class="text-left">${r[12]}</td>
      <td class="text-left">${r[13]}</td>
      <td class="text-left">${r[14]}</td>
      <td class="text-left">${r[15]}</td>
    </tr>
  `).join("");
}

applyTargetFinals();renderProfile();renderSummary();renderGrades();renderTuition();renderSchedule();renderCurrentTerm();renderCurriculum();
document.querySelectorAll("[data-view]").forEach(button=>button.addEventListener("click",()=>{setView(button.dataset.view);button.blur()}));

// Profile tab switching: "Thông tin nhân thân & ngành học" vs "Đổi mật khẩu"
document.querySelectorAll("[data-profile-tab]").forEach(tab=>{
  tab.addEventListener("click",()=>{
    const activeTab = tab.dataset.profileTab;
    document.querySelectorAll("[data-profile-tab]").forEach(t=>t.classList.toggle("active",t===tab));
    const profileView = document.getElementById("profileView");
    const passwordSection = document.getElementById("passwordSection");
    if(!profileView||!passwordSection) return;
    const infoBodies = profileView.querySelectorAll(".profile-box, .family-box");
    if(activeTab === "password"){
      infoBodies.forEach(b=>b.style.display="none");
      profileView.appendChild(passwordSection);
      passwordSection.style.display="block";
    } else {
      infoBodies.forEach(b=>b.style.display="");
      passwordSection.style.display="none";
    }
  });
});

// Close dropdown menus when clicking on a dropdown item (data-view button)
document.querySelectorAll(".dropdown [data-view]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".personal-menu").forEach(m=>m.classList.remove("open"));
  });
});

// ponytail: one check covers formula parsing, grade scale, and target GPA math.
const targets={"1/2024-2025":3.50,"2/2024-2025":3.21,"1/2025-2026":3.24,"2/2025-2026":3.90};
const actuals=Object.fromEntries(Object.keys(targets).map(sem=>[sem,semesterStats(sem).gpa4]));
const validCourses=courses.every(c=>{const parts=[...c.formula.matchAll(/\[([A-Z]+)\]\*([0-9.]+)/g)],sum=parts.reduce((s,p)=>s+Number(p[2]),0),score=courseScore(c);return !parts.length||Math.abs(sum-1)<.001&&parts.every(p=>{const v=c[p[1].toLowerCase()];return v===undefined||v>=0&&v<=10})&&(score===undefined||Math.abs(score-c.final)<.051)});
const noNearbyRepeats=["bt","ck","gk","qt","tn"].every(key=>courses.every((course,i)=>course[key]===undefined||![1,2].some(gap=>courses[i-gap]?.[key]===course[key])));
const scholarship2025=scholarshipStats("1/2025-2026"),stats2025=semesterStats("1/2025-2026");
console.assert(grade(9.5)[0]==="A+"&&grade(9.4)[0]==="A"&&grade(8.5)[0]==="A"&&grade(8.4)[0]==="B+"&&courseScore(courses.find(c=>c.n===1))===9.4&&tuition.reduce((s,r)=>s+r[3],0)===13515000,"academic data calculation failed");
console.assert(validCourses&&noNearbyRepeats&&scholarship2025.credits===11.5&&Math.abs(scholarship2025.gpa10-stats2025.gpa10)>.001&&Math.abs(actuals["1/2024-2025"]-3.50)<.005&&Math.abs(actuals["2/2024-2025"]-3.21)<.005&&Math.abs(actuals["1/2025-2026"]-3.24)<.007&&Math.abs(actuals["2/2025-2026"]-3.90)<.007,"target GPA check failed");

