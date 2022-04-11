
//------------------------------------------------------------------------------
function demolib_load_script(filename)
{
    const url = filename;

    return new Promise((resolve, reject)=> {
        const script = document.createElement("script");
        script.src   = url;

        script.addEventListener("load", ()=> {
            console.log("Loaded:", url);

            resolve(true);
        });

        document.head.appendChild(script);
        console.log("Loading:", url);
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
