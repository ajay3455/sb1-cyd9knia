import React from 'react';
import { useParams } from 'react-router-dom';
import { issuesByCategory } from '../issues';
import { HVACIssueDetail } from '../components/issues/HVACIssueDetail';
import { PlumbingIssueDetail } from '../components/issues/PlumbingIssueDetail';
import { InternetIssueDetail } from '../components/issues/InternetIssueDetail';
import { SecurityIssueDetail } from '../components/issues/SecurityIssueDetail';
import { ApplianceIssueDetail } from '../components/issues/ApplianceIssueDetail';
import { FurnitureIssueDetail } from '../components/issues/FurnitureIssueDetail';
import { BaseIssueDetail } from '../components/issues/BaseIssueDetail';

export const IssueDetail = () => {
  const { issueId } = useParams();
  const issue = Object.values(issuesByCategory)
    .flat()
    .find(i => i.id === issueId);

  if (!issue) {
    return <div>Issue not found</div>;
  }

  switch (issue.category) {
    case 'HVAC':
      return <HVACIssueDetail issue={issue} />;
    case 'Plumbing':
      return <PlumbingIssueDetail issue={issue} />;
    case 'Internet':
      return <InternetIssueDetail issue={issue} />;
    case 'Security':
      return <SecurityIssueDetail issue={issue} />;
    case 'Appliances':
      return <ApplianceIssueDetail issue={issue} />;
    case 'Furniture':
      return <FurnitureIssueDetail issue={issue} />;
    default:
      return <BaseIssueDetail issue={issue} />;
  }
};