const D=window.PATTERN_DATA;
const state=JSON.parse(localStorage.getItem('algopattern-state')||'{"solved":[],"bookmarked":[],"theme":"light"}');
console.log('Initial state loaded:', state);
console.log('localStorage available:', typeof localStorage !== 'undefined');
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const techniques=D.techniques;
const meta=t=>D.metadata[t]||{summary:"",signals:[],complexity:"See individual problems"};

function save(){
  const stateStr = JSON.stringify(state);
  console.log('Saving state:', state);
  localStorage.setItem('algopattern-state', stateStr);
  const verify = localStorage.getItem('algopattern-state');
  console.log('Verified saved:', verify === stateStr ? 'SUCCESS' : 'FAILED');
}
function problemsFor(t){return D.problems.filter(p=>p.technique===t)}
function pct(t){let a=problemsFor(t),s=a.filter(p=>state.solved.includes(key(p))).length;return a.length?Math.round(s/a.length*100):0}
function key(p){return p.id+'|'+p.title}
function difficultyBadge(p){return `<span class="diff ${p.difficulty}">${p.difficulty}</span>`}

function renderTechNav(){
  $('#techNav').innerHTML=techniques.map(t=>`<div class="tech-link" onclick="openTechnique('${esc(t).replaceAll("'","&#39;")}')">${esc(t.replace(/ &.*$/,''))}</div>`).join('');
}
function nav(view){
  $$('.nav').forEach(x=>x.classList.toggle('active',x.dataset.view===view));
  $$('.view').forEach(x=>x.classList.toggle('active',x.id===view));
}
$$('.nav').forEach(b=>b.addEventListener('click',()=>{nav(b.dataset.view); renderView(b.dataset.view)}));

