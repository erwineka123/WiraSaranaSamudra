import { ServiceDetailPage } from '@/components/service-detail-page'
import { services } from '@/lib/services'

export default function Service3Page() {
  return <ServiceDetailPage service={services[2]} />
}
