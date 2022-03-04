
//------------------------------------------------------------------------------
function demolib_load_script(filename, path_prefix = "/")
{
    const url = (path_prefix + filename).replace("//","/");

    return new Promise((resolve, reject)=> {
        const script = document.createElement("script");
        script.src = url;

        script.addEventListener("load", ()=> {
            resolve(true);
        });
        console.log("Loaded:", url);
        document.head.appendChild(script);
    });
}

//------------------------------------------------------------------------------
async function demolib_load_all_scripts(script_filenames, path_prefix) {
    const promises = [];
    for(let i = 0; i < script_filenames.length; ++i) {
        const filename = script_filenames[i];
        const promise  = demolib_load_script(filename, path_prefix);
        promises.push(promise);
    }

    const result = await Promise.all(promises);
    return result;
};
