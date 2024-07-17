import  { DataResource} from '../services/DataResource';

export interface BootcampProps {
    title: string
    description: string
    courses: string[]
    length: number
    code: string
}

export const Bootcamp = new DataResource<BootcampProps>('http://localhost:3000/bootcamps')

