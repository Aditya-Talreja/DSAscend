// Supabase Client Initialization and Helper Functions
// Fill in your credentials here, or configure them via the UI when prompted.
const SUPABASE_URL = "https://rxfixvwqtnvulretgmlm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4Zml4dndxdG52dWxyZXRnbWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NTk2MzYsImV4cCI6MjA5NzUzNTYzNn0.CQFn58wkgnQLx9I0CL2EFmF9C_98ufMO6hBktsczoIY";

let supabaseClient = null;

// Initialize Supabase Client
function initSupabase() {
  if (supabaseClient) return supabaseClient;

  const url = SUPABASE_URL;
  const key = SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error("Supabase is not configured.");
    return null;
  }

  // Create client (supabase comes from global script tag)
  if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
    return supabaseClient;
  } else {
    console.error("Supabase CDN script is not loaded yet.");
    return null;
  }
}

// Check if configured
function isSupabaseConfigured() {
  return initSupabase() !== null;
}

// Real Supabase Auth Helpers
async function signUp(email, password) {
  const client = initSupabase();
  if (!client) throw new Error("Supabase is not configured.");
  const { data, error } = await client.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

async function signIn(email, password) {
  const client = initSupabase();
  if (!client) throw new Error("Supabase is not configured.");
  const { data, error } = await client.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function signInWithGoogle() {
  const client = initSupabase();
  if (!client) throw new Error("Supabase is not configured.");
  const { data, error } = await client.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin
    }
  });
  if (error) throw error;
  return data;
}

async function signOut() {
  const client = initSupabase();
  if (!client) return;
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

async function getSession() {
  const client = initSupabase();
  if (!client) return null;
  const { data: { session }, error } = await client.auth.getSession();
  if (error) {
    console.error("Error getting session:", error);
    return null;
  }
  return session;
}

function onAuthStateChange(callback) {
  const client = initSupabase();
  if (!client) return { unsubscribe: () => {} };
  const { data: { subscription } } = client.auth.onAuthStateChange(callback);
  return subscription;
}

// Database Helpers for User Progress
async function fetchUserProgress() {
  const client = initSupabase();
  if (!client) return {};
  
  const session = await getSession();
  if (!session) return {};

  const { data, error } = await client
    .from('user_progress')
    .select('problem_id, completed, date')
    .eq('user_id', session.user.id);

  if (error) {
    console.error("Error fetching user progress:", error);
    throw error;
  }

  // Convert list of rows to map format: { "p-123": { completed: true, date: "YYYY-MM-DD" } }
  const progressMap = {};
  if (Array.isArray(data)) {
    data.forEach(row => {
      progressMap[`p-${row.problem_id}`] = {
        completed: row.completed,
        date: row.date
      };
    });
  }
  return progressMap;
}

async function upsertProgress(problemId, date) {
  const client = initSupabase();
  if (!client) return;

  const session = await getSession();
  if (!session) throw new Error("Must be logged in to save progress.");

  const parsedId = parseInt(problemId);
  if (isNaN(parsedId)) {
    console.error(`Invalid problem ID: ${problemId}`);
    return;
  }

  const { error } = await client
    .from('user_progress')
    .upsert({
      user_id: session.user.id,
      problem_id: parsedId,
      completed: true,
      date: date
    });

  if (error) {
    console.error(`Error saving progress for problem ${problemId}:`, error);
    throw error;
  }
}

async function upsertProgressBulk(records) {
  const client = initSupabase();
  if (!client) return;

  const session = await getSession();
  if (!session) throw new Error("Must be logged in to save progress.");

  if (!records || !Array.isArray(records) || records.length === 0) return;

  const formattedRecords = records.map(rec => ({
    user_id: session.user.id,
    problem_id: parseInt(rec.problemId),
    completed: true,
    date: rec.date || new Date().toISOString().split('T')[0]
  })).filter(rec => !isNaN(rec.problem_id));

  if (formattedRecords.length === 0) return;

  const { error } = await client
    .from('user_progress')
    .upsert(formattedRecords);

  if (error) {
    console.error("Error bulk saving progress:", error);
    throw error;
  }
}

async function deleteProgress(problemId) {
  const client = initSupabase();
  if (!client) return;

  const session = await getSession();
  if (!session) throw new Error("Must be logged in to delete progress.");

  const parsedId = parseInt(problemId);
  if (isNaN(parsedId)) {
    console.error(`Invalid problem ID: ${problemId}`);
    return;
  }

  const { error } = await client
    .from('user_progress')
    .delete()
    .eq('user_id', session.user.id)
    .eq('problem_id', parsedId);

  if (error) {
    console.error(`Error deleting progress for problem ${problemId}:`, error);
    throw error;
  }
}

// Export functions to global scope
window.AscendSupabase = {
  initSupabase,
  isSupabaseConfigured,
  signUp,
  signIn,
  signInWithGoogle,
  signOut,
  getSession,
  onAuthStateChange,
  fetchUserProgress,
  upsertProgress,
  upsertProgressBulk,
  deleteProgress
};
