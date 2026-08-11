import type { LucideIcon } from 'lucide-react'
import {
  Anchor,
  Boxes,
  ClipboardCheck,
  Fuel,
  PackageCheck,
  Shirt,
  Ship,
  UsersRound,
} from 'lucide-react'

export type ServiceItem = {
  slug: string
  pageRoute: string
  icon: LucideIcon
  title: string
  shortTitle: string
  description: string
  imagePath: string
  imageAlt: string
  pageEyebrow: string
  pageTitle: string
  pageSummary: string
  pageNote: string
  points: string[]
}

export const services: ServiceItem[] = [
  {
    slug: 'ship-agency-services',
    pageRoute: '/services/service-1',
    icon: Anchor,
    title: 'Ship Agency Services',
    shortTitle: 'Ship Agency',
    description:
      'Professional ship agency services to ensure smooth, efficient, and compliant vessel operations throughout port activities.',
    imagePath: '/images/services/service-1.png',
    imageAlt: 'Ship agency operations on a vessel at port',
    pageEyebrow: 'Port Coordination',
    pageTitle: 'Managed vessel calls with clear coordination and documentation.',
    pageSummary:
      'We handle arrival coordination, port clearance, berthing support, and departure handling so vessel movements remain organized from start to finish.',
    pageNote:
      'Ideal for vessel owners and operators who want one partner to manage port-side communication and paperwork.',
    points: [
      'Vessel documentation and port clearance',
      'Coordination with port authorities',
      'Clearance in and clearance out',
      'Berthing and port arrangements',
      'Crew change coordination',
      'Operational support during port stay',
    ],
  },
  {
    slug: 'loading-unloading-supervision',
    pageRoute: '/services/service-2',
    icon: ClipboardCheck,
    title: 'Loading & Unloading Supervision',
    shortTitle: 'Cargo Supervision',
    description:
      'Professional supervision of cargo loading and unloading to keep operations safe, efficient, and properly documented.',
    imagePath: '/images/services/service-2.png',
    imageAlt: 'Cargo loading and unloading supervision on deck',
    pageEyebrow: 'Cargo Oversight',
    pageTitle: 'Supervision that keeps loading and discharging aligned.',
    pageSummary:
      'Our team monitors cargo activities closely, helping maintain safe handling, proper recording, and clear coordination during field operations.',
    pageNote:
      'Useful when you need consistent reporting and practical supervision during active cargo work.',
    points: [
      'Loading and discharging monitoring',
      'Cargo quantity recording',
      'Cargo condition inspection',
      'Stevedore coordination',
      'Operational monitoring',
      'Accurate operational reporting',
    ],
  },
  {
    slug: 'tug-and-barge-services',
    pageRoute: '/services/service-3',
    icon: Ship,
    title: 'Tug & Barge Services',
    shortTitle: 'Tug & Barge',
    description:
      'Reliable tug boat and barge support for marine transportation and the movement of different cargo types.',
    imagePath: '/images/services/service-3.png',
    imageAlt: 'Tug and barge marine transport operation',
    pageEyebrow: 'Marine Transport',
    pageTitle: 'Tug and barge support for cargo movement and project needs.',
    pageSummary:
      'We coordinate tug and barge operations for heavy equipment, general cargo, and project movement with a practical approach to timing and safety.',
    pageNote:
      'Best suited for cargo movements that need reliable marine transport support and close operational follow-up.',
    points: [
      'Tug boat and barge operations',
      'Coal transportation',
      'Construction material transportation',
      'Heavy equipment transportation',
      'General cargo transportation',
      'Safety-focused marine operations',
    ],
  },
  {
    slug: 'ship-chandler-services',
    pageRoute: '/services/service-4',
    icon: PackageCheck,
    title: 'Ship Chandler Services',
    shortTitle: 'Ship Chandler',
    description:
      'Comprehensive vessel supplies delivered to support operations both at sea and while the vessel is in port.',
    imagePath: '/images/services/service-4.png',
    imageAlt: 'Vessel supply and ship chandler items',
    pageEyebrow: 'Vessel Supply',
    pageTitle: 'Ship supply coverage for port and onboard essentials.',
    pageSummary:
      'From provisions to deck and engine stores, we help arrange ship supplies with a focus on timeliness, completeness, and operational readiness.',
    pageNote:
      'Useful for vessels that need routine supply support without losing time in port.',
    points: [
      'Fresh and frozen provisions',
      'Drinking water',
      'Galley and kitchen supplies',
      'Cleaning supplies',
      'Deck and engine stores',
      'Safety equipment and operational needs',
    ],
  },
  {
    slug: 'bunker-services',
    pageRoute: '/services/service-5',
    icon: Fuel,
    title: 'Bunker Services',
    shortTitle: 'Bunkering',
    description:
      'Reliable marine fuel and lubricant supply with timely delivery and procedures aligned with maritime safety requirements.',
    imagePath: '/images/services/service-5.png',
    imageAlt: 'Bunkering and fuel support for a vessel',
    pageEyebrow: 'Fuel Support',
    pageTitle: 'Bunkering services aligned with timing and safety procedures.',
    pageSummary:
      'We coordinate marine fuel and lubricant supply so vessels can refuel with less delay while staying aligned with safety procedures and operational timing.',
    pageNote:
      'A practical fit for vessels needing fuel coordination in a structured and time-sensitive way.',
    points: [
      'Marine fuel supply',
      'Lubricant supply',
      'Timely fuel delivery',
      'Safe bunkering procedures',
      'Operational coordination',
      'Compliance with maritime requirements',
    ],
  },
  {
    slug: 'running-store',
    pageRoute: '/services/service-6',
    icon: Boxes,
    title: 'Running Store',
    shortTitle: 'Running Store',
    description:
      'Procurement and delivery of routine vessel consumables required for everyday onboard activities.',
    imagePath: '/images/services/service-6.png',
    imageAlt: 'Running store and vessel consumables',
    pageEyebrow: 'Routine Supply',
    pageTitle: 'Everyday consumables delivered for onboard continuity.',
    pageSummary:
      'We source and deliver routine items required for vessel operations, helping crews stay stocked with the practical supplies they need day to day.',
    pageNote:
      'Good for ongoing consumable needs that need a quick and steady supply chain.',
    points: [
      'Office stationery',
      'Cleaning supplies',
      'Work equipment',
      'Light spare parts',
      'Operational support equipment',
      'Other routine vessel requirements',
    ],
  },
  {
    slug: 'crew-workwear-uniform-supply',
    pageRoute: '/services/service-7',
    icon: Shirt,
    title: 'Crew Workwear & Uniform Supply',
    shortTitle: 'Crew Workwear',
    description:
      'Workwear and uniform solutions tailored to the specifications, comfort, durability, and safety needs of shipping companies.',
    imagePath: '/images/services/service-7.png',
    imageAlt: 'Crew workwear and uniform supply items',
    pageEyebrow: 'Crew Essentials',
    pageTitle: 'Uniform and workwear solutions shaped around crew requirements.',
    pageSummary:
      'We coordinate crew uniforms and workwear around comfort, durability, safety, and company specification so the supply fits the team that will wear it.',
    pageNote:
      'Useful for operators who need a consistent look and practical wear for crew members.',
    points: [
      'Daily crew uniforms',
      'Workwear and coveralls',
      'Safety vests',
      'Jackets and outerwear',
      'Crew identification items',
      'Custom specifications and materials',
    ],
  },
  {
    slug: 'husbandry-services',
    pageRoute: '/services/service-8',
    icon: UsersRound,
    title: 'Husbandry Services',
    shortTitle: 'Husbandry',
    description:
      'Comprehensive husbandry support covering vessel and crew requirements throughout their stay in port.',
    imagePath: '/images/services/service-8.png',
    imageAlt: 'Crew support and husbandry coordination',
    pageEyebrow: 'Crew Support',
    pageTitle: 'Practical husbandry support for vessel and crew needs in port.',
    pageSummary:
      'We support crew change, transport, documentation, and other husbandry needs so port stays are handled with less friction and better coordination.',
    pageNote:
      'Best for port calls where crew movements, documentation, and support tasks need careful handling.',
    points: [
      'Crew change arrangements',
      'Crew transportation',
      'Hotel reservations',
      'Medical assistance',
      'Visa and immigration documentation',
      'Document and spare parts delivery',
    ],
  },
]

export const serviceMenuItems = services.map(({ pageRoute, shortTitle, title }) => ({
  href: pageRoute,
  label: shortTitle,
  title,
}))

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<
  string,
  ServiceItem
>
