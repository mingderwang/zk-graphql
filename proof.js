const Zk = require('@nuid/zk');

class Proof {
  constructor (secret) {
    this.secret = secret
  }
  create () {
    var result = getProofFromSecret(this.secret)
    return result
  }
}

function getProofFromSecret(secret) {
  var proof = Zk.proofFromSecret(secret);
  console.log(proof)

  proof.hashfn['normalization_form']=proof.hashfn['normalization-form']
  proof.keyfn['normalization_form']=proof.keyfn['normalization-form']
  proof.keyfn['key_length']=proof.keyfn['key-length']

  return proof
}

module.exports = Proof
