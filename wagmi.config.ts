import { defineConfig } from '@wagmi/cli'
import { actions, hardhat, foundry } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/abis.ts',
  contracts: [],
  plugins: [actions()],
})
