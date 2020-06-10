Proof = require('./proof')

const resolvers = {
  Query: {
    proofFromSecret: (root, { secret }) => {
      return new Proof(secret).create()
    }
  }
}

module.exports = resolvers
