"use client";

import { useState } from "react";

export default function SignupPage() {
  const [role, setRole] = useState("user");

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Account</h1>

        <input
          placeholder="Name"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <select
          className="w-full border p-3 rounded-lg mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="seller">Seller</option>
        </select>

        <button className="w-full bg-green-600 text-white py-3 rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
}