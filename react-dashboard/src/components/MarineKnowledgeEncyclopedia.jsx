import React, { useState } from 'react';

const MarineKnowledgeEncyclopedia = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'fish', label: 'Fish Species' },
    { value: 'coral', label: 'Coral Reefs' },
    { value: 'practices', label: 'Sustainable Practices' },
    { value: 'threats', label: 'Threats & Indicators' }
  ];

  const knowledgeBase = [
    {
      id: 1,
      category: 'fish',
      title: 'Tuna (Yellowfin)',
      localName: 'Isdang',
      ecologicalRole: 'Apex predator, regulates fish populations',
      seasonalPattern: 'Abundant during monsoon transition (Oct–Dec)',
      sustainableGuidance: 'Use circle hooks, avoid spawning season (Jan–Mar)',
      culturalSignificance: 'Traditional food source, indicator of ocean health'
    },
    {
      id: 2,
      category: 'coral',
      title: 'Staghorn Coral',
      localName: 'Kaga-kaga',
      ecologicalRole: 'Coastal protection, nursery habitat',
      seasonalPattern: 'Spawning occurs after full moon in spring',
      sustainableGuidance: 'Maintain 30m no-anchor zones, avoid touch',
      culturalSignificance: 'Natural breakwater, fishing navigation marker'
    },
    {
      id: 3,
      category: 'practices',
      title: 'Community Managed No-Take Zones',
      localName: 'Pangandaman',
      ecologicalRole: 'Fish stock recovery, biodiversity refuge',
      seasonalPattern: 'Year-round protection, seasonal enforcement',
      sustainableGuidance: 'Rotate zones every 2 years, community monitoring',
      culturalSignificance: 'Traditional resource management, inter-generational knowledge'
    },
    {
      id: 4,
      category: 'threats',
      title: 'Coral Bleaching Indicators',
      localName: 'Pamputi sa kaga',
      ecologicalRole: 'Stress response to temperature/pollution',
      seasonalPattern: 'Peak during El Niño events, summer months',
      sustainableGuidance: 'Reduce local stressors, report early signs',
      culturalSignificance: 'Traditional warning system for fishing communities'
    }
  ];

  const filteredKnowledge = knowledgeBase.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.localName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.ecologicalRole.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const KnowledgeCard = ({ item }) => (
    <div className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-bold text-text">{item.title}</h4>
          <p className="text-xs text-accent font-medium">{item.localName}</p>
        </div>
        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
          {categories.find(c => c.value === item.category)?.label}
        </span>
      </div>
      <div className="space-y-2 text-xs">
        <div>
          <span className="font-medium text-text">Ecological Role:</span>
          <p className="text-textMuted mt-1">{item.ecologicalRole}</p>
        </div>
        <div>
          <span className="font-medium text-text">Seasonal Pattern:</span>
          <p className="text-textMuted mt-1">{item.seasonalPattern}</p>
        </div>
        <div>
          <span className="font-medium text-text">Sustainable Guidance:</span>
          <p className="text-textMuted mt-1">{item.sustainableGuidance}</p>
        </div>
        <div>
          <span className="font-medium text-text">Cultural Significance:</span>
          <p className="text-textMuted mt-1">{item.culturalSignificance}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-surface border border-border rounded-lg p-5">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-text">Marine Knowledge Encyclopedia</h3>
        <p className="text-xs text-textMuted mt-1">Region-specific species, practices, and traditional knowledge</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Search species, practices, or local names..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="flex-1 rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          {categories.map(cat => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
      </div>

      {/* Knowledge Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredKnowledge.map(item => (
          <KnowledgeCard key={item.id} item={item} />
        ))}
      </div>

      {filteredKnowledge.length === 0 && (
        <div className="text-center py-8">
          <p className="text-sm text-textMuted">No entries found. Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default MarineKnowledgeEncyclopedia;
