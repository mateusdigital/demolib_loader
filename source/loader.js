//------------------------------------------------------------------------------
function demolib_load_script(dirname, filename) {
    const url = (dirname + "/" + filename).replace("//","/");

    return new Promise((resolve, reject)=> {
        const last_dot  = filename.lastIndexOf(".");
        const extension = filename.substring(last_dot);

        let elem = null;
        if(extension == ".js") {
            elem = document.createElement("script");
            elem.src = url;
        } else if(extension == ".css") {
            elem = document.createElement("link");
            elem.rel = "stylesheet";
            elem.href= url
        }

        elem.addEventListener("load", ()=> {
            console.log("Loaded:", url);
            resolve(true);
        });

        console.log("Loading:", url);
        document.head.appendChild(elem);
    });
}

//------------------------------------------------------------------------------
async function demolib_load_all_scripts(dirname, script_filenames) {
    const promises = [];
    for(let i = 0; i < script_filenames.length; ++i) {
        const filename = script_filenames[i];
        const promise  = demolib_load_script(dirname, filename);
        promises.push(promise);
    }

    const result = await Promise.all(promises);
    return result;
};
