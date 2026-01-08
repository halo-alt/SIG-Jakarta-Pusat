var suhu_dht22_titik1 = "";
var suhu_dht22_titik2 = "";
var suhu_dht22_titik3 = "";
var suhu_dht22_titik4 = "";
var suhu_dht22_titik5 = "";
var suhu_dht22_titik6 = "";
var suhu_dht22_titik7 = "";

var kelembaban_dht22_titik1 = "...";
var kelembaban_dht22_titik2 = "...";
var kelembaban_dht22_titik3 = "...";
var kelembaban_dht22_titik4 = "...";
var kelembaban_dht22_titik5 = "...";
var kelembaban_dht22_titik6 = "...";
var kelembaban_dht22_titik7 = "...";

function fetchData() {
  var apiUrl =
    "https://api.thingspeak.com/channels/3222293/feeds/last.json?timezone=Asia%2FJakarta&api_key=XZZPNV5V4AO6TAX6";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);

      suhu_dht22_titik1 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik1 = parseFloat(data.field3).toFixed(2);

    })
    .catch((error) => console.error("Error fetching data:", error));

    var apiUrl2 =
    "https://api.thingspeak.com/channels/3222295/feeds/last.json?timezone=Asia%2FJakarta&api_key=G1NMDAZOUXIFAM8H";

  fetch(apiUrl2)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);

      suhu_dht22_titik2 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik2 = parseFloat(data.field3).toFixed(2);

    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl3 =
    "https://api.thingspeak.com/channels/3222296/feeds/last.json?timezone=Asia%2FJakarta&api_key=MMRW11T56YPJTG3T";

  fetch(apiUrl3)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik3 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik3 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

      var apiUrl4 =
    "https://api.thingspeak.com/channels/3222298/feeds/last.json?timezone=Asia%2FJakarta&api_key=YB5H7IMXKYLM07CU";

  fetch(apiUrl4)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik4 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik4 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

      var apiUrl5 =
    "https://api.thingspeak.com/channels/3222300/feeds/last.json?timezone=Asia%2FJakarta&api_key=PPAAH2C5LNFZD5OY";

  fetch(apiUrl5)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik5 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik5 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

      var apiUrl6 =
    "https://api.thingspeak.com/channels/3222302/feeds/last.json?timezone=Asia%2FJakarta&api_key=26EZWXN74YD88YD7";

  fetch(apiUrl6)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik6 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik6 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

      var apiUrl7 =
    "https://api.thingspeak.com/channels/3222306/feeds/last.json?timezone=Asia%2FJakarta&api_key=JHU3NRBRV03QFNK4";

  fetch(apiUrl7)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik7 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik7 = parseFloat(data2.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

setInterval(fetchData, 5000);

var json_Radius_Pemantauan_3 = {
  type: "FeatureCollection",
  name: "Radius_Pemantauan_3",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 1",
        HubDist: 1.37234,
        path: "C:\\Users\\AlvianAhmad\\Downloads\\TA_SIG\\result\\Titik 1.shp",
        Suhu: suhu_dht22_titik1,
        Kelembaban: kelembaban_dht22_titik1,
        xcoord: 106.85891,
        ycoord: -6.18516,
        Foto: "foto1.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.864333339439312, -6.185145332247629],
              [106.864073914702729, -6.186822638531697],
              [106.86330928258019, -6.188337621136909],
              [106.862114286534492, -6.189541981955744],
              [106.860605899613063, -6.190317827383653],
              [106.858931774882478, -6.19058920947538],
              [106.857255791488853, -6.190329561326104],
              [106.855742011436647, -6.18956429844147],
              [106.854538618116976, -6.188368331143752],
              [106.85376340953637, -6.186858731421239],
              [106.853492266862105, -6.185183272197389],
              [106.853751727277427, -6.183505961224084],
              [106.854516387923695, -6.181990986048373],
              [106.855711394442977, -6.180786641939958],
              [106.857219769787321, -6.180010816120574],
              [106.858893865312197, -6.17973944904569],
              [106.860569813027098, -6.179999101884203],
              [106.862083564555562, -6.180764357339334],
              [106.863286947401662, -6.181960307926635],
              [106.864062167559339, -6.18346988804062],
              [106.864333339439312, -6.185145332247629],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 2",
        HubDist: 2.93824,
        path: "C:\\Users\\AlvianAhmad\\Downloads\\TA_SIG\\result\\Titik 2.shp",
        Suhu: suhu_dht22_titik2,
        Kelembaban: kelembaban_dht22_titik2,
        xcoord: 106.83981,
        ycoord: -6.14823,
        Foto: "Foto2.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.845232607924544, -6.148212429033529],
              [106.844973103507456, -6.149889740831509],
              [106.844208430463738, -6.151404698367248],
              [106.84301343629177, -6.152609005989708],
              [106.841505093871206, -6.153384775315701],
              [106.839831051908021, -6.15365606586972],
              [106.83815518142346, -6.153396319726107],
              [106.83664153333703, -6.152630961992961],
              [106.83543827809217, -6.151434912274479],
              [106.834663200164044, -6.149925250612741],
              [106.83439216793532, -6.148249755973881],
              [106.834651707801029, -6.146572439557641],
              [106.835416409158057, -6.145057489433776],
              [106.836611413693333, -6.143853198422244],
              [106.838119744568786, -6.143077448561422],
              [106.839793757488223, -6.142806172891783],
              [106.841469592524149, -6.143065923653658],
              [106.842983212297256, -6.143831273974929],
              [106.844186457178807, -6.145027307082485],
              [106.844961546652073, -6.146536949279051],
              [106.845232607924544, -6.148212429033529],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 3",
        HubDist: 5.20652,
        path: "C:\\Users\\AlvianAhmad\\Downloads\\TA_SIG\\result\\Titik 3.shp",
        Suhu: suhu_dht22_titik3,
        Kelembaban: kelembaban_dht22_titik3,
        xcoord: 106.84296,
        ycoord: -6.18247,
        Foto: "Foto3.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.848378346798071, -6.182450381762843],
              [106.848118868174595, -6.184127695077239],
              [106.847354185298059, -6.185642667279565],
              [106.846159146610944, -6.186847001273932],
              [106.844650729347464, -6.187622806082469],
              [106.842976589553487, -6.187894137744181],
              [106.841300607851679, -6.187634434302975],
              [106.839786846075114, -6.186869116688577],
              [106.838583485814397, -6.185673100587266],
              [106.837808321827282, -6.184163462763656],
              [106.837537230906747, -6.182487979862647],
              [106.837796745167921, -6.180810661941525],
              [106.838561456487199, -6.17929569721572],
              [106.839756505557929, -6.178091379925341],
              [106.841264911179721, -6.177315594667906],
              [106.842939021753423, -6.177044277936552],
              [106.844614967817535, -6.177303985984485],
              [106.846128701151358, -6.178069296122363],
              [106.847332051028459, -6.179265295519684],
              [106.848107226657277, -6.180774913792191],
              [106.848378346798071, -6.182450381762843],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 4",
        HubDist: 5.79238,
        path: "C:\\Users\\AlvianAhmad\\Downloads\\TA_SIG\\result\\Titik 4.shp",
        Suhu: suhu_dht22_titik4,
        Kelembaban: kelembaban_dht22_titik4,
        xcoord: 106.80995,
        ycoord: -6.21264,
        Foto: "Foto4.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.815372806787607, -6.212625756391596],
              [106.815113232358073, -6.214303086821714],
              [106.814348423024057, -6.215818050300613],
              [106.813153239613271, -6.217022350561354],
              [106.811644673552578, -6.217798099916218],
              [106.809970395488577, -6.218069359838029],
              [106.808294299610097, -6.217809575414152],
              [106.80678045894183, -6.217044175529897],
              [106.80557706279015, -6.215848083949644],
              [106.804801909399984, -6.214338384838351],
              [106.80453087449159, -6.212662860834548],
              [106.804790484665901, -6.210985525997892],
              [106.805555322395463, -6.209470570171184],
              [106.806750516006431, -6.208266286698483],
              [106.808259070175822, -6.207490556855054],
              [106.809933318799111, -6.207219311715362],
              [106.811609378932815, -6.207479100545777],
              [106.813123191205534, -6.20824449277784],
              [106.814326577157033, -6.209440567570051],
              [106.815101742438486, -6.210950247169912],
              [106.815372806787607, -6.212625756391596],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 5",
        HubDist: 5.87091,
        path: "C:\\Users\\AlvianAhmad\\Downloads\\TA_SIG\\result\\Titik 5.shp",
        Suhu: suhu_dht22_titik5,
        Kelembaban: kelembaban_dht22_titik5,
        xcoord: 106.84831,
        ycoord: -6.17185,
        Foto: "../../TA_SIG/Foto/Foto 1.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.853727944011268, -6.171831022156456],
              [106.853468478221387, -6.173508332133813],
              [106.852703819118403, -6.1750233035049],
              [106.851508812819347, -6.176227639261024],
              [106.850000433383926, -6.177003448256012],
              [106.848326333146716, -6.177274786119961],
              [106.846650388848914, -6.177015090286942],
              [106.845136658655363, -6.176249780936661],
              [106.843933321063489, -6.175053772940618],
              [106.843158168616185, -6.173544142265878],
              [106.842887076985235, -6.171868664856672],
              [106.84314657836471, -6.17019135023542],
              [106.843911265898797, -6.168676386299821],
              [106.845106282610757, -6.167472067218462],
              [106.846614650463522, -6.166696277768326],
              [106.848288721546666, -6.166424954853842],
              [106.849964630254888, -6.166684655330755],
              [106.851478332017322, -6.167449957245549],
              [106.852681659196307, -6.168645948566827],
              [106.853456823226267, -6.170155559696717],
              [106.853727944011268, -6.171831022156456],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 6",
        HubDist: 6.79214,
        path: "C:\\Users\\AlvianAhmad\\Downloads\\TA_SIG\\result\\Titik 6.shp",
        Suhu: suhu_dht22_titik6,
        Kelembaban: kelembaban_dht22_titik6,
        xcoord: 106.85566,
        ycoord: -6.18432,
        Foto: "Foto2.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.86108447498907, -6.184297466256349],
              [106.86082503913785, -6.185974773956095],
              [106.860060396847601, -6.187489754338072],
              [106.858865392578934, -6.188694109511126],
              [106.857357000186795, -6.189469946423654],
              [106.855682873274972, -6.189741317965701],
              [106.854006891203284, -6.189481658267657],
              [106.852493115845434, -6.188716383967998],
              [106.851289730130489, -6.187520406507641],
              [106.850514531317984, -6.186010798869368],
              [106.850243399617327, -6.184335334749729],
              [106.850502871137323, -6.182658022377304],
              [106.851267541933794, -6.181143049433745],
              [106.852462556657699, -6.179938710968988],
              [106.853970937460588, -6.179162893652631],
              [106.855645035165324, -6.178891537109561],
              [106.857320981568208, -6.179151201480284],
              [106.858834728419851, -6.179916468341525],
              [106.860038103679528, -6.181112429093584],
              [106.860813314081312, -6.182622017135686],
              [106.86108447498907, -6.184297466256349],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 7",
        HubDist: 7.22748,
        path: "C:\\Users\\AlvianAhmad\\Downloads\\TA_SIG\\result\\Titik 7.shp",
        Suhu: suhu_dht22_titik7,
        Kelembaban: kelembaban_dht22_titik7,
        xcoord: 106.80831,
        ycoord: -6.1698,
        Foto: "Foto1.png",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.813730146958463, -6.169785196685442],
              [106.813470548580014, -6.171462524273892],
              [106.81270575994229, -6.172977471049881],
              [106.811510639868658, -6.174181742394044],
              [106.810002173587861, -6.174957453465773],
              [106.808328021960676, -6.175228669499544],
              [106.806652066767455, -6.174968839885238],
              [106.805138367228537, -6.174203397927939],
              [106.803935098814037, -6.173007271497855],
              [106.803160047263347, -6.171497548154727],
              [106.802889078346595, -6.169822012894837],
              [106.80314871223699, -6.168144680873217],
              [106.80391352911866, -6.166629741660897],
              [106.805108659380011, -6.165425486988176],
              [106.806617113900941, -6.164649795327739],
              [106.808291236312527, -6.164378594030657],
              [106.809967155993803, -6.164638428078131],
              [106.811480827288776, -6.165403862471761],
              [106.812684085515556, -6.166599972230403],
              [106.813459148826112, -6.168109676162241],
              [106.813730146958463, -6.169785196685442],
            ],
          ],
        ],
      },
    },
  ],
};

