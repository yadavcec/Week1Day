function launchBrowser(){
    let browserName = "safari"

    if(browserName === "Chrome"){
        console.log("Chrome browser launched")
    }else if(browserName === "Firefox"){
        console.log("Firefox browser launched")
    }else {
        console.log("Select proper browser")
    }
}

function runTest(){
    let testType = "Regression"

    switch(testType){

        case "Integration": 
            console.log("Integration testing required/in-progress")
            break;

        case "Sanity":
            console.log("Sanity testing required/in-progress")
            break;
    
        case "Regression":
            console.log("Regression testing required/ in-progress")
            break;

        default:
            console.log("Smoke testing required/ in-progress")
            break;
    }
}

launchBrowser()
runTest() 
