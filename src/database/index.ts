import {PrismaClient} from "@prisma/client"

const database = new PrismaClient({
    log: ['query','error','info','warn'],
})

export {database};