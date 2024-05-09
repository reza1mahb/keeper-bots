import { Address } from "viem";

import getConfig from "../../../config";
import SubgraphClient from "../../../subgraph-client";
import formatTokenConverterConfigs from "./formatTokenConverterConfigs";

const readTokenConverterConfigs = async (assetIn: Address, assetOut: Address) => {
  const subgraphClient = new SubgraphClient(getConfig().subgraphUrl);
  const {
    data: { tokenConverters },
  } = await subgraphClient.getTokenConverterByAssetInAndAssetOut(assetIn, assetOut);

  const tokenConverterConfigs = formatTokenConverterConfigs(tokenConverters);
  return tokenConverterConfigs;
};

export default readTokenConverterConfigs;
