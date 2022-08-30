import apiSettings from "./settings"
import axios from 'axios'
import drawingData from "../data/drawingData"


const APIUrl = apiSettings.apiSettings.url
        
class Api{
    public getData(func: Function) {
        const APIRoute = "/getData"

        const url = APIUrl + APIRoute

        axios.get(url)
            .then((response)=> response.data)
            .then(data => {
                func(data)
            })
    }

    public checkUpdate() {
        const APIRoute = "/checkUpdate/"
        const date = Date.now()

        const url = APIUrl + APIRoute + date
        axios.get(url)
            .then((response)=> response.data)
            .then((data)=> {})
    }

    public appendDrawToServer(data: object, color: string) {
        const APIRoute = "/appendLine"
    
        const url = APIUrl + APIRoute
    
        const finalData = {
            "color": color,
            "coords": data
        }
    
        axios.post(url, finalData)
            .then((response)=> response.data)
            .catch((error)=> console.error(error))
    }

    
}

export const api = new Api()