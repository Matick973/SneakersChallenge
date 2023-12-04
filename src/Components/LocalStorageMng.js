    export function SetLocalStorage (value) {
    
        try {
            if (value)
            window.localStorage.setItem("Product" ,JSON.stringify({name: "Fall Limited Edition Sneakers", quantity: (value)}))
            else 
            console.log("Quantity must be more than 1")
        }

        catch (err){
            console.log(err)
        }

        return SetLocalStorage
    }
    
    
    export function GetLocalStorage () {
        try {
           const item = window.localStorage.getItem("Product")
            if (item) {
                console.log(JSON.parse(item)) 
            }
        }

        catch (err){
            console.log(err)
        }

        return GetLocalStorage
    }
    
    
    export function RemoveLocalStorage () {
        try {
            window.localStorage.removeItem()
        }

        catch (err){
            console.log(err)
        }

        return RemoveLocalStorage
    }

    //https://www.youtube.com/watch?v=SOnMln3W0U8&ab_channel=NetNinja
    //https://www.youtube.com/watch?v=1uiNxQIpcLU&ab_channel=CosdenSolutions