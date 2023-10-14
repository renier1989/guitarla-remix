/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};

// /** @type {import('@remix-run/dev').AppConfig} */
// export default {
//   serverBuildTarget: "vercel",
//   // When running locally in development mode, we use the built in remix
//   // server. This does not understand the vercel lambda module format,
//   // so we default back to the standard build output.
//   server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
//   ignoredRouteFiles: ["**/.*"],
//   future: {},
//   // appDirectory: "app",
//   // assetsBuildDirectory: "public/build",
//   // serverBuildPath: "api/index.js",
//   // publicPath: "/build/",
// };
