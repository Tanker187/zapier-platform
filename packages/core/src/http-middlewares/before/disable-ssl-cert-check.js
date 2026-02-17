'use strict';

const disableSSLCertCheck = (req) => {
  // Intentionally left as a no-op to preserve default TLS certificate validation.
  return req;
};

module.exports = disableSSLCertCheck;
