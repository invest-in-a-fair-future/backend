export class CompaniesRoute {
  static configure(router) {
    router.post('/companies', (req, resp) => {
      resp.json({
        "country" : "NL",
        "phoneNumber" : "+31600000000",
        "address" : "Tractieweg 41, 3534 AP Utrecht",
        "taxId" : "12345678901",
        "name" : "Invest in a Fair Future B.V.",
        "id" : "40dc9d2b-7b38-47f4-9d23-581ca427d9bc",
        "email" : "info@investinafairfuture.org"
      });
    });

    router.get('/companies', (req, resp) => {
      resp.json({
        "companies" : [ {
          "country" : "NL",
          "phoneNumber" : "+31600000000",
          "address" : "Tractieweg 41, 3534 AP Utrecht",
          "taxId" : "12345678901",
          "name" : "Invest in a Fair Future B.V.",
          "id" : "40dc9d2b-7b38-47f4-9d23-581ca427d9bc",
          "email" : "info@investinafairfuture.org"
        }, {
          "country" : "NL",
          "phoneNumber" : "+31600000000",
          "address" : "Tractieweg 41, 3534 AP Utrecht",
          "taxId" : "12345678901",
          "name" : "Invest in a Fair Future B.V.",
          "id" : "40dc9d2b-7b38-47f4-9d23-581ca427d9bc",
          "email" : "info@investinafairfuture.org"
        } ]
      });
    });

    router.put('/companies/{companyId}', (req, resp) => {
      resp.json({
        "country" : "NL",
        "phoneNumber" : "+31600000000",
        "address" : "Tractieweg 41, 3534 AP Utrecht",
        "taxId" : "12345678901",
        "name" : "Invest in a Fair Future B.V.",
        "id" : "40dc9d2b-7b38-47f4-9d23-581ca427d9bc",
        "email" : "info@investinafairfuture.org"
      });
    });
  }
}