import * as database from "$lib/index";

export function load() {
    const result = database.querydb()
    return {result}
}

export const actions = {
    add: async ({request}:any) => {
        const data = await request.formData()
        const insertiondata = ~~(data.get('data'))
        database.insertData(insertiondata)
    },
    delete: async ({request}:any) => {
        const data = await request.formData()
        const deletiondata = data.get('data')
        const deletiontimestamp = data.get('timestamp')
        const tempObj = {data:deletiondata, timestamp:deletiontimestamp}
        database.removeEntry(tempObj)
    }

};