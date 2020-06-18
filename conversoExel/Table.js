class Table{
    constructor(arr){
        this.header = arr[0];

        arr.shift();
        
        this.rows = arr;
    }

    get RowCout(){
        return this.rows.length;
    }
    get HeaderCout(){
        return this.header.length;
    }
}
module.exports = Table;