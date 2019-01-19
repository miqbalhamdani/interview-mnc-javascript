const str = "MISTERALADIN";
const res = str.split("");
const first = true;
const count = 0;
const back  = 0;
const now   = 0

while(res.length != 0) {
    if (first) {
        first = false;
        document.write(res[count]);
        res.splice(count, 1);
    } else if (res.length == 1) {
        document.write(res[0]);
        res.splice(0, 1);
    } else {
        count=(count+3)-back;
        if (res.length <= count) {
            now   = count - res.length;
            count = now;

            document.write(res[count]);			
            res.splice(count, 1);
        } else {
            document.write(res[count]);			
            res.splice(count, 1);
        }
    }
}