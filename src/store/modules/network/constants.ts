import { AvaNetwork } from '@/js/AvaNetwork'

export const MainnetConfig = new AvaNetwork(
    'Savannah',
    'http://api.savannah.network:9650',
    7,
    'https://api.savannah.network:9650',
    'https://explorer.savannah.network',
    true
)

export const TestnetConfig = new AvaNetwork(
    'Marula',
    'http://api.test.savannah.network:9650',
    7,
    'http://api.test.savannah.network:9650',
    'https://explorer.test.savannah.network',
    true
)
