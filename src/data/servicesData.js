import uiux from '../images/icon-ux-1.svg'
import frontend from '../images/icon-frontend.svg'
import logo from '../images/icon-logo.svg'
import { v4 as uuidv4 } from 'uuid'

const servicesData = [
    {
        id: uuidv4(),
        img: uiux,
        title: 'UI UX Design',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?'
    },
    {
        id: uuidv4(),
        img: frontend,
        title: 'Frontend Development',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?'
    },
    {
        id: uuidv4(),
        img: logo,
        title: 'Identity Design',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit?'
    }
]

export default servicesData