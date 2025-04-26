+++
title = "Test blog post"
date = 2025-04-26
+++

Authenticated Encryption (AE) is an encryption scheme which simultaneously assures the data confidentiality (also known as privacy: the encrypted message is impossible to understand without the knowledge of a secret key) and authenticity (in other words, it is unforgeable: the encrypted message includes an authentication tag that the sender can calculate only while possessing the secret key). Examples of encryption modes that provide AE are GCM, CCM.

Many (but not all) AE schemes allow the message to contain "associated data" (AD) which is not made confidential, but its integrity is protected (i.e., it is readable, but tampering with it will be detected). A typical example is the header of a network packet that contains its destination address. To properly route the packet, all intermediate nodes in the message path need to know the destination, but for security reasons they cannot possess the secret key. Schemes that allow associated data provide authenticated encryption with associated data, or AEAD.

## Conclusion

sfojgoasjsaop

### More placeholder
sjofsajfosa


```rust,name=mod.rs,linenos
    pub fn as_bytes(&self) -> &[u8] {
        &self.0

}
```

Authenticated Encryption (AE) is an encryption scheme which simultaneously assures the data confidentiality (also known as privacy: the encrypted message is impossible to understand without the knowledge of a secret key[1]) and authenticity (in other words, it is unforgeable:[2] the encrypted message includes an authentication tag that the sender can calculate only while possessing the secret key[1]). Examples of encryption modes that provide AE are GCM, CCM.[^1]