function updateGeoJSON() {
  json_Radius_Pemantauan_3.features[0].properties.Suhu = suhu_dht22_titik1;
  json_Radius_Pemantauan_3.features[1].properties.Suhu = suhu_dht22_titik2;
  json_Radius_Pemantauan_3.features[2].properties.Suhu = suhu_dht22_titik3;
  json_Radius_Pemantauan_3.features[3].properties.Suhu = suhu_dht22_titik4;
  json_Radius_Pemantauan_3.features[4].properties.Suhu = suhu_dht22_titik5;
  json_Radius_Pemantauan_3.features[5].properties.Suhu = suhu_dht22_titik6;
  json_Radius_Pemantauan_3.features[6].properties.Suhu = suhu_dht22_titik7;

  json_Radius_Pemantauan_3.features[0].properties.Kelembaban = kelembaban_dht22_titik1;
  json_Radius_Pemantauan_3.features[1].properties.Kelembaban = kelembaban_dht22_titik2;
  json_Radius_Pemantauan_3.features[2].properties.Kelembaban = kelembaban_dht22_titik3;
  json_Radius_Pemantauan_3.features[3].properties.Kelembaban = kelembaban_dht22_titik4;
  json_Radius_Pemantauan_3.features[4].properties.Kelembaban = kelembaban_dht22_titik5;
  json_Radius_Pemantauan_3.features[5].properties.Kelembaban = kelembaban_dht22_titik6;
  json_Radius_Pemantauan_3.features[6].properties.Kelembaban = kelembaban_dht22_titik7;
}

function logJson() {
  updateGeoJSON();
  console.log("===============d=================");
  console.log(json_Radius_Pemantauan_3.features[0].properties.Suhu);
  console.log("===========================a=====");
}

setInterval(logJson, 5000);