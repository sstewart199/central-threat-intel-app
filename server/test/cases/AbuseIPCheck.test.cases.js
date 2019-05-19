module.exports = [
  {
    id: 'abuseIP',
    query: `
                    query {
                      abuseIP(ip:"1.2.3.3"){
                        abuseConfidenceScore,
                        ipAddress,
                        isPublic,
                        ipVersion,
                        isWhitelisted,
                        usageType,
                        domain
                      }
                    }
                `,
    variables: {},
  },
];
