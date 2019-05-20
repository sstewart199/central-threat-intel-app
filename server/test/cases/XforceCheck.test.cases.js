module.exports = [
  {
    id: 'xforce',
    query: `
                    query {
                      xfore(ip:"1.2.3.3"){
                        ip,
                        score,
                        reason,
                        reasonDescription,
                        geo{
                          country,
                          countrycode
                        }
                      }
                    }
                `,
    variables: {},
  },
];
