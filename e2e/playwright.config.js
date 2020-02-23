import { chromium, firefox, webkit, devices } from 'playwright';

const iPhone = devices['iPhone 6'];
const iPad = devices['iPad Pro 11'];
const galaxyNote = deivces['Galaxy Note 3'];

module.exports = {
  browserType: ["chromium", "firefox", "webkit"],
  launchConfig: {
    headless: false,
    slowMo: 10,
  },
  contextConfig: {
    viewport: iPhone.viewport,
    userAgent: iPhone.userAgent,
  }
};
