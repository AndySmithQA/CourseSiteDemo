import { Bootcamp } from "./models/bootcamp";

document.addEventListener('DOMContentLoaded', async () => {
    const bootcamps = await Bootcamp.loadAll()

    //console.log(bootcamps)
})
