import config from './config.json';

export const karabinerConfig = config;
export const karabinerConfigText = JSON.stringify(config, null, 2);

// A single rule file served at /karabiner/hyper-key-rule.json, not a full karabiner.json.
// A distinct name keeps it from being saved over a user's existing configuration.
export const karabinerRuleFilename = 'hyper-key-rule.json';
