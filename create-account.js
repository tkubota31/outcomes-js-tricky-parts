function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputPin){
            if(inputPin ===pin){
                return `$${amount}`
            } else{
                return `Invalid PIN.`
            }
        },

        deposit(inputPin,depositAmount){
            if(inputPin === pin){
                amount += depositAmount;
                return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`
            } else{
                return `Invalid PIN.`
            }
        },

        withdraw(inputPin,withdrawalAmount){
            if(inputPin ===pin){
                if(amount > withdrawalAmount){
                    amount -= withdrawalAmount;
                    return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`
                } else{
                    return `Withdrawal amount exceeds account balance. Transaction cancelled.`
                }
            } else{
                return `Invalid PIN.`
            }
        },

        changePin(oldPin, inputPin){
            if(oldPin ===pin){
                pin = inputPin
                return `PIN successfully changed!`
            } else{
                return `Invalid PIN.`
            }
        }
    }
}

module.exports = { createAccount };
