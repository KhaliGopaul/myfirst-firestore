// PROMISES EXAMPLE:
    function makeBurger() {
        return getBeef()
        .then(beef => cookBeef(beef))
        .then(patty => getBuns(patty))
        .then(buns, patty => putBeefBetweenBuns(buns,patty))
    }
    makeBurger(). then(burger => ServiceWorker(burger))

    // .catch() Example
    // Promises can return results... They can also return errors...
    // we need to handle both 

    chooseToppings()
    .then(placeOrder)
    .then(pickupOrder)
    .then(eat)
    .catch(failureCallback)

