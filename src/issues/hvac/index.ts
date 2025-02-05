import { filterMaintenance } from './filter';
import { thermostatBattery } from './thermostat/battery';
import { noHeatCooling } from './no-heat-cooling/troubleshooting';
import { fanIssues } from './fan';

export const hvacIssues = [
  {
    ...filterMaintenance,
    title: "1. HVAC Filter Replacement 🔄",
    emergency: false
  },
  {
    ...thermostatBattery,
    title: "2. Thermostat Battery Replacement 🔋",
    emergency: false
  },
  {
    ...fanIssues,
    title: "3. Fan Issues & Noise 💨",
    emergency: false
  },
  {
    ...noHeatCooling,
    title: "4. No Heat/Cooling Issues ❄️",
    emergency: true
  }
];