class DateHelper {

    constructor() {
        throw new Error('DateHelper nao pode ser instanciada');
    }

    static dateToText(data) {
        // return data.getDate() 
        //     + '/' + (data.getMonth() + 1)
        //     + '/' +  data.getFullYear();

        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;  
    }
    
    static textToDate(text) {

        if(!/\d{4}-\d{2}-\d{2}/.test(text))
            throw new Error('O formato valido é yyyy-mm-dd');

        return new Date(...text
            .split('-')
            .map((item, indice) => item - indice % 2));
    }
}