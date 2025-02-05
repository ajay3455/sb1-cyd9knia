import React from 'react';
import { Thermometer, Droplets, Wrench, Zap, Lock, PaintBucket } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Issues 📋', icon: Wrench },
  { id: 'HVAC', name: 'HVAC 🌡️', icon: Thermometer },
  { id: 'Plumbing', name: 'Plumbing 🚰', icon: Droplets },
  { id: 'Electrical', name: 'Electrical ⚡', icon: Zap },
  { id: 'Security', name: 'Security 🔒', icon: Lock },
  { id: 'Paint', name: 'Paint 🎨', icon: PaintBucket },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
      {categories.map(({ id, name, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onSelectCategory(id)}
          className={`flex items-center px-3 py-2 rounded-xl transition-all justify-center
            ${selectedCategory === id
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
              : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-purple-100'
            }`}
        >
          <Icon className="w-4 h-4 mr-2" />
          {name}
        </button>
      ))}
    </div>
  );
};