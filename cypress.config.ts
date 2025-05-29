import {defineConfig} from "cypress";
import webpackPreprocessorFunction = require("@cypress/webpack-preprocessor");
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:3000",

        async setupNodeEvents(on, config) {
            // 1) Cucumber
            await addCucumberPreprocessorPlugin(on, config);

            // 2) Allure
            allureWriter(on, config);

            // 3) Webpack with a oneOf chain so .d.ts are dropped first
            on(
                "file:preprocessor",
                webpackPreprocessorFunction({
                    webpackOptions: {
                        resolve: {
                            extensions: [".ts", ".js"],
                        },
                        module: {
                            rules: [
                                {
                                    oneOf: [
                                        {
                                            // Drop any TypeScript declaration files
                                            test: /\.d\.ts$/,
                                            use: "null-loader",
                                        },
                                        {
                                            // Compile .ts files
                                            test: /\.ts$/,
                                            exclude: /node_modules/,
                                            use: {
                                                loader: "ts-loader",
                                            },
                                        },
                                        {
                                            // Handle .feature with the Cucumber preprocessor
                                            test: /\.feature$/,
                                            use: [
                                                {
                                                    loader:
                                                        "@badeball/cypress-cucumber-preprocessor/webpack",
                                                    options: config,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                })
            );

            return config;
        },

        env: {
            allureReuseAfterSpec: true,
        },

        specPattern: [
            "cypress/test/**/*.feature",
            "cypress/test/**/*.spec.{ts,js}",
        ],
        excludeSpecPattern: ["dummy/glob/pattern"],

        watchForFileChanges: false,
        video: false,
    },
});
