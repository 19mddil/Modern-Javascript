{
    function makeCounter() {
        let cnt = 0;
        function counter() {
            return cnt++;
        }
        //A super user of function property and closure
        counter.set = value => cnt = value;
        counter.increase = () => ++cnt;
        counter.decrease = () => --cnt;
        return counter;
    }
    let c = makeCounter();///uffff now I understand
    console.log(c());
    console.log(c());
    console.log(c());
    console.log(c.set(10));
    console.log(c.increase());
    console.log(c.decrease());
}
{
    function makeCounter() {
        let count = 0;
        function counter() {
            return counter.count++;
        }
        //A super user of function property and closure
        counter.count = 0;
        counter.set = value => counter.count = value;
        counter.increase = () => ++counter.count;
        counter.decrease = () => --counter.count;
        return counter;
    }

    let c = makeCounter();///uffff now I understand
    console.log(c());
    console.log(c());
    console.log(c());
    console.log(c.set(10));
    console.log(c.increase());
    console.log(c.decrease());
}