module.exports = function getZerosCount(number, base) {
    let maxSM = 0;
    let degree = 0;

    searchSM(base);

    function searchSM(baseNum) {
        let arr = [];
        for(let i = 2; i <= base; i++){
            if(baseNum === i) {
                arr.push(i);
                break;
            }
            if (baseNum % i === 0) {
                arr.push(i);
                baseNum = baseNum /i;
                i--;
            }
        }

        maxSM = Math.max.apply(null, arr);

        for(let i = 0; i < arr.length; i++) {
            if (arr[i] === maxSM){
                degree++
            }
        }
    }


    let zeroes = 0;
    while(number > 0) {
        number = Math.floor(number/maxSM);
        zeroes += number;
    }
    return Math.floor(zeroes/degree);

};
