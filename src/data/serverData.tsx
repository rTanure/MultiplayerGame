import { drawLine } from "../scripts/draw/drawLine"

class ServerData {
    public last = []

    public update(data: object) {
        this.last = data
    }

    public lastDate(){
        if(this.last.length > 0) {
            return this.last[this.last.length - 1].time
        }
    }

    public appendData(data){
        // console.log(this.last[this.last.length -1].time)
        // console.log(data.data[0].time)
        if(data.data.length > 0) {
            if(data.data[0].time > this.last[this.last.length -1].time) {
                this.last.push(data.data[0])
                drawLine.full(data.data[0])
            }
        }
        
    }

    private checkIfExist(data) {
        
    }
}

export const serverData = new ServerData()