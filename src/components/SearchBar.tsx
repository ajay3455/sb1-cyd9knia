import React from 'react';
import { Search, X, Thermometer, Droplets, Wrench, Zap, Lock, Power, Wifi } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { issuesByCategory } from '../issues';

interface HighlightedTextProps {
  text: string;
  searchTerms: string[];
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, searchTerms }) => {
  if (!searchTerms.length) return <span>{text}</span>;
  
  const escapedTerms = searchTerms.map(term => 
    term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <span>
      {parts.map((part, i) => {
        const isMatch = searchTerms.some(term => 
          part.toLowerCase() === term.toLowerCase()
        );
        return isMatch ? (
          <mark 
            key={i} 
            className="bg-yellow-100 text-gray-900 rounded px-0.5"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
};

// Search keywords and their related terms
const SEARCH_KEYWORDS = {
  'fob': ['key', 'access', 'entry', 'door', 'lost fob', 'new fob', 'replacement', 'activate', 'deactivate', 'garage remote', 'building access', 'security key', 'proximity card', 'rfid'],
  'buzzer': ['intercom', 'buzz code', 'entry code', 'door code', 'visitor access', 'guest access', 'door phone', 'entry system', 'call unit', 'visitor management'],
  'hvac': ['heating', 'cooling', 'air conditioning', 'temperature', 'thermostat', 'heat pump', 'filter', 'ac', 'furnace', 'ventilation', 'fan', 'climate', 'comfort', 'air flow', 'cold air', 'hot air', 'noise', 'loud', 'battery', 'batteries', 'replacement', 'merrit'],
  'plumbing': ['water', 'leak', 'toilet', 'drain', 'sink', 'faucet', 'shower', 'bathroom', 'pipe', 'clog', 'blockage', 'dripping', 'running water', 'water pressure', 'hot water', 'cold water', 'shutoff valve'],
  'appliance': ['oven', 'stove', 'cooktop', 'dishwasher', 'fridge', 'refrigerator', 'microwave', 'range hood', 'kitchen', 'appliance', 'blomberg', 'panasonic', 'exhaust fan', 'kitchen fan', 'range', 'burner', 'electric', 'built-in', 'slim tub', 'tall tub', 'filter', 'grease', 'maintenance'],
  'security': ['alarm', 'camera', 'emergency', 'smoke detector', 'fire alarm', 'safety', 'panic button', 'security system', 'surveillance', 'monitoring', 'emergency exit', 'fire safety', 'carbon monoxide', 'co detector', 'cybersuite', 'touch sense', 'lcd keypad', 'panel', 'code', 'pin'],
  'internet': ['wifi', 'network', 'connection', 'rogers', 'bell', 'beanfield', 'provider', 'internet service', 'isp', 'fiber', 'wireless', 'router', 'modem', 'speed', 'bandwidth'],
  'electrical': ['power', 'outlet', 'light', 'breaker', 'circuit', 'switch', 'electricity', 'electrical panel', 'fuse box', 'tripped breaker', 'power outage', 'socket', 'plug', 'voltage', 'wiring', 'bulb', 'led', 'fixture', 'lighting'],
  'emergency': ['urgent', 'emergency', 'immediate', 'critical', 'security', 'flood', 'fire', 'leak', 'safety', 'danger', 'hazard', '911', 'ambulance', 'police', 'medical'],
  'maintenance': ['repair', 'fix', 'service', 'maintain', 'upkeep', 'clean', 'replace', 'install', 'upgrade', 'troubleshoot', 'problem', 'issue', 'broken', 'damage', 'malfunction'],
  'furniture': ['furniture', 'chair', 'table', 'sofa', 'couch', 'bed', 'assembly', 'repair', 'parts', 'warranty', 'moving', 'damage', 'maintenance', 'care', 'upholstery']
};

// Category filters with icons and descriptions
const CATEGORY_FILTERS = [
  { id: 'all', name: 'All Categories', icon: 'Wrench' },
  { id: 'HVAC', name: 'HVAC', icon: 'Thermometer', description: 'Heating, cooling, and ventilation' },
  { id: 'Plumbing', name: 'Plumbing', icon: 'Droplets', description: 'Water and drainage systems' },
  { id: 'Electrical', name: 'Electrical', icon: 'Zap', description: 'Power and electrical systems' },
  { id: 'Security', name: 'Security', icon: 'Shield', description: 'Building security and access' },
  { id: 'Appliances', name: 'Appliances', icon: 'Power', description: 'Kitchen and home appliances' },
  { id: 'Internet', name: 'Internet', icon: 'Wifi', description: 'Internet and network services' },
  { id: 'Furniture', name: 'Furniture', icon: 'Sofa', description: 'Furniture maintenance and repairs' }
];

// Function to get all related terms for a search query
const getRelatedTerms = (query: string): string[] => {
  const terms = new Set<string>([query.toLowerCase()]);
  
  // Add related terms from keywords
  Object.entries(SEARCH_KEYWORDS).forEach(([key, relatedTerms]) => {
    if (query.toLowerCase().includes(key) || 
        relatedTerms.some(term => query.toLowerCase().includes(term))) {
      relatedTerms.forEach(term => terms.add(term));
      terms.add(key);
    }
  });
  
  return Array.from(terms);
};

// Function to calculate search relevance score
const getSearchScore = (text: string, searchTerms: string[]): number => {
  let score = 0;
  const lowerText = text.toLowerCase();
  
  searchTerms.forEach(term => {
    // Exact match gets highest score
    if (lowerText === term) score += 10;
    // Word boundary match gets high score
    else if (new RegExp(`\\b${term}\\b`).test(lowerText)) score += 5;
    // Partial match gets lower score
    else if (lowerText.includes(term)) score += 2;
  });
  
  return score;
};

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
}

interface SearchState {
  query: string;
  selectedCategory: string;
  showCategories: boolean;
  isSearching: boolean;
}

interface SearchResult {
  id: string;
  title: string;
  type: 'issue' | 'faq';
  description: string;
  category: string;
  emergency: boolean;
  faqId?: string;
  question?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className }) => {
  const navigate = useNavigate();
  const [searchState, setSearchState] = React.useState<SearchState>({
    query: '',
    selectedCategory: 'all',
    showCategories: false,
    isSearching: false
  });
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const searchRef = React.useRef<HTMLDivElement>(null);

  const allIssues = React.useMemo(() => {
    return Object.values(issuesByCategory).flat();
  }, []);

  const handleSearch = (searchQuery: string) => {
    setSearchState(prev => ({ ...prev, query: searchQuery }));
    onSearch(searchQuery);

    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const searchResults = allIssues
      .filter(issue => searchState.selectedCategory === 'all' || issue.category === searchState.selectedCategory)
      .flatMap(issue => {
        const searchTerms = getRelatedTerms(searchQuery);
        const searchStr = `${issue.title} ${issue.description} ${issue.category} ${
          issue.steps?.map(step => `${step.title} ${step.description}`).join(' ')
        }`.toLowerCase();
        
        const results: SearchResult[] = [];
        let score = getSearchScore(searchStr, searchTerms);
        
        // Add main issue if it has a score
        if (score > 0) {
          results.push({
            id: issue.id,
            type: 'issue',
            title: issue.title,
            description: issue.description,
            category: issue.category,
            emergency: issue.emergency,
            score
          });
        }
        
        // Add FAQs if they match
        if (issue.faqs) {
          issue.faqs.forEach(faq => {
            const faqStr = `${faq.question} ${faq.answer}`.toLowerCase();
            const faqScore = getSearchScore(faqStr, searchTerms);
            
            if (faqScore > 0) {
              results.push({
                id: issue.id,
                type: 'faq',
                title: faq.question,
                description: issue.title,
                category: issue.category,
                emergency: issue.emergency,
                faqId: faq.id,
                question: faq.question,
                score: faqScore
              });
            }
          });
        }
        
        return results;
      })
      // Sort by score (highest first)
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, 10); // Limit to top 10 results

    setResults(searchResults);
  };

  const handleCategoryChange = (category: string) => {
    setSearchState(prev => ({ ...prev, selectedCategory: category }));
    handleSearch(searchState.query); // Re-run search with new category filter
  };

  const handleResultClick = (result: SearchResult) => {    
    if (result.type === 'faq') {
      // Navigate to issue page and open specific FAQ
      navigate(`/issue/${result.id}?faq=${result.faqId}`);
    } else {
      navigate(`/issue/${result.id}`);
    }
    setSearchState(prev => ({ ...prev, query: '' }));
    setResults([]);
    setSearchState(prev => ({ ...prev, isSearching: false }));
  };

  // Close search results when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchState(prev => ({ ...prev, isSearching: false, showCategories: false }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="space-y-2">
        {/* Search Input */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search maintenance guides..."
            value={searchState.query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setSearchState(prev => ({ ...prev, isSearching: true }))}
            className="flex-1 px-4 py-2.5 pl-11 pr-24 text-sm text-gray-700 bg-white/95 backdrop-blur-sm 
              border border-purple-100 rounded-xl shadow-sm focus:outline-none focus:ring-2
              focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          
          {/* Category Dropdown */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
            <button
              onClick={() => setSearchState(prev => ({ 
                ...prev, 
                isSearching: false,
                showCategories: !prev.showCategories 
              }))}
              className={`flex items-center px-2 py-1 rounded-lg text-sm transition-all
                ${searchState.selectedCategory !== 'all'
                  ? 'bg-purple-100 text-purple-700 font-medium hover:bg-purple-200'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              {searchState.selectedCategory === 'all' ? (
                <>Filter</>
              ) : (
                <span className="flex items-center">
                  {searchState.selectedCategory}
                  <X 
                    className="w-4 h-4 ml-1.5 hover:text-purple-900" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryChange('all');
                    }}
                  />
                </span>
              )}
            </button>
          </div>
          
          {searchState.query && (
            <button
              onClick={() => {
                setSearchState(prev => ({ ...prev, query: '' }));
                setResults([]);
              }}
              className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 
                transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Dropdown Menu */}
        {searchState.showCategories && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border 
            border-purple-100 shadow-lg overflow-hidden z-50">
            <div className="p-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
              {CATEGORY_FILTERS.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    handleCategoryChange(category.id);
                    setSearchState(prev => ({ ...prev, showCategories: false }));
                  }}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all
                    ${searchState.selectedCategory === category.id
                      ? 'bg-purple-100 text-purple-700 font-medium'
                      : 'hover:bg-purple-50 text-gray-600'
                    }`}
                >
                  <div className="flex-1 text-left">
                    <div className="font-medium">{category.name}</div>
                    {category.description && (
                      <div className="text-xs text-gray-500">{category.description}</div>
                    )}
                  </div>
                  {searchState.selectedCategory === category.id && (
                    <div className="w-2 h-2 rounded-full bg-purple-500 ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {searchState.isSearching && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-purple-100 
          shadow-lg overflow-hidden z-50 max-h-[60vh] overflow-y-auto">
          <div className="p-2 space-y-1">
            {results.map((result) => (
              <button
                key={result.id}
                onClick={() => handleResultClick(result)}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 transition-colors 
                  group relative"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600 
                      transition-colors line-clamp-1">
                      <HighlightedText 
                        text={result.title}
                        searchTerms={getRelatedTerms(searchState.query)}
                      />
                    </h4>
                    {result.type === 'faq' ? (
                      <p className="text-sm text-gray-600 line-clamp-1 mt-0.5">
                        From: {result.description}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-600 line-clamp-1 mt-0.5">
                        <HighlightedText 
                          text={result.description}
                          searchTerms={getRelatedTerms(searchState.query)}
                        />
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                    {result.type === 'faq' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs 
                        font-medium bg-indigo-100 text-indigo-800">
                        FAQ
                      </span>
                    )}
                    {result.emergency && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs 
                        font-medium bg-red-100 text-red-800">
                        Emergency
                      </span>
                    )}
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs 
                      font-medium bg-purple-100 text-purple-800">
                      {result.category}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {searchState.isSearching && searchState.query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border 
          border-purple-100 shadow-lg overflow-hidden z-50">
          <div className="p-4 text-center text-gray-600">
            <p className="font-medium">No results found</p>
            <p className="text-sm mt-1">Try adjusting your search terms</p>
          </div>
        </div>
      )}
    </div>
  );
};