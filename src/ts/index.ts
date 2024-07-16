import { Bootcamp, BootcampProps } from "./models/bootcamp";

const rootElement = document.querySelector('.root')!


function createBootcampTemplate(bootcamp: BootcampProps): string {
    return `
        <div class="bootcamp">
            <h2>${bootcamp.title}</h2>
            <hr>
            <p>${bootcamp.description}</p>
            <p class="courses">${bootcamp.courses.join(' - ')}</p>
            <p>Length of Bootcamp ${bootcamp.length} days</p>
        </div>
    `
}

function renderTemplates(templates: string[], parent: Element): void {
    const templateElement = document.createElement('template')

    for (const t of templates) {
     templateElement.innerHTML += t
    }

    parent.append(templateElement.content)
}


document.addEventListener('DOMContentLoaded', async () => {

    const bootcamps = await Bootcamp.loadAll()
   
    const bootcampTemplates = bootcamps.map(createBootcampTemplate)
    
    renderTemplates(bootcampTemplates, rootElement)

})
