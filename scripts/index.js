const uaup = require("uaup-js")

const defaultStages = {
    Checking: "Checking for update...",
    Found: "Update found",
    NotFound: "No Update found",
    Downloading: "Downloading...",
    Unzipping: "Installing...",
    Cleaning: "Finalizing...",
    Launch: "Launching..."
}

const updateOptions = {
    gitRepo: "auto-updator",
    gitUsername: "ca-darkness",
    
    appName: "auto-updator",
    appExecutableName: "auto-updator.exe",

    progressBar: document.getElementById("download"),
    label: document.getElementById("download-label"),
    stageTitles: defaultStages,
}

uaup.Update(updateOptions)