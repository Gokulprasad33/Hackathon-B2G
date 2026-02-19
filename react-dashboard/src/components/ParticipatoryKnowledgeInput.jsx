import React, { useState } from 'react';

const ParticipatoryKnowledgeInput = ({ onSubmit }) => {
  const [form, setForm] = useState({
    observationType: '',
    description: '',
    location: '',
    date: '',
    photos: null,
    consent: false
  });

  const observationTypes = [
    { value: 'catch-pattern', label: 'Fish Catch Pattern' },
    { value: 'seasonal-indicator', label: 'Seasonal Indicator' },
    { value: 'pollution-sighting', label: 'Pollution Sighting' },
    { value: 'coral-condition', label: 'Coral Condition' },
    { value: 'water-behavior', label: 'Water Behavior' },
    { value: 'biodiversity-signal', label: 'Biodiversity Signal' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) {
      alert('Please consent to share this observation with the community.');
      return;
    }
    onSubmit?.(form);
    setForm({
      observationType: '',
      description: '',
      location: '',
      date: '',
      photos: null,
      consent: false
    });
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-5">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-text">Share Local Observation</h3>
        <p className="text-xs text-textMuted mt-1">Contribute traditional knowledge and recent sightings</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text mb-1">Observation Type</label>
          <select
            value={form.observationType}
            onChange={e => setForm(f => ({ ...f, observationType: e.target.value }))}
            className="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            required
          >
            <option value="">Select type...</option>
            {observationTypes.map(t => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1">Description</label>
          <textarea
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            rows={3}
            placeholder="Describe what you observed, including any patterns or changes over time..."
            className="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text mb-1">Location</label>
            <input
              type="text"
              value={form.location}
              onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
              placeholder="e.g., North Reef, 2km off Bay Point"
              className="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1">Date Observed</label>
            <input
              type="date"
              value={form.date}
              onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
              className="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1">Photos (optional)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={e => setForm(f => ({ ...f, photos: e.target.files }))}
            className="w-full text-sm text-textMuted file:mr-3 file:rounded file:border-0 file:bg-primary/10 file:text-primary file:py-1 file:px-3"
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            checked={form.consent}
            onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))}
            className="mt-1 mr-2"
          />
          <label htmlFor="consent" className="text-xs text-textMuted">
            I consent to share this observation with the community to improve local ocean intelligence. Personal identifiers will not be shared.
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 rounded-md bg-primary text-surface text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Submit Observation
        </button>
      </form>
    </div>
  );
};

export default ParticipatoryKnowledgeInput;
