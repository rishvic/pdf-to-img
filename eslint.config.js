import config from "eslint-config-kyle";

const updatedConfig = [
  { ignores: ["tsconfig*.json"] },
  ...config,
  { rules: { quotes: "off" } },
];

export default updatedConfig;
