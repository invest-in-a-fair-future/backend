/* jshint esversion: 6 */

import { MongoClient } from 'mongodb';
import config from 'config/config';

export class DB {
  static getClient() {
    return new Promise((resolve, reject) => {
      if(!DB.client) {
        MongoClient.connect(config.db.url, (e, client) => {
          if(err) {
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

  static getCollection(name) {
    return new Promise((resolve, reject) => {
      DB.getClient()
        .then((client) => {
          const collection = client.collection(name);
          resolve(collection);
        })
        .catch(reject);
    });
  }
}