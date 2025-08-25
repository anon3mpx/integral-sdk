import { ChainId } from './chainIds';
import { Token } from '../entities/Token';

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WNATIVE: { [chainId: number]: Token } = {
  [ChainId.PulsechainTestnet]: new Token(
    ChainId.PulsechainTestnet,
    '0x70499adEBB11Efd915E3b69E700c331778628707',
    18,
    'WPLS',
    'Wrapped PLS'
  ),
};
