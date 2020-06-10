# build and run
```
yarn
yarn dev
```

# production
```
yarn
yarn start
```

# GraphQL command examples
## address
query:
```
{
  proofFromSecret(secret: "test") {
    nonce
    pub {
      curve {
        id
      }
      point
    }
    protocol {
      id
    }
    curve {
      id
    }
    keyfn {
      id
      normalization_form
      n
      r
      p
      key_length
      salt
    }
    hashfn {
      id
      normalization_form
    }
    c
    s
  }
}

```
return:
```
{
  "data": {
    "proofFromSecret": {
      "nonce": "25585622712654749170748345292657840758174834134780392028829886206549252389653",
      "pub": {
        "curve": {
          "id": "secp256k1"
        },
        "point": "A21YLZ+1d2IVtL7j6OWUketRexnIcLanry2yAuk59ceK"
      },
      "protocol": {
        "id": "knizk"
      },
      "curve": {
        "id": "secp256k1"
      },
      "keyfn": {
        "id": "scrypt",
        "normalization_form": "NFKC",
        "n": 16384,
        "r": 8,
        "p": 1,
        "key_length": 32,
        "salt": "Aes+3E4UXG7r2xUH5PU4TKSctee5p/fAP9vFpkPGxUA="
      },
      "hashfn": {
        "id": "sha256",
        "normalization_form": "NFKC"
      },
      "c": "6477549028824413423768607018298884455691877910058193715903143130993829282076",
      "s": "107516646232823295240489650325968309353648614313615369044452927607368191190527"
    }
  }
}
```
