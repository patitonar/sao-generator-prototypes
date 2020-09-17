import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";

<%- buidlerUsePluginEthStack -%>
usePlugin("buidler-typechain");

const config: BuidlerConfig = {
  solc: {
    version: "0.6.8",
  },
  typechain: {
    outDir: "typechain",
    target: "<%- typechainTarget -%>",
  },
};

export default config;
