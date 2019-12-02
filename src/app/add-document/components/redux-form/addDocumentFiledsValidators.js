import moment from "moment";


const required = value => value ? undefined : 'Required';
const Length = (max,min) => value => value && (value.length > max || value.length < min)? `the name must be between ${min} and ${max} characters` : undefined ;
const nameLength = Length(20,2);
const categoryLength = Length(20,3);
const validateDate = date => date && moment(date).isSameOrBefore(new Date()) ? undefined : 'The date should be before today';
const validateExpiredDate = (date) => date && moment(date).isAfter(validateDate.date) ? undefined : 'The expired date should be after the date of adding this document';
export default {
    required,
    nameLength,
    categoryLength,
    validateDate,
    validateExpiredDate,
    }