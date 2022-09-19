function curriedAdd(total) {
    if(!total){
        return 0
    }

    return function adderFunc(num){
        if(!num){
            return total
        } else{
            total += num;
        }
        return adderFunc;
    }
}

module.exports = { curriedAdd };
