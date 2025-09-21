"use client"
import { useState } from "react"

export default function Page() {
  const [form, setForm] = useState({
    booth: "",
    brands: [""],
    bioEn: "",
    bioAr: "",
    websites: [""],
    sponsor: "",
    featured: false,
  })

  const boothOptions = [
    "Hall 6 – 01","Hall 6 – 02","Hall 6 – 03","Hall 6 – 04","Hall 6 – 05",
    "Hall 6 – 06","Hall 6 – 07","Hall 6 – 08","Hall 6 – 09","Hall 6 – 09A","Hall 6 – 10"
  ]

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }))
  const handleArrayChange = (field, idx, value) => {
    setForm(prev => {
      const copy = [...prev[field]]
      copy[idx] = value
      return { ...prev, [field]: copy }
    })
  }

  const addItem = (field) =>
    setForm(prev => ({ ...prev, [field]: [...prev[field], ""] }))

  const removeItem = (field, idx) =>
    setForm(prev => {
      const copy = prev[field].filter((_, i) => i !== idx)
      return { ...prev, [field]: copy.length ? copy : [""] }
    })

  const toggleFeatured = () =>
    setForm(prev => ({ ...prev, featured: !prev.featured }))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submit (mock):", form)
    alert("Form data logged to console (mock).")
  }

  return (
    <div className="max-w-6xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Step 1: Company Profile</h2>
          <p className="text-sm text-gray-500 mt-1">Provide your company's information.</p>
        </div>

        {/* Booth + Brand (two column) */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Booth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Booth Number(s) *</label>
            <select
              value={form.booth}
              onChange={(e) => handleChange("booth", e.target.value)}
              className="w-full rounded-md bg-gray-100 border border-gray-200 p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Select a booth number</option>
              {boothOptions.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            <p className="text-xs text-gray-400 mt-2">
              Select the booth number from the list. This is your unique identifier.
            </p>
          </div>

          {/* Brand Names */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Brand Names *</label>

            {/* brand inputs list */}
            <div className="space-y-3">
              {form.brands.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <input
                    value={b}
                    onChange={(e) => handleArrayChange("brands", i, e.target.value)}
                    placeholder={`Brand Name ${i + 1}`}
                    className="flex-1 rounded-md bg-gray-100 border border-gray-200 p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                  {/* remove button */}
                  {form.brands.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem("brands", i)}
                      className="h-9 w-9 flex items-center justify-center border rounded-md text-gray-600 hover:bg-gray-50"
                      aria-label="Remove brand"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Add button inline on md, stacked on small screens */}
            <div className="mt-3">
              <button
                type="button"
                onClick={() => addItem("brands")}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 border border-gray-200 text-sm hover:bg-gray-50"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Add Brand Name
              </button>
            </div>
          </div>
        </div>

        {/* Bio EN + AR (two column) */}
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Short Bio (English) *</label>
            <textarea
              value={form.bioEn}
              onChange={(e) => handleChange("bioEn", e.target.value)}
              maxLength={300}
              placeholder="Tell us about your company..."
              rows={4}
              className="w-full rounded-md bg-gray-100 border border-gray-200 p-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <div className="flex justify-between mt-2">
              <div className="text-xs text-gray-400">Max 300 characters.</div>
              <div className="text-xs text-gray-400">{form.bioEn.length}/300</div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Short Bio (Arabic) *</label>
            <textarea
              value={form.bioAr}
              onChange={(e) => handleChange("bioAr", e.target.value)}
              maxLength={300}
              placeholder="...أخبرنا عن شركتك"
              rows={4}
              className="w-full rounded-md bg-gray-100 border border-gray-200 p-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-right"
            />
            <div className="flex justify-between mt-2">
              <div className="text-xs text-gray-400">Max 300 characters.</div>
              <div className="text-xs text-gray-400">{form.bioAr.length}/300</div>
            </div>
          </div>
        </div>

        {/* Websites */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Website(s) *</label>
          <div className="space-y-3">
            {form.websites.map((w, i) => (
              <div key={i} className="flex items-center gap-3">
                <input
                  type="url"
                  value={w}
                  onChange={(e) => handleArrayChange("websites", i, e.target.value)}
                  placeholder="https://example.com"
                  className="flex-1 rounded-md bg-gray-100 border border-gray-200 p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                {form.websites.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem("websites", i)}
                    className="h-9 w-9 flex items-center justify-center border rounded-md text-gray-600 hover:bg-gray-50"
                    aria-label="Remove website"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-3">
            <button
              type="button"
              onClick={() => addItem("websites")}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 border border-gray-200 text-sm hover:bg-gray-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Add Website
            </button>
          </div>
        </div>

        {/* Sponsor + Featured (two column, featured box right) */}
        <div className="grid md:grid-cols-2 gap-8 mt-6 items-start">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Are you a sponsor?</label>
            <select
              value={form.sponsor}
              onChange={(e) => handleChange("sponsor", e.target.value)}
              className="w-full rounded-md bg-gray-100 border border-gray-200 p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">None</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="bronze">Bronze</option>
            </select>
          </div>

          <div>
            <div className="border border-gray-200 rounded-md p-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-800">Featured Vendor</div>
                <div className="text-xs text-gray-400">This will be a paid feature. If selected, our team will contact you.</div>
              </div>

              <button
                type="button"
                onClick={toggleFeatured}
                className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors focus:outline-none ${form.featured ? "bg-blue-600" : "bg-gray-300" }`}
                aria-pressed={form.featured}
              >
                <span
                  className={`inline-block h-5 w-5 transform bg-white rounded-full shadow transition-transform ${form.featured ? "translate-x-5" : "translate-x-1"}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium"
          >
            Next: Add Product Details
          </button>
        </div>
      </form>
    </div>
  )
}
