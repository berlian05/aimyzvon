import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { CampaignSetup } from '@/components/dashboard/CampaignSetup'
import { CampaignStats } from '@/components/dashboard/CampaignStats'

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-[1920px] mx-auto">
        <CampaignStats />
        <CampaignSetup />
      </div>
    </DashboardLayout>
  )
} 