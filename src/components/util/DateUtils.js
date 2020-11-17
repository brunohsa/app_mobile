import { format } from 'date-fns';

const FORMATO_DATA_DD_MM_YYYY = 'dd/MM/yyyy'

let DateUtils = {

    getDataFormatada(data) {
        return format(data, FORMATO_DATA_DD_MM_YYYY)
    }

}

export default DateUtils