import Avatar1 from '../assets/avataaars/avataaars(1).png';
import Avatar2 from '../assets/avataaars/avataaars(2).png';
import Avatar3 from '../assets/avataaars/avataaars(3).png';
import Avatar4 from '../assets/avataaars/avataaars(4).png';
import Avatar5 from '../assets/avataaars/avataaars(5).png';
import Avatar6 from '../assets/avataaars/avataaars(6).png';
import Avatar7 from '../assets/avataaars/avataaars(7).png';
import Avatar8 from '../assets/avataaars/avataaars(8).png';
import Avatar9 from '../assets/avataaars/avataaars(9).png';
import Avatar10 from '../assets/avataaars/avataaars(10).png';

export const getUserImg = (id) => {
    switch (id) {
        case 1:
            return Avatar1;
        case 2:
            return Avatar2;
        case 3:
            return Avatar3;
        case 4:
            return Avatar4;
        case 5:
            return Avatar5;
        case 6:
            return Avatar6;
        case 7:
            return Avatar7;
        case 8:
            return Avatar8;
        case 9:
            return Avatar9;
        case 10:
            return Avatar10;

        default:return ''
    }
};