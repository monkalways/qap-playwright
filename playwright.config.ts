// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 30000,
    use: {
        video: 'on',
    },
    projects: [
        {
            name: 'Chrome Stable',
            use: {
                browserName: 'chromium',
                // Test against Chrome Stable channel.
                channel: 'chrome',
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                browserName: 'webkit',
            },
        },
        // Test against mobile viewports.
        {
            name: 'Mobile Chrome',
            use: devices['Pixel 5'],
        },
        {
            name: 'Mobile Safari',
            use: devices['iPhone 12'],
        },
        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
                viewport: { width: 1200, height: 1024 },
            },
        },
    ],
};
export default config;
