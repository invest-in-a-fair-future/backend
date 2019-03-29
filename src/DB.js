/* jshint esversion: 6 */

import { MongoClient } from 'mongodb';
import config from './config/config';

export class DB {
  static getClient() {
    return new Promise((resolve, reject) => {
      if(!DB.client) {

        const user = encodeURIComponent(config.db.username);
        const password = encodeURIComponent(config.db.password);

        const url = `mongodb://${user}:${password}@${config.db.url}`;

        MongoClient.connect(url, (e, client) => {
          if(e) {
            return reject(e);
          }

          DB.client = client;
          resolve(DB.client);
        });
      } else {
        resolve(DB.client);
      }
    });
  }

  static getDb() {
    return new Promise((resolve, reject) => {
      this.getClient()
        .then(client => {
          const db = client.db(config.db.name)
          resolve(db);
        })
        .catch(reject);
    });
  }

  static getCollection(name) {
    return new Promise((resolve, reject) => {
      DB.getDb()
        .then((client) => {
          const collection = client.collection(name);
          resolve(collection);
        })
        .catch(reject);
    });
  }
}