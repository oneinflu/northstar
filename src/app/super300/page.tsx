import Super300AnnouncementBar from '@/components/Super300AnnouncementBar';
import Super300Hero from '@/components/Super300Hero';

import EligibilityApply from '@/components/EligibilityApply';
import Super300ScholarshipValue from '@/components/Super300ScholarshipValue';
import MentorshipSuccess from '@/components/MentorshipSuccess';
import Super300FAQ from '@/components/Super300FAQ';
import AboutSuper300Program from '@/components/AboutSuper300Program';


export default function Super300Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <Super300AnnouncementBar />
      
      {/* Main Hero Section */}
      <Super300Hero />
      <AboutSuper300Program />
     
      
      <EligibilityApply />
      
      <Super300ScholarshipValue />
      
      <MentorshipSuccess />
      
      <Super300FAQ />
    
     
    </div>
  );
}