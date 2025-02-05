import React from 'react';
import { MaintenanceIssue } from '../../../types/issue';
import { BaseIssueDetail } from '../BaseIssueDetail';

interface ThermostatIssueProps {
  issue: MaintenanceIssue;
}

export const ThermostatIssue: React.FC<ThermostatIssueProps> = ({ issue }) => {
  return (
    <BaseIssueDetail
      issue={issue}
      beforeContent={
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
          <p className="text-sm text-blue-700">
            Regular battery replacement ensures your thermostat functions properly.
            Use only high-quality alkaline batteries for optimal performance.
          </p>
        </div>
      }
    />
  );
};