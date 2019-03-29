export class UsersRoute {
  static configure(router) {
    router.post('/users', (req, resp) => {
      resp.json({
        "country" : "NL",
        "phoneNumber" : "+31600000000",
        "name" : "Invest in a Fair Future",
        "id" : "c447d376-6a46-4e98-89da-f86a81255503",
        "type" : "company",
        "email" : "john@investinafairfuture.org"
      });
    });

    router.get('/users', (req, resp) => {
      resp.json({
        "country" : "NL",
        "phoneNumber" : "+31600000000",
        "name" : "Invest in a Fair Future",
        "id" : "c447d376-6a46-4e98-89da-f86a81255503",
        "type" : "company",
        "email" : "john@investinafairfuture.org"
      });
    });

    router.put('/users', (req, resp) => {
      resp.json({
        "country" : "NL",
        "phoneNumber" : "+31600000000",
        "name" : "Invest in a Fair Future",
        "id" : "c447d376-6a46-4e98-89da-f86a81255503",
        "type" : "company",
        "email" : "john@investinafairfuture.org"
      });
    });
  }
}