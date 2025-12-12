export const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "").trim() || "http://localhost:5000";

// log at runtime to help debug which backend URL the browser is using
try {
  // eslint-disable-next-line no-console
  console.log("API_BASE:", API_BASE);
} catch (e) {
  // ignore server-side logging
}

export async function signup(payload: { name: string; email: string; password: string }) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw { status: res.status, data };
  return data;
}

export async function login(payload: { email: string; password: string }) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw { status: res.status, data };
  return data;
}
