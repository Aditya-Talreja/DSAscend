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

  const resetProgressBtn = document.getElementById('resetProgressBtn');
  const resetModalOverlay = document.getElementById('resetModalOverlay');
  const cancelResetBtn = document.getElementById('cancelResetBtn');
  const confirmResetBtn = document.getElementById('confirmResetBtn');

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

  // Brutalist Toast Notification Helper
  function showToast(message, type = 'success') {
    // Remove existing toast if any
    const existing = document.querySelector('.brutalist-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `brutalist-toast ${type}`;
    // Use textContent for message to prevent XSS from API error strings
    const msgSpan = document.createElement('span');
    msgSpan.textContent = message;
    const closeSpan = document.createElement('span');
    closeSpan.className = 'toast-close';
    closeSpan.innerHTML = '&times;';
    toast.appendChild(msgSpan);
    toast.appendChild(closeSpan);

    document.body.appendChild(toast);

    // Auto-remove after 5 seconds
    const timeoutId = setTimeout(() => {
      toast.style.animation = 'fadeOutToast 0.3s forwards';
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    }, 5000);

    toast.querySelector('.toast-close').addEventListener('click', () => {
      clearTimeout(timeoutId);
      toast.remove();
    });
  }

  function hasAuthTokenHash() {
    const hash = window.location.hash || '';
    return hash.includes('access_token=') || hash.includes('id_token=') || hash.includes('refresh_token=') || hash.includes('provider_token=');
  }

  function cleanupAuthHash() {
    if (!hasAuthTokenHash()) return false;

    const cleanUrl = new URL(window.location.href);
    cleanUrl.hash = '';
    history.replaceState({}, document.title, `${cleanUrl.pathname}${cleanUrl.search}`);
    return true;
  }

  // Cache for checked problems
  window.ascendCheckedProblems = null;

  let authCheckPromise = Promise.resolve();
  const AUTH_REQUEST_TIMEOUT_MS = 60000;

  function checkAuth(session = undefined) {
    authCheckPromise = authCheckPromise.then(async () => {
      try {
        await doCheckAuth(session);
      } catch (err) {
        console.error("Error in checkAuth execution:", err);
      }
    });
    return authCheckPromise;
  }

  async function runWithTimeout(promise, message) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error(message)), AUTH_REQUEST_TIMEOUT_MS);
    });
    return await Promise.race([promise, timeoutPromise]);
  }

  async function doCheckAuth(passedSession = undefined) {

    let isLoggedIn = false;
    let username = 'CODER';

    if (window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured()) {
      const session = passedSession !== undefined ? passedSession : await AscendSupabase.getSession();
      if (session && session.user) {
        isLoggedIn = true;
        username = session.user.email.split('@')[0];

        // Fetch checked problems from Supabase if cache is not populated
        if (window.ascendCheckedProblems === null) {
          try {
            window.ascendCheckedProblems = await AscendSupabase.fetchUserProgress();

            // Merge guest local progress into Supabase in a single bulk transaction
            const localProgress = loadLocalProgress();
            if (Object.keys(localProgress).length > 0) {
              console.log("Merging local progress into Supabase (bulk)...");
              const recordsToSync = [];
              for (const key in localProgress) {
                const problemId = key.replace('p-', '');
                if (localProgress[key].completed && !window.ascendCheckedProblems[key]) {
                  recordsToSync.push({
                    problemId: problemId,
                    date: localProgress[key].date
                  });
                  // Update cache state locally
                  window.ascendCheckedProblems[key] = localProgress[key];
                }
              }

              if (recordsToSync.length > 0) {
                try {
                  await AscendSupabase.upsertProgressBulk(recordsToSync);
                  console.log(`Successfully merged ${recordsToSync.length} guest records into Supabase!`);
                } catch (e) {
                  console.error("Failed to bulk sync guest progress:", e);
                }
              }
              // Clear local progress once merged
              localStorage.removeItem('ascend-checked');
            }
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
      if (statsDashboard) {
        statsDashboard.style.display = 'block';
        const wrapper = document.querySelector('.heatmap-wrapper');
        if (wrapper) {
          setTimeout(() => {
            wrapper.scrollLeft = wrapper.scrollWidth;
          }, 100);
        }
      }
    } else {
      if (loginBtn) loginBtn.style.display = 'block';
      if (userProfileContainer) userProfileContainer.style.display = 'none';

      if (statsAuthPrompt) statsAuthPrompt.style.display = 'block';
      if (statsDashboard) statsDashboard.style.display = 'none';
    }

    // Always update stats to render with newly loaded progress
    if (typeof updateStats === 'function') updateStats();

    // Refresh active sheet patterns to match new progress
    const activeAlgoBtn = document.querySelector('.algo-btn.active');
    if (activeAlgoBtn) {
      activeAlgoBtn.click();
    }
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

    statsLoginBtn.classList.add('btn-loading');
    if (authMessage) authMessage.style.display = "none";

    try {
      if (window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured()) {
        const actionLabel = currentAuthMode === 'login' ? 'signing in' : 'creating your account';
        const authPromise = currentAuthMode === 'login'
          ? AscendSupabase.signIn(email, password)
          : AscendSupabase.signUp(email, password);

        const resData = await runWithTimeout(authPromise, `Timed out while ${actionLabel}. Please check your connection and try again.`);

        let isEmailVerificationRequired = false;
        if (currentAuthMode === 'signup') {
          if (resData && !resData.session) {
            isEmailVerificationRequired = true;
          }
        }

        if (authMessage) {
          if (currentAuthMode === 'login') {
            authMessage.textContent = "Signed in successfully!";
            authMessage.className = "auth-message success";
            showToast("Signed in successfully!", "success");
          } else {
            if (isEmailVerificationRequired) {
              authMessage.textContent = "A verification email has been sent! Please confirm your email before signing in.";
              authMessage.className = "auth-message info";
              showToast("Verification link sent! Check your inbox.", "info");
            } else {
              authMessage.textContent = "Signed up and logged in successfully!";
              authMessage.className = "auth-message success";
              showToast("Signed up successfully!", "success");
            }
          }
          authMessage.style.display = "block";
        }

        if (isEmailVerificationRequired) {
          if (statsPasswordInput) statsPasswordInput.value = '';
          // Reset button state
          statsLoginBtn.classList.remove('btn-loading');
          // Switch to login mode automatically for their convenience
          currentAuthMode = 'login';
          if (authTitle) authTitle.textContent = 'LOGIN';
          if (statsLoginBtn) statsLoginBtn.textContent = 'SIGN IN';
          if (authModeToggle) authModeToggle.textContent = 'Sign up';
          const textNode = authModeToggle?.previousSibling;
          if (textNode) textNode.textContent = "Don't have an account? ";
        } else {
          setTimeout(async () => {
            if (statsEmailInput) statsEmailInput.value = '';
            if (statsPasswordInput) statsPasswordInput.value = '';
            if (authMessage) authMessage.style.display = "none";
            window.ascendCheckedProblems = null;
            await checkAuth();
          }, 1200);
        }
      } else {
        setTimeout(() => {
          const username = email.includes('@') ? email.split('@')[0] : email;
          localStorage.setItem('ascend-user', JSON.stringify({ username, loggedIn: true }));
          if (statsEmailInput) statsEmailInput.value = '';
          if (statsPasswordInput) statsPasswordInput.value = '';
          window.ascendCheckedProblems = null;
          showToast("Logged in successfully (guest)!", "success");
          checkAuth();
        }, 500);
      }
    } catch (err) {
      if (authMessage) {
        const message = err?.message || "An authentication error occurred.";
        if (message.toLowerCase().includes("invalid login credentials") && currentAuthMode === 'login') {
          authMessage.innerHTML = 'Account not found or password incorrect. Don\'t have an account? <a href="#" id="auth-switch-helper" style="color: blue; text-decoration: underline;">Sign up here</a>';
          authMessage.className = "auth-message error";
          authMessage.style.display = "block";
          showToast("Invalid credentials", "error");

          // Use onclick (not addEventListener) to prevent stacking duplicate listeners
          // on repeated failed login attempts.
          const switchHelper = document.getElementById('auth-switch-helper');
          if (switchHelper) {
            switchHelper.onclick = (e) => {
              e.preventDefault();
              document.getElementById('authModeToggle')?.click();
              authMessage.style.display = "none";
            };
          }
        } else if (message.toLowerCase().includes("email not confirmed") || message.toLowerCase().includes("confirm your email")) {
          authMessage.textContent = "Please confirm your email address. Check your inbox for the verification link.";
          authMessage.className = "auth-message error";
          authMessage.style.display = "block";
          showToast("Email not confirmed. Check inbox.", "error");
        } else {
          authMessage.textContent = message;
          authMessage.className = "auth-message error";
          authMessage.style.display = "block";
          showToast(message, "error");
        }
      }
    } finally {
      if (statsLoginBtn.classList.contains('btn-loading')) {
        statsLoginBtn.classList.remove('btn-loading');
      }
    }
  });

  const googleLoginBtn = document.getElementById('googleLoginBtn');
  googleLoginBtn?.addEventListener('click', async () => {
    if (window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured()) {
      try {
        await runWithTimeout(
          AscendSupabase.signInWithGoogle(),
          'Timed out while starting Google sign-in. Please check your connection and try again.'
        );
      } catch (err) {
        showToast("Google Sign In failed: " + (err?.message || "Unknown error"), "error");
      }
    } else {
      showToast("Supabase is not configured yet.", "error");
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
        showToast("Signed out successfully.", "info");
      } catch (err) {
        console.error("Sign out error:", err);
        showToast("Sign out error: " + (err?.message || "Unknown error"), "error");
      }
    } else {
      localStorage.removeItem('ascend-user');
      showToast("Signed out successfully (guest).", "info");
    }

    // Clear credentials/cache
    window.ascendCheckedProblems = null;
    if (profileDropdown) profileDropdown.classList.remove('show');
    if (profileBtn) profileBtn.classList.remove('active');

    await checkAuth();
  });

  // Reset Progress events
  resetProgressBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (profileDropdown) profileDropdown.classList.remove('show');
    if (profileBtn) profileBtn.classList.remove('active');
    resetModalOverlay?.classList.add('show');
  });

  cancelResetBtn?.addEventListener('click', () => {
    resetModalOverlay?.classList.remove('show');
  });

  resetModalOverlay?.addEventListener('click', (e) => {
    if (e.target === resetModalOverlay) {
      resetModalOverlay.classList.remove('show');
    }
  });

  confirmResetBtn?.addEventListener('click', async () => {
    const originalText = confirmResetBtn.textContent;
    confirmResetBtn.textContent = 'RESETTING...';
    confirmResetBtn.disabled = true;

    try {
      if (window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured()) {
        const session = await AscendSupabase.getSession();
        if (session && session.user) {
          await AscendSupabase.clearAllProgress();
        }
      }

      localStorage.removeItem('ascend-checked');
      window.ascendCheckedProblems = null;

      showToast("Progress successfully reset.", "success");
      resetModalOverlay?.classList.remove('show');

      await checkAuth();
      updateStats();

      const activeAlgoBtn = document.querySelector('.algo-btn.active');
      if (activeAlgoBtn) {
        activeAlgoBtn.click();
      }
    } catch (err) {
      console.error("Reset progress error:", err);
      showToast("Error resetting progress: " + (err?.message || "Unknown error"), "error");
    } finally {
      confirmResetBtn.textContent = originalText;
      confirmResetBtn.disabled = false;
    }
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
    // IMPORTANT: this callback must stay synchronous and must NOT call any
    // other supabase.auth.* method (directly or indirectly) before it returns.
    // Supabase's auth client holds an internal lock while dispatching this
    // event; calling back into it (e.g. via getSession()) from inside this
    // callback causes the call to hang forever with no error
    // (see https://supabase.com/docs/guides/troubleshooting/why-is-my-supabase-api-call-not-returning-PGzXw0).
    // All real work is deferred with setTimeout so it runs after the lock
    // has been released.
    AscendSupabase.onAuthStateChange((event, session) => {
      console.log("Supabase Auth Event:", event);

      setTimeout(async () => {
        const currentHash = window.location.hash || '';
        const isSignupFlow = currentHash.includes('type=signup');

        // Always clean auth tokens from the URL once the session is available.
        const hadAuthHash = cleanupAuthHash();

        // Trigger reload of progress
        window.ascendCheckedProblems = null;

        // Show a success message only for a real sign-in flow.
        if (event === 'SIGNED_IN' && session) {
          if (hadAuthHash && isSignupFlow) {
            showToast("Email verified successfully! Welcome to Ascend.", "success");
          } else if (hadAuthHash) {
            showToast("Signed in successfully!", "success");
          }
        }

        await checkAuth(session);
      }, 0);
    });
  } else {
    checkAuth();
  }

  // Tab Logic
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');
  const navbar = document.querySelector('.navbar');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navCenter = document.querySelector('.nav-center');

  function syncMobileNavbarState() {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      if (navCenter) navCenter.style.display = '';
      if (mobileNavToggle) mobileNavToggle.style.display = '';
      return;
    }

    if (mobileNavToggle) {
      mobileNavToggle.style.display = 'flex';
    }

    if (navCenter) {
      if (navbar && navbar.classList.contains('open')) {
        navCenter.style.display = 'flex';
      } else {
        navCenter.style.display = 'none';
      }
    }
  }

  if (mobileNavToggle && navbar && navCenter) {
    syncMobileNavbarState();

    mobileNavToggle.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('open');
      mobileNavToggle.setAttribute('aria-expanded', String(isOpen));
      navCenter.style.display = isOpen && window.innerWidth <= 768 ? 'flex' : 'none';
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navbar.classList.contains('open')) {
        navbar.classList.remove('open');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        navCenter.style.display = 'none';
      }
    });

    window.addEventListener('resize', syncMobileNavbarState);
  }

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

      if (targetId === 'tab-3') {
        const wrapper = document.querySelector('.heatmap-wrapper');
        if (wrapper) {
          setTimeout(() => {
            wrapper.scrollLeft = wrapper.scrollWidth;
          }, 50);
        }
      }

      if (window.innerWidth <= 768 && navbar && navbar.classList.contains('open')) {
        navbar.classList.remove('open');
        if (mobileNavToggle) {
          mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
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

    const isConfigured = window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured();

    if (isConfigured) {
      AscendSupabase.getSession().then(session => {
        if (session && session.user && problemId) {
          if (isChecked) {
            AscendSupabase.upsertProgress(problemId, getLocalDateString()).catch(err => {
              console.error("Failed to sync progress to Supabase:", err);
              showToast("Failed to sync progress to Supabase: " + (err.message || "Unknown error"), "error");
            });
          } else {
            AscendSupabase.deleteProgress(problemId).catch(err => {
              console.error("Failed to sync delete to Supabase:", err);
              showToast("Failed to sync delete to Supabase: " + (err.message || "Unknown error"), "error");
            });
          }
        } else {
          localStorage.setItem('ascend-checked', JSON.stringify(data));
        }
      }).catch(err => {
        console.error("saveCheckedProblems - Error getting session:", err);
        localStorage.setItem('ascend-checked', JSON.stringify(data));
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
    // Resolve username: prefer authenticated Supabase session, then localStorage guest, then default.
    const downloadCardBtn = document.getElementById('downloadCardBtn');
    if (downloadCardBtn) {
      downloadCardBtn.onclick = async () => {
        let cardUsername = 'CODER';
        if (window.AscendSupabase && window.AscendSupabase.isSupabaseConfigured()) {
          const session = await AscendSupabase.getSession();
          if (session && session.user && session.user.email) {
            cardUsername = session.user.email.split('@')[0];
          }
        }
        if (cardUsername === 'CODER') {
          const user = JSON.parse(localStorage.getItem('ascend-user') || '{"username": "CODER"}');
          cardUsername = user.username || 'CODER';
        }
        generateAscensionCard(cardUsername, totalSolved, totalProblems, streaks, checkedData);
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

    // Today at midnight UTC (based on local date component)
    const today = new Date();
    const todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());

    // Start date is exactly 370 days ago in UTC representation (53 weeks * 7 days - 1 = 370 days)
    const startDateUTC = todayUTC - (370 * 24 * 60 * 60 * 1000);
    const endDateUTC = todayUTC;

    // Generate grid
    let currentTime = startDateUTC;
    const oneDayMs = 24 * 60 * 60 * 1000;
    const totalDays = Math.floor((endDateUTC - startDateUTC) / oneDayMs);

    let dayIndex = 0;
    while (currentTime <= endDateUTC) {
      const currentDate = new Date(currentTime);
      const year = currentDate.getUTCFullYear();
      const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getUTCDate()).padStart(2, '0');
      const dStr = `${year}-${month}-${day}`;

      const count = dateCounts[dStr] || 0;

      const cell = document.createElement('div');
      cell.className = 'heatmap-cell';
      cell.setAttribute('data-date', dStr);
      cell.setAttribute('data-count', count);

      // Explicit placement so the most recent day is anchored to the bottom-right.
      const col = Math.floor(dayIndex / 7);
      const row = dayIndex % 7;
      cell.style.gridColumn = `${col + 1}`;
      cell.style.gridRow = `${row + 1}`;

      if (count > 0) {
        if (count >= 4) cell.classList.add('legend-4');
        else if (count === 3) cell.classList.add('legend-3');
        else if (count === 2) cell.classList.add('legend-2');
        else if (count === 1) cell.classList.add('legend-1');
      } else {
        cell.classList.add('legend-0');
      }

      // Add edge-alignment classes for tooltips to prevent edge clipping.
      if (dayIndex < 14) {
        cell.classList.add('tooltip-left-align');
      } else if ((totalDays - dayIndex) < 14) {
        cell.classList.add('tooltip-right-align');
      }

      container.appendChild(cell);

      currentTime += oneDayMs;
      dayIndex++;
    }

    // Scroll the heatmap to the right by default on mobile so the latest dates are visible first
    const wrapper = document.querySelector('.heatmap-wrapper');
    if (wrapper) {
      setTimeout(() => {
        wrapper.scrollLeft = wrapper.scrollWidth;
      }, 50);
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
    today.setHours(0, 0, 0, 0);
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
    const W = 800;
    const H = 520;
    const scale = 3; // 3x scale multiplier for super crisp high-resolution cards
    const canvas = document.createElement('canvas');
    canvas.width = W * scale;
    canvas.height = H * scale;
    const ctx = canvas.getContext('2d');

    // Scale all subsequent drawing contexts automatically
    ctx.scale(scale, scale);

    const W_card = W - 12;
    const H_card = H - 12;
    const PAD = 24; // Standardized left/right padding

    // Helper functions
    function text(str, x, y, font, fill, align) {
      ctx.font = font;
      ctx.fillStyle = fill;
      ctx.textAlign = align || 'left';
      ctx.fillText(str, x, y);
    }

    // 1. Draw Cyan Brutalist Shadow Offset (Brutalist style)
    ctx.fillStyle = '#00f0ff';
    ctx.fillRect(12, 12, W_card, H_card);

    // 2. Main Card Surface (Body background: #161616)
    ctx.fillStyle = '#161616';
    ctx.fillRect(0, 0, W_card, H_card);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#000000';
    ctx.strokeRect(0, 0, W_card, H_card);

    // 3. Header Banner (Neon yellow background, black border/text)
    const HEADER_H = 58;
    ctx.fillStyle = '#ccff00';
    ctx.fillRect(PAD, PAD, W_card - PAD * 2, HEADER_H);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.strokeRect(PAD, PAD, W_card - PAD * 2, HEADER_H);

    // Vertically centered header text (PAD + 37)
    text('ASCEND // ASCENSION CARD', PAD + 18, PAD + 37, '900 24px "Space Grotesk", sans-serif', '#000000');

    // Vertically centered date inside header banner (PAD + 34)
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();
    text(dateStr, W_card - PAD - 18, PAD + 34, '700 13px "Space Grotesk", sans-serif', 'rgba(0,0,0,0.6)', 'right');

    // 4. User sub-label (Changed from '#ffffff' to '#b3b3b3' and reduced weight from 900 to 700)
    let Y = PAD + HEADER_H + 34;
    text('USER: @' + username.toUpperCase(), PAD, Y, '700 18px "Space Grotesk", sans-serif', '#b3b3b3');

    // 5. Organized Symmetrical Boxes (exactly 740px total span)
    Y += 22;
    const BOX_W = 360;
    const BOX_H = 108; // Symmetrical boxes

    // Left Box: PROBLEMS CONQUERED
    ctx.fillStyle = '#b3b3b3';
    ctx.fillRect(PAD, Y, BOX_W, BOX_H);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.strokeRect(PAD, Y, BOX_W, BOX_H);

    text('PROBLEMS CONQUERED', PAD + 16, Y + 26, '900 11px "Space Grotesk", sans-serif', '#000000');

    // Black badge block inside left box
    ctx.fillStyle = '#000000';
    ctx.fillRect(PAD + 16, Y + 42, BOX_W - 32, 48);

    ctx.font = '700 20px "Space Grotesk", sans-serif'; // Reduced weight from 900 to 700
    ctx.fillStyle = '#ccff00';
    const solvedStr = totalSolved.toString();
    ctx.fillText(solvedStr, PAD + 30, Y + 73);

    ctx.fillStyle = '#b3b3b3'; // Changed from '#ffffff' to '#b3b3b3'
    const offsetSlash = PAD + 30 + ctx.measureText(solvedStr).width + 6;
    ctx.fillText('/ ' + totalProblems, offsetSlash, Y + 73);

    // Right Box: CONSISTENCY STREAKS
    const rightX = PAD + BOX_W + 20; // 24 + 360 + 20 = 404
    ctx.fillStyle = '#b3b3b3';
    ctx.fillRect(rightX, Y, BOX_W, BOX_H);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.strokeRect(rightX, Y, BOX_W, BOX_H);

    text('CONSISTENCY STREAKS', rightX + 16, Y + 26, '900 11px "Space Grotesk", sans-serif', '#000000');
    text('CURRENT STREAK: ' + streaks.currentStreak + (streaks.currentStreak === 1 ? ' DAY' : ' DAYS'), rightX + 16, Y + 56, '900 14px "Space Grotesk", sans-serif', '#000000');
    text('MAX STREAK: ' + streaks.maxStreak + (streaks.maxStreak === 1 ? ' DAY' : ' DAYS'), rightX + 16, Y + 84, '900 14px "Space Grotesk", sans-serif', '#000000');

    // 6. Consistency Heatmap Section (Changed from white #ffffff to greyish #b3b3b3, reduced weight from 900 to 700, and size to 14px)
    Y += BOX_H + 38;
    text('CONSISTENCY HEATMAP [PAST YEAR]', PAD, Y, '700 14px "Space Grotesk", sans-serif', '#b3b3b3');

    Y += 14;
    const CELL = 12;
    const CGAP = 2;
    const ROWS = 7;
    const hmStartX = PAD; // Align exactly with left box outer edge (24)

    // Aggregate solved dates
    const dateCounts = {};
    for (const key in checkedData) {
      if (checkedData[key] && checkedData[key].completed && checkedData[key].date) {
        const d = checkedData[key].date;
        dateCounts[d] = (dateCounts[d] || 0) + 1;
      }
    }

    // Exact 370-day layout from the stats dashboard
    const todayCard = new Date();
    const todayUTC = Date.UTC(todayCard.getFullYear(), todayCard.getMonth(), todayCard.getDate());
    const startDateUTC = todayUTC - (370 * 24 * 60 * 60 * 1000);
    const oneDayMs = 24 * 60 * 60 * 1000;

    const colors = [
      '#262626',
      'rgba(204, 255, 0, 0.25)',
      'rgba(204, 255, 0, 0.5)',
      'rgba(204, 255, 0, 0.75)',
      '#ccff00'
    ];

    let currentTime = startDateUTC;
    let dayIndex = 0;
    while (currentTime <= todayUTC) {
      const d = new Date(currentTime);
      const dStr = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
      const cnt = dateCounts[dStr] || 0;
      const lvl = cnt >= 4 ? 4 : cnt;

      const col = Math.floor(dayIndex / ROWS);
      const row = dayIndex % ROWS;
      const cx = hmStartX + col * (CELL + CGAP);
      const cy = Y + row * (CELL + CGAP);

      ctx.fillStyle = colors[lvl];
      ctx.fillRect(cx, cy, CELL, CELL);

      currentTime += oneDayMs;
      dayIndex++;
    }

    // Legend - centered below heatmap
    const LEG_Y = Y + ROWS * (CELL + CGAP) + 12;
    const legTotalW = 32 + 5 * (CELL + CGAP) + 32;
    const legStartX = Math.round((W_card - legTotalW) / 2);

    text('Less', legStartX, LEG_Y + 8, '600 10px "Space Grotesk", sans-serif', '#b3b3b3');
    for (let i = 0; i <= 4; i++) {
      const lx = legStartX + 30 + i * (CELL + CGAP);
      ctx.fillStyle = colors[i];
      ctx.fillRect(lx, LEG_Y, CELL, CELL);
    }
    text('More', legStartX + 30 + 5 * (CELL + CGAP) + 6, LEG_Y + 8, '600 10px "Space Grotesk", sans-serif', '#b3b3b3');

    // 7. Ascension Bar Section (Changed from white #ffffff/900 weight to greyish #b3b3b3/700 weight, and size to 14px)
    Y = LEG_Y + 26;
    const pct = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;
    const BAR_W = W_card - PAD * 2; // Exact same 740px span
    const BAR_X = PAD;
    const BAR_H = 22;

    text('ASCENSION BAR', BAR_X, Y, '700 14px "Space Grotesk", sans-serif', '#b3b3b3');
    text(totalSolved + ' / ' + totalProblems + ' SOLVED (' + pct + '%)', BAR_X + BAR_W, Y, '700 14px "Space Grotesk", sans-serif', '#ccff00', 'right');

    Y += 10;
    ctx.fillStyle = '#262626';
    ctx.fillRect(BAR_X, Y, BAR_W, BAR_H);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.strokeRect(BAR_X, Y, BAR_W, BAR_H);

    const fillW = Math.round(BAR_W * pct / 100);
    if (fillW > 0) {
      ctx.fillStyle = '#ccff00';
      ctx.fillRect(BAR_X, Y, fillW, BAR_H);
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#000000';
      ctx.strokeRect(BAR_X, Y, fillW, BAR_H);
    }

    // 8. Watermark (Verify at bottom-right pointing to getascend.vercel.app)
    text('verify at: getascend.vercel.app', W_card - PAD, H_card - 12, '600 10px "Space Grotesk", sans-serif', 'rgba(179,179,179,0.5)', 'right');

    // 9. Floating Preview Modal Trigger
    const dataURL = canvas.toDataURL('image/png');
    const overlay = document.getElementById('cardModalOverlay');
    const previewImg = document.getElementById('cardPreviewImg');
    const downloadBtn = document.getElementById('cardDownloadBtn');

    if (!overlay || !previewImg || !downloadBtn) return;

    previewImg.src = dataURL;
    overlay.classList.add('show');

    // Download handler
    downloadBtn.onclick = () => {
      const link = document.createElement('a');
      link.download = 'ascension-card-' + username + '.png';
      link.href = dataURL;
      link.click();
    };

    // Close on overlay backdrop click (safe: .onclick replaces on each call)
    overlay.onclick = (e) => {
      if (e.target === overlay || e.target.classList.contains('floating-card-container')) {
        overlay.classList.remove('show');
      }
    };

    // Escape key: remove any previously attached handler before adding a fresh one
    // to prevent accumulation of stale handlers on repeated card generations.
    if (overlay._escHandler) {
      document.removeEventListener('keydown', overlay._escHandler);
    }
    overlay._escHandler = (e) => {
      if (e.key === 'Escape') {
        overlay.classList.remove('show');
        document.removeEventListener('keydown', overlay._escHandler);
        overlay._escHandler = null;
      }
    };
    document.addEventListener('keydown', overlay._escHandler);
  }
});