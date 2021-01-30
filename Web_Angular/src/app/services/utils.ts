export class CommonUtils {
    obj?: Object;
    constructor(obj?: Object){
        this.obj = obj;
    }

    checkObjectIsNullOrEmpty(){
        if(this.obj === null){
            return true;
        }

        if(Object.keys(this.obj).length === 0 && this.obj.constructor === Object){
            return true;
        }
        return false;
    } 
}