import { NavigateFunction } from 'react-router-dom';
import { AlertTriangle, Thermometer, Droplets, Lock, Power, Wifi, Wrench, Settings, Fan, Refrigerator, UtensilsCrossed } from 'lucide-react';
import { ChatOption } from '../types/chat';

export const generateHVACOptions = (navigate: NavigateFunction): ChatOption[] => [
  {
    text: "No heat or cooling",
    action: () => navigate('/issue/no-heat-cooling'),
    category: 'HVAC',
    subcategory: 'Troubleshooting',
    icon: 'thermometer'
  },
  {
    text: "Replace HVAC filter",
    action: () => navigate('/issue/hvac-filter'),
    category: 'HVAC',
    subcategory: 'Maintenance',
    icon: 'settings'
  },
  {
    text: "Change thermostat battery",
    action: () => {
      navigate('/issue/thermostat-battery');
      return [];
    },
    category: 'HVAC',
    subcategory: 'Maintenance',
    icon: <Settings className="w-5 h-5 text-gray-500" />
  },
  {
    text: "Poor air circulation",
    action: () => {
      navigate('/issue/no-heat-cooling');
      return [];
    },
    category: 'HVAC',
    subcategory: 'Troubleshooting',
    icon: <Fan className="w-5 h-5 text-purple-500" />
  }
];

export const generateApplianceOptions = (navigate: NavigateFunction): ChatOption[] => [
  {
    text: "Refrigerator issues",
    action: () => {
      navigate('/issue/refrigerator');
      return [];
    },
    category: 'Appliances',
    subcategory: 'Kitchen',
    icon: <Refrigerator className="w-5 h-5 text-blue-500" />
  },
  {
    text: "Dishwasher problems",
    action: () => {
      navigate('/issue/dishwasher');
      return [];
    },
    category: 'Appliances',
    subcategory: 'Kitchen',
    icon: <UtensilsCrossed className="w-5 h-5 text-green-500" />
  },
  {
    text: "Oven not working",
    action: () => {
      navigate('/issue/electric-oven');
      return [];
    },
    category: 'Appliances',
    subcategory: 'Kitchen',
    icon: <Power className="w-5 h-5 text-orange-500" />
  },
  {
    text: "Cooktop issues",
    action: () => {
      navigate('/issue/electric-cooktop');
      return [];
    },
    category: 'Appliances',
    subcategory: 'Kitchen',
    icon: <Power className="w-5 h-5 text-amber-500" />
  },
  {
    text: "Range hood fan",
    action: () => {
      navigate('/issue/range-hood');
      return [];
    },
    category: 'Appliances',
    subcategory: 'Kitchen',
    icon: <Fan className="w-5 h-5 text-purple-500" />
  }
];

export const generateMainOptions = (navigate: NavigateFunction): ChatOption[] => [
  {
    text: "Water Emergency / Leak",
    action: () => {
      navigate('/issue/water-shutoff');
      return [];
    },
    icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
    emergency: true,
    category: 'Emergency'
  },
  {
    text: "HVAC Issues",
    action: () => generateHVACOptions(navigate),
    icon: <Thermometer className="w-5 h-5 text-blue-500" />,
    category: 'HVAC'
  },
  {
    text: "Plumbing Problems",
    action: () => {
      navigate('/category/Plumbing');
      return [];
    },
    icon: <Droplets className="w-5 h-5 text-cyan-500" />,
    category: 'Plumbing'
  },
  {
    text: "Security & Access",
    action: () => {
      navigate('/category/Security');
      return [];
    },
    icon: <Lock className="w-5 h-5 text-green-500" />,
    category: 'Security'
  },
  {
    text: "Appliance Issues",
    action: () => generateApplianceOptions(navigate),
    icon: <Power className="w-5 h-5 text-purple-500" />,
    category: 'Appliances'
  },
  {
    text: "Internet Setup",
    action: () => {
      navigate('/issue/internet-providers');
      return [];
    },
    icon: <Wifi className="w-5 h-5 text-sky-500" />,
    category: 'Internet'
  },
  {
    text: "Other Maintenance",
    action: () => {
      navigate('/');
      return [];
    },
    icon: <Wrench className="w-5 h-5 text-gray-500" />,
    category: 'General'
  }
];