// ==========================================
// TICKER TEXT ARRAY
// Edit the lines below to change the marquee text!
// ==========================================
const tickerLines = [
  "Arrays store elements in contiguous memory",
  "Binary Search works only on sorted data",
  "Hash tables provide average O(1) lookup",
  "Stacks follow LIFO order",
  "Queues follow FIFO order",
  "Linked lists allow dynamic memory allocation",
  "Trees are hierarchical data structures",
  "Graphs represent relationships between nodes",
  "DFS uses a stack internally",
  "BFS uses a queue internally",
  "Merge Sort has O(n log n) complexity",
  "Quick Sort is often faster in practice",
  "Heap Sort uses a binary heap",
  "Bubble Sort is rarely used in production",
  "Selection Sort minimizes swaps",
  "Insertion Sort is efficient for small datasets",
  "Trie is useful for prefix searches",
  "Heap supports priority queue operations",
  "Binary Trees have at most two children",
  "AVL Trees are self-balancing",
  "Red-Black Trees maintain balance with colors",
  "Graphs can be directed or undirected",
  "Dijkstra finds shortest paths",
  "Bellman-Ford handles negative weights",
  "Floyd-Warshall finds all-pairs shortest paths",
  "Topological Sort works on DAGs",
  "Union-Find solves connectivity problems",
  "Dynamic Programming avoids recomputation",
  "Greedy algorithms make local optimal choices",
  "Recursion uses the call stack",
  "Memoization speeds up recursive solutions",
  "Backtracking explores all possibilities",
  "Binary Search runs in O(log n)",
  "Linear Search runs in O(n)",
  "Hash collisions are unavoidable",
  "Load factor affects hash table performance",
  "A complete tree fills levels left to right",
  "A full binary tree has 0 or 2 children",
  "Balanced trees improve search efficiency",
  "Graphs can contain cycles",
  "Adjacency lists save memory",
  "Adjacency matrices allow fast edge lookup",
  "A min-heap keeps the smallest element on top",
  "A max-heap keeps the largest element on top",
  "Queues are used in scheduling systems",
  "Stacks are used for undo operations",
  "Trees are used in file systems",
  "Graphs power social networks",
  "Hash maps are key-value stores",
  "Two pointers reduce nested loops",
  "Sliding window optimizes subarray problems",
  "Prefix sums speed up range queries",
  "Segment trees answer range queries efficiently",
  "Fenwick Trees support prefix operations",
  "Sparse tables handle static range queries",
  "Deque allows insertion from both ends",
  "Circular queues reuse memory efficiently",
  "Bit manipulation can optimize solutions",
  "XOR can find unique elements",
  "Binary representation powers bitwise tricks",
  "Greedy solutions are not always optimal",
  "DP often trades space for speed",
  "Recursion can cause stack overflow",
  "Tail recursion can be optimized",
  "Graphs model real-world networks",
  "Trees are a special type of graph",
  "Every node in a BST follows ordering rules",
  "Inorder traversal of BST is sorted",
  "Preorder visits root before children",
  "Postorder visits children before root",
  "Level order traversal uses BFS",
  "Heaps are complete binary trees",
  "Priority queues are often heap-based",
  "Time complexity measures execution growth",
  "Space complexity measures memory usage",
  "Big O describes worst-case growth",
  "Omega notation describes best case",
  "Theta notation describes tight bounds",
  "Amortized analysis averages operation costs",
  "Hashing converts data into fixed values",
  "Collision resolution uses chaining or probing",
  "Open addressing stores data in the table",
  "Separate chaining uses linked lists",
  "Binary heaps support O(log n) insertion",
  "Graphs can be weighted or unweighted",
  "Cycle detection is a common graph problem",
  "MST stands for Minimum Spanning Tree",
  "Kruskal's algorithm builds an MST",
  "Prim's algorithm builds an MST",
  "Shortest path is a classic interview topic",
  "Recursion and iteration can solve similar tasks",
  "Data structures organize information efficiently",
  "Algorithms are step-by-step problem solutions",
  "Choosing the right structure matters",
  "Optimization often starts with complexity analysis",
  "Practice improves problem-solving speed",
  "DSA is the foundation of coding interviews",
  "Strong DSA skills improve programming efficiency"
];
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Ticker
  const tickerString = tickerLines.join("  •  ") + "  •  ";
  const ticker1 = document.getElementById('tickerText1');
  const ticker2 = document.getElementById('tickerText2');
  if (ticker1 && ticker2) {
    ticker1.textContent = tickerString;
    ticker2.textContent = tickerString;
  }

  // ==========================================
  // AUTHENTICATION & PROFILE LOGIC
  // ==========================================
  const loginBtn = document.getElementById('loginBtn');
  const userProfileContainer = document.getElementById('userProfileContainer');
  const displayUsername = document.getElementById('displayUsername');
  const logoutBtn = document.getElementById('logoutBtn');
  const profileBtn = document.getElementById('profileBtn');
  const profileDropdown = document.getElementById('profileDropdown');

  const statsAuthPrompt = document.getElementById('statsAuthPrompt');
  const statsDashboard = document.getElementById('statsDashboard');
  const statsEmailInput = document.getElementById('statsEmailInput');
  const statsPasswordInput = document.getElementById('statsPasswordInput');
  const statsLoginBtn = document.getElementById('statsLoginBtn');

  let currentAuthMode = 'login'; // 'login' or 'signup'
  const authModeToggle = document.getElementById('authModeToggle');
  const authTitle = document.getElementById('authTitle');

  authModeToggle?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentAuthMode === 'login') {
      currentAuthMode = 'signup';
      if (authTitle) authTitle.textContent = 'REGISTER';
      if (statsLoginBtn) statsLoginBtn.textContent = 'SIGN UP';
      if (authModeToggle) authModeToggle.textContent = 'Sign in';
      const textNode = authModeToggle.previousSibling;
      if (textNode) textNode.textContent = 'Already have an account? ';
    } else {
      currentAuthMode = 'login';
      if (authTitle) authTitle.textContent = 'LOGIN';
      if (statsLoginBtn) statsLoginBtn.textContent = 'SIGN IN';
      if (authModeToggle) authModeToggle.textContent = 'Sign up';
      const textNode = authModeToggle.previousSibling;
      if (textNode) textNode.textContent = 'Don\'t have an account? ';
    }
  });

  // Cache for checked problems
  window.ascendCheckedProblems = null;

  async function checkAuth() {

    let isLoggedIn = false;
    let username = 'CODER';

    if (window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured()) {
      const session = await AscendSupabase.getSession();
      if (session && session.user) {
        isLoggedIn = true;
        username = session.user.email.split('@')[0];
        
        // Fetch checked problems from Supabase if cache is not populated
        if (window.ascendCheckedProblems === null) {
          try {
            window.ascendCheckedProblems = await AscendSupabase.fetchUserProgress();
          } catch (err) {
            console.error("Failed to load user progress:", err);
            // Fallback to local storage
            window.ascendCheckedProblems = loadLocalProgress();
          }
        }
      }
    } else {
      // Supabase not configured, fall back to local storage auth
      const user = JSON.parse(localStorage.getItem('ascend-user') || 'null');
      isLoggedIn = user && user.loggedIn;
      if (isLoggedIn) {
        username = user.username;
      }
      if (window.ascendCheckedProblems === null) {
        window.ascendCheckedProblems = loadLocalProgress();
      }
    }

    if (isLoggedIn) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (userProfileContainer) userProfileContainer.style.display = 'block';
      if (displayUsername) displayUsername.textContent = '@' + username;
      
      if (statsAuthPrompt) statsAuthPrompt.style.display = 'none';
      if (statsDashboard) statsDashboard.style.display = 'block';
    } else {
      if (loginBtn) loginBtn.style.display = 'block';
      if (userProfileContainer) userProfileContainer.style.display = 'none';
      
      if (statsAuthPrompt) statsAuthPrompt.style.display = 'block';
      if (statsDashboard) statsDashboard.style.display = 'none';
    }

    // Always update stats to render with newly loaded progress
    if (typeof updateStats === 'function') updateStats();
  }

  function loadLocalProgress() {
    try {
      const data = JSON.parse(localStorage.getItem('ascend-checked') || '{}');
      if (typeof data !== 'object' || data === null) return {};
      
      // Migrate old format (true) to new format ({completed: true, date: today})
      let migrated = false;
      for (const key in data) {
        if (data[key] === true) {
          data[key] = { completed: true, date: getLocalDateString() };
          migrated = true;
        }
      }
      if (migrated) {
        localStorage.setItem('ascend-checked', JSON.stringify(data));
      }
      
      return data;
    } catch { return {}; }
  }

  loginBtn?.addEventListener('click', () => {
    // If they click top right login, switch to stats tab to show the prompt
    const tabStatsBtn = document.getElementById('tabStats');
    if (tabStatsBtn) tabStatsBtn.click();
    if (statsEmailInput) {
      // Small timeout to allow transition to complete before focusing
      setTimeout(() => statsEmailInput.focus(), 100);
    }
  });

  statsLoginBtn?.addEventListener('click', async () => {
    const email = statsEmailInput ? statsEmailInput.value.trim() : '';
    const password = statsPasswordInput ? statsPasswordInput.value.trim() : '';
    const authMessage = document.getElementById('authMessage');

    if (!email || !password) {
      if (authMessage) {
        authMessage.textContent = "Please fill in all fields.";
        authMessage.className = "auth-message error";
        authMessage.style.display = "block";
      }
      return;
    }

    // Set button loading state
    statsLoginBtn.classList.add('btn-loading');
    if (authMessage) authMessage.style.display = "none";

    // If Supabase is configured, use it
    if (window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured()) {
      try {
        if (currentAuthMode === 'login') {
          await AscendSupabase.signIn(email, password);
          if (authMessage) {
            authMessage.textContent = "Signed in successfully!";
            authMessage.className = "auth-message success";
            authMessage.style.display = "block";
          }
        } else {
          await AscendSupabase.signUp(email, password);
          if (authMessage) {
            authMessage.textContent = "Signup successful! Check your email to verify (if enabled).";
            authMessage.className = "auth-message success";
            authMessage.style.display = "block";
          }
        }
        
        // Wait briefly for user visual feedback then check auth
        setTimeout(async () => {
          statsLoginBtn.classList.remove('btn-loading');
          if (statsEmailInput) statsEmailInput.value = '';
          if (statsPasswordInput) statsPasswordInput.value = '';
          if (authMessage) authMessage.style.display = "none";
          // Clear progress cache to force fetch new user's progress
          window.ascendCheckedProblems = null;
          await checkAuth();
        }, 1200);

      } catch (err) {
        statsLoginBtn.classList.remove('btn-loading');
        if (authMessage) {
          if (err.message && err.message.toLowerCase().includes("invalid login credentials") && currentAuthMode === 'login') {
            authMessage.innerHTML = 'Account not found or password incorrect. Don\'t have an account? <a href="#" id="auth-switch-helper" style="color: blue; text-decoration: underline;">Sign up here</a>';
            authMessage.className = "auth-message error";
            authMessage.style.display = "block";
            
            // Add click listener to the helper link
            document.getElementById('auth-switch-helper')?.addEventListener('click', (e) => {
              e.preventDefault();
              document.getElementById('authModeToggle')?.click();
              authMessage.style.display = "none";
            });
          } else {
            authMessage.textContent = err.message || "An authentication error occurred.";
            authMessage.className = "auth-message error";
            authMessage.style.display = "block";
          }
        }
      }
    } else {
      // Local storage fallback login
      setTimeout(() => {
        statsLoginBtn.classList.remove('btn-loading');
        const username = email.includes('@') ? email.split('@')[0] : email;
        localStorage.setItem('ascend-user', JSON.stringify({ username, loggedIn: true }));
        if (statsEmailInput) statsEmailInput.value = '';
        if (statsPasswordInput) statsPasswordInput.value = '';
        // Clear cache to reload progress
        window.ascendCheckedProblems = null;
        checkAuth();
      }, 500);
    }
  });

  const googleLoginBtn = document.getElementById('googleLoginBtn');
  googleLoginBtn?.addEventListener('click', async () => {
    if (window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured()) {
      try {
        await AscendSupabase.signInWithGoogle();
      } catch (err) {
        alert("Google Sign In failed: " + err.message);
      }
    } else {
      alert("Supabase is not configured yet.");
    }
  });

  // Also allow pressing "Enter" in the input fields
  statsEmailInput?.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      if (statsPasswordInput) {
        statsPasswordInput.focus();
      } else {
        statsLoginBtn.click();
      }
    }
  });

  statsPasswordInput?.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      statsLoginBtn.click();
    }
  });

  logoutBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    
    if (window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured()) {
      try {
        await AscendSupabase.signOut();
      } catch (err) {
        console.error("Sign out error:", err);
      }
    } else {
      localStorage.removeItem('ascend-user');
    }
    
    // Clear credentials/cache
    window.ascendCheckedProblems = null;
    if (profileDropdown) profileDropdown.classList.remove('show');
    if (profileBtn) profileBtn.classList.remove('active');
    
    await checkAuth();
  });

  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('show');
      profileBtn.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!profileDropdown.contains(e.target) && e.target !== profileBtn) {
        profileDropdown.classList.remove('show');
        profileBtn.classList.remove('active');
      }
    });
  }

  // Set up auth state change listener if Supabase is configured
  if (window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured()) {
    AscendSupabase.onAuthStateChange(async (event, session) => {
      console.log("Supabase Auth Event:", event);
      if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
        window.ascendCheckedProblems = null;
      } else {
        // Trigger reload of progress
        window.ascendCheckedProblems = null;
      }
      await checkAuth();
    });
  } else {
    checkAuth();
  }

  // Tab Logic
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Show corresponding content
      const targetId = tab.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // ==========================================
  // SHEET PAGE LOGIC
  // ==========================================

  // Sanitize strings to prevent XSS from data.json
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Difficulty-based ordering for algorithm buttons
  const ALGO_ORDER = [
    "Two Pointer Patterns",
    "Sliding Window Patterns",
    "Binary Search Patterns",
    "Array/Matrix Manipulation Patterns",
    "String Manipulation Patterns",
    "Linked List Manipulation Patterns",
    "Stack Patterns",
    "Bit Manipulation Patterns",
    "Heap (Priority Queue) Patterns",
    "Tree Traversal Patterns (DFS & BFS)",
    "Greedy Patterns",
    "Backtracking Patterns",
    "Design Patterns",
    "Dynamic Programming (DP) Patterns",
    "Graph Traversal Patterns (DFS & BFS)"
  ];

  // Helper to get current local date in YYYY-MM-DD
  function getLocalDateString() {
    const d = new Date();
    const offset = d.getTimezoneOffset() * 60000;
    return new Date(d.getTime() - offset).toISOString().split('T')[0];
  }

  // Load saved checkbox states
  function getCheckedProblems() {
    return window.ascendCheckedProblems || {};
  }

  function saveCheckedProblems(data, problemId, isChecked) {
    window.ascendCheckedProblems = data;
    if (typeof updateStats === 'function') updateStats();

    if (window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured()) {
      AscendSupabase.getSession().then(session => {
        if (session && session.user && problemId) {
          if (isChecked) {
            AscendSupabase.upsertProgress(problemId, getLocalDateString()).catch(err => {
              console.error("Failed to sync progress to Supabase:", err);
            });
          } else {
            AscendSupabase.deleteProgress(problemId).catch(err => {
              console.error("Failed to sync delete to Supabase:", err);
            });
          }
        } else {
          // If logged out but Supabase is configured, also save locally
          localStorage.setItem('ascend-checked', JSON.stringify(data));
        }
      });
    } else {
      localStorage.setItem('ascend-checked', JSON.stringify(data));
    }
  }

  let ascendData = null;

  // Load data.json and build the sheet
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      ascendData = data;
      const algoContainer = document.getElementById('algoButtons');
      const patternContainer = document.getElementById('sheetPatterns');
      if (!algoContainer || !patternContainer) return;

      // Sort algorithms by difficulty order
      const sorted = [...data.algorithms].sort((a, b) => {
        const ia = ALGO_ORDER.indexOf(a.name);
        const ib = ALGO_ORDER.indexOf(b.name);
        return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
      });

      // Render algorithm buttons
      sorted.forEach((algo, index) => {
        const btn = document.createElement('button');
        btn.className = 'algo-btn';
        btn.textContent = algo.name.replace(' Patterns', '').replace(' (DFS & BFS)', '');
        btn.setAttribute('data-algo-index', index);

        btn.addEventListener('click', () => {
          // Toggle active state
          document.querySelectorAll('.algo-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          // Render patterns
          renderPatterns(algo, patternContainer);
        });

        algoContainer.appendChild(btn);
      });

      // Initial stats render
      if (typeof updateStats === 'function') updateStats();
    })
    .catch(err => console.error('Failed to load data.json:', err));

  function renderPatterns(algo, container) {
    container.innerHTML = '';
    const checked = getCheckedProblems();

    algo.patterns.forEach((pattern, pIndex) => {
      const section = document.createElement('div');
      section.className = 'pattern-section';

      // Header
      const header = document.createElement('div');
      header.className = 'pattern-header';
      header.innerHTML = `
        <div class="pattern-title">
          <span>${escapeHTML(pattern.name)}</span>
          <span class="pattern-count">${pattern.problems.length}</span>
        </div>
        <span class="toggle-icon">+</span>
      `;

      // Body
      const body = document.createElement('div');
      body.className = 'pattern-body';

      const table = document.createElement('table');
      table.className = 'problem-table';

      pattern.problems.forEach(problem => {
        const key = `p-${problem.id}`;
        const isChecked = checked[key] && checked[key].completed;

        const row = document.createElement('tr');
        if (isChecked) row.classList.add('completed');

        row.innerHTML = `
          <td class="col-check">
            <input type="checkbox" class="problem-check" data-problem-id="${escapeHTML(String(problem.id))}" ${isChecked ? 'checked' : ''}>
          </td>
          <td class="col-id">#${escapeHTML(String(problem.id))}</td>
          <td class="col-title">
            <a href="${escapeHTML(problem.link)}" target="_blank" rel="noopener noreferrer">${escapeHTML(problem.title)}</a>
          </td>
        `;

        // Checkbox logic
        const checkbox = row.querySelector('.problem-check');
        checkbox.addEventListener('change', () => {
          const checkedData = getCheckedProblems();
          if (checkbox.checked) {
            checkedData[key] = { completed: true, date: getLocalDateString() };
            row.classList.add('completed');
          } else {
            delete checkedData[key];
            row.classList.remove('completed');
          }
          saveCheckedProblems(checkedData, problem.id, checkbox.checked);
        });

        table.appendChild(row);
      });

      body.appendChild(table);
      section.appendChild(header);
      section.appendChild(body);

      // Accordion toggle
      header.addEventListener('click', () => {
        header.classList.toggle('open');
        body.classList.toggle('open');
      });

      container.appendChild(section);
    });
  }

  // ==========================================
  // STATS & HEATMAP LOGIC
  // ==========================================
  function updateStats() {
    if (!ascendData) return;
    
    const checkedData = getCheckedProblems();
    let totalSolved = 0;
    let totalProblems = 0;
    
    const algoProgress = [];

    ascendData.algorithms.forEach(algo => {
      let algoTotal = 0;
      let algoSolved = 0;

      algo.patterns.forEach(pattern => {
        pattern.problems.forEach(problem => {
          totalProblems++;
          algoTotal++;
          const key = `p-${problem.id}`;
          if (checkedData[key] && checkedData[key].completed) {
            totalSolved++;
            algoSolved++;
          }
        });
      });

      algoProgress.push({
        name: algo.name.replace(' Patterns', '').replace(' (DFS & BFS)', ''),
        total: algoTotal,
        solved: algoSolved,
        percentage: algoTotal === 0 ? 0 : Math.round((algoSolved / algoTotal) * 100)
      });
    });

    // Update Overview Numbers
    const totalSolvedEl = document.getElementById('totalSolved');
    const totalProblemsEl = document.getElementById('totalProblems');
    if (totalSolvedEl) totalSolvedEl.textContent = totalSolved;
    if (totalProblemsEl) totalProblemsEl.textContent = totalProblems;

    // Calculate and render streaks
    const dateCounts = {};
    for (const key in checkedData) {
      if (checkedData[key] && checkedData[key].completed && checkedData[key].date) {
        const d = checkedData[key].date;
        dateCounts[d] = (dateCounts[d] || 0) + 1;
      }
    }
    const streaks = calculateStreaks(dateCounts);

    const currentStreakEl = document.getElementById('currentStreakVal');
    const maxStreakEl = document.getElementById('maxStreakVal');
    if (currentStreakEl) {
      currentStreakEl.textContent = streaks.currentStreak + (streaks.currentStreak === 1 ? ' day' : ' days');
    }
    if (maxStreakEl) {
      maxStreakEl.textContent = streaks.maxStreak + (streaks.maxStreak === 1 ? ' day' : ' days');
    }

    // Bind download card button
    const downloadCardBtn = document.getElementById('downloadCardBtn');
    if (downloadCardBtn) {
      downloadCardBtn.onclick = () => {
        const user = JSON.parse(localStorage.getItem('ascend-user') || '{"username": "CODER"}');
        generateAscensionCard(user.username, totalSolved, totalProblems, streaks, checkedData);
      };
    }

    // Render Algorithm Progress Bars
    const algoContainer = document.getElementById('algoProgressContainer');
    if (algoContainer) {
      algoContainer.innerHTML = '';
      
      // Sort by percentage descending
      algoProgress.sort((a, b) => b.percentage - a.percentage);

      algoProgress.forEach(algo => {
        const item = document.createElement('div');
        item.className = 'algo-progress-item';
        
        item.innerHTML = `
          <div class="algo-progress-header">
            <span>${escapeHTML(algo.name)}</span>
            <span>${algo.percentage}% (${algo.solved}/${algo.total})</span>
          </div>
          <div class="algo-progress-bar-bg">
            <div class="algo-progress-bar-fill" style="width: ${algo.percentage}%;"></div>
          </div>
        `;
        algoContainer.appendChild(item);
      });
    }

    // Render Heatmap
    renderHeatmap(checkedData);
  }

  function renderHeatmap(checkedData) {
    const container = document.getElementById('heatmapContainer');
    if (!container) return;
    container.innerHTML = '';

    // Aggregate by date
    const dateCounts = {};
    for (const key in checkedData) {
      if (checkedData[key] && checkedData[key].completed && checkedData[key].date) {
        const d = checkedData[key].date;
        dateCounts[d] = (dateCounts[d] || 0) + 1;
      }
    }

    // Generate last 365 days approximately
    const today = new Date();
    const offset = today.getTimezoneOffset() * 60000;
    const localToday = new Date(today.getTime() - offset);
    
    // Start from 52 weeks ago, aligned to Sunday
    const startDate = new Date(localToday);
    startDate.setDate(localToday.getDate() - (52 * 7));
    while (startDate.getDay() !== 0) {
      startDate.setDate(startDate.getDate() - 1);
    }

    // Generate grid
    let current = new Date(startDate);
    while (current <= localToday) {
      const dStr = current.toISOString().split('T')[0];
      const count = dateCounts[dStr] || 0;
      
      const cell = document.createElement('div');
      cell.className = 'heatmap-cell';
      cell.setAttribute('data-date', dStr);
      cell.setAttribute('data-count', count);

      if (count > 0) {
        if (count >= 4) cell.classList.add('legend-4');
        else if (count === 3) cell.classList.add('legend-3');
        else if (count === 2) cell.classList.add('legend-2');
        else if (count === 1) cell.classList.add('legend-1');
      } else {
        cell.classList.add('legend-0');
      }

      // Add edge-alignment classes for tooltips to prevent edge clipping
      const daysFromStart = Math.round((current - startDate) / (24 * 60 * 60 * 1000));
      const daysToEnd = Math.round((localToday - current) / (24 * 60 * 60 * 1000));
      if (daysFromStart < 14) {
        cell.classList.add('tooltip-left-align');
      } else if (daysToEnd < 14) {
        cell.classList.add('tooltip-right-align');
      }

      container.appendChild(cell);
      
      current.setDate(current.getDate() + 1);
    }
  }

  function calculateStreaks(dateCounts) {
    const activeDates = Object.keys(dateCounts)
      .filter(d => dateCounts[d] > 0)
      .sort((a, b) => new Date(a) - new Date(b));
      
    if (activeDates.length === 0) {
      return { currentStreak: 0, maxStreak: 0 };
    }
    
    let maxStreak = 0;
    let currentRun = 0;
    let prevDate = null;
    
    activeDates.forEach(dStr => {
      const curDate = new Date(dStr + 'T00:00:00');
      if (prevDate === null) {
        currentRun = 1;
      } else {
        const diffTime = Math.abs(curDate - prevDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          currentRun++;
        } else if (diffDays > 1) {
          maxStreak = Math.max(maxStreak, currentRun);
          currentRun = 1;
        }
      }
      prevDate = curDate;
    });
    maxStreak = Math.max(maxStreak, currentRun);
    
    // Calculate current streak (ending today or yesterday)
    let currentStreak = 0;
    const today = new Date();
    today.setHours(0,0,0,0);
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    
    const todayStrLocal = today.toISOString().split('T')[0];
    const yesterdayStrLocal = yesterday.toISOString().split('T')[0];
    
    let checkDate = null;
    if (dateCounts[todayStrLocal] > 0) {
      checkDate = today;
    } else if (dateCounts[yesterdayStrLocal] > 0) {
      checkDate = yesterday;
    }
    
    if (checkDate !== null) {
      currentStreak = 1;
      const testDate = new Date(checkDate);
      while (true) {
        testDate.setDate(testDate.getDate() - 1);
        const testStr = testDate.toISOString().split('T')[0];
        if (dateCounts[testStr] > 0) {
          currentStreak++;
        } else {
          break;
        }
      }
    }
    
    return { currentStreak, maxStreak };
  }

  function generateAscensionCard(username, totalSolved, totalProblems, streaks, checkedData) {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 480;
    const ctx = canvas.getContext('2d');
    
    // 1. Draw Neon Cyan Shadow
    ctx.fillStyle = '#00f0ff';
    ctx.fillRect(32, 32, 746, 426);
    
    // 2. Draw Card Border & Dark Background
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#161616';
    ctx.fillRect(20, 20, 746, 426);
    ctx.strokeRect(20, 20, 746, 426);
    
    // 3. Draw Header Banner
    ctx.fillStyle = '#ccff00'; // Neon Yellow
    ctx.fillRect(40, 40, 706, 60);
    ctx.strokeRect(40, 40, 706, 60);
    
    // Header Text
    ctx.fillStyle = '#000000';
    ctx.font = '900 24px "Space Grotesk", sans-serif';
    ctx.fillText('ASCEND // ASCENSION CARD', 60, 78);
    
    // 4. Draw User Info
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 20px "Space Grotesk", sans-serif';
    ctx.fillText('USER: @' + username.toUpperCase(), 40, 145);
    
    // 5. Problems Conquered Card (Left)
    ctx.fillStyle = '#000000';
    ctx.fillRect(44, 174, 332, 92);
    ctx.fillStyle = '#b3b3b3';
    ctx.fillRect(40, 170, 332, 92);
    ctx.strokeRect(40, 170, 332, 92);
    
    ctx.fillStyle = '#000000';
    ctx.font = '800 12px "Space Grotesk", sans-serif';
    ctx.fillText('PROBLEMS CONQUERED', 55, 195);
    
    // Black badge for numbers
    ctx.fillStyle = '#000000';
    ctx.fillRect(55, 210, 302, 38);
    
    ctx.font = '900 20px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#ccff00';
    const solvedStr = totalSolved.toString();
    ctx.fillText(solvedStr, 70, 236);
    
    ctx.font = '800 20px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#ffffff';
    const dividerX = 70 + ctx.measureText(solvedStr).width + 5;
    ctx.fillText('/', dividerX, 236);
    
    const totalStr = totalProblems.toString();
    const totalX = dividerX + ctx.measureText('/').width + 5;
    ctx.fillText(totalStr, totalX, 236);
    
    // 6. Consistency Streaks Card (Right)
    ctx.fillStyle = '#000000';
    ctx.fillRect(404, 174, 332, 92);
    ctx.fillStyle = '#b3b3b3';
    ctx.fillRect(400, 170, 332, 92);
    ctx.strokeRect(400, 170, 332, 92);
    
    ctx.fillStyle = '#000000';
    ctx.font = '800 12px "Space Grotesk", sans-serif';
    ctx.fillText('CONSISTENCY STREAKS', 415, 195);
    
    ctx.fillStyle = '#000000';
    ctx.font = '800 15px "Space Grotesk", sans-serif';
    ctx.fillText('CURRENT STREAK: ' + streaks.currentStreak + (streaks.currentStreak === 1 ? ' DAY' : ' DAYS'), 415, 222);
    ctx.fillText('MAX STREAK:     ' + streaks.maxStreak + (streaks.maxStreak === 1 ? ' DAY' : ' DAYS'), 415, 245);
    
    // 7. Heatmap Title
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 13px "Space Grotesk", sans-serif';
    ctx.fillText('CONSISTENCY HEATMAP (PAST YEAR)', 40, 305);
    
    // Heatmap grid logic
    const dateCounts = {};
    for (const key in checkedData) {
      if (checkedData[key] && checkedData[key].completed && checkedData[key].date) {
        const d = checkedData[key].date;
        dateCounts[d] = (dateCounts[d] || 0) + 1;
      }
    }
    
    const today = new Date();
    const offset = today.getTimezoneOffset() * 60000;
    const localToday = new Date(today.getTime() - offset);
    
    const startDate = new Date(localToday);
    startDate.setDate(localToday.getDate() - (52 * 7));
    while (startDate.getDay() !== 0) {
      startDate.setDate(startDate.getDate() - 1);
    }
    
    let current = new Date(startDate);
    let cellIndex = 0;
    const cellW = 8;
    const cellH = 8;
    const gap = 2;
    
    const colors = {
      0: '#1e1e1e',
      1: 'rgba(204, 255, 0, 0.2)',
      2: 'rgba(204, 255, 0, 0.45)',
      3: 'rgba(204, 255, 0, 0.7)',
      4: '#ccff00'
    };
    
    while (current <= localToday) {
      const dStr = current.toISOString().split('T')[0];
      const count = dateCounts[dStr] || 0;
      
      let level = 0;
      if (count >= 4) level = 4;
      else if (count === 3) level = 3;
      else if (count === 2) level = 2;
      else if (count === 1) level = 1;
      
      const col = Math.floor(cellIndex / 7);
      const row = cellIndex % 7;
      
      const x = 40 + col * (cellW + gap);
      const y = 320 + row * (cellH + gap);
      
      ctx.fillStyle = '#1e1e1e';
      ctx.fillRect(x, y, cellW, cellH);
      
      if (level > 0) {
        ctx.fillStyle = colors[level];
        ctx.fillRect(x, y, cellW, cellH);
      }
      
      cellIndex++;
      current.setDate(current.getDate() + 1);
    }
    
    // Legend
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 11px "Space Grotesk", sans-serif';
    ctx.fillText('Less', 40, 408);
    
    const legendXStart = 75;
    for (let i = 0; i <= 4; i++) {
      const lx = legendXStart + i * 12;
      const ly = 400;
      ctx.fillStyle = '#1e1e1e';
      ctx.fillRect(lx, ly, 8, 8);
      if (i > 0) {
        ctx.fillStyle = colors[i];
        ctx.fillRect(lx, ly, 8, 8);
      }
    }
    ctx.fillStyle = '#ffffff';
    ctx.fillText('More', legendXStart + 5 * 12 + 2, 408);
    
    // Watermark
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.font = '600 11px "Space Grotesk", sans-serif';
    ctx.fillText('VERIFY AT: ASCEND-DSA.TRACKER', 560, 435);
    
    // Trigger download
    const link = document.createElement('a');
    link.download = 'ascension-card-' + username + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }
});
