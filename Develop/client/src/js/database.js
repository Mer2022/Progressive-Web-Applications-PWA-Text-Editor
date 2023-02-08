
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
    
    },
  });

  export const putDb = async (content)  => {
   
  
    // a connection is established to the database and version that is used.
    const contactDb = await openDB('jate', 1);
  
    // make a new transaction and specify the database and data privileges.
    const tx = contactDb.transaction('jate', 'readwrite');
  
    const store = tx.objectStore('jate');
  
    // .add() method can be used on the store and pass in the content.
    const request = store.put({ id: 1, value: content });
  
    // Get confirmation of the request.
    const result = await request;
    
  };
  
  // Add logic for a method that gets all the content from the database
  export const getDb = async () => {
    
  
    // Create a connection to the database database and version we want to use.
    const contactDb = await openDB('jate', 1);
  
    // Create a new transaction and specify the database and data privileges.
    const tx = contactDb.transaction('jate', 'readonly');
  
       const store = tx.objectStore('jate');
  
    // .getAll() method is used to get all data in the database.
    const request = store.getAll();
  
    // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
    return result?.value;
  };
  
  initdb();
