import { StaticImageData } from 'next/image'

// Import all chain logos
import ethereumLogo from '../../public/assets/chains/eth.svg'
import baseLogo from '../../public/assets/chains/base.svg'
import arbitrumLogo from '../../public/assets/chains/arbitrum.svg'
import polygonLogo from '../../public/assets/chains/polygon.svg'
import optimismLogo from '../../public/assets/chains/optimism.svg'

export interface ChainConfig {
  id: string
  name: string
  logo: StaticImageData
}

export const chainConfigs: ChainConfig[] = [
  { id: 'eth', name: 'Ethereum', logo: ethereumLogo },
  { id: 'base', name: 'Base', logo: baseLogo },
  { id: 'arbitrum', name: 'Arbitrum', logo: arbitrumLogo },
  { id: 'polygon', name: 'Polygon', logo: polygonLogo },
  { id: 'optimism', name: 'Optimism', logo: optimismLogo },
]
