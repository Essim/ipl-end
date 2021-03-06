// @flow weak

export const appConfig = {
  DEV_MODE: true, // flag to fetch mock or real fetch
  API: {
    reports: 'reports',
    machines: 'machines',
    auth: 'auth',
    setState:'auth/update/state',
    setStateMachine:'auth/update/admin',
    setAdmin:'auth/update/admin',
    users:'auth/users'

  },
  MACHINE_TYPES: {
    default:0,
    software: 1,
    hardware: 2
  },
  MACHINE_SEVERITIES: {
    minor: 0,
    major: 1
  }
};
