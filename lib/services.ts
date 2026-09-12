import type { LucideIcon } from 'lucide-react'
import {
  Anchor,
  Boxes,
  ClipboardCheck,
  Eye,
  FileCheck,
  FileText,
  Fuel,
  Landmark,
  LogIn,
  Monitor,
  PackageCheck,
  Ruler,
  Search,
  Shirt,
  Ship,
  Users,
  UsersRound,
} from 'lucide-react'

export type ServicePoint = {
  icon: LucideIcon
  text: string
}

export type ServiceGalleryImage = {
  src: string
  alt: string
}

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
  points: ServicePoint[]
  gallery?: ServiceGalleryImage[]
}

export const services: ServiceItem[] = [
  {
    slug: 'ship-agency-services',
    pageRoute: '/service-1',
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
      {
        icon: FileCheck,
        text: 'Vessel documentation and port clearance',
      },
      {
        icon: Landmark,
        text: 'Coordination with port authorities',
      },
      {
        icon: LogIn,
        text: 'Clearance in and clearance out',
      },
      {
        icon: Anchor,
        text: 'Berthing and port arrangements',
      },
      {
        icon: Users,
        text: 'Crew change coordination',
      },
      {
        icon: ClipboardCheck,
        text: 'Operational support during port stay',
      },
    ],
  },
  {
    slug: 'loading-unloading-supervision',
    pageRoute: '/service-2',
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
      {
        icon: Eye,
        text: 'Loading and discharging monitoring',
      },
      {
        icon: Ruler,
        text: 'Cargo quantity recording',
      },
      {
        icon: Search,
        text: 'Cargo condition inspection',
      },
      {
        icon: Users,
        text: 'Stevedore coordination',
      },
      {
        icon: Monitor,
        text: 'Operational monitoring',
      },
      {
        icon: FileText,
        text: 'Accurate operational reporting',
      },
    ],
  },
  {
    slug: 'tug-and-barge-services',
    pageRoute: '/service-3',
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
    gallery: [
      {
        src: '/images/services/Activity-1.jpeg',
        alt: 'Tug boat and barge on marine transport duty',
      },
      {
        src: '/images/services/Activity-2.jpeg',
        alt: 'Tug boat supporting barge cargo movement',
      },
      {
        src: '/images/services/Activity-3.jpeg',
        alt: 'Barge transport operation at sea',
      },
      {
        src: '/images/services/Activity-4.jpeg',
        alt: 'Tug boat and barge on marine transport duty',
      },
      {
        src: '/images/services/Activity-5.jpeg',
        alt: 'Tug boat supporting barge cargo movement',
      }
    ],
    points: [
      {
        icon: Ship,
        text: 'Tug boat and barge operations',
      },
      {
        icon: PackageCheck,
        text: 'Coal transportation',
      },
      {
        icon: Boxes,
        text: 'Construction material transportation',
      },
      {
        icon: Boxes,
        text: 'Heavy equipment transportation',
      },
      {
        icon: PackageCheck,
        text: 'General cargo transportation',
      },
      {
        icon: ClipboardCheck,
        text: 'Safety-focused marine operations',
      },
    ],
  },
  {
    slug: 'ship-chandler-services',
    pageRoute: '/service-4',
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
      {
        icon: PackageCheck,
        text: 'Fresh and frozen provisions',
      },
      {
        icon: PackageCheck,
        text: 'Drinking water',
      },
      {
        icon: Boxes,
        text: 'Galley and kitchen supplies',
      },
      {
        icon: Boxes,
        text: 'Cleaning supplies',
      },
      {
        icon: PackageCheck,
        text: 'Deck and engine stores',
      },
      {
        icon: ClipboardCheck,
        text: 'Safety equipment and operational needs',
      },
    ],
  },
  {
    slug: 'bunker-services',
    pageRoute: '/service-5',
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
      {
        icon: Fuel,
        text: 'Marine fuel supply',
      },
      {
        icon: Fuel,
        text: 'Lubricant supply',
      },
      {
        icon: Fuel,
        text: 'Timely fuel delivery',
      },
      {
        icon: ClipboardCheck,
        text: 'Safe bunkering procedures',
      },
      {
        icon: Users,
        text: 'Operational coordination',
      },
      {
        icon: ClipboardCheck,
        text: 'Compliance with maritime requirements',
      },
    ],
  },
  {
    slug: 'running-store',
    pageRoute: '/service-6',
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
      {
        icon: Boxes,
        text: 'Office stationery',
      },
      {
        icon: Boxes,
        text: 'Cleaning supplies',
      },
      {
        icon: Boxes,
        text: 'Work equipment',
      },
      {
        icon: PackageCheck,
        text: 'Light spare parts',
      },
      {
        icon: PackageCheck,
        text: 'Operational support equipment',
      },
      {
        icon: Boxes,
        text: 'Other routine vessel requirements',
      },
    ],
  },
  {
    slug: 'crew-workwear-uniform-supply',
    pageRoute: '/service-7',
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
      {
        icon: Shirt,
        text: 'Daily crew uniforms',
      },
      {
        icon: Shirt,
        text: 'Workwear and coveralls',
      },
      {
        icon: Shirt,
        text: 'Safety vests',
      },
      {
        icon: Shirt,
        text: 'Jackets and outerwear',
      },
      {
        icon: Users,
        text: 'Crew identification items',
      },
      {
        icon: Shirt,
        text: 'Custom specifications and materials',
      },
    ],
  },
  {
    slug: 'husbandry-services',
    pageRoute: '/service-8',
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
      {
        icon: Users,
        text: 'Crew change arrangements',
      },
      {
        icon: Users,
        text: 'Crew transportation',
      },
      {
        icon: PackageCheck,
        text: 'Hotel reservations',
      },
      {
        icon: PackageCheck,
        text: 'Medical assistance',
      },
      {
        icon: FileCheck,
        text: 'Visa and immigration documentation',
      },
      {
        icon: PackageCheck,
        text: 'Document and spare parts delivery',
      },
    ],
  },
]

export const serviceMenuItems = services.map(({ pageRoute, title }) => ({
  href: pageRoute,
  title,
}))

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<
  string,
  ServiceItem
>
