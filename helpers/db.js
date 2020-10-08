import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('workouts.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('NEW SQL COMMANDS GO HERE',
            [], 
            () => {
            resolve();
            },
            (_, err) => {
                reject(err);
            }
        );
            
        }); 
    });
        
        return promise;
};