function renderDashboard(){
 const total=D.problems.length, solved=D.problems.filter(p=>state.solved.includes(key(p))).length;
 const easy=D.problems.filter(p=>p.difficulty==='Easy').length, med=D.problems.filter(p=>p.difficulty==='Medium').length, hard=D.problems.filter(p=>p.difficulty==='Hard').length;
 $('#dashboard').innerHTML=`
 <div class="hero"><div><div class="eyebrow">PATTERN RECOGNITION</div><h1>Think in patterns.<br>Then solve the problem.</h1><p>A focused practice lab built from your pattern-recognition guide. Learn what a problem is trying to tell you before reaching for code.</p></div></div>
 <div class="stats"><div class="stat"><div class="num">${total}</div><small>Problems in guide</small></div><div class="stat"><div class="num">${solved}</div><small>Solved</small></div><div class="stat"><div class="num">${state.bookmarked.length}</div><small>Bookmarked</small></div><div class="stat"><div class="num">${total?Math.round(solved/total*100):0}%</div><small>Overall progress</small></div></div>
 <div class="section-head"><h2>Choose a technique</h2><span class="muted">${easy} Easy · ${med} Medium · ${hard} Hard</span></div>
 <div class="grid">${techniques.map(t=>`<div class="card tech-card" onclick="openTechnique('${esc(t).replaceAll("'","&#39;")}')"><div class="eyebrow">${esc(t)}</div><h3>${problemsFor(t).length} problems</h3><div class="muted">${esc(meta(t).summary)}</div><div class="bar"><i style="width:${pct(t)}%"></i></div><small class="muted">${pct(t)}% complete</small></div>`).join('')}</div>`;
}
function renderPatterns(){
 $('#patterns').innerHTML=`<div class="hero"><div><div class="eyebrow">PATTERN LIBRARY</div><h1>How do I recognize it?</h1><p>Start with the signals you see in a problem. Then connect them to a technique and its practice set.</p></div></div>
 <div class="grid">${techniques.map(t=>{let m=meta(t);return `<div class="card"><div class="eyebrow">${esc(t)}</div><h3>${esc(m.summary)}</h3><div class="chips">${(m.signals||[]).map(x=>`<span class="chip">${esc(x)}</span>`).join('')}</div><div class="section-head"><b>Complexity</b></div><div class="muted">${esc(m.complexity)}</div><br><button class="btn" onclick="openTechnique('${esc(t).replaceAll("'","&#39;")}')">Explore problems →</button></div>`}).join('')}</div>`;
}
function problemCard(p){
 const solved=state.solved.includes(key(p)), bm=state.bookmarked.includes(key(p));
 const titleEsc = esc(p.title).replace(/'/g, "&#39;");
 return `<article class="problem ${solved?'solved':''}">
   <div class="numcode">#${p.id}</div>
   <div><div class="ptitle">${esc(p.title)}</div><div class="pattern">${esc(p.pattern)}</div><div class="chips"><span class="chip">${esc(p.technique)}</span></div></div>
   <div class="actions">${difficultyBadge(p)}<button class="star ${bm?'on':''}" title="Bookmark" onclick="toggleBookmark(${p.id},'${titleEsc}')">★</button><input class="check" type="checkbox" ${solved?'checked':''} title="Mark solved" onchange="toggleSolved(${p.id},'${titleEsc}')"><a class="btn" target="_blank" rel="noopener" href="${p.link}">Solve ↗</a></div>
 </article>`;
}
function renderProblems(){
 const q=$('#globalSearch').value.trim().toLowerCase();
 let list=D.problems.filter(p=>!q || [p.title,p.pattern,p.technique,String(p.id),p.difficulty].some(x=>String(x).toLowerCase().includes(q)));
 $('#problems').innerHTML=`<div class="hero"><div><div class="eyebrow">PRACTICE</div><h1>Problem set</h1><p>Search by title, number, difficulty, technique or recognition pattern.</p></div></div>
 <div class="toolbar"><select class="select" id="diffFilter"><option value="">All difficulties</option><option>Easy</option><option>Medium</option><option>Hard</option></select><select class="select" id="techFilter"><option value="">All techniques</option>${techniques.map(t=>`<option>${esc(t)}</option>`).join('')}</select><select class="select" id="statusFilter"><option value="">All status</option><option value="unsolved">Unsolved</option><option value="solved">Solved</option><option value="bookmarked">Bookmarked</option></select></div>
 <div id="problemList" class="problem-list"></div>`;
 const draw=()=>{let d=$('#diffFilter').value,t=$('#techFilter').value,s=$('#statusFilter').value;let a=list.filter(p=>(!d||p.difficulty===d)&&(!t||p.technique===t)&&(!s||(s==='solved'&&state.solved.includes(key(p)))||(s==='unsolved'&&!state.solved.includes(key(p)))||(s==='bookmarked'&&state.bookmarked.includes(key(p)))));$('#problemList').innerHTML=a.length?a.map(problemCard).join(''):`<div class="empty">No problems match these filters.</div>`};
 ['diffFilter','techFilter','statusFilter'].forEach(id=>$('#'+id).addEventListener('change',draw)); draw();
}
function renderDecision(){
 $('#decision').innerHTML=`<div class="hero"><div><div class="eyebrow">DECISION GUIDE</div><h1>What should I reach for?</h1><p>A compact route through the techniques in the guide. Use the visible clue, then inspect the matching practice set.</p></div></div><div class="decision">
 <div class="decision-step"><h3>1 · What is the input telling you?</h3><div class="decision-options">
 <button class="choice" onclick="decision('sorted')">The array is sorted / nearly sorted</button>
 <button class="choice" onclick="decision('frequency')">I need counts, complements, or fast lookup</button>
 <button class="choice" onclick="decision('range')">I have many range queries / cumulative values</button>
 <button class="choice" onclick="decision('graph')">There are nodes, edges, or connectivity</button>
 <button class="choice" onclick="decision('choice')">I repeatedly choose min/max or Top K</button>
 <button class="choice" onclick="decision('opt')">It asks for min/max/count with repeated subproblems</button>
 </div></div><div id="decisionResult"></div></div>`;
}
function decision(x){
 const map={sorted:['BINARY SEARCH','TWO POINTERS','SORTING'],frequency:['HASH TABLES'],range:['PREFIX SUM','FENWICK TREE','SEGMENT TREE & LAZY PROPAGATION'],graph:['GRAPHS - BFS & DFS','DISJOINT SET UNION','DIJKSTRA & WEIGHTED GRAPHS'],choice:['HEAPS / PRIORITY QUEUES','SORTING'],opt:['DYNAMIC PROGRAMMING']};
 const a=map[x]||[];
 $('#decisionResult').innerHTML=`<div class="card"><h3>Investigate these techniques</h3><div class="chips">${a.map(t=>`<button class="btn" onclick="openTechnique('${esc(t).replaceAll("'","&#39;")}')">${esc(t)}</button>`).join(' ')}</div></div>`;
}
function renderProgress(){
 const total=D.problems.length, solved=D.problems.filter(p=>state.solved.includes(key(p))).length;
 $('#progress').innerHTML=`<div class="hero"><div><div class="eyebrow">TRACKING</div><h1>Your progress</h1><p>Progress is stored locally in this browser. No login or backend required.</p></div></div>
 <div class="card"><h3>${solved} / ${total} solved</h3><div class="bar"><i style="width:${total?solved/total*100:0}%"></i></div><div class="muted">${total?Math.round(solved/total*100):0}% complete</div></div>
 <div class="section-head"><h2>By technique</h2></div><div class="grid">${techniques.map(t=>`<div class="card"><b>${esc(t)}</b><div class="bar"><i style="width:${pct(t)}%"></i></div><small class="muted">${problemsFor(t).filter(p=>state.solved.includes(key(p))).length}/${problemsFor(t).length} solved</small></div>`).join('')}</div>`;
}
function renderView(v){({dashboard:renderDashboard,patterns:renderPatterns,problems:renderProblems,decision:renderDecision,progress:renderProgress}[v]||renderDashboard)()}
function openTechnique(t){nav('problems');renderProblems();setTimeout(()=>{let s=$('#techFilter');if(s){s.value=t;s.dispatchEvent(new Event('change'))}},0)}
function toggleSolved(id,title){
  let k=id+'|'+title;
  console.log('Toggle solved called for:', k, 'Current state:', state);
  state.solved=state.solved.includes(k)?state.solved.filter(x=>x!==k):[...state.solved,k];
  console.log('Updated state.solved:', state.solved);
  save();
  renderDashboard();
  renderProgress();
  if($('#problems').classList.contains('active'))renderProblems();
}
function toggleBookmark(id,title){
  let k=id+'|'+title;
  console.log('Toggle bookmark called for:', k);
  state.bookmarked=state.bookmarked.includes(k)?state.bookmarked.filter(x=>x!==k):[...state.bookmarked,k];
  console.log('Updated state.bookmarked:', state.bookmarked);
  save();
  renderDashboard();
  if($('#problems').classList.contains('active'))renderProblems();
}
$('#globalSearch').addEventListener('input',()=>{if(!$('#problems').classList.contains('active'))nav('problems');renderProblems()});
$('#themeBtn').addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark';document.body.classList.toggle('dark',state.theme==='dark');save()});

