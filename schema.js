const typeDefs = `
    type Query {
      proofFromSecret(secret: String): Proof
    }

    type Proof {
      nonce: String!
      pub: Pub!
      protocol: Protocol!
      curve: Curve!
      c: String!
      s: String!
      keyfn: Keyfn!
      hashfn: Hashfn!
    }

    type Pub {
      curve: Curve!
      point: String!
    }

    type Curve {
      id: String!
    }

    type Protocol {
      id: String!
    }

    type Keyfn {
      salt: String!
      id: String!
      normalization_form: String!
      n: Int!
      r: Int!
      p: Int!
      key_length: Int!
    }

    type Hashfn {
      id: String!
      normalization_form: String!
    }

    type Subscription {
        latestBlock: String
    }
`

module.exports = typeDefs
