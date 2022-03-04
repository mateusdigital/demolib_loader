
//------------------------------------------------------------------------------
function demolib_load_script(filename)
{
    const url = "/modules/demos/starfield/" + filename;

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
async function demolib_load_all_scripts(script_filenames) {
    const promises = [];
    for(let i = 0; i < script_filenames.length; ++i) {
        const filename = script_filenames[i];
        const promise  = demolib_load_script(filename);
        promises.push(promise);
    }

    const result = await Promise.all(promises);
    return result;
};