// Mobile menu toggle
const menuBtn = $('#menuBtn');
const sidebar = $('aside.sidebar');
if(menuBtn && sidebar) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  // Close sidebar when clicking on nav items
  $$('.sidebar .nav').forEach(nav => {
    nav.addEventListener('click', () => {
      sidebar.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
  
  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if(!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

if(state.theme==='dark'){document.body.classList.add('dark');};
renderTechNav();renderDashboard();

/* =========================
   PATTERN MAP
   ========================= */

let mapScale = 1;

const mapStructure = {
  root: "PROBLEM SOLVING",

  categories: [
    {
      name: "Problem Signals",
      nodes: [
        "Sorted / Monotonic",
        "Frequency / Lookup",
        "Range Queries",
        "Connectivity",
        "Repeated Min / Max",
        "Optimization / Counting"
      ]
    },

    {
      name: "Algorithms",
      nodes: [
        "Binary Search",
        "Sorting",
        "Two Pointers",
        "Prefix Sum",
        "Dynamic Programming",
        "BFS / DFS",
        "Dijkstra"
      ]
    },

    {
      name: "Data Structures",
      nodes: [
        "Hash Table",
        "Heap / Priority Queue",
        "DSU",
        "Fenwick Tree",
        "Segment Tree"
      ]
    }
  ]
};

const mapRelations = [
  ["Sorted / Monotonic", "Binary Search"],
  ["Sorted / Monotonic", "Two Pointers"],
  ["Sorted / Monotonic", "Sorting"],

  ["Frequency / Lookup", "Hash Table"],

  ["Range Queries", "Prefix Sum"],
  ["Range Queries", "Fenwick Tree"],
  ["Range Queries", "Segment Tree"],

  ["Connectivity", "BFS / DFS"],
  ["Connectivity", "DSU"],
  ["Connectivity", "Dijkstra"],

  ["Repeated Min / Max", "Heap / Priority Queue"],
  ["Repeated Min / Max", "Sorting"],

  ["Optimization / Counting", "Dynamic Programming"]
];

const mapNodeDetails = {

  "Sorted / Monotonic": {
    type: "Problem Signal",
    description:
      "The input or answer space has an ordering or monotonic property.",
    signals: [
      "Sorted array",
      "Monotonic condition",
      "First / last valid position",
      "Minimum feasible answer"
    ]
  },

  "Frequency / Lookup": {
    type: "Problem Signal",
    description:
      "You repeatedly need to know whether something has appeared or how often it appears.",
    signals: [
      "Frequency counting",
      "Complement lookup",
      "Seen before",
      "Grouping"
    ]
  },

  "Range Queries": {
    type: "Problem Signal",
    description:
      "The problem repeatedly asks about a range or interval of values.",
    signals: [
      "Subarray sum",
      "Range sum",
      "Dynamic range query",
      "Prefix information"
    ]
  },

  "Connectivity": {
    type: "Problem Signal",
    description:
      "The problem asks whether objects, nodes, or groups are connected.",
    signals: [
      "Connected components",
      "Reachability",
      "Cycle detection",
      "Shortest path"
    ]
  },

  "Repeated Min / Max": {
    type: "Problem Signal",
    description:
      "You repeatedly need the smallest/largest available element.",
    signals: [
      "Top K",
      "Scheduling",
      "Repeated extraction",
      "Streaming values"
    ]
  },

  "Optimization / Counting": {
    type: "Problem Signal",
    description:
      "The same smaller states appear repeatedly while computing a minimum, maximum, or number of ways.",
    signals: [
      "Minimum",
      "Maximum",
      "Count ways",
      "Choose / skip"
    ]
  }
};

function getMapProblems(technique) {

  if (technique === "Binary Search")
    return D.problems.filter(p =>
      p.technique === "BINARY SEARCH"
    );

  if (technique === "Sorting")
    return D.problems.filter(p =>
      p.technique === "SORTING"
    );

  if (technique === "Two Pointers")
    return D.problems.filter(p =>
      p.technique === "TWO POINTERS"
    );

  if (technique === "Prefix Sum")
    return D.problems.filter(p =>
      p.technique === "PREFIX SUM"
    );

  if (technique === "Dynamic Programming")
    return D.problems.filter(p =>
      p.technique === "DYNAMIC PROGRAMMING"
    );

  if (technique === "BFS / DFS")
    return D.problems.filter(p =>
      p.technique === "GRAPHS - BFS & DFS"
    );

  if (technique === "DSU")
    return D.problems.filter(p =>
      p.technique === "DISJOINT SET UNION"
    );

  if (technique === "Fenwick Tree")
    return D.problems.filter(p =>
      p.technique === "FENWICK TREE"
    );

  if (technique === "Segment Tree")
    return D.problems.filter(p =>
      p.technique === "SEGMENT TREE & LAZY PROPAGATION"
    );

  if (technique === "Dijkstra")
    return D.problems.filter(p =>
      p.technique === "DIJKSTRA & WEIGHTED GRAPHS"
    );

  if (technique === "Heap / Priority Queue")
    return D.problems.filter(p =>
      p.technique.includes("HEAP")
    );

  if (technique === "Hash Table")
    return D.problems.filter(p =>
      p.technique.includes("HASH")
    );

  return [];
}

function renderPatternMap() {

  const view = document.querySelector("#patternmap");

  view.innerHTML = `
    <div class="pattern-map-page">

      <div class="pattern-map-header">

        <div>
          <div class="eyebrow">
            PATTERN MAP
          </div>

          <h1>
            See how problems connect.
          </h1>

          <p>
            Explore the relationship between problem signals,
            algorithms, data structures and the problems you
            should practice.
          </p>
        </div>

        <div class="map-controls">
          <button onclick="zoomMap(0.1)">+</button>
          <button onclick="zoomMap(-0.1)">−</button>
          <button onclick="resetMap()">Reset</button>
        </div>

      </div>


      <div class="map-legend">

        <span>● Problem Signal</span>
        <span>● Algorithm</span>
        <span>● Data Structure</span>
        <span>● Practice Problems</span>

      </div>


      <div class="pattern-map-container">

        <div
          id="patternMapCanvas"
          class="pattern-map-canvas"
        >

          <svg
            id="patternMapSvg"
            class="pattern-map-svg"
            viewBox="0 0 1500 900"
          ></svg>

        </div>


        <div
          id="mapInfo"
          class="map-info"
        >
          <h3>Pattern Map</h3>

          <p>
            Click a node to inspect its role,
            recognition signals and practice problems.
          </p>
        </div>

      </div>

    </div>
  `;

  buildMap();
}

function buildMap() {

  const canvas =
    document.querySelector("#patternMapCanvas");

  const svg =
    document.querySelector("#patternMapSvg");

  const positions = {};

  createMapNode(
    canvas,
    "PROBLEM SOLVING",
    "root",
    750,
    80
  );

  const categories = [
    {
      name: "Problem Signals",
      x: 300,
      y: 250
    },

    {
      name: "Algorithms",
      x: 750,
      y: 250
    },

    {
      name: "Data Structures",
      x: 1200,
      y: 250
    }
  ];


  categories.forEach(category => {

    createMapNode(
      canvas,
      category.name,
      "category",
      category.x,
      category.y
    );

    positions[category.name] = {
      x: category.x,
      y: category.y
    };

  });


  const signalX = 300;

  mapStructure.categories[0].nodes.forEach(
    (node, index) => {

      const y = 390 + index * 75;

      createMapNode(
        canvas,
        node,
        "technique",
        signalX,
        y
      );

      positions[node] = {
        x: signalX,
        y
      };

      drawLine(
        svg,
        signalX,
        y,
        300,
        250
      );

    }
  );


  const algorithmX = 750;

  mapStructure.categories[1].nodes.forEach(
    (node, index) => {

      const y = 390 + index * 75;

      createMapNode(
        canvas,
        node,
        "technique",
        algorithmX,
        y
      );

      positions[node] = {
        x: algorithmX,
        y
      };

      drawLine(
        svg,
        algorithmX,
        y,
        750,
        250
      );

    }
  );


  const dsX = 1200;

  mapStructure.categories[2].nodes.forEach(
    (node, index) => {

      const y = 390 + index * 75;

      createMapNode(
        canvas,
        node,
        "technique",
        dsX,
        y
      );

      positions[node] = {
        x: dsX,
        y
      };

      drawLine(
        svg,
        dsX,
        y,
        1200,
        250
      );

    }
  );


  categories.forEach(category => {

    drawLine(
      svg,
      category.x,
      category.y,
      750,
      80
    );

  });


  mapRelations.forEach(([from, to]) => {

    if (
      positions[from] &&
      positions[to]
    ) {

      drawLine(
        svg,
        positions[from].x,
        positions[from].y,
        positions[to].x,
        positions[to].y
      );

    }

  });
}

function createMapNode(
  canvas,
  name,
  className,
  x,
  y
) {

  const node =
    document.createElement("button");

  node.className =
    `map-node ${className}`;

  node.style.left =
    `${x}px`;

  node.style.top =
    `${y}px`;

  const problems =
    getMapProblems(name);

  node.innerHTML = `
    <strong>${esc(name)}</strong>

    ${
      problems.length
        ? `<div class="map-meta">
             ${problems.length} problems
           </div>`
        : ""
    }
  `;

  node.onclick = () =>
    showMapInfo(name);

  canvas.appendChild(node);
}

function drawLine(
  svg,
  x1,
  y1,
  x2,
  y2
) {

  const line =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );

  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);

  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);

  line.classList.add("map-line");

  svg.appendChild(line);
}

function showMapInfo(name) {

  const info =
    document.querySelector("#mapInfo");

  const details =
    mapNodeDetails[name];

  const problems =
    getMapProblems(name);

  if (details) {

    info.innerHTML = `
      <h3>${esc(name)}</h3>

      <div class="eyebrow">
        ${esc(details.type)}
      </div>

      <p>
        ${esc(details.description)}
      </p>

      <b>Recognition signals</b>

      <ul>
        ${details.signals
          .map(x => `<li>${esc(x)}</li>`)
          .join("")}
      </ul>
    `;

    return;
  }


  if (name === "PROBLEM SOLVING") {

    info.innerHTML = `
      <h3>Problem Solving</h3>

      <p>
        Start from the clues in the problem,
        identify the pattern, choose the technique,
        then select the appropriate data structure.
      </p>
    `;

    return;
  }


  const technique =
    D.techniques.find(
      t => t.toLowerCase() === name.toLowerCase()
    );

  const metadata =
    technique
      ? meta(technique)
      : null;

  info.innerHTML = `
    <h3>${esc(name)}</h3>

    ${
      metadata
        ? `<p>${esc(metadata.summary)}</p>

           <b>Complexity</b>

           <p>
             ${esc(metadata.complexity)}
           </p>`
        : ""
    }

    <b>Practice</b>

    <p>
      ${problems.length}
      problems connected to this technique.
    </p>

    ${
      problems.length
        ? `<button
             class="btn"
             onclick="openTechnique('${esc(name)}')"
           >
             Explore problems →
           </button>`
        : ""
    }
  `;
}

function zoomMap(amount) {

  mapScale += amount;

  mapScale =
    Math.max(
      0.55,
      Math.min(1.6, mapScale)
    );

  document.querySelector(
    "#patternMapCanvas"
  ).style.transform =
    `translate(-50%, -50%) scale(${mapScale})`;
}

function resetMap() {

  mapScale = 1;

  document.querySelector(
    "#patternMapCanvas"
  ).style.transform =
    "translate(-50%, -50%) scale(1)";
}

const originalRenderView =
  renderView;

renderView = function(view) {

  if (view === "patternmap") {

    renderPatternMap();

    return;
  }

  originalRenderView(view);
};
