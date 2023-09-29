import { Database } from "bun:sqlite";
const db = new Database(":memory:")
initdb()
export {querydb, insertData, removeEntry}

function insertData(data:number) {
    const query = db.query(`INSERT INTO Main VALUES (?1, ?2);`)
    query.run(data, Date.now())
}

function querydb() {
    const query = db.query(`SELECT * FROM Main;`)
    const data:any = query.all()
    return data
}

function initdb() {
    db.run(`CREATE TABLE Main (
        Data INTERGER,
        Timestamp INTERGER
    );`)
}

function removeEntry(data: { data: number; timestamp: number; }) {
    const query = db.query(`DELETE FROM Main WHERE Data=?1 AND Timestamp=?2`)
    query.run(data.data, data.timestamp)
}