function startProgram(waitTime, programName, program) {
    console.log("*** Starting " + programName + " in " + waitTime + " seconds. ***");

    setTimeout(()=> {
        console.log("*** Starting " + programName + " ***");
        program();

    },waitTime * 1000);
}

module.exports.startProgram=startProgram;
