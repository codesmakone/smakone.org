exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
     resolve: {
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "timers": require.resolve("timers-browserify")
        },
      },
    })
  }