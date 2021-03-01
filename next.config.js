module.exports = {
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true
      }
    ]
  },
}
