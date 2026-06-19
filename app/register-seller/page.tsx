"use client";

import { useState } from "react";

export default function RegisterSeller() {
  const [form, setForm] = useState({
    business_name: "",
    owner_name: "",
    email: "",
    phone: "",
    website: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("Seller registration submitted!");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">
          Register Your Business
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="business_name"
            placeholder="Business Name"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="owner_name"
            placeholder="Owner Name"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="website"
            placeholder="Website / Instagram"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded"
          >
            Register Business
          </button>
        </form>
      </div>
    </div>
  );
}