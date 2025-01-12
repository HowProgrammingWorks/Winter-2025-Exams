// jest.config.js
import { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

const config: Config = {
  ...createDefaultPreset(),
};

export default config;
