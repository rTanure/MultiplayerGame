import apiSettings from "./settings"
import axios from 'axios'
import { serverData } from "../data/serverData"

const APIUrl = apiSettings.apiSettings.url
        
class Api{
    public getData(func: Function) {
        const APIRoute = "/getData"

        const url = APIUrl + APIRoute

        axios.get(url)
            .then((response)=> response.data)
            .then(data => {
                func(data)
                serverData.update(data)
            })
            .catch((error)=> console.error(error))
    }

    public checkUpdate() {
        const APIRoute = "/checkUpdate/"
        const date = serverData.lastDate()

        const url = APIUrl + APIRoute + date

        axios.get(url)
            .then((response)=> response.data)
            .then((data)=>{
                setTimeout(() => {
                    this.checkUpdate()
                }, 200);
                serverData.appendData(data)
            })
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