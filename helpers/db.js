import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('maps.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS maps (id INTEGER PRIMARY KEY  NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
            [],
            () => {
                resolve();
            },
            (_, err) => {
                reject(err);
            },
            );
        });
    });
    return promise;
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`INSERT INTO maps (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);`,
            [title, imageUri, address, lat, lng],
            (_, result) => {
                resolve(result);
            },
            (_, err) => {
                reject(err);
            },
            );
        });
    });
    return promise;
};

export const fetchPlaces = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM maps',
            [],
            (_, result) => {
                resolve(result);
            },
            (_, err) => {
                reject(err);
            },
            );
        });
    });
    return promise;
};