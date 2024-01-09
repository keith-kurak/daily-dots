export let useInspectAppState;
// @ts-ignore process.env.NODE_ENV is defined by metro transform plugins
if (process.env.NODE_ENV !== 'production') {
    useInspectAppState = require('./useInspectAppState').useInspectAppState;
}
else {
    useInspectAppState = () => { };
}
//# sourceMappingURL=index.js.map