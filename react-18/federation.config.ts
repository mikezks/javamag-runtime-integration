// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withNativeFederation, shareAll } = require("@softarc/native-federation/build");
  
module.exports = withNativeFederation({
    name: "checkin",
    exposes: {
        "./bootstrap-custom-element": "./src/app.tsx",
    },
    shared: {
        ...shareAll({
            singleton: true,
            strictVersion: true,
            requiredVersion: "auto",
            includeSecondaries: false,
        }),
    },
    skip: [
        '@softarc/native-federation',
        'react',
        'react-dom'
    ]
});
