import { MaintenanceIssue } from '../../../types/issue';
import { ovenGuide } from './oven';
import { cooktopGuide } from './cooktop';
import { rangehoodGuide } from './rangehood';
import { microwaveGuide } from './microwave';
import { dishwasherGuide } from './dishwasher';
import { refrigeratorGuide } from './refrigerator';

export const kitchenAppliances: MaintenanceIssue[] = [
  {
    ...ovenGuide,
    title: "Built-in Oven 🔥",
    emergency: false
  },
  {
    ...cooktopGuide,
    title: "Electric Cooktop (Stovetop) 🍳",
    emergency: false
  },
  {
    ...rangehoodGuide,
    title: "Range Hood (Exhaust Fan for Stove) 💨",
    emergency: false
  },
  {
    ...microwaveGuide,
    title: "Microwave 📡",
    emergency: false
  },
  {
    ...dishwasherGuide,
    title: "Dishwasher 🍽️",
    emergency: false
  },
  {
    ...refrigeratorGuide,
    title: "Refrigerator ❄️",
    emergency: false
  }
];