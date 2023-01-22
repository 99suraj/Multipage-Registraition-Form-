


const fileEl = document.getElementById('file-e1');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    window.location.href = "/next-page.html";
})


fileEl.addEventListener('change', () => {


    const fr = new FileReader();

    fr.readAsDataURL(fileEl.files[0]);

    fr.addEventListener('load', () => {

        const url = fr.result;

        localStorage.setItem('my-img', url);
    });

    // for file 1 selection size
    const fi = document.getElementById('file-e1');
    // Check if any file is selected.
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {

            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));
            // The size of the file.
            if (file >= 4096) {
                document.getElementById('size').innerHTML = " please choose less 4mb";
            }
            else if (file == " ") {
                document.getElementById('size').innerHTML = " please choose file";
            } else if (file < 20) {
                document.getElementById('size').innerHTML = " please choose more 20kb";
            }
            else {
                document.getElementById('size').innerHTML = "successfully selected ";
            }
        }
    }

})

// for second form 
const fileE2 = document.getElementById('file-e2');
const btnm = document.getElementById('btnm'); // btnm

btnm.addEventListener('click', () => {
    window.location.href = "/next-page.html";
})


fileE2.addEventListener('change', () => {


    const fr = new FileReader();

    fr.readAsDataURL(fileE2.files[0]); // fileE1

    fr.addEventListener('load', () => {

        const url = fr.result;

        localStorage.setItem('my-hsc', url);
    });
    // file 2 size check
    const fi = document.getElementById('file-e2');

    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {

            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));

            if (file >= 4096) {
                document.getElementById('size2').innerHTML = " please choose less 4mb";
            }
            else if (file == " ") {
                document.getElementById('size2').innerHTML = " please choose file";
            } 
            else {
                document.getElementById('size2').innerHTML = "successfully choosed ";
            }
        }
    }
    //


})

// for file 3 upload 
const fileE3 = document.getElementById('file-e3'); // file e3
const btnmo = document.getElementById('btnmo'); // btnmo

btnm.addEventListener('click', () => {
    window.location.href = "/next-page.html";
})


fileE3.addEventListener('change', () => {


    const fr = new FileReader();

    fr.readAsDataURL(fileE3.files[0]); // fileE1

    fr.addEventListener('load', () => {

        const url = fr.result;

        localStorage.setItem('my-ssc', url);
    });

    /// for file 3 size sselected 
    const fi = document.getElementById('file-e3');

    if (fi.files.length > 0) {
        for (var i = 0; i <= fi.files.length - 1; i++) {

            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));

            if (file >= 4096) {
                document.getElementById('size3').innerHTML = " please choose less 4mb";
            }
            else if (file == " ") {
                document.getElementById('size3').innerHTML = " please choose file";
            } 
            else {
                document.getElementById('size3').innerHTML = "successfully choosed ";
            }
        }
    }
    ///

})

// form 4 pdf 
const fileE4 = document.getElementById('file-e4'); // file e4
const btnmop = document.getElementById('btnmop'); // btnmop

btnm.addEventListener('click', () => {
    window.location.href = "/next-page.html";
})


fileE4.addEventListener('change', () => {


    const fr = new FileReader();

    fr.readAsDataURL(fileE4.files[0]); // fileE1

    fr.addEventListener('load', () => {

        const url = fr.result;

        localStorage.setItem('my-semester', url);
    });

    /// for file 4 size cjheck 
    const fi = document.getElementById('file-e4');

    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {

            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));

            if (file >= 10240) {
                document.getElementById('size4').innerHTML = " please choose less 4mb";
            }
            else if (file == " ") {
                document.getElementById('size4').innerHTML = " please choose file";
            } 
            else {
                document.getElementById('size4').innerHTML = "successfully choosed ";
            }
        }
    }
    ///

    

})


/* document.getElementById('submission').addEventListener('click', move);
    function move() {
        //  window.location.assign("thank.html");
        alert("your form is submitted ");
    }
    */
     // move to submit the form finally 




