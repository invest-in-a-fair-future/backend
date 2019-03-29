import bcrypt from 'bcrypt';
import config from '../config/config';
import {Auth} from "../auth";
import log4js from "log4js";
import { DB } from '../DB';

export class UsersRoute {
  static getLogger() {
    if(!UsersRoute.logger) {
      UsersRoute.logger = log4js.getLogger();
      UsersRoute.logger.addContext('source', 'UsersRoute');
    }

    return UsersRoute.logger;
  }

  static configure(router) {
    // router.post('/users', (req, resp) => {
    //   const user = req.body;
    //
    //   if(!user) {
    //     return resp.status(400).json({
    //       'code': 'INVCRUSR01',
    //       'message': 'No user information sent.'
    //     });
    //   }
    //
    //   if(!user.email || !user.name || !user.type || !user.password || !user.country) {
    //     return resp.status(400).json({
    //       'code': 'INVCRUSR02',
    //       'message': 'Invalid or missing information.'
    //     });
    //   } else if(user.type !== 'company' && !user.type !== 'partner' && !user.type !== 'comminityRepresentative') {
    //     return resp.status(400).json({
    //       'code': 'INVCRUSR02',
    //       'message': 'Invalid or missing information.'
    //     });
    //   }
    //
    //   user.password = bcrypt.hashSync(user.password, config.users.salt);
    //
    //   DB.getCollection('users')
    //     .then(users => {
    //       return users.findOne({email:user.email})
    //         .then(dbUser => {
    //           if(!dbUser) {
    //             return users.insertOne(user);
    //           } else {
    //             const e = new Error('User already exists');
    //             e.passMessage = true;
    //             throw e;
    //           }
    //         });
    //     })
    //     .then(result => {
    //       if(result.result.ok < 1) {
    //         throw new Error('Unable to add user');
    //       }
    //       const createdUser = result.ops[0];
    //       delete createdUser.password;
    //       createdUser.id = createdUser._id;
    //       delete createdUser._id;
    //       const credentials = Auth.generateToken(createdUser);
    //       return resp.status(201).json({
    //         user: createdUser,
    //         credentials: credentials
    //       });
    //     })
    //     .catch(e => {
    //       this.getLogger().error(e);
    //       if(e.passMessage) {
    //         return resp.status(500).json({
    //           code: 'INVCRUSR501',
    //           message: e.message
    //         });
    //
    //       } else {
    //         return resp.status(500).json({
    //           code: 'INVCRUSR500',
    //           message: 'Unable to create user.'
    //         });
    //       }
    //     });
    // });

    router.post('/users', (req, resp) => {
      resp.status(201).json({
        "user": {
          "email": "john4@investinafairfuture.org",
          "name": "Invest in a Fair Future",
          "type": "company",
          "phoneNumber": "+31600000000",
          "country": "NL",
          "id": "5c9e4a1382449723828186f3"
        },
        "credentials": {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG40QGludmVzdGluYWZhaXJmdXR1cmUub3JnIiwibmFtZSI6IkludmVzdCBpbiBhIEZhaXIgRnV0dXJlIiwidHlwZSI6ImNvbXBhbnkiLCJwaG9uZU51bWJlciI6IiszMTYwMDAwMDAwMCIsImNvdW50cnkiOiJOTCIsImlkIjoiNWM5ZTRhMTM4MjQ0OTcyMzgyODE4NmYzIiwiaWF0IjoxNTUzODc3NTIzLCJleHAiOjE1NTY0Njk1MjN9.ORcfbjvB8iOFTF_PfJ0GC4PvwUqhn0bmmZ948z-pGjc",
          "validUntil": "2019-04-28T15:38:43.480Z"
        }
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