export default function handleUtils() {

    function equalsCheck(a,b) {
        return JSON.stringify(a[0]=","+a[1]) === JSON.stringify(b[0]=","+b[1])
    }

    function equalsCheckTrue(a, b) {
        // check the length
        if (a.length != b.length) {
            return false;
        } else {
            let result = false;

            // comparing each element of array 
            for (let i = 0; i < a.length; i++) {

                if (a[i] !== b[i]) {
                    return false;
                } else {
                    result = true;
                }
            }
            return result;
        }
    }

    return {
        equalsCheckTrue,
        equalsCheck
    }
}